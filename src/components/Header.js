const Header = ({text}) => {

    return (
        <div>
            <p>{text}</p>
        </div>
    )
}

Header.defaultProps = {
    text: "This is default text",
}

export default Header