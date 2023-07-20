import { Box, Button, Container, Heading, Text } from "@chakra-ui/react";
import { Link, useLocation } from "react-router-dom";

import React from "react";
import { getCurrentProject } from "../utils/currentProjext";

const Flea = () => {
  const location = useLocation();
  const currentProject = getCurrentProject(location);
  return (
    <Container maxW="1200px" mt="30px">
      <Box mb="30px" height="100%">
        <Heading fontWeight="light">{currentProject.title}</Heading>
        <Text mt="10px">{currentProject.description}</Text>
        <Button variant="solid" mt="20px">
          <Link to="https://inspiring-jelly-d870a1.netlify.app/">
            Go to project
          </Link>
        </Button>

        <Heading fontWeight="regular" fontSize="25px" mt="20px" mb="20px">
          COS'È Flea?
        </Heading>
        <Text>
          Flea è un servizio di hosting online che consente agli utenti di
          scambiare, vendere e acquistare oggetti sulla sua piattaforma (il
          "Sito"). Flea facilita queste transazioni e permette agli utenti di
          comunicare tramite messaggi privati o messaggi sul forum. Flea offre
          anche servizi aggiuntivi a pagamento per garantire queste transazioni
          e la protezione degli acquirenti (i "Servizi di protezione
          dell'acquirente") o per migliorare la visibilità degli articoli
          disponibili (come l'"item bump" o il "wardrobe spotlight"). Flea non
          vende, acquista o scambia articoli e non è parte di alcuna transazione
          tra gli utenti.
        </Text>
        <Heading fontWeight="regular" fontSize="25px" mt="20px" mb="20px">
          CHI PUÒ DIVENTARE UTENTE O VISITATORE DI Flea?
        </Heading>
        <Text>
          Un visitatore è qualsiasi persona che utilizza il Sito senza essere
          registrato, in conformità con i Termini e Condizioni di Flea. Gli
          utenti sono o: - individui che hanno creato un account su Flea,
          accettato i Termini e le Condizioni di Flea e agiscono come
          consumatori quando elencano articoli ed effettuano transazioni su Flea
          (gli "Utenti"); o - Commercianti individuali con sede in Francia,
          organizzazioni senza scopo di lucro (associazioni o fondazioni) che
          hanno accettato i Termini e Condizioni di Flea, le Condizioni d'uso
          dei Venditori pro e le Condizioni di vendita dei Venditori pro e che
          inseriscono articoli su Flea come parte della loro attività
          professionale (gli "Utenti professionisti" o "Venditori
          professionisti"). Gli Utenti Pro e i Venditori Pro hanno uno status
          specifico, diritti e obblighi che sono descritti nelle Condizioni
          d'uso dei Venditori Pro, nelle Condizioni di vendita dei Venditori Pro
          e nella Guida dei Venditori Pro. In particolare, hanno obblighi
          fiscali sociali e specifici. I venditori professionisti sono
          identificati sul sito da un'icona "Pro" visualizzata accanto al loro
          nome, tuttavia l'icona non sarà visibile nel feed, ma solo nella
          pagina degli articoli e nel profilo. Solo gli Utenti registrati o gli
          Utenti Pro possono elencare articoli ed effettuare transazioni sul
          Sito.
        </Text>
        <Heading fontWeight="regular" fontSize="25px" mt="20px" mb="20px">
          COME REGISTRARSI SU Flea?
        </Heading>
        <Text>
          Tutti gli utenti possono registrarsi su Flea se rispettano le regole
          del catalogo. Inoltre, i singoli utenti devono essere maggiorenni o
          essere sorvegliati da un genitore/tutore quando utilizzano il sito.
          Gli utenti Pro possono registrarsi solo se soddisfano i criteri di
          idoneità descritti di seguito: - sei un'impresa individuale o
          un'organizzazione senza scopo di lucro (associazione ai sensi della
          legge francese del 1° luglio 1901 o fondazione), regolarmente
          registrata in Francia; - usi i servizi di Flea nel contesto della tua
          attività professionale (cioè agisci in veste professionale quando
          inserisci/vendi articoli o usi qualsiasi altro servizio di Flea); e -
          che tu rispetti le regole del catalogo e che offra articoli di seconda
          mano, così come che tu rispetti le limitazioni che ti vengono imposte
          e l'articolo che vendi (vedi di più in "QUALI TIPI DI ARTICOLI POSSONO
          ESSERE VENDUTI SU Flea").
        </Text>
      </Box>
    </Container>
  );
};

export default Flea;
