import { useQuery } from 'react-query';
import styles from '@/styles/styles';
type Post = {
  node: {
    title: string;
    brief: string;
    url: string;
  };
};

type Publication = {
  isTeam: boolean;
  title: string;
  posts: {
    edges: Post[];
  };
};

type Data = {
  data:{
  publication: Publication;
  }
};


const fetchData = async () => {
  const response = await fetch('https://gql.hashnode.com/', {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
      'Authorization': `Bearer ${process.env.NEXT_PUBLIC_ACCESS_TOKEN}`,
    },
    body: JSON.stringify({
          query: `
        query Publication {
          publication(host: "od.hashnode.dev") {
            isTeam
            title
            posts(first: 3) {
              edges {
                node {
                  title
                  brief
                  url
                }
              }
            }
          }
        }
      `,
    })
});

  const data = await response.json();
  return data;
};

const Articles = () => {
  const { data, isLoading, isError } = useQuery<Data>('myData', fetchData);
  if (isLoading) {
    return <div className='flex justify-center items-center'></div>;
  }
  if (isError) {
    return <div>Error fetching blog posts</div>;
  }

const getRandomPost = () => {
  const publication = data?.data.publication;  
  if (!publication) {
    console.error('Publication data is missing.');
    return null;
  }

  const { posts } = publication;
  
  if (!posts || !posts.edges || posts.edges.length === 0) {
    console.error('Posts data is missing or empty.');
    return null;
  }
  const randomIndex = Math.floor(Math.random() * posts.edges.length);
  if (randomIndex < 0 || randomIndex >= posts.edges.length) {
    console.error('Invalid random index:', randomIndex);
    return null;
  }

  return posts.edges[randomIndex]?.node;
};

const randomPost = getRandomPost();
  return (
    <div className='flex flex-col'>
      {randomPost && (
        <>
          <h1 className=' text-base font-semibold'>{randomPost.title}</h1>
          <p className=' mt-4 text-sm leading-7'>{randomPost.brief}</p>
          <a className=' mt-4 text-sm' href={randomPost.url} target="_blank" rel="noopener noreferrer">
            Read more
          </a>
        </>
      )}
    </div>
  );
};

export default Articles;