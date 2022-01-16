import PropTypes from 'prop-types'

const ReserveRequest = ({tokenCost}) => {
    return (
        <div>
           <button>Reserve Now!</button> 
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
