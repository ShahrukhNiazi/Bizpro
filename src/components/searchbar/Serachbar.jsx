import React from "react";
import { Box} from "@mui/material";
import TextField from "@mui/material/TextField";
import SearchIcon from "@mui/icons-material/Search";
import { InputAdornment } from "@mui/material";

const SearchBar = () => {
  return (
    <TextField
       defaultValue="Search"
      InputProps={{
         startAdornment: (
          <InputAdornment
            style={{ display: "flex", alignItems: "center", borderRadius:40,color:'#fff !important', }}
          >
              <Box sx={styles.SearchIcon}>
               <SearchIcon />
              </Box>
           </InputAdornment>
        ),
 
        }}
       style={{
         borderRadius:40,
         width: 500,
         backgroundColor: "transparent",
         borderWidth: 0,
         border:'1px solid #fff',
         color:'#fff',
        }}
    />
  );
};

export default SearchBar;

const styles = {
  Mainsearch: {
    border:'none',
    color:'#fff',
   },

   SearchIcon:{
   position:'absolute',
   right:'10px',
   zIndex:'1',
   cursor:'pointer',
   border:'none',
   right: '6px',
   backgroundColor: '#fff',
   color:'#000',
   width: '35px',
   height: '35px',
   display:'flex',
   alignItems:'center',
   justifyContent:'center',
   borderRadius:'100%',
 
   },
  
   
};
