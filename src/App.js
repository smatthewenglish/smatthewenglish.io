import React, { Component } from "react";
import PropTypes from "prop-types";
import { withStyles } from "@material-ui/core/styles";
import Card from "@material-ui/core/Card";
import CardActions from "@material-ui/core/CardActions";
import CardContent from "@material-ui/core/CardContent";
import ButtonBase from "@material-ui/core/ButtonBase";
import Typography from "@material-ui/core/Typography";

import ParticlesBg from "particles-bg";

import MenuCov from "./MenuCov";
import ReactDOM from "react-dom";
// import {withRouter} from 'react-router-dom';
import { BrowserRouter, Route } from "react-router-dom";

const styles = {
  card: {
    minWidth: 275
  },
  bullet: {
    display: "inline-block",
    margin: "0 2px",
    transform: "scale(0.8)"
  },
  title: {
    marginBottom: 16,
    fontSize: 14
  },
  pos: {
    marginBottom: 12
  },
  cardAction: {
    display: "block",
    textAlign: "initial"
  }
};

function SimpleCard(props) {
  const { classes } = props;
  const bull = <span className={classes.bullet}>•</span>;

  return (
    <div>
      <Card className={classes.card}>
        <ButtonBase
          className={props.classes.cardAction}
          onClick={event => {

            ReactDOM.render(props.whoami, document.getElementById("zed"));

            //const rZ = document.querySelector("#zip-00");
            //if (rZ) {
              //ReactDOM.render(<PMrrr />, document.getElementById("zip-00"));
            //}
          }}
        >
          <CardContent>
            <Typography className={classes.title} color="textSecondary">
              {props.subject}
            </Typography>
            <Typography variant="headline" component="h2">
              {props.name}
            </Typography>
            <Typography className={classes.pos} color="textSecondary">
              {props.sub}
            </Typography>
            <Typography component="p">{props.desc}</Typography>
          </CardContent>
        </ButtonBase>
      </Card>
    </div>
  );
}

SimpleCard.propTypes = {
  classes: PropTypes.object.isRequired
};

export default withStyles(styles)(SimpleCard);

class PMrrr extends Component {
  constructor() {
    super();
    this.state = {
      name: "React"
    };
  }

  render() {
    return (
      <div>
        <ParticlesBg type="circle" num={1000} bg={true} />
      </div>
    );
  }
}