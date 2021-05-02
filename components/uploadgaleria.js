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
            'https://1sdknnxtrb.execute-api.us-east-2.amazonaws.com/default/api-prod',
            {
                body: JSON.stringify({
                    titulo: event.target.titulo.value,
                    descricao: event.target.descricao.value,
                    url: event.target.url.value,
                    tipo: event.target.tipo.value
                }),
                headers: {
                    'Content-Type': 'application/json',
                    'Authorization':window.sessionStorage.getItem('token')
                },
                method: 'POST'
            }
        )
        const result = await res.json()
        if(result.status == "fail"){
            Router.push("/login")
        }
        Router.push('/list')
    }

    const handlerClick = async event => {
        event.preventDefault()
        let file = fileImput.current.files[0]
        const res = await fetch(
            'https://ea13vnre32.execute-api.us-east-2.amazonaws.com/default/upload_galery',
            {
                body: file,
                headers: {
                    'Content-Type': 'multipart/form-data',
                    'Authorization':window.sessionStorage.getItem('token')
                },
                method: 'PUT'
            }
        )
        const result = await res.json()
        if(result.status == "fail"){
            Router.push("/login")
        }
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
                        <Button variant="primary" href="/list" style={{ display: controlButton, margin:"20px" }}>
                            OK
                        </Button>
                        <Button variant="primary" href="/up" style={{ display: controlButton, margin:"20px" }}>
                            Adicionar outra
                        </Button>
                        <br />
                    </center>
                </Col>
            </Row>
        </Container>
    )
}

export default Upload
