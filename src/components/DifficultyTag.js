import React from "react";
import { Text, View } from 'react-native';
import { StyleSheet } from "react-native";


const DifficultyTag = ({difficulty}) => {
    let difficultyClass = ''
    if (difficulty === 'advanced') {
        difficultyClass = styles.advanced;
    } else if (difficulty === 'intermediate') {
        difficultyClass = styles.intermediate;
    } else if (difficulty === 'beginner') {
        difficultyClass = styles.beginner;
    }
      
    return (
        <View style={[styles.backgroundContainer, difficultyClass]}>
            <Text style={styles.textStyle}>
                {difficulty || 'Not ranked yet'}
            </Text>
        </View>
    )
}
  
export default DifficultyTag;

const styles = StyleSheet.create({
    textStyle: {
        color: "white",
        marginRight: 4,
        marginLeft: 4,
        marginBottom: 3,
    },
    backgroundContainer: {
        backgroundColor: 'grey',
        padding: 2,
        borderRadius: 14,
        marginRight: 5,
        alignItems: 'center',
    },
    advanced: {
        backgroundColor: 'grey',
    },
    intermediate: {
        backgroundColor: "blue",
    },
    beginner: {
        backgroundColor: "green",
    },
})