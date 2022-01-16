
import Button from 'react-bootstrap/Button'
import Card from 'react-bootstrap/Card'
import Container from 'react-bootstrap/Container'
import Row from 'react-bootstrap/Row'
import Col from 'react-bootstrap/Col'
import Stack from 'react-bootstrap/Stack'
import { useHistory } from 'react-router-dom'
import { getAuth } from 'firebase/auth'
import {UpdateDocument} from '../firebase.js';

const ConfirmCancelSeatTransferPage = () => {
    
    const history = useHistory();

    const auth = getAuth();
    UpdateDocument(history.data.location, "Requesters", {
        [history.location.data.responder]: auth.currentUser.uid
    });

    return (
        <div>

            <div className="w-responsive text-center mx-auto p-5 mt-5" className="padding">
    
            <Card>
            <Card.Header as="h5">
                <Container  fluid="md">
                    <Row >
                        <Col><img src={getAuth().currentUser.photoURL}
                                  className='img-fluid rounded-circle'
                                  alt="new"/>                           
                        </Col>
                        <Col>
                            <h1 style={{marginTop:20}}>You got a seat!</h1>
                        </Col>
                        <Col>
                         
                        <img src={history.location.data.userData.avatar} className='img-fluid rounded-circle'
                                  alt="new"/>   
                        </Col>
                    </Row>
                </Container>
            </Card.Header>
            <Card.Body>
            <Stack gap={1} className="col-md-5 mx-auto">
            <br/><br/><br/><br/><br/>
                <Card.Title><h1>{history.location.data.responderMessage}</h1></Card.Title>
                <br/><br/><br/><br/><br/>
                <Card.Body><Button variant="success"size="lg">Confirm</Button><Button variant="danger"size="lg">Where is this guy?</Button></Card.Body>
            </Stack>
            </Card.Body>
            </Card>
            </div>
        </div>
        )
}

export default ConfirmCancelSeatTransferPage