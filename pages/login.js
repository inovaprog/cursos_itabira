import Head from "next/head";
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
import styles from "../styles/Home.module.css";
import {useState} from "react"
import React from "react";

export default function Home({ cursos, galeria, treinamentos }) {
    const [controlButton, setControlButton] = useState('none')

    const login = async event => {
        event.preventDefault()
        var email = event.target.email.value
        var password = event.target.password.value
        const res = await fetch(
            'https://lcbgjtzzs0.execute-api.us-east-2.amazonaws.com/default/login',
            {
                body: JSON.stringify({
                    email: email,
                    password: password
                }),
                headers: {
                    'Content-Type': 'application/json'
                },
                method: 'POST'
            }
        )
        const result = await res.json()
        if(result.status == "fail"){
            console.log("LOGIN INCORRETO")
            setControlButton("block")
        }
        if("AuthenticationResult" in result){
            window.sessionStorage.setItem("token", result.AuthenticationResult.AccessToken) 
            console.log("USUARIO LOGADO")
            Router.push('/list')
        }
        if("ChallengeName" in result){
            window.sessionStorage.setItem("session", result.Session)
            window.sessionStorage.setItem("email", email)
            Router.push("/newUser")
        }
        
    }
    

    return (
        <div className={styles.container}>
            <Head>
                <title>Cursos.com Itabira</title>
                <link rel="icon" href="/favicon.ico" />
                <script
                    src="https://unpkg.com/react/umd/react.production.min.js"
                    crossorigin
                ></script>

                <script
                    src="https://unpkg.com/react-dom/umd/react-dom.production.min.js"
                    crossorigin
                ></script>

                <script
                    src="https://unpkg.com/react-bootstrap@next/dist/react-bootstrap.min.js"
                    crossorigin
                ></script>
                <link
                    rel="stylesheet"
                    href="https://cdn.jsdelivr.net/npm/bootstrap@4.6.0/dist/css/bootstrap.min.css"
                    integrity="sha384-B0vP5xmATw1+K9KRQjQERJvTumQW0nPEzvF6L/Z6nronJ3oUOFUFpCjEUQouq2+l"
                    crossorigin="anonymous"
                />
                <script src="https://kit.fontawesome.com/c16c56a8f1.js" crossorigin="anonymous"></script>
            </Head>

            <main className={styles.main}>
                <div className={styles.mNav}>
                    <Navbar collapseOnSelect expand="lg" bg="light" variant="light">
                        <Navbar.Brand href="#home"><img src="/logo.png" style={{ maxWidth: "50px" }}></img></Navbar.Brand>
                        <Navbar.Toggle aria-controls="responsive-navbar-nav" />
                    </Navbar>
                </div>
                <Container>
                    <Row>
                        <Col>
                            <Form onSubmit={login}>
                                <Form.Group controlId="formBasicEmail">
                                    <Form.Label>Email address</Form.Label>
                                    <Form.Control type="email" name="email" placeholder="Enter email" />
                                    <Form.Text className="text-muted">
                                        Seu email
                                </Form.Text>
                                </Form.Group>

                                <Form.Group controlId="formBasicPassword">
                                    <Form.Label>Password</Form.Label>
                                    <Form.Control type="password" name="password" placeholder="Password" />
                                </Form.Group>
                                <Form.Text style={{color:"red", display:controlButton, marginBottom:10}}>
                                    Senha ou email incorretos
                                </Form.Text>
                                <Button variant="primary" type="submit">
                                    Login
                                </Button>
                            </Form>
                        </Col>
                    </Row>
                </Container>

                <footer className={styles.footer}>
                    <a
                        href="https://www.instagram.com/inovaprog"
                        target="_blank"
                        rel="noopener noreferrer"
                    >
                        Desenvolvido por InovaProg{" "}
                        <img src="/inova.jpeg" alt="Logo" className={styles.logo} />
                    </a>
                </footer>
            </main>
        </div>
    );
}

