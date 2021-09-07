import React from "react";
import Carousel from "react-material-ui-carousel";
import { makeStyles } from "@material-ui/core";
import bannerData from "../../data/slider.json";

const useStyle = makeStyles({
  container: {
    width: "auto",
    marginBottom: "25px"
  },
  image: {
    width: "100%",

    height: 280,
  },
});

const Banners = () => {
  const classes = useStyle();
  return (
    <div>
      <Carousel
        autoPlay={true}
        animation="fade"
        indicators={false}
        navButtonsAlwaysVisible={true}
        cycleNavigation={true}
        className={classes.container}
        StylesProvider
        navButtonsProps={{
          style: {
            color: "#ffffff",
            backgroundColor: "#00000050",
            borderRadius: 0,
            margin: 0,
            width: 50,
            margin:"0px 10px"
          },
        }}
      >
        {bannerData[0].images.map((image) => (
          <img src={image} className={classes.image} />
        ))}
      </Carousel>
    </div>
  );
};

export default Banners;
