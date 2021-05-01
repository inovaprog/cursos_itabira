import React, { useRef, useState } from "react";
import S3 from "react-aws-s3"
import {
    Button,
    Col,
    Container,
    Row,
    Navbar,
    Nav,
    Form,
    NavDropdown,
} from "react-bootstrap";
import Router from 'next/router'

function Upload() {
    const [foto, setFoto] = useState();
    const [img, setImg] = useState("https://via.placeholder.com/300x200")
    const [controlButton, setControlButton] = useState('none')
    const fileImput = useRef()

    const registerCurso = async event => {
        event.preventDefault()
        const res = await fetch(
            'https://v0xgonrnsd.execute-api.us-east-2.amazonaws.com/default/api-prod',
            {
                body: JSON.stringify({
                    titulo: event.target.titulo.value,
                    descricao: event.target.descricao.value,
                    url: event.target.url.value,
                    tipo: event.target.tipo.value
                }),
                headers: {
                    'Content-Type': 'application/json'
                },
                method: 'POST'
            }
        )
        const result = await res.json()
        console.log(result)
        Router.push('/list')
    }

    const handlerClick = async event => {
        event.preventDefault()
        let file = fileImput.current.files[0]
        const res = await fetch(
            'https://v0xgonrnsd.execute-api.us-east-2.amazonaws.com/default/api-prod',
            {
                body: file,
                headers: {
                    'Content-Type': 'multipart/form-data'
                },
                method: 'PUT'
            }
        )
        const result = await res.json()
        console.log(result.url)
        setFoto(result.url)
        setImg(result.url)
        setControlButton("block")
    }

    return (
        <Container>
            <Row>
                <Col md={6}>
                    <center><img style={{ width: "80%" }} src={img}></img></center>
                </Col>
                <Col md={6}>
                    <center>
                        <form className="form-img" onChange={handlerClick}>
                            <Row>
                                <Col md={6}>
                                    <input type='file' ref={fileImput}></input>
                                </Col>

                            </Row>
                        </form>
                        <br />
                        <Form onSubmit={registerCurso}>
                            <Form.Group>
                                <Form.Label>Nome do Curso</Form.Label>
                                <Form.Control type="text" name="titulo" placeholder="Titulo do Curso" />
                                <br />
                                <Form.Label>Descrição do Curso</Form.Label>
                                <Form.Control type="text" name="descricao" placeholder="Descrição do Curso" style={{height:100}} />
                                <br />
                                <Form.Control type="text" name="url" value={foto} style={{ display: "none" }} />
                                <Form.Group>
                                    <Form.Label>Tipo de Curso</Form.Label>
                                    <Form.Control as="select" defaultValue="Curso" name="tipo">
                                        <option>Curso</option>
                                        <option>Treinamento</option>
                                    </Form.Control>
                                </Form.Group>
                            </Form.Group>
                            <Button variant="primary" type="submit" style={{ display: controlButton }}>
                                Enviar
                            </Button>
                        </Form>
                    </center>
                </Col>
            </Row>
        </Container>
    )
}

export default Upload
