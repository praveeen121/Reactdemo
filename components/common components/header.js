import React, { Component } from "react";
import { AppBar, Toolbar, Typography } from "@material-ui/core";

export default function  Header() {
    const displayDesktop = () => {
        return <Toolbar>{MyProjectLogo}</Toolbar>
    };
    const MyProjectLogo = (
        <Typography variant = "h6" component="h1">Art Store</Typography>
    );
    return(
        <header>
            <AppBar>{displayDesktop()}</AppBar>
        </header>
    );

}