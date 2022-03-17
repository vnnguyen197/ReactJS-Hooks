import React, {Component} from 'react';

function Content(props) {
    return (
        <div className="App">
            Website todo
            <input type="checkbox">Styleguide creation</input>
            <input type="checkbox">Send wireframes</input>
            <input type="checkbox"></input>
            <input type="checkbox"></input>
        </div>
    );
}

export default Content;