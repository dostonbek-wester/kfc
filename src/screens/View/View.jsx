import React from 'react'
import DownloadDoneIcon from '@mui/icons-material/DownloadDone';
import LunchDiningIcon from '@mui/icons-material/LunchDining';
import LocalCafeIcon from '@mui/icons-material/LocalCafe';
import FastfoodIcon from '@mui/icons-material/Fastfood';
import './View.css'
import Cards from './Cardm'
import Cards2 from './Cardm2'
import { NavLink } from 'react-router-dom';
import AlertDialog from './Modal';
import { useState } from 'react';


const view = () => {
  const [open, setOpen] = React.useState(false);
  const [modalData, setmodalData] = useState({})

  const handleClickOpen = (item) => {
    setOpen(true);
    setmodalData(item)
  };

  

  function deslength(ftitle) {
    if (ftitle.length > 50) {
      return ftitle.slice(0, 50) + "...";
    } else {
      return ftitle;
    }
  }

  return (
    <div className="menu-container">
      <AlertDialog modalData={modalData} open={open} setOpen={setOpen} />
      <div className="l-side">
        <div className="menus">

        <a href={"#bir1"} id='menun'><DownloadDoneIcon id="iconm"/>Reccomended</a>
        <a href={"#ikki1"} id='menun'><LunchDiningIcon id="iconm"/>Burgers</a>
        <a href={"#ikki2"} id='menun'><LocalCafeIcon id="iconm"/>Twisters</a>
        <a href={"#ikki3"} id='menun'><FastfoodIcon id="iconm"/>Buckets</a>
        <a href={"#ikki4"} id='menun'><DownloadDoneIcon id="iconm"/>Juicy chicken</a>
        <a href={"#ikki5"} id='menun'><LunchDiningIcon id="iconm"/>Reccomended</a>
        <a href={"#ikki6"} id='menun'><FastfoodIcon id="iconm"/>Burgers</a>
        <a href={"#ikki7"} id='menun'><LocalCafeIcon id="iconm"/>Twisters</a>
        <a href={"#ikki8"} id='menun'><FastfoodIcon id="iconm"/>Buckets</a>
        <a href={"#ikki9"} id='menun'><DownloadDoneIcon id="iconm"/>Juicy chicken</a>
        <a href={"#ikki10"} id='menun'><LocalCafeIcon id="iconm"/>Reccomended</a>
        <a href={"#ikki11"} id='menun'><LunchDiningIcon id="iconm"/>Burgers</a>
        <a href={"#ikki12"} id='menun'><LocalCafeIcon id="iconm"/>Twisters</a>
        <a href={"#ikki13"} id='menun'><FastfoodIcon id="iconm"/>Buckets</a>
     
        </div>
      </div>
      <div className="r-side">
        <div className='view'>
            
              <Cards handleClickOpen={handleClickOpen} />
          
              <Cards2 handleClickOpen={handleClickOpen} main={"ikki1"} />
              <Cards2 handleClickOpen={handleClickOpen} main={"ikki2"} />
              <Cards2 handleClickOpen={handleClickOpen} main={"ikki3"} />
              <Cards2 handleClickOpen={handleClickOpen} main={"ikki4"} />
              <Cards2 handleClickOpen={handleClickOpen} main={"ikki5"} />
              <Cards2 handleClickOpen={handleClickOpen} main={"ikki6"} />
              <Cards2 handleClickOpen={handleClickOpen} main={"ikki7"} />
              <Cards2 handleClickOpen={handleClickOpen} main={"ikki8"} />
              <Cards2 handleClickOpen={handleClickOpen} main={"ikki9"} />
              <Cards2 handleClickOpen={handleClickOpen} main={"ikki10"} />
              <Cards2 handleClickOpen={handleClickOpen} main={"ikki11"}  />
              <Cards2 handleClickOpen={handleClickOpen} main={"ikki12"}  />
          
            </div>
        </div>
      </div>

  )
}

export default view