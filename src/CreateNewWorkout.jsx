import { View, Text, ActivityIndicator, Pressable, StyleSheet, Alert } from 'react-native'
import React, { useState } from 'react'

const CreateNewWorkout = () => {

    const styles = StyleSheet.create({
        button: {
            display: 'flex',
            backgroundColor: '#4fae53',
            padding: 18,
            borderRadius: 16,
            marginVertical: 8,
            justifyContent: 'center',
            alignContent: 'center',
            flexDirection: 'row'
        },
        button_text: {
            fontSize: 18,
            color: '#ffffff',
            fontWeight: 'bold',
            textAlign: 'center'
        }
    })

    const [msgText, setMsgText] = useState(<Text style={styles.button_text}>
        Start New Workout
    </Text>);

    function ButtonPress() {
        setMsgText(<>
            <ActivityIndicator size="small" color="#ffffff" style={{ marginHorizontal: 8 }} />
            <Text style={styles.button_text}>
                Creating your Workout....
            </Text>
        </>)

        setTimeout(() => {
            setMsgText(<Text style={styles.button_text}>
                Start New Workout
            </Text>);

            Alert.alert('Workout Started', 'Your new workout session has begun!', [
                { text: 'OK' },
            ]);

        }, 2000);
    }

    return (
        <View>
            <Pressable style={styles.button} onPress={ButtonPress}>
                {msgText}
            </Pressable>
        </View>
    )
}

export default CreateNewWorkout