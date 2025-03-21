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

                    <Link href="/" passHref>
                        <Box position="relative" width="220px" height="50px">
                            <Image
                                src="/img/amejtrading.png"
                                alt="Amej Trading Logo"
                                fill
                                style={{ objectFit: "contain", background: "white" }}
                                priority
                            />
                        </Box>
                    </Link>

                    <Box display={{ base: "block", md: "none" }}>
                        <Button onClick={onToggle} variant="ghost" aria-label="Toggle Navigation">
                            {isOpen ? <CloseIcon /> : <HamburgerIcon />}
                        </Button>
                    </Box>

                    <Box display={{ base: "none", md: "block" }}>
                        <Button
                            as={Link}
                            href="https://wa.me/2349050463932"
                            bg="red.600"
                            color="white"
                            _hover={{ bg: "black", color:'white'}}
                             borderRadius="100px"
                            fontWeight="bold"
                        >
                            Register
                        </Button>
                    </Box>
                </Flex>

                <Box display={{ base: isOpen ? "block" : "none", md: "none" }} mt={4} pb={4}>
                    <Button
                        as={Link}
                        href="https://wa.me/2349050463932"
                        bg="#a90100"
                        color="white"
                        _hover={{ bg: "black", color:'white'}}
                        borderRadius="100px"
                        fontWeight="bold"
                        w="full"
                    >
                        Register
                    </Button>
                </Box>
            </Container>
        </Box>
    )
}

