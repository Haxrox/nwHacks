const AvailableSeats = ({responderMessage, leaveTime, waitTime}) => {
    return (
        <div>
            <h4>{responderMessage}</h4>
            <div>
                <p>Available at: {leaveTime}</p>
            </div>
            <div>
                <p>Reserved until: {waitTime}</p>
            </div>
        </div>
    )
}

AvailableSeats.defaultProps = {
    responderMessage: "Hey this is a sample message",
    leaveTime: "4PM",
    waitTime: "4:05PM",
}

export default AvailableSeats
