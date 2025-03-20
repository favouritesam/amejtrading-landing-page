import { Box, Container, Button, Text, VStack } from "@chakra-ui/react";

export function HeroSection() {
    return (
        <Box
            position="relative"
            width="100%"
            height="100vh"
            bgImage="url('/img/Video_HD_preview.mp4')" // Update with your live background
            bgSize="cover"
            bgPosition="center"
            display="flex"
            alignItems="center"
            justifyContent="center"
            _before={{
                content: '""',
                position: "absolute",
                top: 0,
                left: 0,
                width: "100%",
                height: "100%",
                bg: "blackAlpha.700",
            }}
        >
            <Container maxW="container.lg" textAlign="center" position="relative" zIndex="1">
                <Text fontSize="lg" fontWeight="bold" color="red.500">
                    Your Trusted Forex Partner
                </Text>
                <Text fontSize={{ base: "3xl", md: "5xl" }} fontWeight="bold" color="white" mt={3}>
                    Unbox your first gift – a complete guide to <br /> the global financial market trading.
                </Text>
                <Text fontSize="md" color="gray.300" mt={3}>
                    Learn Forex Basics with Experts, Beginner-Friendly courses! <br />
                    Master fundamentals, market strategies, and risk management—completely free!
                </Text>
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
            </Container>
        </Box>
    );
}
