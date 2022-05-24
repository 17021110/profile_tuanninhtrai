import { motion } from "framer-motion";
import {
  Table,
  Tbody,
  Tr,
  Td,
  TableContainer, } from "@chakra-ui/react";
import { ComponentPropsWithoutRef } from "react";




type TabbleProps = {
  data: any;
} & ComponentPropsWithoutRef<"table">;

const Tabble = ({ data}: TabbleProps) => (
      <Table variant='simple'>
        <Tbody>
        <Tr>
          <Td width="30%" fontWeight={500}>Time</Td>
          <Td>{data?.time}</Td>

        </Tr>
          <Tr>
            <Td width="30%" fontWeight={500}>Customer</Td>
            <Td>{data?.customer}</Td>
            
          </Tr>
          <Tr>
          <Td width="30%" fontWeight={500}>Description</Td>
          <Td>{data?.description}</Td>
            
          </Tr>
          <Tr>
          <Td width="30%" fontWeight={500}>Team Size</Td>
          <Td>{data?.teamSize}</Td>
          </Tr>
        <Tr>
          <Td width="30%" fontWeight={500}>My position</Td>
          <Td>{data?.position}</Td>
        </Tr>
        <Tr>
          <Td width="30%" fontWeight={500}>Technologies used</Td>
          <Td>{data?.technologies}</Td>
        </Tr>
        </Tbody>
      </Table>
);

export default Tabble;