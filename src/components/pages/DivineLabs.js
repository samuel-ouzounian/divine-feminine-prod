import React from "react";
import Backdrop from '@mui/material/Backdrop';
import CircularProgress from '@mui/material/CircularProgress';
import Footer from "../footer";
import { useState, useEffect } from 'react'
import { Store } from '../../store/store-reducer';
import * as utils from "../../helpers/utils";
import * as config from "../../config/config";
import './DivineLabs.css'
import { SharedImage } from "../../constants/image-constant";
const {
    discordBig
} = SharedImage;






function DivineLabs() {


    return (
        <>
            <div className="container">
                <h1 className="header">Divine Labs</h1>
                <a className="app-card-link" href='https://docs.thedivinefemininenft.art/divine-labs/divine-discord-bot' target='_blank' rel="noreferrer">
                    <div className="app-card-wrapper">
                        <div className="app-card">
                            <div className="image">
                                <img className="discordImg" src={discordBig}></img>

                            </div>
                            <div className="footer-wrapper">
                                <h1 className="footer">Discord Link</h1>
                            </div>

                        </div>
                    </div>
                </a>



            </div>
            <Footer></Footer>
        </>
    )

}
export default DivineLabs;
