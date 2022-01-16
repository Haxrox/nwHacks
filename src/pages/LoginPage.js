import Header from '../components/Header'
import Login from '../components/Login'
import { setState, useState } from 'react'
import { getAuth } from 'firebase/auth'
import {collection, getDoc, getDocs, doc, query, onSnapshot, getFirestore } from "firebase/firestore"
import { useHistory } from 'react-router-dom';

const LoginPage = () => {
    const history = useHistory()
    const isLoggedIn = () => {        
        console.log("logged in")
        history.push('/home')
    }

    console.log(getAuth().currentUser)
    return (
        <div>
            <div style={{marginRight: 400,
    marginLeft: 400,textAlign:'Center',marginTop: 200}}>
        <h2 >Do you want to sit or what?</h2></div>
            
            <div style={{marginRight: 400,
    marginLeft: 400,textAlign:'Center', marginTop: 0,paddingTop: 10,
    paddingBottom: 10,
    backgroundColor: '#4682B4',
    borderRadius: 5,
    borderWidth: 5,
    borderColor: '#F0FFFF'}}>
            <Login isLoggedIn={isLoggedIn}/>
            </div>
        </div>
    )
}

export default LoginPage