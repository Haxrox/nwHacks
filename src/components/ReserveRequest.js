import PropTypes from 'prop-types'
import Button from 'react-bootstrap/Button'

const ReserveRequest = ({tokenCost}) => {
    return (
        <div>
           
           <div>
               <p>Cost: {tokenCost} token(s)</p>
           </div>
           <Button className='reserve-btn' variant="primary">Reserve Now</Button>
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
