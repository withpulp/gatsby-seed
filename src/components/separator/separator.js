import React from 'react';

import { SeparatorContainer } from './separator.css';

// TODO:
// - create separator components with different separatorTypes
// - configure propTypes and defaultProps for different svg/css separators
// - mark this component's separatorType as gentle-wave
// - identify the various svg patterns and condense this into a single functional component
// - create a separator context provider for serving different separatorTypes using props, context and hooks

// RESOURCES:
// - https://tympanus.net/Development/SectionSeparators/
// - https://codepen.io/emared/pen/gWGBLR
// - https://codepen.io/SGD/pen/gObKQoj
// - https://codyhouse.co/tutorials/svg-section-divider

const WorkSeperator = () => (
    <SeparatorContainer>
        <svg
            className="editorial"
            xmlns="http://www.w3.org/2000/svg"
            xmlnsXlink="http://www.w3.org/1999/xlink"
            viewBox="0 24 150 28 "
            preserveAspectRatio="none"
        >
            <defs>
                <path
                    id="gentle-wave"
                    d="M-160 44c30 0 58-18 88-18s 58 18 88 18 58-18 88-18 58 18 88 18 v44h-352z"
                />
            </defs>
            <g className="parallax1">
                <use xlinkHref="#gentle-wave" x="50" y="3" />
            </g>
            <g className="parallax2">
                <use xlinkHref="#gentle-wave" x="50" y="0" />
            </g>
            <g className="parallax3">
                <use xlinkHref="#gentle-wave" x="50" y="9" />
            </g>
            <g className="parallax4">
                <use xlinkHref="#gentle-wave" x="50" y="6" />
            </g>
        </svg>
    </SeparatorContainer>
);

export default WorkSeperator;
