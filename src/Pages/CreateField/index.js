import React, { Component } from "react";
import { withStyles } from "@material-ui/styles";
import { connect } from "react-redux";
import compose from "lodash/fp/compose";
import Paper from "@material-ui/core/Paper";
import Typography from "@material-ui/core/Typography";

import Appbar from "../../Components/Appbar/Appbar";
import JobForm from "./FieldForm/FieldForm";
import * as actions from "../../Store/actions";

const styles = theme => ({
  root: {
    minWidth: 275,
    maxWidth: 800,
    margin: "10px auto"
  }
});

class CreateJobPage extends Component {
  render() {
    const { classes } = this.props;
    return (
      <div>
        <Appbar />
        <div className={classes.root}>
          <Paper variant="outlined">
            <Typography align="center" variant="h5" component="h2">
              Create Job
            </Typography>
            <JobForm />
          </Paper>
        </div>
      </div>
    );
  }
}

const mapDispatchToProps = dispatch => {
  return {
    initSelect: () => dispatch(actions.initSelect())
  };
};

export default compose(
  withStyles(styles, {
    withTheme: true
  }),
  connect(null, mapDispatchToProps)
)(CreateJobPage);
