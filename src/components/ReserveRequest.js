import PropTypes from 'prop-types'
import Button from 'react-bootstrap/Button'

const ReserveRequest = ({tokenCost}) => {
    return (
        <div>
           <Button variant="primary">Reserve Now</Button>
           <div>
               <h4>Cost: {tokenCost}</h4>
           </div>
        </div>
    )
}

ReserveRequest.defaultProps = {
    tokenCost: 2,
}

ReserveRequest.propTypes = {
    tokenCost: PropTypes.number.isRequired,
}

export default ReserveRequest
