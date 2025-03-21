"use client"

import { Portal, Stack, useToast, Button } from "@chakra-ui/react"

export default function ToastExample() {
  const toast = useToast() // Chakra UI's toast hook

  return (
    <Portal>
      <Stack spacing={3} position="fixed" bottom="4" right="4">
        <Button
          onClick={() =>
            toast({
              title: "Notification",
              description: "This is a test toast message.",
              status: "success",
              duration: 3000,
              isClosable: true,
            })
          }
        >
          Show Toast
        </Button>
      </Stack>
    </Portal>
  )
}
