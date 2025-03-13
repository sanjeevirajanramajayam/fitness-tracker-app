import { View, Text, StyleSheet, useColorScheme, SectionList, Modal, Alert, TouchableOpacity } from 'react-native'
import { useState } from 'react'

const WorkoutPlan = () => {
    const [modalVisible, setModalVisible] = useState('');

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
        title_card: {
            flexDirection: 'row',
            justifyContent: 'space-between',
            marginVertical: 8
        },
        card: {
            textAlign: 'center'
        },
        text: {
            color: '#ffffff'
        },
        card_text: {
            textAlign: 'center'
        },
        header: {
            fontSize: 16,
            color: '#ffffff',
            fontWeight: 'bold',
            backgroundColor: '#4fae53',
            padding: 12,
            borderRadius: 10,
            marginVertical: 8
        },
        item: {
            padding: 10
        },
        button_item: {
            color: '#4fae53',
            fontWeight: 'bold'
        },
        title_button: {
            alignItems: 'center',
            backgroundColor: '#4fae53',
            padding: 10,
            borderRadius: 15,
            color: '#ffffff'
        },
        title_button_text: {
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
        title_card: {
            flexDirection: 'row',
            justifyContent: 'space-between',
            marginVertical: 8
        },
        card: {
            textAlign: 'center'
        },
        text: {
            color: '#ffffff'
        },
        card_text: {
            textAlign: 'center'
        },
        header: {
            fontSize: 16,
            color: '#ffffff',
            fontWeight: 'bold',
            backgroundColor: '#4fae53',
            padding: 12,
            borderRadius: 10,
            marginVertical: 8
        },
        item: {
            padding: 10
        },
        button_item: {
            color: '#4fae53',
            fontWeight: 'bold'
        },
        title_button: {
            alignItems: 'center',
            backgroundColor: '#4fae53',
            padding: 10,
            borderRadius: 15,
            color: '#ffffff'
        },
        title_button_text: {
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


    const DATA = [
        {
            title: 'Today\'s Plan',
            data: ['Morning Run', 'Core Workout', 'Evening Stretch'],
        },
        {
            title: 'Recommended',
            data: ['HIIT Session', 'Upper Body', 'Yoga Flow'],
        },
        {
            title: 'Popular',
            data: ['Full Body Burn', '30-Day Challenge', 'Recovery Day'],
        },
    ];

    function successMessage() {
        console.log('Hello')
        Alert.alert('Success', 'Custom workout created! Check your plans.', [
            { text: 'OK' }
        ]);
    }

    function alertMessage() {
        Alert.alert('Add Custom Workout', 'Create your own workout routine', [
            { text: 'Cancel' },
            { text: 'OK', onPress: () => successMessage() },
        ]);
    }

    function close(item) {
        setModalVisible('')
        Alert.alert('Workout Started', `You\'ve started ${item}.`, [
            { text: 'OK' },
        ]);
    }

    return (
        <View style={styles.main}>
            <View style={styles.title_card}>
                <Text style={styles.title}>Workout Plans</Text>
                {/* <Button title='+ Add' onPress={alertMessage} /> */}
                <TouchableOpacity onPress={alertMessage} style={styles.title_button}>
                    <Text style={styles.title_button_text}>+ Add</Text>
                </TouchableOpacity>
            </View>

            <SectionList
                sections={DATA}
                keyExtractor={(item, index) => item + index}
                renderItem={({ item }) => (
                    <>
                        <Modal
                            animationType="slide"
                            transparent={true}
                            visible={modalVisible == item}
                            onRequestClose={() => {
                                setModalVisible('');
                            }}>
                            <View style={styles.modal}>
                                <View style={styles.modal_card}>
                                    <Text style={styles.modal_title}>Start Workout</Text>
                                    <Text style={styles.modal_text}>Ready to begin {item}?</Text>
                                    <View style={styles.modal_buttons}>
                                        <TouchableOpacity style={styles.modal_cancel}><Text>Cancel</Text></TouchableOpacity>
                                        <TouchableOpacity style={styles.modal_start} onPress={() => close(item)}><Text style={styles.modal_start_text}>Start</Text></TouchableOpacity>
                                    </View>
                                </View>
                            </View>
                        </Modal>

                        <TouchableOpacity onPress={() => setModalVisible(item)}>
                            <View style={styles.title_card}>
                                <Text style={styles.item}>{item}</Text>
                                <Text style={styles.button_item}>Start</Text>
                            </View>
                        </TouchableOpacity>
                    </>
                )}
                renderSectionHeader={({ section: { title } }) => (
                    <>
                        <Text style={styles.header}>{title}</Text>
                    </>
                )}
            />

        </View>
    )
}

export default WorkoutPlan