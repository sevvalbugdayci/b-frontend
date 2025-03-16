import { useState, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import type { AppDispatch, RootState } from "../store/store";
import { loginUser } from "../store/slices/authSlice";
import { useRouter } from "next/router";
import Image from "next/image";
import styles from "../styles/Login.module.scss";
import useMediaQuery from "../hooks/useMediaQuery";
import { Box, Button, TextField, Typography } from "@mui/material";

const LoginPage = () => {
  const dispatch = useDispatch<AppDispatch>();
  const router = useRouter();
  const isMobile = useMediaQuery("(max-width: 1024px)");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");
  const user = useSelector((state: RootState) => state.auth.user);

  useEffect(() => {
    if (user) {
      router.push("/packets");
    }
  }, [user, router]);

  const handleLogin = async () => {
    if (!email || !password) {
      setError("Email and password required");
      return;
    }
    try {
      await dispatch(loginUser({ email, password })).unwrap();
      router.push("/packets");
    } catch {
      throw new Error("Could not receive products or packages! Please try again.");
    }
  };

  return (
    <div className={styles.container}>
      {!isMobile && (
        <div className={styles.imageContainer}>
          <Image src="/images/loginright.png" alt="Login" layout="fill" objectFit="cover" />
        </div>
      )}
      <div className={styles.formContainer}>
        <Typography variant="h4" className={styles.heading}>Merhaba</Typography>
        <Typography variant="body1" className={styles.subheading}>beije&apos;e hoş geldin!</Typography>
        <Box className={styles.authButtons}>
          <Button variant="outlined" className={styles.googleButton}>
            <Image src="/images/google.svg" width={20} height={20} alt="Google" /> Google ile Giriş Yap
          </Button>
          <Button variant="outlined" className={styles.facebookButton}>
            <Image src="/images/facebooklogin.svg" width={20} height={20} alt="Facebook" /> Facebook ile Giriş Yap
          </Button>
        </Box>
        <Box className={styles.InputBox}>
          <TextField 
            label="E-mail adresin"
            className={styles.input}
            value={email} 
            onChange={(e) => setEmail(e.target.value)} 
            margin="normal" 
            fullWidth 
          />
          <TextField 
            label="Şifren" 
            type="password" 
            value={password} 
            onChange={(e) => setPassword(e.target.value)} 
            margin="normal" 
            fullWidth 
          />
          {error && <Typography color="error">{error}</Typography>}
          <Typography className={styles.forgotPassword}>Şifremi Unuttum</Typography>
          <Button 
            variant="contained" 
            className={styles.loginButton} 
            onClick={handleLogin}
          >
            Giriş Yap
          </Button>
        </Box>
      </div>
    </div>
  );
};

export default LoginPage;