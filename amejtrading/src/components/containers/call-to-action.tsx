"use client";

import {Box, Container, Heading, Button, Image, Text, VStack} from "@chakra-ui/react";
import {motion} from "framer-motion";

export default function CallToAction() {
    return (
        <Box position="relative" w="100%" h="70vh" overflow="hidden" mt='14%'>
            <motion.div
                initial={{opacity: 0}}
                animate={{opacity: 1}}
                transition={{duration: 1}}
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
                    alt="Background image"
                    w="100%"
                    minH="100%"
                    objectFit="cover"
                    objectPosition="top center"
                />

            </motion.div>

            <motion.div
                initial={{opacity: 0}}
                animate={{opacity: 0.5}}
                transition={{duration: 1, delay: 0.5}}
                style={{
                    position: "absolute",
                    top: 0,
                    left: 0,
                    width: "100%",
                    height: "100%",
                    background: "rgba(0, 0, 0, 0.5)",
                }}
            />

            <Container
                position="absolute"
                top="50%"
                left="50%"
                transform="translate(-50%, -50%)"
                textAlign="center"
                maxW="container.lg"
            >
                <motion.div
                    initial={{y: 50, opacity: 0}}
                    animate={{y: 0, opacity: 1}}
                    transition={{duration: 1, delay: 0.8}}
                >
                    <Box
                        bg="rgba(94, 19, 19, 0.8)"
                        borderRadius="lg"
                        px={{base: 6, md: 10}}
                        py={{base: 6, md: 8}}
                        display="inline-block"
                        color="white"
                    >
                        <motion.div
                            initial={{x: -100, opacity: 0}}
                            animate={{x: 0, opacity: 1}}
                            transition={{duration: 1, delay: 1}}
                        >
                            <Heading
                                as="h1"
                                fontSize={{base: "2xl", md: "3xl", lg: "4xl"}}
                                fontWeight="bold"
                            >
                                What you get when<br/> you Enroll.
                            </Heading>
                        </motion.div>

                        <motion.div
                            initial={{opacity: 0}}
                            animate={{opacity: 1}}
                            transition={{duration: 1, delay: 1.2}}
                        >
                            <VStack spacing={3} mt={4} align="center">
                                <Text>✔️ 2 weeks of Intensive Training</Text>
                                <Text>✔️ Personalized Mentorship from Experts</Text>
                                <Text>✔️ Access to Premium Trading Signals</Text>
                                <Text>✔️ Certificate of Completion</Text>
                                <Text>✔️ Ongoing Support & Community Access</Text>
                            </VStack>
                        </motion.div>

                        <motion.div
                            initial={{scale: 0.8, opacity: 0}}
                            animate={{scale: 1, opacity: 1}}
                            transition={{duration: 1, delay: 1.5}}
                            whileHover={{scale: 1.1}}
                        >
                            <Button
                                as="a"
                                href="https://linktr.ee/Litefinanceclass?utm_source=linktree_profile_share&ltsid=89c16aec-bacc-4adb-81e6-4f1e36601f19"
                                mt={5}
                                bg="#a90100"
                                color="white"
                                fontSize="14px"
                                fontWeight={400}
                                px={6}
                                py={3}
                                borderRadius="full"
                                _hover={{bg: "green.400"}}
                            >
                                Secure Your Spot Now
                            </Button>
                        </motion.div>
                    </Box>
                </motion.div>
            </Container>
        </Box>
    );
}
