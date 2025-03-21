"use client";

import type React from "react";
import { Box, Container, Heading, SimpleGrid, Text, VStack, Icon } from "@chakra-ui/react";
import { motion } from "framer-motion"; // Import Framer Motion
import { Globe, GraduationCap, Handshake, BarChart3 } from "lucide-react";

interface FeatureCardProps {
    title: string;
    description: string;
    icon: React.ElementType;
    isHighlighted?: boolean;
}

// Motion wrapper for animation effects
const MotionBox = motion(Box);

const FeatureCard = ({ title, description, icon, isHighlighted = false }: FeatureCardProps) => {
    return (
        <MotionBox
            bg={isHighlighted ? "red.600" : "white"}
            color={isHighlighted ? "white" : "gray.800"}
            borderRadius="xl"
            p={8}
            boxShadow="sm"
            height="100%"
            transition="transform 0.3s, box-shadow 0.3s"
            _hover={{
                transform: "translateY(-5px)",
                boxShadow: "lg",
            }}
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }} // Ensures animation only runs once per scroll
            transition={{ duration: 0.8, ease: "easeOut" }}
        >
            <VStack spacing={4} align="flex-start">
                <Icon as={icon} color={isHighlighted ? "white" : "red.600"} boxSize={8} />
                <Heading as="h3" fontSize="xl" fontWeight="bold" mb={2}>
                    {title}
                </Heading>
                <Text fontSize="sm" lineHeight="tall">
                    {description}
                </Text>
            </VStack>
        </MotionBox>
    );
};

export default function FeaturesSection() {
    return (
        <Box py={{ base: 12, md: 20 }} bg="gray.50">
            <Container maxW="container.xl">
                {/* Heading with Fade-In Animation */}
                <motion.div
                    initial={{ opacity: 0, y: -20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.8, ease: "easeOut" }}
                >
                    <Heading
                        as="h2"
                        fontSize={{ base: "3xl", md: "4xl" }}
                        fontWeight="bold"
                        textAlign="center"
                        mb={{ base: 10, md: 16 }}
                    >
                        Why Amej Trading?
                    </Heading>
                </motion.div>

                {/* Grid of Feature Cards with Staggered Animations */}
                <SimpleGrid columns={{ base: 1, md: 2, lg: 4 }} spacing={6}>
                    <FeatureCard
                        title="Community"
                        icon={Globe}
                        description="Connect with a thriving network of traders who share insights, strategies, and support. Engage in discussions, share experiences, and grow alongside a community of like-minded individuals."
                    />

                    <FeatureCard
                        title="Academy"
                        icon={GraduationCap}
                        description="Gain access to structured training programs designed for both beginners and advanced traders. Learn at your own pace with step-by-step lessons and interactive content."
                        isHighlighted={true}
                    />

                    <FeatureCard
                        title="Mentorship"
                        icon={Handshake}
                        description="Get personalized guidance from experienced traders who have mastered the markets. Receive one-on-one coaching, strategy reviews, and direct support to accelerate your growth."
                    />

                    <FeatureCard
                        title="Trading"
                        icon={BarChart3}
                        description="Apply tested and proven strategies in real-time trading environments. Leverage cutting-edge tools, signals, and expert insights to make informed trading decisions."
                    />
                </SimpleGrid>
            </Container>
        </Box>
    );
}
