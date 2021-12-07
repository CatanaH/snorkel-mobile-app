// plug in component for beach info >> beach sccreen
import React from "react";
import { Text, Pressable, StyleSheet, View } from 'react-native';

const img = { uri: ""};

const entryMap = () => {
    // Error: Element type is invalid: expected a string (for built-in components) or a class/function (for composite components) but got: undefined. You likely forgot to export your component from the file it's defined in, or you might have mixed up default and named imports.

    // const btnPress = () => {
    //     // clickable button to open full map page
    //     console.log('hi')
    // };

    // return (
    //     // <View>
    //         {/* <Text>Dive Site Location</Text> */}
    //         {/* <Pressable onPress={btnPress}> */}
    //             {/* //look up react equivalent of image tag */}
    //             {/* also add image */}
    //             {/* <Image source={img} style={styles.image}/> */}
    //         {/* </Pressable> */}
    //     {/* </View> */}
    // )
}

export default entryMap();

const styles = StyleSheet.create({
    image: {
        // rounded edge map image
        borderRadius: 30,
    },
    btnGroup: {
        color: 'red'

    }
})