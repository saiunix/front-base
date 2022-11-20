import React from 'react';
import { Row, Col, Card, Button } from 'react-bootstrap';
import { NavLink } from 'react-router-dom';
import HtmlHead from 'components/html-head/HtmlHead';
import BreadcrumbList from 'components/breadcrumb-list/BreadcrumbList';
import Clamp from 'components/clamp';
import CsLineIcons from 'cs-line-icons/CsLineIcons';

const QuizList = () => {
  const title = 'Evaluaciones';
  const description = 'Elearning Portal Quiz List Page';

  const breadcrumbs = [{ to: '', text: 'Inicio' }];
  return (
    <>
      <HtmlHead title={title} description={description} />
      {/* Title and Top Buttons Start */}
      <div className="page-title-container">
        <Row>
          {/* Title Start */}
          <Col md="7">
            <h1 className="mb-0 pb-0 display-4">{title}</h1>
            <BreadcrumbList items={breadcrumbs} />
          </Col>
          {/* Title End */}
        </Row>
      </div>
      {/* Title and Top Buttons End */}

      {/* Quizzes Start */}
      <Row className="row-cols-1 row-cols-sm-2 row-cols-xl-3 row-cols-xxl-5 g-4">
        <Col>
          <Card>
            <img src="/img/test.png" className="card-img-top sh-25" alt="card image" />
            <Card.Body>
              <NavLink to="/quiz/detail" className="body-link d-block sh-6 mb-2 h5 heading lh-1-5">
                <Clamp tag="span" clamp="2">
                  Evaluación docencia 2022-2
                </Clamp>
              </NavLink>
              <Row className="g-0 align-items-center mb-1">
                <Col xs="auto">
                  <div className="sw-3 sh-4 d-flex justify-content-center align-items-center">
                    <CsLineIcons icon="form-check" className="text-primary" />
                  </div>
                </Col>
                <Col className="ps-3">
                  <Row className="g-0">
                    <Col>
                      <div className="text-alternate sh-4 d-flex align-items-center lh-1-25">Preguntas</div>
                    </Col>
                    <Col xs="auto">
                      <div className="sh-4 d-flex align-items-center text-alternate">25</div>
                    </Col>
                  </Row>
                </Col>
              </Row>
              <Row className="g-0 align-items-center mb-1">
                <Col xs="auto">
                  <div className="sw-3 sh-4 d-flex justify-content-center align-items-center">
                    <CsLineIcons icon="clock" className="text-primary" />
                  </div>
                </Col>
                <Col className="ps-3">
                  <Row className="g-0">
                    <Col>
                      <div className="text-alternate sh-4 d-flex align-items-center lh-1-25">Tiempo</div>
                    </Col>
                    <Col xs="auto">
                      <div className="sh-4 d-flex align-items-center text-alternate">5m</div>
                    </Col>
                  </Row>
                </Col>
              </Row>
              <Row className="g-0 align-items-center mb-1">
                <Col xs="auto">
                  <div className="sw-3 sh-4 d-flex justify-content-center align-items-center">
                    <CsLineIcons icon="graduation" className="text-primary" />
                  </div>
                </Col>
                <Col className="ps-3">
                  <Row className="g-0">
                    <Col>
                      <div className="text-alternate sh-4 d-flex align-items-center lh-1-25">Nivel</div>
                    </Col>
                  </Row>
                </Col>
              </Row>
              <div className="d-flex flex-row justify-content-between w-100 w-sm-50 w-xl-100 mt-4">
                <NavLink to="/quiz/detail" className="btn btn-outline-primary w-100 me-1 btn-sm">
                  Iniciar
                </NavLink>
                <Button variant="outline-primary" className="btn-icon btn-icon-only" size="sm">
                  <CsLineIcons icon="more-horizontal" />
                </Button>
              </div>
            </Card.Body>
          </Card>
        </Col>
        <Col>
          <Card>
            <img src="/img/test.png" className="card-img-top sh-25" alt="card image" />
            <Card.Body>
              <NavLink to="/quiz/detail" className="body-link d-block sh-6 mb-2 h5 heading lh-1-5">
                <Clamp tag="span" clamp="2">
                Evaluación docencia 2022-1
                </Clamp>
              </NavLink>
              <Row className="g-0 align-items-center mb-1">
                <Col xs="auto">
                  <div className="sw-3 sh-4 d-flex justify-content-center align-items-center">
                    <CsLineIcons icon="form-check" className="text-primary" />
                  </div>
                </Col>
                <Col className="ps-3">
                  <Row className="g-0">
                    <Col>
                      <div className="text-alternate sh-4 d-flex align-items-center lh-1-25">Preguntas</div>
                    </Col>
                    <Col xs="auto">
                      <div className="sh-4 d-flex align-items-center text-alternate">30</div>
                    </Col>
                  </Row>
                </Col>
              </Row>
              <Row className="g-0 align-items-center mb-1">
                <Col xs="auto">
                  <div className="sw-3 sh-4 d-flex justify-content-center align-items-center">
                    <CsLineIcons icon="clock" className="text-primary" />
                  </div>
                </Col>
                <Col className="ps-3">
                  <Row className="g-0">
                    <Col>
                      <div className="text-alternate sh-4 d-flex align-items-center lh-1-25">Tiempo</div>
                    </Col>
                    <Col xs="auto">
                      <div className="sh-4 d-flex align-items-center text-alternate">5m</div>
                    </Col>
                  </Row>
                </Col>
              </Row>
              <Row className="g-0 align-items-center mb-1">
                <Col xs="auto">
                  <div className="sw-3 sh-4 d-flex justify-content-center align-items-center">
                    <CsLineIcons icon="graduation" className="text-primary" />
                  </div>
                </Col>
                <Col className="ps-3">
                  <Row className="g-0">
                    <Col>
                      <div className="text-alternate sh-4 d-flex align-items-center lh-1-25">Nivel</div>
                    </Col>
                  </Row>
                </Col>
              </Row>
              <div className="d-flex flex-row justify-content-between w-100 w-sm-50 w-xl-100 mt-4">
                <NavLink to="/quiz/detail" className="btn btn-outline-primary w-100 me-1 btn-sm">
                  Iniciar
                </NavLink>
                <Button variant="outline-primary" className="btn-icon btn-icon-only" size="sm">
                  <CsLineIcons icon="more-horizontal" />
                </Button>
              </div>
            </Card.Body>
          </Card>
        </Col>
        <Col>
          <Card>
            <img src="/img/test.png" className="card-img-top sh-25" alt="card image" />
            <Card.Body>
              <NavLink to="/quiz/detail" className="body-link d-block sh-6 mb-2 h5 heading lh-1-5">
                <Clamp tag="span" clamp="2">
                Evaluación docencia 2023-1
                </Clamp>
              </NavLink>
              <Row className="g-0 align-items-center mb-1">
                <Col xs="auto">
                  <div className="sw-3 sh-4 d-flex justify-content-center align-items-center">
                    <CsLineIcons icon="form-check" className="text-primary" />
                  </div>
                </Col>
                <Col className="ps-3">
                  <Row className="g-0">
                    <Col>
                      <div className="text-alternate sh-4 d-flex align-items-center lh-1-25">Preguntas</div>
                    </Col>
                    <Col xs="auto">
                      <div className="sh-4 d-flex align-items-center text-alternate">20</div>
                    </Col>
                  </Row>
                </Col>
              </Row>
              <Row className="g-0 align-items-center mb-1">
                <Col xs="auto">
                  <div className="sw-3 sh-4 d-flex justify-content-center align-items-center">
                    <CsLineIcons icon="clock" className="text-primary" />
                  </div>
                </Col>
                <Col className="ps-3">
                  <Row className="g-0">
                    <Col>
                      <div className="text-alternate sh-4 d-flex align-items-center lh-1-25">Tiempo</div>
                    </Col>
                    <Col xs="auto">
                      <div className="sh-4 d-flex align-items-center text-alternate">4m</div>
                    </Col>
                  </Row>
                </Col>
              </Row>
              <Row className="g-0 align-items-center mb-1">
                <Col xs="auto">
                  <div className="sw-3 sh-4 d-flex justify-content-center align-items-center">
                    <CsLineIcons icon="graduation" className="text-primary" />
                  </div>
                </Col>
                <Col className="ps-3">
                  <Row className="g-0">
                    <Col>
                      <div className="text-alternate sh-4 d-flex align-items-center lh-1-25">Nivel</div>
                    </Col>
                  </Row>
                </Col>
              </Row>
              <div className="d-flex flex-row justify-content-between w-100 w-sm-50 w-xl-100 mt-4">
                <NavLink to="/quiz/detail" className="btn btn-outline-primary w-100 me-1 btn-sm">
                  Iniciar
                </NavLink>
                <Button variant="outline-primary" className="btn-icon btn-icon-only" size="sm">
                  <CsLineIcons icon="more-horizontal" />
                </Button>
              </div>
            </Card.Body>
          </Card>
        </Col>
      </Row>
      {/* Quizzes End */}
    </>
  );
};

export default QuizList;
