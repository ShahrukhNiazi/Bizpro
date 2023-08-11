import React from "react";
import { Box, Button} from "@mui/material";
import TextField from "@mui/material/TextField";
import { InputAdornment } from "@mui/material";

const Newsletter = () => {
  return (
    <>
      <Box sx={styles.SearchIcon}>
        <TextField
          defaultValue="Your Email"
          InputProps={{
            startAdornment: (
              <InputAdornment
                style={{
                  display: "flex",
                  alignItems: "center",
                  borderRadius: 40,
                  color: "#fff !important",
                  height:'70px',
                }}
              ></InputAdornment>
            ),
          }}
          style={{
            borderRadius: 40,
            width: '80%',
            marginRight:'20px',
            backgroundColor: "transparent",
            borderWidth: 0,
            border: "transparent",
            backgroundColor: 'rgb(255, 255, 255,0.2)',
            color: "#fff",
           }}
        />
        <Button variant="contained">Search</Button>
      </Box>
    </>
  );
};

export default Newsletter;

const styles = {
  Mainsearch: {
    border: "none",
    color: "#fff",
  },

  SearchIcon: {
    position: "relative",
    zIndex: "1",
    cursor: "pointer",
    border: "none",
     color: "#000",
    display: "flex",
    alignItems: "start",
    justifyContent: "center",
    borderRadius: "100%",

    button:{
    backgroundColor:'#ec5d3b',
    padding:'12px 35px',
    marginLeft:'35px',
    border:'none',
    borderRadius:'50px',
    color:'#fff',
    textTransform:'uppercase',
    fontWeight:'600',
     }
  },
};
