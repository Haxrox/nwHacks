import PropTypes from 'prop-types'

const Header = ({text, user, tokens}) => {

    return (
        <div>
            <p style={textStyles}>{text}</p>
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

const textStyles = {
    color: 'blue',
}

Header.propTypes = {
    text: PropTypes.string,
    user: PropTypes.string,
}

export default Header