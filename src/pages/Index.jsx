import React from "react";
import { Box, Container, Heading, Text, Button, VStack, HStack, Image, useColorModeValue, StackDivider, Icon, Link } from "@chakra-ui/react";
import { FaRobot, FaBrain, FaUniversity, FaBookOpen, FaPlus } from "react-icons/fa";
import InteractiveDemo from "./InteractiveDemo";

const Index = () => {
  const bg = useColorModeValue("gray.50", "gray.800");

  return (
    <Container maxW="container.xl" p={4}>
      <VStack spacing={12} align="stretch">
        {/* Hero Section */}
        <Box p={10}>
          <VStack spacing={4} align="stretch">
            <Heading as="h1" size="2xl" textAlign="center">
              Training LLMs for a Better Tomorrow
            </Heading>
            <Text fontSize="lg" textAlign="center">
              At HumanityAI, we specialize in developing Large Language Models (LLMs) that understand and represent the diverse spectrum of human experience.
            </Text>
            <Button leftIcon={<FaRobot />} colorScheme="teal" size="lg">
              Learn More
            </Button>
          </VStack>
        </Box>

        {/* Features Section */}
        <HStack spacing={10}>
          <VStack spacing={4} align="stretch" flex={1}>
            <Icon as={FaBrain} w={10} h={10} alignSelf="center" />
            <Heading as="h3" size="lg" textAlign="center">
              Advanced Research
            </Heading>
            <Text textAlign="center">Pioneering the frontier of AI with cutting-edge research and ethical practices.</Text>
          </VStack>

          <VStack spacing={4} align="stretch" flex={1}>
            <Icon as={FaUniversity} w={10} h={10} alignSelf="center" />
            <Heading as="h3" size="lg" textAlign="center">
              Educational Programs
            </Heading>
            <Text textAlign="center">Offering courses to cultivate the next generation of AI experts.</Text>
          </VStack>

          <VStack spacing={4} align="stretch" flex={1}>
            <Icon as={FaBookOpen} w={10} h={10} alignSelf="center" />
            <Heading as="h3" size="lg" textAlign="center">
              Open Knowledge
            </Heading>
            <Text textAlign="center">Building an open-source library of LLM knowledge accessible to all.</Text>
          </VStack>
        </HStack>

        {/* About Us Section */}
        <Box p={10}>
          <VStack spacing={4} align="stretch">
            <Heading as="h2" size="xl" textAlign="center">
              About Us
            </Heading>
            <Text fontSize="lg">We are a collective of AI enthusiasts, researchers, and educators dedicated to enhancing the capabilities of LLMs to serve society. Our mission is to ensure that AI represents the richness of human intelligence and empathy, fostering a future where technology complements humanity.</Text>
            <Button rightIcon={<FaRobot />} colorScheme="teal" size="lg">
              Meet the Team
            </Button>
          </VStack>
        </Box>

        {/* Team Section */}
        <VStack spacing={6} align="stretch">
          <Heading as="h3" size="lg" textAlign="center">
            Our Team
          </Heading>
          <HStack spacing={6}>
            <Box flex={1} textAlign="center">
              <Image borderRadius="full" boxSize="150px" src="https://images.unsplash.com/photo-1438761681033-6461ffad8d80?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w1MDcxMzJ8MHwxfHNlYXJjaHwxfHxhaSUyMHJlc2VhcmNoZXIlMjBwb3J0cmFpdHxlbnwwfHx8fDE3MDY5MzEzMjF8MA&ixlib=rb-4.0.3&q=80&w=1080" alt="AI Researcher" />
              <Text mt={4} fontWeight="bold">
                Alex Johnson
              </Text>
              <Text fontSize="sm">Lead AI Researcher</Text>
            </Box>
            <Box flex={1} textAlign="center">
              <Image borderRadius="full" boxSize="150px" src="https://images.unsplash.com/photo-1438761681033-6461ffad8d80?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w1MDcxMzJ8MHwxfHNlYXJjaHwxfHxhaSUyMGVkdWNhdG9yJTIwcG9ydHJhaXR8ZW58MHx8fHwxNzA2OTMxMzIyfDA&ixlib=rb-4.0.3&q=80&w=1080" alt="AI Educator" />
              <Text mt={4} fontWeight="bold">
                Samantha Lee
              </Text>
              <Text fontSize="sm">Head of Education</Text>
            </Box>
            <Box flex={1} textAlign="center">
              <Image borderRadius="full" boxSize="150px" src="https://images.unsplash.com/photo-1438761681033-6461ffad8d80?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w1MDcxMzJ8MHwxfHNlYXJjaHwxfHxhaSUyMGV0aGljcyUyMHBvcnRyYWl0fGVufDB8fHx8MTcwNjkzMTMyMnww&ixlib=rb-4.0.3&q=80&w=1080" alt="AI Ethics Expert" />
              <Text mt={4} fontWeight="bold">
                Michael Chen
              </Text>
              <Text fontSize="sm">Ethics Advisor</Text>
            </Box>
          </HStack>
          <Button size="lg" colorScheme="teal" alignSelf="center">
            Join Our Team <Icon as={FaPlus} ml={2} />
          </Button>
        </VStack>

        {/* Interactive Demo Section */}
        <InteractiveDemo />

        {/* Footer */}
        <Box p={4}>...</Box>
      </VStack>
    </Container>
  );
};

export default Index;
