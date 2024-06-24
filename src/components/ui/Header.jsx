
import {cloneElement} from "react";
import { AppBar,Toolbar,useScrollTrigger, Button } from "@mui/material";


const Header = () => {

    function ElevationScroll(props) {
        const { children } = props;
     
        const trigger = useScrollTrigger({
          disableHysteresis: true,
          threshold: 0,
    
        });
      
        return cloneElement(children, {
          elevation: trigger ? 4 : 0,
        });
      }
      
      
    return (


          <ElevationScroll>
        <AppBar position="static">
          
         <Toolbar>
         {/* <Typography variant="h6" component="div">
            وب سایت رسمی محراب
            </Typography> */}
            <Button variant="contained" size="large" >  کلیک کن  </Button>
           
            
         </Toolbar>

        </AppBar>
        </ElevationScroll>

    )
}

export default Header;


// The lifecycle of a component
// Every React component goes through the same lifecycle:

// A component mounts when it’s added to the screen.
// A component updates when it receives new props or state, usually in response to an interaction.
// A component unmounts when it’s removed from the screen.


//useEffect() = React Hook that tells  do some code when(pick one):
//              This component re-renders
//              This component mounts
//              The state of a value

// useEffect(function, [dependencies])

// 1- useEffect( () => {} )            // Runs after every re-renders
// 2- useEffect( () => {}, [])         // Runs only on mount
// 3- useEffect( () => {}, [value] )   // Runs on mount + when value changes

// Uses :
// #1 Event Listeners
// #2 Dom Manipulation
// #3 Subscriptions (Real-time Updates)
// #4 Fetching Data from an API
// #5 Clean up when a component unmounts


// componentDidMount
  // useEffect(() => {
  //   console.log("The use effect ran");
  // }, []);

  // // componentDidUpdate  // with props or states
  // useEffect(() => {
  //   console.log("The use effect ran");
  // }, [count, count2]);

  // componentWillUnmount
  // useEffect(() => {
  //   console.log("The use effect ran");
  //   return () => {
  //     console.log("the return is being ran");
  //   };
  // }, []);