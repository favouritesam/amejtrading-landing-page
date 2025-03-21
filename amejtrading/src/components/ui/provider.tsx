"use client"

import { ChakraProvider, extendTheme } from "@chakra-ui/react"
import { ColorModeProvider } from "./color-mode"

const theme = extendTheme({})

export function Provider({ children }: { children: React.ReactNode }) {
  return (
    <ChakraProvider theme={theme}>
      <ColorModeProvider>{children}</ColorModeProvider>
    </ChakraProvider>
  )
}
