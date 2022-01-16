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
                              className='img-fluid rounded-circle'
                              alt="new"/> 
                    </Col>
                    <Col className="d-flex align-items-center"><p className='modern-border'>Available at: {availableSeat.leaveTime}</p></Col>
                    <Col className="d-flex align-items-center"><p className='border border-warning'>Reserved until: {availableSeat.waitTime}</p></Col>
                </Row>
            </Container>
        </Card.Header>
        <Card.Body>
        <Stack gap={1} className="col-md-5 mx-auto">
            <Card.Title>Sender directions:</Card.Title>
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
