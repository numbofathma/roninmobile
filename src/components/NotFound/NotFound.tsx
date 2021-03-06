import * as React from 'react';
import { Container, Row, Col } from 'reactstrap';
import Router from 'next/router';
import Head from 'next/head';
import { SlideButton, SlideHeader } from '@components/common/Style/style';
import { StaticLogo } from '@components/common/Logo';
import { NotFoundWrapper } from './style';

const NotFound = () => (
  <>
    <Head><title>Ronin Mobile - 404 Page not found</title></Head>
    <NotFoundWrapper>
      <Container>
        <Row>
          <Col>
            <SlideHeader>404 NOT FOUND</SlideHeader>
            <br /><br /><br />
            <br /><br /><br />
            <br /><br /><br />
            <SlideButton size="lg" onClick={() => Router.push('/')}>GO TO HOME</SlideButton>
          </Col>
        </Row>
        <Row>
          <Col>
            <br /><br /><br />
            <br /><br /><br />
            <StaticLogo />
            <br />
            <div className="small text-center">
              Copyright &copy; Ronin Mobile
            </div>
            <br />
          </Col>
        </Row>
      </Container>
    </NotFoundWrapper>
  </>
);

export default NotFound;
