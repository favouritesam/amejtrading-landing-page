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
    const bgColor = isHighlighted ? "bg-red-600" : "bg-white"
    const textColor = isHighlighted ? "text-white" : "text-gray-700"

    return (
        <div className={`rounded-lg p-6 shadow-md ${bgColor} ${textColor}`}>
            <div className="mb-4">{icon}</div>
            <h3 className="text-xl font-semibold mb-2">{title}</h3>
            <p className={`${isHighlighted ? "text-gray-100" : "text-gray-600"}`}>{description}</p>
        </div>
    )
}

export function WhyAmejTrading() {
    return (
        <Box as="section" py={16} bg="gray-50">
            <Container maxW="container.xl">
                <Heading as="h2" fontSize={{ base: "3xl", md: "4xl" }} textAlign="center" mb={12}>
                    Why Amej Trading?
                </Heading>

                <SimpleGrid columns={{ base: 1, md: 2, lg: 4 }} spacing={8}>
                    <FeatureCard
                        icon={<Globe className="h-8 w-8 text-red-500" />}
                        title="Community"
                        description="Connect with a thriving network of traders who share insights, strategies, and support. Engage in discussions, share experiences, and grow alongside a community of like-minded individuals."
                    />

                    <FeatureCard
                        icon={<GraduationCap className="h-8 w-8 text-white" />}
                        title="Academy"
                        description="Gain access to structured training programs designed for both beginners and advanced traders. Learn at your own pace with step-by-step lessons and interactive content."
                        isHighlighted={true}
                    />

                    <FeatureCard
                        icon={<Users className="h-8 w-8 text-red-500" />}
                        title="Mentorship"
                        description="Get personalized guidance from experienced traders who have mastered the markets. Receive one-on-one coaching, strategy reviews, and direct support to accelerate your growth."
                    />

                    <FeatureCard
                        icon={<TrendingUp className="h-8 w-8 text-red-500" />}
                        title="Trading"
                        description="Apply tested and proven strategies in real-time trading environments. Leverage cutting-edge tools, signals, and expert insights to make informed trading decisions."
                    />
                </SimpleGrid>
            </Container>
        </Box>
    )
}

