import PropTypes from 'prop-types'
import Button from 'react-bootstrap/Button'
import { useHistory } from 'react-router-dom/cjs/react-router-dom.min'



const ReserveRequest = ({tokenCost, message}) => {

    const history = useHistory();
    const handleReserve = () => {
        //handle reserve, matach made backend
        history.push({
            pathname: "/confirm",
            data: message
        });
    }
    return (
        <div>
           
           <div>
               <p>Cost: {tokenCost} token(s)</p>
           </div>
           <Button className='reserve-btn' variant="primary" onClick={handleReserve}>Reserve Now</Button>
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
