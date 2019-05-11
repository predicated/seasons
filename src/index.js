import React from 'react';
import ReactDOM from 'react-dom';

class App extends React.Component {
    render() {
        window.navigator.geolocation.getCurrentPosition(
            (position) => console.log(position), // Success callback
            (err) => console.log(err) // Failure callback
        );

        return <div>Lattitude: </div>;
    };
};

ReactDOM.render(
    <App />,
    document.querySelector('#root')
);
