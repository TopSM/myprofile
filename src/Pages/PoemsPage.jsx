import React,  { useState } from 'react'
import MyPoems from '../Components/MyPoems'
import { useOutletContext } from 'react-router-dom';
function getTodaysDay() {

    let today = new Date();
    const daysOfTheWeek = ['Sunday', 'Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday'];
    const todaysDay = daysOfTheWeek[today.getDay()];

    return todaysDay;
}

function PoemsPage() {

    let [color] = useOutletContext()

    console.log(color)
    return (
        <div className={color?'color-toggle-white': "color-toggle-black"}>   
            <div  className='poem-pad poem-pad2' >
                <MyPoems todaysDay={getTodaysDay()} />            
                <h3 className='poem-author'>- Ostavo R. Palacios</h3>
            </div>
        </div> 
    )
}

export default PoemsPage