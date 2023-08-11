import React from "react";
import {
  Box,
  Grid,
  Typography,
  Container,
  AppBar,
  Toolbar,
  List,
  ListItem,
  Link,
} from "@mui/material";
import Image from "next/image";
import logo from "../../../public/images/logo.png";
import SearchBar from "../../components/searchbar/Serachbar";
import FavoriteBorderIcon from "@mui/icons-material/FavoriteBorder";
import PersonOutlineIcon from "@mui/icons-material/PersonOutline";
import ShoppingCartIcon from "@mui/icons-material/ShoppingCart";

const Header = () => {
  return (
    <>
      <Box sx={styles.mainheader}>
        <AppBar position="static" sx={styles.navigation}>
          <Container maxWidth="xl" rowSpacing={0} pb={0}>
            <Grid container maxWidth="xl" rowSpacing={1} pb={0} sx={styles.headerContainer}>
              <Grid item xs={9} sm={9} md={9} lg={9}>
                <Toolbar>
                  <List>
                    <ListItem>
                      {" "}
                      <Link>Home </Link>
                    </ListItem>
                    <ListItem>
                      <Link>Music</Link>
                    </ListItem>
                    <ListItem>
                      <Link>Beats</Link>
                    </ListItem>
                    <ListItem>
                      <Link sx={styles.headerlogo}>
                        <Image src={logo} alt="logo" width={150} height={150} />
                      </Link>
                    </ListItem>
                    <ListItem>
                      <Link>Video</Link>
                    </ListItem>
                    <ListItem>
                      <Link>Store</Link>
                    </ListItem>
                    <ListItem>
                      <Link>Contact us</Link>
                    </ListItem>
                  </List>
                </Toolbar>
               </Grid>
               <Grid item xs={3} sm={3} md={3} lg={3}>
                <Box sx={styles.cartsearch}>
                       <SearchBar/>
                       <List sx={styles.carticon}>
                        <ListItem>
                          <Link to={"/"}>
                            <PersonOutlineIcon fontSize="small" />
                          </Link>
                        </ListItem> 
                        <ListItem sx={styles.cart}>
                          <Link to={"/"}>
                            <ShoppingCartIcon fontSize="small" />
                             <Typography sx={styles.bedge}>1</Typography>
                          </Link>
                        </ListItem>
                       </List>
                    </Box>
               </Grid>
            </Grid>
          </Container>
        </AppBar>
      </Box>
    </>
  );
};





export default Header;

const styles = {
  navigation: {
    backgroundColor: "inherit",
    border: "none",
    boxShadow: "none",
    textAlign: "center",
    display: "flex",
    alignItems: "center",
    ul: {
      padding: "0px",
      width: "90%",
      margin:'0 0 0 auto',
      display:'flex',
      alignItems:'center',
  
    },
    li: {
      display: "inline",
      textAlign: "center",
      padding: "0px",
    },
    a: {
      color: "#fff",
      display: "inline",
      textAlign: "center",
      textDecoration: "none",
      cursor: "pointer",
      fontSize:18,
    },
  },
  headerlogo: {
    textAlign: "center",
  },
   padd0: {
    padding: 0,
  },
  Mainheader: {
    position: "absolute",
    width: "100%",
  },
   paddTop: {
    paddingTop: 2,
   },
   carticon:{
    display:'flex',
       li:{
       flex: "0 0 20%",
       maxWidth: "20%",
       marginLeft:'30px',
       },
       a:{
          width:"40px",
          height:"40px",
          backgroundColor:"#fda10b",
          display:"flex",
          alignItems: "center",
          textAlign:"center",
          justifycontent: "center",
          borderRadius: "100%",
          color: "#fff",
          justifyContent:'center',
          },
       },
       cartsearch:{
        display:'flex',
        alignItems:'flex-end',
        justifyContent:'space-between',
        marginTop:'50px',
       },
       mainheader:{
        position:'absolute',
        width:'100%',
        left:0,
        right:0,
        zIndex:999,
        marginTop:'70px',
       },
       headerContainer:{
        textAlign:'center',
       },
       cart:{
         a:{
          backgroundColor: '#eb593b',
         },
        }, 
        bedge: {
        position: "absolute",
        width: 20,
        height: 20,
        bgcolor: "#bd2222",
        bottom: 30,
        left: -5,
        right: "auto",
        borderRadius: "100%",
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        color: "#fff",
        top:'-12px',
        right:'-18px',
        backgroundColor: '#d6b683',
         },
     };
 
 
   
    
   