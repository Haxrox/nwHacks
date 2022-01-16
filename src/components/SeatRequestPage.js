import Header from './Header'
import AvailableSeats from './AvailableSeats'

import PropTypes from 'prop-types'

const SeatRequestPage = ({building}) => {
    return (
        <div>
            <Header />
            <div>
                <h3>Current available seats at {building}</h3>
            </div>
            <AvailableSeats />
        </div>
    )
}

SeatRequestPage.defaultProps = {
    building: "Building X",
}

SeatRequestPage.propTypes = {
    building: PropTypes.string,
}

export default SeatRequestPage

