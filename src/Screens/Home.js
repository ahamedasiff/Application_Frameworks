import React from 'react';
import { Container, Row, Col, Card } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import 'bootstrap/dist/css/bootstrap.min.css';
import space from '../images/space..jpg';
import rover from '../images/rover.jpg';
import nasa from '../images/nasa.jpg';
import './home.css'; // Custom styles

function Home() {
  return (
    <Container fluid className="mt-4">
      <Row className="justify-content-center px-5 mt-5">
        <Col lg={4} md={6} sm={12} className="mb-4">
          <Card className="h-100 custom-card">
            <Link to="/apod">
              <div className="image-overlay">
                <Card.Img variant="top" src={space} alt="APOD" style={{ height: '350px', objectFit: 'fill' }} />
                <div className="overlay-text">
                  <h5 className="text-bold">Astronomy Picture of the Day</h5>
                  <p>Explore stunning daily images of the cosmos.</p>
                </div>
              </div>
            </Link>
          </Card>
        </Col>

        <Col lg={4} md={6} sm={12} className="mb-4">
          <Card className="h-100 custom-card">
            <Link to="/mars">
              <div className="image-overlay">
                <Card.Img variant="top" src={rover} alt="Mars Rover" style={{ height: '350px', objectFit: 'fill' }} />
                <div className="overlay-text">
                  <h5 className="text-bold">Mars Rover Images</h5>
                  <p>See the latest images captured by Mars rovers.</p>
                </div>
              </div>
            </Link>
          </Card>
        </Col>

        <Col lg={4} md={6} sm={12} className="mb-4">
          <Card className="h-100 custom-card">
            <Link to="/nasa">
              <div className="image-overlay">
                <Card.Img variant="top" src={nasa} alt="NASA Images" style={{ height: '350px', objectFit: 'fill' }} />
                <div className="overlay-text">
                  <h5 className="text-bold">NASA Images</h5>
                  <p>Browse the NASA image archive.</p>
                </div>
              </div>
            </Link>
          </Card>
        </Col>
      </Row>
    </Container>
  );
}

export default Home;

// import React from 'react';
// import { filler, Row, Col, Card } from 'react-bootstrap';
// import { Link } from 'react-router-dom';
// import 'bootstrap/dist/css/bootstrap.min.css';
// import space from '../images/space..jpg';
// import rover from '../images/rover.jpg';
// import nasa from '../images/nasa.jpg';
// import './home.css'; // Custom styles

// function Home() {
//   return (
//     <filler fluid className="mt-4">
//       <Row className="justify-content-center px-5 mt-5"> {/* Adjust padding as needed */}
//         <Col lg={4} md={6} sm={12} className="mb-4">
//           <Card className="h-100 custom-card">
//             <Link to="/apod">
//               <div className="image-overlay">
//                 <Card.Img variant="top" src={space} alt="APOD" style={{ height: '350px', objectFit: 'fill' }} /> {/* Increased image height */}
//                 <div className="overlay-text">
//                   <h5 className="text-bold">Astronomy Picture of the Day</h5>
//                   <p>Explore stunning daily images of the cosmos.</p>
//                 </div>
//               </div>
//             </Link>
//           </Card>
//         </Col>

//         <Col lg={4} md={6} sm={12} className="mb-4">
//           <Card className="h-100 custom-card">
//             <Link to="/mars">
//               <div className="image-overlay">
//                 <Card.Img variant="top" src={rover} alt="Mars Rover" style={{ height: '350px', objectFit: 'fill' }} /> {/* Increased image height */}
//                 <div className="overlay-text">
//                   <h5 className="text-bold">Mars Rover Images</h5>
//                   <p>See the latest images captured by Mars rovers.</p>
//                 </div>
//               </div>
//             </Link>
//           </Card>
//         </Col>

//         <Col lg={4} md={6} sm={12} className="mb-4">
//           <Card className="h-100 custom-card">
//             <Link to="/nasa">
//               <div className="image-overlay">
//                 <Card.Img variant="top" src={nasa} alt="NASA Images" style={{ height: '350px', objectFit: 'fill' }} /> {/* Increased image height */}
//                 <div className="overlay-text">
//                   <h5 className="text-bold">NASA Images</h5>
//                   <p>Browse the NASA image archive.</p>
//                 </div>
//               </div>
//             </Link>
//           </Card>
//         </Col>
//       </Row>
//     </filler>
//   );
// }

// export default Home;

