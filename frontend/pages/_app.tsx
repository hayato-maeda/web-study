import "../styles/globals.css";
import type { AppProps } from "next/app";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import SearchAppBar from "../pages/constant/header";

const queryClient = new QueryClient({
  defaultOptions: {
    queries: {
      retry: false,
      refetchOnWindowFocus: false,
      cacheTime: Infinity,
      staleTime: Infinity,
      useErrorBoundary: true,
    },
  },
});

function MyApp({ Component, pageProps }: AppProps) {
  return (
    <QueryClientProvider client={queryClient}>
      <SearchAppBar />
      <Component {...pageProps} />
      {/* </SearchAppBar> */}
    </QueryClientProvider>
  );
}

export default MyApp;
