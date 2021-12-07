import React from 'react';
import { ImageBackground, View, Text, Pressable, Button } from 'react-native';
import { StyleSheet } from "react-native";
import { MaterialIcons, Entypo, Feather,AntDesign } from '@expo/vector-icons';
import { AirbnbRating } from 'react-native-ratings';

import DifficultyTag from '../components/DifficultyTag'
import BeachInfo from '../components/BeachInfo';


const image = { uri: "https://media.nationalgeographic.org/assets/photos/000/267/26734.jpg" };
const BackImage = () => {

    const btnPress = () => {
        console.log('btn pressed');
    }

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
                    <View style={styles.starView}>
                        <DifficultyTag difficulty='advanced'/>
                        <AirbnbRating
                            count={5}
                            defaultRating={5}
                            showRating={false}
                            isDisabled={true}
                            size={20}
                        />
                    </View>
                </View>
                <Text style={styles.beachLocation}>Santa Cruz, California</Text>
            </View>
        </ImageBackground>
        <View style={styles.btnMenu}>
                <Pressable onPress={btnPress} style={styles.btnGroup}>
                    <View style={styles.btn}>
                        <Entypo name="map" size={24} color="deepskyblue" style={styles.btnIcon}/>
                    </View>
                </Pressable>

                <Pressable onPress={btnPress}  style={styles.btnGroup}>
                    <View style={styles.btn}>
                        <Feather name="map-pin" size={24} color="deepskyblue" style={styles.btnIcon}/>
                    </View>
                </Pressable>

                <Pressable onPress={btnPress} style={styles.btnGroup}>
                    <View style={styles.btn}>
                        <Entypo name="map" size={24} color="deepskyblue" style={styles.btnIcon}/>
                    </View>
                </Pressable>

        </View>
    </View>
    )

}

const ActivityType = () => {
    let activityType = 'Diving' 
    // if (props.ActivityType == 'snorkel') {
    //     activityType = 'Snorkel'
    // } else if (props.ActivityType == 'Freediving') {
    //     activityType = 'Freediving'
    // }
    return activityType;
}

const ReviewSpotBtn = ({navigation=navigation}) => {

    return (
        <Button
            title='Log a Dive'
            onPress={() => {
                navigation.navigate('ReviewSpot');
            }}
        />
    )
}

const ReviewSummary = ({navigation=navigation}) => {
    //avg rating(maybe move to here from backImage)

    return(
        <>
            <Text>86 reviews</Text>
            <Button
                title='see all reviews'
                onPress={() => {
                    navigation.navigate('AllReviews')
                }}
            />
        </>
    )
}

const TideSurf = ({navigation=navigation}) => {
    //small preview, with btn to full screen report
    return (
        <>
            <Text>Low Tide is at 06:30 and 19:10 today</Text>
            <Text>surf is calm, lets go diving!</Text>
            <Button
                title='view surf report'
                onPress={()=>{navigation.navigate('TideSurfDetails')}}
            />
        </>
    )
}

const BeachScreen = ({navigation}) => {
    return (
        <>
            <BackImage/>
            <ActivityType/>
            <ReviewSpotBtn navigation={navigation}/>
            <ReviewSummary navigation={navigation}/>
            <TideSurf navigation={navigation}/>
            <BeachInfo/>
            
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
    // BeachInfo: {
    //     paddingTop: 30
    // },

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