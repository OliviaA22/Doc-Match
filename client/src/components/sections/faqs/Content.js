import React, { Component } from 'react';
import faqs from "../../../data/faqs.json";
import { Tab, Nav, Accordion, Button, Card } from "react-bootstrap";

class Content extends Component {
    render() {
        return (
            <div className="section">
                <div className="container">
                    <Tab.Container defaultActiveKey={"tab10"}>
                        <div className="row">
                            <div className="col-lg-4">
                                <div className="sigma_accordion style-13">
                                    <div className="sigma_tab-item style-4">
                                        <Nav as="ul" variant="tabs">
                                            {/* Data */}
                                            {faqs.map((faq, i) => (
                                                <Nav.Item as="li" key={i}>
                                                    <Nav.Link eventKey={"tab" + 1 + i}>
                                                        {faq.title}
                                                        <i className="fal fa-chevron-right" />
                                                    </Nav.Link>
                                                </Nav.Item>
                                            ))}
                                            {/* Data */}
                                        </Nav>
                                    </div>
                                </div>
                            </div>
                            <div className="col-lg-8">
                                <Tab.Content className="mt-5 mt-lg-0">
                                    {faqs.map((faq, i) => (
                                        <Tab.Pane key={i} eventKey={"tab" + 1 + i}>
                                            <div className="sigma_accordion style-13">
                                                <Accordion defaultActiveKey={1}>
                                                    {faq.items.map((item, i) => (
                                                        <Card key={i}>
                                                            <Accordion.Collapse eventKey={1 + i} className="collapseparent">
                                                                <Card.Body>
                                                                    {item.text}
                                                                </Card.Body>
                                                            </Accordion.Collapse>
                                                            <Card.Header>
                                                                <Accordion.Toggle as={Button} variant="link" eventKey={1 + i}>
                                                                    {item.title}
                                                                </Accordion.Toggle>
                                                            </Card.Header>
                                                        </Card>
                                                    ))}
                                                </Accordion>
                                            </div>
                                        </Tab.Pane>
                                    ))}
                                </Tab.Content>
                            </div>
                        </div>
                    </Tab.Container>
                </div>
            </div>
        );
    }
}

export default Content;