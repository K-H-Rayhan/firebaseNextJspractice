import Avatar from "@mui/material/Avatar";
import Button from "@mui/material/Button";
import CssBaseline from "@mui/material/CssBaseline";
import TextField from "@mui/material/TextField";
import Link from "@mui/material/Link";
import Grid from "@mui/material/Grid";
import Box from "@mui/material/Box";
import LockOutlinedIcon from "@mui/icons-material/LockOutlined";
import Typography from "@mui/material/Typography";
import Container from "@mui/material/Container";
import {
  getAuth,
  createUserWithEmailAndPassword,
  onAuthStateChanged,
  signInWithEmailAndPassword,
  signOut,
  GoogleAuthProvider,
  signInWithRedirect,
  getRedirectResult,
  signInWithPopup,
} from "firebase/auth";
import { useRouter } from "next/router";
import app from "../db/firebase";
import { userConext } from "../contexts/userContext";
import React from "react";
import Layout from "../components/Layout/Layout";
import { motion } from "framer-motion";
function Copyright(props) {
  return (
    <Typography
      variant="body2"
      color="text.secondary"
      align="center"
      {...props}
    >
      {"Copyright © "}
      Valorant {new Date().getFullYear()}
    </Typography>
  );
}
function Login() {
  const [user, setUser] = React.useContext(userConext);
  const [errorCode, setError] = React.useState();
  const router = useRouter();
  const provider = new GoogleAuthProvider();
  const auth = getAuth(app);
  const login = async () => {
    const res = await signInWithRedirect(auth, provider);
  };
  const handleSubmit = (event) => {
    event.preventDefault();
    const data = new FormData(event.currentTarget);
    // eslint-disable-next-line no-console
    // console.log({
    //   email: data.get("email"),
    //   password: data.get("password"),
    // });
    signInWithEmailAndPassword(auth, data.get("email"), data.get("password"))
      .then((userCredential) => {
        const user = userCredential.user;
      })
      .catch((error) => {
        createUserWithEmailAndPassword(
          auth,
          data.get("email"),
          data.get("password")
        )
          .then((userCredential) => {
            // Signed in
            const user = userCredential.user;
            // ...
          })
          .catch((error) => {
            const errorCode = error.code;
            setError(errorCode);
            // ..
          });
        setError(error.code);
      });
  };
  //User Info
  onAuthStateChanged(auth, (user) => {
    if (user) {
      setUser(user);
      router.push("/");
    } else {
      setUser(user);
    }
  });
  return (
    <Layout>
      <motion.div
        initial={{ x: 300, opacity: 0 }}
        animate={{ x: 0, opacity: 1 }}
        exit={{ x: -300, opacity: 0 }}
      >
        <Container component="main" maxWidth="xs">
          <CssBaseline />
          <Box
            sx={{
              marginTop: 8,
              display: "flex",
              flexDirection: "column",
              alignItems: "center",
            }}
          >
            <Avatar sx={{ m: 1, bgcolor: "secondary" }}>
              <LockOutlinedIcon />
            </Avatar>
            <Typography component="h1" variant="h5">
              Sign in
            </Typography>
            <Box
              component="form"
              onSubmit={handleSubmit}
              noValidate
              sx={{ mt: 1 }}
            >
              <TextField
                margin="normal"
                required
                fullWidth
                id="email"
                label="Email Address"
                name="email"
                autoComplete="email"
                autoFocus
              />
              <TextField
                margin="normal"
                required
                fullWidth
                name="password"
                label="Password"
                type="password"
                id="password"
                autoComplete="current-password"
              />
              <Button
                type="submit"
                fullWidth
                variant="contained"
                sx={{ mt: 3, mb: 2 }}
              >
                Sign In
              </Button>
            </Box>
            <Button
              type="submit"
              fullWidth
              variant="contained"
              sx={{ mb: 2 }}
              color="error"
              onClick={login}
            >
              Login in with Google
            </Button>
            <Typography>{errorCode}</Typography>
            <Grid container>
              <Grid item xs>
                <Link href="#" variant="body2">
                  Forgot password?
                </Link>
              </Grid>
            </Grid>
          </Box>
          <Copyright sx={{ mt: 8, mb: 4 }} />
        </Container>
      </motion.div>
    </Layout>
  );
}

export default Login;
