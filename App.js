//  <!-- Creating a heading using react  -->
const heading = React.createElement("h1",{id: "heading", xyz:"abc"},"Hello world in React");
// heading i.e. React.createElement is an object, not h1 tag

// Creating root in React where it will do DOM stuff

const root = ReactDOM.createRoot(document.getElementById("root"));

// Render the heading to the root

root.render(heading);

//-----------------------------------------------------------------------------------------------------
/*
how do we create nested elements inside React
<div id="parent">
    <div id="child">
        <h1 id="heading2">Hello World</h1>
    </div>
</div>

If we want multiple children, then we pass third argument i.e. children as array
That's why we use JSX 
*/
const parent = React.createElement("div" , {id : "parent"} ,
 React.createElement("div" , {id : "child"} ,
 [React.createElement("h1" , {},"Hello World") ,React.createElement("h1" , {},"Hello World") ]));
console.log(parent);
root.render(parent);