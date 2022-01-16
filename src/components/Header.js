import PropTypes from 'prop-types'

const Header = ({user, tokens}) => {

    return (
        <div style={borderStyles}>
            <h3>Welcome, {user}!</h3>
            <div>
                <p>You have {tokens} tokens</p>
            </div>
        </div>
    )
}

Header.defaultProps = {
    text: "This is default text",
    user: "Default Name",
    tokens: 69,
    
}

const borderStyles = {

        marginRight: 0,
        marginLeft: 0,
        marginTop: 10,
        paddingTop: 10,
        paddingBottom: 1,
        backgroundColor: '#4169E1',
        borderRadius: 0,
        borderWidth: 1,
        borderColor: '#4169E1',
        color: '#fff',
        textAlign: 'center',
        

}

Header.propTypes = {
    text: PropTypes.string,
    user: PropTypes.string,
}

export default Header