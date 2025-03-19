"use client"

import { Box, Container, Flex, Button, useDisclosure } from "@chakra-ui/react"
import { HamburgerIcon, CloseIcon } from "@chakra-ui/icons"
import Image from "next/image"
import Link from "next/link"

export function Navbar() {
    const { isOpen, onToggle } = useDisclosure()

    return (
        <Box as="nav" position="fixed" width="100%" zIndex="10" bg="white" boxShadow="sm">
            <Container maxW="container.xl" py={3}>
                <Flex align="center" justify="space-between">
                    {/* Logo */}
                    <Link href="/" passHref>
                        <Box position="relative" width="180px" height="40px">
                            <Image
                                src="/placeholder.svg?height=40&width=180"
                                alt="Amej Trading Logo"
                                fill
                                style={{ objectFit: "contain" }}
                                priority
                            />
                        </Box>
                    </Link>

                    {/* Mobile Menu Button */}
                    <Box display={{ base: "block", md: "none" }}>
                        <Button onClick={onToggle} variant="ghost" aria-label="Toggle Navigation">
                            {isOpen ? <CloseIcon /> : <HamburgerIcon />}
                        </Button>
                    </Box>

                    {/* Desktop Navigation */}
                    <Box display={{ base: "none", md: "block" }}>
                        <Button
                            as={Link}
                            href="#consultations"
                            bg="red.600"
                            color="white"
                            _hover={{ bg: "red.700" }}
                            borderRadius="md"
                            fontWeight="bold"
                        >
                            Free Consultations
                        </Button>
                    </Box>
                </Flex>

                {/* Mobile Navigation */}
                <Box display={{ base: isOpen ? "block" : "none", md: "none" }} mt={4} pb={4}>
                    <Button
                        as={Link}
                        href="#consultations"
                        bg="red.600"
                        color="white"
                        _hover={{ bg: "red.700" }}
                        borderRadius="md"
                        fontWeight="bold"
                        w="full"
                    >
                        Free Consultations
                    </Button>
                </Box>
            </Container>
        </Box>
    )
}

