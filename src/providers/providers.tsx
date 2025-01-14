"use client";

import { ChakraProviders } from "./chakraProviders";

export function Providers({ children }: { children: React.ReactNode }) {
    return (
        <ChakraProviders>
            {children}
        </ChakraProviders>
    )
}