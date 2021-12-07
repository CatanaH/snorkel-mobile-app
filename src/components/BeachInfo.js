// import VizDepth from "components/BeachPage/VizDepth/VizDepth";
import React from "react";
import {Text, View, StyleSheet} from 'react-native';

import VizDepth from "./VizDepth";
import EntryMap from "./entryMap";

const BeachInfo = () => {
    // set state for tides
    // useEffect for tides array

    return (
        <View style={styles.container}>
            <View style={styles.description}>
                {/* ? automated description: user entered description */}
                <Text>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur.</Text>
            </View>   
            <VizDepth/> 
            {/* <EntryMap/> */}
            {/* ternary for displaying tide report */}
                {/* <Text className={}>BeachName Tide Chart and Surf Report</Text> */}
                {/* div for tideContainer */}
            
        </View>
    )
}

export default BeachInfo;

const styles = StyleSheet.create({
    container: {
        // margin: 100
        flex: .6,
        width: "100%",
        alignItems: 'center',
    },
    description: {
        margin: 20
    }
})