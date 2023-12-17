// here we are creating the navbar component:

// first we import react in component.from the react:
import React from "react";
// second here we are importing the (Link) function from the (react-router-dom) library:
// IMP = we will use this function on the behalf of (anchor) tag:
// V.IMP = basically when we use the (anchor-tag) for providing (url) reference or (Routes) to our application elements:
// it will reload the hole page for going into the another url or route which we have given to the element:
// V.IMP = so that's why instead of using the (anchor-tag): we will use the (Link) function provided by the (react-router-dom) library:

import { Link } from "react-router-dom";

// here we create the navbar component:with the help of arrow or arrow function-component:
const navBar  = () =>{
    return(
            // here is the navigation bar container

        <div className="main-page">
            {/* under this main div of navbar component:
            => we use the (Link) tag package of the react-router-dom lib:
            => for adding the diff-pages links in the navbar: */}
            <div className="home-page" style={{display:'inline'}}>
                <Link to="/">
                    Home-Page
                </Link>
            </div>
            <p style={{display:'inline-block'}}>............</p>
            <div className="products-page" style={{display:'inline-block'}}>
                <Link to="/products">
                    Products-Page
                </Link>
            </div>
        </div>
    );
};

// here we are exporting it:
export default navBar;