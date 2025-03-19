import { Box, Container, SimpleGrid, Stack, Text, Input, Button, Flex, Heading, Link } from "@chakra-ui/react"
import { Facebook, Instagram, Twitter, Youtube, Mail, Phone } from "lucide-react"
import Image from "next/image"

export function Footer() {
    return (
        <Box as="footer" bg="gray.900" color="white">
            <Container maxW="container.xl" py={16}>
                <SimpleGrid columns={{ base: 1, md: 3 }} gap={10}>
                    {/* Logo and Social Media */}
                    <Stack gap={6} align={{ base: "center", md: "flex-start" }}>
                        <Box position="relative" width="200px" height="80px">
                            <Image
                                src="/placeholder.svg?height=80&width=200"
                                alt="Amej Trading Logo"
                                fill
                                style={{ objectFit: "contain" }}
                            />
                        </Box>

                        <Flex gap={4}>
                            <Link href="#" bg="red.600" p={2} borderRadius="full" display="flex" _hover={{ bg: "red.700" }}>
                                <Facebook size={20} />
                            </Link>
                            <Link href="#" bg="red.600" p={2} borderRadius="full" display="flex" _hover={{ bg: "red.700" }}>
                                <Instagram size={20} />
                            </Link>
                            <Link href="#" bg="red.600" p={2} borderRadius="full" display="flex" _hover={{ bg: "red.700" }}>
                                <Twitter size={20} />
                            </Link>
                            <Link href="#" bg="red.600" p={2} borderRadius="full" display="flex" _hover={{ bg: "red.700" }}>
                                <Youtube size={20} />
                            </Link>
                        </Flex>
                    </Stack>

                    {/* Contact Information */}
                    <Stack gap={6} align={{ base: "center", md: "flex-start" }}>
                        <Heading as="h3" size="md">
                            Get In Touch
                        </Heading>

                        <Stack gap={4}>
                            <Flex align="center" gap={2}>
                                <Mail size={18} />
                                <Text>support@amejtrading.com</Text>
                            </Flex>
                            <Flex align="center" gap={2}>
                                <Phone size={18} />
                                <Text>+234-810-175-7731</Text>
                            </Flex>
                            <Flex align="center" gap={2}>
                                <Phone size={18} />
                                <Text>+234-806-388-8348</Text>
                            </Flex>
                        </Stack>
                    </Stack>

                    {/* Newsletter */}
                    <Stack gap={6} align={{ base: "center", md: "flex-start" }}>
                        <Heading as="h3" size="md">
                            Newsletter
                        </Heading>

                        <Text>Signup our newsletter to get update information, news, insight or promotions.</Text>

                        <Stack gap={4} width="100%">
                            <Input
                                placeholder="Email"
                                bg="white"
                                color="black"
                                borderRadius="md"
                                _placeholder={{ color: "gray.500" }}
                            />
                            <Button bg="red.600" color="white" _hover={{ bg: "red.700" }}>
                                Sign Up
                            </Button>
                        </Stack>
                    </Stack>
                </SimpleGrid>
            </Container>

            <Box bg="red.600" py={4}>
                <Container maxW="container.xl">
                    <Text textAlign="center">Copyright © 2025 Amej Trading Limited, All rights reserved.</Text>
                </Container>
            </Box>
        </Box>
    )
}

