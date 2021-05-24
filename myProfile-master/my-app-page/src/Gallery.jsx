import React, { Component } from 'react'

// import ImageGallery from 'react-image-gallery'

import Phoneix1 from './Pictures/Photography/DSC_0246-26.jpg'
import Phoneix2 from './Pictures/Photography/DSC_0260-40.jpg'
import ParkSlope1 from './Pictures/Photography/20200705_205126.jpg'
import ParkSlope2 from './Pictures/Photography/20200705_204213.jpg'
import NYC1 from './Pictures/Photography/20200311_205155.jpg'
import Church1 from './Pictures/Photography/20200307_204105.jpg'
import Church2 from './Pictures/Photography/20200309_211242.jpg'
import NYC2 from './Pictures/Photography/20200311_205204.jpg'
import NYC3 from './Pictures/Photography/20200311_231609.jpg'
import NYC4 from './Pictures/Photography/20200311_231701.jpg'
import SunsetPark from './Pictures/Photography/20200315_184059.jpg'
import pier1 from './Pictures/Photography/20200322_190030.jpg'
import pier2 from './Pictures/Photography/20200621_204223.jpg'
import Construction from './Construction';
// import { Grid } from '@material-ui/core';
import Grid from './Grid'
// import "~react-image-gallery/styles/css/image-gallery.css";


