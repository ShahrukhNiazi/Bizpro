import React, { Component } from "react";
import "react-responsive-carousel/lib/styles/carousel.min.css"; // requires a loader
import { Carousel } from "react-responsive-carousel";
import { Paper, Button, Typography,  Box, Grid } from "@mui/material";
import Image from "next/image";
import slide01 from "../../../public/images/banner01.jpg";
import slide02 from "../../../public/images/banner02.jpg";
import slide03 from "../../../public/images/banner03.jpg";

const Mainslider = () => {
   const items = [
    {
      h5:"BizProQuo",
      p:"Lorem Ipsum is simply dummy text of the printing and typesetting...",
      image: slide01,
    },
    {
      h5:"BizProQuo",
      p:"Lorem Ipsum is simply dummy text of the printing and typesetting...",
      image: slide02,
    },
    {
      h5:"BizProQuo",
      p:"Lorem Ipsum is simply dummy text of the printing and typesetting...",
      image: slide03,
    },
  ];

  return (
    <Carousel
      dynamicHeight={true}
      autoPlay={true}
      swipeable={false}
      transitionTime={3000}
      showArrows={false}
      showIndicators={false}
      showStatus={false}
      showThumbs={false}
      infiniteLoop={false}
      stopOnHover={false}
      width={"100%"}
      axis="vertical"
    >
         {items.map((item, i) => {
          return (
            <Box sx={styles.categoriesitem}>
              <Image src={item.image} alt="image" />
              <Box component="div" sx={styles.sliderItem}>
                <Typography variant="h4">{item.h5}</Typography>
                <Typography variant="body1">{item.p}</Typography>
              </Box>
            </Box>
          );
         })}
     </Carousel>
  );
};

export default Mainslider;

const styles = {
  sliderItem: {
    position: "absolute",
    left: 0,
    top: 0,
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    flexDirection: "column",
    transform: "translate(-5rem,30rem)",
     width:'100%',
    hegith:'100%',
    textAlign:'center',
    h4:{
      color:'#fff',
      fontSize:'127px',
      textShadow:'2px 2px 4px #000',
      fontStyle:'italic',
      fontWeight:'600',
      },
    p:{
      color:'#fff',
      fontSize:'23px !important',
      textShadow:'2px 2px 4px #000',
    }

    },
   
  } 
 
