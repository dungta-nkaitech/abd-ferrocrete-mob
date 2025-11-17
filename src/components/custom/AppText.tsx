import React from 'react';
import { Text, TextProps } from 'react-native';

export default function AppText(props: TextProps) {
    return (
        <Text {...props} style={[{ fontFamily: 'CenturyGothic' }, props.style]}>
            {props.children}
        </Text>
    );  
}
