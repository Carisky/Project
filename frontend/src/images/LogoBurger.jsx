import React from 'react';

export const LogoBurger = ( { width = 56, height = 47 } ) => {
    return (
        <svg width={width} height={height} viewBox="0 0 56 47" fill="none" xmlns="http://www.w3.org/2000/svg">
            <rect x="1" y="1" width="54" height="45" rx="13" stroke="#886FFB" stroke-width="2"/>
            <path d="M16 16H40" stroke="#886FFB" stroke-width="2" stroke-linecap="round"/>
            <path d="M16 24H40" stroke="#886FFB" stroke-width="2" stroke-linecap="round"/>
            <path d="M16 32H40" stroke="#886FFB" stroke-width="2" stroke-linecap="round"/>
        </svg>
    )
}