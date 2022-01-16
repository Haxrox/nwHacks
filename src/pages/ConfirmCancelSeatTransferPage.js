
import Button from 'react-bootstrap/Button'
import Card from 'react-bootstrap/Card'
import Container from 'react-bootstrap/Container'
import Row from 'react-bootstrap/Row'
import Col from 'react-bootstrap/Col'
import Stack from 'react-bootstrap/Stack'

const ConfirmCancelSeatTransferPage = () => {
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
                        <Col>
                            <h1>Seat Transfer Confirmation</h1>
                        </Col>
                        <Col>
                        <img src="https://lh3.googleusercontent.com/a-/AOh14GgCSvUXaA7rvUqbwB3SfnjTNW7C6876GE_-d4uJ3w=s96-c" 
                                  className='img-fluid rounded-circle'
                                  alt="new"/>    
                        </Col>
                    </Row>
                </Container>
            </Card.Header>
            <Card.Body>
            <Stack gap={1} className="col-md-5 mx-auto">
                <Card.Title>11:30 AM at IKB</Card.Title>
            </Stack>
            </Card.Body>
            </Card>
            </div>
        </div>
        )
}

export default ConfirmCancelSeatTransferPage