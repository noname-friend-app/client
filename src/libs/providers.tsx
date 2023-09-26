import { Center, Text } from "@chakra-ui/react";
import {
  QueryClient,
  QueryClientProvider,
  QueryErrorResetBoundary,
} from "@tanstack/react-query";
import { useState } from "react";
import { ErrorBoundary } from "react-error-boundary";
import Button from "../components/Button";

const Providers = ({ children }: { children: React.ReactNode }) => {
  const [queryClient] = useState(
    () =>
      new QueryClient({
        defaultOptions: {
          queries: {
            retry: 0,
            suspense: true,
            gcTime: 0,
          },
        },
      })
  );
  return (
    <QueryClientProvider client={queryClient}>
      <QueryErrorResetBoundary>
        {({ reset }) => (
          <ErrorBoundary
            onReset={reset}
            fallbackRender={({ error, resetErrorBoundary }) => (
              <Center w="100%" h="100vh">
                <Text>Something went wrong! </Text>
                <Button onClick={() => resetErrorBoundary()}>Try Again</Button>
                <Text style={{ whiteSpace: "normal" }}>{error.message}</Text>
              </Center>
            )}
          >
            {children}
          </ErrorBoundary>
        )}
      </QueryErrorResetBoundary>
    </QueryClientProvider>
  );
};

export default Providers;
