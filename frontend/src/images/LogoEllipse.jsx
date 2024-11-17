import React from 'react';

export const LogoEllipse =  ( { width = 25, height = 25 } ) => {
    return (
        <svg width={width} height={height} viewBox="0 0 25 25" fill="none" xmlns="http://www.w3.org/2000/svg">
            <circle cx="12.5" cy="12.5" r="12.5" fill="#9283FF"/>
        </svg>
    )
}