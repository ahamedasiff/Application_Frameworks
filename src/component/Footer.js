import React from 'react';
import { Container, Row, Col } from 'react-bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';

function SpaceFooter() {
  return (
    <footer className="bg-dark text-white py-2 mt-3" >
        <Row style={{maxWidth: "100%"}}>
          <Col className="text-center">
            <small>© 2024 SpaceOne - All Rights Reserved</small>
          </Col>
        </Row>
    </footer>
  );
}

export default SpaceFooter;

// import React from 'react';
// import { Container, Row, Col } from 'react-bootstrap';
// import 'bootstrap/dist/css/bootstrap.min.css';

// function SpaceFooter() {
//   return (
//     <footer className="bg-dark text-white py-2">
//         <Row>
//           <Col className="text-center">
//             <small>© 2024 SpaceOne - All Rights Reserved</small>
//           </Col>
//         </Row>
//     </footer>
//   );
// }

// export default SpaceFooter;
