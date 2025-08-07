const caixaPrincipal = document.querySelector(".caixa-principal");
const caixaPerguntas = document.querySelector(".caixa-perguntas");
const caixaAlternativas = document.querySelector(".caixa-alternativas");
const caixaResultado = document.querySelector(".caixa-resultado");
const textoResultado = document.querySelector(".texto-resultado");

const perguntas = [
    {
        enunciado: "Como deixar a agua mais limpa?",
        alternativas: [
            {
                texto: "evitando jogar lixo nos rios e mares ",
                afirmacao: "com mares mais saldaveis "
            },
            {
                texto: "jogando sujeira no rios",
                afirmacao: "limpos"
            }
        ]
    },
    {
        enunciado: "Numa pequena aldeia aninhada entre montanhas, vivia uma fonte mágica. Suas águas não apenas matavam a sede, mas também refletiam os sonhos daqueles que bebiam delas.",
        alternativas: [
            {
                texto: "Certo dia, um jovem chamado Luan, cansado da sua vida simples, bebeu da fonte e viu o reflexo de si mesmo como um grande explorador, navegando por mares distantes. Inspirado, ele se despediu da família e partiu em busca de aventuras..",
                afirmacao: "ar melhor "
            },
            {
                texto: "Enquanto Luan viajava, a fonte continuava a abençoar a aldeia. Uma jovem artista, ao beber de suas águas, viu-se pintando obras-primas que capturavam a beleza do mundo. Um velho agricultor, em sua vez, bebeu e viu suas colheitas crescendo mais fortes do que nunca, alimentando não só a sua família, mas toda a comunidade.",
                afirmacao: "vida melhor "
            }
        ]
    },
    {
        enunciado: "Anos se passaram e Luan, agora um homem experiente e cansado, decidiu retornar à sua aldeia. Ao se aproximar da fonte, ele não viu o reflexo do grande explorador que um dia sonhou ser. Em vez disso, viu o reflexo de todos aqueles que ele havia conhecido em sua jornada, todas as paisagens que havia visto e, por fim, o rosto de sua família, esperando por ele.",
        alternativas: [
            {
                texto: "Ele entendeu que a verdadeira magia da água não estava em realizar os sonhos de se tornar algo diferente, mas em mostrar a riqueza da jornada e a importância de onde se pertence. A água da fonte, em sua essência, era um espelho da vida, um lembrete de que cada gota, cada passo e cada sonho, por mais distante que pareça, está conectado à fonte de tudo.",
                afirmacao: "vida melhor."
            },
            {
                texto: "O retorno de Luan não marcou o fim de suas aventuras, mas sim o início de uma nova jornada. Ele percebeu que a fonte não era apenas um espelho, mas um coração pulsante, conectado a cada ser vivo na aldeia e além. A água que saciava a sede também nutria as árvores, que por sua vez, ofereciam sombra e alimento para os animais. Luan começou a entender a interconexão de tudo, a dança invisível da vida que a água orquestrava.",
                afirmacao: "civilizaçao melhor"
            }
        ]
    },
    {
        enunciado: "Ele dedicou seus dias a contar histórias. Não as de suas próprias aventuras, mas as da água: como ela viajava do céu em forma de chuva, escoava pelas rochas, e finalmente brotava da terra. Ele falava de como a água do rio era a mesma que as nuvens formavam e que, de alguma forma, todos os sonhos e reflexos que a fonte havia mostrado eram parte de um ciclo maior e mais belo, que se renovava a cada estação.",
        alternativas: [
            {
                texto: "Com o tempo, a pequena fonte se tornou um ponto de encontro. Não para que as pessoas buscassem sonhos, mas para que compartilhassem os seus. A água, antes vista como um meio para um fim, era agora celebrada como a própria fonte da vida e da comunidade. Luan, o explorador, se tornou o contador de histórias, e a fonte, o coração da aldeia, pulsando com a sabedoria de que a verdadeira magia reside na simples e profunda dádiva da água, unindo a todos em um fluxo contínuo de existência.",
                afirmacao: "sem sujeira"
            },
            {
                texto: "Com o tempo, a pequena fonte se tornou um ponto de encontro. Não para que as pessoas buscassem sonhos, mas para que compartilhassem os seus. A água, antes vista como um meio para um fim, era agora celebrada como a própria fonte da vida e da comunidade. Luan, o explorador, se tornou o contador de histórias, e a fonte, o coração da aldeia, pulsando com a sabedoria de que a verdadeira magia reside na simples e profunda dádiva da água, unindo a todos em um fluxo contínuo de existência..",
                afirmacao: "sem lixo!"
            }
        ]
    },
    {
        enunciado: "À medida que o tempo passava, a fonte se tornou mais do que apenas um ponto de encontro. Ela era um santuário de memórias, onde os mais velhos compartilhavam as histórias que a água havia testemunhado e as crianças brincavam, imaginando as aventuras que seus reflexos pudessem esconder. Luan, agora com os cabelos brancos, sentava-se à beira da fonte, e com um sorriso sereno, observava a vida fluir. Ele sabia que a verdadeira magia da água era o seu poder de conectar o passado, o presente e o futuro em um único fluxo, um ciclo eterno de dar e receber. ",
        alternativas: [
            {
                texto: "A aldeia, agora próspera e feliz, nunca se esqueceu da lição de Luan e da fonte. Eles cuidavam da água com o mesmo carinho com que cuidavam uns dos outros. A água, em sua infinita sabedoria, continuou a fluir, não mais para mostrar sonhos distantes, mas para lembrá-los que a maior aventura de todas era a jornada da vida, e que a maior riqueza era o rio de amor e comunidade que os unia, gota por gota, para sempre",
                afirmacao: "vida boa."
            },
            {
                texto: "E assim, Luan, o explorador, tornou-se o guardião da fonte, compartilhando com as novas gerações a lição que a água lhe ensinou: o maior tesouro não está nos sonhos que perseguimos, mas nas memórias que criamos ao longo do caminho.",
                afirmacao: "qualidade de vida melhor. "
            }
        ]
    },
];


let atual = 0;
let perguntaAtual;
let historiaFinal = "";

function mostraPergunta() {
    if (atual >= perguntas.length) {
        mostraResultado();
        return;
    }
    perguntaAtual = perguntas[atual];
    caixaPerguntas.textContent = perguntaAtual.enunciado;
    caixaAlternativas.textContent = "";
    mostraAlternativas();
}

function mostraAlternativas(){
    for(const alternativa of perguntaAtual.alternativas) {
        const botaoAlternativas = document.createElement("button");
        botaoAlternativas.textContent = alternativa.texto;
        botaoAlternativas.addEventListener("click", () => respostaSelecionada(alternativa));
        caixaAlternativas.appendChild(botaoAlternativas);
    }
}

function respostaSelecionada(opcaoSelecionada) {
    const afirmacoes = opcaoSelecionada.afirmacao;
    historiaFinal += afirmacoes + " ";
    atual++;
    mostraPergunta();
}

function mostraResultado() {
    caixaPerguntas.textContent = "Em 2049...";
    textoResultado.textContent = historiaFinal;
    caixaAlternativas.textContent = "";
}

mostraPergunta();
