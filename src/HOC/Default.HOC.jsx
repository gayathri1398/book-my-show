
import React from "react";
import { Route } from "react-router-dom";

// layout
import DefaultLayout from "../layouts/Default.layout";

// HOC
const DefaultHOC = ({component:Component, ...rest}) => {
    // const Component = component or component:Component;

    // HOC is something that takes in a component and returns a component(called as fun also)
     return(
         <>
         <Route
          {...rest}
          component={(props)=>
          <DefaultLayout>
              <Component {...props}/>
          </DefaultLayout>
        }
         />
            
         
         </>
     
     )
}
export default DefaultHOC;