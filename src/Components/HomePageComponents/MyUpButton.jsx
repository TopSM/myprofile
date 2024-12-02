import React from 'react'
import Button from "@mui/material/Button";

function MyUpButton() {
  return (
    <div className="fixed-button project-btn">
        <Button
        className="button-place"
        onClick={() => document.getElementById('header-title')?.scrollIntoView()}
        >
        Up
        </Button>
    </div> 
  )
}

export default MyUpButton