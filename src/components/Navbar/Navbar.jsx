import React from "react";
import './Navbar.css'
import InputBase from '@mui/material/InputBase';
// import SearchIcon from '@mui/icons-material/Search';
import searchImage from '../../../public/assets/search.png';
import flag from '../../../public/assets/india_flag.png';
import menu from '../../../public/assets/menu.png';
// import notifications from '../../assets/notifications.png';
// import manImage from '../../assets/man_image.png';

import InputLabel from '@mui/material/InputLabel';
import MenuItem from '@mui/material/MenuItem';
import FormControl from '@mui/material/FormControl';
import Select from '@mui/material/Select';

function Navbar() {
    return (
      <div className="navbar-main">
        <div className="text" style={{textShadow: "2px 2px 4px rgba(0, 0, 0, 0.5)"}}>Dashboard</div>
        <div className="search" style={{ display: 'flex', width:'30%',alignItems: 'center', backgroundColor: '#F9FAFB', borderRadius: '4px' }}>
          <div style={{ padding: '8px' }}>
            {/* <SearchIcon /> */}
            <img src={searchImage} alt="Search" />
          </div>
            <InputBase
              placeholder="Search…"
              //inputProps={{ 'aria-label': 'search' }}
              style={{ flex: 1}}
            />
        </div>
          <div className="language">
          <FormControl sx={{ m: 1, minWidth: 80 }}>
            <InputLabel id="demo-simple-select-autowidth-label">
              <div style={{display: 'flex', alignItems: "center", justifyContent: "center"}}>
                <img src={flag} alt="Flag" style={{ marginRight: '8px' }} />
                IND
              </div>
            </InputLabel>
            <Select
              labelId="demo-simple-select-autowidth-label"
              id="demo-simple-select-autowidth"
            // value={age}
            // onChange={handleChange}
              autoWidth
              label=""
              sx={{width: '110px'}}
            >
              <MenuItem value={"IND"}>IND</MenuItem>
            </Select>
          </FormControl>
          </div>
          <div className="menu"
            >
            <img src={menu} alt="" style={{height: "45px"}}/>
          </div>
      </div>
    )
  }
  
  export default Navbar
  