"use client";

import { Box, Container, Heading, Button, Image } from "@chakra-ui/react";
import { motion } from "framer-motion";

export default function CallToAction() {
    return (
        <Box position="relative" w="100%" h="70vh" overflow="hidden">
            {/* Background Image - Fades in smoothly */}
            <motion.div
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ duration: 1 }}
                style={{
                    position: "absolute",
                    top: 0,
                    left: 0,
                    width: "100%",
                    height: "100%",
                }}
            >
                <Image
                    src="/img/cc.jpg"
                    w="100%"
                    minH="100%" // Ensures full height coverage
                    objectFit="cover"
                    objectPosition="top center" // Ensures head is not cut off
                />
            </motion.div>

            {/* Overlay - Delayed Fade-in */}
            <motion.div
                initial={{ opacity: 0 }}
                animate={{ opacity: 0.5 }}
                transition={{ duration: 1, delay: 0.5 }}
                style={{
                    position: "absolute",
                    top: 0,
                    left: 0,
                    width: "100%",
                    height: "100%",
                    background: "rgba(0, 0, 0, 0.5)",
                }}
            />

            {/* Container for Content */}
            <Container
                position="absolute"
                top="50%"
                left="50%"
                transform="translate(-50%, -50%)"
                textAlign="center"
                maxW="container.lg"
            >
                {/* Content Box - Slide Up Effect */}
                <motion.div
                    initial={{ y: 50, opacity: 0 }}
                    animate={{ y: 0, opacity: 1 }}
                    transition={{ duration: 1, delay: 0.8 }}
                >
                    <Box
                        bg="rgba(94, 19, 19, 0.6)" // Lower opacity for dimming effect
                        borderRadius="lg"
                        px={{ base: 6, md: 10 }}
                        py={{ base: 6, md: 8 }}
                        display="inline-block"
                    >
                        {/* Heading - Slides in from the left */}
                        <motion.div
                            initial={{ x: -100, opacity: 0 }}
                            animate={{ x: 0, opacity: 1 }}
                            transition={{ duration: 1, delay: 1 }}
                        >
                            <Heading
                                as="h1"
                                color="#ffffff"
                                fontSize={{ base: "2xl", md: "3xl", lg: "4xl" }}
                                fontWeight="bold"
                            >
                                Learn To Trade. Trade Smart.<br /> Earn More.
                            </Heading>
                        </motion.div>

                        {/* CTA Button - Subtle Pulse Animation */}
                        <motion.div
                            initial={{ scale: 0.8, opacity: 0 }}
                            animate={{ scale: 1, opacity: 1 }}
                            transition={{ duration: 1, delay: 1.5 }}
                            whileHover={{ scale: 1.1 }}
                        >
                            <Button
                                mt={4}
                                bg="#a90100"
                                color="#ffffff"
                                fontSize="14px"
                                fontWeight={400}
                                px={6}
                                py={3}
                                borderRadius="full"
                                _hover={{ bg: "white", color: "#a90100" }}
                            >
                                Start For Free Today.
                            </Button>
                        </motion.div>
                    </Box>
                </motion.div>
            </Container>
        </Box>
    );
}