export default class Gallery extends Component {
    constructor(props) {
        super(props);


        this.state = {
            colors: typeof (Storage) != undefined ? localStorage.getItem("colorState") === "true" : true,

            Gallery: [
                {
                    setting: "Sunset",
                    images: [
                        // {
                        // row: [
                        {

                            Number: 1,
                            src: Phoneix1,
                            // thumbnail: Phoneix1,
                            Title: "Phoenix1",
                            camera: '',
                            width: "400px",
                            height: "300px"

                        },
                        {
                            Number: 2,
                            src: Phoneix2,
                            // thumbnail: Phoneix1,
                            Title: "Phoenix2",
                            camera: '',
                            width: "400px",
                            height: "300px"

                        },
                        {
                            Number: 3,
                            src: ParkSlope1,
                            // thumbnail: Phoneix1,
                            Title: "title",
                            camera: '',
                            height: "300px"
                        },
                        {
                            Number: 4,
                            src: ParkSlope2,
                            // thumbnail: Phoneix1,
                            Title: "title",
                            camera: '',
                            width: "250px",
                            height: "300px"
                        },
                        {
                            Number: 5,
                            src: SunsetPark,
                            // thumbnail: Phoneix1,
                            Title: "title",
                            camera: '',
                            width: "400px",
                            height: "300px"
                        },
                        {
                            Number: 6,
                            src: pier1,
                            // thumbnail: Phoneix1,
                            Title: "title",
                            camera: '',
                            width: "400px",
                            height: "300px"
                        }, {
                            Number: 7,
                            src: pier2,
                            // thumbnail: Phoneix1,
                            Title: "title",
                            camera: '',
                            width: "400px",
                            height: "300px"
                        },

                    ]
                },
                {
                    setting: "Night",
                    images: [
                        {
                            Number: 1,
                            src: NYC1,
                            // thumbnail: Phoneix1,
                            Title: "NYC",
                            camera: '',
                            width: "250px",
                            height: "300px"
                        },
                        {
                            Number: 2,
                            src: NYC2,
                            // thumbnail: Phoneix1,
                            Title: "NYC",
                            camera: '',
                            width: "250px",
                            height: "300px"
                        },
                        {
                            Number: 3,
                            src: NYC3,
                            // thumbnail: Phoneix1,
                            Title: "NYC",
                            camera: '',
                            width: "400px",
                            height: "300px"
                        },
                        {
                            Number: 4,
                            src: NYC4,
                            // thumbnail: Phoneix1,
                            Title: "NYC",
                            camera: '',
                            width: "250px",
                            height: "300px"
                        },
                        {
                            Number: 5,
                            src: Church1,
                            // thumbnail: Phoneix1,
                            Title: "NYC",
                            camera: '',
                            width: "250px",
                            height: "300px"
                        },
                        {
                            Number: 6,
                            src: Church2,
                            // thumbnail: Phoneix1,
                            Title: "NYC",
                            camera: '',
                            width: "250px",
                            height: "300px"
                        },

                    ]
                },
                {
                    setting: "Nature",
                    images: [
                        // {
                        //     Number: 1,
                        //     src: NYC1,
                        //     // thumbnail: Phoneix1,
                        //     Title: "NYC",
                        //     camera: '',
                        //     width: "250px",
                        //     height: "300px"
                        // },
                        // {
                        //     Number: 2,
                        //     src: NYC2,
                        //     // thumbnail: Phoneix1,
                        //     Title: "NYC",
                        //     camera: '',
                        //     width: "250px",
                        //     height: "300px"
                        // },
                        // {
                        //     Number: 3,
                        //     src: NYC3,
                        //     // thumbnail: Phoneix1,
                        //     Title: "NYC",
                        //     camera: '',
                        //     width: "400px",
                        //     height: "300px"
                        // },
                        // {
                        //     Number: 4,
                        //     src: NYC4,
                        //     // thumbnail: Phoneix1,
                        //     Title: "NYC",
                        //     camera: '',
                        //     width: "250px",
                        //     height: "300px"
                        // },
                        // {
                        //     Number: 5,
                        //     src: Church1,
                        //     // thumbnail: Phoneix1,
                        //     Title: "NYC",
                        //     camera: '',
                        //     width: "250px",
                        //     height: "300px"
                        // },
                        // {
                        //     Number: 6,
                        //     src: Church2,
                        //     // thumbnail: Phoneix1,
                        //     Title: "NYC",
                        //     camera: '',
                        //     width: "250px",
                        //     height: "300px"
                        // },

                    ]
                },
                {
                    setting: "City",
                    images: [
                        // {
                        //     Number: 1,
                        //     src: NYC1,
                        //     // thumbnail: Phoneix1,
                        //     Title: "NYC",
                        //     camera: '',
                        //     width: "250px",
                        //     height: "300px"
                        // },
                        // {
                        //     Number: 2,
                        //     src: NYC2,
                        //     // thumbnail: Phoneix1,
                        //     Title: "NYC",
                        //     camera: '',
                        //     width: "250px",
                        //     height: "300px"
                        // },
                        // {
                        //     Number: 3,
                        //     src: NYC3,
                        //     // thumbnail: Phoneix1,
                        //     Title: "NYC",
                        //     camera: '',
                        //     width: "400px",
                        //     height: "300px"
                        // },
                        // {
                        //     Number: 4,
                        //     src: NYC4,
                        //     // thumbnail: Phoneix1,
                        //     Title: "NYC",
                        //     camera: '',
                        //     width: "250px",
                        //     height: "300px"
                        // },
                        // {
                        //     Number: 5,
                        //     src: Church1,
                        //     // thumbnail: Phoneix1,
                        //     Title: "NYC",
                        //     camera: '',
                        //     width: "250px",
                        //     height: "300px"
                        // },
                        // {
                        //     Number: 6,
                        //     src: Church2,
                        //     // thumbnail: Phoneix1,
                        //     Title: "NYC",
                        //     camera: '',
                        //     width: "250px",
                        //     height: "300px"
                        // },

                    ]
                },


            ]
        }
    }
    basicColors = () => {
        return {
            backgroundColor: this.state.colors ? "white" : "#282c34",
            color: this.state.colors ? "black" : "aliceblue"

        }
    }
    // buttonColor = () => {
    //     console.log(this.props.colors)
    //     return {
    //         backgroundColor: this.props.colors ? "#282c34" : "white",
    //         color: this.props.colors ? "aliceblue" : "black"
    //     }
    // }
    render() {
        return (
            <div style={this.basicColors()}>
                {/* <Construction /> */}
                {/* hi */}
                < Grid
                    images={this.state.Gallery[0].images}
                    setting={this.state.Gallery[0].setting}
                />
                < Grid
                    images={this.state.Gallery[1].images}
                    setting={this.state.Gallery[1].setting}
                />
                < Grid
                    images={this.state.Gallery[2].images}
                    setting={this.state.Gallery[2].setting}
                />
                < Grid
                    images={this.state.Gallery[3].images}
                    setting={this.state.Gallery[3].setting}
                />
                {/* <ImageGallery items={this.state.Galerry[0].images} /> */}
            </div >
        )
    }
}
