import React from 'react';

class CarClassComponent extends React.Component {
    render() {
        return <h2>Hi, I am a Car!</h2>;
    }
}

const CarFunctionComponent = () => {
    return <h2>Hi, I am a Car!</h2>;
}

export { CarClassComponent, CarFunctionComponent };