import React from 'react'
import MyPoems from '../Components/MyPoems'

function getTodaysDay() {
    var date = new Date();

    const daysOfTheWeek = ['Sunday', 'Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday'];

    var dayOfTheWeek = date.getDate()

    const todaysDay = daysOfTheWeek[dayOfTheWeek];

    console.log("todays day", todaysDay)

    return todaysDay;
}

function PoemsPage() {
    return (
        <MyPoems todaysDay />
    )
}

export default PoemsPage