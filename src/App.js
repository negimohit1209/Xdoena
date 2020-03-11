import React, { Component } from "react";

import "./App.css";
import AppLayout from "./HOC/Layout/AppLayout";

export default class App extends Component {
  state = {
    isLoading: false,
    data: {}
  };
  addData = data => {
    const key = `${data.type}_${data.testName}`;
    let value = parseFloat(data.value);
    console.log(key);
    let finalData;
    if (this.state.data[key] !== undefined) {
      finalData = { ...this.state.data[key] };
      let percentile;
      if (!data.type) {
        finalData.min = Math.min(finalData.min, value);
        percentile = (100 * finalData.fields[0].score) / value;
      } else {
        finalData.max = Math.max(finalData.max, data.value);
        percentile = (100 * value) / finalData.fields[0].score;
      }
      finalData.fields.push({
        name: data.name,
        testName: data.testName,
        type: data.type,
        score: value,
        percentile
      });
    } else {
      if (data.type) {
        let max = parseFloat(data.value);
        let fields = [
          {
            name: data.name,
            testName: data.testName,
            type: data.type,
            percentile: 100,
            score: parseFloat(data.value)
          }
        ];
        finalData = {
          max,
          fields
        };
      } else {
        let min = parseFloat(data.value);
        let fields = [
          {
            name: data.name,
            testName: data.testName,
            type: data.type,
            percentile: 100,
            score: parseFloat(data.value)
          }
        ];
        finalData = {
          min,
          fields
        };
      }
    }
    let test = this.state.data;
    test = { ...test, [key]: finalData };
    this.setState({
      data: test
    });
  };
  render() {
    return <AppLayout addData={this.addData} data={this.state.data} />;
  }
}
