import React from "react";
import { Row, Col } from "antd";
import Link from "next/link";

import FooterSubcribe from "./elements/FooterSubcribe";
import Container from "../other/Container";
import links from "../../data/footer-links.json";

function Footer({ containerType }) {
  return (
    <div className="footer">
      <div className="footer-top">
        <Container type={containerType}>
          <Row justify="center" gutter={30}>
          <Col className="gutter-row" span="24" sm={12} lg={8}>
              <div className="footer-top-item -col-one">
                <Row gutter={30}>
                  <Col className="gutter-row" span={24}>
                  <h5 className="footer-title">Contact Us</h5>
                  <p>House #8, Road #14,</p>
                    <p>Dhanmondi, Dhaka-1209. </p>
                    <p>Email: support@elementronics.com</p> 
                    <p>phone: +8801711-223344</p>
                    <h5 className="footer-title">Get in touch</h5>
                  </Col>
                </Row>
              </div>
            </Col>
            <Col className="gutter-row" span="24" sm={12} lg={8}>
              <div className="footer-top-item -col-two">
                <Row gutter={30}>
                  <Col className="gutter-row" span={24}>
                    <h5 className="footer-title">Menu</h5>
                    <ul>
                      {links.information.map((item, index) => (
                        <li key={index}>
                          <Link href="#">
                            <a>{item.name}</a>
                          </Link>
                        </li>
                      ))}
                    </ul>
                  </Col>
                </Row>
              </div>
            </Col>

            <Col className="gutter-row" span="24" sm={18} lg={8}>
              <div className="footer-top-item -col-three">
                <h5 className="footer-title">Subscribe Us</h5>
                <FooterSubcribe url="https://jster.us7.list-manage.com/subscribe/post?u=ed40c0084a0c5ba31b3365d65&id=ec6f32bf5e" />
                <h5 className="footer-title">Our payment methods</h5>
                <img
                  src={
                    process.env.PUBLIC_URL + "/assets/images/footer/payment.png"
                  }
                  alt="Payment methods"
                />
              </div>
            </Col>
          </Row>
        </Container>
      </div>
      <div className="footer-bottom">
        <Container type={containerType}>
          <p>Copyright © {`${new Date().getFullYear()}`} Elementronics.com. All rights reserved</p>
        </Container>
      </div>
    </div>
  );
}

export default React.memo(Footer);
