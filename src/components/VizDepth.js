import React from "react";
import { Text, View } from 'react-native'

import { Rating, AirbnbRating } from 'react-native-ratings';


const VizDepth = () => {
    const rating = '5';
    const maxDepth = '90';

    return(
        <>
            <Text>Last viz reported</Text>
            <View>
                {rating ?
                <Text>{rating}</Text> :
                <Text>N/A</Text>
                }
            </View>
            <Text>Max Depth</Text>
            <View>
                {maxDepth ?
                <Text>{maxDepth}</Text> :
                <Text>Unconfirmed</Text>
                }
            </View>
        </>
    )
}

export default VizDepth;