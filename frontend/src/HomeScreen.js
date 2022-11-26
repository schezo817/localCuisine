import React from "react";
import { Link, Box, Button } from "@chakra-ui/react";
import GachaScreen from "./GachaScreen";
import SearchScreen from "./SearchScreen";
import { useNavigate } from "react-router-dom";

function HomeScreen() {
  const navigate = useNavigate();
  return (
    <Box className="App">
      <header className="App-header">
        <Link>Local Cuisine</Link>
        <br />
        <Button onClick={() => navigate(GachaScreen)}>ガチャ画面に行く</Button>
        <br />
        <Button onClick={() => navigate(SearchScreen)}>検索画面に行く</Button>
      </header>
    </Box>
  );
}

export default HomeScreen;
