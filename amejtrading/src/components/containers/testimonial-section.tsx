"use client"

import {useEffect, useState } from "react"
import { Box, Flex,Image, Text, Heading, Container, VStack, HStack } from "@chakra-ui/react"
import { StarIcon } from "@chakra-ui/icons"

interface TestimonialProps {
    quote: string
    name: string
    image: string
}

const testimonials: TestimonialProps[] = [
    {
        quote:
            "I started with zero knowledge, but the academy’s step-by-step training made everything so easy. Highly recommended!",
        name: "Grace E.",
        image: "/img/guysuite.jpg",
    },
    {
        quote:
            "Amejtrading transformed my trading journey! Their mentorship helped me go from a beginner to making consistent profits.",
        name: "Chidi O.",
        image: "/img/boyblue.jpg",
    },
    {
        quote:
            "I joined a webinar out of curiosity, and it changed my life! I now understand the market better and make informed trades.",
        name: "Emeka K.",
        image:"/img/guysuite.jpg",
    },
    {
        quote: "The mentorship program gave me direct access to experts who guided me every step of the way. Best decision ever!",
        name: "Aisha M..",
        image: "/img/femaleBoss.jpg",
    },
    {
        quote: "From struggling to understand charts to now managing my own portfolio successfully. Thank you!",
        name: "David M.",
        image: "/img/guysuite.jpg",
    },
    {
        quote: "The training sessions are top-notch! I learned strategies that actually work, and now I trade with confidence.",
        name: "Fatima A.",
        image: "/img/femaleBoss.jpg",
    },
]

export default function TestimonialSection() {
    const [activeIndex, setActiveIndex] = useState(0)


    useEffect(() => {
        const interval = setInterval(() => {
            setActiveIndex((prevIndex) => (prevIndex + 1) % testimonials.length);
        }, 4000);

        return () => clearInterval(interval);
    }, []);

    return (
        <Container maxW="container.xl" py={{ base: 10, md: 16 }}>
            <Box mb={8}>
                <Text color="red.600" fontWeight="bold" fontSize="sm" textTransform="uppercase" mb={2}>
                    TESTIMONIAL
                </Text>
                <Heading as="h2" fontSize={{ base: "2xl", md: "3xl", lg: "4xl" }} color="gray.800" fontWeight="bold" mb={4}>
                    Client Feedback & Success Stories
                </Heading>
                <Box w={{ base: "100%", md: "90%", lg: "50%" }} h="1px" bg="gray.200" my={4} />
            </Box>

            <Flex direction={{ base: "column", lg: "row" }} gap={{ base: 8, lg: 10 }} align="stretch">
                <Box w={{ base: "100%", lg: "50%" }} display="flex" flexDirection="column" justifyContent="center">
                    <Flex direction={{ base: "column", md: "row" }} gap={{ base: 8, md: 6 }} mb={{ base: 8, md: 0 }}>
                        <VStack align={{ base: "center", md: "center" }} w={{ base: "100%", md: "50%" }} spacing={4}>
                            <Box
                                position="relative"
                                borderRadius="full"
                                overflow="hidden"
                                w={{ base: "120px", md: "100px" }}
                                h={{ base: "120px", md: "100px" }}
                            >
                                <Image
                                    src={testimonials[activeIndex].image || "/placeholder.svg?height=100&width=100"}
                                    alt={testimonials[activeIndex].name}
                                    width={100}
                                    height={100}
                                    style={{ objectFit: "cover", width: "100%", height: "100%" }}
                                />

                            </Box>
                            <Text textAlign="center" fontSize={{ base: "sm", md: "md" }} px={{ base: 4, md: 0 }}>
                                {testimonials[activeIndex % 2 === 0 ? 0 : 1].quote}
                            </Text>
                            <Text color="red.600" fontWeight="medium" fontSize={{ base: "sm", md: "md" }}>
                                {testimonials[activeIndex % 2 === 0 ? 0 : 1].name}
                            </Text>
                        </VStack>

                        <VStack align={{ base: "center", md: "center" }} w={{ base: "100%", md: "50%" }} spacing={4}>
                            <Box
                                position="relative"
                                borderRadius="full"
                                overflow="hidden"
                                w={{ base: "120px", md: "100px" }}
                                h={{ base: "120px", md: "100px" }}
                            >
                                <Image
                                    src={testimonials[activeIndex % 2 === 0 ? 1 : 2].image || "/placeholder.svg?height=100&width=100"}
                                    alt={testimonials[activeIndex % 2 === 0 ? 1 : 2].name}
                                    width={100}
                                    height={100}
                                    style={{ objectFit: "cover", width: "100%", height: "100%" }}
                                />
                            </Box>
                            <Text textAlign="center" fontSize={{ base: "sm", md: "md" }} px={{ base: 4, md: 0 }}>
                                {testimonials[activeIndex % 2 === 0 ? 1 : 2].quote}
                            </Text>
                            <Text color="red.600" fontWeight="medium" fontSize={{ base: "sm", md: "md" }}>
                                {testimonials[activeIndex % 2 === 0 ? 1 : 2].name}
                            </Text>
                        </VStack>
                    </Flex>

                    <HStack justify="center" spacing={2} mt={{ base: 4, md: 8 }}>
                        {testimonials.map((_, index) => (
                            <Box
                                key={index}
                                w={index === activeIndex ? "10px" : "8px"}
                                h={index === activeIndex ? "10px" : "8px"}
                                borderRadius="full"
                                bg={index === activeIndex ? "gray.800" : "gray.300"}
                                cursor="pointer"
                                onClick={() => setActiveIndex(index)}
                                transition="all 0.2s"
                            />
                        ))}
                    </HStack>
                </Box>

                <Box position="relative"
                     w={{ base: "100%", lg: "50%" }}
                     borderRadius="xl"
                     overflow="visible"
                >
                    <Box position="relative" w="100%" h={{ base: "300px", md: "400px", lg: "100%" }}>
                        <Image src="/img/men.jpg" alt="Event photo" objectFit="cover" w="100%" h="100%" borderRadius="xl"/>

                        <Box position="absolute"
                             bottom="50px"
                             right="-40px"
                             zIndex={2}
                             bg="white"
                             borderRadius="xl"
                             boxShadow="xl"
                             w="200px"
                             transform="translateY(-50px)"
                        >
                            <VStack spacing={2} p={4}>
                                <Text color="red.600" fontSize="3xl" fontWeight="bold">
                                    4.8+
                                </Text>
                                <Box>
                                    {[...Array(5)].map((_, i) => (
                                        <StarIcon key={i} color={i < 4 ? "orange.400" : "orange.200"} w={4} h={4} />
                                    ))}
                                </Box>
                                <Text fontSize="sm" fontWeight="medium">
                                    2,471 Reviews
                                </Text>
                                <Box bg="#e60026" color="white" fontSize="xs" py={1} px={2} borderRadius="15px" textAlign="center">
                                    Excellent Score
                                </Box>
                            </VStack>

                            <Flex
                                bg="#a90100"
                                color="white"
                                fontSize="12px"
                                fontWeight={300}
                                align="center"
                                justify="center"
                                py={4}
                                w="100%"
                                borderRadius="0 0 12px 12px"
                                cursor="pointer"
                                _hover={{ bg: "#0b2735" }}
                            >
                                All Reviews
                            </Flex>
                        </Box>
                    </Box>
                </Box>
            </Flex>
        </Container>
    )
}

