import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';

function Footer() {
  return (
    <Container style={{backgroundColor:'lightblue'}}>
        <br/>
        <br/>
      <Row  className="justify-content-md-center">
        <Col xs lg="2">
                <h4><b>Know Us</b></h4>
                <p>Blogs</p>
                <p>e-Wishes Corner</p>
                <p>About Sky</p>
                <p>Donate</p>
                <p>Volunteer With Us</p>
                <p>FAQ's</p>
        </Col>
        <Col md="auto">
        <h4><b>Our Services</b></h4>
                <p>Referral(Bliss 111)</p>
                <p> Meditate With Us</p>
                <p> Testimonials</p>
                <p>Gallery</p>
                <p> Siddha Online</p>
                <p>Book Store</p>

        </Col>
        <Col xs lg="2">
        <h4><b>Contact Us</b></h4>
                <p>e-Write to Us</p>
                <p>WhatsApp</p>
                <p>connect@vethathiri.ac.in</p>
                <p>+91 79044-02887</p>
                <p>04253266633</p>
        </Col>
      
        
      </Row>
    
      <Row  className="justify-content-md-center">
       
        <Col md="auto"><h4>Follow Us</h4></Col>
       
        </Row>
    </Container>
  );
}

export default Footer;