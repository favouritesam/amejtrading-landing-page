// import { Box, Heading, Button, Container,Image } from "@chakra-ui/react"
//
// export default function LearnToTrade() {
//     return (
//         <Box position="relative" w="100%" h={{ base: "400px", md: "500px", lg: "600px" }}>
//             {/* Background Image */}
//             <Box position="absolute" inset={0} zIndex={0}>
//                 <Image
//                     src="/img/cc.jpg"
//                     alt="Trading Academy Banner"
//                     fill
//                     priority
//                     style={{ objectFit: "cover" }}
//                 />
//                 {/* Dark overlay */}
//                 <Box position="absolute" inset={0} bg="rgba(0,0,0,0.5)" zIndex={1} />
//             </Box>
//
//             {/* Content */}
//             <Container
//                 maxW="container.xl"
//                 h="100%"
//                 position="relative"
//                 zIndex={2}
//                 display="flex"
//                 flexDirection="column"
//                 justifyContent="center"
//                 alignItems="center"
//                 textAlign="center"
//             >
//                 <Box maxW={{ base: "90%", md: "70%", lg: "60%" }}>
//                     <Heading
//                         as="h1"
//                         fontSize={{ base: "3xl", md: "4xl", lg: "5xl" }}
//                         fontWeight="bold"
//                         color="white"
//                         lineHeight="1.2"
//                         mb={4}
//                     >
//                         Learn To Trade. Trade Smart. Earn More.
//                     </Heading>
//
//                     <Button
//                         colorScheme="red"
//                         size={{ base: "md", md: "lg" }}
//                         px={{ base: 6, md: 8 }}
//                         py={{ base: 5, md: 6 }}
//                         borderRadius="full"
//                         fontSize={{ base: "md", md: "lg" }}
//                         fontWeight="medium"
//                         mt={6}
//                         _hover={{
//                             transform: "translateY(-2px)",
//                             boxShadow: "lg",
//                         }}
//                         transition="all 0.3s"
//                     >
//                         Start For Free Today
//                     </Button>
//                 </Box>
//             </Container>
//         </Box>
//     )
// }
//
