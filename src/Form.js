import React from 'react';
import TextField from '@material-ui/core/TextField';
import Button from '@material-ui/core/Button';
import SignatureCanvas from 'react-signature-canvas'
import Grid from '@material-ui/core/Grid';
import { withStyles } from '@material-ui/core/styles';
import FormLabel from '@material-ui/core/FormLabel';
import { writeSubmission } from './database';

const styles = theme => ({
});

function Form() {
  return (
      <div>
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
            <Button onClick={writeSubmission}>
            Submit
            </Button>
        </Grid>
        </Grid>
    </div>
    );
}

export default withStyles(styles, { withTheme: true })(Form);
