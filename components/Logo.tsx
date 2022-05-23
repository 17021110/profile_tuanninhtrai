import { Text, useColorModeValue } from "@chakra-ui/react";
import styled from "@emotion/styled";
import Link from "next/link";
// import { GiPineapple } from "react-icons/gi";
const LogoBox = styled.span`
  font-weight: bold;
  font-size: 18px;
  display: inline-flex;
  align-items: center;
  line-height: 20px;
  padding: 10px 0px;
  transition: all 250ms ease-in-out;

  &:hover svg {
    transform: rotate(10deg);
  }
`;

const Logo = () => {
  return (
    <Link href="/">
      <a>
        <LogoBox>

          <Text
            color={useColorModeValue("gray.800", "whiteAlpha.900")}
            fontFamily="M PLUS Rounded 1c"
            fontWeight="bold"
          >
            Tuấn Xinh Trai
          </Text>
        </LogoBox>
      </a>
    </Link>
  );
};

export default Logo;