import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import Card from "@material-ui/core/Card";
import CardContent from "@material-ui/core/CardContent";
import Typography from "@material-ui/core/Typography";

const useStyles = makeStyles({
  root: {
    minWidth: 200,
    maxwidth: 400
  },
  bullet: {
    display: "inline-block",
    margin: "0 2px",
    transform: "scale(0.8)"
  },
  title: {
    fontSize: 14
  },
  pos: {
    marginBottom: 12
  }
});

const findRating = (type, val, score) => {
  let percentage = type ? (score * 100) / val : (val * 100) / score;
  if (percentage >= 90 && percentage <= 100)
    return {
      text: "A+",
      color: "#4CAF50",
      percentage
    };
  else if (percentage >= 85 && percentage < 90)
    return {
      text: "A",
      color: "#4CAF50",
      percentage
    };
  else if (percentage >= 80 && percentage < 85)
    return {
      text: "A-",
      color: "#4CAF50",
      percentage
    };
  else if (percentage >= 75 && percentage < 80)
    return {
      text: "B+",
      color: "#CDDC39",
      percentage
    };
  else if (percentage >= 70 && percentage < 75)
    return {
      text: "B",
      color: "#CDDC39",
      percentage
    };
  else if (percentage >= 65 && percentage < 70)
    return {
      text: "B-",
      color: "#CDDC39",
      percentage
    };
  else if (percentage >= 60 && percentage < 65)
    return {
      text: "C+",
      color: "#FF9800",
      percentage
    };
  else if (percentage >= 55 && percentage < 60)
    return {
      text: "C",
      color: "#FF9800",
      percentage
    };
  else if (percentage >= 50 && percentage < 55)
    return {
      text: "C+",
      color: "#FF9800",
      percentage
    };
  else if (percentage >= 45 && percentage < 50)
    return {
      text: "D",
      color: "#FF5722",
      percentage
    };
  else
    return {
      text: "E",
      color: "#FF5722",
      percentage
    };
};

export default function OutlinedCard(props) {
  const classes = useStyles();
  let rating = findRating(props.field.type, props.val, props.field.score);
  return (
    <div style={{ display: "inline-block", margin: "5px" }}>
      <Card className={classes.root} variant="outlined">
        <CardContent>
          <Typography
            className={classes.title}
            color="textSecondary"
            gutterBottom
          >
            {props.field.testName}
          </Typography>
          <Typography variant="h5" component="h2">
            {props.field.name}
          </Typography>
          <Typography className={classes.pos} color="textSecondary">
            Percentile: {props.field.percentile.toFixed(2)}
          </Typography>
          <Typography
            className={classes.pos}
            color="#234567"
            style={{ color: `${rating.color}` }}
          >
            Rating: {`${rating.text} (${rating.percentage.toFixed(2)})`}
          </Typography>
        </CardContent>
      </Card>
    </div>
  );
}
