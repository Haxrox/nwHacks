import Header from '../components/Header'
import Login from '../components/Login'

const LoginPage = () => {
    return (
        <div>
            <div style={{marginRight: 400,
    marginLeft: 400,textAlign:'Center',marginTop: 200}}>
        <h2 >Do you want to sit or what</h2></div>
            
            <div style={{marginRight: 400,
    marginLeft: 400,textAlign:'Center', marginTop: 0,paddingTop: 10,
    paddingBottom: 10,
    backgroundColor: '#4682B4',
    borderRadius: 5,
    borderWidth: 5,
    borderColor: '#F0FFFF'}}>
            <Login />
            </div>
        </div>
    )
}

export default LoginPage