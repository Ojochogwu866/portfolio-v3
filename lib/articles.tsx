import { useQuery } from 'react-query';

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
  publication: Publication;
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
          publication(host: "blog.developerdao.com") {
            isTeam
            title
            posts(first: 10) {
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
    return <div>Loading...</div>;
  }
  if (isError) {
    return <div>Error fetching data</div>;
  }

  const getRandomPost = () => {
    const { posts } = data?.publication || { posts: { edges: [] } };
    const randomIndex = Math.floor(Math.random() * posts.edges.length);
    return posts.edges[randomIndex]?.node;
  };

  const randomPost = getRandomPost();
  return (
    <div className='flex'>
      {randomPost && (
        <>
          <h1>{randomPost.title}</h1>
          <p>{randomPost.brief}</p>
          <a href={randomPost.url} target="_blank" rel="noopener noreferrer">
            Read more
          </a>
        </>
      )}
    </div>
  );
};

export default Articles;