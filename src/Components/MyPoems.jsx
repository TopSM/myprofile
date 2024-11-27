import React from 'react'
import { useOutletContext } from "react-router-dom";

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
        Title: "A Jack's Web",
        DOW: "Tuesday",
        id: 2,
        Poem: "A jack of all trades is a master of none but often it is better then a master of one.\n\
                We are born with the curse of curiosity at absolute zero\n\
                And at negative one we are learning to survive with our biological instincts.\n\
                By two you have beaten gravity and our now living with your bipedal apendages\n\
                And by three you have been granted a present to store the past and all the information you encounter.\n\
                By four you have learned to create sinosudial waves using your voicebox\n\
                And this is all while on survival mode\n\
                nowhere near close to a master.\n\
                \n\
                At adoloscence you are engulfed in the chemistry of your own hormones\n\
                Controlled by the chromosomes of your biological creators\n\
                Yet more influenced by this worlds sociology\n\
                With very few able to understand the psychology of you.\n\
                \n\
                By the age of consent you have understood that there are laws.\n\
                In society to keep you in line but also laws of the universe,\n\
                Forces of law and life that cannot be explained.\n\
                But can be interpreted with a variable or a graph or a sequence.\n\
                And with these interpetation you can understand all that moves\n\
                all that reacts and all that live.\n\
                The same language that helps us understand the economics humanity has devised.\n\
                Created to understand the secrets of the universe, but does not help explain the philosophy of life and it's meaning\n\
                That you can learn from the readings of descarte or plato or some scripture.\n\
                \n\
                By the second decade we are overwhelmed with choice overload.\n\
                And learned the limits of our control onto this world\n\
                But yet our derivative attempts at creating and taking action help us understand ourselves.\n\
                We learn to enjoy calculated auditory beats and rhythm\n\
                Choose to admire pigmentation on the medium of your choice.\n\
                Express yourself through the movement of your own body\n\
                Hallucinate at lexicon transcribed on thin bark\n\
                \n\
                To live is to create and to create you must know.\n\
                A jack is forever on a quest to expand his own web of information,\n\
                Link all that he knows and embellish new ideas\n\
                and at the center of your web there is you.\n\
                How are you going to create your own web?\n\
                Because mine, mine is expanding in all directions."
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
    },
    {   
        Title: "Stuck In The Frame",
        DOW: "Thursday",
        id: 4,
        Poem:"I know what I know and that's what counts\n\
                That I am aware. the image, the memory, the right words\n\
                It's in there, stuck in the frame.\n\
                \n\
                I  see the words screaming at me through the frame\n\
                Yet I cannot read nor utter the words to explain what I mean\n\
                But I know what you mean\n\
                And I want to give my 5 cents\n\
                But this cranium is stuck on the loading screen\n\
                And all I can do is stare at the picture in the frame.\n\
                \n\
                What am I trying to say?\n\
                I squint, I stare, I blink\n\
                but all I can see is an out of focus picture.\n\
                That name, that face, that place,\n\
                I know, I know it.\n\
                I hope you believe me, I can see the blurred out picture.\n\
                And I can tell you the detail of the frame:\n\
                Dark wooden frame, with gold like patterns, and curved edges portruding outwards.\n\
                But that picture is so obscured\n\
                Why can't I say what I wanna say!\n\
                \n\
                I can tell you the colors that I see\n\
                The negatives and postives,\n\
                The indentations on the canvas.\n\
                But I cannot tell you what I wanna say\n\
                Because my thought is in the form a picture\n\
                That cannot be described by me\n\
                Only seen by me\n\
                But I hope you understand I do know this\n\
                I just can't explain whats beyond the frame."
    },
    {   
        Title: "Living in The Past",
        DOW: "Saturday",
        id: 5,
        Poem:"The past is forever so haunting.\n\
                It looms over our shoulders\n\
                Weighting heavily over our identities\n\
                With trauma griping ever so tight.\n\
                \n\
                We build our foundation with the traumas\n\
                The past echoing so loudly below the concrete\n\
                The unwaranted memories of our childhood flashing before our eyes.\n\
                They are who we are\n\
                They are our experiences\n\
                We cannot change those\n\
                For they are behind us and below us.\n\
                \n\
                And yet that vultures grip stand over our shoulders\n\
                Waiting for the foundation to collapse\n\
                And for the trauma to consume you\n\
                Whether we realize it or not.\n\
                \n\
                And while our traumas scream from the depths of our worlds\n\
                We forgot to hear the chirping birds,\n\
                We forgot the smell of our nostalgic memories,\n\
                We forget the embracing squeezes\n\
                from our loved ones,\n\
                And we forget the taste of our childhood.\n\
                \n\
                The past does not need to haunt\n\
                Nor to control you, or consume you\n\
                But you let it.\n\
                You are a person with good and bad experiences\n\
                \n\
                Live in the present with the past by your side\n\
                Laugh with your inner child\n\
                Purely love and entertain the broken child within\n\
                For they are you\n\
                And all they want is to smile and have fun\n\
                \n\
                Remember to enjoy your favorite meals,\n\
                The activities that made you feel alive,\n\
                The sounds that brought peace within\n\
                Our past has colored who we are\n\
                but I can still choose the colors I want to saturate\n\
                \n\
                It's ok, visit the past and your inner child\n\
                They will always be waiting for you, to have some fun\n\
                They are you and you are them\n\
                Neither of which wanna relive your traumas\n\
                But I am sure both of you will love to re-live some memories."
    },
    {   
        Title: "Alone In This Stupid Beautiful World",
        DOW: "Friday",
        id: 6,
        Poem:"Alone I was brought forth\n\
                And alone I may go\n\
                But before that I must explore this beautiful world\n\
                \n\
                Whether in a crew or with a partner or alone Explore I will do and enjoy every waking minute\n\
                Because in this stupid beautiful world\n\
                It's all I can do,\n\
                To appreciate the time I was given\n\
                To explore everwhere from my origin point and every plane imaginable\n\
                And if alone I came,  alone I will discover the inner and outer secrets of this world\n\
                \n\
                I can't be stopped no more\n\
                Not the inner workings of my mind\n\
                Not the societal norms that leave one feeling ostracized\n\
                Not the feeling of eternal solitude\n\
                \n\
                All earthly origin story starts with one self\n\
                And is set in a vast empty void\n\
                Ontop of a spinning rock with large bodies of water\n\
                With thousand of miles to traverse\n\
                I Can't believe I live in such a beautiful stupid world"
    },
    {   
        Title: "Words Have No Meaning But Our Own",
        DOW: "Wednesday",
        id: 7,
        Poem:"Words have no meaning but our own, is what I tell myself\n\
                Everytime I want to initiate a conversation\n\
                Hi, Hello, wassup, heyyy.\n\
                But thats either to basic, to formal, to relaxed, to flirty??\n\
                What the fuck do I say\n\
                And fuck is another one\n\
                It's said in anger and in ecstasy\n\
                As an insult to fuck off is what I tell you\n\
                And you reply ''fuck you'',\n\
                well what if that is my goal for the both of us.\n\
                Fucking shit, I have no idea, what are your intentions!\n\
                There are thousands of languages, multiple forms of writing all on there third or four urban dicitionary edition\n\
                And I am here prediciting your interpretations of my words through a blue lit screen.\n\
                Words only mean what we want it to mean\n\
                By me and by you and that friend you shared my message to\n\
                It's all in the beholders eye\n\
                From the trauma that we lived through and words we live by\n\
                Well homie idk what to tell you\n\
                You ain't a bro I can't spout nonesense too\n\
                Or my lover I tell at 11pm to pull up\n\
                And def not my sibling I can casually say l, love you.\n\
                You are a stranger, who I just want to get to know\n\
                As a friend, as a crush, as a side story character\n\
                But we can't get past the, Soup\n\
                Because what I actually meant was sup\n\
                And now my scramble at fixing my type-o is a turn off\n\
                And your silence becomes a clear indicator of goodbye\n\
                Shit, where is the common ground."
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

function MyPoems({todaysDay}) {
    const date = todaysDay;

    return (
        <div className ="poem-page">
            <h2 className='sections-color'>Poem of the day</h2>
            {PoemsList.map(pl => 
                <GetPoem date={date} poem={pl} key ={pl.id}/>
            )}
        </div>
    )
}

export default MyPoems