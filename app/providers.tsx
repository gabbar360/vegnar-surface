"use client";

import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { useState } from "react";
import PageLoader from "@/components/PageLoader";
import { usePageLoader } from "@/hooks/usePageLoader";

function AppContent({ children }: { children: React.ReactNode }) {
  const { isLoading } = usePageLoader();

  return (
    <>
      {isLoading && <PageLoader />}
      {children}
    </>
  );
}

export function Providers({ children }: { children: React.ReactNode }) {
  const [queryClient] = useState(() => new QueryClient({
    defaultOptions: {
      queries: {
        staleTime: 60 * 1000, // 1 minute
      },
    },
  }));

  return (
    <QueryClientProvider client={queryClient}>
      <AppContent>
        {children}
      </AppContent>
    </QueryClientProvider>
  );
}
