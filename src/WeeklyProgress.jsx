// box-shadow: 0 4px 8px 0 rgba(0, 0, 0, 0.2), 0 6px 20px 0 rgba(0, 0, 0, 0.19);

import { View, Text, StyleSheet, useColorScheme } from 'react-native'
import React from 'react'

const WeeklyProgress = () => {

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
            fontWeight: 'bold'
        },
        container: {
            flex: 1,
            padding: 16
        },
        card_container: {
            marginVertical: 24,
            flexDirection: 'row',
            justifyContent: 'space-between'
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
            color: '#ffffff',
            fontWeight: 'bold'
        },
        container: {
            flex: 1,
            padding: 16
        },
        card_container: {
            marginVertical: 24,
            flexDirection: 'row',
            justifyContent: 'space-between'
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
            <Text style={styles.title}>Weekly Progess</Text>
            <View style={styles.card_container}>
                <View>
                    <View style={styles.circle} />
                    <Text style={styles.card_text}>Mon</Text>
                </View>
                <View>
                    <View style={styles.circle} />
                    <Text style={styles.card_text}>Tue</Text>
                </View>
                <View>
                    <View style={styles.circle} />
                    <Text style={styles.card_text}>Wed</Text>
                </View>
                <View>
                    <View style={styles.circle} />
                    <Text style={styles.card_text}>Thu</Text>
                </View>
                <View>
                    <View style={styles.circle} />
                    <Text style={styles.card_text}>Fri</Text>
                </View>
                <View>
                    <View style={styles.circle} />
                    <Text style={styles.card_text}>Sat</Text>
                </View>
                <View>
                    <View style={styles.circle} />
                    <Text style={styles.card_text}>Sun</Text>
                </View>
            </View>
        </View>
    )
}

export default WeeklyProgress