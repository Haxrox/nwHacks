import Header from '../components/Header'
import Login from '../components/Login'
import { setState, useState } from 'react'
import { getAuth } from 'firebase/auth'
import {collection, getDoc, getDocs, doc, query, onSnapshot, getFirestore } from "firebase/firestore"

const LoginPage = () => {
    const [userTokenCount, setUserTokenCount] = useState('')
    const [userDisplayname, setUserDisplayName] = useState("not logged in user")    
    const childSetUserTokenCount = (tokenCount) => {
        setUserTokenCount(tokenCount)
    }
    const childsetUserDisplayName = (displayName) => {
        setUserDisplayName(displayName)
    }

    return (
        <div>
            <Header tokens={userTokenCount} user={userDisplayname}/>
            <Login setUserDisplayName={setUserDisplayName} setUserTokenCount={setUserTokenCount}/>
        </div>
    )
}

export default LoginPage