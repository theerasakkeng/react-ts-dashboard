import { FC, useState } from "react";
import "./Login.css";
import TextField from "@mui/material/TextField";
import AccountCircle from "@mui/icons-material/AccountCircle";
import InputAdornment from "@mui/material/InputAdornment";
import LockIcon from "@mui/icons-material/Lock";
import Visibility from "@mui/icons-material/Visibility";
import VisibilityOff from "@mui/icons-material/VisibilityOff";
import Grid from "@mui/material/Unstable_Grid2";
import Button from "@mui/material/Button";
import IconButton from "@mui/material/IconButton";
import { useNavigate } from "react-router-dom";
import CryptoJS from "crypto-js";
import Api from "../../api/api";

const Login: FC = () => {
  const navigate = useNavigate();
  const [showPassword, setShowPassword] = useState(false);
  const [login, setLogin] = useState({
    user_name: "",
    password: "",
  });
  const [salt, setSalt] = useState("");

  const handleClickShowPassword = () => setShowPassword((show) => !show);
  const handleMouseDownPassword = (
    event: React.MouseEvent<HTMLButtonElement>
  ) => {
    event.preventDefault();
  };

  const getSalt = async () => {
    let res: any = await Api.GetSalt(login.user_name);
    setSalt(res.data.salt);
  };

  const encryptPassword = (password: string, salt: string) => {
    let hash = CryptoJS.SHA256(password + salt);
    let hash_string = hash.toString(CryptoJS.enc.Base64);
    return hash_string;
  };

  const onLogin = async () => {
    let data = {
      user_name: login.user_name,
      password: encryptPassword(login.password, salt),
    };
    let res: any = await Api.Login(data.user_name, data.password);
    console.log(res);
  };

  return (
    <div className="login-container">
      <div className="login-warp bg-blur">
        <div className="logo-login">LOGO Login</div>
        <Grid container rowSpacing={2}>
          <Grid xs={12}>
            <TextField
              onChange={(e) => (login.user_name = e.target.value)}
              onBlur={getSalt}
              label="Username"
              InputProps={{
                startAdornment: (
                  <InputAdornment position="start">
                    <AccountCircle />
                  </InputAdornment>
                ),
              }}
              variant="outlined"
              fullWidth
            />
          </Grid>
          <Grid xs={12}>
            <TextField
              onChange={(e) => (login.password = e.target.value)}
              label="Password"
              InputProps={{
                startAdornment: (
                  <InputAdornment position="start">
                    <LockIcon />
                  </InputAdornment>
                ),
                endAdornment: (
                  <InputAdornment position="end">
                    <IconButton
                      aria-label="toggle password visibility"
                      onClick={handleClickShowPassword}
                      onMouseDown={handleMouseDownPassword}
                      edge="end"
                    >
                      {" "}
                      {showPassword ? <VisibilityOff /> : <Visibility />}
                    </IconButton>
                  </InputAdornment>
                ),
              }}
              variant="outlined"
              fullWidth
              type={showPassword ? "text" : "password"}
            />
          </Grid>
          <Grid xs={12} container justifyContent="center">
            <Button variant="contained" onClick={onLogin}>
              Login
            </Button>
          </Grid>
        </Grid>
        <div className="login-footer">
          Dont't have an account?{" "}
          <span className="register-link" onClick={() => navigate("/register")}>
            Create Account
          </span>
        </div>
      </div>
    </div>
  );
};
export default Login;
