import { Box, Heading, Container, SimpleGrid, Text, Badge,Image } from "@chakra-ui/react"

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
                <Image
                    src={image || "/placeholder.svg"}
                    alt={title}
                    objectFit="cover"
                    width="100%"
                    height="100%"
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

                <SimpleGrid columns={{ base: 1, md: 3 }} spacing={8}>
                    <AchievementCard
                        image="/img/oo.jpg"
                        badge="GIVE AWAY"
                        title="Giveaway & Rewards"
                        description="We don’t just teach trading—we reward success! Our top-performing students have received incredible prizes, including cars and other life-changing gifts.
"
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
    )
}

