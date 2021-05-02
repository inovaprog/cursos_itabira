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

export default function Home({ cursos, galeria, treinamentos }) {
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
                        <Navbar.Brand href="/"><img src="/logo.png" style={{ maxWidth: "50px" }}></img></Navbar.Brand>
                        <Navbar.Toggle aria-controls="responsive-navbar-nav" />
                    </Navbar>
                </div>
                <Container style={{marginTop:20}}>
                    <Row>
                        <Col sm={6} style={{marginBottom:20}}>
                            <center><Button href="/add" variant="primary">Adicionar novo curso</Button></center>
                        </Col>
                        <Col sm={6} >
                            <center><Button href="/up" variant="primary">Adicionar nova foto</Button></center>
                        </Col>
                    </Row>
                </Container>
                <div>
                    <div className={styles.cursosTitle} id="cursos">
                        <center><h2>CURSOS</h2></center>
                    </div>
                    <Container>
                        <Row style={{ padding: 20, backgroundColor:"#dedede" }}>
                            <Col sm={2}>
                                Imagem
                                </Col>
                            <Col sm={4}>
                                Título
                                </Col>
                            <Col sm={5}>
                                Descrição
                                </Col>
                            <Col sm={1}>
                                Apagar
                                </Col>

                        </Row>
                        {cursos.map((curso) => (
                            <Row style={{ padding: 20, borderBottom: "1px solid #eaeaea" }}>
                                <Col sm={2}>
                                    <img style={{ width: "100%" }} src={curso.url.S}></img>
                                </Col>
                                <Col sm={4}>
                                    {curso.titulo.S}
                                </Col>
                                <Col sm={5}>
                                    {curso.descricao.S}
                                </Col>
                                <Col sm={1}>
                                    <Button onClick={deleteCurso.bind(this, curso.titulo.S)}>Excluir</Button>
                                </Col>

                            </Row>
                        ))}


                        <div className={styles.cursosTitle} id="treinamentos">
                            <h2>TREINAMENTOS</h2>
                        </div>
                        {treinamentos.map((curso) => (
                            <Row style={{ padding: 20, borderBottom: "1px solid #eaeaea" }}>
                                <Col sm={2}>
                                    <img style={{ width: "100%" }} src={curso.url.S}></img>
                                </Col>
                                <Col sm={4}>
                                    {curso.titulo.S}
                                </Col>
                                <Col sm={5}>
                                    {curso.descricao.S}
                                </Col>
                                <Col sm={1}>
                                    <Button onClick={deleteCurso.bind(this, curso.titulo.S)}>Excluir</Button>
                                </Col>

                            </Row>
                        ))}
                    </Container>


                    <div className={styles.cursosTitle} id="galeria">
                        <h2>GALERIA DE FOTOS</h2>
                    </div>
                    <Container>
                        <Row>
                            {galeria.map((foto) => (
                                <Col md={3} style={{marginTop:10}}>
                                    <div className={styles.foto}>
                                        <img src={foto}></img>
                                        <Button variant="outline-info" onClick={deleteCurso.bind(this, foto)}>Excluir</Button>
                                    </div>
                                </Col>
                            ))}
                        </Row>
                    </Container>
                </div>
            </main>
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
        </div>
    );
}

export async function getServerSideProps(context) {
    const res = await fetch(`https://v0xgonrnsd.execute-api.us-east-2.amazonaws.com/default/api-prod`)
    const data = await res.json()
    var cursos = data.cursos
    var galeria = data.galeria
    var treinamentos = data.treinamentos
    return {
        props: { cursos, galeria, treinamentos }, // will be passed to the page component as props
    }
}

async function deleteCurso(titulo) {
    const res = await fetch(
        'https://v0xgonrnsd.execute-api.us-east-2.amazonaws.com/default/api-prod',
        {
            body: JSON.stringify({
                titulo: titulo
            }),
            headers: {
                'Content-Type': 'application/json',
                'Authorization':window.sessionStorage.getItem('token')
            },
            method: 'DELETE'
        }
    )
    const result = await res.json()
    if(result.status == "fail"){
        Router.push("/login")
    }
    else{
        Router.push('/list')
    }
}
