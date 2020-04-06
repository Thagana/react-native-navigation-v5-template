import { action, thunk } from 'easy-peasy';
import AsyncStorage from '@react-native-community/async-storage';

export default {
    /** STATE */
    isLoggedin: false,
    /** ACTIONS */
    signInhandle: thunk(async (actions, payload) => {
        try{
            await AsyncStorage.setItem("IS_LOGGED_IN", true);
            actions.loggin();
        }catch(error){
            console.log(error)
        }
    }),
    signOutHandle: thunk(async(action, payload) => {
    try {
        await AsyncStorage.removeItem("IS_LOGGED_IN")
        actions.signOut()
    } catch (error) {
        console.log(error)
    }
    }),
    loggin: action((state, payload) => {
        state.isLoggedin = true;

    }),
    signOut: action((state, payload) => {
        state.isLoggedin = false;
    })
}

