import * as React from 'react';
import { LinearGradient } from 'expo-linear-gradient';

const LinearGradientComp = ({children}) => {
    return (
        <LinearGradient
            // Background Linear Gradient
            colors={['#4c669f', '#3b5998', '#192f6a']}
            style={{ flex: 1, width: '100%' }} 
        >
            {children}
        </LinearGradient>
    );
}

export default LinearGradientComp;