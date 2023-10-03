import * as React from 'react';
import { LinearGradient } from 'expo-linear-gradient';
import StyleHelper from '../StyleHelper';

const LinearGradientComp = ({children}) => {
    return (
        <LinearGradient
            // Background Linear Gradient
            colors={['#4c669f', '#3b5998', '#192f6a']}
            style={StyleHelper.linearGradient}
        >
            {children}
        </LinearGradient>
    );
}

export default LinearGradientComp;