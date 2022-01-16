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

        marginRight: 40,
        marginLeft: 40,
        marginTop: 10,
        paddingTop: 20,
        paddingBottom: 20,
        backgroundColor: '#000080',
        borderRadius: 10,
        borderWidth: 1,
        borderColor: '#F0FFFF',
        color: '#fff',
        textAlign: 'center',
        

}

Header.propTypes = {
    text: PropTypes.string,
    user: PropTypes.string,
}

export default Header