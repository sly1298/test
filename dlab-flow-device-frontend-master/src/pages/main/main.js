import React from 'react';
import {
    Box,
    Button,
    Grid, TextField
} from '@mui/material';
import '../../background/BackgroundLayout.css'
import './main.css'
import BackgroundLayout from "../../background/BackgroundLayout";

function App() {
    return (
        <div className="App">
            {/*<BackgroundLayout>*/}
                <Grid container>
                    <Grid item xs={12} sm={2} style={{height: '100px', padding: '20px' ,fontSize: '40px'}}>
                        Device
                    </Grid>
                    <Grid item xs={12} sm={10}></Grid>
                    <Grid item xs={12} sm={3}>
                        <TextField></TextField>
                    </Grid>

                </Grid>
            {/*</BackgroundLayout>*/}
            {/* 다른 컴포넌트 및 요소들 */}
        </div>
    );
}


export default App;
