import { FC, useState } from "react";
import "./Register.css";
import TextField from "@mui/material/TextField";
import AccountCircle from "@mui/icons-material/AccountCircle";
import InputAdornment from "@mui/material/InputAdornment";
import LockIcon from "@mui/icons-material/Lock";
import Visibility from "@mui/icons-material/Visibility";
import VisibilityOff from "@mui/icons-material/VisibilityOff";
import Grid from "@mui/material/Unstable_Grid2";
import Button from "@mui/material/Button";
import IconButton from "@mui/material/IconButton";
import EmailIcon from "@mui/icons-material/Email";

const Register: FC = () => {
  const [showPassword, setShowPassword] = useState(false);

  const handleClickShowPassword = () => setShowPassword((show) => !show);
  const handleMouseDownPassword = (
    event: React.MouseEvent<HTMLButtonElement>
  ) => {
    event.preventDefault();
  };
  return (
    <div className="register-container">
      <div className="register-warp bg-blur">
        <div className="logo-register">LOGO Login</div>
        <Grid container rowSpacing={2}>
          <Grid xs={12}>
            <TextField
              label="First Name"
              InputProps={{
                startAdornment: (
                  <InputAdornment
                    position="start"
                    sx={{ color: "transparent" }}
                  >
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
              label="Last Name"
              InputProps={{
                startAdornment: (
                  <InputAdornment
                    position="start"
                    sx={{ color: "transparent" }}
                  >
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
              label="Email"
              InputProps={{
                startAdornment: (
                  <InputAdornment position="start">
                    <EmailIcon />
                  </InputAdornment>
                ),
              }}
              variant="outlined"
              fullWidth
            />
          </Grid>
          <Grid xs={12}>
            <TextField
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
              label="password"
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
          <Grid xs={12}>
            <TextField
              label="Confirm Password"
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
            <Button variant="contained">Register</Button>
          </Grid>
        </Grid>
        {/* <div className="register-footer">
          Dont't have an account?{" "}
          <span className="register-link">Privacy Policy</span>
        </div> */}
      </div>
    </div>
  );
};

export default Register;
