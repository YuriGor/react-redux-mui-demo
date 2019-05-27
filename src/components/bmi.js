import React from "react";
import Paper from "@material-ui/core/Paper";
import TextField from "@material-ui/core/TextField";
import { makeStyles } from "@material-ui/core/styles";
import Typography from "@material-ui/core/Typography";
import Select from "@material-ui/core/Select";
import InputLabel from "@material-ui/core/InputLabel";
import MenuItem from "@material-ui/core/MenuItem";
import FormControl from "@material-ui/core/FormControl";
import clsx from "clsx";
import InputAdornment from "@material-ui/core/InputAdornment";
import Switch from "@material-ui/core/Switch";
import FormControlLabel from "@material-ui/core/FormControlLabel";
import SwipeableViews from "react-swipeable-views";
import MobileStepper from "@material-ui/core/MobileStepper";
import Button from "@material-ui/core/Button";
import KeyboardArrowLeft from "@material-ui/icons/KeyboardArrowLeft";
import KeyboardArrowRight from "@material-ui/icons/KeyboardArrowRight";
import List from "@material-ui/core/List";
import ListItem from "@material-ui/core/ListItem";
import ListItemText from "@material-ui/core/ListItemText";
import ListItemAvatar from "@material-ui/core/ListItemAvatar";
import Avatar from "@material-ui/core/Avatar";
import WeightIcon from "mdi-material-ui/WeightKilogram";
import HeightIcon from "mdi-material-ui/ArrowExpandVertical";
import CalendarIcon from "mdi-material-ui/CalendarClock";
import SexIcon from "mdi-material-ui/GenderMaleFemale";
import SmokingIcon from "mdi-material-ui/Smoking";
import WineIcon from "mdi-material-ui/GlassWine";

