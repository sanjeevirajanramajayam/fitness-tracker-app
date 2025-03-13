import { View, Text, StyleSheet, Modal, TouchableOpacity, Alert, useColorScheme } from 'react-native'
import { useState } from 'react'

const RecentWorkoutsCard = ({ title, type, time, calories, color }) => {

    const colorScheme = useColorScheme();

    const lightStyles = StyleSheet.create({
        main: {
            backgroundColor: color,
            padding: 20,
            borderRadius: 16,
            margin: 4,
            width: 200,
            height: 150,
            justifyContent: 'space-between'
        },
        title: {
            fontSize: 20,
            color: '#fff',
            fontWeight: 'bold'
        },
        container: {
            flex: 1,
            padding: 16
        },
        card_container: {
            marginTop: 16,
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
            color: '#fff'
        },
        modal: {
            flex: 1,
            justifyContent: 'center',
            alignItems: 'center',
        },
        modal_card: {
            backgroundColor: '#fff',
            borderRadius: 12,
            padding: 20,
            elevation: 10,
        },
        modal_title: {
            fontSize: 20,
            color: '#000',
            fontWeight: 'bold',
            textAlign: 'center',
            marginVertical: 8
        },
        modal_text: {
            textAlign: 'center'
        },
        modal_cancel: {
            padding: 8,
            borderStyle: 'solid',
            borderWidth: 1,
            borderColor: '#aaa',
            borderRadius: 8,
            height: 40,
            width: 120,
            justifyContent: 'center',
            alignItems: 'center'
        },
        modal_start: {
            padding: 8,
            backgroundColor: '#4fae53',
            borderRadius: 8,
            height: 40,
            width: 120,
            justifyContent: 'center',
            alignItems: 'center'
        },
        modal_start_text: {
            fontWeight: 'bold',
            color: '#fff'
        },
        modal_buttons: {
            marginTop: 16,
            flexDirection: 'row',
            justifyContent: 'space-between',
            gap: 8
        }
    })

    const darkStyles = StyleSheet.create({
        main: {
            backgroundColor: color,
            padding: 20,
            borderRadius: 16,
            margin: 4,
            width: 200,
            height: 150,
            justifyContent: 'space-between'
        },
        title: {
            fontSize: 20,
            color: '#fff',
            fontWeight: 'bold'
        },
        container: {
            flex: 1,
            padding: 16
        },
        card_container: {
            marginTop: 16,
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
            color: '#fff'
        },
        modal: {
            flex: 1,
            justifyContent: 'center',
            alignItems: 'center',
        },
        modal_card: {
            backgroundColor: '#333437',
            borderRadius: 12,
            padding: 20,
            elevation: 10,
        },
        modal_title: {
            fontSize: 20,
            color: '#fff',
            fontWeight: 'bold',
            textAlign: 'center',
            marginVertical: 8
        },
        modal_text: {
            textAlign: 'center'
        },
        modal_cancel: {
            padding: 8,
            borderStyle: 'solid',
            borderWidth: 1,
            borderColor: '#aaa',
            borderRadius: 8,
            height: 40,
            width: 120,
            justifyContent: 'center',
            alignItems: 'center'
        },
        modal_start: {
            padding: 8,
            backgroundColor: '#4fae53',
            borderRadius: 8,
            height: 40,
            width: 120,
            justifyContent: 'center',
            alignItems: 'center'
        },
        modal_start_text: {
            fontWeight: 'bold',
            color: '#fff'
        },
        modal_buttons: {
            marginTop: 16,
            flexDirection: 'row',
            justifyContent: 'space-between',
            gap: 8
        }
    })

    const styles = colorScheme === 'dark' ? darkStyles : lightStyles;

    const [modalVisible, setModalVisible] = useState(false);

    function close() {
        setModalVisible(!modalVisible)
        Alert.alert('Workout Started', `You\'ve started ${title}.`, [
            { text: 'OK' },
        ]);
    }

    return (
        <>
            <Modal
                animationType="slide"
                transparent={true}
                visible={modalVisible}
                onRequestClose={() => {
                    setModalVisible(!modalVisible);
                }}>
                <View style={styles.modal}>
                    <View style={styles.modal_card}>
                        <Text style={styles.modal_title}>Start Workout</Text>
                        <Text style={styles.modal_text}>Ready to begin {title}?</Text>
                        <View style={styles.modal_buttons}>
                            <TouchableOpacity style={styles.modal_cancel}><Text>Cancel</Text></TouchableOpacity>
                            <TouchableOpacity style={styles.modal_start} onPress={close}><Text style={styles.modal_start_text}>Start</Text></TouchableOpacity>
                        </View>
                    </View>
                </View>
            </Modal>

            <TouchableOpacity onPress={() => { setModalVisible(!modalVisible) }}>
                <View style={styles.main}>
                    <View>
                        <Text style={styles.title}>{title}</Text>
                        <Text style={styles.card_text}>{type}</Text>
                    </View>
                    <View style={styles.card_container}>
                        <Text style={styles.card_text}>{time}</Text>
                        <Text style={styles.card_text}>{calories}</Text>
                    </View>
                </View>
            </TouchableOpacity>
        </>
    )
}

export default RecentWorkoutsCard