/**
 * Sign in.
 * @param {string} username
 * @param {string} password
 */
import * as types from './constants'
import {actions} from '../'
import {searchService} from "../../../services/index";

export const login = (username: string, password: string, token: string) => {
    // async call
    return dispatch => {
        // turn loading animation on
        // by dispacthing `loading` action from module `app`.
        // yes, each action can interact with another module actions.
        dispatch(actions.app.loading())

        // simulate ajax login
        // in real world you can use `fetch` to make ajax request.
        setTimeout(() => {
                console.log('hi', username, password);
                searchService(username, password).then(
                    // 8- on a récupérer apiData.results pour set le state
                    apiDataResult => {
                        console.log('my data', apiDataResult);
                        dispatch({
                            type: types.LOGIN,
                            payload: {
                                userId: username,
                                fullName: 'as admin',
                                token: apiDataResult,
                            }
                        })
                    }
                )
                    .catch(
                        err => console.log("Search Error", err)
                    );
            }, 3000
        )
    }
}

/**
 * Sign out.
 */
export const logout = () => {
    // direct/sync call
    return {
        type: types.LOGOUT
    }
}
