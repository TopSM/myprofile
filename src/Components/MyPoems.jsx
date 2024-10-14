import React from 'react'


const PoemsList = [
    {
        Title: "There Comes A Point",
        DOW: "Monday",
        id: 1,
        Poem: "There comes a point in Sin where there would be a trough\n\
                And a peak\n\
                The same goes for cosine\n\
                Tis the rollercoaster of life\n\
                \n\
                The waves of life passing by on the plane of time\n\
                And each peak delayed by our own actions\n\
                Each trough ignored until we hit bottom\n\
                An amplitude dictated by our own attitude\n\
                \n\
                There comes a point in life where you will reach your lowest\n\
                Where the values of x can only be greater then your last lowest point\n\
                In which your momentum in reality will increase your amplitude\n\
                Distancing your peak but climbing in your success\n\
                A price worth reaching in the end\n\
                \n\
                There comes a point in life where you will reach the mountain tops, the sky, the heavens\n\
                All that you have wished\n\
                Lying ontop of the peak\n\
                But with each peak there is descent\n\
                Not all good lasts forever\n\
                Life can't just be a saddle point\n\
                \n\
                There comes a point in life where you will reach your trough\n\
                And it's there where you will say\n\
                Enough is enough\n\
                I can do better"
    },
    {
        Title: "Poem #2",
        DOW: "Tuesday",
        id: 2,
        Poem: " my poem is here"
    },
    {
        Title: "Just Have Fun",
        DOW: "Sunday",
        id: 3,
        Poem: "In this crazy fucked up world \n\
                There are bonds that hold us together\n\
                Relationships that bring life to us\n\
                Unforgettable experiences that are made\n\
                \n\
                But those bonds, we cannot hoard\n\
                Those relationships dont always last forever\n\
                Life won't let you keep all your loved ones\n\
                And you will feel Afraid\n\
                \n\
                Because life moves on in this crazy fucked up world\n\
                But out your window you will see the clear weather\n\
                And life will start anew after a few months\n\
                And you will go to clubs, and diners and parades\n\
                \n    \
                Because life CAN be fun in this crazy fucked up world\n\
                Against Life, you will be kind, you will love yourself, you will be clever\n\
                Goddamn it you are enough! Stop making a fuss\n\
                You are done getting played\n\
                \n\
                In this strange and mysterious world\n\
                You will be alone but stronger and better\n\
                You will learn, value yourself, be yourself, adjust\n\
                Because in this crazy ass world you are your only aid\n\
                \n\
                So go on, have fun, live life and don't look back.\n\
                Enjoy the beautiful universe we were put on and just have fun"
    }
];

function TextWithLineBreaks({ text }) {
    const lines = text.split('\n');
  
    return (
      <div>
        {lines.map((line, index) => (
          <React.Fragment key={index}>
            {line}
            <br />
          </React.Fragment>
        ))}
      </div>
    );
  }
function GetPoem(props) {
        
    let poem = props.poem;

    if( props.date === poem.DOW){
        return(
            <div className="poem-pad poem-body">
                <h3 >{poem.Title}</h3>
                <TextWithLineBreaks text={poem.Poem}/>
            </div>
        );
    }
        
}

function MyPoems(props) {
    const date = props.todaysDay;
    return (
        <div className ="poem-page">
            <h2 className='sections'>Poem of the day</h2>
            {PoemsList.map(pl => 
                <GetPoem date={date} poem={pl} key ={pl.id}/>
            )}
        </div>
    )
}

export default MyPoems