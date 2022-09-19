import React, { useRef } from "react";

import Navbar from "../../components/Navbar";
import Rodape from "../../components/Rodape";

import WhatsappC from "../../imagens/WhatsappC.png";
import EmailC from "../../imagens/EmailC.png";
import FacebookC from "../../imagens/FacebookC.png";
import InstagramC from "../../imagens/InstagramC.png";

import {
  Title,
  Container,
  CardContact,
  ButtonSend,
  InfoContact,
  Icons,
  Line,
  Redes,
} from "./styles";

import { Grid, TextField } from "@mui/material";

import emailjs from "emailjs-com";
import { useHistory } from "react-router-dom";

function Sobre() {
  const form = useRef();

  const history = useHistory();

  const sendEmail = (e) => {
    e.preventDefault();

    emailjs
      .sendForm(
        "service_rlyph99",
        "template_i4psy73",
        form.current,
        "MqFJMZw371qxWlUe5"
      )
      .then(
        (result) => {
          history.push("/");
          alert("Mensagem enviada com sucesso");
        },
        (error) => {
          console.log(error);
          alert("Falha ao mandar mensagem");
        }
      );
  };
  return (
    <>
      <Navbar />

      <Title>
        <h2>
          <b>Entre em contato conosco!</b>
        </h2>
        <h5>Tire suas dúvidas, solicite orçamentos e muito mais</h5>
      </Title>

      <Grid container justifyContent={"space-around"} spacing={2}>
        <Grid item>
          <CardContact>
            <h3>
              <b>Cadastre-se</b> e entraremos em contato
            </h3>
            <form ref={form} onSubmit={sendEmail}>
              <input type="text" name="user_name" placeholder="Nome" />
              <br />
              <input type="email" name="user_email" placeholder="Email" />
              <br />
              <input type="text" name="number" placeholder="Número" />
              <br />

              <textarea name="message" placeholder="Mensagem" />
              <br />
              <br />
              <ButtonSend>Enviar</ButtonSend>
            </form>
          </CardContact>
        </Grid>
        <Grid item>
          <InfoContact>
            <Icons>
              <a href="https://api.whatsapp.com/send?phone=551124043880&text=Ol%C3%A1%2C+gostaria+de+mais+informa%C3%A7%C3%B5es">
                <img src={WhatsappC} width="70rem" height="70rem" />
              </a>
              <h3>
                <b>WhatsApp</b>
                <br />
                (11) 2404-3880
              </h3>
            </Icons>
            <Icons>
              <img src={EmailC} width="70rem" height="70rem" />
              <h3>
                <b>E-mail</b>
                <br />
                wetafilter@wetafilter.com.br
              </h3>
            </Icons>
            <Line />
            <Redes>
              <h3>Siga-nos nas redes sociais</h3>
              <a href="https://www.facebook.com/wetafilter">
                <img src={FacebookC} style={{ marginRight: "4%" }} />
              </a>
              <a href="https://www.instagram.com/wetafilter_filtros/">
                <img src={InstagramC} />
              </a>
            </Redes>
          </InfoContact>
        </Grid>
      </Grid>

      <Rodape />
    </>
  );
}

export default Sobre;
