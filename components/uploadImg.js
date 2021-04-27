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

function Upload() {
    const registerCurso = async event => {
        event.preventDefault()
        handlerClick()
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
                    'Content-Type': 'application/json'
                },
                method: 'POST'
            }
        )

        const result = await res.json()
        console.log(result)
    }

    const [foto, setFoto] = useState();

    const fileImput = useRef()

    const handlerClick = event => {
        let file = fileImput.current.files[0]
        let newfilename = fileImput.current.files[0].name
        const config = {
            bucketName: process.env.REACT_APP_BUCKET_NAME,
            dirName: "cursos-itabira/cursos",
            region: process.env.REACT_APP_REGION,
            accessKeyId: process.env.REACT_APP_ACCESS_ID,
            secretAccessKey: process.env.REACT_APP_ACCESS_KEY
        }
        const Reacts3Client = new S3(config)
        Reacts3Client
            .uploadFile(file, newfilename)
            .then(data => console.log(data))
            .catch(err => console.error(err))
    }

    return (
        <div>
            <form className="form-img" onSubmit={handlerClick} onChange={() => setFoto(fileImput.current.files[0].name)}>
                <input type='file' ref={fileImput}></input>
                <br />
            </form>
            <br />
            <Form onSubmit={registerCurso}>
                <Form.Group>
                    <Form.Control type="text" name="titulo" placeholder="Titulo do Curso" />
                    <br />
                    <Form.Control type="text" name="descricao" placeholder="Descrição do Curso" />
                    <br />
                    <Form.Control type="text" name="url" value={foto} style={{ display: "none" }} />
                    <Form.Control as="select" name="tipo" multiple>
                        <option>Curso</option>
                        <option>Treinamento</option>
                    </Form.Control>
                </Form.Group>
                <Button variant="primary" type="submit">
                    Enviar
                    </Button>
            </Form>
        </div>
    )
}

export default Upload