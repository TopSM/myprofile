import React, { Component } from 'react'

// import ImageGallery from 'react-image-gallery'

import Phoneix1 from './Pictures/Photography/DSC_0246-26-min.jpg'
import Phoneix2 from './Pictures/Photography/DSC_0260-40-min.jpg'
import ParkSlope1 from './Pictures/Photography/20200705_205126.jpg'
import ParkSlope2 from './Pictures/Photography/20200705_204213.jpg'
import NYC1 from './Pictures/Photography/20200311_205155-min.jpg'
import Church1 from './Pictures/Photography/20200307_204105.jpg'
import Church2 from './Pictures/Photography/20200309_211242.jpg'
import NYC2 from './Pictures/Photography/20200311_205204-min.jpg'
import NYC3 from './Pictures/Photography/20200311_231609.jpg'
import NYC4 from './Pictures/Photography/20200311_231701.jpg'
import SunsetPark from './Pictures/Photography/20200315_184059-min.jpg'
import Pier1 from './Pictures/Photography/20200322_190030-min.jpg'
import Pier2 from './Pictures/Photography/20200621_204223.jpg'
import Ducks from './Pictures/Photography/20200614_154443-min.jpg'
import City1 from './Pictures/Photography/20200802_165117-min.jpg'
import Trees from './Pictures/Photography/20200926_133106-min.jpg'
import City2 from './Pictures/Photography/IMG_20200805_231044_367-min.jpg'
import Nature from './Pictures/Photography/20200531_150446-min.jpg'
import Flower1 from './Pictures/Photography/RAP_5331-min.jpg'
import City3 from './Pictures/Photography/RAP_5685-min.jpg'
import Flower2 from './Pictures/Photography/RAP_5335-min.jpg'
import Sunset from './Pictures/Photography/RAP_5455-min.jpg'

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
                            description: "",
                            camera: 'N/A',
                            width: "400px",
                            height: "300px"

                        },
                        {
                            Number: 2,
                            src: Phoneix2,
                            // thumbnail: Phoneix1,
                            description: "",
                            camera: 'N/A',
                            width: "400px",
                            height: "300px"

                        },
                        {
                            Number: 3,
                            src: ParkSlope1,
                            // thumbnail: Phoneix1,
                            description: "",
                            camera: 'Galaxy s20+',
                            height: "300px"
                        },
                        {
                            Number: 4,
                            src: ParkSlope2,
                            // thumbnail: Phoneix1,
                            description: "",
                            camera: 'Galaxy s20+',
                            width: "250px",
                            height: "300px"
                        },
                        {
                            Number: 5,
                            src: SunsetPark,
                            // thumbnail: Phoneix1,
                            description: "",
                            camera: 'Galaxy s20+',
                            width: "400px",
                            height: "300px"
                        },
                        {
                            Number: 6,
                            src: Pier1,
                            // thumbnail: Phoneix1,
                            description: "",
                            camera: 'Galaxy s20+',
                            width: "400px",
                            height: "300px"
                        },
                        {
                            Number: 7,
                            src: Pier2,
                            // thumbnail: Phoneix1,
                            description: "",
                            camera: 'Galaxy s20+',
                            width: "400px",
                            height: "300px"
                        },
                        {
                            Number: 8,
                            src: Sunset,
                            // thumbnail: Phoneix1,
                            description: "Favorite picture so far",
                            camera: 'Nikon D7100',
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
                            description: "",
                            camera: 'Galaxy s20+',
                            width: "250px",
                            height: "300px"
                        },
                        {
                            Number: 2,
                            src: NYC2,
                            // thumbnail: Phoneix1,
                            description: "",
                            camera: 'Galaxy s20+',
                            width: "250px",
                            height: "300px"
                        },
                        {
                            Number: 3,
                            src: NYC3,
                            // thumbnail: Phoneix1,
                            description: "",
                            camera: 'Galaxy s20+',
                            width: "400px",
                            height: "300px"
                        },
                        {
                            Number: 4,
                            src: NYC4,
                            // thumbnail: Phoneix1,
                            description: "",
                            camera: 'Galaxy s20+',
                            width: "250px",
                            height: "300px"
                        },
                        {
                            Number: 5,
                            src: Church1,
                            // thumbnail: Phoneix1,
                            description: "",
                            camera: 'Galaxy s20+',
                            width: "250px",
                            height: "300px"
                        },
                        {
                            Number: 6,
                            src: Church2,
                            // thumbnail: Phoneix1,
                            description: "",
                            camera: 'Galaxy s20+',
                            width: "250px",
                            height: "300px"
                        },

                    ]
                },
                {
                    setting: "Nature",
                    images: [
                        {
                            Number: 1,
                            src: Ducks,
                            // thumbnail: Phoneix1,
                            description: "",
                            camera: 'Galaxy s20+',
                            width: "400px",
                            height: "300px"
                        },
                        {
                            Number: 2,
                            src: Trees,
                            // thumbnail: Phoneix1,
                            description: "",
                            camera: 'Galaxy s20+',
                            width: "250px",
                            height: "300px"
                        },
                        {
                            Number: 3,
                            src: Nature,
                            // thumbnail: Phoneix1,
                            description: "",
                            camera: 'Galaxy s20+',
                            width: "400px",
                            height: "300px"
                        },
                        {
                            Number: 4,
                            src: Flower1,
                            // thumbnail: Phoneix1,
                            description: "",
                            camera: 'Nikon D7100',
                            width: "400px",
                            height: "300px"
                        },
                        {
                            Number: 5,
                            src: Flower2,
                            // thumbnail: Phoneix1,
                            description: "",
                            camera: 'Nikon D7100',
                            width: "400px",
                            height: "300px"
                        },
                        // {
                        //     Number: 6,
                        //     src: Church2,
                        //     // thumbnail: Phoneix1,
                        //     description: "NYC",
                        //     camera: '',
                        //     width: "250px",
                        //     height: "300px"
                        // },

                    ]
                },
                {
                    setting: "City",
                    images: [
                        {
                            Number: 1,
                            src: City1,
                            // thumbnail: Phoneix1,
                            description: "",
                            camera: 'Galaxy s20+',
                            width: "250px",
                            height: "300px"
                        },
                        {
                            Number: 2,
                            src: City2,
                            // thumbnail: Phoneix1,
                            description: "",
                            camera: 'Galaxy s20+',
                            width: "250px",
                            height: "300px"
                        },
                        {
                            Number: 3,
                            src: City3,
                            // thumbnail: Phoneix1,
                            description: "",
                            camera: 'Nikon D7100',
                            width: "400px",
                            height: "300px"
                        },
                        // {
                        //     Number: 4,
                        //     src: NYC4,
                        //     // thumbnail: Phoneix1,
                        //     description: "NYC",
                        //     camera: '',
                        //     width: "250px",
                        //     height: "300px"
                        // },
                        // {
                        //     Number: 5,
                        //     src: Church1,
                        //     // thumbnail: Phoneix1,
                        //     description: "NYC",
                        //     camera: '',
                        //     width: "250px",
                        //     height: "300px"
                        // },
                        // {
                        //     Number: 6,
                        //     src: Church2,
                        //     // thumbnail: Phoneix1,
                        //     description: "NYC",
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
