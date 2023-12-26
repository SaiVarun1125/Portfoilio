import React from "react";
import { Avatar, Box, Image, Heading, VStack } from "@chakra-ui/react";
import FullScreenSection from "./FullScreenSection";

const greeting = "Hello, I am Venkata!";
const bio1 = "A frontend developer";
const bio2 = "specialised in React";

// Implement the UI for the LandingSection component according to the instructions.
// Use a combination of Avatar, Heading and VStack components.
const LandingSection = () => (
  <FullScreenSection
    justifyContent="center"
    alignItems="center"
    isDarkBackground
    backgroundColor="#2A4365"
  >
    <VStack spacing={10}>
      <Avatar src="https://i.pravatar.cc/150?img=7"
      size="2xl"
      name="Your Name"
      />

      <Heading as='h4' size='xl' noOfLiners={1}>{greeting}</Heading>

      <VStack spacing={6}>
        <Heading as ='h1' size= "3xl" noOfLiners={1}>{bio1}</Heading>
        <Heading as='h2' size='3xl' noOfLiners={1}>{bio2}</Heading>
      </VStack>
    
    </VStack>
  </FullScreenSection>
);

export default LandingSection;
