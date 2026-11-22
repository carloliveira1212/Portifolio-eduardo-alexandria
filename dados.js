/* ==========================================================================
   DADOS EDITÁVEIS DO SITE
   --------------------------------------------------------------------------
   Este é o único arquivo que você precisa mexer para atualizar contatos e
   projetos. O restante do site lê daqui.

   • Contatos  → aparecem no rodapé, no currículo e na página de contato.
   • Projetos  → alimentam os slides da página inicial, a página "Projetos"
                 e a lista do currículo. Para adicionar um projeto novo,
                 copie um bloco { ... } e altere os campos.

   Regra do projeto: só entra aqui informação verdadeira e verificável.
   ========================================================================== */

window.DADOS = {

  pessoa: {
    nome: "Eduardo Alexandria de Oliveira",
    nomeCompleto: "Carlos Eduardo Alexandria de Oliveira",

    telefone: "(85) 99872-4041",
    telefoneInternacional: "5585998724041",     // formato para links tel: e wa.me
    email: "carloalexandria1212@gmail.com",

    // Mensagem que já vem escrita quando alguém clica no botão do WhatsApp
    whatsappMensagem: "Olá, Eduardo! Vi o seu portfólio e gostaria de conversar.",

    // Deixe "url" vazio ("") enquanto não houver link: o texto aparece sem link.
    linkedin:  { texto: "Eduardo Alexandria", url: "" },
    instagram: { texto: "@carlosalexandria", url: "https://www.instagram.com/carlosalexandria" },
    youtube:   { texto: "Deslinguistimificando", url: "https://www.youtube.com/@deslinguistimificando" },

    // Endereço do portfólio anterior (aparece na seção "Projetos" do currículo)
    portfolioAnterior: "https://dev-carlosalexandria.vercel.app"

    // Data de nascimento: propositalmente NÃO exibida no site público.
    // dataNascimento: "29/10/2006"
  },

  /* Projetos — a ordem aqui é a ordem dos slides.
     Campos:
       id          identificador curto (usado no link #id da página Projetos)
       titulo      nome exibido
       categoria   "institucional" ou "educativo" (usado no filtro)
       tipo        rótulo curto sob o título
       url         endereço do site publicado
       imagem      caminho da imagem de pré-visualização (NÃO é link)
       imagemAlt   descrição da imagem para leitores de tela
       esquematica true = a imagem é uma ilustração e não uma captura real
       tom         matiz (0–360) que colore o slide quando ele está ativo
       resumo      1 frase (slides)
       descricao   texto completo (página Projetos)
       ficha       lista de [rótulo, valor] da ficha técnica
  */
  projetos: [
    {
      id: "fonogessy",
      titulo: "Fonoaudiologia Dra. Gessy",
      categoria: "institucional",
      tipo: "Site institucional multipágina",
      url: "https://fonogessy.com.br/",
      imagem: "fonogessy.svg",
      imagemAlt: "Prévia esquemática da página inicial do site da fonoaudióloga Dra. Gessy Coutinho Walter em tela de celular",
      esquematica: true,
      tom: 170,
      resumo: "Site de uma fonoaudióloga de Florianópolis (voz, fala e linguagem), com formulário que leva a mensagem pronta para o WhatsApp.",
      descricao: "Site institucional da fonoaudióloga Dra. Gessy Coutinho Walter, que atende em Ingleses, Florianópolis (SC). Apresenta as áreas de atuação (voz, fala e linguagem), informações sobre a profissional, motivos para procurar um fonoaudiólogo, horários, endereço com link para o mapa e um formulário cuja mensagem chega pronta no WhatsApp.",
      ficha: [
        ["Páginas", "Início, Artigos, Contatos, Avaliação, Formulário e Política de privacidade"],
        ["Recursos", "Formulário que envia a mensagem pronta para o WhatsApp, botão de WhatsApp, link para o Google Maps, botão para copiar o endereço"],
        ["Domínio", "Próprio (fonogessy.com.br)"]
      ]
    }
  ]
};
