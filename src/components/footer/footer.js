import React from "react";
import { Box, Grid, Typography, Container, List, ListItem, Link, } from "@mui/material";
import Newsletter from "../../components/newletter/Newsletter.js";
import InstagramIcon from '@mui/icons-material/Instagram';
import FacebookIcon from '@mui/icons-material/Facebook';
import YouTubeIcon from '@mui/icons-material/YouTube';
import MusicNoteIcon from '@mui/icons-material/MusicNote';
import GraphicEqIcon from '@mui/icons-material/GraphicEq';

const Header = () => {
  return (
    <>
      <Box sx={styles.footerSec}>
        <Container maxWidth="xl" rowSpacing={0} pb={0}>
          <Grid container maxWidth="xl" rowSpacing={1} pb={0}>
            <Grid item xs={3} sm={3} md={3} lg={3}>
              <Box>
                <Typography variant="h2">STAY CONNECTED</Typography>
              </Box>
            </Grid>
            <Grid item xs={9} sm={9} md={9} lg={9}>
              <Newsletter />
            </Grid>
          </Grid>
          <Grid container maxWidth="xl" rowSpacing={1} pb={0}>
            <Grid item xs={12} sm={12} md={12} lg={12}>
              <Box sx={styles.socialtags}>
                <List>
                  <ListItem>
                      <Link><InstagramIcon/> </Link>
                      <Link><FacebookIcon/> </Link>
                      <Link><YouTubeIcon/> </Link>
                      <Link><MusicNoteIcon/> </Link>
                      <Link>< GraphicEqIcon/> </Link>
                   </ListItem>
                </List>  
              </Box>
            </Grid>
          </Grid>
        </Container>
      </Box>
    </>
  );
};

export default Header;

const styles = {
  footerSec: {
    position: "absolute",
    bottom: "-90px",
    width: "100%",
     h2: {
      fontSize: "40px",
      textAlign: "right",
      color: "#fff",
      textTransform: "uppercase",
      fontFamily: "Oswald",
      fontSize: "40px",
      fontWeight: "600",
    },
   },
   socialtags:{
     ul:{

    textAlign:'center',
    margin:'30px auto 0',
    display:'table',

    },
    a:{
     width:'40px',
     height:'40px',
     display:'flex',
     margin:'0px 5px',
     cursor:'pointer',
     alignItems:'center',
     justifyContent:'center',
     backgroundColor:'rgb(255, 255, 255,0.2)',
     color:'#fff',
     borderRadius:'100%',
    }
   }
};
