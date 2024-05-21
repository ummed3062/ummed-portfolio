import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import Typography from "@material-ui/core/Typography";
import Box from "@material-ui/core/Box";

const useStyles = makeStyles((theme) => ({
  mainContainer: {
  paddingLeft : "6%"
  
  },
  timeLine: {
    position: "relative",
    padding: "1rem",
    margin: "o auto",
    "&:before": {
      content: "''",
      position: "absolute",
      height: "100%",
      border: "1px solid #565452",
      right: "40px",
      top: 0,
    },
    "&:after": {
      content: "''",
      display: "table",
      clear: "both",
    },
    [theme.breakpoints.up("md")]: {
      padding: "2rem",
      "&:before": {
        left: "calc(50% - 1px)",
        right: "auto",
      },
    },
  },
  timeLineItem: {
    padding: "1rem",
    borderBottom: "2px solid #666464",
    position: "relative",
    margin: "1rem 3rem 1rem 1rem",
    clear: "both",
    "&:after": {
      content: "''",
      position: "absolute",
    },
    "&:before": {
      content: "''",
      position: "absolute",
      right: "-0.625rem",
      top: "calc(50% - 5px)",
      borderStyle: "solid",
      borderColor: "#666464 #666464 transparent transparent",
      borderWidth: "0.625rem",
      transform: "rotate(45deg)",
    },
    [theme.breakpoints.up("md")]: {
      width: "44%",
      margin: "1rem",
      "&:nth-of-type(2n)": {
        float: "right",
        margin: "1rem",
        borderColor: "#666464",
      },
      "&:nth-of-type(2n):before": {
        right: "auto",
        left: "-0.625rem",
        borderColor: "transparent transparent #666464 #666464",
      },
    },
  },
  timeLineYear: {
    textAlign: "center",
    maxWidth: "9.375rem",
    margin: "0 3rem 0 auto",
    fontSize: "1.2rem",
    color: "#fff",
    background: "#666464",
    lineHeight: 1,
    padding: "0.5rem 1rem",
    "&:before": {
      display: "none",
      
    },
    [theme.breakpoints.up("md")]: {
      textAlign: "center",
      margin: "0 auto",
      fontSize: "1.8rem",
      "&:nth-of-type(2n)": {
        float: "none",
        margin: "0 auto",
        
      },
      "&:nth-of-type(2n):before": {
        display: "none",
        
      },
    },
  },
  heading: {
    color: "#373333",
    padding: "3rem 0",
    textTransform: "uppercase",
    textAlign: "left",
    fontSize: "35px",
    fontWeight: 700,
    
  },
  subHeading: {
    color: "#373333",
    fontSize: "1rem",
    padding: 0,
    textTransform: "uppercase",
  },
  body1: {
    color: "#373333",
  },
  subtitle1: {
    color: "tan",
  },
}));

const Education = () => {
  const classes = useStyles();
  return (
    <section id="education">
    <Box component="header" className={classes.mainContainer}>
      <Typography variant="h4" align="center" className={classes.heading}>
        Education
      </Typography>
      <Box component="div" className={classes.timeLine}>
        <Typography
          variant="h2"
          className={`${classes.timeLineYear} ${classes.timeLineItem}`}
        >
          2018-22
        </Typography>
        <Box component="div" className={classes.timeLineItem}>
          <Typography
            variant="h5"
            align="center"
            className={classes.subHeading}
          >
            Bk Birla Institute of Engineering & Technology, Pilani
          </Typography>
          <Typography variant="body1" align="center" className={classes.body1}>
            Computer Science and Engineering
          </Typography>
        </Box>
        <Typography
          variant="h2"
          className={`${classes.timeLineYear} ${classes.timeLineItem}`}
        >
          2016-18
        </Typography>
        <Box component="div" className={classes.timeLineItem}>
          <Typography
            variant="h5"
            align="center"
            className={classes.subHeading}
          >
            Parishkar Children Academy Sr. Sec. School, Jhunjhunu
          </Typography>
          <Typography variant="body1" align="center" className={classes.body1}>
            PCM
          </Typography>
        </Box>
        <Typography
          variant="h2"
          className={`${classes.timeLineYear} ${classes.timeLineItem}`}
        >
          2013-16
        </Typography>
        <Box component="div" className={classes.timeLineItem}>
          <Typography
            variant="h5"
            align="center"
            className={classes.subHeading}
          >
            Param Veer Peeru Singh Government Sec. School, Jhunjhunu
          </Typography>
        </Box>
      </Box>
    </Box>
    </section>
  );
};

export default Education;