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
            <Navbar.Brand href="#home"><img src="/logo.png" style={{ maxWidth: "50px" }}></img></Navbar.Brand>
            <Navbar.Toggle aria-controls="responsive-navbar-nav" />
            <Navbar.Collapse id="responsive-navbar-nav">
              <Nav className="mr-auto">
                <Nav.Link href="#">Home</Nav.Link>
                <Nav.Link href="#sobre">Sobre a Cursos.com</Nav.Link>
                <Nav.Link href="#cursos">Nossos Cursos</Nav.Link>
                <Nav.Link href="#treinamentos">Nossos Treinamentos</Nav.Link>
                <Nav.Link href="#galeria">Galeria de Fotos</Nav.Link>
                <Nav.Link style={{color:"red"}} href="/login">Login</Nav.Link>
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
                Cursos.com consultoria, palestras e treinamentos < br />
                Uma empresa que ajuda você a ir mais longe, que ajuda você a se qualificar para o mercado de trabalho, com cursos de qualificação profissional e com treinamentos em Máquinas Pesadas em especial Movimentação de Carga.<br />
                Cursos.com atende também empresas com treinamentos voltados para Rac's Requisitos de atividades críticas e De Acordo com as Nr's 06,11,12,18. Todos os treinamentos são realizados por Instrutores credenciados com experiência no assunto a ser abordado. <br />
                Cursos.com, compromisso com a segurança e saúde ocupacional do colaborador em executar sua atividade com segurança e preservando o meio ambiente, palestras motivacionais e abordando assuntos escolhidos por nossos clientes, estamos sempre a disposição para treinar, capacitar e qualificar Você!!!
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
                  <h5>
                    {curso.descricao.S}
                    {curso.link?.S}
                  </h5>
                  <Button
                    href={curso.link && curso.link?.S != ''  ? "https://" + curso.link?.S : "https://api.whatsapp.com/send?phone=5531992620858"}
                    target="_blanck"
                    variant="primary"
                  >
                    Saiba mais
                </Button>{" "}
                </center>
              </div>
            </div>
          ))}

          <div className={styles.cursosTitle} id="treinamentos">
            <h2>NOSSOS TREINAMENTOS</h2>
          </div>
          {treinamentos.map((curso) => (
            <div className={styles.cursos}>
              <div className={styles.imgCurso}>
                <img src={curso.url.S}></img>
              </div>
              <div className={styles.textoCurso}>
                <center>
                  <h3>
                    {curso.titulo.S}
                  </h3>
                  <h5>
                    {curso.descricao.S}
                  </h5>
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
        <a href="https://api.whatsapp.com/send?phone=5531992620858" target="_blanck">
          <div className={styles.c}><i class="fab fa-whatsapp"></i> 31 99262-0858</div>
        </a>
        <a href="malito:contato@cursositabira.com.br">
          <div className={styles.c}><i class="far fa-envelope"></i> contato@cursositabira.com.br</div>
        </a>
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
  const res = await fetch(`https://v0xgonrnsd.execute-api.us-east-2.amazonaws.com/default/api-prod`)
  const data = await res.json()
  var cursos = data.cursos
  var galeria = data.galeria
  var treinamentos = data.treinamentos
  return {
    props: { cursos, galeria, treinamentos }, // will be passed to the page component as props
  }
}
