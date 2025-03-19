import { Box, Heading, Container, SimpleGrid, Text, Badge } from "@chakra-ui/react"
import Image from "next/image"

interface AchievementCardProps {
    image: string
    badge: string
    title: string
    description: string
}

const AchievementCard = ({ image, badge, title, description }: AchievementCardProps) => {
    return (
        <Box borderRadius="lg" overflow="hidden" bg="white" boxShadow="md">
            <Box position="relative" height="200px">
                <Image src={image || "/placeholder.svg"} alt={title} fill style={{ objectFit: "cover" }} />
                <Badge
                    position="absolute"
                    bottom={4}
                    right={4}
                    bg="red.600"
                    color="white"
                    px={3}
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
        </Box>
    )
}

export function OurAchievements() {
    return (
        <Box as="section" py={16} bg="white">
            <Container maxW="container.xl">
                <Heading as="h2" fontSize={{ base: "3xl", md: "4xl" }} mb={12}>
                    Our Achievements
                </Heading>

                <SimpleGrid columns={{ base: 1, md: 3 }} gap={8}>
                    <AchievementCard
                        image="/placeholder.svg?height=400&width=600"
                        badge="GIVE AWAY"
                        title="Life-Changing Rewards"
                        description="We don't just teach trading—we reward success! Our top-performing students have received incredible prizes, including cars and other life-changing gifts."
                    />

                    <AchievementCard
                        image="/placeholder.svg?height=400&width=600"
                        badge="SEMINAR"
                        title="Impactful Seminar"
                        description="With thousands of attendees nationwide, our expert-led webinars have helped traders master market trends, refine strategies, and achieve consistent profitability"
                    />

                    <AchievementCard
                        image="/placeholder.svg?height=400&width=600"
                        badge="TRAINING"
                        title="Hands-On Training"
                        description="Our in-depth training sessions provide practical skills, real-time market analysis, and expert mentorship, ensuring traders are fully equipped for success."
                    />
                </SimpleGrid>
            </Container>
        </Box>
    )
}

