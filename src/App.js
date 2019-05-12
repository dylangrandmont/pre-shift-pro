import React from 'react';
import TextField from '@material-ui/core/TextField';
import Button from '@material-ui/core/Button';
import SignatureCanvas from 'react-signature-canvas'
import AppBar from '@material-ui/core/AppBar';
import Typography from '@material-ui/core/Typography';
import Toolbar from '@material-ui/core/Toolbar';
import Grid from '@material-ui/core/Grid';
import { withStyles } from '@material-ui/core/styles';
import FormLabel from '@material-ui/core/FormLabel';

import './App.css';

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
      <Grid container spacing={16}>
        <Grid item xs={6}>
          <TextField
            label="Company"
            margin="normal"
            fullWidth
          />
        </Grid>
        <Grid item xs={6}>
          <TextField
            label="Date"
            type="date"
            margin="normal"
            fullWidth
            InputLabelProps={{
              shrink: true,
            }}
          />
        </Grid>
      </Grid>
      <Grid container spacing={16}>
        <Grid item xs={6}>
          <TextField
            label="Location"
            margin="normal"
            fullWidth
          />
        </Grid>
        <Grid item xs={6}>
          <TextField
            label="Shift"
            margin="normal"
            fullWidth
          />
        </Grid>
      </Grid>
      <Grid container>
        <Grid item xs={6}>
          <TextField
            label="Equipment #"
            margin="normal"
            fullWidth
          />
        </Grid>
        <Grid item xs={6}>
          <TextField
            label="Type"
            margin="normal"
            fullWidth
          />
        </Grid>
      </Grid>
      <TextField
        label="Explanation of Defects"
        margin="normal"
        fullWidth
        multiline
        rowsMax="4"
      />

      <Grid container>
        <TextField
          label="Operator Name"
          margin="normal"
        />
        <FormLabel>
          Operator Signature
        </FormLabel>
        <SignatureCanvas
          penColor='green'
          canvasProps={{width: 400, height: 80, className: "canvas"}}
        />
      </Grid>

      <Grid container>
        <TextField
          label="Mechanic Name"
          margin="normal"
        />
        <FormLabel>
          Mechanic Signature
        </FormLabel>
        <SignatureCanvas
          penColor='green'
          canvasProps={{width: 400, height: 80, className: "canvas" }}
        />
      </Grid>

      <Grid container>
        <Grid item xs={12}>
          <Button>
            Submit
          </Button>
        </Grid>
      </Grid>
    </div>
  );
}

export default withStyles(styles)(App);
