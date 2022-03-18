import { useState } from 'react';
import { Container, Row, Col } from 'react-bootstrap';
import { BsPlusLg } from 'react-icons/bs';
import PrimaryButton from '../../components/button';
import Header from '../../components/header';
import PrimaryModal from '../../components/modal';
import ProductionForm from '../../components/forms/productionForm';

export default function Productions() {
  const [show, setShow] = useState(false);
  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

  return (
    <>
      <Header>
        <Container fluid>
          <Row>
            <Col sm={10}>
              <h2>Productions</h2>
            </Col>
            <Col sm={2}>
              <PrimaryButton onClick={handleShow}>
                <BsPlusLg />
                Start Production
              </PrimaryButton>
            </Col>
          </Row>
        </Container>
      </Header>
      <Container fluid>
        <PrimaryModal
          show={show}
          handleClose={handleClose}
          modalTitle="Start Production"
        >
          <ProductionForm handleClose={handleClose} />
        </PrimaryModal>
        <p>Productions Here</p>
      </Container>
    </>
  );
}
