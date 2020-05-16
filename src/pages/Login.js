import React from "react";
import {
  Paper,
  withStyles,
  Grid,
  TextField,
  Button,
  FormControlLabel,
  Checkbox,
} from "@material-ui/core";
import { Face, Fingerprint, Lock } from "@material-ui/icons";
import LoginService from "../services/LoginService";
const styles = (theme) => ({
  margin: {
    margin: theme.spacing.unit,
  },
  padding: {
    padding: theme.spacing.unit,
  },
  label: {
    "&$focusedLabel": {
      color: "#ff6f00",
    },
    "&$erroredLabel": {
      color: "orange",
    },
  },
  focusedLabel: {},
  erroredLabel: {},
  underline: {
    "&$error:after": {
      borderBottomColor: "orange",
    },
    "&:after": {
      borderBottom: `2px solid #ff6f00`,
    },
  },
  error: {},
});

const Login = (props) => {
  const { classes } = props;

  const [username, setUsername] = React.useState('')

  const handleChangeUsername = (e) => {
    setUsername(e.target.value)
  }

  const loginAction = async () => {
    try {
      const response = await LoginService(username)
      if (response.status >= 200 && response.status < 300) {
        console.log(response)
        localStorage.setItem('salescode', username)
        localStorage.setItem('timeLogin', response.result)
        localStorage.setItem('loggedIn', 'true')
        props.history.push('/')
      }else{
        console.log(response)
        alert('error')
      }
      
    } catch (error) {
      console.log(error)
      alert('error')
    }
  }

  return (
    <Grid
      container
      spacing={0}
      direction="column"
      alignItems="center"
      justify="center"
      style={{ minHeight: "100vh", backgroundColor: "#fff" }}
    >
      <Grid item xs={3}>
        <Grid container spacing={0} direction="column" alignItems="center" justify="center">
          <div className={classes.margin}>
            <img src="logodanamon.png" width="250px" alt="logo" />
          </div>
        </Grid>
        <Paper className={classes.padding}>
          <div className={classes.margin}>
            <Grid container spacing={3} alignItems="flex-end">
              <Grid item>
                <Face />
              </Grid>
              <Grid item md={true} sm={true} xs={true}>
                <TextField
                  id="username"
                  label="Username"
                  type="text"
                  value={username}
                  onChange={handleChangeUsername}
                  fullWidth
                  autoFocus
                  required
                  InputLabelProps={{
                    classes: {
                      root: classes.label,
                      focused: classes.focusedLabel,
                      error: classes.erroredLabel,
                    },
                  }}
                  InputProps={{
                    classes: {
                      root: classes.underline,
                      error: classes.error,
                    },
                  }}
                />
              </Grid>
            </Grid>

            <Grid container spacing={3} alignItems="flex-end">
              <Grid item>
                <Lock />
              </Grid>
              <Grid item md={true} sm={true} xs={true}>
                <TextField
                  id="username"
                  label="Password"
                  color="#ff6f00"
                  type="password"
                  fullWidth
                  required
                  InputLabelProps={{
                    classes: {
                      root: classes.label,
                      focused: classes.focusedLabel,
                      error: classes.erroredLabel,
                    },
                  }}
                  InputProps={{
                    classes: {
                      root: classes.underline,
                      error: classes.error,
                    },
                  }}
                />
              </Grid>
            </Grid>

            <Grid
              container
              alignItems="center"
              justify="space-between"
              style={{ marginTop: "20px" }}
            >
              <Grid item>
                <FormControlLabel
                  control={<Checkbox color="primary" style={{ color: "#ff6f00" }} />}
                  label="Remember me"
                />
              </Grid>
              <Grid item>
                <Button
                  disableFocusRipple
                  disableRipple
                  style={{ textTransform: "none", color: "#ff6f00" }}
                  variant="text"
                  color="primary"
                >
                  Forgot password ?
                </Button>
              </Grid>
            </Grid>
            <Grid container justify="center" style={{ marginTop: "10px" }}>
              <Button
                variant="contained"
                color="primary"
                style={{ textTransform: "none", backgroundColor: "#ff6f00", width: "100%" }}
                onClick={() => loginAction()}
              >
                Login
              </Button>
            </Grid>
          </div>
        </Paper>
      </Grid>
    </Grid>
  );
};

export default withStyles(styles)(Login);
