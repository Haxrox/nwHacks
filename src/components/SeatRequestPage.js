import Header from './Header'
import AvailableSeats from './AvailableSeats'

import PropTypes from 'prop-types'

const SeatRequestPage = ({building, seats}) => {
    console.log(seats);
    return (
        <div>
            <Header />
            <div>
                <h3>Current available seats at {building} [{seats}]</h3>
            </div>
            <AvailableSeats />
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