const useStyles = makeStyles(theme => ({
  root: {
    maxWidth: 500,
    flexGrow: 1
  },
  card: {
    width: "100%",
    maxWidth: 500,
    backgroundColor: theme.palette.background.paper
  },
  inlineList: {
    display: "inline-block",
    width: "50%"
  },
  paper: {
    padding: theme.spacing(2),
    margin: theme.spacing(2),
    maxWidth: 500,
    textAlign: "center"
  },
  formControl: {
    //margin: theme.spacing(1),
    margin: theme.spacing(1),
    maxWidth: 200,
    width: "100%"
  },
  formControlLabel: {
    //margin: theme.spacing(1),
    margin: theme.spacing(2),
    marginLeft: 0,
    maxWidth: 200,
    width: "100%"
  }
}));
const Card = ({ weight, height, age, sex, nicotine, alcohol }) => {
  const classes = useStyles();
  return (
    // <>
    //   Weight:{weight}, {height}, {age}, {sex}, {nicotine}, {alcohol}
    // </>
    <div>
      <List className={classes.inlineList}>
        <ListItem>
          <ListItemAvatar>
            <Avatar>
              <WeightIcon color="secondary" />
            </Avatar>
          </ListItemAvatar>
          <ListItemText primary={(weight || "??") + " kg"} secondary="weight" />
        </ListItem>
        <ListItem>
          <ListItemAvatar>
            <Avatar>
              <CalendarIcon color="secondary" />
            </Avatar>
          </ListItemAvatar>
          <ListItemText primary={(age || "??") + " yrs"} secondary="age" />
        </ListItem>
        <ListItem>
          <ListItemAvatar>
            <Avatar>
              <SmokingIcon color="secondary" />
            </Avatar>
          </ListItemAvatar>
          <ListItemText
            primary={nicotine ? "Yes" : "No"}
            secondary="nicotine"
          />
        </ListItem>
      </List>
      <List className={classes.inlineList}>
        <ListItem>
          <ListItemAvatar>
            <Avatar>
              <HeightIcon color="secondary" />
            </Avatar>
          </ListItemAvatar>
          <ListItemText primary={(height || "??") + " cm"} secondary="height" />
        </ListItem>
        <ListItem>
          <ListItemAvatar>
            <Avatar>
              <SexIcon color="secondary" />
            </Avatar>
          </ListItemAvatar>
          <ListItemText
            primary={sex === "" ? "??" : sex === "f" ? "Female" : "Male"}
            secondary="gender"
          />
        </ListItem>
        <ListItem>
          <ListItemAvatar>
            <Avatar>
              <WineIcon color="secondary" />
            </Avatar>
          </ListItemAvatar>
          <ListItemText primary={alcohol ? "Yes" : "No"} secondary="alcohol" />
        </ListItem>
      </List>
    </div>
  );
};
const Form = ({ weight, height, age, sex, nicotine, alcohol, onChange }) => {
  const classes = useStyles();
  return (
    <>
      <Typography component="h1" variant="h5">
        Body Calculator
      </Typography>

      <TextField
        label="Weight"
        margin="normal"
        value={weight}
        onChange={e => onChange("weight", e.target.value)}
        className={clsx(classes.formControl)}
        InputProps={{
          endAdornment: <InputAdornment position="start">kg</InputAdornment>
        }}
      />

      <TextField
        label="Height"
        margin="normal"
        value={height}
        onChange={e => onChange("height", e.target.value)}
        className={clsx(classes.formControl)}
        InputProps={{
          endAdornment: <InputAdornment position="start">cm</InputAdornment>
        }}
      />
      <TextField
        value={age}
        className={clsx(classes.formControl)}
        onChange={e => onChange("age", e.target.value)}
        label="Age"
        // value={values.age}
        type="number"
        // className={classes.textField}
        // InputLabelProps={{
        //   shrink: true
        // }}
        margin="normal"
      />
      <FormControl margin="normal" className={classes.formControl}>
        <InputLabel htmlFor="sex-simple">Sex</InputLabel>
        <Select
          id="sex-simple"
          value={sex}
          onChange={e => onChange("sex", e.target.value)}
          inputProps={{
            name: "sex",
            id: "sex"
          }}
        >
          <MenuItem value="">
            <em>None</em>
          </MenuItem>
          <MenuItem value="f">Female</MenuItem>
          <MenuItem value="m">Male</MenuItem>
        </Select>
      </FormControl>
      <FormControlLabel
        className={classes.formControlLabel}
        control={
          <Switch
            checked={nicotine}
            onChange={(e, c) => onChange("nicotine", c)}
            value="nicotine"
          />
        }
        label="Nicotine"
      />
      <FormControlLabel
        className={classes.formControlLabel}
        control={
          <Switch
            checked={alcohol}
            onChange={(e, c) => onChange("alcohol", c)}
            value="alcohol"
          />
        }
        label="Alcohol"
      />
    </>
  );
};

export default props => {
  const classes = useStyles();
  const [activeStep, setActiveStep] = React.useState(0);

  function handleNext() {
    setActiveStep(prevActiveStep => prevActiveStep + 1);
  }

  function handleBack() {
    setActiveStep(prevActiveStep => prevActiveStep - 1);
  }

  function handleStepChange(step) {
    setActiveStep(step);
  }

  return (
    <Paper className={classes.paper}>
      <SwipeableViews
        index={activeStep}
        onChangeIndex={handleStepChange}
        enableMouseEvents
      >
        <Form {...props} />
        <Card {...props} />
      </SwipeableViews>
      <MobileStepper
        steps={2}
        position="static"
        //variant="text"
        activeStep={activeStep}
        nextButton={
          <Button
            variant="contained"
            color="primary"
            size="small"
            onClick={handleNext}
            disabled={activeStep === 1}
          >
            Next
            <KeyboardArrowRight />
          </Button>
        }
        backButton={
          <Button
            variant="contained"
            color="primary"
            size="small"
            onClick={handleBack}
            disabled={activeStep === 0}
          >
            <KeyboardArrowLeft />
            Back
          </Button>
        }
      />
    </Paper>
  );
};
