import React from 'react';
import ReactDOM from 'react-dom';

const App = () => {
    window.navigator.geolocation.getCurrentPosition(
        (position) => console.log(position), // Success callback
        (err) => console.log(err) // Failure callback
    );
    
    return <div>Hi there!</div>;
};

ReactDOM.render(
    <App />,
    document.querySelector('#root')
);
