import Head from "next/head";
import Upload from "../components/uploadImg"
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
import styles from "../styles/add.module.css";

export default function Add() {
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
                        <Navbar.Collapse id="responsive-navbar-nav">
                        </Navbar.Collapse>
                    </Navbar>
                </div>
                <div>
                    <h1>Adicionar novo Curso</h1>
                </div>
                <Upload></Upload>
            </main>
        </div>
    );
}


export async function getServerSideProps(context) {
    const res = await fetch(`https://1sdknnxtrb.execute-api.us-east-2.amazonaws.com/default/api-prod`)
    const data = await res.json()
    var cursos = data.cursos
    var galeria = data.galeria
    return {
        props: { cursos, galeria }, // will be passed to the page component as props
    }
}
