import type { AppProps } from 'next/app';
import { QueryClient, QueryClientProvider } from 'react-query';
import { ReactQueryDevtools } from 'react-query/devtools';

import { Navbar } from '../components/global/Navbar';
import '../styles/globals.css';

function MyApp({ Component, pageProps }: AppProps) {
  const queryClient = new QueryClient();

  return (
    <QueryClientProvider client={queryClient}>
      <Navbar>
        <Component {...pageProps} />
      </Navbar>
      <ReactQueryDevtools />
    </QueryClientProvider>
  );
}

export default MyApp;
