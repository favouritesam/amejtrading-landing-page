import { Box, Container, Heading, Button, Stack } from "@chakra-ui/react"

export function CallToAction() {
    return (
        <Box
            as="section"
            position="relative"
            py={20}
            bg="gray.900"
            color="white"
            backgroundImage="url('/placeholder.svg?height=800&width=1600')"
            backgroundSize="cover"
            backgroundPosition="center"
        >
            <Box position="absolute" top={0} left={0} right={0} bottom={0} bg="rgba(0,0,0,0.7)" zIndex={1} />

            <Container maxW="container.lg" position="relative" zIndex={2} textAlign="center">
                <Stack gap={6} align="center">
                    <Heading as="h2" fontSize={{ base: "3xl", md: "5xl" }} lineHeight={1.2}>
                        Learn To Trade. Trade Smart.
                        <br />
                        Earn More.
                    </Heading>

                    <Button
                        bg="red.600"
                        color="white"
                        size="lg"
                        px={8}
                        py={6}
                        fontSize="md"
                        fontWeight="bold"
                        _hover={{ bg: "red.700" }}
                        borderRadius="full"
                    >
                        Start For Free Today.
                    </Button>
                </Stack>
            </Container>
        </Box>
    )
}

