"use client"

import { Box, Container, Heading, Text, Button, Flex } from "@chakra-ui/react"
import Link from "next/link"

export function HeroSection() {
    return (
        <Box position="relative" height={{ base: "90vh", md: "100vh" }} width="100%" overflow="hidden">
            {/* Video Background */}
            <Box
                as="video"
                position="absolute"
                top="0"
                left="0"
                width="100%"
                height="100%"
                objectFit="cover"
                zIndex="0"
                autoPlay
                muted
                loop
                playsInline
            >
                <source src="/placeholder-video.mp4" type="video/mp4" />
                Your browser does not support the video tag.
            </Box>

            {/* Dark Overlay */}
            <Box position="absolute" top="0" left="0" width="100%" height="100%" bg="rgba(0,0,0,0.7)" zIndex="1" />

            {/* Content */}
            <Container maxW="container.xl" height="100%" position="relative" zIndex="2" px={{ base: 4, md: 6 }}>
                <Flex
                    direction="column"
                    height="100%"
                    justifyContent="center"
                    alignItems="center"
                    textAlign="center"
                    pt={{ base: "80px", md: "0" }}
                >
                    <Text color="red.600" fontWeight="bold" fontSize={{ base: "xl", md: "2xl" }} mb={4}>
                        Your Trusted Forex Partner
                    </Text>

                    <Heading
                        as="h1"
                        fontSize={{ base: "3xl", md: "5xl", lg: "6xl" }}
                        lineHeight="1.2"
                        color="white"
                        maxW="4xl"
                        mb={6}
                    >
                        Unbox your first gift – a complete guide to the global financial market trading.
                    </Heading>

                    <Text fontSize={{ base: "md", md: "lg" }} color="gray.200" maxW="2xl" mb={8}>
                        Learn Forex Basics with Experts, Beginner-Friendly courses!
                        <br />
                        Master fundamentals, market strategies, and risk management—completely free!
                    </Text>

                    <Button
                        as={Link}
                        href="#join-training"
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
                        Join The Training Now
                    </Button>
                </Flex>
            </Container>
        </Box>
    )
}

