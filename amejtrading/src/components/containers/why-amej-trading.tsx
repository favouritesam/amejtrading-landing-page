import type React from "react"
import { Box, Heading, Container, SimpleGrid } from "@chakra-ui/react"
import { Globe, GraduationCap, Users, TrendingUp } from "lucide-react"

interface FeatureCardProps {
    icon: React.ReactNode
    title: string
    description: string
    isHighlighted?: boolean
}

const FeatureCard = ({ icon, title, description, isHighlighted = false }: FeatureCardProps) => {
    return (
        <Box
            bg={isHighlighted ? "red.600" : "white"}
            color={isHighlighted ? "white" : "gray.700"}
            p={6}
            borderRadius="lg"
            boxShadow="md"
            transition="all 0.3s ease-in-out"
            _hover={{
                transform: "translateY(-5px)",
                boxShadow: "xl",
                bg: isHighlighted ? "red.700" : "gray.100"
            }}
        >
            <Box mb={4}>{icon}</Box>
            <Heading as="h3" fontSize="xl" mb={2}>{title}</Heading>
            <Box color={isHighlighted ? "gray.100" : "gray.600"}>{description}</Box>
        </Box>
    )
}

export function WhyAmejTrading() {
    return (
        <Box as="section" py={16} bg="gray.50">
            <Container maxW="container.xl">
                <Heading as="h2" fontSize={{ base: "3xl", md: "4xl" }} textAlign="center" mb={12}>
                    Why Amej Trading?
                </Heading>

                <SimpleGrid columns={{ base: 1, md: 2, lg: 4 }} spacing={8}>
                    <FeatureCard
                        icon={<Globe size={32} color="#e53e3e" />}
                        title="Community"
                        description="Connect with a thriving network of traders who share insights, strategies, and support."
                    />

                    <FeatureCard
                        icon={<GraduationCap size={32} color="white" />}
                        title="Academy"
                        description="Gain access to structured training programs designed for both beginners and advanced traders."
                        isHighlighted
                    />

                    <FeatureCard
                        icon={<Users size={32} color="#e53e3e" />}
                        title="Mentorship"
                        description="Get personalized guidance from experienced traders who have mastered the markets."
                    />

                    <FeatureCard
                        icon={<TrendingUp size={32} color="#e53e3e" />}
                        title="Trading"
                        description="Apply tested and proven strategies in real-time trading environments."
                    />
                </SimpleGrid>
            </Container>
        </Box>
    )
}
