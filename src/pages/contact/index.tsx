import { CNLink } from "@/components/chakra-next";
import { MyContainer } from "@/components/ui/continers";
import { Heading, Stack, Text } from "@chakra-ui/react";
import React from "react";
import { CiMail } from "react-icons/ci";
import { SlCalender } from "react-icons/sl";

export default function index() {
  return (
    <MyContainer marginBottom={10} >
      <Stack gap={8}>
        <Heading as="h1" fontSize="3xl" fontWeight="bold" mb={4}>
          Contact
        </Heading>
        <Stack gap={2}>
          <Text color="gray.400" lineHeight={1.5}>
            Feel free to reach out to me via email:{" "}
          </Text>
          <CNLink
            width={"fit-content"}
            _focus={{ outline: "none", boxShadow: "none" }}
            display={"flex"}
            href="mailto:thezenlabs.in@gmail.com"
            target="_blank"
          >
            <CiMail />
            thezenlabs.in@gmail.com
          </CNLink>
        </Stack>
        <hr color="gray.100" />
        <Stack gap={4}>
          <Heading as={"h2"} fontSize="2xl" fontWeight="bold">
            Feel free to reach out to me via email:{" "}
          </Heading>
          <CNLink
            width={"fit-content"}
            _focus={{ outline: "none", boxShadow: "none" }}
            display={"flex"}
            href="https://cal.com/thesohailjafri/15min-intro-call"
            target="_blank"
          >
            <SlCalender />
            Schedule a meet
          </CNLink>
        </Stack>
      </Stack>
    </MyContainer>
  );
}
