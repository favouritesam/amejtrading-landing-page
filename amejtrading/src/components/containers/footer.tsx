import { Box, Container, SimpleGrid, Stack, Text, Input, Button, Flex, Heading, Link } from "@chakra-ui/react"
import { Facebook, Instagram, Twitter, Youtube, Mail, Phone } from "lucide-react"
import Image from "next/image"

export function Footer() {
    return (
        <Box as="footer" bg="gray.900" color="white">
            <Container maxW="container.xl" py={16}>
                <SimpleGrid columns={{ base: 1, md: 3 }} gap={10}>

                    <Stack gap={6} align={{ base: "center", md: "flex-start" }}>
                        <Box position="relative" width="200px" height="80px">
                            <Image
                                src="/img/amejtrading.jpg"
                                alt="Amej Trading Logo"
                                fill
                                style={{ objectFit: "contain" }}
                            />
                        </Box>

                        <Flex gap={4}>
                            <Link href="#"
                                  bg="#a90100"
                                  p={2}
                                  borderRadius="full"
                                  display="flex"
                                  _hover={{ bg: "white", color:"#a90100" }}>
                                <Facebook size={20} />
                            </Link>
                            <Link href="#" bg="#a90100" p={2} borderRadius="full" display="flex" _hover={{ bg: "white", color:"#a90100" }}>
                                <Instagram size={20} />
                            </Link>
                            <Link href="#" bg="#a90100" p={2} borderRadius="full" display="flex" _hover={{ bg: "white", color:"#a90100" }}>
                                <Twitter size={20} />
                            </Link>
                            <Link href="#" bg="#a90100" p={2} borderRadius="full" display="flex" _hover={{ bg: "white", color:"#a90100" }}>
                                <Youtube size={20} />
                            </Link>
                        </Flex>
                    </Stack>


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


                    <Stack gap={6} align={{ base: "center", md: "flex-start" }}>
                        <Heading as="h3" size="md">
                            Subscribe to Our Newsletter
                        </Heading>

                        <Text fontSize="14px" fontWeight={400}>
                            Stay updated with exclusive insights,<br/> promotions, and industry news.
                        </Text>

                        <Stack gap={4} width="75%">
                            <Input
                                placeholder="Email"
                                bg="white"
                                color="black"
                                borderRadius="100px"
                                _placeholder={{ color: "gray.500" }}
                            />
                            <Button bg="#a90100" color="white" _hover={{ bg: "white", color:"#a90100" }} borderRadius="100px">
                                Sign Up
                            </Button>
                        </Stack>
                    </Stack>
                </SimpleGrid>
            </Container>

            <Box bg="#ff0000" py={4}>
                <Container maxW="container.xl">
                    <Text fontWeight={400} fontSize="14px">Copyright © 2025 Amej Trading Limited, All rights reserved.</Text>
                </Container>
            </Box>
        </Box>
    )
}

