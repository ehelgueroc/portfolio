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

    const handleSubmit = async (e: React.SyntheticEvent) => {
        e.preventDefault();
        setSubmitText("Submitting....")
        const response: any = await fetch("http://localhost:5000", {
            method: "POST",
            headers: {
                "Content-Type": "Application/json;charset=utf-8",
            },
            body: JSON.stringify(formDetails)
        })
        setSubmitText("Send");
        let result = response.json();
        setFormDetails(formInitialValues);
        if(result?.code === 200){
            setStatus({
                success: true, message: "Message was sent"
            })
        }else{
            setStatus({
                success: false, message: "Message failed"
            })
        }
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
                    <form onSubmit={handleSubmit}>
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