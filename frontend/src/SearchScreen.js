import React from "react";
import { Box, Link, FormLabel, FormControl, Input } from "@chakra-ui/react";

function SearchScreen() {
  return (
    <Box>
      <header className="App-header">
        <Link to={"/"}>Local Cuisine</Link>
        <br />
        <FormControl>
          <FormLabel>県名</FormLabel>
          <Input type="prefecture" placeholder="県名を入力してください" />
        </FormControl>
      </header>
    </Box>
  );
}

export default SearchScreen;
