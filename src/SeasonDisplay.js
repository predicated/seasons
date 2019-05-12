import React from 'react';

const seasonConfig = {
    summer: {
        text: "Oh, my sweet summer child",
        iconName: 'sun'
    },
    winter: {
        text: "Winter has come",
        iconName: 'snowflake'
    }
};

const getSeason = (lat, month) => {
    if (month > 2 && month < 9) {
        return lat > 0 ? 'summer' : 'winter';
    } else {
        return lat > 0 ? 'winter' : 'summer';
    };
};

const SeasonDisplay = (props) => {
    const season = getSeason(props.lat, new Date().getMonth());
    const { text, iconName } = seasonConfig[season]; // Destructuring assignment. Very useful syntax!

    return (
        <div>
            <i className={`massive ${iconName} icon`} />
            <h1>{text}</h1>
            <i className={`massive ${iconName} icon`} />
        </div>
    );
};

export default SeasonDisplay;
