"use client"
import React, { ReactNode } from "react";
import { QueryClientProvider, QueryClient } from '@tanstack/react-query';

interface ProvidersProps {
    children: ReactNode;
}

const QueryProvider = ({ children }: ProvidersProps) => {
    const query = new QueryClient();

    return <QueryClientProvider client={query}>
        {children}
    </QueryClientProvider>

}

export default QueryProvider;