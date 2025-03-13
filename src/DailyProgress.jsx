import { View, Text, StyleSheet, useColorScheme } from 'react-native';

export default function DailyProgress() {
    const styles = StyleSheet.create({
        daily_progress: {
            backgroundColor: '#4fae53',
            padding: 20,
            borderRadius: 16,
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
            marginVertical: 20,
            flexDirection: 'row',
            justifyContent: 'space-between'
        },
        card: {
            textAlign: 'center'
        },
        text: {
            color: '#ffffff'
        }
    })

    return (
 
        <View style={styles.daily_progress}>
            <Text style={styles.title}>Today's Progress</Text>
            <View style={styles.card_container}>
                <View style={styles.card}>
                    <Text style={styles.title}>3/5</Text>
                    <Text style={styles.text}>Workouts</Text>
                </View>

                <View style={styles.card}>
                    <Text style={styles.title}>750</Text>
                    <Text style={styles.text}>Calories</Text>
                </View>

                <View style={styles.card}>
                    <Text style={styles.title}>62 min</Text>
                    <Text style={styles.text}>Active Time</Text>
                </View>
            </View>
        </View>
    );
}
