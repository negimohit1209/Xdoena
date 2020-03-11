import React, { Component } from "react";
import TextField from "@material-ui/core/TextField";
import { withStyles } from "@material-ui/core/styles";
import compose from "lodash/fp/compose";
import Button from "@material-ui/core/Button";
import Switch from "@material-ui/core/Switch";
import FormControlLabel from "@material-ui/core/FormControlLabel";
import Typography from "@material-ui/core/Typography";

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
    error: "",
    name: "",
    type: true,
    testName: "",
    value: 0,
    sucess: false
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
    const isValid = val => val !== "";
    const isValidNo = val => {
      var regexp = /^(\d*\.)?\d+$/;
      return regexp.test(val);
    };
    return (
      <form
        className={classes.root}
        noValidate
        autoComplete="off"
        onSubmit={event => {
          event.preventDefault();
          if (!isValid(this.state.name) || !isValid(this.state.testName)) {
            this.setState({
              error: "Please enter Name and TestName correctly"
            });
          } else if (!isValidNo(this.state.value)) {
            this.setState({
              error: "Please enter a correct no."
            });
          } else {
            this.setState({
              error: "",
              success: true
            });
            this.props.addData(this.state);
            setTimeout(() => {
              this.setState({
                success: false
              });
            }, 2000);
          }
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
          <Typography variant="h6" component="h4" style={{ color: "#e53935" }}>
            {this.state.error}
          </Typography>
          {this.state.success ? (
            <Typography
              variant="h6"
              component="h4"
              style={{ color: "#43A047" }}
            >
              Added sucessfully
            </Typography>
          ) : null}
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
