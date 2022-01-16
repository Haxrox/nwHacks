import ReserveRequest  from './ReserveRequest'
import Button from 'react-bootstrap/Button'
import Card from 'react-bootstrap/Card'
import Container from 'react-bootstrap/Container'
import Row from 'react-bootstrap/Row'
import Col from 'react-bootstrap/Col'
import Stack from 'react-bootstrap/Stack'

const AvailableSeat = ({responderMessage, leaveTime, waitTime, availableSeat}) => {
    return (
    <div>
        <div className="w-responsive text-center mx-auto p-5 mt-5" className="padding">

        <Card>
        <Card.Header as="h5">
            <Container  fluid="md">
                <Row >
                    <Col><img src="https://lh3.googleusercontent.com/a-/AOh14GgCSvUXaA7rvUqbwB3SfnjTNW7C6876GE_-d4uJ3w=s96-c" 
                              className='img-fluid rounded-circle img-shadow'
                              alt="new"/> 
                    </Col>
                    <Col className="d-flex align-items-center modern-border-danger">
                        <div className='center'>
                            Available 
                            <p className='font-link-huge-clock'> {availableSeat.leaveTime}</p>
                        </div>
                    </Col>
                    <Col className="d-flex align-items-center modern-border-warning">
                        <div className='center'> 
                            Reserved For
                            <p className='font-link-huge-time'>{availableSeat.waitTime} </p>
                        </div>
                    </Col>
                </Row>
            </Container>
        </Card.Header>
        <Card.Body className='font-link'>
        <Stack gap={1} className="col-md-5 mx-auto">
            <Card.Title> <p className='font-link'>Sender directions:</p></Card.Title>
            <Card.Text>
            {availableSeat.responderMessage}
            </Card.Text>
            <ReserveRequest tokenCost={availableSeat.tokenCost} />
        </Stack>
        </Card.Body>
        </Card>
        </div>
    </div>
    )
}

const cardStyles = {
    
}

AvailableSeat.defaultProps = {
    responderMessage: "Hey this is a sample message",
    leaveTime: "4PM",
    waitTime: "4:05PM",
}

export default AvailableSeat
