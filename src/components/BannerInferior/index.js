import React, { useState } from "react";
import {
  Main,
  ImageBannerInf,
  TextBannerInf,
  ButtonBannerInf,
} from "./styles.js";

import ButtonClean from "../ButtonClean";

import Send from "../../imagens/send.png";
import { Box } from "@mui/system";
import useMediaQuery from "@mui/material/useMediaQuery";
import { Grid } from "@mui/material";

export default function BannerInferior({sm}) {
  return (
    <>
      <Main>
        <Grid container justifyContent={'space-around'}>
          <Grid item display={'flex'}>
          <Box display={{ xs: "none", sm: "none", md: "block" }} style={{ marginRight: 25 }}>
              <ImageBannerInf >
                <img src={Send} />
              </ImageBannerInf>
            </Box>
            <TextBannerInf>
              <h4>ENTRE EM CONTATO CONOSCO</h4>
              <h5>
                SIMPLES, FÁCIL <b>& SEGURO.</b>
              </h5>
            </TextBannerInf>
          </Grid >
          <Grid item>
            <ButtonBannerInf>
              <a
                href="https://api.whatsapp.com/send?phone=551124043880&text=Ol%C3%A1%2C+gostaria+de+mais+informa%C3%A7%C3%B5es"
                target="_blank"
              >
                <ButtonClean title={"ATENDIMENTO"} />
              </a>
            </ButtonBannerInf>
          </Grid>
        </Grid>
      </Main>
    </>
  );
}
