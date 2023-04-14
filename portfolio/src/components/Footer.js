import React from "react";
import { Box, Flex } from "@chakra-ui/react";

const date = new Date

const Footer = () => {
  return (
    <Box backgroundColor="#18181b">
      <footer>
        <Flex
          margin="0 auto"
          px={12}
          color="white"
          justifyContent="center"
          alignItems="center"
          maxWidth="1024px"
          height={16}
        >
          <p>David • © {date.toUTCString().slice(12, 16)}</p>
        </Flex>
      </footer>
    </Box>
  );
};
export default Footer;
