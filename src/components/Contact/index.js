import React, { useState } from "react";
import CssBaseline from "@mui/material/CssBaseline";
import TextField from "@mui/material/TextField";
import Grid from "@mui/material/Grid";
import Box from "@mui/material/Box";
import Typography from "@mui/material/Typography";
import Container from "@mui/material/Container";
import { createTheme, ThemeProvider } from "@mui/material/styles";
import "./style.scss";
import { makeStyles } from "@material-ui/core/styles";

const theme = createTheme({
  palette: {
    primary: {
      main: "#8F8F8F",
    },
    secondary: {
      main: "#f8bbd0",
    },
  },
});

const useStyles = makeStyles((theme) => ({
  input: {
    background: "#2B2B2B",
  },
}));

export default function Contact(props) {
  const classes = useStyles();
  const [email, setEmail] = useState("");
  const [name, setName] = useState("");
  const [subject, setSubject] = useState("");
  const [message, setMessage] = useState("");

  const handleSubmit = (event) => {
    setEmail("");
    setName("");
    setSubject("");
    setMessage("");
    event.preventDefault();
  };

  return (
    <div className="contact">
      <div className="wrap">
        <ThemeProvider theme={theme}>
          <Container maxWidth="sm">
            <CssBaseline />
            <Box
              sx={{
                padding: 6,
                marginTop: 5,
                display: "flex",
                flexDirection: "column",
                alignItems: "center",
              }}
            >
              <Typography component="h1" className="h1c" variant="h5">
                Contact me
              </Typography>
              <Box
                component="form"
                action="https://formsubmit.co/makristamatina@gmail.com"
                method="POST"
                Validate
                onSubmit={handleSubmit}
                sx={{ mt: 3 }}
              >
                <Grid container spacing={2}>
                  <Grid item xs={12} sm={6}>
                    <TextField
                      InputLabelProps={{
                        style: { color: "#8F8F8F" },
                      }}
                      InputProps={{ className: classes.input }}
                      autoComplete="given-name"
                      id="name"
                      label="Name"
                      name="name"
                      value={name}
                      onChange={(e) => setName(e.target.value)}
                      required
                      fullWidth
                      autoFocus
                    />
                  </Grid>
                  <Grid item xs={12} sm={6}>
                    <TextField
                      InputLabelProps={{
                        style: { color: "#8F8F8F" },
                      }}
                      InputProps={{ className: classes.input }}
                      required
                      fullWidth
                      id="email"
                      label="Email Address"
                      name="email"
                      autoComplete="email"
                      value={email}
                      onChange={(e) => setEmail(e.target.value)}
                    />
                  </Grid>
                  <Grid item xs={12}>
                    <TextField
                      InputLabelProps={{
                        style: { color: "#8F8F8F" },
                      }}
                      InputProps={{ className: classes.input }}
                      fullWidth
                      id="subject"
                      label="Subject"
                      name="subject"
                      value={subject}
                      onChange={(e) => setSubject(e.target.value)}
                      autoComplete="subject"
                    />
                  </Grid>
                  <Grid item xs={12}>
                    <TextField
                      InputLabelProps={{
                        style: { color: "#8F8F8F", width: 200 },
                      }}
                      InputProps={{ className: classes.input }}
                      required
                      fullWidth
                      value={message}
                      onChange={(e) => setMessage(e.target.value)}
                      name="message"
                      label="Your message"
                      id="message"
                      multiline
                      rows={4}
                    />
                  </Grid>
                </Grid>
                <button type=" submit" className="btn">
                  Send
                </button>
              </Box>
            </Box>
          </Container>
        </ThemeProvider>
      </div>
      <svg
        xmlns="http://www.w3.org/2000/svg"
        className="wave "
        viewBox="0 0 1440 320"
      >
        <path
          fill="#F34BB3"
          fillOpacity="1"
          d="M0,288L48,272C96,256,192,224,288,197.3C384,171,480,149,576,165.3C672,181,768,235,864,250.7C960,267,1056,245,1152,250.7C1248,256,1344,288,1392,304L1440,320L1440,320L1392,320C1344,320,1248,320,1152,320C1056,320,960,320,864,320C768,320,672,320,576,320C480,320,384,320,288,320C192,320,96,320,48,320L0,320Z"
        ></path>
      </svg>
    </div>
  );
}
