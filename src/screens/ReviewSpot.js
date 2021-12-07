import React from "react";
import {Text, View, StyleSheet, Button} from 'react-native';



// also need button to direct back to spot screen.

const ReviewSpot = ({navigation}) => {
    // basic landing page for button redirects. needs to be fully built out
    return (
        <>
            <Text>Please Review this spot</Text>
            <Button 
                title='Back to Beach Page'
                onPress={() => {
                    navigation.navigate('BeachScreen');
                }}
            />
        </>
    )
}

export default ReviewSpot