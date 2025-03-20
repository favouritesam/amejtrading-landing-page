"use client"

import { Box, Container, Heading, Button, Image } from "@chakra-ui/react"

export default function CallToAction() {
    return (
        <Box position="relative" w="100%" h="60vh">

            <Image
                position="absolute"
                top="0"
                left="0"
                w="100%"
                h="100%"
                bgImage="url('/img/cc.jpg')"
                bgSize="cover"
                bgPosition="top"
                bgRepeat="no-repeat"
                objectFit="cover"
            />

            <Box
                position="absolute"
                top="0"
                left="0"
                w="100%"
                h="100%"
                bg="rgba(0, 0, 0, 0.5)"
            />

            <Container
                position="absolute"
                top="50%"
                left="50%"
                transform="translate(-50%, -50%)"
                textAlign="center"
                maxW="container.lg"
            >
                <Box
                    bg="rgba(94, 19, 19, 0.8)"
                    borderRadius="lg"
                    px={{ base: 6, md: 10 }}
                    py={{ base: 6, md: 8 }}
                    display="inline-block"
                >
                    <Heading
                        as="h1"
                        color="#ffffff"
                        fontSize={{ base: "2xl", md: "3xl", lg: "4xl" }}
                        fontWeight="bold"
                    >
                        Learn To Trade. Trade Smart.<br /> Earn More.
                    </Heading>

                    <Button
                        mt={4}
                        bg="#a90100"
                        color="#ffffff"
                        fontSize="14px"
                        fontWeight={400}
                        px={6}
                        py={3}
                        borderRadius="full"
                        _hover={{ bg: "white",color:"#a90100" }}
                    >
                        Start For Free Today.
                    </Button>
                </Box>
            </Container>
        </Box>

    )
}
