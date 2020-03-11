import React, { Component } from "react";
import { withStyles } from "@material-ui/styles";
import compose from "lodash/fp/compose";
import Appbar from "../../Components/Appbar/Appbar";
import Form from "../CreateJobPage/JobForm/Jobform";
import Paper from "@material-ui/core/Paper";
import StudentCard from "../../Components/JobCard";
import Typography from "@material-ui/core/Typography";

const styles = theme => ({
  root: {
    "& > *": {
      marginTop: theme.spacing(2)
    }
  },
  form: {
    minWidth: 275,
    maxWidth: 800,
    margin: "10px auto"
  },
  test: {
    minWidth: 275,
    margin: "10px 25px"
  }
});
class HomePage extends Component {
  render() {
    const { classes } = this.props;
    let items = Object.values(this.props.data);
    let test = items.map((value, i) => (
      <div key={i} className={classes.test}>
        <Typography align="center" variant="h5" component="h2">
          {value.fields[0].testName}
        </Typography>
        <div
          style={{
            overflowX: "scroll",
            overflowY: "hidden",
            whiteSpace: "nowrap"
          }}
        >
          {value.fields.map((field, i) => (
            <StudentCard key={i} field={field} val={value.max || value.min} />
          ))}
        </div>
      </div>
    ));
    return (
      <div className={classes.root}>
        <Appbar />
        <div className={classes.form}>
          <Paper variant="outlined">
            <Typography align="center" variant="h5" component="h2">
              Create fleld
            </Typography>
            <Form {...this.props} />
          </Paper>
        </div>
        {test}
      </div>
    );
  }
}

export default compose(
  withStyles(styles, {
    withTheme: true
  })
)(HomePage);
