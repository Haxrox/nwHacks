import Header from '../components/Header'
import Login from '../components/Login'
import { setState, useState } from 'react'

const LoginPage = () => {

    const [user, setUser] = useState('')
    const getUser = (user) => {
        setUser(user)
        console.log("Login page got: ", user)
    }

    return (
        <div>
            <Header />
            <Login getUser={getUser}/>
        </div>
    )
}

export default LoginPage