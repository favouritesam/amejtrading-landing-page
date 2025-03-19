"use client"

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
import { useRef } from "react"

interface VideoModalProps {
    isOpen: boolean
    onClose: () => void
    videoId: string
    title: string
}

export function VideoModal({ isOpen, onClose, videoId, title }: VideoModalProps) {
    const finalRef = useRef(null)

    return (
        <Modal isOpen={isOpen} onClose={onClose} size="xl" isCentered finalFocusRef={finalRef}>
            <ModalOverlay />
            <ModalContent>
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
            </ModalContent>
        </Modal>
    )
}

