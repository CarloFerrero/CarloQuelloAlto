import { Box, Container, Heading, Text } from "@chakra-ui/react";

import CodePreview from "../components/codePreview";
/* eslint-disable no-useless-escape */
import React from "react";
import { getCurrentProject } from "../utils/currentProjext";
import { useLocation } from "react-router-dom";

const codesnippet = `var url = window.location.href;
var timezone = Intl.DateTimeFormat().resolvedOptions().timeZone;
// eslint-disable-next-line no-useless-escape
var webzone = url.match(/accessiway\.(com|de|at|fr)(\/it)?(\/.*)?$/);

var lang = {
  at: {
    timezone: "Europe/Vienna",
    id: "aut",
    domain: "at",
    description:
      "🌍 Wählen Sie die Sprache, in der Sie auf der Website navigieren möchten",
    flag: "https://global-uploads.webflow.com/62de46079c380cb0bfdab30a/631b440a3e54dc54ae58a32b_AT.svg",
    title: "Österreich",
  },
  de: {
    timezone: "Europe/Berlin",
    id: "deu",
    domain: "de",
    description:
      "🌍 Wählen Sie die Sprache, in der Sie auf der Website navigieren möchten",
    flag: "https://global-uploads.webflow.com/62de46079c380cb0bfdab30a/631899b0b103b86d28b71ffb_DE.svg",
    title: "Deutsch",
  },
  en: {
    timezone: "Europe/London",
    id: "eng",
    domain: "com",
    description: "🌍 Choose the language with which to navigate the site.",
    flag: "https://global-uploads.webflow.com/62de46079c380cb0bfdab30a/62deb5e7745e5ca4677d636e_GB.svg",
    title: "English",
  },
  fr: {
    timezone: "Europe/Paris",
    id: "fra",
    domain: "fr",
    description:
      "🌍 Choisissez la langue dans laquelle vous souhaitez naviguer sur le site.",
    flag: "https://global-uploads.webflow.com/62de46079c380cb0bfdab30a/62deb5e7b02da5bae7dfdb64_FR.svg",
    title: "Français",
  },
  it: {
    timezone: "Europe/Rome",
    id: "ita",
    domain: "com/it",
    description: "🌍 Scegli la lingua con cui navigare il sito.",
    flag: "https://global-uploads.webflow.com/62de46079c380cb0bfdab30a/62deb2973106d28fed129ee9_IT.svg",
    title: "Italiano",
  },
};

const hideBanner = () => {
  const redirectBanner = document.getElementById("redirect-bar");
  const redirectBannerMob = document.getElementById("redirect-bar-IT-mobile");
  redirectBanner?.remove();
  redirectBannerMob?.remove();
};

const redirectToLanguage = (lang) => {
  var zone = lang[lang];
  var newUrl = \`accessiway.\${zone.domain}\`;
  location.href = newUrl;
};

const showBanner = (id) => {
  const { id: countryId, domain } = lang[id];
  const countrycode = document.getElementById("countrycode") || {};
  const countrycodeMob = document.getElementById("countrycode_mobile") || {};
  const countrycodeText = document.getElementById("countrycode-text") || {};
  const countrycodeTextMob =
    document.getElementById("countrycode-text-mobile") || {};

  const elementsMap = new Map([
    ["it", document.getElementById("change-url-redirect-ita")],
    ["en", document.getElementById("change-url-redirect-eng")],
    ["de", document.getElementById("change-url-redirect-deu")],
    ["at", document.getElementById("change-url-redirect-aut")],
    ["fr", document.getElementById("change-url-redirect-fra")],
  ]);
  for (const [langCode, element] of elementsMap) {
    if (!element) continue;
    if (langCode === id) {
      element.remove();
      continue;
    }
    element.onclick = () => redirectToLanguage(langCode);
  }
  countrycode.src = lang[id].flag;
  countrycodeText.innerHTML = lang[id].title;
  countrycodeMob.src = lang[id].flag;
  countrycodeTextMob.innerHTML = lang[id].title;
};

const checkLanguage = () => {
  const zone = Object.keys(lang).find((k) => lang[k].timezone === timezone);
  const domain = lang[zone].domain;
  if (!zone) redirectToLanguage("en");
  if (webzone[1] + webzone[2] === "com/it" && domain === "com") {
    showBanner(zone);
  } else if (webzone[1] !== domain && webzone[1] + webzone[2] !== domain) {
    showBanner(zone);
  } else hideBanner();
};

checkLanguage();`;

const RedirectBanner = () => {
  let location = useLocation();
  const currentProject = getCurrentProject(location);
  return (
    <Container maxW="1200px" mt="30px">
      <Box maxW="650px" mb="30px">
        <Heading fontWeight="light">{currentProject.title}</Heading>
        <Text mt="10px">{currentProject.description}</Text>
      </Box>
      <CodePreview code={codesnippet} language="Javascript" />
    </Container>
  );
};

export default RedirectBanner;
