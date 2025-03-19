"use client"
import type React from "react"

import { ChakraProvider,extendTheme} from "@chakra-ui/react";
import createCache from "@emotion/cache";
import {CacheProvider} from "@emotion/react";

const theme = extendTheme({
    colors: {
        red: {
            500: "#e53e3e",
            600: "#e00",
            700: "#c00",
        },
    },
    fonts: {
        heading: "var(--font-inter)",
        body: "var(--font-inter)",
    },
    styles: {
        global: {
            "html, body": {
                background: "var(--background)",
                color: "var(--foreground)",
            },
        },
    },
});


const emotionCache = createCache({ key: "chakra" });

export function Providers({ children }: { children: React.ReactNode }) {
    return (
        <CacheProvider value={emotionCache}>
            <ChakraProvider theme={theme}>{children}</ChakraProvider>
        </CacheProvider>
    );
}


