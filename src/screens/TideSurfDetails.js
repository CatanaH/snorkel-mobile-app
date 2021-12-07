import React from "react";
import {Button, Text} from 'react-native';

const TideSurfDetails = ({navigation}) => {
    // basic landing page for button testing, needs to be fully built out still
    return (
        <>
            <Text>Tide and Surf Report Details Page</Text>
            <Button
                title='Back to Beach Page'
                onPress={() => {navigation.navigate('BeachScreen')}}
            />
        </>
    )
}

export default TideSurfDetails;