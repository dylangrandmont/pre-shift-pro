import React from 'react';
import TextField from '@material-ui/core/TextField';
import Button from '@material-ui/core/Button';
import SignatureCanvas from 'react-signature-canvas'
import AppBar from '@material-ui/core/AppBar';
import Typography from '@material-ui/core/Typography';
import Toolbar from '@material-ui/core/Toolbar';
import Grid from '@material-ui/core/Grid';
import { withStyles } from '@material-ui/core/styles';

const styles = {
  canvas: {
    border: '1px solid black',
  },
  textBox: {
    width: '100%',
  },
  title: {
    color: 'white',
  }
};

function App(props) {
  const { classes } = props;
  return (
    <div>
      <AppBar position="relative">
        <Toolbar>
          <Typography variant="h6" className={classes.title}>
            Pre-Shift Pro
          </Typography>
        </Toolbar>
      </AppBar>
      <Grid container>
        <Grid item xs={6}>
          <TextField
            id="standard-name"
            label="Company"
            margin="normal"
          />
        </Grid>
        <Grid item xs={6}>
          <TextField
            id="standard-name"
            label="Date"
            margin="normal"
          />
        </Grid>
      </Grid>
      <Grid container>
        <Grid item xs={6}>
          <TextField
            id="standard-name"
            label="Location"
            margin="normal"
          />
        </Grid>
        <Grid item xs={6}>
          <TextField
            id="standard-name"
            label="Shift"
            margin="normal"
          />
        </Grid>
      </Grid>
      <Grid container>
        <Grid item xs={6}>
          <TextField
            id="standard-name"
            label="Equipment #"
            margin="normal"
          />
        </Grid>
        <Grid item xs={6}>
          <TextField
            id="standard-name"
            label="Type"
            margin="normal"
          />
        </Grid>
      </Grid>
      <TextField
        id="standard-name"
        label="Explanation of Defects"
        margin="normal"
      />

      <TextField
        id="standard-name"
        label="Operator Name"
        margin="normal"
      />
      <SignatureCanvas
        penColor='green'
        canvasProps={{width: 400, height: 80, className: "canvas"}}
    />,

      <TextField
        id="standard-name"
        label="Mechanics Signature"
        margin="normal"
      />
      <SignatureCanvas
        penColor='green'
        canvasProps={{width: 400, height: 80, className: "canvas" }}
      />,

      <Button>
        Submit
      </Button>
    </div>
  );
}

export default withStyles(styles)(App);
