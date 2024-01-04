import { View, TextInput, Button} from 'react-native'
import React, { useState } from 'react'
import {db} from '../firebaseConfig'
import { setDoc, doc } from 'firebase/firestore'

import {useNavigation} from '@react-navigation/native'

const UserNameInputPage = ({route}) => {
    const [username, setUsername] = useState('')
    const navigation = useNavigation()

    const saveUsername = async () => {
        const { mobileNumber } = route.params
        try {
            await setDoc(doc(db, 'usernames', mobileNumber), {
                username: username,
                mobileNumber: mobileNumber
            })
            navigation.navigate('Logout')
        } catch (error) { console.error ('Error saving username:', error) //change this to an alert at some point

        }
    }

return (
    <View>
        <TextInput
        placeholder="please enter your username"
        value={username}
        onChangeText={text => setUsername(text)}
        />
        <Button title='save username and continue' onPress={saveUsername}/>
    </View>
)
}



export default UserNameInputPage