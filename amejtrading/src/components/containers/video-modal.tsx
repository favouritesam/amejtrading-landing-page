"use client"

import { useRef } from "react"
import {
    Modal,
    ModalOverlay,
    ModalContent,
    ModalHeader,
    ModalFooter,
    ModalBody,
    ModalCloseButton,
    Button,
    Box,
} from "@chakra-ui/react"
import { motion, Variants } from "framer-motion"

interface VideoModalProps {
    isOpen: boolean
    onClose: () => void
    videoId: string
    title: string
}

// Motion wrapper for animation
const MotionModalContent = motion(ModalContent)
const MotionOverlay = motion(ModalOverlay)

// Define animations
const modalVariants: Variants = {
    hidden: { opacity: 0, y: 50 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.4, ease: "easeOut" } },
    exit: { opacity: 0, y: 50, transition: { duration: 0.3, ease: "easeIn" } }
}

export function VideoModal({ isOpen, onClose, videoId, title }: VideoModalProps) {
    const finalRef = useRef(null)

    return (
        <Modal isOpen={isOpen} onClose={onClose} size="xl" isCentered finalFocusRef={finalRef}>
            {/* Animated overlay */}
            <MotionOverlay
                initial="hidden"
                animate={isOpen ? "visible" : "hidden"}
                exit="exit"
                variants={{
                    hidden: { opacity: 0 },
                    visible: { opacity: 1, transition: { duration: 0.3 } },
                    exit: { opacity: 0, transition: { duration: 0.2 } }
                }}
            />
            
            {/* Animated modal content */}
            <MotionModalContent
                initial="hidden"
                animate={isOpen ? "visible" : "hidden"}
                exit="exit"
                variants={modalVariants}
            >
                <ModalHeader>{title}</ModalHeader>
                <ModalCloseButton />
                <ModalBody>
                    <Box
                        as="iframe"
                        width="100%"
                        height="400px"
                        src={`https://www.youtube.com/embed/${videoId}`}
                        title={title}
                        frameBorder="0"
                        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                        allowFullScreen
                    />
                </ModalBody>
                <ModalFooter>
                    <Button colorScheme="red" mr={3} onClick={onClose}>
                        Close
                    </Button>
                </ModalFooter>
            </MotionModalContent>
        </Modal>
    )
}
