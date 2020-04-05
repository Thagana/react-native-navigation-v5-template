import { action } from 'easy-peasy';

export default {
    /** STATE */
    isLoggedin: false,

    /**ACTIONS */
    loggin: action((state, payload) => {
        state.isLoggedin = true;
    })
}

