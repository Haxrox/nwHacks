import Header from './Header'
import AvailableSeat from './AvailableSeat'
import PropTypes from 'prop-types'

const SeatRequestPage = ({building, seats, availableSeats}) => {
    console.log(seats);
    return (
        <div>
            <Header />
            <div>
                <h3>[{seats}] seats soon to be available at {building} </h3>
            </div>
            {availableSeats.map((obj)=> (
                <AvailableSeat key={obj.id} availableSeat={obj}/>
            ))}

        </div>
    )
}

SeatRequestPage.defaultProps = {
    building: "Building X",
    seats: 0
}

SeatRequestPage.propTypes = {
    building: PropTypes.string,
    seats: PropTypes.number
}

export default SeatRequestPage

