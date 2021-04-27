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
import styles from "../styles/Home.module.css";
export default function Home({ cursos, galeria }) {
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
            <Navbar.Brand href="#home"><img src="/logo.png" style={{maxWidth:"50px"}}></img></Navbar.Brand>
            <Navbar.Toggle aria-controls="responsive-navbar-nav" />
            <Navbar.Collapse id="responsive-navbar-nav">
              <Nav className="mr-auto">
                <Nav.Link href="#">Home</Nav.Link>
                <Nav.Link href="#sobre">Sobre a Cursos.com</Nav.Link>
                <Nav.Link href="#cursos">Nossos Cursos</Nav.Link>
                <Nav.Link href="#galeria">Galeria de Fotos</Nav.Link>
              </Nav>
            </Navbar.Collapse>
          </Navbar>
        </div>
        <div className={styles.topo}>
          <img src="/topo.jpg"></img>
        </div>
        <div>
          <div className={styles.sobre} id="sobre">
            <div className={styles.textoDireita}>
              <img src="/logo.png" className={styles.logoCursos} />
            </div>
            <div className={styles.textoSobre}>
              <p>
                Contrary to popular belief, Lorem Ipsum is not simply random
                text. It has roots in a piece of classical Latin literature from
                45 BC, making it over 2000 years old. Richard McClintock, a
                Latin professor at Hampden-Sydney College in Virginia, looked up
                one of the more obscure Latin words, consectetur, from a Lorem
                Ipsum passage, and going through the cites of the word in
                classical literature, discovered the undoubtable source. Lorem
                Ipsum comes from sections 1.10.32 and 1.10.33 of "de Finibus
                Bonorum et Malorum" (The Extremes of Good and Evil) by Cicero,
                written in 45 BC. This book is a treatise on the theory of
                ethics, very popular during the Renaissance. The first line of
                Lorem Ipsum, "Lorem ipsum dolor sit amet..", comes from a line
                in section 1.10.32. The standard chunk of Lorem Ipsum used since
                the 1500s is reproduced below for those interested. Sections
                1.10.32 and 1.10.33 from "de Finibus Bonorum et Malorum" by
                Cicero are also reproduced in their exact original form,
                accompanied by English versions from the 1914 translation by H.
                Rackham.
              </p>
            </div>
          </div>
          <div className={styles.cursosTitle} id="cursos">
            <h2>NOSSOS CURSOS</h2>
          </div>
          {cursos.map((curso) => (
            <div className={styles.cursos}>
              <div className={styles.imgCurso}>
                <img src={curso.url.S}></img>
              </div>
              <div className={styles.textoCurso}>
                <center>
                  <h3>
                    {curso.titulo.S}
                  </h3>
                  <Button
                    href="https://api.whatsapp.com/send?phone=5531992620858"
                    target="_blanck"
                    variant="primary"
                  >
                    Saiba mais
                </Button>{" "}
                </center>
              </div>
            </div>
          ))}



          <div className={styles.cursosTitle} id="galeria">
            <h2>GALERIA DE FOTOS</h2>
          </div>
          <Container>
            <Row>
              {galeria.map((foto) => (
                <Col md={3}>
                  <div className={styles.foto}>
                    <img src={foto}></img>
                  </div>
                </Col>
              ))}
            </Row>
          </Container>
        </div>
      </main>

      <div className={styles.cursosTitle} id="galeria">
        <h2>CONTATO</h2>
      </div>
      <div className={styles.contato}>
        <div className={styles.c}><i class="fas fa-map-marker-alt"></i> Avenida Duque de Caxias - Esplanada da Estação (Prédio da Acita) - Itabira/MG</div>
        <div className={styles.c}><i class="fab fa-whatsapp"></i> 31 99262-0858</div>
        <div className={styles.c}><i class="far fa-envelope"></i> contato@cursositabira.com.br</div>
      </div>
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
  const res = await fetch(`https://1sdknnxtrb.execute-api.us-east-2.amazonaws.com/default/api-prod`)
  const data = await res.json()
  var cursos = data.cursos
  var galeria = data.galeria
  return {
    props: { cursos, galeria }, // will be passed to the page component as props
  }
}
