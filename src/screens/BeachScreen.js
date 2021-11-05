import React, { Component } from 'react';
import { Button, ImageBackground, View, Text, SafeAreaView } from 'react-native';
import { StyleSheet } from "react-native";
import { MaterialIcons, Entypo, Feather,AntDesign } from '@expo/vector-icons';
import { FontAwesome } from '@expo/vector-icons';


const image = { uri: "https://media.nationalgeographic.org/assets/photos/000/267/26734.jpg" };
const BackImage = (props) => {
    return(
    <View style={styles.backImage}>
        <ImageBackground source={image} resizeMode="cover" style={styles.image} imageStyle={{ opacity: 0.5 }}>
            <View className={styles.detailsContainer}>
                <View style={styles.pageHeroInfo}>
                    <Text style={styles.pageTitle}>BeachName</Text>
                    <View style={styles.favorites}>
                       <MaterialIcons name="favorite-outline" size={30} color="white" />
                    </View>
                </View>
                <View>
                    {/* rating Component */}
                    <View style={styles.starView}>
                        {/* <View>
                            <Text>Easy</Text>
                        </View> */}
                        <FontAwesome name="star" size={24} color="yellow" style={styles.stars}/>
                        <FontAwesome name="star" size={24} color="yellow" style={styles.stars}/>
                        <FontAwesome name="star" size={24} color="yellow" style={styles.stars}/>
                        <FontAwesome name="star" size={24} color="yellow" style={styles.stars}/>
                        <FontAwesome name="star" size={24} color="yellow" style={styles.stars}/>
                    </View>
                </View>
                <Text style={styles.beachLocation}>Santa Cruz, California</Text>
            </View>
        </ImageBackground>
        <View style={styles.btnMenu}>
            <View style={styles.btnGroup}>
                <View style={styles.btn}>
                    {/* make btn a pressable obj, Touchable Highlight */}
                    <Entypo name="map" size={24} color="deepskyblue" style={styles.btnIcon}/>
                </View>
                <Text>Entry Map</Text>
            </View>

            <View style={styles.btnGroup}>
                <View style={styles.btn}>
                    <Feather name="map-pin" size={24} color="deepskyblue" style={styles.btnIcon}/>
                </View>
                <Text>Directions</Text>
            </View>

            <View style={styles.btnGroup}>
                <View style={styles.btn}>
                    <Entypo name="map" size={24} color="deepskyblue" style={styles.btnIcon}/>
                </View>
                <Text>Photos</Text>
            </View>

        </View>
    </View>
    )

}

const BeachScreen = () => {
    return (
        <>
        <BackImage/>
        {/* <Text style={styles.container}>Test Text</Text> */}
        </>

    )
}

const styles = StyleSheet.create({
    backImage: {
        flex: .4,
        width: "100%",

        backgroundColor: "black",
    },
    container: {
        flex: .6,
        width: "100%",

    },
    detailsContainer: {

    },

    image: {
      flex: 0.85,
      height: 260,
      opacity: 10,
      width: "100%",
      justifyContent: "flex-end",
      
    },

    btnMenu: {
        flex: .15,
        flexDirection: "row",
        justifyContent: "space-around",
        height: 40,
        backgroundColor: "deepskyblue",
    },
    btnGroup: {
        alignItems: "center",
    },

    btn: {
        backgroundColor: "white",
        borderRadius: 50,
        width: 40,
        height: 40,
        alignItems: "center",
        justifyContent: "center",
    },
    btnIcon: {
    },

    pageHeroInfo: {
        flexDirection: "row",
        justifyContent: "flex-start",
    },

    beachLocation: {
        color: "white",
        margin: 10,
    },
    favorites: {
        margin: 10
    },
    starView: {
        flexDirection: "row",
        marginLeft: 10,
    },
    stars: {
        marginRight: 5,
    },
    pageTitle:{
        color: "white",
        fontSize: 30,
        margin: 10,
    }

  });

  
export default BeachScreen;