import React, { useState } from 'react'
import { Col, Container, Row } from 'react-bootstrap';

interface statusInterface {
    message: string;
    success: boolean;
}

export const Contact = () => {
    const formInitialValues = {
        firstName: '',
        lastName: '',
        email: '',
        phone: '',
        message: ''
    }



    const [formDetails, setFormDetails] = useState(formInitialValues);
    const [submitText, setSubmitText] = useState('');
    const [status, setStatus] = useState<statusInterface>({} as statusInterface);

    const onFormUpdate = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
        const fieldName = e.target.name;
        setFormDetails({...formDetails, [fieldName]: e.target.value});
    }

  return (
    <section className="contact" id="connect">
        <Container>
            <Row className="align-items-center">
                <Col md={6}>
                    
                </Col>
                <Col md={6}>
                <h2>Contact</h2>
                    <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptatibus error maxime nam quisquam minus, inventore vero itaque officiis eius nihil eos quod, aliquid quaerat nulla esse quasi ipsum debitis aperiam?</p>
                    <form action="">
                        <Row>
                            <Col sm={6} className="px-1">
                                <input type="text" name="firstName" value={formDetails.firstName} placeholder="First name" onChange={onFormUpdate}/>
                            </Col>
                            <Col sm={6} className="px-1">
                                <input type="text" name="lastName" value={formDetails.lastName} placeholder="Last name" onChange={onFormUpdate}/>
                            </Col>
                            <Col sm={6} className="px-1">
                                <input type="email" name="email" value={formDetails.email} placeholder="Email" onChange={onFormUpdate}/>
                            </Col>
                            <Col sm={6} className="px-1">
                                <input type="tel" name="phone" value={formDetails.phone} placeholder="Phone" onChange={onFormUpdate}/>
                            </Col>
                            <Col sm={6} className="px-1">
                                <textarea name="message" rows={6} onChange={onFormUpdate} placeholder="Message">
                                    {formDetails.message}
                                </textarea>
                                <button type="submit"><span>{submitText}</span></button>
                            </Col>
                            {
                                status?.message && <Col>
                                    <p className={!status.success ? "danger" : "success"}>{status.message}</p>
                                </Col>
                            }
                        </Row>
                    </form>
                </Col>
            </Row>
        </Container>
    </section>
  )
}