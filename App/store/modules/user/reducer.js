import {handleActions} from 'redux-actions'
import {LOGIN, LOGOUT} from './constants'

export type UserState = {
    loggedIn: boolean,
    userId: string,
    fullName: string,
    token: string
}

const initialState: UserState = {
    loggedIn: false,
    userId: '',
    fullName: '',
    token: ''
}

export default handleActions(
    {

        [LOGIN]: (state: UserState = initialState, action): UserState => {
            const p = action.payload
            console.log('par là ', p);
            return {
                loggedIn: true,
                userId: p.userId,
                fullName: p.fullName
            }
        },

        [LOGOUT]: (): UserState => {
            return {
                loggedIn: false
            }
        }
    },
    initialState
)
