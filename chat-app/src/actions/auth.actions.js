import firebase from "firebase/app";
import "firebase/auth";
import "firebase/firestore";
import { authConstants } from './constants';

export const signup = (user) => {

    return async (dispatch) => {

        const db = firebase.firestore();
        dispatch({type: `${authConstants.USER_LOGIN}_REQUEST`});
        const auth = firebase.auth()
            .createUserWithEmailAndPassword(user.email, user.password)
            .then(data => {
                console.log(data)
                const currentUser = auth.currentUser;
                const name = `${user.firstName} ${user.lastName}`;
                data.user.updateProfile({
                    displayName: name
                })
                    .then(() => {
                        db.collection('users').add({
                            firstName: user.firstName,
                            lastName: user.lastName,
                            uid: data.user.uid,
                            createAt: new Date()
                        })
                            .then(() => {
                                const loggedInUser = {
                                    firstName: user.firstName,
                                    lastName: user.lastName,
                                    uid: data.user.uid,
                                    email: user.email
                                }
                                localStorage.setItem('user', JSON.stringify(loggedInUser));
                                console.log('User logged in successfully !')
                                dispatch({
                                    type: `${authConstants.USER_LOGIN}_SUCCESS`,
                                    payload: { user: loggedInUser }
                                })
                            })
                            .catch(error => {
                                console.log(error);
                                dispatch({ 
                                    type: `${authConstants.USER_LOGIN}_FAILURE`,
                                    payload: { error }
                                  });
                            });
                    });
            })
            .catch(error => {
                console.log(error);
            })

    }
}

export const signin = (user) => {
    return async dispatch => {

        dispatch({ type: `${authConstants.USER_LOGIN}_REQUEST`});
        firebase.auth()
        .signInWithEmailAndPassword(user.email, user.password)
        .then((data) => {
            console.log(data);
        })
        .catch(error => {
            console.log(error);
        })
    }
}