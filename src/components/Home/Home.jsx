import React from 'react';
import './Home.css'
import Box from '@mui/material/Box';
// import Paper from '@mui/material/Paper';
import Grid from '@mui/material/Grid';

import Home_1 from '../../../public/assets/Home_1.png';
import Home_2_inside from '../../../public/assets/Home_2_inside.png';
import Home_3 from '../../../public/assets/Home_3.png';
import Home_4 from '../../../public/assets/Home_4.png';
import Home_5 from '../../../public/assets/Home_5.png';
import Home_6 from '../../../public/assets/Home_6.png';
import Home_7_inside from '../../../public/assets/Home_7_inside.png';

function Home(){
    return (
        <div className="home">
            <Box sx={{ flexGrow: 1 }}>
                <Grid container spacing={2}>
                    <Grid item xs={4}>
                        <img src={Home_1} alt="" style={{height: '200px', width: '370px', marginTop: '24px', marginLeft: "47px"}}/>
                    </Grid>
                    <Grid item xs={4}>
                        {/* <img src={Home_2} alt="" style={{height: '225px', width: '375px', marginTop: '37px', marginLeft: "38px"}}/> */}
                        <div 
                            style=
                            {{backgroundColor: 'white', height: '170px', width: '375px',
                            marginTop: '37px', marginLeft: "11px",
                            borderRadius: '20px',
                            }}
                        >
                            <p className='home_2_text'>One Rep Max</p>
                            <img src={Home_2_inside} alt="" style={{marginTop: '-6px', marginLeft: '31px', height: '89px', width: '302px'}}/>
                        </div>
                    </Grid>
                    <Grid item xs={4}>
                        <img src={Home_3} alt="" style={{height: '180px', width: '400px', marginTop: '31px', marginRight: '34px'}}/>
                    </Grid>
                    <Grid item xs={5}>
                        <img src={Home_4} alt="" style={{height: '200px', width: '400px', marginTop: '-2px', marginLeft: "225px"}}/>
                    </Grid>
                    <Grid item xs={5}>
                        <img src={Home_5} alt="" style={{height: '215px', width: '400px', marginTop: '-9px',
                            position: "relative", right: '-95px'    
                        }}/>
                    </Grid>
                    <Grid item xs={4}>
                        <img src={Home_6} alt="" style={{height: '200px', width: '400px', marginTop: '-2px', marginLeft: "125px"}}/>
                    </Grid>
                    <Grid item xs={3}>
                        {/* <img src={Home_2} alt="" style={{height: '225px', width: '375px', marginTop: '37px', marginLeft: "38px"}}/> */}
                        <div 
                            style=
                            {{backgroundColor: 'white', height: '170px', width: '375px',
                            marginTop: '10px', position: 'relative', right: '-177px',
                            borderRadius: '20px',
                            }}
                        >
                            <p className='home_7_text'>Calories Burn</p>
                            <img src={Home_7_inside} alt="" style={{marginTop: '-6px', marginLeft: '31px', height: '225px', width: '302px'}}/>
                        </div>
                    </Grid>
                </Grid>
            </Box>
        </div>
    )
}

export default Home