"use client"

import { useState, useEffect } from "react"
import { Box, Container, Heading, SimpleGrid, Flex, IconButton, useDisclosure } from "@chakra-ui/react"
import { ChevronLeftIcon, ChevronRightIcon } from "@chakra-ui/icons"
import Image from "next/image"
import {VideoModal} from "@/components/containers/video-modal";


const achievements = [
    {
        id: 1,
        image: "/placeholder.svg?height=200&width=350",
        alt: "Award ceremony with two people in formal attire",
    },
    {
        id: 2,
        image: "/placeholder.svg?height=200&width=350",
        alt: "Award presentation with two professionals",
    },
    {
        id: 3,
        image: "/placeholder.svg?height=200&width=350",
        alt: "Car presentation event",
    },
    {
        id: 4,
        image: "/placeholder.svg?height=200&width=350",
        alt: "SUV with green bow as prize",
    },
    {
        id: 5,
        image: "/placeholder.svg?height=200&width=350",
        alt: "Trading seminar event",
    },
    {
        id: 6,
        image: "/placeholder.svg?height=200&width=350",
        alt: "Award ceremony",
    },
    {
        id: 7,
        image: "/placeholder.svg?height=200&width=350",
        alt: "Trading workshop",
    },
]

const testimonials = [
    {
        id: 1,
        title: "Efe Urhobo Amej Trading Testimonial",
        videoId: "placeholder1",
        thumbnail: "/placeholder.svg?height=200&width=350",
    },
    {
        id: 2,
        title: "Marho Abigail Amej Trading Testimonial",
        videoId: "placeholder2",
        thumbnail: "/placeholder.svg?height=200&width=350",
    },
    {
        id: 3,
        title: "Ngozi David Share Her Experience",
        videoId: "placeholder3",
        thumbnail: "/placeholder.svg?height=200&width=350",
    },
]

export function WhatWeAccomplished() {
    const [currentSlide, setCurrentSlide] = useState(0)
    const [isHovering, setIsHovering] = useState(false)
    const [selectedVideo, setSelectedVideo] = useState({ videoId: "", title: "" })
    const { isOpen, onOpen, onClose } = useDisclosure()

    const totalSlides = Math.ceil(achievements.length / 4)

    const nextSlide = () => {
        setCurrentSlide((prev) => (prev === totalSlides - 1 ? 0 : prev + 1))
    }

    const prevSlide = () => {
        setCurrentSlide((prev) => (prev === 0 ? totalSlides - 1 : prev - 1))
    }

    const goToSlide = (index: number) => {
        setCurrentSlide(index)
    }

    const openVideoModal = (videoId: string, title: string) => {
        setSelectedVideo({ videoId, title })
        onOpen()
    }

    // Auto-slide functionality
    useEffect(() => {
        if (!isHovering) {
            const interval = setInterval(() => {
                nextSlide()
            }, 5000)

            return () => clearInterval(interval)
        }
    }, [isHovering, currentSlide])

    return (
        <Box as="section" py={16} bg="gray.50">
            <Container maxW="container.xl">
                <Heading as="h2" fontSize={{ base: "3xl", md: "4xl" }} mb={12}>
                    What We Accomplished.
                </Heading>

                {/* Image Carousel */}
                <Box
                    position="relative"
                    mb={12}
                    onMouseEnter={() => setIsHovering(true)}
                    onMouseLeave={() => setIsHovering(false)}
                >
                    <Flex overflow="hidden" borderRadius="lg" boxShadow="md" bg="white" p={4}>
                        <Flex transition="transform 0.5s ease" transform={`translateX(-${currentSlide * 100}%)`} width="100%">
                            {achievements.map((achievement, index) => (
                                <Box
                                    key={achievement.id}
                                    minWidth="25%"
                                    px={2}
                                    display={{
                                        base: index >= currentSlide && index < currentSlide + 1 ? "block" : "none",
                                        sm: index >= currentSlide && index < currentSlide + 2 ? "block" : "none",
                                        md: index >= currentSlide && index < currentSlide + 4 ? "block" : "none",
                                    }}
                                >
                                    <Box position="relative" height="200px" borderRadius="md" overflow="hidden">
                                        <Image
                                            src={achievement.image || "/placeholder.svg"}
                                            alt={achievement.alt}
                                            fill
                                            style={{ objectFit: "cover" }}
                                        />
                                    </Box>
                                </Box>
                            ))}
                        </Flex>
                    </Flex>

                    {/* Carousel Navigation */}
                    <Flex justify="center" mt={4}>
                        {Array.from({ length: totalSlides }).map((_, index) => (
                            <Box
                                key={index}
                                as="button"
                                mx={1}
                                width="10px"
                                height="10px"
                                borderRadius="full"
                                bg={currentSlide === index ? "red.600" : "gray.300"}
                                onClick={() => goToSlide(index)}
                            />
                        ))}
                    </Flex>

                    {/* Carousel Controls */}
                    <IconButton
                        aria-label="Previous slide"
                        icon={<ChevronLeftIcon />}
                        position="absolute"
                        left={2}
                        top="50%"
                        transform="translateY(-50%)"
                        zIndex={2}
                        onClick={prevSlide}
                        bg="white"
                        opacity={0.8}
                        _hover={{ opacity: 1 }}
                        display={{ base: "none", md: "flex" }}
                    />

                    <IconButton
                        aria-label="Next slide"
                        icon={<ChevronRightIcon />}
                        position="absolute"
                        right={2}
                        top="50%"
                        transform="translateY(-50%)"
                        zIndex={2}
                        onClick={nextSlide}
                        bg="white"
                        opacity={0.8}
                        _hover={{ opacity: 1 }}
                        display={{ base: "none", md: "flex" }}
                    />
                </Box>

                {/* Video Testimonials */}
                <SimpleGrid columns={{ base: 1, md: 3 }} gap={8}>
                    {testimonials.map((testimonial) => (
                        <Box
                            key={testimonial.id}
                            position="relative"
                            borderRadius="lg"
                            overflow="hidden"
                            boxShadow="md"
                            onClick={() => openVideoModal(testimonial.videoId, testimonial.title)}
                        >
                            <Box position="relative" height="200px">
                                <Image
                                    src={testimonial.thumbnail || "/placeholder.svg"}
                                    alt={testimonial.title}
                                    fill
                                    style={{ objectFit: "cover" }}
                                />
                                <Flex
                                    position="absolute"
                                    top={0}
                                    left={0}
                                    right={0}
                                    bottom={0}
                                    align="center"
                                    justify="center"
                                    bg="rgba(0,0,0,0.3)"
                                    cursor="pointer"
                                    transition="background 0.3s"
                                    _hover={{ bg: "rgba(0,0,0,0.5)" }}
                                >
                                    <Box
                                        as="button"
                                        width="60px"
                                        height="60px"
                                        borderRadius="full"
                                        bg="red.600"
                                        display="flex"
                                        alignItems="center"
                                        justifyContent="center"
                                        _hover={{ bg: "red.700" }}
                                    >
                                        <Box
                                            as="span"
                                            borderLeft="20px solid white"
                                            borderTop="12px solid transparent"
                                            borderBottom="12px solid transparent"
                                            ml={1}
                                        />
                                    </Box>
                                </Flex>
                            </Box>
                        </Box>
                    ))}
                </SimpleGrid>
            </Container>

            {/* Video Modal */}
            <VideoModal isOpen={isOpen} onClose={onClose} videoId={selectedVideo.videoId} title={selectedVideo.title} />
        </Box>
    )
}

