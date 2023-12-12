import React from 'react';
import { QueryClient, QueryClientProvider } from 'react-query';
import Articles from '@/lib/articles';


const queryClient = new QueryClient();

const ArticlesEcrits = ({}) => {
  return (
    <QueryClientProvider client={queryClient}>
        <Articles/>
    </QueryClientProvider>
  );
};

export default ArticlesEcrits;


