import React from "react";
import {Button, Text} from 'react-native';

const AllReviews = ({navigation}) => {
    // basic landing page for button redirects. needs to be fully built out
    return (
        <>
            <Text>This is ALL of the Reviews for this Spot</Text>
            <Button
                title="Back to Spot Page"
                onPress={() => {navigation.navigate('BeachScreen')}}
            />
        </>
    )
}

export default AllReviews;