import { ThemeProvider, createTheme } from "@mui/material/styles";
import { MenuItem, TextField } from "@mui/material";
import React from "react";
import "./Header.css";
import categories from "../../data/category.js";

function Header({ setCategory, category, word, setWord }) {
  const darkTheme = createTheme({
    palette: {
      primary: {
        main: "#fff",
      },
      mode: "dark",
    },
  });

  const handleChange = (language) => {
    setCategory(language);
    setWord("");
  };
  return (
    <div className="header">
      <span className="title">{word ? word : "Word Hunt"}</span>
      <div className="inputs">
        <ThemeProvider theme={darkTheme}>
          <TextField
            className="search"
            id="standard-basic"
            label="Search a word"
            variant="standard"
            value={word}
            onChange={(e) => setWord(e.target.value)}
          />
          <TextField
            className="select"
            id="standard-select-currency"
            select
            label="Language"
            value={category}
            onChange={(e) => handleChange(e.target.value)}
            variant="standard"
          >
            {categories.map((option) => {
              return (
                <MenuItem key={option.label} value={option.label}>
                  {option.value}
                </MenuItem>
              );
            })}
          </TextField>
        </ThemeProvider>
      </div>
    </div>
  );
}

export default Header;
