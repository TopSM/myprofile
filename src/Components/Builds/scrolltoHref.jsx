import {useEffect} from 'react'
import { useLocation } from 'react-router-dom'

const scrolltoHref = () => {

    // const location = useLocation();
    console.log("clicked on, Location is", location);

    useEffect(() => {
        if (location.hash) {
          const element = document.getElementById(location.hash.slice(1));
          if (element) {
            element.scrollIntoView({ behavior: 'smooth' });
          }
        }
      }, [location]);
};

export default scrolltoHref;