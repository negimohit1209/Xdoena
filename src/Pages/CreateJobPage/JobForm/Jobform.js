import React, { Component } from "react";
import TextField from "@material-ui/core/TextField";
import { withStyles } from "@material-ui/core/styles";
import compose from "lodash/fp/compose";
import Button from "@material-ui/core/Button";
import Switch from "@material-ui/core/Switch";
import FormControlLabel from "@material-ui/core/FormControlLabel";

const styles = theme => ({
  root: {
    "& .MuiTextField-root": {
      margin: theme.spacing(2),
      width: 300
    }
  },
  formFeild: {
    margin: theme.spacing(2),
    textAlign: "center"
  },
  button: {
    margin: theme.spacing(2),
    textAlign: "center"
  }
});

class Jobform extends Component {
  state = {
    name: "",
    type: true,
    testName: "",
    value: 0
  };
  toggleType = () => {
    let type = this.state.type;
    this.setState({
      type: !type
    });
  };
  handleChange = (val, e) => {
    this.setState({
      [val]: e.target.value
    });
  };
  render() {
    const { classes } = this.props;
    return (
      <form
        className={classes.root}
        noValidate
        autoComplete="off"
        onSubmit={event => {
          event.preventDefault();
          this.props.addData(this.state);
        }}
      >
        <div className={classes.formFeild}>
          <TextField
            required
            id="name"
            label="Name"
            variant="outlined"
            InputProps={{
              value: this.state.name,
              onChange: event => this.handleChange("name", event)
            }}
          />
          <TextField
            required
            id="testName"
            label="Test Name"
            variant="outlined"
            InputProps={{
              value: this.state.testName,
              onChange: event => this.handleChange("testName", event)
            }}
          />
          <TextField
            id="value"
            label="Value"
            type="number"
            InputLabelProps={{
              shrink: true
            }}
            variant="outlined"
            InputProps={{
              value: this.state.value,
              onChange: event => this.handleChange("value", event)
            }}
          />
          <div>
            <FormControlLabel
              value="start"
              control={
                <Switch
                  checked={this.state.type}
                  onChange={() => this.toggleType()}
                />
              }
              label={this.state.type ? "Positive" : "Negative"}
              size="large"
              labelPlacement="start"
            />
          </div>
        </div>
        <div className={classes.button}>
          <Button variant="contained" color="primary" type="submit">
            Submit
          </Button>
        </div>
      </form>
    );
  }
}

export default compose(
  withStyles(styles, {
    withTheme: true
  })
)(Jobform);
