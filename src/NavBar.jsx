import { View, Text, StyleSheet, Switch, Image, useColorScheme, TextInput } from 'react-native'
import { useState } from 'react'

const NavBar = () => {

    const colorScheme = useColorScheme();

    const lightStyles = StyleSheet.create({
        navbar: {
            padding: 12,
            borderStyle: 'solid',
            borderBottomWidth: 1,
            borderColor: '#ccc',
            flexDirection: 'row',
            justifyContent: 'space-between',
            alignContent: 'center'
        },
        title: {
            fontWeight: 'bold',
            fontSize: 24,
            color: '#000'
        },
        avatar: {
            height: 40,
            width: 40,
            borderRadius: 20,
            marginHorizontal: 10
        }
    })

    
    const darkStyles = StyleSheet.create({
        navbar: {
            padding: 12,
            borderStyle: 'solid',
            borderBottomWidth: 1,
            borderColor: '#ccc',
            flexDirection: 'row',
            justifyContent: 'space-between',
            alignContent: 'center',
            backgroundColor : '#333437'
        },
        title: {
            fontWeight: 'bold',
            fontSize: 24,
            color: '#fff'
        },
        avatar: {
            height: 40,
            width: 40,
            borderRadius: 20,
            marginHorizontal: 10
        }
    })

    const styles = colorScheme === 'dark' ? darkStyles : lightStyles;


    const [isEnabled, setIsEnabled] = useState(false);
    const toggleSwitch = () => setIsEnabled(previousState => !previousState);
    return (
        <View style={styles.navbar}>
            <Text style={styles.title}>FitTrack</Text>
            <View style={{ flexDirection: 'row' }}>
                <Switch
                    onValueChange={toggleSwitch}
                    value={isEnabled}
                />
                <Image
                    style={styles.avatar}
                    source={{
                        uri: 'https://placehold.jp/150x150.png',
                    }}
                />
            </View>
        </View>
    )
}

export default NavBar