// import React from 'react';
// import { filler, Row, Col, Card } from 'react-bootstrap';
// import { Link } from 'react-router-dom';
// import 'bootstrap/dist/css/bootstrap.min.css';
// import space from '../images/space..jpg';
// import rover from '../images/rover.jpg';
// import nasa from '../images/nasa.jpg';
// import './home.css' // Custom styles

// function Home() {
//   return (
//     <filler className="mt-4">
//       <Row className="justify-content-center">
//         <Col lg={4} md={6} sm={12} className="mb-4">
//           <Card className="h-100 custom-card">
//             <Link to="/apod">
//               <div className="image-overlay">
//                 <Card.Img variant="top" src={space} alt="APOD" style={{ height: '250px', objectFit: 'fill' }} />
//                 <div className="overlay-text">
//                   <h5 className="text-bold">Astronomy Picture of the Day</h5>
//                   <p>Explore stunning daily images of the cosmos.</p>
//                 </div>
//               </div>
//             </Link>
//           </Card>
//         </Col>

//         <Col lg={4} md={6} sm={12} className="mb-4">
//           <Card className="h-100 custom-card">
//             <Link to="/mars">
//               <div className="image-overlay">
//                 <Card.Img variant="top" src={rover} alt="Mars Rover" style={{ height: '250px', objectFit: 'fill' }} />
//                 <div className="overlay-text">
//                   <h5 className="text-bold">Mars Rover Images</h5>
//                   <p>See the latest images captured by Mars rovers.</p>
//                 </div>
//               </div>
//             </Link>
//           </Card>
//         </Col>

//         <Col lg={4} md={6} sm={12} className="mb-4">
//           <Card className="h-100 custom-card">
//             <Link to="/nasa">
//               <div className="image-overlay">
//                 <Card.Img variant="top" src={nasa} alt="NASA Images" style={{ height: '250px', objectFit: 'fill' }} />
//                 <div className="overlay-text">
//                   <h5 className="text-bold">NASA Images</h5>
//                   <p>Browse the NASA image archive</p>
//                 </div>
//               </div>
//             </Link>
//           </Card>
//         </Col>
//       </Row>
//     </filler>
//   );
// }

// export default Home;

// import React from 'react';
// import { filler, Row, Col, Card } from 'react-bootstrap';
// import { Link } from 'react-router-dom';
// import 'bootstrap/dist/css/bootstrap.min.css';
// import space from '../images/space..jpg'
// import rover from '../images/rover.jpg'
// import nasa from '../images/nasa.jpg'
// // import '../styles/Home.css'; // Create this file for custom styles if needed

// function Home() {
//   return (
//     <filler className="mt-4">
//       <Row className="justify-content-center">
//         <Col lg={4} md={6} sm={12} className="mb-4">
//           <Card className="h-100">
//             <Link to="/apod">
//               <Card.Img
//                 variant="top"
//                 src= {space}// Adjust the image path
//                 alt="APOD"
//                 style={{ height: '250px', objectFit: 'fill' }}
//               />
//             </Link>
//             <Card.Body>
//               <Card.Title>Astronomy Picture of the Day</Card.Title>
//               <Card.Text>Explore stunning daily images of the cosmos.</Card.Text>
//             </Card.Body>
//           </Card>
//         </Col>

//         <Col lg={4} md={6} sm={12} className="mb-4">
//           <Card className="h-100">
//             <Link to="/mars">
//               <Card.Img
//                 variant="top"
//                 src={rover} // Adjust the image path
//                 alt="Mars Rover"
//                 style={{ height: '250px', objectFit: 'fill' }}
//               />
//             </Link>
//             <Card.Body>
//               <Card.Title>Mars Rover Images</Card.Title>
//               <Card.Text>See the latest images captured by Mars rovers.</Card.Text>
//             </Card.Body>
//           </Card>
//         </Col>

//         <Col lg={4} md={6} sm={12} className="mb-4">
//           <Card className="h-100">
//             <Link to="/nasa">
//               <Card.Img
//                 variant="top"
//                 src={nasa} // Adjust the image path
//                 alt="NASA Images"
//                 style={{ height: '250px', objectFit: 'fill' }}
//               />
//             </Link>
//             <Card.Body>
//               <Card.Title>NASA Images</Card.Title>
//               <Card.Text>Browse the NASA image archive for historic missions.</Card.Text>
//             </Card.Body>
//           </Card>
//         </Col>
//       </Row>
//     </filler>
//   );
// }

// export default Home;
