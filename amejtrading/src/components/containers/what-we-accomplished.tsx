"use client"

import {useState, useEffect} from "react"
import {Box, Container, Heading, SimpleGrid, Flex, IconButton, useDisclosure} from "@chakra-ui/react"
import {ChevronLeftIcon, ChevronRightIcon} from "@chakra-ui/icons"
import Image from "next/image"
import {VideoModal} from "@/components/containers/video-modal"
import TestimonialSection from "@/components/containers/testimonial-section";

const achievements = [
    {id: 1, image: "/img/men.jpg", alt: "Award ceremony with two people in formal attire"},
    {id: 2, image: "/img/eight.jpg", alt: "Award presentation with two professionals"},
    {id: 3, image: "/img/nine.jpg", alt: "Car presentation event"},
    {id: 4, image: "/img/pp.jpg", alt: "SUV with green bow as prize"},
    {id: 5, image: "/img/ward.jpg", alt: "Award ceremony"},
    {id: 6, image: "/img/cc.jpg", alt: "Trading seminar event"},
    {id: 7, image: "/img/men.jpg", alt: "Award ceremony with two people in formal attire"},
    {id: 8, image: "/img/nine.jpg", alt: "Car presentation event"},
    {id: 9, image: "/img/eight.jpg", alt: "Award presentation with two professionals"},
    {id: 10, image: "/img/pp.jpg", alt: "SUV with green bow as prize"},
]

const testimonials = [
    {id: 1, title: "Efe Urhobo Amej Trading Testimonial", videoUrl: "https://www.youtube.com/embed/L4YdPpS8m4s"},
    {id: 2, title: "Marho Abigail Amej Trading Testimonial", videoUrl: "https://www.youtube.com/embed/c9eDm-gDZi4"},
    {id: 3, title: "Ngozi David Share Her Experience", videoUrl: "https://www.youtube.com/embed/dgS0pMGy0Q0"},
];

export function WhatWeAccomplished() {
    const [currentSlide, setCurrentSlide] = useState(0)
    const [isHovering, setIsHovering] = useState(false)
    const [selectedVideo, setSelectedVideo] = useState({videoId: "", title: ""})
    const {isOpen, onOpen, onClose} = useDisclosure()

    const itemsPerRow = 4
    const totalSlides = achievements.length - itemsPerRow + 1

    const nextSlide = () => {
        setCurrentSlide((prev) => (prev >= totalSlides - 1 ? 0 : prev + 1))
    }

    const prevSlide = () => {
        setCurrentSlide((prev) => (prev <= 0 ? totalSlides - 1 : prev - 1))
    }

    const goToSlide = (index: number) => {
        setCurrentSlide(index)
    }

    const openVideoModal = (videoId: string, title: string) => {
        setSelectedVideo({videoId, title})
        onOpen()
    }

    useEffect(() => {
        if (!isHovering) {
            const interval = setInterval(() => {
                nextSlide()
            }, 5000)

            return () => clearInterval(interval)
        }
    }, [isHovering, currentSlide])

    return (
        <Box as="section" py={16} px='10%' bg="gray.50">
            <Container maxW="container.xl">
                <Heading as="h2" fontSize={{base: "2xl", md: "3xl"}} mb={6}>
                    What We Accomplished.
                </Heading>

                <Box border='1px solid white' backgroundColor='white' width='full' height='full' py={5} px={4} borderRadius="lg" boxShadow="md" >

                    <Box
                        position="relative"
                        mb={12}
                        onMouseEnter={() => setIsHovering(true)}
                        onMouseLeave={() => setIsHovering(false)}
                    >
                        <Flex overflow="hidden">
                            <Flex
                                transition="transform 0.5s ease"
                                transform={`translateX(-${currentSlide * (100 / itemsPerRow)}%)`}
                                width={`${(achievements.length / itemsPerRow) * 100}%`}
                            >
                                {achievements.map((achievement) => (
                                    <Box key={achievement.id} minWidth={`${100 / itemsPerRow}%`} px={2}>
                                        <Box position="relative" height="250px" borderRadius="md" overflow="hidden">
                                            <Image
                                                src={achievement.image}
                                                alt={achievement.alt}
                                                layout="fill"
                                                objectFit="cover"
                                            />
                                        </Box>
                                    </Box>
                                ))}
                            </Flex>
                        </Flex>

                        <Flex justify="center" mt={4}>
                            {Array.from({length: totalSlides}).map((_, index) => (
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

                        <IconButton
                            aria-label="Previous slide"
                            icon={<ChevronLeftIcon/>}
                            position="absolute"
                            left={2}
                            top="50%"
                            transform="translateY(-50%)"
                            zIndex={2}
                            onClick={prevSlide}
                            bg="white"
                            opacity={0.8}
                            _hover={{opacity: 1}}
                            display={{base: "none", md: "flex"}}
                        />

                        <IconButton
                            aria-label="Next slide"
                            icon={<ChevronRightIcon/>}
                            position="absolute"
                            right={2}
                            top="50%"
                            transform="translateY(-50%)"
                            zIndex={2}
                            onClick={nextSlide}
                            bg="white"
                            opacity={0.8}
                            _hover={{opacity: 1}}
                            display={{base: "none", md: "flex"}}
                        />
                    </Box>

                    <SimpleGrid columns={{base: 1, md: 3}} spacing={8}>
                        {testimonials.map((testimonial) => (
                            <Box key={testimonial.id} borderRadius="lg" overflow="hidden" boxShadow="md">
                                <iframe
                                    width="100%"
                                    height="250px"
                                    src={testimonial.videoUrl}
                                    title={testimonial.title}
                                    frameBorder="0"
                                    allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                                    allowFullScreen
                                ></iframe>
                            </Box>
                        ))}
                    </SimpleGrid>
                </Box>
            </Container>

            <VideoModal isOpen={isOpen} onClose={onClose} videoId={selectedVideo.videoId} title={selectedVideo.title}/>
            <TestimonialSection/>
        </Box>
    )
}


