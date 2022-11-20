import React from 'react';
import { Row, Col, Card, ProgressBar, Button, Badge } from 'react-bootstrap';
import { NavLink } from 'react-router-dom';
import Rating from 'react-rating';
import Glide from 'components/carousel/Glide';
import HtmlHead from 'components/html-head/HtmlHead';
import BreadcrumbList from 'components/breadcrumb-list/BreadcrumbList';
import CsLineIcons from 'cs-line-icons/CsLineIcons';
import YourTimeChart from './components/YourTimeChart';

const ElearningDashboard = () => {
  const title = 'Inicio';
  const description = 'Bienvenido a Seven';

  const breadcrumbs = [{ to: '', text: 'Usted está en Inicio' }];
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

      <Row>
        {/* Continue Learning Start */}
        <Col xl="6" className="mb-5">
          <h2 className="small-title">Evaluaciones en progreso</h2>
          <Card className="mb-2">
            <Row className="g-0 sh-14">
              <Col xs="auto" className="position-relative">
                <NavLink to="/courses/detail">
                  <img src="/img/product/small/product-1.webp" alt="alternate text" className="card-img card-img-horizontal sw-14 sw-lg-18" />
                  <Button variant="foreground" size="sm" className="btn-icon-only px-3 position-absolute absolute-center opacity-75 pe-none">
                    <CsLineIcons icon="play" size="16" fill="var(--primary)" />
                  </Button>
                </NavLink>
              </Col>
              <Col>
                <Card.Body className="py-0 h-100 d-flex align-items-center">
                  <div className="w-100">
                    <div className="d-flex flex-row justify-content-between mb-2">
                      <NavLink to="/courses/detail">Evaluación a la docencia 20231</NavLink>
                      <div className="text-muted">67%</div>
                    </div>
                    <ProgressBar className="progress-md mb-2" now={67} />
                  </div>
                </Card.Body>
              </Col>
            </Row>
          </Card>
          <Card className="mb-2">
            <Row className="g-0 sh-14">
              <Col xs="auto" className="position-relative">
                <NavLink to="/courses/detail">
                  <img src="/img/product/small/product-2.webp" alt="alternate text" className="card-img card-img-horizontal sw-14 sw-lg-18" />
                  <Button variant="foreground" size="sm" className="btn-icon-only px-3 position-absolute absolute-center opacity-75 pe-none">
                    <CsLineIcons icon="play" size="16" fill="var(--primary)" />
                  </Button>
                </NavLink>
              </Col>
              <Col>
                <Card.Body className="py-0 h-100 d-flex align-items-center">
                  <div className="w-100">
                    <div className="d-flex flex-row justify-content-between mb-2">
                      <NavLink to="/courses/detail">Encuesta ABC</NavLink>
                      <div className="text-muted">85%</div>
                    </div>
                    <ProgressBar className="progress-md mb-2" now={85} />
                  </div>
                </Card.Body>
              </Col>
            </Row>
          </Card>
          <Card>
            <Row className="g-0 sh-14">
              <Col xs="auto" className="position-relative">
                <NavLink to="/courses/detail">
                  <img src="/img/product/small/product-3.webp" alt="alternate text" className="card-img card-img-horizontal sw-14 sw-lg-18" />
                  <Button variant="foreground" size="sm" className="btn-icon-only px-3 position-absolute absolute-center opacity-75 pe-none">
                    <CsLineIcons icon="play" size="16" fill="var(--primary)" />
                  </Button>
                </NavLink>
              </Col>
              <Col>
                <Card.Body className="py-0 h-100 d-flex align-items-center">
                  <div className="w-100">
                    <div className="d-flex flex-row justify-content-between mb-2">
                      <NavLink to="/courses/detail">Encuesta de satisfacción</NavLink>
                      <div className="text-muted">14%</div>
                    </div>
                    <ProgressBar className="progress-md mb-2" now={14} />
                  </div>
                </Card.Body>
              </Col>
            </Row>
          </Card>
        </Col>
        {/* Continue Learning End */}

        {/* Recommended Courses Start */}
        <Col xl="6" className="mb-5">
          <h2 className="small-title">Resumen evaluaciones</h2>
          <Card className="sh-50 sh-md-40 h-xl-100-card hover-img-scale-up">
            <img src="/img/stats.png" className="card-img h-100 position-absolute" alt="card image" />
          </Card>
        </Col>
        {/* Recommended Courses End */}
      </Row>
    </>
  );
};

export default ElearningDashboard;
