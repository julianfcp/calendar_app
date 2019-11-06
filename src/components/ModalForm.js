import React from 'react';
import { Button, FormControl, RadioGroup, FormControlLabel, Radio, Grid, TextField } from '@material-ui/core';
import { makeStyles } from '@material-ui/core/styles';
import './styles.css';

const useStyles = makeStyles(theme => ({
  button: {
    margin: theme.spacing(1),
    float: "left",
  },
  input: {
    display: 'none',
  },
  radioGroup: {
      margin: theme.spacing(1),
  },
  textField: {
    marginLeft: theme.spacing(0),
    marginRight: theme.spacing(0),
    width: "80%",
  },
}));
const colors = {
  Holiday: "#3498DB",
  Birthday: "#9B59B6",
  Busy: "#1ABC9C",
}


const ModalForm = ({closeModal, changeColor}) => {
// changeColor is a method, sent to its father class "Month" to change the Date color
// we use onClick={() => changeColor(color)} to execute paren method

  const classes = useStyles();
  const [value, setValue] = React.useState('female');

  const handleChangeRadio = event => {
      setValue(event.target.value);
  };

  return (
    <div>
        <FormControl className="modalForm">
          <Grid container spacing={1}>
            <Grid item xs={12}>
              <RadioGroup row className={classes.radioGroup} aria-label="gender" name="gender1" value={value} onChange={handleChangeRadio}>
                <FormControlLabel value="Holiday" 
                  control={<Radio onClick={() => changeColor(colors.Holiday)} color={colors.Holiday} />} label="Holiday" />
                <FormControlLabel value="Birthday"
                  control={<Radio onClick={() => changeColor(colors.Birthday)} color={colors.Birthday} />} label="Birthday" />
                <FormControlLabel value="Busy" 
                  control={<Radio onClick={() => changeColor(colors.Busy)} color={colors.Busy} />} label="Busy" />
              </RadioGroup>
            </Grid>
            <Grid item xs={12}>
            <TextField
                id="filled-multiline-static"
                label="Description"
                multiline
                rows="4"
                className={classes.textField}
                margin="normal"
                variant="filled"
            />
            </Grid>
            <Grid item xs={6}>
              <Button onClick={closeModal} color="primary" variant="contained">ok</Button>
            </Grid>
          </Grid>
        </FormControl>
    </div>
  );
}

export default ModalForm;