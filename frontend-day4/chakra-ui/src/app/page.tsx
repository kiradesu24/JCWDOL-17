import Image from "next/image";
import styles from "./page.module.css";
import { Flex, Box, Button, Stack } from "@chakra-ui/react";

export default function Home() {
  return (
    <Stack bg={"carrot"} className="green" >
      This is the Box
      <Box>
        <Button 
        colorPalette={"teal"} variant={"outline"} size={"xl"}
        >
          Click Me
        </Button>
      </Box>
    </Stack>
  );
}