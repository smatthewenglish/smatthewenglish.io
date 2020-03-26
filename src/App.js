import React, {Component} from "react";

import PropTypes from "prop-types";

import {withStyles} from "@material-ui/core/styles";
import Card         from "@material-ui/core/Card";
import CardActions  from "@material-ui/core/CardActions";
import CardContent  from "@material-ui/core/CardContent";
import ButtonBase   from "@material-ui/core/ButtonBase";
import Typography   from "@material-ui/core/Typography";
import CardMedia from "@material-ui/core/CardMedia";
import { sizing } from '@material-ui/system';

import ParticlesBg from "particles-bg";

// import MenuCov from "./MenuCov";
import ReactDOM from "react-dom";
import { withRouter } from 'react-router-dom';
import { BrowserRouter, Route } from "react-router-dom";
import { Redirect } from 'react-router-dom';

const styles = {
  card: {
    minWidth: 275,
        // Provide some spacing between cards
    margin: 16,

    // Use flex layout with column direction for components in the card
    // (CardContent and CardActions)
    display: "flex",
    flexDirection: "column",

    // Justify the content so that CardContent will always be at the top of the card,
    // and CardActions will be at the bottom
    justifyContent: "space-between"
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
  },
  media: {
  height: 0,
  paddingTop: '56.25%', // 16:9,
  marginTop:'30'
}
};

function SimpleCard(props) {
  const { classes } = props;
  const bull = <span className={classes.bullet}>•</span>;

  return (
    <div>
      <Card className={classes.card} style={{display: 'flex', justifyContent: 'space-between', flexDirection: 'column'}}>
        <ButtonBase
          className={props.classes.cardAction}
          onClick={event => {

            props.history.push('/dashboard')
            ReactDOM.render(props.whoami, document.getElementById("hook"));


          }}
        >
          <CardContent>
            <Typography className={classes.title} color="textSecondary">
              {props.subject}
            </Typography>
            <Typography variant="headline" component="h2">
              {props.name}
            </Typography>

 <CardMedia
      className={classes.media}
      image={require('./bonn.jpg')}
      title="Contemplative Reptile"
      style={styles.media}
    />


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




