"use client";
import { Box, Container, Button, Text, Flex } from "@chakra-ui/react";
import { motion } from "framer-motion";

export function HeroSection() {
    return (
        <Box position="relative" width="100%" height="100vh" overflow="hidden">
            <video 
                autoPlay 
                loop 
                muted 
                playsInline
                style={{
                    position: "absolute",
                    top: 0,
                    left: 0,
                    width: "100%",
                    height: "100%",
                    objectFit: "cover",
                    zIndex: -1
                }}
            >
                <source src="/Video_HD_Preview.mp4" type="video/mp4" />
            </video>

            <Box 
                position="absolute"
                top={0}
                left={0}
                width="100%"
                height="100%"
                bg="blackAlpha.700"
                zIndex={0}
            />

            <Flex
                position="relative"
                zIndex={1}
                height="100vh"
                align="center"
                justify="center"
                textAlign="center"
                px={4} // Small padding for responsiveness
            >
                <Container maxW="container.lg">
                    <motion.div
                        initial={{ opacity: 0, y: 30 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 1 }}
                    >
                        <Text fontSize="lg" fontWeight="bold" color="red.500">
                            Your Trusted Forex Partner
                        </Text>
                    </motion.div>

                    <motion.div
                        initial={{ opacity: 0, y: 50 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 1, delay: 0.3 }}
                    >
                        <Text fontSize={{ base: "3xl", md: "5xl" }} fontWeight="bold" color="white" mt={3}>
                            Unbox your first gift – a complete guide to <br /> the global financial market trading.
                        </Text>
                    </motion.div>

                    <motion.div
                        initial={{ opacity: 0, y: 50 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 1, delay: 0.6 }}
                    >
                        <Text fontSize="md" color="gray.300" mt={3}>
                            Learn Forex Basics with Experts, Beginner-Friendly courses! <br />
                            Master fundamentals, market strategies, and risk management—completely free!
                        </Text>
                    </motion.div>

                    <motion.div
                        initial={{ opacity: 0, scale: 0.8 }}
                        animate={{ opacity: 1, scale: 1 }}
                        transition={{ duration: 1, delay: 0.9 }}
                    >
                        <Button
                            mt={6}
                            bg="red.600"
                            color="white"
                            size="lg"
                            _hover={{ bg: "black" }}
                            borderRadius="full"
                        >
                            Join The Training Now
                        </Button>
                    </motion.div>
                </Container>
            </Flex>
        </Box>
    );
}
