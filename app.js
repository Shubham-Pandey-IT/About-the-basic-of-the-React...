/* <div>
    <div>
        <h1></h1>
        <h2></h2>
    </div>
</div> */





// Create a React element
 const heading = React.createElement(
    "div", {id:"parent"}, 
        React.createElement(
        "div", {id:"children"}, 
            [React.createElement(
                "h1", {}, 
                "Hello I'm H1 Tag!!"
            ),
            React.createElement(
                "h2", {}, 
                "Hello I'm H2 Tag!!"
            )
        ]
    )
);

//  // Get the root element by ID
 const root = ReactDOM.createRoot(document.getElementById("root"));

 // Render the React element
 root.render(heading);