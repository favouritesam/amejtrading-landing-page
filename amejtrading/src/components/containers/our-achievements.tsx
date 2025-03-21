"use client";

import { Box, Heading, Container, SimpleGrid, Text, Badge, Image } from "@chakra-ui/react";
import { motion } from "framer-motion";

// Motion wrapper for animations
const MotionBox = motion(Box);
const MotionImage = motion(Image);

interface AchievementCardProps {
    image: string;
    badge: string;
    title: string;
    description: string;
}

const AchievementCard = ({ image, badge, title, description }: AchievementCardProps) => {
    return (
        <MotionBox
            borderRadius="lg"
            overflow="hidden"
            bg="white"
            boxShadow="md"
            initial={{ opacity: 0, scale: 0.9 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, ease: "easeOut" }}
            whileHover={{ scale: 1.05, boxShadow: "xl" }}
        >
            <Box position="relative" height="200px">
                <MotionImage
                    src={image || "/placeholder.svg"}
                    alt={title}
                    objectFit="cover"
                    width="100%"
                    height="100%"
                    initial={{ y: 30, opacity: 0 }}
                    whileInView={{ y: 0, opacity: 1 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.6, ease: "easeOut" }}
                />
                <Badge
                    position="absolute"
                    bottom="-16px"
                    right="-2px"
                    bg="red.600"
                    color="white"
                    px={5}
                    py={1}
                    borderRadius="md"
                    fontWeight="bold"
                >
                    {badge}
                </Badge>
            </Box>
            <Box p={6}>
                <Heading as="h3" size="md" mb={3}>
                    {title}
                </Heading>
                <Text color="gray.600">{description}</Text>
            </Box>
        </MotionBox>
    );
};

export function OurAchievements() {
    return (
        <Box as="section" py={16} bg="white">
            <Container maxW="container.xl">

                <motion.div
                    initial={{ opacity: 0, y: -20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.8, ease: "easeOut" }}
                >
                    <Heading as="h2" fontSize={{ base: "3xl", md: "4xl" }} mb={12} textAlign="center">
                        Our Achievements
                    </Heading>
                </motion.div>

                <SimpleGrid columns={{ base: 1, md: 3 }} spacing={8}>
                    <AchievementCard
                        image="/img/oo.jpg"
                        badge="GIVE AWAY"
                        title="Giveaway & Rewards"
                        description="We don’t just teach trading—we reward success! Our top-performing students have received incredible prizes, including cars and other life-changing gifts."
                    />

                    <AchievementCard
                        image="/img/one.jpg"
                        badge="SEMINAR"
                        title=" Seminars & Webinars"
                        description="Thousands of traders have mastered market trends, refined strategies,
                        and achieved consistent profitability through our expert-led events."
                    />

                    <AchievementCard
                        image="/img/tire.jpg"
                        badge="TRAINING"
                        title="Hands-On Training"
                        description="Practical skills, real-time market analysis, and expert mentorship ensure traders are fully equipped for success."
                    />
                </SimpleGrid>
            </Container>
        </Box>
    );
}
