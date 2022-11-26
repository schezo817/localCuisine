import React from "react";
import { Link, Button, Box } from "@chakra-ui/react";

function GachaScreen() {
  return (
    <Box>
      <header className="App-header">
        <Link to={"/"}>Local Cuisine</Link>
        <br />
        <Button>ガチャを一回回す</Button>
      </header>
    </Box>
  );
}

export default GachaScreen;
