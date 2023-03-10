import React, { FC, useEffect, useState } from 'react'
import { Col, Row } from 'react-bootstrap';
import { BsArrowRightCircle } from 'react-icons/bs'

export const Banner: FC = () => {
    const words = ["NodeJs developer","React developer", "Backend developer"];

    const [loopNumber, setLoopNumber] = useState(0);

    const [isDeletingWord, setIsDeletingWord] = useState(false);

    const [text, setText] = useState('');

    const [timer, setTimer] = useState(300 - Math.random() * 100);

    const period = 2000;

    useEffect(() => {
        let ticker = setInterval(() => {
            tick();
        }, timer)

        return () => { clearInterval(ticker)}

    }, [text])


    const tick = () => {
        let loopModule = loopNumber % words.length;

        let fullText = words[loopModule];

        let updatedText = isDeletingWord ? fullText.substring(0, text.length - 1) : fullText.substring(0, text.length + 1);

        setText(updatedText);

        if(isDeletingWord) {
            setTimer(prevTimer => prevTimer / 2);
        }

        if(!isDeletingWord && updatedText === fullText){
            setIsDeletingWord(true);
            setTimer(period);
        }else if(isDeletingWord && updatedText === ''){
            setIsDeletingWord(false);
            setLoopNumber(loopNumber + 1)
            setTimer(500);
        }
    }

  return (
    <div className="container">
    <section className="banner" id="home">
        <Row className="align-items-center">
            <Col xs={12} md={6} xl={7}>
                <span className="tagline">Welcome to my portfolio</span>
                <h1>{`Hi I'm a `}<span className="wrap">{text}</span></h1>
                <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Libero, aperiam incidunt deserunt debitis nulla dicta natus voluptatum obcaecati aliquam non optio dignissimos iste aliquid et, doloremque tempore laboriosam facere corporis.</p>
                <button onClick={() => console.log('something')}>Let's connect <BsArrowRightCircle size={25}/></button>
            </Col>
            <Col xs={12} md={6} xl={5}>
                <img src={''} alt="Header image" />
            </Col>
        </Row>
    </section>
    </div>
  )
}