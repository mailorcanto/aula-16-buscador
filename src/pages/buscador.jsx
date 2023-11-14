import { useState } from "react";
import axios from "axios";
import Grid from "@mui/material/Grid";
import Button from "@mui/material/Button";
import TextField from "@mui/material/TextField";
import MaterialCard from "../components/card";
import { ThemeProvider, createTheme } from '@mui/material/styles';
import CssBaseline from '@mui/material/CssBaseline';
import './buscador.css'

const darkTheme = createTheme({
  palette: {
    mode: 'dark',
  },
});

function Dark() {
  return (
    <ThemeProvider theme={darkTheme}>
      <CssBaseline />
      <main><Buscador /></main>
    </ThemeProvider>
  );
}

const Buscador = () => {
  const [user, setUser] = useState("");
  const [repositories, setRepositories] = useState([]);

  const handleSubmit = async (event) => {
    event.preventDefault();
    try {
      const response = await axios.get(
        `https://api.github.com/users/${user}/repos`
      );

      setRepositories(response.data);

      setUser("");
    } catch (error) {
      alert(error);
    }
  };

  const handleChange = (event) => {
    const inputValue = event.target.value;
    if (inputValue !== "") {
      setUser(inputValue);
    }
  };

  return (
    <div>
      <form onSubmit={handleSubmit}>
        <TextField
          label="Digite um usuário do Github"
          variant="outlined"
          onChange={handleChange}
          value={user}
          size="small"
          color="error"
        />
        <Button type="submit" variant="outlined" color="error">
          Buscar
        </Button>
      </form>
      <Grid container spacing={1}>
        {repositories.map((repository, index) => {
          return (
            <Grid item xs={6} md={3} key={index}>
              <MaterialCard key={index} repository={repository} />
            </Grid>
          );
        })}
      </Grid>
    </div>
  );
};

export default Dark;