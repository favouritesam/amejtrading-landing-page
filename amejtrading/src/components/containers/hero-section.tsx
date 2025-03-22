"use client";

import { useEffect, useState } from "react";
import { Box, Container, Button, Text, Flex, HStack, Icon, SimpleGrid } from "@chakra-ui/react";
import { motion } from "framer-motion";
import { FaCheckCircle, FaClock } from "react-icons/fa";

const getTimeLeft = (targetDate: Date) => {
    const now = new Date();
    const difference = targetDate.getTime() - now.getTime();
    if (difference <= 0) {
        return { days: 0, hours: 0, minutes: 0, seconds: 0 }; // Stop countdown at zero
    }

    return {
        days: Math.floor(difference / (1000 * 60 * 60 * 24)),
        hours: Math.floor((difference / (1000 * 60 * 60)) % 24),
        minutes: Math.floor((difference / (1000 * 60)) % 60),
        seconds: Math.floor((difference / 1000) % 60),
    };
};

export function HeroSection() {
    const [timeLeft, setTimeLeft] = useState({ days: 0, hours: 0, minutes: 0, seconds: 0 });

    useEffect(() => {
        const year = new Date().getFullYear();
        const targetDate = new Date(year, 3, 25); // April 25 of this year (Month is 0-based, so 3 represents April)

        const timer = setInterval(() => {
            const timeRemaining = getTimeLeft(targetDate);
            setTimeLeft(timeRemaining);

            if (timeRemaining.days <= 0 && timeRemaining.hours <= 0 && timeRemaining.minutes <= 0 && timeRemaining.seconds <= 0) {
                clearInterval(timer);
            }
        }, 1000);

        return () => clearInterval(timer);
    }, []);

    return (
        <Box position="relative" width="100%" minHeight="100vh" overflow="hidden">
            <video autoPlay loop muted playsInline
                   style={{
                       position: "absolute",
                       top: 0,
                       left: 0,
                       width: "100%",
                       height: "100%",
                       objectFit: "cover",
                       zIndex: -1,
                   }}>
                <source src="/liveVideo.mp4" type="video/mp4" />
            </video>

            <Box position="absolute" top={0} left={0} width="100%" height="100%" bg="blackAlpha.800" zIndex={0} />

            <Flex position="relative" zIndex={1} minHeight="100vh" align="center" justify="center" textAlign="center"
                  px={{ base: 3, sm: 4, md: 6 }} flexDirection="column">
                <Container maxW={{ base: "90%", md: "container.lg" }} px={4}>
                    <motion.div initial={{ opacity: 0, y: 30 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 1 }}>
                        <Text fontSize={{ base: "3vw", sm: "md", md: "lg" }} fontWeight="bold" color="red.500"
                              textTransform="uppercase">
                            Join Our 2-Week Expert-Led Interactive Trading Session
                        </Text>
                    </motion.div>

                    <motion.div initial={{ opacity: 0, y: 50 }} animate={{ opacity: 1, y: 0 }}
                                transition={{ duration: 1, delay: 0.3 }}>
                        <Text fontSize={{ base: "5vw", sm: "2xl", md: "5xl" }} fontWeight="bold" color="white" mt={3}>
                            Master Forex with Expert-Led Training
                        </Text>
                    </motion.div>

                    <motion.div initial={{ opacity: 0, y: 50 }} animate={{ opacity: 1, y: 0 }}
                                transition={{ duration: 1, delay: 0.6 }}>
                        <Text fontSize={{ base: "3vw", sm: "sm", md: "md" }} color="gray.300" mt={3}>
                            What You Get When You Enroll:
                        </Text>
                    </motion.div>

                    <motion.div initial={{ opacity: 0, y: 50 }} animate={{ opacity: 1, y: 0 }}
                                transition={{ duration: 1, delay: 0.9 }}>
                        <SimpleGrid
                            columns={{ base: 1, md: 2 }}
                            spacingX={{ base: 2, md: 6 }}
                            spacingY={{ base: 2, md: 3 }}
                            mt={6}
                        >
                            {[
                                "🚀 2weeks of Intensive Training",
                                "📊 Personalized Mentorship from Experts",
                                "📈 Access to Premium Trading Signals",
                                "📅 Access to Real Trading capital T&C applies 'Not Prop Firm'",
                                "💰 Certificate of Completion",
                                "🌍 Ongoing Support & Community Access"
                            ].map((text, index) => (
                                <HStack key={index} spacing={2}>
                                    <Icon as={FaCheckCircle} color="green.400" boxSize={{ base: "4", sm: "5" }}/>
                                    <Text
                                        fontSize={{ base: "3vw", sm: "sm", md: "md" }}
                                        color="white"
                                        whiteSpace={{ base: "normal", md: "nowrap" }}
                                    >
                                        {text}
                                    </Text>
                                </HStack>
                            ))}
                        </SimpleGrid>
                    </motion.div>

                    <motion.div initial={{ opacity: 0, scale: 0.8 }} animate={{ opacity: 1, scale: 1 }}
                                transition={{ duration: 1, delay: 1.1 }}>
                        <Flex mt={6} justify="center" align="center" bg="gray.900" p={3} borderRadius="md"
                              boxShadow="lg" flexWrap="wrap">
                            <Icon as={FaClock} color="yellow.400" mr={2} />
                            <Text fontSize={{ base: "3vw", sm: "sm", md: "md" }} color="white">
                                Limited Slots Available –{" "}
                                <Text as="span" fontWeight="bold" color="red.500">
                                    {String(timeLeft.days).padStart(2, "0")}d{" "}
                                    {String(timeLeft.hours).padStart(2, "0")}h{" "}
                                    {String(timeLeft.minutes).padStart(2, "0")}m{" "}
                                    {String(timeLeft.seconds).padStart(2, "0")}s
                                </Text>
                            </Text>
                        </Flex>
                    </motion.div>

                    <motion.div initial={{ opacity: 0, scale: 0.8 }} animate={{ opacity: 1, scale: 1 }}
                                transition={{ duration: 1, delay: 1.3 }}>
                        <Text fontSize={{ base: "3vw", sm: "sm", md: "md" }} color="gray.300" mt={3}>
                            🔹 <Text as="span" fontWeight="bold" color="red.400">
                            Enrollment Fee: ₦100,000
                        </Text>{" "}
                            (<Text as="s" color="gray.500">₦400,000</Text> – Limited Time Discount!)
                        </Text>

                        <Button mt={6} bg="red.600" color="white" size={{ base: "sm", md: "lg" }}
                                _hover={{ bg: "black", transform: "scale(1.05)" }} borderRadius="full" transition="0.3s"
                                as="a" href="https://linktr.ee/Litefinanceclass?utm_source=linktree_profile_share&ltsid=89c16aec-bacc-4adb-81e6-4f1e36601f19" target="_blank"
                                width={{ base: "100%", sm: "auto" }}>
                            Join The Training Now
                        </Button>
                    </motion.div>
                </Container>
            </Flex>
        </Box>
    );
}
