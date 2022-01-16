import ReserveRequest  from './ReserveRequest'

const AvailableSeat = ({responderMessage, leaveTime, waitTime, availableSeat}) => {
    return (
        <div>
            <div>
                <p>image</p>
            </div>
            <h4>{availableSeat.responderMessage}</h4>
            <div>
                <p>Available at: {availableSeat.leaveTime}</p>
            </div>
            <div>
                <p>Reserved until: {availableSeat.waitTime}</p>
            </div>
            <div>
                <ReserveRequest tokenCost={availableSeat.tokenCost} />
            </div>
        </div>
    )
}

AvailableSeat.defaultProps = {
    responderMessage: "Hey this is a sample message",
    leaveTime: "4PM",
    waitTime: "4:05PM",
}

export default AvailableSeat
