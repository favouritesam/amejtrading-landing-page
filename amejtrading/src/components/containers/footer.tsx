import { Box, Container, SimpleGrid, Stack, Text, Input, Button, Flex, Heading, Link } from "@chakra-ui/react";
import { Facebook, Instagram, Twitter, Youtube, Mail, Phone, MessageCircle } from "lucide-react";
import Image from "next/image";

export function Footer() {
    return (
        <Box as="footer" bg="#161616" color="white">
            <Container maxW="container.xl" py={16}>
                <SimpleGrid columns={{ base: 1, md: 4 }} gap={10}>

                    {/* Logo & Social Media */}
                    <Stack gap={6} align={{ base: "center", md: "flex-start" }}>
                        <Box position="relative" width="200px" height="80px">
                            <Image
                                src="/img/amejtrading.png"
                                alt="Amej Trading Logo"
                                fill
                                style={{ objectFit: "contain" }}
                            />
                        </Box>

                        {/* Social Media Links */}
                        <Flex gap={4}>
                            <Link href="https://web.facebook.com/Amejtrading"
                                  bg="#a90100"
                                  p={2}
                                  borderRadius="full"
                                  display="flex"
                                  _hover={{ bg: "white", color:"#a90100" }}>
                                <Facebook size={20} />
                            </Link>
                            <Link href="https://web.facebook.com/Amejtrading"
                                  bg="#a90100"
                                  p={2}
                                  borderRadius="full"
                                  display="flex"
                                  _hover={{ bg: "white", color:"#a90100" }}>
                                <Instagram size={20} />
                            </Link>
                            <Link href="https://web.facebook.com/Amejtrading"
                                  bg="#a90100"
                                  p={2}
                                  borderRadius="full"
                                  display="flex"
                                  _hover={{ bg: "white", color:"#a90100" }}>
                                <Twitter size={20} />
                            </Link>
                            <Link href="https://www.youtube.com/channel/UCMs8hc2ERwpPj7TDcSf5UEQ"
                                  bg="#a90100"
                                  p={2}
                                  borderRadius="full"
                                  display="flex"
                                  _hover={{ bg: "white", color:"#a90100" }}>
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

                    {/* WhatsApp Support */}
                    <Stack gap={6} align={{ base: "center", md: "flex-start" }}>
                        <Heading as="h3" size="md">
                            WhatsApp Support
                        </Heading>

                        <Stack gap={3}>
                            <Flex align="center" gap={2}>
                                <MessageCircle size={18} />
                                <Link href="https://wa.me/message/RV5ZDONGSJ7PC1" target="_blank">
                                    📍 Benin City – Comfort
                                </Link>
                            </Flex>
                            <Flex align="center" gap={2}>
                                <MessageCircle size={18} />
                                <Link href="https://wa.me/2347044392374" target="_blank">
                                    📍 Lagos – Doris
                                </Link>
                            </Flex>
                            <Flex align="center" gap={2}>
                                <MessageCircle size={18} />
                                <Link href="https://wa.me/2349034525661" target="_blank">
                                    📍 Abuja – Tope
                                </Link>
                            </Flex>
                            <Flex align="center" gap={2}>
                                <MessageCircle size={18} />
                                <Link href="https://wa.me/2348185439826" target="_blank">
                                    📍 Port Harcourt – Joan
                                </Link>
                            </Flex>
                            <Flex align="center" gap={2}>
                                <MessageCircle size={18} />
                                <Link href="https://wa.me/2349050463932" target="_blank">
                                    📍 Online Class
                                </Link>
                            </Flex>
                        </Stack>
                    </Stack>

                    {/* Newsletter Subscription */}
                    <Stack gap={6} align={{ base: "center", md: "flex-start" }}>
                        <Heading as="h3" size="md">
                            Subscribe to Our Newsletter
                        </Heading>

                        <Text fontSize="14px" fontWeight={400}>
                            Stay updated with exclusive insights,<br/> promotions, and industry news.
                        </Text>

                        <Stack gap={4} width="100%">
    <Input
        placeholder="Enter your email"
        bg="white"
        color="black"
        borderRadius="100px"
        _placeholder={{ color: "gray.500" }}
    />
    <a href="https://wa.me/2349050463932" target="_blank" rel="noopener noreferrer" style={{ width: "100%" }}>
        <Button 
            bg="#a90100" 
            color="white" 
            _hover={{ bg: "white", color: "#a90100" }} 
            borderRadius="100px"
            width="100%"
        >
            Register
        </Button>
    </a>
</Stack>


                    </Stack>

                </SimpleGrid>
            </Container>

            {/* Footer Bottom Bar */}
            <Box bg="#ff0000" py={4}>
                <Container maxW="container.xl">
                    <Text fontWeight={400} fontSize="14px">
                        Copyright © 2025 Amej Trading Limited, All rights reserved.
                    </Text>
                </Container>
            </Box>
        </Box>
    );
}
