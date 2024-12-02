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

    let poemToggle = "poem-page "
    poemToggle += color?'color-toggle-white': "color-toggle-black"
    return (
        <div className={poemToggle} >
            <MyPoems color={color} todaysDay={getTodaysDay()} />            
            <h3 className='poem-author'>- Ostavo R. Palacios</h3>
        </div>
    )
}

export default PoemsPage