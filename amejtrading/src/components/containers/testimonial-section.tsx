import { useEffect, useState } from "react"
import { Box, Flex, Image, Text, Heading, Container, VStack, HStack } from "@chakra-ui/react"
import { StarIcon } from "@chakra-ui/icons"
import { motion } from "framer-motion"

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
        image: "/img/guysuite.jpg",
    },
    {
        quote: "The mentorship program gave me direct access to experts who guided me every step of the way. Best decision ever!",
        name: "Aisha M.",
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
            setActiveIndex((prevIndex) => (prevIndex + 2) % testimonials.length);
        }, 4000);

        return () => clearInterval(interval);
    }, []);

    return (
        <Container maxW="container.xl" py={{ base: 10, md: 16 }} mt="8%">
            <Box mb={8}>
                <Text color="red.600" fontWeight="bold" fontSize="sm" textTransform="uppercase" mb={2}>
                    TESTIMONIAL
                </Text>
                <Heading as="h2" fontSize={{ base: "1xl", md: "2xl", lg: "3xl" }} color="gray.800" fontWeight={500} mb={4}>
                    Client Feedback & Success Stories
                </Heading>
                <Box w={{ base: "100%", md: "90%", lg: "50%" }} h="1px" bg="gray.200" my={4} />
            </Box>

            <Flex direction={{ base: "column", lg: "row" }} gap={{ base: 8, lg: 10 }} align="stretch">
                <Box w={{ base: "100%", lg: "50%" }} display="flex" flexDirection="column" justifyContent="center">
                    <Flex direction={{ base: "column", md: "row" }} gap={{ base: 8, md: 6 }} mb={{ base: 8, md: 0 }}>
                        {/* First Testimonial Card */}
                        <motion.div
                            key={activeIndex}
                            initial={{ opacity: 0, x: -50 }}
                            animate={{ opacity: 1, x: 0 }}
                            exit={{ opacity: 0, x: 50 }}
                            transition={{ duration: 0.6, ease: "easeOut" }}
                            style={{ width: "100%" }}
                        >
                            <VStack
                                align="center"
                                w="100%"
                                spacing={4}
                                bg="gray.100"
                                p={6}
                                borderRadius="xl"
                                boxShadow="lg"
                            >
                                <Box
                                    position="relative"
                                    borderRadius="full"
                                    overflow="hidden"
                                    w="120px"
                                    h="120px"
                                >
                                    <Image
                                        src={testimonials[activeIndex].image}
                                        alt={testimonials[activeIndex].name}
                                        objectFit="cover"
                                        w="100%"
                                        h="100%"
                                    />
                                </Box>
                                <Text textAlign="center" fontSize={{ base: "sm", md: "md" }} px={4}>
                                    {testimonials[activeIndex].quote}
                                </Text>
                                <Text color="red.600" fontWeight="medium" fontSize={{ base: "sm", md: "md" }}>
                                    {testimonials[activeIndex].name}
                                </Text>
                            </VStack>
                        </motion.div>

                        {/* Second Testimonial Card */}
                        <motion.div
                            key={activeIndex + 1}
                            initial={{ opacity: 0, x: 50 }}
                            animate={{ opacity: 1, x: 0 }}
                            exit={{ opacity: 0, x: -50 }}
                            transition={{ duration: 0.6, ease: "easeOut" }}
                            style={{ width: "100%" }}
                        >
                            <VStack
                                align="center"
                                w="100%"
                                spacing={4}
                                bg="gray.100"
                                p={6}
                                borderRadius="xl"
                                boxShadow="lg"
                            >
                                <Box
                                    position="relative"
                                    borderRadius="full"
                                    overflow="hidden"
                                    w="120px"
                                    h="120px"
                                >
                                    <Image
                                        src={testimonials[(activeIndex + 1) % testimonials.length].image}
                                        alt={testimonials[(activeIndex + 1) % testimonials.length].name}
                                        objectFit="cover"
                                        w="100%"
                                        h="100%"
                                    />
                                </Box>
                                <Text textAlign="center" fontSize={{ base: "sm", md: "md" }} px={4}>
                                    {testimonials[(activeIndex + 1) % testimonials.length].quote}
                                </Text>
                                <Text color="red.600" fontWeight="medium" fontSize={{ base: "sm", md: "md" }}>
                                    {testimonials[(activeIndex + 1) % testimonials.length].name}
                                </Text>
                            </VStack>
                        </motion.div>
                    </Flex>
                </Box>

                {/* Animated Image */}
                <Box position="relative" w={{ base: "100%", lg: "50%" }} borderRadius="xl" overflow="visible">
                    <motion.div
                        initial={{ opacity: 0, rotate: -15, scale: 0.7 }}
                        animate={{ opacity: 1, rotate: 0, scale: 1.1 }}
                        transition={{ duration: 1.2, ease: "easeOut" }}
                    >
                        <Box position="relative" w="100%" h={{ base: "300px", md: "400px", lg: "100%" }}>
                            <Image
                                src="/img/men.jpg"
                                alt="Event photo"
                                objectFit="cover"
                                w="100%"
                                h="150%"
                                borderRadius="xl"
                                mt="-25%"
                            />
                        </Box>
                    </motion.div>
                </Box>
            </Flex>
        </Container>
    )
}
