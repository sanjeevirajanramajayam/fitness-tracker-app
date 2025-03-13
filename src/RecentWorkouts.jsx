import { View, Text, StyleSheet, ScrollView, useColorScheme } from 'react-native'
import React from 'react'
import RecentWorkoutsCard from './RecentWorkoutsCard'

const RecentWorkouts = () => {

    const colorScheme = useColorScheme();


    const lightStyles = StyleSheet.create({
        main: {
            backgroundColor: '#ffffff',
            padding: 20,
            borderRadius: 16,
            elevation: 10,
            marginVertical: 8
        },
        title: {
            fontSize: 20,
            color: '#000000',
            fontWeight: 'bold',

        },
        container: {
            flex: 1,
            padding: 16
        },
        card_container: {
            marginVertical: 12,
            flexDirection: 'row',
        },
        card: {
            textAlign: 'center'
        },
        text: {
            color: '#ffffff'
        },
        circle: {
            width: 30,
            height: 30,
            borderRadius: 15,
            backgroundColor: '#4fae53'
        },
        card_text: {
            textAlign: 'center'
        }
    })

    const darkStyles = StyleSheet.create({
        main: {
            backgroundColor: '#333437',
            padding: 20,
            borderRadius: 16,
            elevation: 10,
            marginVertical: 8
        },
        title: {
            fontSize: 20,
            color: '#fff',
            fontWeight: 'bold',

        },
        container: {
            flex: 1,
            padding: 16
        },
        card_container: {
            marginVertical: 12,
            flexDirection: 'row',
        },
        card: {
            textAlign: 'center'
        },
        text: {
            color: '#ffffff'
        },
        circle: {
            width: 30,
            height: 30,
            borderRadius: 15,
            backgroundColor: '#4fae53'
        },
        card_text: {
            textAlign: 'center'
        }
    })

    const styles = colorScheme === 'dark' ? darkStyles : lightStyles;


    return (
        <View style={styles.main}>
            <Text style={styles.title}>Recent Workouts</Text>
            <ScrollView style={styles.card_container} horizontal={true} showsHorizontalScrollIndicator={false}>
                <RecentWorkoutsCard title="Morning Run" type="Cardio" time="25min" calories="320 cal" color="#d1461d" />
                <RecentWorkoutsCard title="Upper Body" type="Strength" time="45min" calories="280 cal" color="#384ca8" />
                <RecentWorkoutsCard title="Yoga Flow" type="Flexibility" time="30min" calories="150 cal" color="#009d8d" />
                <RecentWorkoutsCard title="HIIT" type="Cardio" time="20min" calories="250 cal" color="#c91955" />
            </ScrollView>
        </View>
    )

}

export default RecentWorkouts