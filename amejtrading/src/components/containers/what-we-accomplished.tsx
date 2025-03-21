"use client";

import { useState, useEffect, useCallback } from "react";
import {
    Box,
    Container,
    Heading,
    SimpleGrid,
    Flex,
    IconButton,
    useBreakpointValue
} from "@chakra-ui/react";
import { ChevronLeftIcon, ChevronRightIcon } from "@chakra-ui/icons";
import Image from "next/image";
import { motion } from "framer-motion";
import { VideoModal } from "@/components/containers/video-modal";
import TestimonialSection from "@/components/containers/testimonial-section";

const achievements = [
    { id: 1, image: "/img/men.jpg", alt: "Award ceremony with two people in formal attire" },
    { id: 2, image: "/img/eight.jpg", alt: "Award presentation with two professionals" },
    { id: 3, image: "/img/nine.jpg", alt: "Car presentation event" },
    { id: 4, image: "/img/pp.jpg", alt: "SUV with green bow as prize" },
    { id: 5, image: "/img/ward.jpg", alt: "Award ceremony" },
    { id: 6, image: "/img/cc.jpg", alt: "Trading seminar event" },
    { id: 7, image: "/img/men.jpg", alt: "Award ceremony with two people in formal attire" },
    { id: 8, image: "/img/nine.jpg", alt: "Car presentation event" },
    { id: 9, image: "/img/eight.jpg", alt: "Award presentation with two professionals" },
    { id: 10, image: "/img/pp.jpg", alt: "SUV with green bow as prize" }
];

const testimonials = [
    { id: 1, title: "Efe Urhobo Amej Trading Testimonial", videoUrl: "https://www.youtube.com/embed/L4YdPpS8m4s" },
    { id: 2, title: "Marho Abigail Amej Trading Testimonial", videoUrl: "https://www.youtube.com/embed/c9eDm-gDZi4" },
    { id: 3, title: "Ngozi David Share Her Experience", videoUrl: "https://www.youtube.com/embed/dgS0pMGy0Q0" },
];

export function WhatWeAccomplished() {
    const [currentSlide, setCurrentSlide] = useState(0);
    const [isHovering, setIsHovering] = useState(false);

    // 🔥 Responsive grid layout
    const itemsPerRow = useBreakpointValue({ base: 1, sm: 2, md: 3, lg: 4 }) || 4;
    const totalSlides = achievements.length - itemsPerRow + 1;

    // 🔄 UseCallback to optimize functions
    const nextSlide = useCallback(() => {
        setCurrentSlide((prev) => (prev >= totalSlides - 1 ? 0 : prev + 1));
    }, [totalSlides]);

    const prevSlide = useCallback(() => {
        setCurrentSlide((prev) => (prev <= 0 ? totalSlides - 1 : prev - 1));
    }, [totalSlides]);

    // ⏳ Auto-slide with interval
    useEffect(() => {
        if (!isHovering) {
            const interval = setInterval(nextSlide, 5000);
            return () => clearInterval(interval);
        }
    }, [isHovering, nextSlide]);

    return (
        <Box as="section" py={16} bg="gray.50">
            <Container maxW="container.xl">
                <Heading as="h2" fontSize={{ base: "2xl", md: "3xl" }} mb={6} textAlign="center">
                    What We Accomplished.
                </Heading>

                {/* 🔥 Main Content Box with smooth effects */}
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.8 }}
                >
                    <Box
                        border="1px solid white"
                        backgroundColor="white"
                        width="full"
                        py={5}
                        px={4}
                        borderRadius="lg"
                        boxShadow="lg"
                    >
                        {/* Image Slider Section */}
                        <Box
                            position="relative"
                            mb={12}
                            onMouseEnter={() => setIsHovering(true)}
                            onMouseLeave={() => setIsHovering(false)}
                        >
                            <Flex overflow="hidden">
                                <motion.div
                                    style={{ display: "flex", width: `${(achievements.length / itemsPerRow) * 100}%` }}
                                    animate={{ x: `-${currentSlide * (100 / itemsPerRow)}%` }}
                                    transition={{ type: "tween", duration: 0.6 }}
                                >
                                    {achievements.map((achievement) => (
                                        <Box
                                            key={achievement.id}
                                            minWidth={`${100 / itemsPerRow}%`}
                                            px={{ base: 1, md: 2 }}
                                        >
                                            <Box
                                                position="relative"
                                                height={{ base: "200px", sm: "220px", md: "250px", lg: "300px" }}
                                                borderRadius="md"
                                                overflow="hidden"
                                                boxShadow="md"
                                            >
                                                <Image
                                                    src={achievement.image}
                                                    alt={achievement.alt}
                                                    layout="fill"
                                                    objectFit="cover"
                                                    style={{ borderRadius: "8px" }}
                                                />
                                            </Box>
                                        </Box>
                                    ))}
                                </motion.div>
                            </Flex>

                            {/* 🔵 Slide Dots */}
                            <Flex justify="center" mt={4}>
                                {Array.from({ length: totalSlides }).map((_, index) => (
                                    <motion.div
                                        key={index}
                                        whileHover={{ scale: 1.2 }}
                                        style={{
                                            width: "10px",
                                            height: "10px",
                                            borderRadius: "50%",
                                            background: currentSlide === index ? "red.600" : "gray.300",
                                            margin: "0 4px",
                                            cursor: "pointer"
                                        }}
                                        onClick={() => setCurrentSlide(index)}
                                    />
                                ))}
                            </Flex>

                            {/* Navigation Buttons with Animation */}
                            <IconButton
                                aria-label="Previous slide"
                                icon={<ChevronLeftIcon />}
                                position="absolute"
                                left={2}
                                top="50%"
                                transform="translateY(-50%)"
                                zIndex={2}
                                onClick={prevSlide}
                                as={motion.button}
                                whileHover={{ scale: 1.1 }}
                                bg="white"
                                boxShadow="md"
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
                                as={motion.button}
                                whileHover={{ scale: 1.1 }}
                                bg="white"
                                boxShadow="md"
                                opacity={0.8}
                                _hover={{ opacity: 1 }}
                                display={{ base: "none", md: "flex" }}
                            />
                        </Box>

                        {/* Video Testimonials */}
                        <SimpleGrid columns={{ base: 1, md: 3 }} spacing={8}>
                            {testimonials.map((testimonial) => (
                                <motion.div
                                    key={testimonial.id}
                                    initial={{ opacity: 0, scale: 0.9 }}
                                    animate={{ opacity: 1, scale: 1 }}
                                    transition={{ duration: 0.6 }}
                                >
                                    <Box borderRadius="lg" overflow="hidden" boxShadow="md">
                                        <iframe
                                            width="100%"
                                            height="250px"
                                            src={testimonial.videoUrl}
                                            title={testimonial.title}
                                            frameBorder="0"
                                            allow="autoplay; encrypted-media"
                                            allowFullScreen
                                        ></iframe>
                                    </Box>
                                </motion.div>
                            ))}
                        </SimpleGrid>
                    </Box>
                </motion.div>
            </Container>

            <TestimonialSection />
        </Box>
    );
}
