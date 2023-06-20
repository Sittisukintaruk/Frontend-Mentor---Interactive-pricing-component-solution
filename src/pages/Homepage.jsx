import {
  Box,
  Heading,
  Text,
  Flex,
  List,
  ListItem,
  Button,
  Image,
  Switch,
} from "@chakra-ui/react";
import React, { useState, useEffect } from "react";
import check from "../assets/images/icon-check.svg";
import "../indix.css";

const Homepage = () => {
  const [point, setPoint] = useState(3);

  useEffect(() => {
    console.log(point);
    return () => {
      point;
    };
  }, [point]);

  const setIndex = (e) => {
    setPoint(e.target.value);
  };

  return (
    <Box as="main" bgColor={"white"} fontFamily={"body"}>
      <Box textAlign={"center"} maxWidth={"562px"} mx={"auto"} mt={"125px"}>
        <Heading
          as={"h1"}
          fontSize={{ base: "5xl" }}
          color={"Neutral.dark_desaturated_blue"}
          fontWeight={"bold"}
        >
          Simple, traffic-based pricing
        </Heading>
        <Text
          mt={"21px"}
          maxW={"340px"}
          mx={"auto"}
          fontSize={"2xl"}
          color={"Neutral.grayish_blue"}
        >
          Sign-up for our 30-day trial. No credit card required.
        </Text>
      </Box>
      <Box
        mt={"128px"}
        mx={"auto"}
        maxWidth={"656px"}
        borderRadius={"md"}
        bg={"white"}
        boxShadow={"md"}
        pb={"16"}
      >
        <Box>
          <Box display={"flex"} flexDirection={"column"} gap={{ base: "79px" }}>
            <Heading
              textAlign={"center"}
              fontSize={"2xl"}
              letterSpacing={"widest"}
              color={"Neutral.grayish_blue"}
              fontWeight={"semibold"}
            >
              100K PAGEVIEWS
            </Heading>
            <Box w={"full"} display={"flex"} alignItems={"center"}>
              <input
                type="range"
                max={5}
                min={1}
                value={point}
                onChange={setIndex}
              />
            </Box>
            <Box
              textAlign={"center"}
              display={"flex"}
              gap={"18px"}
              alignItems={"center"}
              justifyContent={"center"}
            >
              <Text
                fontWeight={"extrabold"}
                color={"Neutral.dark_desaturated_blue"}
                fontSize={"6xl"}
                as={"span"}
                letterSpacing={"tight"}
              >
                $16.00
              </Text>
              <Text fontSize={"3xl"} color={"Neutral.grayish_blue"}>
                / month
              </Text>
            </Box>
          </Box>
        </Box>
        <Box
          mt={"70px"}
          ml={"90px"}
          mr={"25px"}
          pb={"83px"}
          borderColor={"Neutral.grayish_blue"}
        >
          <Flex justifyContent={"space-between"} alignItems={"center"}>
            <Text color={"Neutral.grayish_blue"} fontSize={"xl"}>
              Monthly Billing
            </Text>

            <input type="checkbox" id="switch" />
            <label htmlFor="switch">Toggle</label>

            <Flex alignItems={"center"} gap={"10px"}>
              <Text color={"Neutral.grayish_blue"} fontSize={"xl"}>
                Yearly Billing
              </Text>
              <Box
                px={"1rem"}
                py={"6px"}
                bgColor={"primary.light_grayish_red"}
                color={"primary.light_red"}
                borderRadius={"1.5rem"}
              >
                -25%
              </Box>
            </Flex>
          </Flex>
        </Box>
        <Box w={"full"} h={"2px"} bgColor={"Neutral.light_grayish_blue"} />
        <Box
          pt={"48px"}
          display={"flex"}
          alignItems={"center"}
          flexDirection={"column"}
        >
          <List
            fontSize={"xl"}
            color={"Neutral.grayish_blue"}
            display={"flex"}
            flexDirection={"column"}
            rowGap={"5"}
            textAlign={"center"}
          >
            <ListItem
              display={"flex"}
              gap={"4"}
              alignItems={"center"}
              justifyContent={"center"}
            >
              <Image w={{ base: "18px" }} src={check} alt="" />
              <Text>Unlimited websites</Text>
            </ListItem>
            <ListItem
              display={"flex"}
              gap={"4"}
              alignItems={"center"}
              justifyContent={"center"}
            >
              <Image w={{ base: "18px" }} src={check} alt="" />
              <Text>100% data owbership</Text>
            </ListItem>
            <ListItem
              display={"flex"}
              gap={"4"}
              alignItems={"center"}
              justifyContent={"center"}
            >
              <Image w={{ base: "18px" }} src={check} alt="" />
              <Text>Email reports</Text>
            </ListItem>
          </List>
          <Button fontWeight={"extrabold"} mt={"16"}>
            Start my trial
          </Button>
        </Box>
      </Box>
    </Box>
  );
};

export default Homepage;
