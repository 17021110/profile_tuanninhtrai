import { ChevronRightIcon } from "@chakra-ui/icons";
import {
  Box,
  Container,
  Heading
} from "@chakra-ui/react";
import type { NextPage } from "next";
import NextLink from "next/link";
import Section from "../components/Section";
import Tabble from "../components/Tabble";

const Works: NextPage = () => {

  const data=[{
    customer:"japanese",
    name:'Kindy',
    description: "preschool management web system in japan.Including 5 ,domains are 5 independent websites for teachers, principals, parents, ...",
    id:1,
    teamSize: "10-15 devloper (8-10 FE, 2-3 BE,2-3 test, 1 PM)",
    position:"Frontend Developer",
    technologies:"React Hooks, jest test",
    time:"10/2020 - 4/2022"
  },
    {
      customer: "japanese",
      name: 'Techmate',
      description: "System online teaching platform about technology. In this project, our team wasresponsible for building an application that support matching between those who teachtechnology skills and those who want to learn.",
      id: 2,
      teamSize: "8 devloper , 4 testers , 2 PM",
      position: "Frontend Developer",
      technologies: "React hooks , redux saga , typescript , tailwind css",
      time:"8/2021 - 12/2021"
    },
    {
      customer: "japanese",
      name: 'Kindy - Tool',
      description: "recruitment website for kindy app",
      id: 3,
      teamSize: "6 devloper (3 FE, 2 BE,1 test, 1 PM)",
      position: "Frontend Developer - lead FE",
      technologies: "React Hooks, jest test",
      time:"1/2022 - 5/2022"
    },
]

  return (
    <Container p={4} maxW="container.sm">
      {data.map((item:any, index) => {
        return (<Section delay={`${0.1+index*0.2}`}>
          <Heading as="h3" variant="section-title">
            {item?.name}
          </Heading>
          <Tabble data={item}></Tabble>
        </Section>)
        })}
      
      
      
    </Container>
  );
};

export default Works;