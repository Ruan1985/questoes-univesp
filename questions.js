// Banco de questões. Para adicionar uma prova nova, acrescente objetos em QUESTIONS.
// Campos: id, ano, n (nº na prova), tema, d (dificuldade 1-3), t (chave em TEXTOS, opcional),
// ctx (texto de apoio próprio, opcional), img (lista de arquivos da pasta img/, opcional),
// semFigura (true = depende de imagem que não está no app),
// q (enunciado), a (5 alternativas A-E), r (índice da correta, 0=A), exp (explicação, opcional).

const TEXTOS = {
  // ----- Prova 2024 -----
  esferas: "No sul da Costa Rica, está conservada uma série de pedras esféricas entre 0,7 e 2,5 metros de diâmetro, cuja fabricação, utilização e significado são um mistério para os arqueólogos. As esferas são surpreendentes pela perfeição de suas formas, quantidades e tamanhos; e é por essa razão que, desde 2014, fazem parte da lista do patrimônio cultural mundial.",
  bosi: "Entre 1930 e 1945/50, grosso modo, o panorama literário apresentava, em primeiro plano, a ficção regionalista, o ensaísmo social e o aprofundamento da lírica moderna no seu ritmo oscilante entre o fechamento e a abertura do eu à sociedade e à natureza. Afirmando-se lenta, mas seguramente, vinha o romance introspectivo. […] A sua paisagem nos é familiar: o Nordeste decadente, as agruras das classes médias no começo da fase urbanizadora, os conflitos internos da burguesia entre provinciana e cosmopolita (fontes da prosa de ficção). Para a poesia, a fase 30/50 foi universalizante, metafísica, hermética, ecoando as principais vozes da “poesia pura” europeia de entreguerras.\n\n(Alfredo Bosi. História concisa da Literatura Brasileira, 2017. Adaptado)",
  acotirene: "Acotirene e Aqualtune (Séc. XVII / Pernambuco)\n\nA presença e a liderança feminina em Palmares surgem descritas na “Relação das guerras feitas aos Palmares de Pernambuco no tempo do governador d. Pedro de Almeida” – uma memória sobre as incursões realizadas entre 1675 e 1678, em que aparecem definições de “distintos Palmares”.\n\nCerca de vinte léguas da vila de Porto Calvo, havia o Mocambo de Acotirene, QUE aparece também grafado “Arotirene”. A trinta léguas de Porto Calvo, a noroeste, havia a Cerca de Aqualtune, que seria “o nome da mãe do rei”, que vivia em “mocambo fortificado”.\n\nAcotirene e Aqualtune, assim como as expressões “rainha”, “fêmeas” e “negras”, parecem resumir a presença feminina palmarista.\n\nA preocupação das autoridades coloniais com as mulheres em Palmares – apesar da pequena referência a nomes próprios – está registrada nas polêmicas que surgiram sobre como proceder com as prisioneiras. Considerava-se que, após a captura, elas deviam ser exterminadas ou vendidas e mandadas para bem longe.\n\nCaetano de Melo e Castro (1680 – 1718), ao dar a notícia sobre o sucesso dos ataques a Palmares, destacou que as mulheres negras que “chegaram a ter aquela liberdade” deveriam ser mesmo enviadas para fora da capitania, senão todos ali ficariam “menos seguros”.\n\nAlém de combaterem lado a lado com os homens, uma série de mulheres exercia, com frequência, funções logísticas significativas, transportando alimentos, pólvora e armamentos, bem como cuidando de feridos e transferindo-OS para lugares seguros. Ademais, é possível supor que, em certos mocambos, a população feminina fosse maior do que a documentação tem até hoje apontado. Como estratégia, alguns quilombolas podem ter mantido suas mulheres e crianças em locais mais seguros, em acampamentos afastados, onde dificilmente seriam encontradas pelas expedições de captura. Se a história colonial silenciou sobre SEUS nomes, não pode evitar falar de seus atos e papéis dentro das comunidades palmarinas.\n\n(Enciclopédia Negra. Companhia das Letras, 2021. Adaptado)",
  pai: "Pai\n\nDescobri\num velho pedaço de papel\ncom sua letra\n\nNesses traços\na sombra da sua mão\nainda está se mexendo\n\nÉ só um velho pedaço de papel\nmas nele você ainda\nconsegue conjugar\nos verbos na primeira pessoa\n\n(Leonardo Gandolfi. Piauí, n. 208, janeiro de 2024)",
  habitos: "How Long Does It Really Take to Form a Habit? (Jocelyn Solis-Moreira, January 24, 2024)\nThere’s a myth that it takes 21 days to form a habit. Experts explain why it might take some people longer – or shorter.\n\nWaking up at the crack of dawn and going for a run might feel intimidating when you start trying to make it a habit. Weaving a significant new activity such as this into your regular routine obviously takes determination and time – but how much time is really needed to make that habit stick?\n\nOne popular idea suggests that it takes 21 days to solidify a habit. A three-week time frame might sound easily REACHABLE to someone making a resolution on New Year’s Day, when people tend to feel extra motivated to start a new habit or kick an old one, says Colin Camerer, a behavioral economist at the California Institute of Technology who has conducted research on habit formation. Yet every January 21 very few people can boast that they have kept their resolutions. One survey showed that only 9 percent of people actually stuck to their goals in 2023.\n\nEveryone has a unique habit-building timeline – and no matter how long it is for any individual, repetition is the key to making it work, explains Phillippa Lally, a senior lecturer in psychology and the co-director of the Habit Application and Theory group at the University of Surrey in England. Both Lally and Camerer suggest various individualized ways to reinforce healthy behaviors and to eventually turn a wholesome task into an unconscious habit.",
  atomos: "Os primeiros a imaginarem a existência dos átomos foram os filósofos gregos Leucipo e Demócrito em, aproximadamente, 450 a.C. Nesse modelo, tudo seria formado por minúsculas partículas indivisíveis. Daí a origem do nome “átomo”, que vem do grego a- (não) e -tómos (parte). Entretanto, essas ideias não puderam ser comprovadas na época, constituindo-se apenas como hipóteses.\n\nAlguns cientistas passaram a realizar testes experimentais cada vez mais precisos graças aos avanços tecnológicos. Com isso, não só se descobriu que tudo era realmente formado por minúsculas partículas, mas também foi possível entender cada vez mais sobre a estrutura atômica.\n\nEm 1911, um cientista neozelandês realizou um experimento no qual ele bombardeou uma finíssima lâmina de ouro com partículas alfa emitidas por uma amostra de polônio (²¹⁰₈₄Po), que ficava dentro de um bloco de chumbo com um pequeno orifício pelo qual as partículas passavam. Baseado nos resultados desse experimento, o cientista percebeu que, na verdade, o átomo não seria maciço como propuseram os modelos anteriores. Para ele, o átomo é descontínuo e é formado por duas regiões: o núcleo e a eletrosfera. O núcleo é denso e tem carga positiva, ou seja, é constituído de prótons. A eletrosfera é uma grande região vazia, onde os elétrons ficam girando ao redor do núcleo.",
  amonia: "A amônia é matéria-prima para um número elevado de aplicações. Entre elas, destaca-se seu uso na fabricação de fertilizantes, como os nitratos, a ureia e os fertilizantes fosfatados, que incrementam significativamente a produtividade da agricultura.\n\nO principal método de produção industrial de amônia é a combinação direta entre nitrogênio e hidrogênio, em um ambiente de pressão e temperatura elevadas, no qual o ferro é utilizado para acelerar o processo. Em homenagem aos desenvolvedores Fritz Haber e Carl Bosch, esse método foi batizado como Haber-Bosch.\n\nA reação descrita é: N₂(g) + 3 H₂(g) ⇌ 2 NH₃(g)",
  // ----- Prova 2023 (2º semestre) -----
  santa: "Santa com a base marcada (Jarid Arraes. Redemoinho em dia quente, 2019. Trecho)\n\nNuma das tardes de trabalho, domingo, depois da missa da manhã, um homem entrou na Igreja e começou a tentar mover os bancos. Grunhia na empurração, mas não conseguia tirá-los do lugar. Repetia alguma coisa sobre abrir espaço, sobre precisar de espaço. Carolina logo viu que se tratava de um louco.\n[...]\nO fato é que Carolina, que prestava atenção na Virgem Maria, começou a reparar que os olhos da Santa estavam chorando também. Junto com o doido, a Santa também derramava lágrimas.\n[...]\nNão dava pra ficar ajoelhada vendo a Santa chorar. Começou a tirar fotos e fazer vídeos com o celular. Diriam que era tudo montagem, mas era uma evidência a mais.\n[...]\nO homem ficou de pé, apontou pra Santa, abaixou os braços. Olhou pra Carolina por alguns segundos, apontou pra Santa de novo.\nMeu Deus, que homem louco.\n— A Santa está com pena de mim.\n— Tá, mas por quê? Tá com pena de quê? E por que ela só tem pena de você? Não tem mais gente pra ela sentir pena?\n[...]\nCarolina suspirou.\nNão adianta discutir com doido, a questão é essa estátua chorando. Tá chorando, eu tô vendo. Vou deixar esse homem rezando e vou chamar mais gente.\n— Fica aí, viu? Eu vou chamar mais gente pra ver a Santa.\n— Ninguém vai acreditar em você.\n— Eu vou chamar mesmo assim.\nSaiu correndo, abriu as portas que davam pra frente do altar. Viu uma senhorinha caminhando devagar pela calçada perto da Igreja e foi até ela. Com muito jeito, muito mesmo, que era pra não ser vista como doida, explicou a situação.",
  itamar: "Venha até São Paulo (Itamar Assumpção. Pretobrás: por que que eu não pensei nisso antes?, 2006. Trecho)\n\nVenha até São Paulo ver o que é bom pra tosse\nvenha até São Paulo dance e pule o rock and rush\nentre no meu carro vamos ao largo do Arouche\nLiberdade é bairro mas é como Japão fosse\n\nVenha nesse embalo concrete fax telex\nigreja praça da Sé faça logo sua prece\nquem vem pra São Paulo, meu bem, jamais se esquece\nnão tem intervalo tudo depressa acontece\n\nVai e vem e tchan e tchun êta sobe e desce\ngente do nordeste do norte aqui no sudeste\nbatalhando nesse mundaréu de mundo que só cresce\nque só carece\nque só carece que só cresce",
  balada: "Balada real (Celina Ferreira, 2020. Trecho)\n\nTendes castelo, mais nada.\nNem por isso vós sereis\no dono de minha vida:\nVivo tranquila sem reis.\n\nTendes castelo, afirmais\ne não me convencereis.\nNão vos presto vassalagem,\nnão sou amiga de reis.",
  turismo: "There are many positive aspects to tourism. Around two billion people travel each year for tourism purposes. Travel and tourism connect people and bring the world closer through shared experiences, cultural awareness and community building. It provides jobs, encourages regional development, and is a key driver for socio-economic progress.\n\nBut there is often a downside. Many popular destinations are threatened by increasing pollution, environmental risks, damage to heritage sites and overuse of resources. And that’s without factoring the pollution caused by travel to and from these destinations.\n\nSo, with that in mind here are two tips that will help you to enjoy your trip, and leave with the confidence that your favoured tourist destination will not be damaged by your presence, once you return home:\n\n1. Many of us are switching to sustainable options in our daily lives, and we can take the same attitude when we’re on the road. By choosing reusable bottles and bags wherever you go, you can help ensure there is less plastic waste in the ocean and other habitats.\n\n2. On the whole, tourists use far more water than local residents. With a growing number of places experiencing water scarcity, the choices you make can help ensure people have adequate access to water in the future. By foregoing a daily change of sheets and towels during hotel stays, we can save millions of litres of water each year.\n\n(UN News, 08.10.2022. Adaptado)",
  // ----- Prova 2022 (2º semestre) -----
  duvivier: "Uma mesma canção do Caetano Veloso poderá ninar seus filhos, orientar seu Carnaval e assombrar você pelo resto da sua existência. Não consigo ouvir a palavra “impávido” sem emendar em Mohammed Ali.\n\nO poeta Manuel Bandeira disse que elegeria “tu pisavas nos astros, distraída” o verso mais bonito da língua portuguesa. Caetano transformou-o no segundo verso mais bonito, ao escrever: “tropeçavas nos astros, desastrada”, forçando toda uma geração de poetas à aposentadoria.\n\nCom Caetano descobri que o antropólogo Claude Lévi-Strauss detestou a baía de Guanabara, e que Hollywood quer dizer Azevedo, que a coisa mais certa de todas as coisas não vale um caminho sob o sol, que os átomos todos dançam e coragem grande é poder dizer sim, que cantar é mais do que lembrar.\n\nUma coisa bela é uma alegria pra sempre, dizia o poeta inglês John Keats, que também disse, sobre um vaso grego, em tradução de Augusto de Campos: “quando a idade apagar toda a atual grandeza / Tu ficarás, em meio às dores dos demais”. Keats, coitado, nasceu 2.000 anos depois do vaso. Não viu sua musa ser pintada. Estar vivo ao mesmo tempo que Caetano nos dá essa sorte: a de presenciar o espetáculo do nascimento das coisas eternas.\n\n(Gregório Duvivier. Folha de S.Paulo, 12.10.2022. Adaptado)",
  consideracao: "Consideração do poema (1ª estrofe)\n\nNão rimarei a palavra sono\ncom a incorrespondente palavra outono.\nRimarei com a palavra carne\nou qualquer outra, que todas me convêm.\nAs palavras não nascem amarradas,\nelas saltam, se beijam, se dissolvem\nno céu livre por vezes um desenho,\nsão puras, largas, autênticas, indevassáveis.\n\n(Carlos Drummond de Andrade. A rosa do povo)",
  classicismo: "Constitui um movimento em que se tornou moda a supervalorização dos escritores da Antiguidade greco-latina. Integrado no Humanismo e na Renascença, o movimento se espraiou pela Europa, ao longo dos séculos XV e XVII.\n\nImpulsionados pelas teorias estéticas defendidas pelos Antigos (Poética, de Aristóteles, Arte Poética, de Horácio, entre outras) os partidários desse movimento entendiam que a obra literária deveria obedecer aos cânones implícitos ou explícitos nos textos greco-latinos. A imitação dos Antigos constituía, pois, o princípio básico dos adeptos do movimento. Todavia, consideravam que a imitação não significava servilismo, cópia elementar; antes, pressupunha o talento individual, a inspiração e a imaginação.\n\n(Massaud Moisés. Dicionário de termos literários, 1988. Adaptado)",
  nz: "New Zealand will ban the sale of tobacco to its next generation, in a bid to eventually phase out smoking. Anyone born after 2008 will not be able to buy cigarettes or tobacco products in their lifetime, under a law expected to be enacted in 2022. “We want to make sure young people never start smoking,” Health Minister Dr Ayesha Verall said. The move is part of a sweeping crackdown on smoking announced by New Zealand’s Health Ministry.\n\nDoctors and other health experts in the country have welcomed the “world-leading” reforms, which will reduce access to tobacco and restrict nicotine levels in cigarettes. “It will help people quit smoking or switch to less harmful products, and make it much less likely that young people get addicted to nicotine,” said Prof Janet Hook from the University of Otago.\n\nThe crackdown has been met with mixed reactions. “I reckon it’s a good move, really,” one man told Reuters news agency. “Because right now there’s a lot of young kids walking around with smokes in their mouth. Public are asking how they’re getting these smokes. And it’s also good for myself too because I can save more money.”\n\nHowever, others have warned that the move may create a black market for tobacco — something the Health Ministry’s official impact statement does acknowledge, noting “customs will need more resource to enforce border control”. “This is all 100% theory and 0% substance,” Sunny Kaushal, chairman of the Dairy and Business Owners Group, a lobby group for local convenience stores, told New Zealand’s Stuff news site. “There’s going to be a crime wave. Gangs and criminals will fill the gap.”\n\n(BBC, 09.12.2021. Adaptado)",
  // ----- Prova 2021 (2º semestre, Eixo de Computação) -----
  morozov: "Já é quase um clichê afirmar que “dados são o petróleo do século XXI”. Há muito a criticar nessa definição. Para começar, a forma como produzimos dados é muito diferente daquela como a natureza produz seus recursos. Mas esse chavão, por mais desgastado que esteja, acerta em um ponto, ao levar em conta a escala da transformação digital que se encontra à nossa frente.\n\nNão surpreende o surgimento de um nicho de consultorias digitais e de gurus tecnológicos, os quais insistem na ideia de que uma sociedade detentora de tantos dados vai acabar solucionando todas as contradições que o sistema capitalista global não consegue resolver por conta própria: ao nos proporcionar trabalhos flexíveis e bem remunerados; ao punir os participantes deletérios do mercado por meio de mecanismos de autocorreção instantâneos; ao introduzir eficiência e sustentabilidade onde antes não havia – e tudo isso graças a aparatos inteligentes.\n\nTodas essas previsões podem ter seu fundo de verdade, mas certamente essa não é a única lição a extrair da comparação entre dados e petróleo. Cabe lembrar que a história do petróleo no século XX também se caracteriza pela violência, por pressões corporativas, guerras incessantes e desnecessárias, derrubada de regimes democráticos na expectativa de assegurar o controle de recursos estratégicos, aumento da poluição e alterações climáticas. Se os dados são o petróleo do século XXI, quem vai ser o Saddam Hussein deste século?\n\nConsiderar essa questão nos dias de hoje pode parecer não só excessivamente sarcástico, como também ridículo. Mas não precisaria ser assim: deveria ser óbvio o fato de que os dados — e os serviços de inteligência artificial que eles ajudam a estabelecer — vão se constituir em um dos terrenos cruciais dos embates geopolíticos deste século. Até agora, os principais competidores são bem conhecidos — os Estados Unidos e a China, os dois países com setores tecnológicos mais avançados —, mas é bem provável que outros, como a Rússia e a Índia, vão buscar um lugar no pelotão de frente, no mínimo movidos pelo temor de uma dependência excessiva de serviços digitais estrangeiros.\n\n(Evgeny Morozov. Big Tech: a ascensão dos dados e a morte da política, 2018)",
  bioplastic: "(1º parágrafo) Believe it or not, the sequins (small plates of shining metal or plastic used for ornamentation, especially on clothing) on this dress are made from 100% bioplastic. Now you might be thinking, what is bioplastic? In this case, bioplastic might be the answer to one of fashion’s most prevalent plastic waste sins: sequins.\n\n(2º parágrafo) In a wider context, instead of relying on petroleum based fossil fuels as its key component (like traditional plastic), bioplastic is created from renewable materials. Like all trees and plants, algae sequesters carbon from the atmosphere. Creating bioplastic from this carbon reservoir results in a product that is carbon neutral. Heat is used to bind the algae together to form the bioplastic. This is then poured into moulds which become sheets. Once cooled, the sheets of bioplastic are finally cut into sequins.\n\n(3º parágrafo) There are many advantages to bioplastic. Perhaps the most obvious is algae, which unlike fossil fuels, is not a scarce resource. Bioplastics also degrade far more quickly, taking 3 to 6 months to decompose fully compared to the hundreds of years regular plastic requires. The carbon released by bioplastic as it decomposes is also equal to the carbon absorbed by the organic material it was made from, so the overall impact on the environment is close to zero.\n\n(4º parágrafo) There are some downsides to bioplastic, however. If not disposed of properly, bioplastic can end up in landfill, where deprived of oxygen, the substance could produce methane as it breaks down – a far more formidable greenhouse gas than CO₂.\n\n(5º parágrafo) As promising and forward thinking as these fashion initiatives are, it will take an adjustment of infrastructure to make sure the environment feels the full benefit of bioplastic. With the bioplastic market set to be worth $44 billion by 2022, perhaps that change isn’t a pie in the sky.\n\n(www.globalcitizen.org, 11.03.2021. Adaptado)",
  // ----- Prova 2020 -----
  rubiao: "CAPÍTULO XXIX (Quincas Borba, Machado de Assis)\n\nRUBIÃO passou o resto da manhã alegremente. Era domingo; dois amigos vieram almoçar com ele, um rapaz de vinte e quatro anos, que roía as primeiras aparas dos bens da mãe, e um homem de quarenta e quatro ou quarenta e seis, que não tinha que roer.\n\nCarlos Maria chamava-se o primeiro, Freitas o segundo. Rubião gostava de ambos, mas diferentemente; não era só a idade que o ligava mais ao Freitas, era também a índole deste homem. Freitas elogiava tudo, saudava cada prato e cada vinho com uma frase particular, delicada, e saía de lá com as algibeiras cheias de charutos, provando assim que os preferia a quaisquer outros. Tinha-lhe sido apresentado em certo armazém da Rua Municipal, onde jantaram uma vez juntos. Contaram-lhe ali a história do homem, a sua boa e má fortuna, mas não entraram em particularidades. Rubião torceu o nariz; era naturalmente algum náufrago, cuja convivência não lhe traria nenhum prazer pessoal nem consideração pública. Mas o Freitas atenuou logo essa primeira impressão; era vivo, interessante, anedótico, alegre como um homem que tivesse cinqüenta contos de renda.",
  brincar: "Semana Mundial do Brincar (Adaptado) – O que é?\n\nÉ uma mobilização que reúne diferentes atores, como pais, educadores, médicos, comunicadores, instituições privadas, representantes de instituições governamentais, entre outros. Juntos, realizamos um conjunto de ações com o objetivo de ressaltar a importância do Brincar na sociedade.\n\nO foco é lembrar os adultos sobre a necessidade de preservação e o respeito do tempo das crianças brincarem. Cada vez mais vemos famílias que, por não poderem ter um tempo de qualidade com seus filhos, compram vídeos, jogos eletrônicos entre outras coisas e passam menos tempo ao lado deles.\n\nChamamos de tempo de qualidade aquele que os adultos passam com as crianças, quando eles estão presentes com atenção e com amorosidade. Trata-se da presença atenta à intermediação, quando necessária, quando solicitada. Nada mais.\n\n(Fonte: Semana Mundial do Brincar)",
  nodiff: "NO DIFFERENCE\n\nSmall as a peanut,\nBig as a giant,\nWe’re all the same size\nWhen we turn off the light.\n\nRich as a sultan,\nPoor as a mite,\nWe’re all worth the same\nWhen we turn off the light.\n\nRed, black or orange,\nYellow or white,\nWe all look the same\nWhen we turn off the light\n\nSo maybe the way\nTo make everything right\nIs for God just reach out\nAnd turn off the light!\n\n(Shel Silverstein. Where the Sidewalk Ends, 1974)",
  poverty: "The End of Poverty\n\nEquality is a very big idea, connected to freedom, but an idea doesn’t come for free. In a world where distance no longer determines who your neighbor is, paying the price for equality is not just heart, it’s smart. The destinies of the “haves” are intrinsically linked to the fates of the “have-nothing-at-alls”. If we didn’t know this already, it became too clear on September 11, 2001. Africa is not the front line in the war against terror, but it soon could be.\n\n“The war against terror is bound up in the war against poverty.” Who said that? Not me. Not some beatnik peace group. Secretary of State Colin Powell. And when a military man starts talking like that perhaps we should listen. In tense, nervous times isn’t it cheaper – and smarter – to make friends out of potential enemies than to defend yourself against them?\n\nWe could be the first generation to outlaw the kind of extreme, stupid poverty that sees a child die of hunger in a world of plenty, or of a disease preventable by a twenty-cent inoculation. We are the first generation that has enough power to do that. The first generation that is powerful enough to unknot the whole tangle of bad trade, bad debt, and bad luck. The first generation that can end a corrupt relationship between the powerful and the weaker parts of the world which has been so wrong for so long.\n\nIf the rich nations decided they could become slightly “poorer”, they would truly help the nations in need. If they agreed to write off the old debts of the poor countries, the whole world would be safer. This year millions of people gathered to persuade world leaders to invest more in fighting poverty and disease in Africa.\n\nWe cannot save every life. But the ones we can, we must. It is – or it ought to be – unacceptable that an accident of longitude determines whether a child lives or dies. Fifteen thousand people dying needlessly every day from AIDS, TB, and malaria. Behind each of these statistics is someone’s daughter, someone’s son, a mother, a father, a sister, a brother.\n\nThis is Africa’s crisis. That it’s not on the nightly news, that we do not treat this as an emergency – that’s our crisis.\n\n(Adapted from Bono’s foreword to The End of Poverty, Jeffrey Sachs)",
  // ----- Prova 2019 (2º semestre) -----
  purpose: "PEOPLE WITH A SENSE OF PURPOSE LIVE LONGER, STUDY SUGGESTS (Newsweek, by Kashmira Gander, 5/24/19)\n\n(1º parágrafo) People who have a sense of purpose in life appear to live longer, according to the latest research linking this outlook to a person’s quality of life and to better physical and mental health.\n\n(2º parágrafo) The authors of the study published in the journal JAMA Network Open looked at data collected from 6,985 adults who were signed up to the Health and Retirement Study on people ages 50 and above in the US. The team looked at a group who completed a questionnaire in 2006 about their purpose in life, and used it to come up with a score. On average, the participants were 68.6 years old. Next, the scientists looked at causes of death in the group between 2006 and 2010. Variables included their demographic, marital status, race and education level. Lifestyle choices like smoking and drinking were also noted.\n\n(3º parágrafo) Purpose was defined by the authors as a self-organizing life aim that stimulates goals, promotes healthy behaviors and gives meaning to life.\n\n(4º parágrafo) The data revealed that the stronger the participants felt they had a purpose in life, the lower their risk of dying. This result remained even when the scientists adjusted their calculations for factors that could affect their score, such as a participants’ sociodemographic status and their health.\n\n(5º parágrafo) But scientists don’t know why there seems to be a link between purposefulness and the length of life. One explanation is that the attitude and overall well-being could prevent genes linked with inflammation from being expressed in the body. Meanwhile, lacking a purpose could dampen a person’s motivation to be healthy and active, the authors suggested.\n\n(6º parágrafo) Andrew Oswald, a professor of economics and behavioral science at the University of Warwick, in the U.K., who studies human happiness, told Newsweek: “It is as though the mind and body can draw on a pool of immune responses, and a healthy mind allows the body more immune response, in some way that we simply do not understand in 2019. Remarkably, a number of studies seem to show that happy people and people with a sense of purpose live longer.”",
  editor: "Prezado senhor,\n\nLemos seus originais com interesse, a despeito da aridez do tema. Aliás, o título vem bem a calhar nesse momento de crise hídrica pelo qual passa o planeta (hahahaha). Julgamos, porém, que a narrativa ganharia se, ao final, oferecesse alguma possibilidade de redenção. É muita desgraça. Aqueles coitados sofrem o tempo todo, o leitor não tem nem um momento de trégua, é só ziquizira. Tanto pessimismo afasta as pessoas, acredite em nós, temos experiência no ramo. Nosso departamento comercial encomendou inúmeras pesquisas e os resultados foram eloquentes: ninguém, absolutamente ninguém quer saber de adversidade. De amarga basta a vida, como diz o outro. E mais: morte de animal extrapola qualquer limite.\n\nPelo menos o caçula poderia se sair bem, abrindo um negócio no Sul, não? Ah, justamente: O Menino Mais Novo. Eis outro ponto a ser considerado: a ausência de nome dos filhos do protagonista. Se até a cadela Baleia, que Deus a tenha, é nomeada, por que o senhor condenou os meninos ao anonimato? Teria sido esquecimento?\n[...]\nBoa sorte!\n\n(Maria Emília Bender, Se Nos Permite Uma Sugestão. piauí, 115. Adaptado)",
  drummond19: "Poesia\n\nGastei uma hora pensando um verso\nque a pena não quer escrever.\nNo entanto ele está cá dentro\ninquieto, vivo.\nEle está cá dentro\ne não quer sair.\nMas a poesia DESTE momento\ninunda minha vida inteira.\n\nProcura da Poesia\n\nNão faças versos sobre acontecimentos.\nNão há criação nem morte perante a poesia.\nDiante dela, a vida é um sol estático,\nnão aquece nem ilumina.\nAs afinidades, os aniversários, os incidentes pessoais não contam.\nNão faças poesia com o corpo,\nESSE excelente, completo e confortável corpo, tão infenso à efusão lírica.\n[...]\n\n(Carlos Drummond de Andrade. Nova Reunião)\nGlossário: infenso = em oposição a, contrário, hostil; efusão = manifestação expansiva de sentimentos, de afetos, de alegria.",
  mulher: "O apagamento da mulher na história e/ou a diminuição do seu papel eram tidos como “naturais” e só, e passaram a ser percebidos como problema há pouco tempo. Uma situação da qual nos damos conta aos poucos, percebendo que, nos relatos oficiais, nós, as mulheres, sumimos e, quando mencionadas, aparecemos apenas em papéis coadjuvantes – amantes, esposas, mães, enfim, como um detalhe pitoresco e de menor relevância da narrativa.\n[...]\nMesmo em relação à Revolução Francesa, detalhada, descrita e narrada ad nauseam nos últimos duzentos anos, raramente se menciona a existência de Olympe de Gouges, que em 1791 escreveu a Declaração dos Direitos da Mulher e da Cidadã, além de peças teatrais que explicavam os princípios da Revolução Francesa à enorme massa de analfabetos, nem Sophie de Condorcet e tantas outras.\n\nDesse jeito ficamos sem acesso a uma parte importante da nossa memória, das origens que nos constituíram enquanto sociedade, porque pouco ou nada conhecemos sobre figuras como Dandara dos Palmares, Luísa Mahin, Mariana Crioula, Myrthes Campos, Alzira Soriano, Nísia da Silveira. Ou então são desqualificadas como figuras tristes, loucas ou más. Essa desqualificação, aliás, é uma constante.\n\nUm país que nasceu de um decreto assinado por uma mulher, onde a escravidão foi extinta por lei assinada também por uma mulher, a primeira escola pública gratuita foi instituída por uma mulher, a primeira greve geral foi iniciada por mulheres, operárias da indústria têxtil de São Paulo, não tem como contar sua história por inteiro excluindo as mulheres da narrativa e dos registros oficiais.",
  // ----- Prova 2018 (2º semestre) -----
  marvel: "Marvel criará primeiro super-herói chinês protagonista em HQs\n\nA Marvel vai criar, em parceria com a chinesa NetEase, o primeiro super-herói chinês a estrelar nos quadrinhos. Até hoje a empresa que pertence à Disney só mostrou chineses em papéis secundários, como Benedict Wong, de Doutor Estranho, e o vilão Mandarim, em Homem de Ferro.\n\nA franquia criadora de Homem-Aranha e X-Men, porém, já arrecadou US$ 1,175 bilhão na China com suas adaptações para o cinema. Por esse e por outros motivos, a ideia é que a parceria das empresas não fique só nas HQs, mas futuramente se transforme em outros produtos, como livros e jogos.\n\n(Revista Galileu. 11.07.2017. Adaptado)",
  midia: "A cultura de massa que temos está umbilicalmente conectada com a pauta apresentada instante a instante em algum dos veículos de comunicação em massa. Nada lhe escapa e, por isso mesmo, enorme é sua responsabilidade na criação da geração-consumo que temos “em nós” e também “diante de nós”. Tendo como cenário as mudanças climáticas, a degradação ambiental e os extremos corrosivos da riqueza e da pobreza, a transformação de uma cultura de consumismo irrestrito para uma cultura de sustentabilidade ganhou força em grande parte graças aos esforços das organizações da sociedade civil e agências governamentais no mundo inteiro. A par com essas forças, e mesmo permeando-as, temos o poder de influência e onipresença da mídia.\n\n(Washington Araujo. Observatório da imprensa, nº 623. 04.01.2011)",
  til: "Era ela de pequena estatura e tão delgada e flexível no talhe, que dobrava-se como o junco da várzea. As formas da graciosa pubescência, que um corpinho justo debuxaria em doce e palpitante relevo, as dissimulava o frouxo corte de uma jaqueta de flanela escarlate com mangas compridas, e desabotoada sobre um camisote liso, cujos largos colarinhos se rebatiam sobre os ombros, à feição dos que usavam então os meninos de escola.\n\nOs grandes olhos, negros, claros e serenos, como um lago cristalino imerso na sombra, não podiam negar que fossem de mulher: tinham a diáfana profundidade do céu, cheia de enlevos e mistérios.\n\nA boca mimosa e breve, conhecia-se que fora vazada no molde do beijo e do sorriso. Mas quando o brinco iluminava essa fisionomia, e o capricho quebrava-lhe a harmonia das linhas do suave perfil, era cobrir-se com a máscara do rapazinho estouvado, que ela teria sido sem dúvida, se a natureza não lhe trocasse o destino.\n\n(José de Alencar. Til)\nNotas: debuxaria = mostraria; diáfana = transparente, límpida.",
  saobernardo: "Conforme declarei, Madalena possuía um excelente coração. Descobri nela manifestações de ternura que me sensibilizaram. E, como sabem, não sou homem de sensibilidades. É certo que tenho experimentado mudanças nestes dois últimos anos. Mas isto passa.\n\n(Graciliano Ramos. S. Bernardo)",
  latam: "Dying to defend the planet: why Latin America is the deadliest place for environmentalists (February 11, 2017)\n\n(1º parágrafo) Defending nature is a dangerous occupation, especially in Latin America. According to a recent report by Global Witness, an NGO, 185 environmental activists were murdered worldwide in 2015, an increase of 59% from the year before. More than half the killings were in Latin America. In Brazil 50 green campaigners died in 2015. Honduras is especially dangerous: 123 activists have died there since 2010, the highest number of any country relative to its population. Berta Cáceres, an indigenous leader who was a prominent campaigner against dams and plantations, was murdered there.\n\n(2º parágrafo) Why is Latin America so deadly? One reason is its abundant natural resources, which attract enterprises of all sorts, from multinationals to mafias. When prices are low, as they are now, the most rapacious do not go away; to maintain their profits they become more aggressive, says David Kaimowitz of the Ford Foundation, which gives money to good causes. New technologies open up new battlefronts. Soya beans bred to grow in tropical conditions have encouraged farmers to displace cattle ranchers, who in turn have advanced into the rainforest. Small prospectors can now extract gold from soil rather than just hunting around. That opens up new areas for exploitation, such as San Rafael de Flores in south-eastern Guatemala, where activists have been murdered.\n\n(3º parágrafo) The odds of finding the criminals are greater if the victim is foreign. Dorothy Stang, an American nun who fought to protect the Amazon rainforest, was killed in Brazil 12 years ago. Both the gunman and a rancher who had hired him eventually went to jail. But that is an exception.\n\n(The Economist, 2017. Adaptado)",
  jambu: "Originário da região amazônica, o jambu (Acmella oleracea) é uma hortaliça muito utilizada na culinária do norte do Brasil, principalmente no Pará, em pratos famosos como o tacacá e o pato no tucupi. Além da alimentação, a planta é usada pelos povos indígenas e ribeirinhos como analgésico e anestésico para tratar aftas, herpes, dores de dente e garganta. Os efeitos anestésicos e analgésicos são provocados pela substância espilantol.\n\n(Revista Pesquisa FAPESP, 2018. Adaptado)",
  // ----- Prova 2018 -----
  gleiser: "Tentativa e erro, experimentar o novo, entender que algumas questões têm respostas complexas ou podem mesmo não ter uma resposta, cultivar a noção de que o fracasso é essencial para o progresso, aceitar que erros são o que nos faz eventualmente acertar, saber persistir quando as dificuldades parecem não acabar nunca.\n\nEsses são alguns dos componentes da pesquisa científica, uma espécie de sabedoria acumulada através dos tempos que, acredito, é também muito útil em vários aspectos da vida – de como enfrentar desafios individualmente até como reger empresas.\n\nQuem poderia adivinhar que a eletricidade e o magnetismo são manifestações de um campo eletromagnético que se propaga através do espaço com a velocidade da luz? Quem poderia adivinhar que as espécies animais evoluem devido a mutações genéticas aliadas ao processo de seleção natural? Esse conhecimento todo não veio do nada; exigiu muita coragem intelectual, disciplina de trabalho e tolerância ao erro.\n\nSe as coisas não funcionam, precisamos deixar o orgulho para trás e aceitar que falhamos. Todo cientista sabe muito bem que a maioria das suas ideias não vai funcionar. Resolutos, vamos em frente; mas devemos também estar abertos a críticas.\n\nNa ciência, e em qualquer outra área de trabalho, é bom ouvir as sábias palavras de Isaac Newton – mesmo se o próprio, durante a vida, não tenha sido o que chamaria de um modelo de humildade profissional: “Não sei o que possa parecer aos olhos do mundo, mas aos meus pareço apenas ter sido como um menino brincando à beira-mar, divertindo-me com o fato de encontrar de vez em quando um seixo mais liso ou uma concha mais bonita que o normal, enquanto o grande oceano da verdade permanece completamente por descobrir à minha frente”.\n\n(Marcelo Gleiser. www.folha.uol.com.br. 10.12.2017. Adaptado)",
  casmurro: "Ezequiel, quando começou o capítulo anterior, não era ainda gerado; quando acabou era cristão e católico. Este outro é destinado a fazer chegar o meu Ezequiel aos cinco anos, um rapagão bonito, com os seus olhos claros, já inquietos, como se quisessem namorar todas as moças da vizinhança, ou quase todas.\n\nAgora, se considerares que ele foi único, que nenhum outro veio, certo nem incerto, morto nem vivo, um só e único, imaginarás os cuidados que nos deu, os sonos que nos tirou, e que sustos nos meteram as crises dos dentes e outras, a menor febrícula, toda a existência comum das crianças. A tudo acudíamos, segundo cumpria e urgia, cousa que não era necessário dizer, mas há leitores tão obtusos, que nada entendem, se lhes não relata tudo e o resto. Vamos ao resto.\n\n(Dom Casmurro. São Paulo, Globo, 1997)",
  menino: "Eu passava o dia inteiro rondando os oficiais nas suas confidências. Contavam a história de uns carpinas num engenho do Brejo.\n\n– O senhor de engenho só mandava para eles bacalhau, na janta e no almoço. Passavam o dia inteiro bebendo água com a boca seca. Um dia um deles disse para o negro que não gostava de bacalhau, que não aguentava mais aquilo. No outro dia o tabuleiro com a comida chegou: era peru. E peru de tarde. E a semana toda, peru. Num domingo, o mestre saiu para dar umas voltas nos arredores. Viu um negro com uma porção de urubus nas costas:\n– O que é isto, moleque?\n– É peru pros carpinas.\n\nOs oficiais anoiteceram e não amanheceram na propriedade. E rebentou ferida pelo corpo deles. Estiveram para morrer um tempão.\n\n(Menino de engenho. Rio de Janeiro, José Olympio, 2000)",
  noticias: "Notícias\n\nEntre mim e os mortos há o mar\ne os telegramas.\nHá anos que nenhum navio parte\nnem chega. Mas sempre os telegramas\nfrios, duros, sem conforto.\n\nNa praia, e sem poder sair.\nVolto, os telegramas vêm comigo.\nNão se calam, a casa é pequena\npara um homem e tantas notícias.\n\nVejo-te no escuro, cidade enigmática.\nChamas com urgência, estou paralisado.\nDe ti para mim, apelos,\nde mim para ti, silêncio.\nMas no escuro nos visitamos.\n\nEscuto vocês todos, irmãos sombrios.\nNo pão, no couro, na superfície\nmacia das coisas sem raiva,\nsinto vozes amigas, recados\nfurtivos, mensagens em código.\n\nOs telegramas vieram no vento.\nQuanto sertão, quanta renúncia atravessaram!\nTodo homem sozinho devia fazer uma canoa\ne remar para onde os telegramas estão chamando.\n\n(Carlos Drummond de Andrade. A rosa do povo, 1945. Poesia 1930-62. São Paulo, Cosac Naif, 2012)",
  slavery: "Modern-day slavery: an explainer\n\n(1º parágrafo) What is modern-day slavery?\nAbout 150 years after most countries banned slavery – Brazil was the last to abolish its participation in the transatlantic slave trade, in 1888 – millions of men, women and children are still enslaved. Contemporary slavery takes many forms, from women forced into prostitution, to child slavery in agriculture supply chains or whole families working for nothing to pay off generational debts. Slavery thrives on every continent and in almost every country. Forced labour, people trafficking, debt bondage and child marriage are all forms of modern-day slavery that affect the world’s most vulnerable people.\n\n(2º parágrafo) How is slavery defined?\nSlavery is prohibited under the 1948 Universal Declaration of Human Rights, which states: “No one shall be held in slavery or servitude: slavery and the slave trade shall be prohibited in all their forms.”\n\n(3º parágrafo) Definitions of modern-day slavery are mainly taken from the 1956 UN supplementary convention, which says: “debt bondage, serfdom, forced marriage and the delivery of a child for the exploitation of that child are all slavery-like practices and require criminalisation and abolishment”. The 1930 Forced Labour Convention defines forced labour as “all work or service which is exacted from any person under the menace of any penalty and for which the said person has not offered himself voluntarily”. As contemporary systems of slavery have evolved, new definitions, including trafficking and distinguishing child slavery from child labour, have developed.\n\n(4º parágrafo) How many people are enslaved across the world?\nDue to its illegality, data on modern-day slavery is difficult to collate. The UN’s International Labour Organisation (ILO) estimates that about 21 million people are in forced labour at any point in time. The ILO says this estimate includes trafficking and other forms of modern slavery. The only exceptions are trafficking for organ removal, forced marriage and adoption, unless the last two practices result in forced labour. The ILO calculates that 90% of the 21 million are exploited by individuals or companies, while 10% are forced to work by the state, rebel military groups, or in prisons under conditions that violate ILO standards. Sexual exploitation accounts for 22% of slaves.\n\n(www.theguardian.com. 03.04.2013. Adaptado)",
  leite: "Informações extraídas do rótulo de um leite pasteurizado integral.\nINFORMAÇÃO NUTRICIONAL – quantidade por porção de 200 mL (1 copo):\nValor energético: 127 kcal = 534 kJ\nCarboidratos: 9,6 g\nProteínas: 6,4 g\nGorduras totais: 7,0 g\nGorduras saturadas: 4,2 g\nGorduras trans: 0 g\nFibra alimentar: 0 g\nSódio: 80 mg\nCálcio: 214 mg\nColesterol: 20 mg",
  salina: "A imagem mostra uma salina produtora de sal de cozinha (cloreto de sódio) a partir da água do mar: os tanques são rasos e largos.",
  // ----- Prova 2017 -----
  polimero: "Em estações de tratamento da água, é comum o uso de polímeros, juntamente com o hidróxido de cálcio e o sulfato de alumínio, para facilitar a aglutinação das partículas em suspensão. Os polímeros são macromoléculas formadas pela união de pequenas moléculas denominadas monômeros. Observe a estrutura de um polímero usado para essa finalidade.",
  chumbo: "Uma semana depois do rompimento de duas barragens na cidade de Mariana, na região central de Minas, foi divulgada a primeira análise que comprova a alta concentração de metais pesados no rio Doce. Entre os índices elevados, estão os de arsênio, com 2,63 mg/L (o normal seria somente 0,01 mg/L), chumbo, com 1,03 mg/L (sendo que o recomendável seria 0,01 mg/L) e manganês, com 61,22 mg/L, muito acima do 0,1 mg/L adequado para o tratamento da água.",
  trump: "Trump assina decreto que altera política americana com Cuba\n\nO presidente Donald Trump defendeu o embargo econômico dos Estados Unidos contra Cuba e condicionou avanços na relação bilateral a mudanças políticas na ilha na direção de eleições livres, libertação de presos políticos e respeito à liberdade de expressão. “Eu estou cancelando o acordo completamente unilateral da última administração com Cuba”, declarou em discurso realizado nesta sexta-feira, 16, em Miami.\n\nApesar da declaração, Trump reviu apenas questões pontuais da política anunciada por Barack Obama no dia 17 de dezembro de 2014. As mudanças acabam com a possibilidade de viagens individuais para a ilha e proíbem gastos em estabelecimentos turísticos controlados pelo Exército e pelos setores de inteligência e segurança do país. “Lucros provenientes do turismo foram diretamente para as forças armadas”, afirmou.\n\nAlém da reversão desses pontos, a grande transformação foi de tom e na sinalização do futuro da relação bilateral. Enquanto Obama defendeu o levantamento do embargo, Trump prometeu reforçá-lo. A agressividade retórica contra o governo de Raúl Castro também indica uma desaceleração do ritmo de normalização das relações bilaterais.\n\nUm dos objetivos do novo acordo, explicou Trump, é garantir que a população cubana seja beneficiada diretamente. O presidente norte-americano, entretanto, buscou frisar que ‘atrocidades’ cometidas desde o início do regime dos irmãos Castro não serão toleradas e insinuou que o governo de Barack Obama negligenciou a prática de crimes contra a população da ilha.",
  amar: "Amar\n\nQue pode uma criatura senão,\nentre criaturas, amar?\namar e esquecer, amar e malamar,\namar, desamar, amar?\nsempre, e até de olhos vidrados, amar?\n\nQue pode, pergunto, o ser amoroso,\nsozinho, em rotação universal,\nsenão rodar também, e amar?\namar o que o mar traz à praia,\no que ele sepulta, e o que, na brisa marinha,\né sal, ou precisão de amor, ou simples ânsia?\n\nAmar solenemente as palmas do deserto,\no que é entrega ou adoração expectante,\ne amar o inóspito, o cru,\num vaso sem flor, um chão de ferro,\ne o peito inerte, e a rua vista em sonho, e\numa ave de rapina.\n\nEste o nosso destino: amor sem conta,\ndistribuído pelas coisas pérfidas ou nulas,\ndoação ilimitada a uma completa ingratidão,\ne na concha vazia do amor a procura medrosa,\npaciente, de mais e mais amor.\n\nAmar a nossa falta mesma de amor,\ne na secura nossa amar a água implícita,\ne o beijo tácito, e a sede infinita.\n\n– Carlos Drummond de Andrade, em “Claro enigma”. 1951.",
  mar: "Definição: O mar simboliza a dinâmica da vida, os nascimentos, as transformações, a morte, e os renascimentos. O movimento das ondas do mar simboliza o estado transitório da vida, a ambivalência entre a realidade e as possibilidades de realidade, representa a incerteza, a dúvida, a indecisão, podendo levar tanto ao bem como ao mal. Por isso, o mar simboliza tanto a vida como a morte."
};

const QUESTIONS = [
  // ---------- BIOLOGIA ----------
  { id: "2017-01", ano: 2017, n: 1, tema: "Biologia", d: 2,
    ctx: "No arquipélago de Fernando de Noronha, a 350 km do litoral do Brasil, a cegueira e deficiências nos membros locomotores, nos olhos e na boca são frequentes entre os sapos. Um grupo de estudantes defensores das ideias de Lamarck afirmou: “No continente, sapos cegos seriam facilmente comidos por serpentes, mas em Noronha, pelo fato de os sapos não terem predadores naturais, os olhos funcionais deixaram de ser importantes e tornaram-se inúteis, foram se atrofiando pelo desuso e, em alguns casos, desapareceram completamente”.",
    q: "Considerando a explicação dos estudantes, é correto afirmar, coerentemente com as ideias de Lamarck, que o desaparecimento de olhos funcionais nos sapos teria sido",
    a: ["provocado pela falta de uso desses órgãos, e consequente incorporação dessa mudança do material genético.",
        "causado por bactérias patogênicas ou vírus, difundidos nas populações desses animais.",
        "ocasionado pela falta de uso desses órgãos, segundo a lei do uso e desuso.",
        "causado por mutações do material genético.",
        "originado pelo processo de seleção natural."],
    r: 2, exp: "Lamarck propôs a lei do uso e desuso: órgãos pouco usados atrofiam. A ideia de ‘incorporar no material genético’ é posterior a Lamarck; mutações e seleção natural são ideias darwinistas/modernas." },

  { id: "2017-02", ano: 2017, n: 2, tema: "Biologia", d: 3, img: ["2017-02.png"],
    q: "A partir do reconhecimento de cada uma das partes do coração, assinale a alternativa correta.",
    a: ["O vaso sanguíneo de número 3 traz sangue arterial do pulmão para a câmara C do coração.",
        "O vaso sanguíneo de número 2 leva sangue arterial da câmara D do coração para o corpo todo.",
        "O sangue rico em gás carbônico chega ao coração pelos vasos sanguíneos de número 4.",
        "O sangue rico em oxigênio circula pelos vasos sanguíneos de números 3 e 4.",
        "O sangue rico em oxigênio chega à câmara A do coração."],
    r: 1, exp: "A aorta (vaso 2) sai do ventrículo esquerdo levando sangue arterial para o corpo todo." },

  { id: "2017-03", ano: 2017, n: 3, tema: "Biologia", d: 1,
    ctx: "Algumas espécies de nematódeos produzem larvas que penetram na epiderme humana e se deslocam abrindo túneis que lembram o traçado de um mapa. Causam intensa coceira. Esses sintomas são geralmente associados a uma dermatite popularmente conhecida como bicho geográfico.",
    q: "A prevenção do bicho geográfico está ligada",
    a: ["ao combate dos mosquitos transmissores.",
        "à ingestão de carne de vaca bem cozida.",
        "ao tratamento da água e hábitos de higiene, como lavar as mãos antes de comer.",
        "à proibição do acesso de cães a praia ou a tanques de areia em escolas ou parques, por exemplo.",
        "à restrição de banhos em lagoas de água doce parada ou com pouca correnteza, onde vivem os caramujos."],
    r: 3, exp: "As larvas vêm de fezes de cães e gatos em areia contaminada e penetram pela pele." },

  { id: "2017-04", ano: 2017, n: 4, tema: "Biologia", d: 2, img: ["2017-04.png"],
    ctx: "Em 1883, T. W. Engelmann colocou um filamento de alga fotossintetizante (Cladophora) em meio aquoso com bactérias aeróbias e iluminou com luz branca; as bactérias se dispunham uniformemente ao longo da alga. Depois, usando um prisma, cada região da alga recebeu apenas um comprimento de onda (uma cor). Após algum tempo, observou maior acúmulo de bactérias nas regiões iluminadas pelas cores vermelho e azul.",
    q: "Com essa experiência, Engelmann concluiu corretamente que",
    a: ["o comprimento de onda da cor verde foi o mais eficiente no processo fotossintético, pois onde existe menos bactérias acumuladas, existe mais gás oxigênio e, portanto, mais fotossíntese.",
        "as bactérias acumuladas nas regiões iluminadas pelos comprimentos de onda das cores azul e vermelho produziram o gás oxigênio necessário à própria respiração delas.",
        "ocorreu maior rendimento fotossintético e, consequentemente, maior produção do gás oxigênio, resultando em maior acúmulo de bactérias nos comprimentos de onda das cores azul e vermelho.",
        "as bactérias distribuídas uniformemente ao redor da alga puderam absorver mais gás carbônico, necessário à realização da fotossíntese.",
        "todos os comprimentos de onda são igualmente eficientes para estimular a clorofila no processo fotossintético."],
    r: 2, exp: "Bactérias aeróbias se concentram onde há mais O2, ou seja, onde a fotossíntese é mais intensa: no azul e no vermelho." },

  { id: "2017-05", ano: 2017, n: 5, tema: "Biologia", d: 1, img: ["2017-05.png"],
    q: "Assinale a alternativa que apresenta os termos que completam corretamente a afirmação sobre a respiração dos peixes: “A água, que entra pela boca do peixe, é rica em ( 1 ), passa pelas ( 2 ) e sai pelo opérculo com mais ( 3 )”.",
    a: ["(1) dióxido de carbono; (2) brânquias; (3) oxigênio",
        "(1) oxigênio; (2) brânquias; (3) dióxido de carbono",
        "(1) oxigênio; (2) brânquias; (3) monóxido de carbono",
        "(1) oxigênio; (2) papilas gustativas; (3) dióxido de carbono",
        "(1) monóxido de carbono; (2) papilas gustativas; (3) dióxido de carbono"],
    r: 1, exp: "Nas brânquias ocorre a troca gasosa: o peixe absorve O2 e a água sai mais rica em CO2." },

  // ---------- FÍSICA ----------
  { id: "2017-06", ano: 2017, n: 6, tema: "Física", d: 2,
    ctx: "Posições de dois veículos na mesma estrada.\nVeículo A: t = 0 → s = 15 km; t = 1 h → s = 90 km.\nVeículo B: t = 0 → s = 495 km; t = 1 h → s = 420 km.",
    q: "Desprezadas as dimensões dos veículos e sabendo que eles se movimentam, um em direção ao outro, com velocidades constantes, é correto afirmar que eles passarão pela mesma posição depois de",
    a: ["2 horas e 45 minutos.", "3 horas e 12 minutos.", "3 horas e 20 minutos.", "4 horas e 16 minutos.", "4 horas e 30 minutos."],
    r: 1, exp: "A: s = 15 + 75t. B: s = 495 − 75t. Igualando: 150t = 480 → t = 3,2 h = 3 h 12 min." },

  { id: "2017-07", ano: 2017, n: 7, tema: "Física", d: 3, img: ["2017-07.png"],
    ctx: "Os blocos sobre o plano, assim como as roldanas, não sofrem ação de atritos. Massas: A = 50 kg, B = 30 kg, C = 20 kg. g = 10 m/s².",
    q: "A intensidade da força resultante sobre o bloco B é",
    a: ["160 N.", "100 N.", "80 N.", "60 N.", "40 N."],
    r: 3, exp: "Sistema todo: a = P_C / (mA+mB+mC) = 200/100 = 2 m/s². Força resultante em B: F = mB · a = 30 · 2 = 60 N." },

  { id: "2017-08", ano: 2017, n: 8, tema: "Física", d: 2,
    q: "Para que imagens invertidas de um corpo sejam obtidas, utilizando-se um espelho esférico côncavo ideal, deve-se colocar esse corpo entre",
    a: ["o vértice e o foco do espelho.", "o vértice e o centro de curvatura do espelho.", "o vértice e qualquer local além do centro de curvatura do espelho.", "o foco e o centro de curvatura do espelho.", "o foco e qualquer local além do centro de curvatura do espelho."],
    r: 4, exp: "Entre vértice e foco a imagem é virtual e direita. Em qualquer posição além do foco a imagem é real e invertida." },

  { id: "2017-09", ano: 2017, n: 9, tema: "Física", d: 2,
    ctx: "O ferro de soldar a estanho tem como princípio o aquecimento de uma ponta metálica pela conversão direta de energia elétrica em calor.",
    q: "Se um ferro de soldar de 40 W de potência permanece ligado a uma tomada de 110 V por 190 horas, a energia transformada em calor é, aproximadamente, de",
    a: ["3,5 kWh.", "5,0 kWh.", "7,5 kWh.", "8,5 kWh.", "9,0 kWh."],
    r: 2, exp: "E = P · t = 0,04 kW · 190 h = 7,6 kWh ≈ 7,5 kWh." },

  { id: "2017-10", ano: 2017, n: 10, tema: "Física", d: 2,
    ctx: "Circuito misto com fios ideais: R1 em série com R2 e R3, que estão em paralelo entre si. Gerador ideal de 30 V. R1 = 14 Ω, R2 = 20 Ω, R3 = 80 Ω.",
    q: "A intensidade da corrente elétrica aplicada ao circuito misto é de",
    a: ["1 A.", "2 A.", "3 A.", "4 A.", "5 A."],
    r: 0, exp: "R2 // R3 = (20·80)/(20+80) = 16 Ω. Req = 14 + 16 = 30 Ω. i = 30/30 = 1 A." },

  // ---------- QUÍMICA ----------
  { id: "2017-11", ano: 2017, n: 11, tema: "Química", d: 1, t: "polimero", img: ["2017-11.png"],
    q: "O processo descrito, usado em estações de tratamento da água, é denominado",
    a: ["filtração.", "floculação.", "decantação.", "destilação.", "cloração."],
    r: 1, exp: "Substâncias como sulfato de alumínio, hidróxido de cálcio e polímeros aglutinam partículas em flocos: floculação." },

  { id: "2017-12", ano: 2017, n: 12, tema: "Química", d: 2, t: "polimero", img: ["2017-11.png"],
    q: "O monômero usado na produção do polímero pertence à(s) função(ões)",
    a: ["amida.", "amina.", "cetona.", "cetona e amina.", "cetona e amida."],
    r: 0, exp: "O grupo C(=O)–NH2 é uma amida (acrilamida); a carbonila ligada ao N não é cetona." },

  { id: "2017-13", ano: 2017, n: 13, tema: "Química", d: 3, t: "chumbo",
    ctx: "Dado: massa molar do Pb = 207 g/mol.",
    q: "A concentração, em mol/L, de chumbo encontrada no rio Doce é, aproximadamente, de",
    a: ["1 · 10⁻³", "1 · 10⁻²", "5 · 10⁻⁶", "5 · 10⁻³", "5 · 10⁻²"],
    r: 2, exp: "1,03 mg/L = 1,03·10⁻³ g/L. Dividindo por 207 g/mol: ≈ 5·10⁻⁶ mol/L." },

  { id: "2017-14", ano: 2017, n: 14, tema: "Química", d: 3,
    ctx: "Equilíbrio do carbonato de chumbo II a 25 °C: PbCO3(s) ⇌ Pb²⁺(aq) + CO3²⁻(aq). Dado: Kps do PbCO3 = 7,4 · 10⁻¹⁴.",
    q: "A concentração de íons carbonato, presentes nesse equilíbrio, é",
    a: ["7,4 · 10⁻⁷", "7,4 · 10⁻¹⁴", "3,7 · 10⁻⁷", "2,7 · 10⁻¹⁴", "2,7 · 10⁻⁷"],
    r: 4, exp: "Kps = [Pb²⁺][CO3²⁻] = s². s = √(7,4·10⁻¹⁴) ≈ 2,7·10⁻⁷ mol/L." },

  { id: "2017-15", ano: 2017, n: 15, tema: "Química", d: 3,
    ctx: "Reação A + B → C + D.\n1º experimento: A = 12 g; B = 25 g; C = x; D = 17 g.\n2º experimento: A = 30 g; B = y; C = 50 g; D = z.",
    q: "Baseando-se nas Leis de Lavoisier e de Proust, os valores corretos de x, y e z foram",
    a: ["x = 20,0; y = 62,5; z = 42,5", "x = 20,0; y = 50,0; z = 34,0", "x = 20,0; y = 75,0; z = 51,0", "x = 17,0; y = 73,5; z = 50,0", "x = 17,0; y = 62,5; z = 42,5"],
    r: 0, exp: "Lavoisier: 12 + 25 = x + 17 → x = 20. Proporção 12:25:20:17. No 2º experimento, 30 g de A é 2,5 vezes mais: y = 62,5, C = 50 (ok) e z = 17 · 2,5 = 42,5." },

  // ---------- MATEMÁTICA ----------
  { id: "2017-16", ano: 2017, n: 16, tema: "Matemática", d: 1,
    q: "Em uma progressão aritmética (P.A.), a soma dos três primeiros termos é igual a 117. Sabendo que o primeiro termo é 30, a razão dessa P.A. é",
    a: ["5", "6", "7", "8", "9"],
    r: 4, exp: "30 + (30 + r) + (30 + 2r) = 117 → 90 + 3r = 117 → r = 9." },

  { id: "2017-17", ano: 2017, n: 17, tema: "Matemática", d: 2,
    ctx: "Dados: Xv = −b/2a; Yv = −Δ/4a; Δ = b² − 4ac.",
    q: "Em uma loja de peças de motos, o lucro, em reais, é L(x) = −x² + 302x − 20 200, em que x é o número de peças. O lucro máximo que essa loja pode obter é",
    a: ["R$ 151,00", "R$ 302,00", "R$ 2 601,00", "R$ 5 202,00", "R$ 10 404,00"],
    r: 2, exp: "Δ = 302² − 4(−1)(−20 200) = 91 204 − 80 800 = 10 404. Yv = −Δ/4a = 10 404/4 = 2 601." },

  { id: "2017-18", ano: 2017, n: 18, tema: "Matemática", d: 1,
    q: "O número de anagramas da palavra UNIVESP que começam com a letra P é",
    a: ["120", "240", "360", "480", "720"],
    r: 4, exp: "Fixando o P, as 6 letras restantes (todas diferentes) permutam: 6! = 720." },

  { id: "2017-19", ano: 2017, n: 19, tema: "Matemática", d: 1,
    ctx: "Dado: volume da pirâmide = (área da base × altura) / 3.",
    q: "Uma miniatura de pirâmide tem 11 cm de altura e base quadrada de 18 cm de lado. O volume dela, em cm³, é",
    a: ["1 008", "1 188", "3 564", "5 974", "7 464"],
    r: 1, exp: "V = (18² · 11)/3 = (324 · 11)/3 = 1 188." },

  { id: "2017-20", ano: 2017, n: 20, tema: "Matemática", d: 2,
    ctx: "f(x) = 2·sen(4x + π/2) − 1. Dados: sen 0 = 0; sen(π/2) = 1; sen π = 0; sen(3π/2) = −1.",
    q: "O valor de f(x) quando x vale π/4 é",
    a: ["−3", "−2", "−1", "0", "1"],
    r: 0, exp: "f(π/4) = 2·sen(π + π/2) − 1 = 2·sen(3π/2) − 1 = 2(−1) − 1 = −3." },

  { id: "2017-21", ano: 2017, n: 21, tema: "Matemática", d: 2,
    ctx: "A decomposição de uma substância é dada por Q(t) = 4^(−t), com t em minutos e Q(t) a massa. A massa inicial é de 1 g.",
    q: "O tempo, em segundos, para atingir a meia-vida (metade da massa inicial) será",
    a: ["15.", "30.", "45.", "60.", "75."],
    r: 1, exp: "4^(−t) = 1/2 → 2^(−2t) = 2^(−1) → t = 1/2 min = 30 s." },

  { id: "2017-22", ano: 2017, n: 22, tema: "Matemática", d: 1,
    q: "Num dado desbalanceado, a probabilidade de sair o número 6 é 3/8. A probabilidade de sair o número 6 em dois lançamentos sucessivos é",
    a: ["1/64", "9/64", "12/64", "27/64", "32/64"],
    r: 1, exp: "Eventos independentes: (3/8) · (3/8) = 9/64." },

  { id: "2017-23", ano: 2017, n: 23, tema: "Matemática", d: 3,
    ctx: "Propriedade: log_b(a) · log_c(b) = log_c(a), com a, b, c > 0, b ≠ 1 e c ≠ 1.",
    q: "Aplicando essa propriedade sucessivamente, o valor da expressão log₉(16) · log₅(9) · log₄(5) é",
    a: ["0", "1", "2", "3", "4"],
    r: 2, exp: "Encadeando: log₉16 · log₅9 · log₄5 = log₄16 = 2." },

  { id: "2017-24", ano: 2017, n: 24, tema: "Matemática", d: 2,
    ctx: "Dado: coeficiente angular de uma reta = Δy/Δx.",
    q: "No plano cartesiano, a reta r passa pelos pontos (1, 2) e (3, −2), e a reta s passa pelos pontos (4, 4) e (5, 2). É correto afirmar que r e s são",
    a: ["perpendiculares.", "concorrentes oblíquas.", "paralelas distintas.", "coincidentes.", "reversas."],
    r: 2, exp: "Ambas têm coeficiente angular −2. Paralelas; como r: y = −2x + 4 não passa por (4, 4), são distintas." },

  { id: "2017-25", ano: 2017, n: 25, tema: "Matemática", d: 3,
    ctx: "Soma dos infinitos termos de uma P.G.: S = a₁ / (1 − r), com 0 < r < 1.",
    q: "A soma infinita da P.G. (x, x³, x⁵, x⁷, …) é 4/15. Nessas condições a razão dessa P.G. é",
    a: ["−1/4", "−1/16", "1/16", "1/4", "1"],
    r: 2, exp: "Razão r = x². x/(1 − x²) = 4/15 → 4x² + 15x − 4 = 0 → x = 1/4 (positivo). Logo r = 1/16." },

  { id: "2017-26", ano: 2017, n: 26, tema: "Matemática", d: 2,
    ctx: "Em uma escola só com Ensino Fundamental II (EF2) e Ensino Médio (EM), o número de alunos do EF2 é o dobro do número de alunos do EM. Cada aluno do EF2 possui 10 livros didáticos e cada aluno do EM, 14.",
    q: "Sabendo que o total de livros é 3 808, o número de alunos dessa escola é",
    a: ["112", "224", "336", "448", "560"],
    r: 2, exp: "EM = n, EF2 = 2n: 20n + 14n = 34n = 3 808 → n = 112. Total = 3n = 336." },

  { id: "2017-27", ano: 2017, n: 27, tema: "Matemática", d: 1,
    q: "As soluções da equação de segundo grau x² − 2 = 0 pertencem ao conjunto dos números",
    a: ["Naturais.", "Inteiros não naturais.", "Complexos não reais.", "Racionais não inteiros.", "Irracionais."],
    r: 4, exp: "x = ±√2, que é irracional." },

  { id: "2017-28", ano: 2017, n: 28, tema: "Matemática", d: 2,
    ctx: "Em uma sala com 100 alunos de um curso preparatório, 30 têm exatamente 15 anos, 50 têm exatamente 17 anos e o restante tem exatamente x anos (x ≠ 15 e x ≠ 17).",
    q: "Se a média de idade dos alunos dessa sala é 16,6 anos, é correto afirmar que x é",
    a: ["18", "19", "20", "21", "22"],
    r: 0, exp: "Soma total = 100 · 16,6 = 1 660. 30·15 + 50·17 = 450 + 850 = 1 300. Restam 20 alunos somando 360 → x = 18." },

  { id: "2017-29", ano: 2017, n: 29, tema: "Matemática", d: 2,
    q: "O valor de x para que os pontos (x, 2), (x, 4) e (3x, 4), num plano cartesiano, formem um triângulo de área igual a 10 é",
    a: ["1", "3", "5", "7", "9"],
    r: 2, exp: "O triângulo é retângulo, com catetos 2 (vertical) e 2x (horizontal). Área = (2 · 2x)/2 = 2x = 10 → x = 5." },

  { id: "2017-30", ano: 2017, n: 30, tema: "Matemática", d: 1,
    q: "Uma escola enviará uma comissão de dois representantes escolhidos entre 9 professores. A quantidade de possíveis comissões é",
    a: ["18", "36", "54", "72", "90"],
    r: 1, exp: "A ordem não importa: C(9,2) = 9·8/2 = 36." },

  // ---------- HISTÓRIA ----------
  { id: "2017-31", ano: 2017, n: 31, tema: "História", d: 1,
    ctx: "O Código de Hamurabi (por volta do século XVIII a.C.), um dos mais antigos conjuntos de leis escritas, estabelecia as punições segundo a Lei de Talião: “olho por olho, dente por dente”.",
    q: "O Código de Hamurabi regulava as relações econômicas e sociais da população",
    a: ["do Mali, reino localizado na África Ocidental.", "da Babilônia, reino localizado na Mesopotâmia.", "de Atenas, cidade-Estado localizada na Grécia.", "dos Marajoara, civilização localizada na Ilha de Marajó.", "de Teotihuacan, centro urbano localizado na Mesoamérica."],
    r: 1, exp: "Hamurabi foi rei da Babilônia (Mesopotâmia)." },

  { id: "2017-32", ano: 2017, n: 32, tema: "História", d: 1,
    ctx: "“A todos os que partirem e morrerem no caminho, em terra ou mar, ou que perderem a vida combatendo os pagãos, será concedida a remissão dos pecados. Que combatam os infiéis [...] Tomai o caminho do Santo Sepulcro, arrebatai aquela terra da raça perversa e submetei-a a vós mesmos.” (Papa Urbano II, Concílio de Clermont, 1095)",
    q: "A aclamação de Urbano II é considerada o marco inicial das Cruzadas, expedições militares que",
    a: ["travaram guerras contra os muçulmanos para retirar deles o controle de Jerusalém, a “Terra Santa” onde se localiza o túmulo de Cristo.",
        "mobilizaram os hunos, os francos e os alanos, católicos nômades que viviam no norte da Europa, contra o domínio do Império Romano.",
        "rumaram para as Américas com o objetivo de combater o politeísmo e dominar as regiões auríferas ocupadas pelos povos maia e asteca.",
        "partiram de Portugal em direção à África para conquistar territórios, dominar rotas comerciais e catequisar os povos politeístas.",
        "conquistaram as terras do Extremo Oriente, retomando o controle das regiões ocupadas por populações budistas e hindus."],
    r: 0 },

  { id: "2017-33", ano: 2017, n: 33, tema: "História", d: 2,
    q: "Ocorrida entre a segunda metade do século XIX e o início do século XX, a Segunda Revolução Industrial se caracterizou pela relação intrínseca entre indústria e ciência, expressa em invenções e produtos como",
    a: ["o avião, o telefone celular e a bomba atômica.", "o satélite, o automóvel e o computador.", "a eletricidade, a televisão e a internet.", "o telefone, o telégrafo e o rádio.", "a bússola, o trem e o raio-X."],
    r: 3, exp: "Telégrafo, telefone e rádio são marcos da época. Avião (1906), TV, satélite, computador e internet são posteriores; a bússola é bem anterior." },

  { id: "2017-34", ano: 2017, n: 34, tema: "História", d: 2,
    ctx: "“No presente, o homem se faz através da posse da razão. Se as árvores e bestas selvagens crescem, os homens, creia-me, moldam-se. [...] A natureza, ao dar-vos um filho, vos presenteia com uma criatura rude, sem forma, a qual deveis moldar para que se converta em um homem de verdade. [...] se ele se realizar com sabedoria, eu poderia quase dizer que resultaria em um ser semelhante a Deus.” (Erasmo de Rotterdam, 1469-1536)",
    q: "O texto expressa uma das principais características do Renascimento. Essa característica é o",
    a: ["Cientificismo, que acreditava ser possível compreender a obra divina a partir da aplicação dos métodos de investigação científica.",
        "Teísmo, a crença moderna de que o destino dos homens é determinado pela vontade de Deus, que se manifesta nos acontecimentos da vida cotidiana.",
        "Misticismo, conceito central do humanismo renascentista, que atribui características sobrenaturais aos elementos da natureza.",
        "Iluminismo, que pregava o uso da razão em contraposição à fé como condição indispensável para o desenvolvimento das capacidades humanas.",
        "Antropocentrismo, que se opunha aos valores medievais e atribuía ao ser humano, e não à vontade de Deus, a responsabilidade por suas conquistas e fracassos."],
    r: 4 },

  { id: "2017-35", ano: 2017, n: 35, tema: "História", d: 2,
    ctx: "“O governo imperial [...] esmagou a nossa principal indústria, vexando-a ainda mais. [...] Um só recurso nos restava [...] a nossa independência política e o sistema republicano [...].” (Manifesto dos Farrapos, Piratini, 1838)",
    q: "A Revolução Farroupilha (1835-1845), no Rio Grande do Sul, foi a mais longa rebelião do Brasil Império. Entre as causas da insatisfação dos rebeldes, estava",
    a: ["o movimento migratório promovido pelo governo imperial, que deslocou contingentes de população do Norte e do Nordeste para o Rio Grande do Sul e para Santa Catarina.",
        "a expropriação das fazendas de algodão para fins de reforma agrária, atendendo à demanda dos imigrantes europeus recém-chegados à região.",
        "o projeto republicano defendido por políticos do Sudeste e contestado pelos gaúchos, beneficiados pelas políticas imperiais.",
        "o aumento dos impostos sobre o gado, a terra e o sal, que afetou os negócios dos pecuaristas gaúchos.",
        "a manutenção da escravidão no Brasil, considerada um obstáculo ao desenvolvimento da indústria no Sul do país."],
    r: 3 },

  // ---------- GEOGRAFIA ----------
  { id: "2017-36", ano: 2017, n: 36, tema: "Geografia", d: 1,
    ctx: "“O primeiro passo para produzir energia elétrica é obter a força necessária para girar as turbinas das usinas de eletricidade. Gigantescos sistemas de hélices, elas movem geradores que transformam a energia mecânica (movimento) em energia elétrica.” (Eletrobrás)",
    q: "A maior parte da energia elétrica consumida no Brasil tem procedência de usinas",
    a: ["termoelétricas, devido à abundância de florestas tropicais na Amazônia, que se transformam em grandes fornecedoras de madeira para queima nas usinas.",
        "eólicas, devido à existência dos ventos de monções, que sopram constantemente do Atlântico Norte sobre parte da região Sudeste.",
        "hidrelétricas, devido à existência de muitos rios extensos e de planalto, principalmente nas bacias dos rios Paraná e São Francisco.",
        "marítimas, devido à ação do fenômeno da ressurgência, que proporciona enormes ondas na costa nordeste do Brasil.",
        "solares, devido à grande extensão territorial que o Brasil possui na zona mais quente do planeta, a equatorial."],
    r: 2 },

  { id: "2017-37", ano: 2017, n: 37, tema: "Geografia", d: 1,
    ctx: "O êxodo rural ocorreu, e ainda ocorre, em grande parte dos países. No Brasil, aconteceu de maneira mais intensa entre as décadas de 1950 e 1980.",
    q: "O êxodo rural se caracteriza pelo deslocamento",
    a: ["sazonal, de trabalhadores urbanos para trabalhar na zona rural.", "diário, de pessoas de uma cidade à outra para estudar e trabalhar.", "em massa, de pessoas que residem na zona rural para os centros urbanos.", "de estrangeiros, que tem o intuito de desenvolver atividades agrárias.", "de latifundiários, com o objetivo de ampliar a produção agrícola."],
    r: 2 },

  { id: "2017-38", ano: 2017, n: 38, tema: "Geografia", d: 1,
    ctx: "A economia urbana é constituída basicamente pelos setores secundário e terciário.",
    q: "Dentre os ramos de atividade do setor secundário, podemos citar corretamente",
    a: ["indústria de transformação e construção civil.", "pecuária leiteira e administração pública.", "horticultura e transações imobiliárias.", "intermediação financeira e silvicultura.", "extrativismo vegetal e transporte terrestre."],
    r: 0, exp: "Setor secundário = indústria e construção. Pecuária, horticultura, silvicultura e extrativismo são primário; administração, finanças e transporte são terciário." },

  { id: "2017-39", ano: 2017, n: 39, tema: "Geografia", d: 2,
    ctx: "Entre os problemas físicos dos trabalhadores estão as LER/DORT. As inovações tecnológicas agravaram o quadro, principalmente com o surgimento de um modelo de produção denominado Fordismo.",
    q: "O Fordismo se caracteriza pela",
    a: ["automação total do trabalho, deixando para os robôs as tarefas extenuantes e repetitivas.", "adoção de horários flexíveis para os trabalhadores e ausência de estoque inicial.", "valorização da criatividade dos operários e de sua saúde física e mental.", "especialização do trabalhador, que ficou responsável pela realização de poucas e repetidas tarefas.", "existência de células de trabalho, do uso do Kanban e de equipes responsáveis por todo o processo de produção."],
    r: 3, exp: "Fordismo = linha de montagem, divisão do trabalho e tarefas repetitivas. Kanban, células e horários flexíveis são do toyotismo." },

  { id: "2017-40", ano: 2017, n: 40, tema: "Geografia", d: 2,
    ctx: "No Brasil, os “lixões” e os aterros sanitários são os locais de destinação do lixo doméstico mais utilizados.",
    q: "Nos aterros sanitários, os resíduos domésticos são",
    a: ["incinerados em alto-fornos, e as cinzas são colocadas em sacos plásticos, que são enterrados.", "empregados em processos bioquímicos realizados por micro-organismos e reutilizados.", "compactados, embalados, lavados e repassados posteriormente para as empresas de reciclagem.", "distribuídos aos catadores, previamente cadastrados pelas prefeituras e, posteriormente, reciclados.", "separados, depositados em terreno impermeabilizado, compactados e aterrados."],
    r: 4 },

  // ---------- FILOSOFIA E SOCIOLOGIA ----------
  { id: "2017-41", ano: 2017, n: 41, tema: "Filosofia e Sociologia", d: 3, img: ["2017-41.png"],
    ctx: "Glossário: freak show = show de horrores; alive = ao vivo.",
    q: "Segundo o conceito de Ideologia em Marx e Engels e a explicação desses autores sobre o funcionamento do modo de produção capitalista, a crítica e o humor do cartum estão relacionados à tese de que",
    a: ["o consumo de bens culturais envolve os indivíduos em um plano ideológico que vela a realidade. Dessa maneira, tais indivíduos tornam-se alheios a questionamentos sobre a distribuição da riqueza.",
        "a relação imediata entre trabalho e enriquecimento só é possível no contexto da indústria cultural, que é um aparato ideológico de dominação das massas.",
        "o trabalho intelectual não produz valor de troca, de modo que a expectativa de enriquecer por meio da cultura seria um modo de pensar ideológico.",
        "a relação imediata entre trabalho e enriquecimento é uma ideologia que esconde a impossibilidade, inerente ao capitalismo, da classe trabalhadora enriquecer.",
        "o produto do trabalho intelectual é valor de uso só para quem o produz, de modo que é impossível vender esse produto e, por conseguinte, enriquecer."],
    r: 3 },

  { id: "2017-42", ano: 2017, n: 42, tema: "Filosofia e Sociologia", d: 3,
    ctx: "“[...] a liberdade política não consiste em se fazer o que se quer. Em um Estado, isto é, numa sociedade onde existem leis, a liberdade só pode consistir em poder fazer o que se deve querer e em não ser forçado a fazer o que não se tem o direito de querer. [...] A liberdade é o direito de fazer tudo o que as leis permitem [...]” (Montesquieu, O espírito das leis)\n\nO artigo 7º, inciso IV, da Constituição Federal define o salário mínimo como quantia capaz de suprir uma família com moradia, alimentação, educação, saúde, lazer, vestuário, higiene, transporte e previdência social. Segundo o DIEESE, em maio de 2017 essa quantia seria R$ 3.869,92.",
    q: "É correto afirmar, com base no fragmento e nos dados apresentados, que a demanda de uma categoria de trabalhadores por esse salário",
    a: ["é uma liberdade política, enquanto a recusa dessa demanda por parte dos empresários é considerada um ato discordante em relação ao Estado.",
        "é independente em relação ao Estado, pois é uma demanda que afeta a liberdade dos demais trabalhadores por meio da inflação.",
        "é uma liberdade política, pois toda demanda popular deve ser vista como uma expressão dessa forma de liberdade.",
        "é independente em relação ao Estado, enquanto a repressão estatal de grevistas condiz com a liberdade política.",
        "é independente em relação ao Estado, pois se trata de uma demanda econômica e, por isso, não pode ser objeto da política."],
    r: 0 },

  { id: "2017-43", ano: 2017, n: 43, tema: "Filosofia e Sociologia", d: 1,
    ctx: "Em 1783, Immanuel Kant definiu o Esclarecimento como o desenvolvimento da autonomia do pensamento e da ação humana, opondo-se à comodidade de viver tutelado por ideias e instituições. Os indivíduos tornavam-se livres para exercer a razão na esfera pública, podendo criticar desde a Igreja e o Estado até a própria liberdade advinda do livre exercício da razão.",
    q: "O texto se relaciona à corrente filosófica ocidental conhecida como",
    a: ["Altruísmo.", "Confucionismo.", "Reformismo.", "Especismo.", "Iluminismo."],
    r: 4 },

  { id: "2017-44", ano: 2017, n: 44, tema: "Filosofia e Sociologia", d: 3,
    ctx: "“[A burguesia] afogou os fervores sagrados da exaltação religiosa, do entusiasmo cavalheiresco, do sentimentalismo pequeno-burguês nas águas geladas do cálculo egoísta. Fez da dignidade pessoal um simples valor de troca (...) Fez do médico, do jurista, do sacerdote, do poeta, do sábio seus servidores assalariados. A burguesia rasgou o véu do sentimentalismo que envolvia as relações de família e reduziu-as a meras relações monetárias.” (Marx e Engels, Manifesto comunista)",
    q: "As características da classe burguesa apresentadas no fragmento remetem à",
    a: ["afetividade das relações sociais.", "racionalização das relações sociais.", "tradição referente aos valores sociais.", "apologia ao Antigo Regime.", "revolução proletária."],
    r: 1 },

  { id: "2017-45", ano: 2017, n: 45, tema: "Filosofia e Sociologia", d: 2,
    ctx: "“O dilema racial brasileiro, na forma em que ele se manifesta na cidade de São Paulo, lança suas raízes em fenômenos de estratificação social. (...) O sistema de castas foi abolido legalmente [com a Abolição da Escravidão]. Na prática, porém, a população negra e mulata (...) em vez de ser projetada, em massa, nas classes sociais (...), viu-se incorporada à ‘plebe’, como se devesse converter-se numa camada social dependente e tivesse de compartilhar de uma ‘situação de casta’ disfarçada.” (Florestan Fernandes)",
    q: "De acordo com a abordagem do dilema racial na sociedade brasileira após a Abolição, pode-se afirmar corretamente que",
    a: ["para que fosse aceita socialmente, a população negra e mulata teve que aderir a uma situação de casta “disfarçada”, por meio da qual ascendeu socialmente.",
        "após a Abolição da Escravidão, a população negra e mulata escolheu continuar vivendo no sistema de castas.",
        "a Abolição da Escravidão não promoveu a integração completa da população negra e mulata ao sistema de classes sociais.",
        "com a Abolição da Escravidão, foram também abolidos o sistema de “castas disfarçadas” e as distinções entre classes sociais.",
        "o sistema de castas “disfarçadas” foi vantajoso para a população negra e mulata que, assim, deixou de ser considerada como parte da “plebe”."],
    r: 2 },

  // ---------- LÍNGUA PORTUGUESA ----------
  { id: "2017-46", ano: 2017, n: 46, tema: "Língua Portuguesa", d: 1, t: "trump",
    q: "De acordo com o trecho: “O presidente Donald Trump defendeu o embargo econômico dos Estados Unidos contra Cuba e condicionou avanços na relação bilateral a mudanças políticas na ilha na direção de eleições livres, libertação de presos políticos e respeito à liberdade de expressão.”, pode-se afirmar corretamente que",
    a: ["o presidente Donald Trump se posicionou contrariamente à libertação dos presos políticos em Cuba.",
        "o presidente Donald Trump impôs condições para a continuidade dos avanços nas relações com Cuba.",
        "as mudanças políticas na ilha, exigidas por Trump, levaram ao encarceramento de presos políticos.",
        "o embargo econômico é uma imposição do governo cubano ao presidente Donald Trump.",
        "eleições livres, libertação de presos políticos e respeito à liberdade de expressão foram exigências impostas pelo governo cubano ao presidente Donald Trump."],
    r: 1 },

  { id: "2017-47", ano: 2017, n: 47, tema: "Língua Portuguesa", d: 2, t: "trump",
    q: "Sobre as mudanças propostas pelo presidente Donald Trump relacionadas às relações com Cuba, pode-se afirmar corretamente que elas",
    a: ["determinaram a revogação de alguns pontos da política que fora anunciada por Barack Obama.", "proibiram as viagens de cubanos sozinhos rumo aos Estados Unidos.", "representaram uma maneira de fortalecer o Exército estadunidense.", "visaram fortalecer os laços de amizade entre os governos dos dois países.", "foram interpretadas pelo governo cubano como um atentado à liberdade de expressão."],
    r: 0 },

  { id: "2017-48", ano: 2017, n: 48, tema: "Língua Portuguesa", d: 2, t: "trump",
    q: "Assinale a alternativa que, de acordo com o texto, indica como Barack Obama e Donald Trump trataram a questão da relação bilateral.",
    a: ["Obama se encarregou de intensificar o embargo econômico, e Trump reforçou as políticas implementadas por Obama.", "Os dois reconheceram a importância da relação bilateral, e tiveram o mesmo posicionamento frente à questão do embargo.", "Trump discorda das decisões de Obama, mas concluiu que o embargo econômico poderia favorecer a relação entre os dois países.", "Enquanto Obama se opôs ao embargo, Trump deixou clara a sua intenção em intensificá-lo.", "Trump prometeu, ao longo de sua campanha, fornecer reforço político às medidas propostas por Obama."],
    r: 3 },

  { id: "2017-49", ano: 2017, n: 49, tema: "Língua Portuguesa", d: 2, t: "trump",
    q: "De acordo com as informações presentes no texto, assinale a alternativa que melhor descreve a postura de Donald Trump em relação ao país governado por Raúl Castro.",
    a: ["Reconciliadora, pois tratou de fortalecer o embargo econômico à ilha.", "Reconciliadora, pois foi contrária à postura adotada pelo governo Obama.", "Neutra, pois decisões políticas devem ser tomadas com sobriedade e sem pressa.", "Agressiva, pois se mostrou totalmente favorável às atitudes do governo cubano.", "Agressiva, pois reforçou o embargo econômico a Cuba."],
    r: 4 },

  { id: "2017-50", ano: 2017, n: 50, tema: "Língua Portuguesa", d: 2, t: "trump",
    q: "De acordo com o posicionamento de Trump apresentado no texto, as “‘atrocidades’ cometidas desde o início do regime dos irmãos Castro”",
    a: ["podem ser diretamente atribuídas ao governo de Barack Obama, responsável por financiar o regime castrista.", "não são de responsabilidade de Raúl Castro, mentor do processo de desaceleração do embargo econômico.", "foram negligenciadas pelo governo de Barack Obama, que preferiu beneficiar a população estadunidense em detrimento da população cubana.", "não serão mais toleradas em sua administração, e o acordo proposto visa beneficiar a população da ilha.", "foram intensificadas durante o governo de Barack Obama, que sempre nutriu apreço pelo regime castrista."],
    r: 3 },

  { id: "2017-51", ano: 2017, n: 51, tema: "Língua Portuguesa", d: 1, t: "trump",
    q: "Sobre o uso do termo cancelando presente em “Eu estou cancelando o acordo completamente unilateral da última administração com Cuba”, pode-se afirmar que se trata do uso do",
    a: ["infinitivo, servindo para indicar e reforçar o efeito da ação.", "particípio, indicando a participação de uma ação passada.", "infinitivo, não apresentando flexão de tempo e modo.", "gerúndio, apresentando uma ação em andamento.", "particípio, indicando uma ação que já terminada."],
    r: 3, exp: "Verbos terminados em -ndo (estou cancelando) estão no gerúndio e indicam ação em andamento." },

  { id: "2017-52", ano: 2017, n: 52, tema: "Língua Portuguesa", d: 2,
    q: "Assinale a alternativa que apresenta um período escrito de acordo com a norma padrão da língua portuguesa.",
    a: ["Me disseram que ele viria mais tarde.", "Ele não irá enganar ela de novo.", "Tô com medo do escuro, papai!", "Houveram muitas reclamações a respeito daquele professor.", "Faz duas semanas que ele viajou."],
    r: 4, exp: "(A) próclise no início de oração; (B) ‘enganá-la’; (C) ‘Estou’; (D) haver impessoal: ‘Houve’. Em (E), ‘fazer’ indicando tempo é impessoal e fica no singular." },

  { id: "2017-53", ano: 2017, n: 53, tema: "Língua Portuguesa", d: 3,
    q: "No período “O pai lembrou a filha do seu dever” observa-se uma possível dúvida com relação ao sentido pretendido devido ao uso",
    a: ["do artigo O em O pai, pois não se sabe ao certo de qual pai se trata.", "do artigo a em a filha, pois não se sabe ao certo de qual filha se trata.", "da preposição de, que atribui indeterminação ao verbo lembrar.", "do pronome possessivo seu, que não permite identificar de quem era o dever.", "do substantivo dever, pois esse termo é classificado como um substantivo indefinido."],
    r: 3, exp: "‘Seu’ é ambíguo: o dever pode ser do pai ou da filha." },

  { id: "2017-54", ano: 2017, n: 54, tema: "Língua Portuguesa", d: 2, img: ["2017-54.png"],
    q: "O efeito de humor do cartum advém do fato de o garoto",
    a: ["ficar feliz com o fato de o pai pedalar a bicicleta.", "afirmar que, tal qual a vida de seu pai, a bicicleta não se deslocava.", "usar palavras de uso pouco comum e de maneira incorreta, como é o caso de metáfora.", "entender que a bicicleta é a responsável pela anulação da existência do pai dele.", "criticar o pai que, em vez de trabalhar, passa o tempo pedalando e fazendo metáforas."],
    r: 1 },

  { id: "2017-55", ano: 2017, n: 55, tema: "Língua Portuguesa", d: 1,
    q: "A alternativa que apresenta uma metáfora é",
    a: ["O professor indicou a leitura de Machado de Assis.", "Suas palavras eram amargas e frias.", "Não foi trabalhar, pois o pai estava entre a vida e a morte.", "Estou morrendo de fome!", "Depois de muito tempo, ela entregou-lhe a chave do seu coração."],
    r: 4, exp: "‘Chave do coração’ usa um sentido figurado por semelhança, sem comparação explícita. (A) é metonímia; (D) é hipérbole." },

  { id: "2017-56", ano: 2017, n: 56, tema: "Língua Portuguesa", d: 1,
    q: "Assinale a alternativa que apresenta um período corretamente pontuado, seguindo a norma padrão da língua portuguesa.",
    a: ["O aluno levantou, o braço, pois tinha, uma dúvida.", "O aluno, levantou o braço, pois tinha uma dúvida.", "O aluno levantou o braço, pois tinha uma dúvida.", "O aluno levantou o braço pois, tinha uma dúvida.", "O aluno levantou o braço pois tinha uma dúvida."],
    r: 2, exp: "A conjunção explicativa ‘pois’ (depois do verbo) vem precedida de vírgula." },

  { id: "2017-57", ano: 2017, n: 57, tema: "Língua Portuguesa", d: 2, t: "amar",
    q: "No poema Amar, de Carlos Drummond de Andrade, prevalece a ideia de",
    a: ["oposição, ao descrever a dualidade que o poeta vislumbra no ato de amar.", "alegria, ao mostrar que o ato de amar não admite tristeza.", "satisfação, pois a verdadeira felicidade somente é alcançada pelo ato de amar.", "alívio, pois o poeta admite que somente o amor é capaz de apaziguar o espírito.", "tranquilidade, ao demonstrar que o amor é a solução para todos os males."],
    r: 0, exp: "O poema justapõe pares opostos: amar e esquecer, amar e malamar, amar e desamar, falta e abundância de amor." },

  { id: "2017-58", ano: 2017, n: 58, tema: "Língua Portuguesa", d: 3, t: "amar",
    ctx: "Definição: O mar simboliza a dinâmica da vida, os nascimentos, as transformações, a morte e os renascimentos. [...] O mar simboliza tanto a vida como a morte.",
    q: "Na segunda estrofe do poema, Drummond evoca a imagem do mar. Relacionando essa estrofe e a definição apresentada, é correto concluir que",
    a: ["o mar, tal qual o amor, apresenta um simbolismo que remete à ideia de antítese.", "diferentemente do amor, o mar apresenta um aspecto mórbido e sombrio.", "enquanto o mar, assim como as ondas, é essencialmente transitório, o amor perdura.", "as ondas do mar terminam na praia, mas o amor é infinito.", "o amor e o mar salvam os homens da morte, garantindo uma existência plena."],
    r: 0 },

  { id: "2017-59", ano: 2017, n: 59, tema: "Língua Portuguesa", d: 2, t: "amar",
    q: "A respeito do termo malamar, presente na primeira estrofe do poema, pode-se afirmar corretamente que se trata de",
    a: ["um verbo muito usado na linguagem mais formal, característica do autor.", "um advérbio de lugar, referente à localização próxima ao mar.", "um adjetivo que qualifica a forma de amar típica do poeta.", "um neologismo, palavra criada por Drummond pela junção do verbo amar e do advérbio de modo mal.", "um vocábulo que Drummond tomou emprestado da língua italiana, recurso recorrente na obra do autor."],
    r: 3 },

  { id: "2017-60", ano: 2017, n: 60, tema: "Língua Portuguesa", d: 3, t: "amar",
    ctx: "A obra de Carlos Drummond de Andrade apresenta características que a filiam ao movimento literário conhecido como Modernismo.",
    q: "Assinale a alternativa que apresenta corretamente a descrição de algumas características que podem ser notadas no poema Amar.",
    a: ["O chamado Mal do Século, marcado pelo pessimismo extremo com relação tanto ao passado como ao futuro, tal qual apresentado na obra de Álvares de Azevedo, contemporâneo de Drummond.",
        "Os conflitos dualistas entre o terreno e o celestial, o homem (Antropocentrismo) e Deus (Teocentrismo), o pecado e o perdão.",
        "Aurea mediocritas, ou o equilíbrio de ouro, partindo do pressuposto de que a simplicidade deveria ser o elemento preponderante, e o luxo e a ostentação deveriam ser tratados como algo inconcebível e o pastoralismo.",
        "A preocupação em apresentar uma realidade mais voltada a contemporaneidade de acordo com a veracidade dos fatos, a partir de temas relacionados com a realidade, focados nos aspectos sociais e cotidianos.",
        "A presença de um simbolismo abstrato, tendo como pano de fundo os sentimentos e as angústias do homem diante das transformações sociais da primeira metade do século XX."],
    r: 4 },

  // =====================================================================
  // PROVA 1º SEMESTRE 2018 (21/01/2018)
  // =====================================================================

  // ---------- LÍNGUA PORTUGUESA E LITERATURA ----------
  { id: "2018-01", ano: 2018, n: 1, tema: "Língua Portuguesa", d: 2, img: ["2018-01.png"],
    ctx: "Cartum: um personagem diz “Já vi tantos contratos de ‘termos de serviço’ que agora eu clico direto, sem ler.” O outro responde: “A familiaridade gera ‘desprezo’.”",
    q: "Com esse comentário (“Já vi tantos contratos de ‘termos de serviço’ que agora eu clico direto, sem ler.”), o personagem",
    a: ["justifica sua ação.", "contradiz sua atitude.", "recrimina seu colega.", "alude a um fato atípico.", "lembra um evento pontual."],
    r: 0, exp: "Ele explica por que clica sem ler: de tanto ver esses contratos, perdeu o cuidado. É uma justificativa da própria ação." },

  { id: "2018-02", ano: 2018, n: 2, tema: "Língua Portuguesa", d: 1, t: "gleiser",
    q: "O autor defende que",
    a: ["os cientistas devem ser tão humildes quanto Isaac Newton foi em sua vida profissional e particular.",
        "o pesquisador não pode se deixar influenciar pelas ideias de outros cientistas.",
        "o esforço dos pesquisadores deve se restringir a projetos que lhes deem a certeza do sucesso imediato.",
        "o comportamento do cientista pode servir de exemplo a ser adotado em outras esferas da vida.",
        "as pessoas comuns devem se interessar por ciência para que os mistérios do universo sejam desvendados."],
    r: 3, exp: "O 2º parágrafo diz que a sabedoria da pesquisa científica é útil em vários aspectos da vida, de desafios individuais à gestão de empresas." },

  { id: "2018-03", ano: 2018, n: 3, tema: "Língua Portuguesa", d: 2, t: "gleiser",
    q: "Uma palavra do texto cujo sentido se contrapõe ao de ciência é",
    a: ["experimentar (1º parágrafo).", "persistir (1º parágrafo).", "enfrentar (2º parágrafo).", "adivinhar (3º parágrafo).", "encontrar (5º parágrafo)."],
    r: 3, exp: "Ciência é conhecimento obtido com método e experimentação; ‘adivinhar’ é chegar a algo por palpite, sem método." },

  { id: "2018-04", ano: 2018, n: 4, tema: "Língua Portuguesa", d: 1, t: "gleiser",
    q: "A frase de Newton, ao final do texto, ilustra que esse cientista",
    a: ["hostilizava os estudiosos cujas descobertas haviam sido realizadas a partir do acaso.",
        "defendia que a ciência deveria ser levada mais a sério e era inacessível a pesquisadores amadores.",
        "reconhecia que seus achados eram pequenos diante do que ainda havia para se descobrir.",
        "não valorizava as suas próprias descobertas porque elas ainda não tinham sido testadas.",
        "não gostava de ser visto como um cientista, mas sim como um homem místico."],
    r: 2, exp: "Os ‘seixos e conchas’ são suas descobertas; o ‘grande oceano da verdade’ é o que ainda falta descobrir." },

  { id: "2018-05", ano: 2018, n: 5, tema: "Língua Portuguesa", d: 1, t: "gleiser",
    q: "No primeiro parágrafo, as vírgulas são empregadas para",
    a: ["enfatizar palavras empregadas com sentido figurado.", "separar elementos que se somam em uma sequência.", "contrastar expressões com sentidos contraditórios no contexto.", "listar eventos históricos que se sucederam cronologicamente.", "evidenciar que o parágrafo é a citação do discurso de um terceiro."],
    r: 1, exp: "O parágrafo é uma enumeração: ‘tentativa e erro, experimentar o novo, entender…, cultivar…, aceitar…, saber persistir…’." },

  { id: "2018-06", ano: 2018, n: 6, tema: "Língua Portuguesa", d: 2, t: "gleiser",
    ctx: "Considere a frase do 4º parágrafo: Se as coisas não funcionam, precisamos deixar o orgulho para trás e aceitar que falhamos.",
    q: "Quanto ao restante da frase, o trecho “Se as coisas não funcionam” expressa uma",
    a: ["causa e, conforme a norma-padrão, pode ser substituído por: Porque as coisas não funcionem.",
        "finalidade e, conforme a norma-padrão, pode ser substituído por: A fim de que as coisas não funcionem.",
        "concessão e, conforme a norma-padrão, pode ser substituído por: Embora as coisas não funcionam.",
        "consequência e, conforme a norma-padrão, pode ser substituído por: Tanto que as coisas não funcionam.",
        "condição e, conforme a norma-padrão, pode ser substituído por: Caso as coisas não funcionem."],
    r: 4, exp: "‘Se’ introduz uma condição. ‘Caso’ também é condicional e pede o verbo no subjuntivo (‘funcionem’)." },

  { id: "2018-07", ano: 2018, n: 7, tema: "Língua Portuguesa", d: 2, t: "gleiser",
    q: "Assinale a alternativa em que o trecho “… é bom ouvir as sábias palavras de Isaac Newton…” (5º parágrafo) está reescrito com o verbo em destaque (ouvir) na voz passiva e de acordo com a norma-padrão.",
    a: ["… é bom que ouça-se as sábias palavras de Isaac Newton…", "… é bom que sejam ouvida as sábias palavras de Isaac Newton…", "… é bom que sejam ouvidas as sábias palavras de Isaac Newton…", "… é bom que seja ouvido as sábias palavras de Isaac Newton…", "… é bom que ouça as sábias palavras de Isaac Newton…"],
    r: 2, exp: "Na voz passiva, o verbo ‘ser’ e o particípio concordam com o sujeito (‘as sábias palavras’): ‘sejam ouvidas’." },

  { id: "2018-08", ano: 2018, n: 8, tema: "Língua Portuguesa", d: 3,
    q: "Assinale a alternativa em que a regência, no trecho destacado, apresenta-se de acordo com a da norma-padrão.",
    a: ["Houve muita coragem intelectual, disciplina de trabalho e tolerância ao erro comprometidas da aquisição desse conhecimento todo.",
        "Adquirir esse conhecimento todo demandou de muita coragem intelectual, disciplina de trabalho e tolerância ao erro.",
        "Esse conhecimento todo foi adquirido à custa em muita coragem intelectual, disciplina de trabalho e tolerância ao erro.",
        "Muita coragem intelectual, disciplina de trabalho e tolerância ao erro estiveram envolvidas na aquisição desse conhecimento todo.",
        "Para adquirir esse conhecimento todo, foi preciso demonstrar de muita coragem intelectual, disciplina de trabalho e tolerância ao erro."],
    r: 3, exp: "‘Envolvido’ rege a preposição ‘em’ (‘envolvidas na aquisição’). As demais têm erro: ‘demandou de’ (verbo transitivo direto), ‘à custa em’ (correto: ‘à custa de’), ‘demonstrar de’ (transitivo direto) e ‘comprometidas da’ (correto: ‘com a’)." },

  { id: "2018-09", ano: 2018, n: 9, tema: "Língua Portuguesa", d: 2, t: "casmurro",
    q: "Uma característica do estilo de Machado de Assis que pode ser observada nesse trecho diz respeito ao modo como o narrador",
    a: ["se limita à descrição psicológica, sem mencionar qualquer traço físico do personagem.", "anuncia um fato de ordem coletiva como se fosse uma experiência pessoal.", "faz comentários sobre o próprio texto e conversa diretamente com o leitor.", "não se envolve afetivamente com a história, o que retira o teor ficcional do relato.", "não emite juízos de valor, como se os fatos se dessem a conhecer sem intermediários."],
    r: 2, exp: "Marcas: ‘se considerares…’, ‘imaginarás…’, ‘há leitores tão obtusos…’, ‘Vamos ao resto’. O narrador dialoga com o leitor e comenta a própria narrativa." },

  { id: "2018-10", ano: 2018, n: 10, tema: "Língua Portuguesa", d: 1, t: "casmurro",
    q: "Em Dom Casmurro, Bentinho é o narrador que",
    a: ["ouve de terceiros histórias de personalidades intrigantes e as organiza por escrito.", "relata, em forma de diário, as experiências vividas ao mesmo tempo em que escreve.", "registra, com isenção de opinião, as aventuras das pessoas com quem conviveu.", "investiga as vidas de quem o traiu no passado para arquitetar sua vingança.", "conta suas memórias, com o objetivo de compreender seu passado e seu presente."],
    r: 4 },

  { id: "2018-11", ano: 2018, n: 11, tema: "Língua Portuguesa", d: 2, t: "casmurro",
    q: "Condizente com a estética do realismo brasileiro, a linguagem de Dom Casmurro caracteriza-se por",
    a: ["ser predominantemente culta e direta.", "conter um grande número de neologismos.", "expressar o sentimentalismo com exagero.", "representar a fala do povo sem instrução.", "romper propositalmente com a gramática normativa."],
    r: 0 },

  { id: "2018-12", ano: 2018, n: 12, tema: "Língua Portuguesa", d: 1, t: "menino",
    q: "Da leitura desse trecho, entende-se que",
    a: ["o senhor de engenho mandou diversificar a dieta dos carpinas mas foi desobedecido.", "os carpinas foram punidos após um deles reclamar de lhes servirem apenas bacalhau.", "a população do engenho do Brejo costumava se alimentar de urubu.", "a ingestão exagerada de bacalhau deixou os carpinas próximos de morrer.", "o peru servido aos carpinas estava contaminado por ser criado junto a urubus."],
    r: 1, exp: "Depois da reclamação, o ‘peru’ que chegou era urubu, uma forma de punir o carpina que reclamou." },

  { id: "2018-13", ano: 2018, n: 13, tema: "Língua Portuguesa", d: 1, t: "menino",
    q: "Publicado em 1932, Menino de engenho representa a prosa",
    a: ["regionalista comprometida em retratar a vida de moradores do Nordeste brasileiro.", "romântica voltada para a exaltação idealizada do território brasileiro e sua gente.", "psicológica especializada em investigar o funcionamento da mente humana.", "surrealista empenhada em empregar a lógica dos sonhos na criação ficcional.", "naturalista engajada com o estudo do comportamento humano a partir da ciência."],
    r: 0, exp: "José Lins do Rego integra o Regionalismo de 1930, ambientado nos engenhos de açúcar do Nordeste." },

  { id: "2018-14", ano: 2018, n: 14, tema: "Língua Portuguesa", d: 3, t: "noticias",
    q: "No poema, os telegramas equivalem",
    a: ["aos anúncios publicitários que glorificam as ações do governo, com o intuito de angariar votos da população.", "aos telefonemas de amigos ou familiares do eu lírico, de quem este se apartou deliberadamente.", "a cartas que o eu lírico recebe de pessoas próximas, que o tranquilizam sobre a situação em que se encontram.", "a comunicações emitidas por partidos políticos, convidando o eu lírico a apoiar os ideais capitalistas.", "às notícias de vítimas de algum tipo de privação ou violência, com as quais o eu lírico se solidariza."],
    r: 4, exp: "Os telegramas são ‘frios, duros, sem conforto’; chegam dos ‘mortos’ e de ‘irmãos sombrios’, ou seja, notícias de quem sofre, e o eu lírico sente-se solidário (‘vozes amigas’)." },

  { id: "2018-15", ano: 2018, n: 15, tema: "Língua Portuguesa", d: 2, t: "noticias",
    q: "O eu lírico expressa um sentimento de impotência, o qual se evidencia no verso",
    a: ["Chamas com urgência, estou paralisado.", "sinto vozes amigas, recados", "Os telegramas vieram no vento.", "Quanto sertão, quanta renúncia atravessaram!", "Todo homem sozinho devia fazer uma canoa"],
    r: 0, exp: "‘Estou paralisado’ mostra que ele é chamado com urgência e não consegue agir." },

  // ---------- LÍNGUA INGLESA ----------
  { id: "2018-16", ano: 2018, n: 16, tema: "Língua Inglesa", d: 1, t: "slavery",
    q: "Leia o primeiro parágrafo, em que se responde à pergunta “What is modern-day slavery?”. De acordo com esse parágrafo, uma das formas que a escravidão moderna assume é",
    a: ["o tráfico transatlântico de pessoas.", "a vinculação de pessoas por meio de endividamento.", "o preconceito em relação a refugiados e migrantes.", "a exploração desenfreada do trabalho sazonal no agronegócio.", "a marginalização de mulheres no mercado de trabalho."],
    r: 1, exp: "‘…whole families working for nothing to pay off generational debts’ e ‘debt bondage’ = servidão por dívida." },

  { id: "2018-17", ano: 2018, n: 17, tema: "Língua Inglesa", d: 2, t: "slavery",
    q: "No trecho do terceiro parágrafo – all work or service which is exacted from any person under the menace of any penalty and for which the said person has not offered himself voluntarily – o termo em destaque (which) se refere a",
    a: ["slavery-like practices.", "criminalisation and abolishment.", "work or service.", "any person.", "the menace of any penalty."],
    r: 2, exp: "‘for which’ retoma ‘work or service’: o trabalho ou serviço para o qual a pessoa não se ofereceu voluntariamente." },

  { id: "2018-18", ano: 2018, n: 18, tema: "Língua Inglesa", d: 2, t: "slavery",
    q: "De acordo com o terceiro parágrafo, a Convenção Suplementar das Nações Unidas de 1956 inclui como escravidão moderna",
    a: ["a obrigação de ter filhos, mesmo que indesejados.", "o trabalho voluntário, sem pagamento.", "o casamento sem consentimento dos pais.", "a cobrança de dívidas sob ameaça.", "a situação de servidão."],
    r: 4, exp: "A convenção cita ‘debt bondage, serfdom (servidão), forced marriage and the delivery of a child…’." },

  { id: "2018-19", ano: 2018, n: 19, tema: "Língua Inglesa", d: 2, t: "slavery",
    q: "No trecho do terceiro parágrafo – As contemporary systems of slavery have evolved – o termo em destaque (As) equivale, em português, a",
    a: ["à medida que.", "como.", "mesmo que.", "depois de.", "além de."],
    r: 0, exp: "‘As’ com sentido de proporção/tempo: ‘à medida que os sistemas de escravidão evoluíram…’." },

  { id: "2018-20", ano: 2018, n: 20, tema: "Língua Inglesa", d: 2, t: "slavery",
    q: "De acordo com o quarto parágrafo, a ILO estima que",
    a: ["o número de escravos na modernidade seja muito maior do que o contabilizado.", "o tráfico de pessoas para remoção de órgãos seja expressivo.", "a maioria das crianças escravizadas seja usada como soldados em milícias.", "mais de um quinto dos escravos na modernidade sofram exploração sexual.", "pessoas em casamentos forçados estejam incluídas nos 21 milhões que exercem trabalhos forçados."],
    r: 3, exp: "‘Sexual exploitation accounts for 22% of slaves’, e 22% é mais de 1/5 (20%)." },

  { id: "2018-21", ano: 2018, n: 21, tema: "Língua Inglesa", d: 1, t: "slavery",
    q: "No trecho do quarto parágrafo – unless the last two practices result in forced labour – o termo em destaque (unless) indica ideia de",
    a: ["adição.", "causa.", "exceção.", "comparação.", "contraste."],
    r: 2, exp: "‘Unless’ = ‘a menos que’, que introduz uma exceção." },

  // ---------- HISTÓRIA ----------
  { id: "2018-22", ano: 2018, n: 22, tema: "História", d: 2,
    ctx: "“A caminhada de Atenas em direção à democracia não aconteceu de uma hora para outra. [...] Para que se chegasse à democracia foi preciso muita luta popular. Isso foi possível, entre outros motivos, graças à ampliação do comércio marítimo ateniense, o que fortaleceu os comerciantes. Os próprios camponeses conseguiram ampliar sua participação social devido, também, ao seu crescente papel econômico em uma Atenas cada vez mais voltada para o mundo exterior.” (Pedro Paulo Funari. Grécia e Roma. Adaptado)",
    q: "A “caminhada” mencionada no trecho representou uma perda gradual de poder por parte",
    a: ["dos legisladores ligados à elite do exército.", "dos sacerdotes, que controlavam a cena religiosa.", "do rei, que governava de forma absoluta.", "da aristocracia rural de grandes proprietários.", "dos senadores, que detinham o monopólio do voto."],
    r: 3, exp: "Comerciantes e camponeses ganharam espaço frente aos eupátridas, a aristocracia de grandes proprietários rurais." },

  { id: "2018-23", ano: 2018, n: 23, tema: "História", d: 1,
    ctx: "“No mundo islâmico medieval, se mantinham numerosos elementos não muçulmanos na população e, dentre eles, judeus e cristãos se beneficiavam de um estatuto particular: ‘povos da Bíblia’. Eram considerados como sendo crentes do mesmo deus, ainda que lhes faltasse a revelação suprema e derradeira, a de Maomé.” (George Tate. O Oriente das Cruzadas. Adaptado)",
    q: "O trecho apresenta uma característica fundamental do mundo árabe islâmico no contexto da expansão muçulmana, corretamente identificada como",
    a: ["obscurantismo dogmático.", "preconceito racial.", "comportamento xenofóbico.", "intolerância religiosa.", "coexistência com a diferença."],
    r: 4 },

  { id: "2018-24", ano: 2018, n: 24, tema: "História", d: 3, img: ["2018-24a.png", "2018-24b.png"],
    ctx: "Mapa 1: mapa “TO”, produzido no século VII. Mapa 2: mapa-múndi do início do século XVI.",
    q: "Os dois mapas foram produzidos em contextos históricos distintos. Acerca das transformações ocorridas entre os séculos VII e XVI, é correto identificar",
    a: ["a construção de uma visão mais científica da cartografia, aliada ao aperfeiçoamento das técnicas cartográficas no contexto das Grandes Navegações (mapa 2), em oposição a uma cartografia mais ligada à representação do sagrado e do imaginário (mapa 1).",
        "o fortalecimento progressivo da Igreja Católica, especialmente no que diz respeito ao controle das formas de representação do espaço (mapa 2), em oposição a uma cartografia vinculada aos interesses dos mercadores em ascensão (mapa 1).",
        "os impactos e desdobramentos da Reforma Protestante, que alargou a visão de mundo dos europeus (mapa 2), em oposição a uma cartografia relacionada à perspectiva dos senhores feudais, em que apenas interessava a representação do feudo (mapa 1).",
        "o avanço das Cruzadas e da Guerra da Reconquista, que colocou o europeu em contato com novos territórios (mapa 2), em oposição a uma cartografia que representava exclusivamente os territórios em que prevalecia o feudalismo (mapa 1).",
        "o processo de centralização política, em que se destacam as fronteiras das monarquias absolutistas (mapa 2), em oposição a uma cartografia associada aos interesses regionais da nobreza, com uma noção local de espaço e de propriedade (mapa 1)."],
    r: 0, exp: "O mapa TO é simbólico (Jerusalém, Ásia, Europa e África como esquema religioso). O mapa do século XVI incorpora os conhecimentos das Grandes Navegações." },

  { id: "2018-25", ano: 2018, n: 25, tema: "História", d: 1, img: ["2018-25.png"],
    ctx: "Detalhe da gravura “Engenho de Itamaracá” (1647), de Frans Post, pintor holandês que esteve no Brasil no século XVII (moenda).",
    q: "A gravura coloca em evidência o principal produto de interesse dos holandeses à época da ocupação no Nordeste. Tal produto pode ser corretamente identificado como",
    a: ["cacau.", "tabaco.", "algodão.", "açúcar.", "café."],
    r: 3, exp: "Os holandeses (Companhia das Índias Ocidentais) ocuparam o Nordeste açucareiro; a moenda é do engenho de cana." },

  { id: "2018-26", ano: 2018, n: 26, tema: "História", d: 2, img: ["2018-26.png"],
    ctx: "“Projeto de uma estátua equestre para o ilustre chefe do Partido Liberal.” Charge publicada na Revista Illustrada, em 1880.",
    q: "A charge faz uma crítica",
    a: ["ao intenso envolvimento dos liberais com a causa abolicionista.", "à crise social vivida pelo país devido à luta contra a escravidão.", "ao compromisso das elites políticas do Império com a escravidão.", "aos agitadores republicanos contrários ao Império e à escravidão.", "à radicalidade exagerada de negros e indígenas abolicionistas."],
    r: 2, exp: "A ‘estátua’ do chefe liberal se ergue sobre a violência da escravidão (um senhor chicoteando um escravizado). A charge critica a elite política do Império, ligada ao regime escravista." },

  { id: "2018-27", ano: 2018, n: 27, tema: "História", d: 2, img: ["2018-27.png"],
    ctx: "O símbolo do Partido Fascista italiano, reproduzido parcialmente na imagem, é constituído por um feixe de varas em torno de um machado.",
    q: "Tal símbolo busca representar um aspecto da ideologia fascista, corretamente compreendido como a",
    a: ["mobilização operária em prol de uma radical revolução anticapitalista e internacionalista.", "defesa da tradição rural em oposição aos elementos modernos, industriais e urbanos.", "força e a união do povo italiano em luta contra os inimigos da nação, como os comunistas.", "apologia à destruição causada pelas transformações oriundas do progresso econômico.", "manifestação da ancestralidade viking reivindicada pelos fascistas como culto do passado."],
    r: 2, exp: "O fascio (feixe de varas) vem da Roma antiga e simboliza a união (varas juntas não se quebram), com o machado como símbolo de força e autoridade." },

  { id: "2018-28", ano: 2018, n: 28, tema: "História", d: 2, img: ["2018-28.png"],
    ctx: "A imagem retrata o encontro entre Getúlio Vargas e Franklin D. Roosevelt na cidade de Natal (RN), no ano de 1943.",
    q: "Tal encontro simboliza",
    a: ["a troca de ideias em torno das propostas econômicas keynesianas que visavam superar a situação de crise vivida desde 1929.", "a importante aproximação entre Brasil e EUA que levou à entrada do Brasil na Segunda Guerra Mundial ao lado dos aliados.", "o interesse econômico norte-americano na realização de investimentos voltados à industrialização da região Nordeste.", "a tentativa dos EUA de pressionarem o Brasil a abrir a exploração do petróleo à iniciativa privada e ao capital estrangeiro.", "a busca de componentes eletrônicos para o abastecimento do parque industrial dos EUA, intensificando os laços econômicos entre os países."],
    r: 1, exp: "Natal abrigou uma base aérea importante para os aliados. O Brasil declarou guerra ao Eixo em 1942 e enviou a FEB à Itália em 1944." },

  // ---------- GEOGRAFIA ----------
  { id: "2018-29", ano: 2018, n: 29, tema: "Geografia", d: 2,
    ctx: "“O problema da identidade nacional foi sem dúvida o grande fator de votação pela saída da União Europeia. No caso inglês foi equacionado com a atitude anti-imigrante. O elemento inquietante neste debate é a total ausência do problema da desigualdade social que tem subido no Reino Unido, assim como em todo o mundo ocidental, desde os anos de 1980.” (www.publico.pt. Adaptado)",
    q: "De acordo com o excerto, uma das causas da escolha do Reino Unido de deixar a União Europeia está fundamentada",
    a: ["na neutralidade ideológica.", "no europeísmo.", "na democracia racial.", "no nacionalismo.", "na soberania compartilhada."],
    r: 3, exp: "‘Identidade nacional’ e ‘atitude anti-imigrante’ são expressões do nacionalismo." },

  { id: "2018-30", ano: 2018, n: 30, tema: "Geografia", d: 1, img: ["2018-30.png"],
    ctx: "Charge de Chico Andrade: dois personagens (Trump e Kim Jong-un) jogam videogame com controles nas mãos, e a tela mostra foguetes sendo lançados (“Foguetes…”).",
    q: "A charge ironiza o seguinte aspecto das relações internacionais na atualidade:",
    a: ["as ameaças militares mútuas entre os Estados Unidos e a Coreia do Norte.", "as falhas nos sistemas de telecomunicações entre os continentes americano e asiático.", "o monopólio dos Tigres Asiáticos e dos Estados Unidos na produção de jogos eletrônicos.", "o retorno da regionalização do mundo entre ocidente socialista e oriente capitalista.", "a ausência de relações comerciais entre a China e os Estados Unidos."],
    r: 0 },

  { id: "2018-31", ano: 2018, n: 31, tema: "Geografia", d: 2,
    ctx: "A Venezuela está enfrentando uma grave crise institucional e econômica, com a presença de distúrbios sociais e instabilidade política.",
    q: "Considerando que a economia do país possui enorme dependência das exportações de petróleo, uma das razões dos problemas econômicos do país diz respeito à",
    a: ["baixa quantidade de reservas de petróleo, que estão na iminência do esgotamento.", "substituição global do petróleo por fontes de energia alternativas e renováveis.", "redução dos preços do barril de petróleo devido ao aumento da oferta mundial do recurso.", "ocupação das regiões produtoras de petróleo da Venezuela por milícias fundamentalistas.", "incapacidade técnica do país em produzir petróleo em áreas sujeitas a terremotos."],
    r: 2, exp: "A Venezuela tem as maiores reservas do mundo; a queda do preço do barril (a partir de 2014) atingiu duramente a receita do país." },

  { id: "2018-32", ano: 2018, n: 32, tema: "Geografia", d: 2, img: ["2018-32.png"],
    ctx: "Mapa: uso de agrotóxico no Brasil. Levantamento mostra os estados que mais usaram agrotóxicos entre 2012 e 2014 (relação entre a média anual do uso de agrotóxico, em kg, e a área agrícola da unidade da federação, em hectare).",
    q: "A região brasileira que apresenta os maiores indicadores de utilização de agrotóxicos proporcionais à área agrícola corresponde ao",
    a: ["Sul.", "Nordeste.", "Centro-Oeste.", "Norte.", "Sudeste."],
    r: 2, exp: "No mapa, a faixa de cor mais escura (12,23 a 16,69 kg por hectare) cobre principalmente o Centro-Oeste, com destaque para Mato Grosso e Goiás." },

  { id: "2018-33", ano: 2018, n: 33, tema: "Geografia", d: 2, img: ["2018-33a.png", "2018-33b.png"],
    ctx: "Pirâmides etárias do Brasil em 1980 (população: 122.199.721) e em 2017 (população: 211.243.220).",
    q: "Com base na estrutura da pirâmide etária nos períodos selecionados e na dinâmica demográfica do Brasil, é correto afirmar que",
    a: ["o aumento do número de adultos é um efeito das políticas de estímulo às emigrações.", "a redução da base está relacionada com a diminuição da taxa de natalidade.", "o aumento do número de jovens é uma consequência do processo de êxodo urbano.", "o aumento do topo é um reflexo da superação das desigualdades sociais do país.", "a redução do número de crianças é o resultado do retorno de doenças erradicadas."],
    r: 1, exp: "A base (0–4 anos) caiu de cerca de 7% para 3,7% em cada sexo: menos nascimentos, ou seja, queda da natalidade." },

  { id: "2018-34", ano: 2018, n: 34, tema: "Geografia", d: 1, img: ["2018-34.png"],
    q: "Uma característica do bioma do Pantanal em destaque na imagem é a presença de",
    a: ["dobramentos modernos.", "mares de morros.", "vegetação xerófita.", "depressões interplanálticas.", "terras periodicamente alagáveis."],
    r: 4, exp: "A imagem mostra lagoas e campos inundáveis; o Pantanal é uma planície que alaga na estação das cheias." },

  { id: "2018-35", ano: 2018, n: 35, tema: "Geografia", d: 2, img: ["2018-35.png"],
    ctx: "Figura “antes e depois”: a remoção da mata ciliar leva a uma área erodida e à deposição de sedimentos no rio.",
    q: "O processo ilustrado nas figuras provoca, entre outras consequências, a",
    a: ["ampliação das terras agricultáveis.", "recuperação da flora subaquática.", "escavação do leito fluvial.", "redução do volume de água do rio.", "recarga de lençóis freáticos."],
    r: 3, exp: "Sem mata ciliar, o solo erode e os sedimentos assoreiam o rio, diminuindo sua profundidade e o volume de água." },

  // ---------- BIOLOGIA ----------
  { id: "2018-36", ano: 2018, n: 36, tema: "Biologia", d: 2, img: ["2018-36.png"],
    ctx: "A figura ilustra as trocas gasosas de três processos metabólicos realizados pelos vegetais: respiração (entra O₂, sai CO₂), fotossíntese (entra CO₂, sai O₂) e transpiração (sai H₂O).",
    q: "Com relação aos processos indicados, é correto afirmar que",
    a: ["a fotossíntese é responsável por produzir o gás oxigênio a partir do gás carbônico.", "a maior parte das moléculas de água liberadas na transpiração é produzida na respiração.", "as plantas realizam a fotossíntese apenas durante o dia e a respiração apenas durante a noite.", "a transpiração envolve a participação de válvulas foliares denominadas estômatos.", "a respiração é realizada na mesma organela celular que realiza a fotossíntese."],
    r: 3, exp: "A transpiração ocorre principalmente pelos estômatos. Na fotossíntese, o O₂ vem da água (e não do CO₂); a respiração ocorre dia e noite, nas mitocôndrias." },

  { id: "2018-37", ano: 2018, n: 37, tema: "Biologia", d: 1, img: ["2018-37.png"],
    ctx: "Figura dos níveis de organização da matéria viva: átomos, moléculas, organelas, célula, tecidos, órgão, sistemas, organismos, populações, comunidades, ecossistemas e biosfera.",
    q: "Sobre os níveis de organização ilustrados, é correto afirmar que",
    a: ["as organelas são as menores unidades vivas dos seres vivos.", "os tecidos são agrupamentos de células que desempenham uma função em comum.", "as populações comportam organismos de espécies diferentes em um mesmo local.", "as comunidades são compostas por fatores bióticos e abióticos.", "os ecossistemas são ambientes isolados e que não se inter-relacionam."],
    r: 1, exp: "A célula é a menor unidade viva. População = mesma espécie; comunidade = só seres vivos de várias espécies (bióticos); ecossistema inclui os fatores abióticos e se relaciona com outros." },

  { id: "2018-38", ano: 2018, n: 38, tema: "Biologia", d: 2,
    ctx: "Número de cromossomos no núcleo de células somáticas: Gallus gallus (galo) = 78; Felis catus (gato) = 76; Pan troglodytes (chimpanzé) = 48.",
    q: "Dessa forma, o óvulo, o zigoto e o espermatozoide, respectivamente,",
    a: ["da chimpanzé, do gato e do galo apresentam 24, 76 e 39 cromossomos.", "da galinha, do gato e do chimpanzé apresentam 39, 38 e 24 cromossomos.", "da gata, do galo e do chimpanzé apresentam 76, 78 e 48 cromossomos.", "da chimpanzé, do galo e do gato apresentam 24, 39, 38 cromossomos.", "da galinha, do chimpanzé e do gato apresentam 39, 24, 38 cromossomos."],
    r: 0, exp: "Gametas têm metade do número (n); o zigoto tem o número completo (2n). Óvulo de chimpanzé = 24; zigoto de gato = 76; espermatozoide de galo = 39." },

  { id: "2018-39", ano: 2018, n: 39, tema: "Biologia", d: 3, img: ["2018-39.png"],
    ctx: "O coração dos mamíferos tem quatro cavidades. A válvula tricúspide fica entre o átrio e o ventrículo direitos; a mitral, entre o átrio e o ventrículo esquerdos. As válvulas aórtica e pulmonar ficam nas saídas dos ventrículos esquerdo e direito, respectivamente.",
    q: "Sobre o fluxo de sangue no coração, é correto afirmar que através das válvulas",
    a: ["aórtica e mitral flui sangue rico em gás carbônico.", "aórtica e pulmonar flui sangue rico em gás carbônico.", "tricúspide e pulmonar flui sangue rico em gás carbônico.", "tricúspide e aórtica flui sangue rico em gás oxigênio.", "tricúspide e mitral flui sangue rico em gás oxigênio."],
    r: 2, exp: "O lado direito do coração recebe e bombeia sangue venoso (rico em CO₂): passa pela tricúspide e sai pela válvula pulmonar rumo aos pulmões. O lado esquerdo (mitral e aórtica) tem sangue arterial." },

  { id: "2018-40", ano: 2018, n: 40, tema: "Biologia", d: 2, img: ["2018-40.png"],
    ctx: "Heredograma de uma característica condicionada por um par de alelos autossômicos. Símbolos preenchidos são os indivíduos que apresentam a característica (2 e 8).",
    q: "Considerando o heredograma, é correto afirmar que os indivíduos",
    a: ["2 e 8 são dominantes.", "1 e 3 são homozigotos.", "5, 6 e 7 são recessivos.", "2 e 8 são heterozigotos.", "3 e 4 são heterozigotos."],
    r: 4, exp: "Os pais 3 e 4 não são afetados e têm um filho afetado (8): a característica é recessiva e 3 e 4 são heterozigotos (Aa). Os afetados 2 e 8 são aa." },

  // ---------- QUÍMICA ----------
  { id: "2018-41", ano: 2018, n: 41, tema: "Química", d: 1, t: "leite",
    q: "Assinale a alternativa que apresenta o nutriente desse leite que é constituído principalmente por macromoléculas cujas cadeias se unem por ligações peptídicas.",
    a: ["Carboidratos.", "Proteínas.", "Gorduras Saturadas.", "Gorduras Trans.", "Colesterol."],
    r: 1, exp: "Proteínas são cadeias de aminoácidos unidos por ligações peptídicas." },

  { id: "2018-42", ano: 2018, n: 42, tema: "Química", d: 2, t: "leite",
    q: "A concentração em massa de cálcio presente nesse leite, expressa em g/L, é aproximadamente igual a",
    a: ["0,1.", "0,2.", "1.", "2.", "10."],
    r: 2, exp: "214 mg = 0,214 g em 200 mL = 0,2 L. Concentração = 0,214/0,2 ≈ 1,07 g/L ≈ 1 g/L." },

  { id: "2018-43", ano: 2018, n: 43, tema: "Química", d: 2, t: "salina", img: ["2018-43.png"],
    q: "Nota-se nessa imagem que os tanques da salina são rasos e largos. Essas características são importantes para a produção do sal porque quanto ______ a superfície de contato com o ar, mais ______ é a ______ da água do mar. Assinale a alternativa que preenche, correta e respectivamente, as lacunas.",
    a: ["menor … lenta … ebulição", "menor … rápida … evaporação", "maior … lenta … evaporação", "maior … rápida … ebulição", "maior … rápida … evaporação"],
    r: 4, exp: "Maior superfície de contato com o ar acelera a evaporação (que ocorre só na superfície, à temperatura ambiente). Não há ebulição nas salinas." },

  { id: "2018-44", ano: 2018, n: 44, tema: "Química", d: 1, t: "salina",
    q: "Na água do mar, o elemento sódio (número atômico = 11) encontra-se sob a seguinte forma:",
    a: ["átomos Na", "cátions Na⁺", "cátions Na²⁺", "ânions Na⁻", "ânions Na²⁻"],
    r: 1, exp: "O sódio (Z = 11, 1 elétron na última camada) perde 1 elétron e forma o cátion Na⁺." },

  { id: "2018-45", ano: 2018, n: 45, tema: "Química", d: 1,
    q: "O pH de um suco de uva é próximo de 4,0 a 25 ºC. Logo, esse suco apresenta",
    a: ["[H₃O⁺] < [OH⁻] e, portanto, é ácido.", "[H₃O⁺] > [OH⁻] e, portanto, é ácido.", "[H₃O⁺] = [OH⁻] e, portanto, é ácido.", "[H₃O⁺] > [OH⁻] e, portanto, é básico.", "[H₃O⁺] = [OH⁻] e, portanto, é básico."],
    r: 1, exp: "pH menor que 7 a 25 °C: meio ácido, com [H₃O⁺] = 10⁻⁴ mol/L maior que [OH⁻] = 10⁻¹⁰ mol/L." },

  // ---------- FÍSICA ----------
  { id: "2018-46", ano: 2018, n: 46, tema: "Física", d: 2,
    ctx: "Um ciclista desce uma rampa, tentando manter constante a velocidade da bicicleta sempre usando os freios, mas chega ao final do percurso com velocidade maior do que a do início.",
    q: "É correto afirmar que, ao final desse movimento de descida, sua energia",
    a: ["mecânica foi totalmente transformada em calor.", "mecânica aumentou em relação à inicial.", "potencial gravitacional diminuiu em relação à inicial.", "potencial gravitacional foi transformada integralmente em cinética.", "cinética aumentou tanto quanto diminuiu a potencial gravitacional."],
    r: 2, exp: "Ao descer, a altura diminui, então a energia potencial gravitacional diminui. Parte vira cinética e parte vira calor nos freios e no atrito, por isso (D) e (E) estão erradas." },

  { id: "2018-47", ano: 2018, n: 47, tema: "Física", d: 2,
    ctx: "Um mergulhador explora um caminhão afundado junto com um navio. O mergulhador desceu verticalmente até o local.",
    q: "Uma vez totalmente imerso, e durante esse movimento, o empuxo exercido pela água sobre o mergulhador",
    a: ["aumentou, mas a pressão exercida pela água permaneceu constante.", "aumentou, assim como aumentou a pressão exercida pela água.", "permaneceu constante, mas a pressão exercida pela água aumentou.", "diminuiu, mas a pressão exercida pela água permaneceu constante.", "diminuiu, mas a pressão exercida pela água aumentou."],
    r: 2, exp: "O empuxo depende do volume deslocado (constante, pois já está totalmente imerso) e da densidade do líquido. A pressão aumenta com a profundidade (p = p₀ + ρgh)." },

  { id: "2018-48", ano: 2018, n: 48, tema: "Física", d: 2, img: ["2018-48.png"],
    ctx: "A figura mostra a formação de um trem de ondas periódicas eletromagnéticas: o campo elétrico E vibra na direção y, o campo magnético B vibra na direção z e a onda se propaga na direção x.",
    q: "Ondas eletromagnéticas são formadas por dois campos, um elétrico e outro magnético. De acordo com a figura, dentre as principais características dessas ondas, destaca-se o fato de",
    a: ["os campos terem intensidades variáveis e direções de vibração paralelas (y e z), sendo x a direção de propagação.", "os campos terem intensidades variáveis e direções de vibração perpendiculares (y e z), sendo x a direção de propagação.", "as direções de vibração e de propagação se confundirem com as intensidades dos campos, mas todas serem perpendiculares entre si.", "a vibração de cada campo ocorrer nas três direções, mas a propagação ocorrer apenas na direção x.", "as intensidades não serem necessariamente variáveis, mas a direção de propagação ser qualquer uma, aleatoriamente."],
    r: 1, exp: "A onda eletromagnética é transversal: E e B oscilam em direções perpendiculares entre si e perpendiculares à direção de propagação." },

  { id: "2018-49", ano: 2018, n: 49, tema: "Física", d: 3, img: ["2018-49.png"],
    ctx: "Um prisma de base triangular (meio 2) está imerso no meio 3, com a face superior no meio 1. O raio de luz monocromática incide na face exposta ao meio 1, refrata para o interior do prisma e emerge para o meio 3.",
    q: "Quanto aos índices de refração absolutos dos meios 1, 2 e 3, é correto afirmar que o do meio 1 é",
    a: ["menor que o do meio 2 e este é menor que o do meio 3.", "menor que o do meio 2, mas é igual ao do meio 3.", "maior que o do meio 2 e este é menor que o do meio 3.", "maior que o do meio 2 e este é maior que o do meio 3.", "maior que o do meio 2, mas é igual ao do meio 3."],
    r: 0, exp: "Ao entrar no prisma, o raio se aproxima da normal, então o meio 2 é mais refringente que o 1 (n₁ < n₂). A alternativa oficial acrescenta que n₂ < n₃, ou seja, n₁ < n₂ < n₃." },

  { id: "2018-50", ano: 2018, n: 50, tema: "Física", d: 2,
    ctx: "Um circuito simples tem uma pilha, uma chave e uma lâmpada ôhmica ligadas em série. Associa-se em série uma segunda pilha idêntica e uma segunda lâmpada idêntica à primeira.",
    q: "A corrente elétrica que percorrerá o novo circuito terá, em relação à anterior, sua intensidade",
    a: ["quadruplicada.", "duplicada.", "inalterada.", "reduzida à metade.", "reduzida à quarta parte."],
    r: 2, exp: "Duas pilhas em série: tensão 2V. Duas lâmpadas em série: resistência 2R. i = 2V / 2R = V / R, a mesma corrente de antes." },

  // ---------- MATEMÁTICA ----------
  { id: "2018-51", ano: 2018, n: 51, tema: "Matemática", d: 2,
    q: "Em um quadro para chaves, há uma fileira de 6 ganchos vazios. Três chaves distintas devem ser posicionadas nessa fileira, sendo uma em cada gancho, de modo que entre duas chaves imediatamente próximas sempre tenha exatamente um gancho vazio. O número de maneiras diferentes de se posicionarem as chaves nessa fileira de ganchos é",
    a: ["6.", "9.", "12.", "15.", "18."],
    r: 2, exp: "Os ganchos ocupados seguem o padrão ‘chave, vazio, chave, vazio, chave’. Em 6 ganchos, só cabem as posições {1,3,5} e {2,4,6}: 2 escolhas. As 3 chaves distintas se arrumam de 3! = 6 modos. Total = 2 · 6 = 12." },

  { id: "2018-52", ano: 2018, n: 52, tema: "Matemática", d: 2,
    q: "Em um laboratório, um recipiente contém uma mistura de duas drogas líquidas, A e B, num total de 36 mililitros, sendo que a participação da droga A corresponde a 1/10 desse total. A quantidade de mililitros da droga A que devem ser adicionados a essa mistura para que a sua composição passe a ter 1/5 da droga A é igual a",
    a: ["4,5.", "3,8.", "3,2.", "2,6.", "1,8."],
    r: 0, exp: "A = 3,6 mL. Com x mL a mais: (3,6 + x)/(36 + x) = 1/5 → 18 + 5x = 36 + x → 4x = 18 → x = 4,5." },

  { id: "2018-53", ano: 2018, n: 53, tema: "Matemática", d: 3, img: ["2018-53.png"],
    ctx: "O triângulo isósceles ABC, de base BC e altura AH, está inscrito em uma circunferência de centro O. A circunferência tem 26 cm de diâmetro, BC = 10 cm e BH = 5 cm.",
    q: "A área do triângulo ABC é, em cm², igual a",
    a: ["100.", "110.", "120.", "125.", "130."],
    r: 3, exp: "Raio = 13. No triângulo OHB: OH = √(13² − 5²) = 12. Altura AH = AO + OH = 13 + 12 = 25. Área = (10 · 25)/2 = 125." },

  { id: "2018-54", ano: 2018, n: 54, tema: "Matemática", d: 3, img: ["2018-54.png"],
    ctx: "Hexágono regular ABCDEF de lado 8 cm. Unindo os pontos médios de cada lado, obtém-se um novo hexágono regular PQRSTU.",
    q: "O perímetro do hexágono PQRSTU é, em centímetros, igual a",
    a: ["8√2.", "8√3.", "12√2.", "16√3.", "24√3."],
    r: 4, exp: "No triângulo APU, AP = AU = 4 e o ângulo A = 120°. Lei dos cossenos: PU² = 16 + 16 − 2·16·cos120° = 48, PU = 4√3. Perímetro = 6 · 4√3 = 24√3." },

  { id: "2018-55", ano: 2018, n: 55, tema: "Matemática", d: 2, img: ["2018-55.png"],
    ctx: "Gráficos de f(x) = 2x² − 4x + 3 e g(x) = −x² + 2x + 3. Os vértices das parábolas são os pontos A e B (conforme a figura).",
    q: "A diferença, em módulo, entre a ordenada do vértice A e a ordenada do vértice B é igual a",
    a: ["2.", "3.", "4.", "5.", "6."],
    r: 1, exp: "Para f: x = 1, y = 2 − 4 + 3 = 1. Para g: x = 1, y = −1 + 2 + 3 = 4. Diferença = |4 − 1| = 3." },

  { id: "2018-56", ano: 2018, n: 56, tema: "Matemática", d: 2,
    ctx: "Tabela incompleta de uma amostra de estudantes:\nSexo | Curso A | Curso B | Total\nMasculino | 25 | ? | 35\nFeminino | ? | ? | ?\nTotal | 60 | ? | 110",
    q: "Se tomarmos ao acaso um dos alunos do curso B, a probabilidade de que ele seja do sexo feminino é de",
    a: ["20%.", "35%.", "50%.", "65%.", "80%."],
    r: 4, exp: "Curso B: total = 110 − 60 = 50; masculino em B = 35 − 25 = 10; feminino em B = 40. Probabilidade = 40/50 = 80%." },

  { id: "2018-57", ano: 2018, n: 57, tema: "Matemática", d: 3, img: ["2018-57.png"],
    ctx: "Dois círculos concêntricos, α e β, têm centro no Aeroporto de Congonhas. Na área interna ao círculo β (raio de 5,4 km) não é permitido qualquer tipo de voo de drone. Na coroa circular (interna ao círculo α, de raio 9 km, e externa ao círculo β) são permitidos voos com até 30 m de altura.",
    q: "Nessas condições, a diferença em km² entre a área da região que permite voos com até 30 m de altura e a área da região em que não se permite qualquer voo de drone é igual a",
    a: ["41,80 π.", "46,10 π.", "51,84 π.", "83,60 π.", "103,68 π."],
    r: 2, exp: "Atenção: o gabarito oficial é a letra C. Ela é a área da coroa, π(9² − 5,4²) = 51,84π. Lendo o enunciado ao pé da letra (coroa menos círculo interno) o resultado seria 22,68π, que não está nas alternativas. Por isso, trate esta questão como duvidosa." },

  { id: "2018-58", ano: 2018, n: 58, tema: "Matemática", d: 1, img: ["2018-58.png"],
    ctx: "Reservatório em forma de paralelepípedo reto retângulo, de 4 m de comprimento e 3 m de largura. A água atingia a altura de 1,5 m. Houve consumo de 6 m³ sem reposição, e a altura restante passou a ser h.",
    q: "A medida indicada por h na figura é igual a",
    a: ["1,25 m.", "1 m.", "0,8 m.", "0,75 m.", "0,5 m."],
    r: 1, exp: "Volume inicial = 4 · 3 · 1,5 = 18 m³. Restam 18 − 6 = 12 m³. h = 12/(4 · 3) = 1 m." },

  { id: "2018-59", ano: 2018, n: 59, tema: "Matemática", d: 3,
    ctx: "As notas de seis candidatos finalistas, em ordem crescente, são: x, x, y, y + 2, z, z.",
    q: "Sabendo-se que a nota mediana e a nota média foram iguais a 8, e que a menor nota corresponde a 3/5 da maior, é correto afirmar que a menor nota obtida nessa prova foi",
    a: ["4,5.", "5.", "5,5.", "6.", "6,5."],
    r: 3, exp: "Mediana = (y + y + 2)/2 = y + 1 = 8 → y = 7. Média: (2x + 7 + 9 + 2z)/6 = 8 → x + z = 16. Como x = (3/5)z: (8/5)z = 16 → z = 10 e x = 6." },

  { id: "2018-60", ano: 2018, n: 60, tema: "Matemática", d: 1,
    q: "As inscrições para o vestibular de certa universidade puderam ser feitas através de 3 diferentes sites, A, B e C. Sabe-se que A e B receberam, juntos, 1 200 inscrições, que B e C receberam, juntos, 1 100 inscrições, e que A e C receberam, juntos, 1 500 inscrições. O número total de inscrições para esse vestibular foi igual a",
    a: ["1 900.", "1 850.", "1 800.", "1 750.", "1 700."],
    r: 0, exp: "Somando as três equações: 2(A + B + C) = 3 800, logo A + B + C = 1 900." },

  // =====================================================================
  // PROVA 2º SEMESTRE 2018 (08/07/2018)
  // =====================================================================

  // ---------- LÍNGUA PORTUGUESA E LITERATURA ----------
  { id: "2018s2-01", ano: 2018, n: 1, tema: "Língua Portuguesa", d: 1, img: ["2018s2-01.png"],
    ctx: "Charge de Arionauro: uma família no sofá, cada um com um celular nas mãos, enquanto a TV está ligada em um telejornal.",
    q: "Assinale a alternativa que apresenta um título que sintetize a mensagem da charge.",
    a: ["O uso exagerado do celular.", "O anonimato nas redes sociais.", "A especificidade da linguagem da TV.", "A evolução da internet.", "A tecnologia familiar."],
    r: 0, exp: "Todos estão absorvidos pelos celulares, sem olhar a TV nem conversar. A crítica é ao uso exagerado do aparelho." },

  { id: "2018s2-02", ano: 2018, n: 2, tema: "Língua Portuguesa", d: 2, t: "marvel",
    q: "A partir da leitura da notícia, pode-se concluir que",
    a: ["o pouco sucesso da Marvel na China se explica pela falta de protagonistas chineses.", "a parceria entre a Marvel e a chinesa NetEase se deu por razões mercadológicas.", "os chineses eram descritos de maneira caricatural e preconceituosa nas HQs da Marvel.", "a Marvel vai deixar de apresentar os chineses como vilões para passar a representá-los como heróis.", "o objetivo da parceria entre a Marvel e a NetEase é divulgar a cultura chinesa no Ocidente."],
    r: 1, exp: "O texto cita o US$ 1,175 bilhão já arrecadado na China e a ideia de expandir a parceria para livros e jogos: o motivo é comercial (mercadológico)." },

  { id: "2018s2-03", ano: 2018, n: 3, tema: "Língua Portuguesa", d: 2, t: "marvel",
    q: "Em “Até hoje a empresa que pertence à Disney só mostrou chineses em papéis secundários”, a expressão que pode estar entre vírgulas, sem que se comprometa a correção gramatical, é:",
    a: ["a empresa que", "que pertence à Disney", "à Disney", "só mostrou", "chineses em papéis"],
    r: 1, exp: "‘Que pertence à Disney’ é uma oração adjetiva explicativa (só acrescenta informação), que pode ser isolada por vírgulas." },

  { id: "2018s2-04", ano: 2018, n: 4, tema: "Língua Portuguesa", d: 3, t: "marvel",
    q: "Em conformidade com as regras de regência e de colocação pronominal, a expressão destacada em “a ideia é que a parceria das empresas não fique só nas HQs” (fique só nas) pode ser substituída, sem prejuízo do sentido, por:",
    a: ["se restrinja nas", "restrinja-se nas", "restrinja-se as", "se restrinja as", "se restrinja às"],
    r: 4, exp: "‘Restringir-se’ pede a preposição ‘a’; com ‘as HQs’ ocorre a crase (‘às’). Como há o ‘que’ antes (palavra atrativa), o pronome fica antes do verbo: ‘que… não se restrinja às HQs’." },

  { id: "2018s2-05", ano: 2018, n: 5, tema: "Língua Portuguesa", d: 1, t: "midia",
    q: "O tema central apresentado no parágrafo é:",
    a: ["o consumo.", "o meio ambiente.", "os órgãos governamentais.", "a desigualdade.", "a mídia."],
    r: 4, exp: "O parágrafo começa e termina falando do poder de influência e da onipresença da mídia." },

  { id: "2018s2-06", ano: 2018, n: 6, tema: "Língua Portuguesa", d: 1, t: "midia",
    q: "Opõem-se, no texto, os conceitos de",
    a: ["“cultura de massa” e “comunicação em massa”.", "“mudanças climáticas” e “degradação ambiental”.", "“geração-consumo” e “sociedade civil”.", "“cultura de consumismo irrestrito” e “cultura de sustentabilidade”.", "“agências governamentais” e “onipresença da mídia”."],
    r: 3, exp: "O texto fala da transformação ‘de uma cultura de consumismo irrestrito para uma cultura de sustentabilidade’." },

  { id: "2018s2-07", ano: 2018, n: 7, tema: "Língua Portuguesa", d: 2, t: "midia",
    q: "Assinale a alternativa que apresenta uma palavra empregada no texto com sentido figurado, acompanhada, entre parênteses, de um sinônimo que se ajusta ao contexto.",
    a: ["“umbilicalmente” (estreitamente)", "“responsabilidade” (obrigação)", "“cenário” (espetáculo)", "“esforços” (conflitos)", "“onipresença” (mobilização)"],
    r: 0, exp: "‘Umbilicalmente’ (do umbigo, ligação entre mãe e filho) é usado em sentido figurado: ligado de forma muito estreita." },

  { id: "2018s2-08", ano: 2018, n: 8, tema: "Língua Portuguesa", d: 3,
    q: "Uma frase que apresenta uso de todas as formas verbais em conformidade com a norma-padrão da língua está em:",
    a: ["As mudanças climáticas provocadas pelo efeito estufa devem figurarem mais na pauta dos noticiários.", "Algum dos veículos de comunicação em massa se proporam a tratar do tema discutido no Congresso.", "As medidas para mitigar a degradação ambiental ainda não satisfizeram os anseios dos ecologistas.", "Houveram muitas críticas à forma como a agências governamentais vem tratando da sustentabilidade.", "Se as pessoas manterem seus hábitos de consumo irrefletidamente, as consequências serão assustadoras."],
    r: 2, exp: "(A) ‘devem figurar’ (verbo auxiliar flexionado, principal no infinitivo sem flexão). (B) ‘se propôs’ (sujeito singular). (D) ‘Houve’ (impessoal) e ‘vêm’. (E) o futuro do subjuntivo de ‘manter’ é ‘mantiverem’." },

  { id: "2018s2-09", ano: 2018, n: 9, tema: "Língua Portuguesa", d: 2, t: "til",
    q: "O trecho corresponde à apresentação de Berta, protagonista do romance. Ela é descrita como",
    a: ["uma jovem cuja feminilidade é tão intensa que se evidencia mesmo quando ela veste o uniforme escolar. Em sua caracterização, é possível perceber o uso excessivo de adjetivos, o que é comum ao Naturalismo.",
        "uma moça frágil, que se ressente por não ser respeitada pelos rapazes de seu convívio. Em sua caracterização, é possível perceber uma crítica à sociedade machista, o que é comum ao Romantismo.",
        "uma garota masculinizada, o que a torna uma personagem cômica. Em sua caracterização, é possível perceber um tom de deboche com relação aos costumes burgueses, o que é comum ao Realismo.",
        "um ser ambivalente, que conserva aspectos de menina e de menino. Em sua caracterização, é possível perceber uma visão um tanto idealizada dos atributos femininos, o que é comum ao Romantismo.",
        "uma pessoa de personalidade forte, que aprecia a companhia de garotos. Em sua caracterização, é possível perceber a presença de um discurso feminista, o que é comum ao Naturalismo."],
    r: 3, exp: "Berta mistura traços de menina (olhos ‘de mulher’, boca ‘do beijo e do sorriso’) e de ‘rapazinho estouvado’. A descrição idealizada e poética da mulher é típica do Romantismo de José de Alencar." },

  { id: "2018s2-10", ano: 2018, n: 10, tema: "Língua Portuguesa", d: 2, t: "til",
    q: "Constata-se a presença de uma construção hipotética em:",
    a: ["“largos colarinhos se rebatiam sobre os ombros” (1º parágrafo)", "“tinham a diáfana profundidade do céu” (2º parágrafo)", "“fora vazada no molde do beijo e do sorriso” (3º parágrafo)", "“quando o brinco iluminava essa fisionomia” (3º parágrafo)", "“que ela teria sido sem dúvida” (3º parágrafo)"],
    r: 4, exp: "‘Teria sido’ (futuro do pretérito) expressa um fato hipotético: o que ela teria sido se a natureza não lhe trocasse o destino." },

  { id: "2018s2-11", ano: 2018, n: 11, tema: "Língua Portuguesa", d: 2, t: "til",
    ctx: "Considere o emprego dos vocábulos destacados: (1) “…tão delgada e flexível no talhe, QUE dobrava-se como o junco da várzea.” (2) “…à feição dos que usavam ENTÃO os meninos de escola.” (3) “…serenos, COMO um lago cristalino imerso na sombra…”",
    q: "No contexto em que são empregados, os vocábulos destacados expressam, respectivamente, ideia de",
    a: ["modo, conclusão, conformidade.", "causa, conclusão, comparação.", "consequência, tempo, comparação.", "condição, modo, conformidade.", "consequência, tempo, condição."],
    r: 2, exp: "‘Tão… que’ = consequência. ‘Então’ = naquela época (tempo). ‘Como um lago cristalino’ = comparação." },

  { id: "2018s2-12", ano: 2018, n: 12, tema: "Língua Portuguesa", d: 2,
    ctx: "Trecho de Macunaíma (Mário de Andrade): “Nem bem pisou na praia e se ergueu na frente dele um monstro. Era o bicho Pondê um jurucutu do Solimões que virava gente de-noite e engolia os estradeiros. Porém Macunaíma pegou na flecha que tinha na ponta a cabeça chata da formiga santa chamada curupê e nem fez pontaria, acertou que foi uma beleza. O bicho Pondê estourou virando coruja.”",
    q: "Esse trecho evidencia uma característica comum à composição de Macunaíma, que é",
    a: ["o emprego de recursos próprios dos contos maravilhosos, produzidos pela cultura popular.", "a representação de um herói aos moldes clássicos, cujas ações são motivadas por bravura.", "o resgate de figuras representativas da mitologia greco-latina, o que confere à obra status de um texto épico.", "o uso de um vocabulário específico do norte do Brasil, o que resulta em uma obra tipicamente regionalista.", "o predomínio do enredo psicológico sobre o factual, o que faz com que o texto seja mais ensaístico que narrativo."],
    r: 0, exp: "Monstros, transformações mágicas e feitos extraordinários vêm do folclore e das lendas indígenas, reunidos por Mário de Andrade em linguagem de conto popular." },

  { id: "2018s2-13", ano: 2018, n: 13, tema: "Língua Portuguesa", d: 3, t: "saobernardo",
    q: "Em São Bernardo, o narrador, Paulo Honório, conta de seu relacionamento com a esposa, Madalena; relacionamento conflituoso, marcado pelo ciúme excessivo do marido, o que evidenciava o modo como ele",
    a: ["era o estereótipo do herói trágico, fadado a um destino sombrio após uma infância privilegiada na fazenda.", "reproduzia o comportamento de personagens que conhecera do convívio com romances do século XIX.", "transferia para as relações interpessoais o tratamento dado à terra e aos objetos de sua propriedade.", "correspondia à caricatura do homem traído, tão comum nas narrativas que corriam o Nordeste na década de 1930.", "tinha sérios distúrbios psicológicos, que o impediam de reproduzir o comportamento da maioria das pessoas à sua volta."],
    r: 2, exp: "Paulo Honório trata Madalena como mais uma propriedade: a lógica da posse e do lucro invade o casamento." },

  { id: "2018s2-14", ano: 2018, n: 14, tema: "Língua Portuguesa", d: 2, t: "saobernardo",
    ctx: "Frase original: “Descobri nela manifestações de ternura que me sensibilizaram.”",
    q: "Está escrito em consonância com o conteúdo dessa frase e com uma forma verbal na voz passiva o que se encontra em:",
    a: ["As manifestações de ternura que descobri nela me deixaram sensibilizado.", "Fui sensibilizado pelas manifestações de ternura que descobri nela.", "Tendo descoberto nela manifestações de ternura, fiquei sensibilizado.", "Fui me sensibilizando ao descobrir nela manifestações de ternura.", "Quando me deixei sensibilizar, descobri nela manifestações de ternura."],
    r: 1, exp: "Voz passiva analítica: ‘ser’ + particípio + agente da passiva (‘fui sensibilizado pelas manifestações’)." },

  { id: "2018s2-15", ano: 2018, n: 15, tema: "Língua Portuguesa", d: 3,
    ctx: "Oceano (Manuel Bandeira, A cinza das horas)\n\nOlho a praia. A treva é densa.\nUlula o mar, que não vejo,\nNaquela voz sem consolo,\nNaquela tristeza imensa\nQue há na voz do meu desejo.\n\nE nesse tom sem consolo\nOuço a voz do meu destino:\nMá sina que desconheço,\nVem vindo desde eu menino,\nCresce quanto em anos cresço.\n\n— Voz de oceano que não vejo\nDa praia do meu desejo...",
    q: "Acerca desse poema, está correto o que se afirma em:",
    a: ["A representação da natureza segue as lições do Manifesto Antropófago, que buscava um Brasil primitivo, indiferente ao progresso.", "A ausência de rimas deixa perceber o modo como o poema antecipa uma linguagem que será a marca registrada dos poetas modernistas.", "A descrição realista e a ausência da linguagem figurada são traços que ligam o poema à poesia parnasiana, ridicularizada na Semana de 22.", "Os versos metrificados denunciam a adesão à poesia tradicional, a qual foi posteriormente criticada pelo Modernismo de 1922.", "O tom intimista dos versos é condizente com a poesia realista, embora a descrição objetiva do oceano seja própria do Simbolismo."],
    r: 3, exp: "O poema tem rimas (densa/imensa, vejo/desejo) e versos de métrica regular (redondilhas), características da poesia tradicional. A Semana de 22 rompeu com isso." },

  // ---------- LÍNGUA INGLESA ----------
  { id: "2018s2-16", ano: 2018, n: 16, tema: "Língua Inglesa", d: 1, t: "latam",
    q: "De acordo com o primeiro parágrafo, a ONG Global Witness afirma que, em 2015,",
    a: ["o número de ambientalistas assassinados na América Latina foi de 185.", "aconteceram menos assassinatos de ambientalistas que no ano de 2014.", "houve um aumento de quase 60% de ambientalistas assassinados em relação a 2014.", "123 ativistas ambientais foram assassinados apenas em Honduras.", "mais de 50% dos assassinatos de ambientalistas aconteceu no Brasil."],
    r: 2, exp: "‘185 activists were murdered worldwide in 2015, an increase of 59% from the year before’. Os 185 são no mundo todo; os 123 de Honduras são desde 2010." },

  { id: "2018s2-17", ano: 2018, n: 17, tema: "Língua Inglesa", d: 1, t: "latam",
    q: "No trecho do primeiro parágrafo – Berta Cáceres, an indigenous leader who was a prominent campaigner against dams and plantations, was murdered there – o termo em destaque (there) se refere a",
    a: ["South America.", "Guatemala.", "Brazil.", "Honduras.", "plantations."],
    r: 3, exp: "A frase anterior fala de Honduras (‘Honduras is especially dangerous’), e ‘there’ retoma esse país." },

  { id: "2018s2-18", ano: 2018, n: 18, tema: "Língua Inglesa", d: 2, t: "latam",
    q: "Leia o segundo parágrafo, em que se responde à pergunta “Why is Latin America so deadly?”. De acordo com o mesmo parágrafo, a resposta é:",
    a: ["devido ao estabelecimento de empresas multinacionais como a Ford Foundation.", "devido à grande quantidade de recursos naturais.", "devido ao compartilhamento de terras entre agricultores de soja e pecuaristas.", "devido ao desmatamento causado pela agricultura da soja.", "devido aos caçadores em conflito com pequenos garimpeiros de ouro."],
    r: 1, exp: "‘One reason is its abundant natural resources, which attract enterprises of all sorts’." },

  { id: "2018s2-19", ano: 2018, n: 19, tema: "Língua Inglesa", d: 2, t: "latam",
    q: "No trecho do segundo parágrafo – Small prospectors can now extract gold from soil rather than just hunting around – a expressão em destaque (rather than) equivale, em português, a",
    a: ["em vez de.", "por causa de.", "além de.", "a fim de.", "por enquanto."],
    r: 0 },

  { id: "2018s2-20", ano: 2018, n: 20, tema: "Língua Inglesa", d: 1, t: "latam",
    q: "No trecho do segundo parágrafo – That opens up new areas for exploitation, such as San Rafael de Flores in south-eastern Guatemala – a expressão em destaque (such as) introduz",
    a: ["uma explicação.", "uma decorrência.", "uma generalização.", "um motivo.", "um exemplo."],
    r: 4, exp: "‘Such as’ = ‘como, tal como’, usado para dar exemplos." },

  { id: "2018s2-21", ano: 2018, n: 21, tema: "Língua Inglesa", d: 2, t: "latam",
    q: "De acordo com o terceiro parágrafo, o assassino da freira e defensora da floresta amazônica, Dorothy Stang,",
    a: ["é estrangeiro, assim como a vítima.", "foi acobertado pelo mandante do crime.", "está foragido desde o assassinato, há 12 anos.", "foi contratado por um fazendeiro para matar.", "está preso, pois foi denunciado pelo mandante."],
    r: 3, exp: "‘Both the gunman and a rancher who had hired him eventually went to jail’: o pistoleiro foi contratado por um fazendeiro e ambos foram presos." },

  // ---------- HISTÓRIA ----------
  { id: "2018s2-22", ano: 2018, n: 22, tema: "História", d: 2,
    q: "Na Antiguidade Clássica, a importância do Mediterrâneo, conhecido como Mare Nostrum (“nosso mar”, em latim) pelos romanos, devia-se",
    a: ["à sua notoriedade no fornecimento de produtos tropicais, tais como açúcar e cacau.", "à sua localização estratégica entre a América e o Oriente e como corredor de acesso ao Oceano Pacífico.", "à sua capacidade de interligar comercialmente territórios muito distantes e diversos entre si.", "à abundância de produtos fundamentais à economia, tais como minerais e especiarias, no seu entorno.", "à confluência de rotas subsaarianas, que traziam produtos africanos como a porcelana e a seda."],
    r: 2, exp: "O Mediterrâneo ligava Europa, Ásia e África, e era a grande via de comércio do mundo romano. Açúcar e cacau (tropicais), América e Pacífico não fazem parte da Antiguidade." },

  { id: "2018s2-23", ano: 2018, n: 23, tema: "História", d: 2, img: ["2018s2-23.png"],
    ctx: "Charge: “Você deve esperar que este jogo acabe em breve”. Um trabalhador carrega nas costas um padre e um nobre.",
    q: "A charge, em que um trabalhador carrega nas costas um padre e um nobre, está relacionada ao contexto",
    a: ["do Congresso de Viena.", "da Comuna de Paris.", "da Primavera dos Povos.", "da Revolução Francesa.", "da Revolução Gloriosa."],
    r: 3, exp: "É uma imagem clássica sobre a sociedade do Antigo Regime francês: o Terceiro Estado (povo) sustentando o clero e a nobreza." },

  { id: "2018s2-24", ano: 2018, n: 24, tema: "História", d: 3, img: ["2018s2-24.png"],
    ctx: "Os usurários (1520), de Quentin Massys. Acervo da Galleria Doria Pamphilj, em Roma.",
    q: "A obra constrói uma representação que remete às consequências",
    a: ["do poder crescente da nobreza em oposição à decadência dos banqueiros, isolados politicamente no contexto do Estado Moderno.", "dos primórdios do desenvolvimento do capitalismo industrial, à época da montagem do sistema fabril e do surgimento da classe operária.", "da reaproximação entre a Igreja Católica e os burgueses, no momento em que o protestantismo condenava o lucro e a usura.", "da intensificação das atividades mercantis e da vida urbana, em meio às transformações da Baixa Idade Média.", "do período do Renascimento, marcado pela afirmação do teocentrismo como princípio moral e pela crítica às ideias de razão e equilíbrio."],
    r: 3, exp: "Banqueiros e agiotas representam o crescimento do comércio e das cidades no fim da Idade Média. O capitalismo industrial é muito posterior." },

  { id: "2018s2-25", ano: 2018, n: 25, tema: "História", d: 2, img: ["2018s2-25.png"],
    ctx: "Domingos Jorge Velho em tela de Benedito Calixto (1903). Acervo do Museu Paulista.",
    q: "Em tela pintada muito tempo depois da morte do paulista Domingos Jorge Velho, é possível afirmar que o bandeirante foi representado de forma",
    a: ["triunfalista e heroica, desconsiderando o papel dos bandeirantes na escravização dos povos indígenas e no violento combate às comunidades quilombolas.", "neutra e objetiva, com a finalidade de descrever o papel dos bandeirantes na expansão territorial da América Portuguesa.", "crítica e distanciada, revelando múltiplas facetas de um bandeirante que se posicionou contrariamente à escravização de negros.", "negativa e enviesada, denunciando os aspectos mais graves da prática do bandeirantismo, tais como a perseguição aos jesuítas.", "distorcida e manipulada, ressaltando a ancestralidade indígena e miscigenada dos bandeirantes em detrimento da sua origem portuguesa."],
    r: 0, exp: "Pintadas no início do século XX, essas telas construíram a imagem do bandeirante como herói paulista, e Jorge Velho destruiu o Quilombo dos Palmares." },

  { id: "2018s2-26", ano: 2018, n: 26, tema: "História", d: 3,
    ctx: "“Ao redor de 1900, várias modificações e atualizações importantes ocorrem ao longo da ferrovia da São Paulo Railway. As máquinas de tração do equipamento rodante são substituídas por equipamento moderno, há um novo traçado da linha entre a serra e Santos, uma nova Estação da Luz. A Estação da Luz se torna uma estação monumental, imponente e solene.” (José de Souza Martins. Revista USP, 2004. Adaptado)",
    q: "A importância histórica da Estação da Luz pode ser relacionada",
    a: ["ao deslocamento dos cafezais para o Vale do Paraíba e à utilização da mão de obra negra escravizada.", "à industrialização na região do ABC paulista e ao início do desenvolvimento rodoviário de São Paulo.", "à expansão da cafeicultura para o Oeste paulista e à presença do capital inglês na economia brasileira.", "à desativação das estradas utilizadas por tropeiros e ao crescimento da exportação de algodão e tabaco.", "à decadência da oligarquia paulista do Oeste Velho e à ascensão da burguesia industrial de origem imigrante."],
    r: 2, exp: "A São Paulo Railway (capital inglês) ligava o planalto ao porto de Santos para escoar o café do Oeste Paulista." },

  { id: "2018s2-27", ano: 2018, n: 27, tema: "História", d: 1, img: ["2018s2-27.png"],
    ctx: "Cartaz de propaganda alemã da Segunda Guerra: “Por trás das forças inimigas, o judeu” (Hinter den Feindmächten: der Jude).",
    q: "O cartaz de propaganda alemã, produzido em meio à Segunda Guerra Mundial, tem como fundamento uma característica central da doutrina nazista. Trata-se do",
    a: ["militarismo.", "antissemitismo.", "autoritarismo.", "protecionismo.", "nacionalismo."],
    r: 1 },

  { id: "2018s2-28", ano: 2018, n: 28, tema: "História", d: 3, img: ["2018s2-28.png"],
    ctx: "Material 1: letra de “Pra frente, Brasil” (Miguel Gustavo, 1970): “Noventa milhões em ação / Pra frente Brasil, no meu coração / Todos juntos, vamos pra frente Brasil / Salve a seleção! […] Todos ligados na mesma emoção, tudo é um só coração!”\nMaterial 2: charge de Jaguar publicada no Pasquim, em 1982: um homem acorrentado na beira de um precipício; ao lado, “Pra frente Brasil!” e “Aquela corrente pra frente”.",
    q: "A partir da análise dos dois materiais, é correto afirmar que a charge de Jaguar ironiza",
    a: ["os rumos erráticos do país após a consolidação da redemocratização.", "o problema da censura à produção cultural na época da ditadura militar.", "a abertura econômica neoliberal após o fracasso do nacionalismo militar.", "a situação econômica brasileira em plena época do “milagre”.", "a relação entre futebol, política e sociedade no contexto da ditadura militar."],
    r: 4, exp: "A música foi tema da Copa de 1970 e usada pela propaganda da ditadura. A charge de 1982 (outra Copa) ironiza essa ‘corrente pra frente’ que leva ao precipício." },

  // ---------- GEOGRAFIA ----------
  { id: "2018s2-29", ano: 2018, n: 29, tema: "Geografia", d: 2,
    ctx: "“A Guerra dos Seis Dias foi a guerra mais curta que existiu dentre os conflitos árabes-israelenses. Em junho de 1967, as Forças Armadas israelenses realizaram um fulminante ataque aos três países. Em seis dias, os exércitos da Síria, do Egito e da Jordânia foram derrotados […]. Com a vitória, o Estado de Israel incorporou a seu território Gaza, a Península do Sinai, as Colinas de Golã e a…” (Brasil Escola. Adaptado)",
    q: "Complete o final do texto: com a vitória, Israel incorporou Gaza, a Península do Sinai, as Colinas de Golã e a",
    a: ["Cisjordânia.", "península Arábica.", "saída para o canal de Suez.", "bacia do rio Eufrates.", "planície da Mesopotâmia."],
    r: 0, exp: "Em 1967, Israel tomou também a Cisjordânia (e Jerusalém Oriental), que antes pertenciam à Jordânia." },

  { id: "2018s2-30", ano: 2018, n: 30, tema: "Geografia", d: 2,
    ctx: "A Rússia é a sede da Copa do Mundo FIFA 2018, tendo investido cerca de 40 bilhões de dólares nesse intuito.",
    q: "Entre os objetivos do governo russo em realizar esse evento esportivo, está",
    a: ["a defesa da supremacia esportiva herdada da antiga União Soviética.", "a coordenação dos planos quinquenais como instrumentos de planificação estatal.", "a continuidade do processo de modernização econômica da Rússia.", "a atração de população com maior pluralidade étnica para residir no país.", "o boicote aos países pertencentes ao bloco de influência dos Estados Unidos."],
    r: 2 },

  { id: "2018s2-31", ano: 2018, n: 31, tema: "Geografia", d: 1,
    ctx: "O líder norte-coreano, Kim Jong-un, e o presidente do sul, Moon Jae-in, sentaram-se em uma mesa oval para iniciar o encontro entre os dois países em 27.04.2018. O encontro, na Casa da Paz, no lado sul da Zona Desmilitarizada, é a terceira cúpula desde o fim da Guerra da Coreia, em 1953. (CartaCapital. Adaptado)",
    q: "Uma das expectativas em torno da reunião dos líderes coreanos é o processo de",
    a: ["admissão da Coreia do Norte na OTAN.", "transferência de tecnologia militar entre as Coreias.", "alinhamento do governo sul-coreano aos interesses geopolíticos do norte.", "incorporação da economia norte-coreana ao bloco capitalista.", "desnuclearização da península coreana."],
    r: 4 },

  { id: "2018s2-32", ano: 2018, n: 32, tema: "Geografia", d: 1,
    ctx: "Há cinco anos, morria o ex-presidente Hugo Chávez. Quem assumiu o poder desde então foi Nicolás Maduro, que tentou aplicar a mesma política de Chávez. As condições eram bem diferentes: o preço do barril de petróleo, base da economia da Venezuela, baixou. Medidas de controle estatal próprias do chavismo mostraram-se insustentáveis dentro de um contexto de crise política e econômica. (O Povo. Adaptado)",
    q: "A crise na Venezuela apresenta, como uma de suas consequências,",
    a: ["o bloqueio internacional dos portos venezuelanos.", "a expulsão da Venezuela da OPEP.", "o envio de tropas estadunidenses ao país.", "a migração de população venezuelana para o Brasil.", "a desprivatização das indústrias da Venezuela."],
    r: 3, exp: "A crise gerou fuga de milhares de venezuelanos, em especial para o Brasil, via Roraima." },

  { id: "2018s2-33", ano: 2018, n: 33, tema: "Geografia", d: 2,
    ctx: "Na madrugada do dia 01.05.2018, um prédio de 24 andares incendiou-se e desabou no Largo do Paissandu. O edifício era ocupado irregularmente por mais de 140 famílias. Agora, a Defesa Civil vai vistoriar 70 prédios ocupados no centro de São Paulo. (Jornal da USP. Adaptado)",
    q: "O incidente descrito na reportagem retrata os efeitos",
    a: ["da ampliação do monitoramento de imóveis sem função social no Brasil.", "do enfraquecimento dos movimentos populares que planejam as ocupações.", "da ingerência do capital privado na elaboração do Estatuto da Cidade.", "da regularização dos loteamentos urbanos localizados nas áreas centrais.", "do aprofundamento do déficit habitacional na Grande São Paulo."],
    r: 4 },

  { id: "2018s2-34", ano: 2018, n: 34, tema: "Geografia", d: 2,
    q: "O domínio morfoclimático dos Mares de Morros possui como uma de suas características principais a presença de vegetação",
    a: ["homogênea com plantas xerófitas.", "arbustiva com raízes profundas.", "caducifólia com árvores esparsas.", "latifoliada de grande porte.", "tropical com troncos retorcidos."],
    r: 3, exp: "Os Mares de Morros são o domínio da Mata Atlântica: floresta densa, de árvores altas e folhas largas (latifoliada). Xerófitas são da Caatinga e troncos retorcidos são do Cerrado." },

  { id: "2018s2-35", ano: 2018, n: 35, tema: "Geografia", d: 1,
    q: "Nos últimos anos, no Brasil, têm crescido os debates sobre a reforma da previdência. As mudanças nas regras da previdência têm como um de seus objetivos",
    a: ["impedir a migração de cérebros do país.", "conter os efeitos do envelhecimento populacional.", "subsidiar as políticas de incentivo à natalidade.", "combater o desemprego estrutural.", "compensar o saldo negativo da balança comercial brasileira."],
    r: 1, exp: "Com mais idosos e menos jovens contribuindo, a conta da previdência pesa mais. As reformas buscam equilibrar isso." },

  // ---------- BIOLOGIA ----------
  { id: "2018s2-36", ano: 2018, n: 36, tema: "Biologia", d: 1,
    ctx: "Um embrião cresce muito nos primeiros meses após a sua formação. Com 5 semanas, o embrião que se iniciou de apenas uma célula já tem braços e pernas evidentes e começam as contrações musculares.",
    q: "O crescimento de um embrião está diretamente relacionado à divisão",
    a: ["meiótica, que quadruplica o número de células a cada divisão, resultando num rápido crescimento.", "meiótica, que duplica o número de cromossomos no núcleo a cada divisão, resultando num rápido crescimento.", "mitótica, que gera duas células com o mesmo número de cromossomos a cada divisão, em curto espaço de tempo.", "mitótica, que gera quatro células com o dobro de cromossomos a cada divisão, em curto espaço de tempo.", "mitótica, que gera duas células com a metade do número de cromossomos a cada divisão, em curto espaço de tempo."],
    r: 2, exp: "O crescimento depende da mitose: 1 célula-mãe origina 2 células-filhas iguais (com o mesmo número de cromossomos). A meiose forma gametas." },

  { id: "2018s2-37", ano: 2018, n: 37, tema: "Biologia", d: 2,
    ctx: "Um estudante observou em uma fazenda algumas vacas pastando e, sobre elas, algumas aves chamadas anus, retirando carrapatos que estavam na pele dos ruminantes.",
    q: "Considerando uma cadeia alimentar e algumas interações ecológicas entre esses animais, o nível trófico ocupado pelas vacas, a interação entre as vacas e os anus e a interação entre os carrapatos e as vacas são, respectivamente,",
    a: ["consumidor secundário, mutualismo e predatismo.", "consumidor primário, protocooperação e parasitismo.", "consumidor secundário, comensalismo e parasitismo.", "consumidor primário, mutualismo e predatismo.", "consumidor secundário, protocooperação e comensalismo."],
    r: 1, exp: "Vaca come capim (produtor): consumidor primário. Ave e vaca se beneficiam sem dependência obrigatória: protocooperação. Carrapato se alimenta do sangue da vaca e a prejudica: parasitismo." },

  { id: "2018s2-38", ano: 2018, n: 38, tema: "Biologia", d: 2,
    ctx: "Existe uma montanha-russa que sai de zero e atinge 180 km/h em menos de dois segundos. Essa aceleração estimula de forma involuntária o sistema nervoso simpático, que promove várias alterações fisiológicas, entre elas o aumento da frequência cardíaca.",
    q: "O estímulo do sistema nervoso simpático provoca o aumento da frequência cardíaca e",
    a: ["menor liberação de glicose hepática.", "a contração dos brônquios.", "a contração da bexiga.", "maior salivação.", "a dilatação da pupila."],
    r: 4, exp: "O simpático prepara o corpo para ‘luta ou fuga’: dilata a pupila e os brônquios, aumenta a liberação de glicose, e reduz a salivação e a contração da bexiga." },

  { id: "2018s2-39", ano: 2018, n: 39, tema: "Biologia", d: 1,
    ctx: "Nas fezes humanas, é possível encontrar milhares de bactérias da flora intestinal e células intestinais. Quando se comparam células bacterianas com as células humanas, podem-se verificar diversas diferenças quanto à atividade metabólica e morfológica.",
    q: "Uma das diferenças é que as células humanas",
    a: ["possuem envoltório nuclear e as bacterianas não possuem.", "sintetizam suas próprias proteínas e as bacterianas não sintetizam.", "sintetizam moléculas de ATP e as bacterianas não sintetizam.", "possuem material genético e as bacterianas não possuem.", "possuem parede celular e as bacterianas não possuem."],
    r: 0, exp: "Células humanas são eucariontes (núcleo delimitado por membrana). As bactérias são procariontes: o DNA fica solto no citoplasma. Ambas têm DNA, sintetizam proteínas e ATP; a parede celular é das bactérias." },

  { id: "2018s2-40", ano: 2018, n: 40, tema: "Biologia", d: 2, img: ["2018s2-40.png"],
    ctx: "O esquema representa uma propriedade da molécula de DNA que ocorre no interior de uma célula epitelial: uma molécula de DNA gera duas moléculas, cada uma com uma fita antiga (rosa) e uma fita nova (verde).",
    q: "A propriedade é denominada",
    a: ["mutação cromossômica.", "transcrição reversa.", "tradução.", "replicação semiconservativa.", "inversão paracêntrica."],
    r: 3, exp: "Na replicação semiconservativa, cada nova molécula conserva uma fita da molécula original e tem uma fita recém-sintetizada." },

  // ---------- QUÍMICA ----------
  { id: "2018s2-41", ano: 2018, n: 41, tema: "Química", d: 1,
    ctx: "O CNEN conta atualmente com 38 radiofármacos, entre eles substâncias marcadas com iodo-123 (¹²³₅₃I) e iodo-131 (¹³¹₅₃I).",
    q: "Os átomos de iodo-123 e iodo-131 possuem",
    a: ["mesmo número de nêutrons e diferentes números de massa.", "mesmo número de prótons e diferentes números de nêutrons.", "mesmo número de massa e diferentes números de prótons.", "diferentes números de nêutrons e diferentes números de prótons.", "diferentes números de prótons e diferentes números de massa."],
    r: 1, exp: "São isótopos: mesmo Z = 53 (prótons). Nêutrons: 123 − 53 = 70 e 131 − 53 = 78." },

  { id: "2018s2-42", ano: 2018, n: 42, tema: "Química", d: 1,
    ctx: "Na calcinação da bauxita ocorre a reação: Al(OH)₃ → Al₂O₃ + H₂O",
    q: "O balanceamento correto dessa reação, com os menores números inteiros, é dado, respectivamente, por:",
    a: ["1; 2; 1.", "1; 1; 2.", "2; 2; 3.", "2; 1; 3.", "3; 2; 2."],
    r: 3, exp: "2 Al(OH)₃ → 1 Al₂O₃ + 3 H₂O (2 Al, 6 O e 6 H nos dois lados)." },

  { id: "2018s2-43", ano: 2018, n: 43, tema: "Química", d: 3,
    ctx: "A análise de fios de cabelo de ribeirinhos do lago Tucuruí (PA) mostrou níveis de contaminação até sete vezes superiores ao limite de 10 microgramas de mercúrio por grama de fio de cabelo tolerado pela OMS. Dados: massa molar do mercúrio = 201 g/mol; constante de Avogadro = 6,0 × 10²³ /mol.",
    q: "A quantidade de átomos de mercúrio por grama de fio de cabelo tolerada pela OMS é de, aproximadamente:",
    a: ["1,0 × 10¹⁵", "3,0 × 10¹⁵", "6,0 × 10¹⁵", "1,0 × 10¹⁶", "3,0 × 10¹⁶"],
    r: 4, exp: "10 µg = 1,0 × 10⁻⁵ g. Mols: 10⁻⁵ / 201 ≈ 5,0 × 10⁻⁸ mol. Átomos: 5,0 × 10⁻⁸ · 6,0 × 10²³ ≈ 3,0 × 10¹⁶." },

  { id: "2018s2-44", ano: 2018, n: 44, tema: "Química", d: 2, t: "jambu", img: ["2018s2-44.png"],
    q: "A função orgânica presente no espilantol é:",
    a: ["amida.", "amina.", "cetona.", "aldeído.", "álcool."],
    r: 0, exp: "Na estrutura aparece o grupo C(=O)–NH–: carbonila ligada a nitrogênio, que caracteriza a função amida." },

  { id: "2018s2-45", ano: 2018, n: 45, tema: "Química", d: 2, t: "jambu", img: ["2018s2-44.png"],
    q: "O número de átomos de carbono existente na molécula do espilantol é:",
    a: ["16.", "15.", "14.", "13.", "12."],
    r: 2, exp: "Contando os vértices da cadeia: CH₃–CH=CH–CH=CH–CH₂–CH₂–CH=CH–C(=O) são 10 carbonos, mais CH₂–CH(CH₃)₂ ligado ao nitrogênio, que são 4. Total = 14 (C₁₄H₂₃NO)." },

  // ---------- FÍSICA ----------
  { id: "2018s2-46", ano: 2018, n: 46, tema: "Física", d: 2,
    ctx: "Cientistas utilizam instrumentos ópticos como o telescópio e o microscópio. Há telescópios refletores e refratores e microscópios ópticos e eletrônicos.",
    q: "Nos telescópios refletores, a objetiva é um espelho",
    a: ["convexo enquanto que a objetiva dos microscópios ópticos é uma lente divergente.", "côncavo enquanto que a objetiva dos microscópios ópticos é uma lente divergente.", "plano enquanto que a objetiva dos microscópios ópticos é uma lente divergente.", "convexo enquanto que a objetiva dos microscópios ópticos é uma lente convergente.", "côncavo enquanto que a objetiva dos microscópios ópticos é uma lente convergente."],
    r: 4, exp: "Para formar imagem real de objetos distantes, o telescópio refletor usa espelho côncavo. A objetiva do microscópio é lente convergente." },

  { id: "2018s2-47", ano: 2018, n: 47, tema: "Física", d: 3,
    ctx: "Um motoqueiro está a 100 m de um semáforo e dirige com velocidade constante de 15 m/s. Quando a luz passa de verde para amarela, ele acelera para continuar a trajetória antes que a luz mude para vermelha. A luz permanecerá amarela por 5 s.",
    q: "A velocidade da moto ao atravessar o semáforo será, em m/s, igual a",
    a: ["10.", "15.", "20.", "25.", "30."],
    r: 3, exp: "MUV: d = ((v₀ + v)/2) · t → 100 = ((15 + v)/2) · 5 → 15 + v = 40 → v = 25 m/s." },

  { id: "2018s2-48", ano: 2018, n: 48, tema: "Física", d: 1,
    ctx: "O diapasão é um instrumento metálico utilizado para auxiliar na afinação de instrumentos musicais e vozes.",
    q: "Ao ser golpeado pelo martelo, o diapasão emite ondas sonoras ditas",
    a: ["longitudinais, uma vez que as moléculas do ar vibram perpendicularmente à direção do movimento da onda.", "longitudinais, uma vez que as moléculas do ar vibram paralelamente à direção do movimento da onda.", "transversais, uma vez que as moléculas do ar vibram perpendicularmente à direção do movimento da onda.", "transversais, uma vez que as moléculas do ar vibram paralelamente à direção do movimento da onda.", "transversais ou longitudinais, uma vez que as moléculas do ar vibram perpendicularmente à direção do movimento da onda."],
    r: 1, exp: "O som no ar é uma onda longitudinal: as moléculas vibram na mesma direção em que a onda se propaga." },

  { id: "2018s2-49", ano: 2018, n: 49, tema: "Física", d: 2,
    ctx: "A força de interação elétrica entre duas cargas de intensidades Q e 2Q, mantidas a uma distância d uma da outra, é igual a 1 N. A distância entre essas cargas é reduzida à metade.",
    q: "A relação entre a intensidade da força elétrica quando a distância era d e a da força após a distância ter sido reduzida à metade é",
    a: ["4:1.", "2:1.", "1:1.", "1:2.", "1:4."],
    r: 4, exp: "Lei de Coulomb: F ∝ 1/d². Com d/2, a força fica 4 vezes maior (4 N). A razão F(d) : F(d/2) = 1 : 4." },

  { id: "2018s2-50", ano: 2018, n: 50, tema: "Física", d: 2, img: ["2018s2-50.png"],
    ctx: "O circuito tem duas lâmpadas de LED idênticas, de potência elétrica 12 W quando submetidas a uma diferença de potencial de 120 V. Na figura, as duas lâmpadas estão ligadas diretamente aos dois fios da tomada de 120 V.",
    q: "Com base na análise da figura e nas informações técnicas, observa-se que as lâmpadas estão dispostas em uma associação em",
    a: ["série e a intensidade da corrente elétrica em cada lâmpada é de 0,2 A.", "série e a intensidade da corrente elétrica em cada lâmpada é de 5,0 A.", "paralelo e a intensidade da corrente elétrica em cada lâmpada é de 0,2 A.", "paralelo e a intensidade da corrente elétrica em cada lâmpada é de 0,1 A.", "paralelo e a intensidade da corrente elétrica em cada lâmpada é de 10,0 A."],
    r: 3, exp: "Cada lâmpada fica sob 120 V: associação em paralelo. Corrente: i = P/U = 12/120 = 0,1 A." },

  // ---------- MATEMÁTICA ----------
  { id: "2018s2-51", ano: 2018, n: 51, tema: "Matemática", d: 2,
    ctx: "Em 2016, as centrais estaduais de transplantes identificaram 10 158 pessoas com morte encefálica que poderiam ser doadoras. De 5 939 famílias consultadas, 2 571 não deram a autorização necessária.",
    q: "Considerando que cada possível doador tem em média 4 órgãos aptos para transplante, se, dentre as famílias consultadas que não deram autorização, um terço tivesse permitido a doação, o número de órgãos disponíveis para transplantes, naquele ano, aumentaria, em média,",
    a: ["7 918.", "5 823.", "4 490.", "3 428.", "3 386."],
    r: 3, exp: "Um terço de 2 571 = 857 famílias. Órgãos: 857 · 4 = 3 428." },

  { id: "2018s2-52", ano: 2018, n: 52, tema: "Matemática", d: 2,
    q: "Uma loja vendeu, no mês passado, 357 unidades de um conjunto de panelas a R$ 600,00 cada. Neste mês, está vendendo o conjunto 15% mais barato. Para obter uma arrecadação igual ou maior do que a do mês passado, será necessário que o número de unidades vendidas seja, no mínimo,",
    a: ["1 260.", "630.", "535.", "420.", "150."],
    r: 3, exp: "Arrecadação anterior: 357 · 600 = 214 200. Novo preço: 600 · 0,85 = 510. n ≥ 214 200 / 510 = 420." },

  { id: "2018s2-53", ano: 2018, n: 53, tema: "Matemática", d: 3,
    ctx: "A platina e o irídio possuem densidades iguais a 21,45 g/cm³ e 22,65 g/cm³, respectivamente. A quantidade (massa) de platina utilizada na composição da liga é 9 vezes a quantidade de irídio.",
    q: "A densidade da liga metálica do Protótipo Internacional do Quilograma é igual a",
    a: ["21,46 g/cm³.", "21,57 g/cm³.", "21,65 g/cm³.", "21,88 g/cm³.", "22,05 g/cm³."],
    r: 1, exp: "Com massas 9m e m: volume = 9m/21,45 + m/22,65 ≈ 0,4196m + 0,0442m = 0,4637m. Densidade = 10m / 0,4637m ≈ 21,57 g/cm³." },

  { id: "2018s2-54", ano: 2018, n: 54, tema: "Matemática", d: 2,
    q: "Dos 150 participantes de uma pesquisa, 83 responderam que estão trabalhando, 55 que estão estudando e 24 que não estão estudando nem trabalhando. Se for sorteado um participante, a probabilidade de se sortear uma pessoa que esteja trabalhando e estudando ao mesmo tempo é igual a",
    a: ["8%.", "12%.", "36%.", "84%.", "92%."],
    r: 0, exp: "Quem trabalha ou estuda: 150 − 24 = 126. Pela união: 83 + 55 − x = 126 → x = 12 pessoas. 12/150 = 8%." },

  { id: "2018s2-55", ano: 2018, n: 55, tema: "Matemática", d: 2, img: ["2018s2-55.png"],
    ctx: "De 1973 a 2011, a concentração de espermatozoides em indivíduos que vivem na América do Norte, Europa, Austrália e Nova Zelândia despencou, em média, de 99 milhões por mL, em 1973, para 47 milhões por mL, em 2011. O gráfico mostra a queda (52,4%).",
    q: "Supondo que o decréscimo ocorreu de forma linear, conforme ilustrado no gráfico, a concentração sofreu uma redução anual de, aproximadamente,",
    a: ["2,10 milhões/mL.", "1,92 milhões/mL.", "1,37 milhões/mL.", "1,24 milhões/mL.", "1,10 milhões/mL."],
    r: 2, exp: "Queda: 99 − 47 = 52 milhões/mL em 2011 − 1973 = 38 anos. 52/38 ≈ 1,37 milhões/mL por ano." },

  { id: "2018s2-56", ano: 2018, n: 56, tema: "Matemática", d: 3, img: ["2018s2-56.png"],
    ctx: "Cinco simulações gráficas (I a V) mostram a evolução de três investimentos A, B e C a partir de R$ 1.000, ao longo dos anos. Funções escolhidas pelo cliente: A(t) = 1000 · (1,0085)ᵗ; B(t) = 1000 · (1,009)ᵗ; C(t) = 1000 · (1,01)ᵗ.",
    q: "Das cinco simulações apresentadas, a que representa os três investimentos descritos anteriormente é a simulação",
    a: ["I.", "II.", "III.", "IV.", "V."],
    r: 4, exp: "As funções são exponenciais (curvas, não retas). Quanto maior a base, maior o crescimento: C (1,01) fica no topo, depois B (1,009) e por último A (1,0085). Isso corresponde à simulação V." },

  { id: "2018s2-57", ano: 2018, n: 57, tema: "Matemática", d: 3, img: ["2018s2-57.png"],
    ctx: "Uma empresa de dedetização calcula o valor a ser cobrado a partir da área do local. A figura (fora de escala) mostra a planta baixa e as medidas internas, em metros, de um apartamento e de uma casa. As junções das paredes formam ângulos retos. A empresa cobra R$ 4,20 por metro quadrado.",
    q: "Desconsiderando as repartições internas dos imóveis, a diferença entre os valores que serão cobrados desses dois imóveis é um valor",
    a: ["inferior a R$ 10,00.", "entre R$ 10,00 e R$ 20,00.", "entre R$ 20,00 e R$ 30,00.", "entre R$ 30,00 e R$ 40,00.", "superior a R$ 50,00."],
    r: 1 },

  { id: "2018s2-58", ano: 2018, n: 58, tema: "Matemática", d: 2,
    ctx: "Uma peça maciça tem o formato de um paralelepípedo reto retangular de 3 cm por 5 cm por 8 cm. Em uma das faces de maior área há três furos cilíndricos retos, com 2 cm de diâmetro e 2 cm de profundidade, cada um. A peça é feita injetando nylon em um molde.",
    q: "Desconsiderando eventuais desperdícios e utilizando π = 3,1, o volume de nylon utilizado para confeccionar 5 000 dessas peças é um valor",
    a: ["superior a 2 000 000 cm³.", "entre 1 500 000 cm³ e 2 000 000 cm³.", "entre 1 000 000 cm³ e 1 500 000 cm³.", "entre 500 000 cm³ e 1 000 000 cm³.", "inferior a 500 000 cm³."],
    r: 3, exp: "Bloco: 3 · 5 · 8 = 120 cm³. Cada furo: π · 1² · 2 = 6,2 cm³; três furos = 18,6 cm³. Peça = 101,4 cm³. Para 5 000: 507 000 cm³." },

  { id: "2018s2-59", ano: 2018, n: 59, tema: "Matemática", d: 3, img: ["2018s2-59.png"],
    ctx: "O gráfico apresenta o perfil de diferentes profissões no mercado formal brasileiro. Cada ponto é uma profissão; a posição indica a idade mediana e o percentual de mulheres (eixos em diagonal: mais idade para cima, mais mulheres para a direita).",
    q: "De acordo com o gráfico, a profissão com mais mulheres de menor idade mediana e a profissão com mais homens de menor idade mediana são, respectivamente,",
    a: ["Recepcionista e Mecânico.", "Caixa e Embalador.", "Operador de telemarketing e Praça das Forças Armadas.", "Professor e Motorista de ônibus.", "Professor de ensino infantil e Pedreiro."],
    r: 2 },

  { id: "2018s2-60", ano: 2018, n: 60, tema: "Matemática", d: 1, img: ["2018s2-60.png"],
    ctx: "O gráfico apresenta a composição da matriz energética de cinco países (México, Bolívia, Finlândia, Egito e Índia), no ano de 2014, em porcentagem do total de energia produzida no país.",
    q: "Segundo o gráfico, o país cuja composição possui o maior percentual de energia hidrelétrica é",
    a: ["o México.", "a Bolívia.", "a Finlândia.", "o Egito.", "a Índia."],
    r: 1, exp: "Procure a faixa azul-clara (hidrelétrica): a da Bolívia é a mais larga, por pequena margem sobre a da Finlândia." },

  // =====================================================================
  // PROVA 2º SEMESTRE 2019 (14/07/2019). A questão 26 foi ANULADA no gabarito retificado e não foi incluída.
  // =====================================================================

  // ---------- HISTÓRIA ----------
  { id: "2019s2-01", ano: 2019, n: 1, tema: "História", d: 2,
    ctx: "“No Brasil, desde a Constituição de 1988, o sufrágio universal foi instituído para a escolha de vereadores, prefeitos, senadores, deputados estaduais e federais, além de governadores e presidentes da República. Sufrágio universal significa que todo o cidadão dentro das normas legais tem direito ao voto. […] todos os cidadãos com mais de 16 anos, homens ou mulheres, alfabetizados ou analfabetos, têm direito a escolher seu representante por meio do voto.” Hoje o direito ao voto se estende a todos os brasileiros natos ou naturalizados maiores de 16 anos.",
    q: "Já na democracia ateniense, na Antiguidade, o direito ao voto era restrito a",
    a: ["homens e mulheres, atenienses, filhos de pais atenienses ou estrangeiros, livres, maiores de idade.", "homens e mulheres, atenienses e estrangeiros, livres e escravos, maiores e menores de idade.", "homens, atenienses, filhos de pais atenienses, livres, maiores de idade.", "homens, atenienses, filhos de pais atenienses, livres e escravos, maiores e menores de idade.", "homens, atenienses, filhos de pais atenienses ou estrangeiros, livres e escravos, maiores de idade."],
    r: 2, exp: "Na Atenas clássica, só era cidadão (podia votar) o homem livre, adulto, filho de pai e mãe atenienses. Mulheres, estrangeiros (metecos) e escravos ficavam de fora." },

  { id: "2019s2-02", ano: 2019, n: 2, tema: "História", d: 1,
    ctx: "“Pelo fato de a imensa maioria da cristandade medieval ser composta de iletrados, os detalhes do Paraíso Terrestre eram propagados pelo clero cotidianamente em línguas vulgares. Possuidores da cultura escrita e, portanto, do acesso à Bíblia, os sacerdotes católicos transmitiam seus ensinamentos principalmente por meio da palavra, nos sermões e pregações […]. Gravuras, pinturas, vitrais e esculturas também ajudavam a veicular as mensagens eclesiásticas numa sociedade em que a leitura era um privilégio de poucos e uma das principais fontes do poder da Igreja Católica.” (Campos e Claro. Oficina de História)",
    q: "Segundo o texto,",
    a: ["por serem possuidores da cultura escrita, os sacerdotes católicos medievais foram encarregados de transmitir o privilégio da leitura a todos os fiéis, capacitando-os para ler a Bíblia.", "os sermões e as pregações realizados pelos sacerdotes nas missas e festas religiosas revelaram-se ineficientes na comunicação entre a Igreja Católica medieval e seus fiéis.", "a Igreja Católica fez uso das artes plásticas e da oralidade para transmitir as mensagens religiosas a um público majoritariamente analfabeto.", "gravuras, pinturas, vitrais e esculturas eram acessíveis a poucos e, consequentemente, se constituíam em uma das principais fontes do poder da Igreja Católica.", "os sacerdotes católicos transmitiam seus ensinamentos para os poucos privilegiados que sabiam ler utilizando a Bíblia, texto sagrado escrito em línguas vulgares."],
    r: 2 },

  { id: "2019s2-03", ano: 2019, n: 3, tema: "História", d: 1,
    ctx: "Entre os séculos XIII e XIV, as cidades italianas foram berço de um movimento de transformação intelectual e cultural que se espalharia por toda a Europa e atingiria o apogeu nos séculos XV e XVI.",
    q: "Conhecido como Renascimento, esse movimento se caracterizava, principalmente,",
    a: ["pela valorização da razão e do raciocínio lógico, pelo antropocentrismo, pelo universalismo e pela busca da perfeição na representação artística das formas humanas e da natureza.", "pela busca da santidade no comportamento cotidiano, pelo misticismo, pela superstição e pelo eurocentrismo nas concepções filosóficas.", "pela defesa da diversidade e do relativismo cultural, pelo teocentrismo, pela tolerância religiosa e pela valorização do ensino laico.", "pelo investimento em escolas, universidades e centros de pesquisa científica, pelo apego às tradições germânicas e pela defesa do absolutismo monárquico.", "pelo retorno aos ideais religiosos medievais, pela busca de manifestações divinas nos fenômenos da natureza e pela perseguição aos praticantes das religiões consideradas pagãs."],
    r: 0 },

  { id: "2019s2-04", ano: 2019, n: 4, tema: "História", d: 2,
    ctx: "Os historiadores são unânimes em afirmar que Portugal foi o país pioneiro nas Grandes Navegações europeias entre o final da Idade Média e o início da Idade Moderna.",
    q: "Esse pioneirismo se deveu, principalmente,",
    a: ["à fragmentação do poder real, às disputas comerciais com a Inglaterra, ocorridas ao longo do século XIII, e à proximidade geográfica entre Portugal e Índia.", "à centralização monárquica, realizada em Portugal entre os séculos XII e XIV, à posição geográfica privilegiada e ao aperfeiçoamento das técnicas de navegação a partir do século XV.", "à adoção do liberalismo econômico, a partir do século XVI, ao fluxo de metais preciosos das colônias para Portugal e ao investimento estatal na armação de navios mercantes no século XVII.", "ao tráfico de escravos, cujo fluxo constante ligava África e Europa desde o século XI, e aos investimentos da burguesia comercial, fortalecida pelos lucros do açúcar produzido no Brasil.", "ao desenvolvimento da bússola, do astrolábio e do quadrante, invenções de cientistas portugueses abrigados na Escola de Sagres, pioneira no desenvolvimento de técnicas e instrumentos de navegação no século XIX."],
    r: 1, exp: "Portugal foi um dos primeiros Estados centralizados (Dinastia de Avis, 1385), tinha costa atlântica e investiu em técnicas de navegação (caravela, astrolábio). As demais alternativas têm datas e fatos errados (liberalismo no século XVI, Escola de Sagres no século XIX etc.)." },

  { id: "2019s2-05", ano: 2019, n: 5, tema: "História", d: 1,
    ctx: "No contexto da conquista e da colonização da América, as colônias se configuraram em “extensões” territoriais de suas metrópoles.",
    q: "Chamada de Pacto Colonial, ou Exclusivo Metropolitano, a relação entre as metrópoles europeias e suas colônias americanas determinava que",
    a: ["os colonos tinham liberdade de comércio, devendo destinar às metrópoles parte da renda obtida com a venda de mercadorias.", "as colônias poderiam comercializar exclusivamente com a sua metrópole ou com agentes autorizados pelos poderes metropolitanos.", "as colônias deveriam organizar os territórios de modo a abrigar universidades, imprensa, manufaturas e pequenas propriedades rurais.", "as colônias deveriam produzir exclusivamente o necessário para a subsistência de seus habitantes, abstendo-se de comercializar produtos com a metrópole.", "os colonos poderiam comercializar seus produtos com agentes mercantis das colônias fronteiriças, sem necessidade de autorização pelo poder metropolitano."],
    r: 1, exp: "Exclusivo metropolitano: a colônia só podia comprar e vender com a metrópole (ou com quem ela autorizasse). Universidades, imprensa e manufaturas eram proibidas." },

  { id: "2019s2-06", ano: 2019, n: 6, tema: "História", d: 2,
    ctx: "Considerada o pior e mais longo período de recessão econômica do século XX, a Crise de 1929 teve como causas a superprodução de bens de consumo e a especulação financeira. Embora seu epicentro tenha sido os Estados Unidos, a crise teve efeitos internacionais: os países que exportavam produtos para os Estados Unidos perderam mercado, ficando com seus estoques abarrotados.",
    q: "No Brasil, a área que mais sofreu com a recessão econômica foi a de produção de",
    a: ["borracha, insumo básico da fabricação de pneus pela indústria automobilística, responsável por 65% das exportações brasileiras no contexto da Crise de 1929.", "café, à época o principal produto de exportação do país, cujo maior comprador era os Estados Unidos, que respondiam pelo consumo da maior parte da produção brasileira.", "cana-de-açúcar, segundo produto na pauta de exportações na década de 1930, que seguia para os Estados Unidos a fim de ser processada e transformada em xarope.", "algodão, cuja produção se intensificara após a crise do café, no século XIX, era utilizado pela indústria têxtil estadunidense na fabricação de vestuário e roupas de cama e mesa.", "tabaco, matéria-prima da indústria químico-farmacêutica, que respondia por mais da metade das exportações brasileiras e tinha a Alemanha e os Estados Unidos como principais compradores."],
    r: 1 },

  { id: "2019s2-07", ano: 2019, n: 7, tema: "História", d: 1,
    ctx: "O governo do presidente Juscelino Kubitschek (1956–1961) foi marcado por otimismo e euforia, apoiado em ideais modernos e industrializantes. Sob o lema “50 anos em 5”, esse presidente apresentou seu Plano de Metas.",
    q: "O Plano de Metas consistia, principalmente, em",
    a: ["investimento de capitais nacionais na indústria automobilística estatal, política de integração regional e desenvolvimento do Nordeste, incentivos à importação de produtos manufaturados e insumos hospitalares como parte da Política Nacional de Saúde.", "investimento de capitais estrangeiros na infraestrutura de saneamento básico no Centro-Oeste, mudança da capital federal para o Rio de Janeiro e reorganização da legislação trabalhista para impulsionar a criação de empregos.", "investimento de capitais nacionais e estrangeiros nos setores de transportes, energia, indústrias de base e de automóveis, incentivo à política de substituição de importações e desenvolvimento da educação.", "valorização da diversidade regional para a geração de emprego e renda nos setores de economia criativa, de indústria cultural e de produção intelectual, incentivo à mecanização da agricultura e desenvolvimento de pesquisas na área de combustíveis alternativos.", "valorização da indústria nacional de insumos e defensivos agrícolas, criação de bancos estatais para financiamento da agricultura familiar, controle de preços de alimentos e de produtos industrializados e criação de universidades públicas no Norte e no Nordeste."],
    r: 2, exp: "O Plano de Metas tinha 31 metas, com foco em energia, transportes, indústria de base e automobilística, sustentado por capital nacional e estrangeiro. A capital foi transferida do Rio de Janeiro para Brasília (e não o contrário)." },

  // ---------- QUÍMICA ----------
  { id: "2019s2-08", ano: 2019, n: 8, tema: "Química", d: 1,
    ctx: "Gases produzidos pela degradação do lixo orgânico por bactérias em aterros sanitários podem ser recolhidos por drenos, tratados e enviados a motores que geram energia. A junção desses gases é chamada de biogás. Na pecuária, existem os biodigestores, que tratam o adubo de porcos e de outros animais.",
    q: "O principal componente do biogás é o",
    a: ["metano.", "etano.", "propano.", "hidrogênio.", "nitrogênio."],
    r: 0, exp: "A decomposição anaeróbia da matéria orgânica produz principalmente metano (CH₄), com algum CO₂." },

  { id: "2019s2-09", ano: 2019, n: 9, tema: "Química", d: 2,
    ctx: "Um produtor rural da Chapada Diamantina instalou um biodigestor e usa o gás produzido para cozinhar. Considere que a massa molar do principal componente do biogás é 16 g/mol e que sua combustão completa produz 802 kJ/mol, nas condições experimentais.",
    q: "A quantidade de energia gerada ao final de um dia, em que houve a formação de 1 kg desse componente do biogás é",
    a: ["50 125 kJ.", "5 012 kJ.", "802 kJ.", "80 kJ.", "50 kJ."],
    r: 0, exp: "1 kg = 1 000 g; mols = 1 000 / 16 = 62,5 mol. Energia = 62,5 · 802 = 50 125 kJ." },

  { id: "2019s2-10", ano: 2019, n: 10, tema: "Química", d: 2, img: ["2019s2-10.png"],
    ctx: "A serotonina e a dopamina são neurotransmissores conhecidos, respectivamente, como hormônios da felicidade e do bem-estar. A figura mostra suas fórmulas estruturais.",
    q: "As funções orgânicas presentes nos neurotransmissores representados, são",
    a: ["fenol e amida.", "fenol e amina.", "álcool e amida.", "álcool e amina.", "aldeído e amina."],
    r: 1, exp: "As hidroxilas (–OH) estão ligadas diretamente ao anel aromático: função fenol (não álcool). O grupo –NH₂ ligado a carbono é amina." },

  { id: "2019s2-11", ano: 2019, n: 11, tema: "Química", d: 3,
    ctx: "Metais pesados têm Índice de Toxidez (IT) que limita sua concentração na água (resolução nº 20 do CONAMA). Padrões para as Classes 1 e 2, em mg/L: cádmio 0,001; chumbo 0,03; cobre 0,02; cromo total 0,1; mercúrio 0,0002; níquel 0,025; zinco 0,18. (Classes 3 e 4: cádmio 0,01; chumbo 0,05; cobre 0,5; cromo 0,1; mercúrio 0,002; níquel 0,025; zinco 5,0.)\nMassas molares, em g/mol: Cd 112; Pb 207; Cu 63,5; Cr 52; Hg 201; Ni 59; Zn 65,5.",
    q: "Considerando os Padrões Classes 1 e 2, o componente de maior toxidade deve apresentar IT menor, que corresponde ao",
    a: ["cádmio, com IT aproximado de 9 × 10⁻⁹ mol/L", "chumbo, com IT aproximado de 1 × 10⁻⁷ mol/L", "cobre, com IT aproximado de 3 × 10⁻⁷ mol/L.", "mercúrio, com IT aproximado de 1 × 10⁻⁹ mol/L.", "níquel, com IT aproximado de 4 × 10⁻⁷ mol/L."],
    r: 3, exp: "Converta mg/L para mol/L (mg/L ÷ 1 000 ÷ massa molar): Cd ≈ 8,9 × 10⁻⁹; Pb ≈ 1,4 × 10⁻⁷; Cu ≈ 3,1 × 10⁻⁷; Hg ≈ 1,0 × 10⁻⁹; Ni ≈ 4,2 × 10⁻⁷. O menor valor é o do mercúrio." },

  { id: "2019s2-12", ano: 2019, n: 12, tema: "Química", d: 2, img: ["2019s2-12.png"],
    ctx: "As reações de esterificação são usadas para obter ésteres flavorizantes, como o etanoato de etila (acetato de etila). Sua obtenção ocorre pela reação entre o ácido etanoico e o etanol: CH₃COOH + HO–CH₂CH₃ ⇌ CH₃COO–CH₂CH₃ + H₂O.",
    q: "Assim, para obtenção do flavorizante butanoato de propila, devemos reagir",
    a: ["ácido propanoico e butan-2-ol.", "ácido propanoico e propan-1-ol.", "ácido butanoico e propan-1-ol.", "ácido butanoico e propan-2-ol.", "ácido butanoico e butan-1-ol."],
    r: 2, exp: "Em ‘butanoato de propila’, a parte ‘butanoato’ vem do ácido (butanoico) e a parte ‘propila’ vem do álcool (propan-1-ol, de cadeia reta)." },

  { id: "2019s2-13", ano: 2019, n: 13, tema: "Química", d: 2,
    ctx: "Equação: N₂ + 3 H₂ → 2 NH₃ (rendimento de 100%).\n1º experimento: nitrogênio 14 g; hidrogênio 3 g; amônia 17 g.\n2º experimento: nitrogênio 70 g; hidrogênio X; amônia Y.",
    q: "Os valores das massas, em gramas, que correspondem a X e Y no quadro apresentado, são, respectivamente,",
    a: ["15 e 85", "45 e 170", "9 e 34", "6 e 34", "2 e 17"],
    r: 0, exp: "Lei de Proust: 70 g de N₂ é 5 vezes 14 g. Todas as massas ficam 5 vezes maiores: X = 3 · 5 = 15 g e Y = 17 · 5 = 85 g." },

  { id: "2019s2-14", ano: 2019, n: 14, tema: "Química", d: 2, img: ["2019s2-14.png"],
    ctx: "Em uma aula de Cinética Química, os alunos analisam a decomposição da água oxigenada (H₂O₂ → H₂O + ½ O₂) em dois tubos de ensaio, e um deles contém um catalisador. Os alunos esboçaram gráficos do volume de O₂ liberado em função do tempo.",
    q: "Conclui-se corretamente que a curva tracejada corresponde ao experimento",
    a: ["sem catalisador, pois apresenta maior velocidade de formação de gás.", "sem catalisador, pois apresenta menor velocidade de formação de gás.", "com catalisador, pois apresenta maior velocidade de formação de gás.", "com catalisador, pois apresenta menor velocidade de formação de gás.", "com catalisador, pois temos a mesma formação de gás nos processos."],
    r: 1, exp: "A curva tracejada sobe mais devagar: a velocidade de formação de O₂ é menor, logo é a reação sem catalisador. O catalisador aumenta a velocidade, mas não a quantidade final de gás." },

  // ---------- INGLÊS ----------
  { id: "2019s2-15", ano: 2019, n: 15, tema: "Língua Inglesa", d: 1, t: "purpose",
    q: "Depreende-se do texto que",
    a: ["participaram da pesquisa pessoas com 50 anos ou mais.", "mais de 7 000 voluntários participaram da pesquisa descrita.", "a idade média dos participantes da pesquisa era de 50 anos.", "muitos participantes da pesquisa morreram antes dos 70 anos de idade.", "os participantes da pesquisa responderam a questionários por quatro anos."],
    r: 0, exp: "‘6,985 adults… ages 50 and above’. Eram 6 985 (menos de 7 000), a idade média era de 68,6 anos e o questionário foi respondido em 2006 (a análise das mortes foi de 2006 a 2010)." },

  { id: "2019s2-16", ano: 2019, n: 16, tema: "Língua Inglesa", d: 2, t: "purpose",
    q: "A pesquisa descrita no texto sugere que a longevidade está conectada",
    a: ["ao nível educacional.", "à produtividade no trabalho.", "a exercícios físicos regulares.", "aos cuidados com a saúde mental.", "ao estabelecimento de metas na vida."],
    r: 4, exp: "O ‘purpose’ é definido como um objetivo de vida que estimula metas (‘goals’); quanto mais senso de propósito, menor o risco de morrer." },

  { id: "2019s2-17", ano: 2019, n: 17, tema: "Língua Inglesa", d: 2, t: "purpose",
    q: "A explicação dada pelos autores da pesquisa ao conceito de purpose seria",
    a: ["um estabelecimento de objetivos que estimula hábitos saudáveis e que dá sentido à vida.", "uma vontade de trabalhar ativamente com vistas a uma aposentadoria tranquila e pacata.", "uma organização pessoal que planeja um cotidiano saudável e boas relações interpessoais.", "a busca por sucesso tanto nas relações profissionais, quanto nas pessoais, visando a dinheiro.", "a crença de que pensamentos positivos e controle de saúde sejam indispensáveis na realização de sonhos."],
    r: 0, exp: "3º parágrafo: ‘a self-organizing life aim that stimulates goals, promotes healthy behaviors and gives meaning to life’." },

  { id: "2019s2-18", ano: 2019, n: 18, tema: "Língua Inglesa", d: 2, t: "purpose",
    q: "Assinale uma explicação dada pelos cientistas para justificar suas descobertas.",
    a: ["Felicidade e bem-estar impedem que inflamações se manifestem.", "A longevidade está associada a um código genético privilegiado.", "Atitudes positivas e saudáveis fortalecem o sistema imunológico.", "Comportamentos inadequados alteram genes de maneira irreversível.", "O estatuto sócio-demográfico estabeleceria condições primordiais para as pessoas se tornarem longevas."],
    r: 2, exp: "Oswald: ‘a healthy mind allows the body more immune response’ (uma mente saudável dá mais resposta imune ao corpo)." },

  { id: "2019s2-19", ano: 2019, n: 19, tema: "Língua Inglesa", d: 1, t: "purpose",
    q: "No trecho do segundo parágrafo – and used it to come up with a score – o termo em destaque (it) se refere a",
    a: ["life.", "questionnaire.", "purpose.", "team.", "study."],
    r: 1, exp: "A equipe pegou os dados de quem ‘completed a questionnaire’ e o usou (it = o questionário) para chegar a uma pontuação." },

  { id: "2019s2-20", ano: 2019, n: 20, tema: "Língua Inglesa", d: 1, t: "purpose",
    q: "No trecho do quinto parágrafo – Meanwhile, lacking a purpose could dampen a person’s motivation to be healthy and active – o termo em destaque (Meanwhile) corresponde em português a",
    a: ["por exemplo.", "apesar disso.", "ao mesmo tempo.", "portanto.", "isto é."],
    r: 2 },

  { id: "2019s2-21", ano: 2019, n: 21, tema: "Língua Inglesa", d: 2, t: "purpose",
    q: "No trecho do sexto parágrafo – Remarkably, a number of studies seem to show that happy people and people with a sense of purpose live longer – o termo em destaque (Remarkably) poderia ser substituído, sem alteração de sentido, por",
    a: ["actually.", "awkwardly.", "fortunately.", "surprisingly.", "conveniently."],
    r: 3, exp: "‘Remarkably’ = notavelmente, surpreendentemente. ‘Actually’ = na verdade (falso cognato de ‘atualmente’)." },

  // ---------- MATEMÁTICA ----------
  { id: "2019s2-22", ano: 2019, n: 22, tema: "Matemática", d: 2,
    ctx: "“Dados da OMS apontam que 16 milhões de brasileiros sofrem de diabetes. […] O Rio de Janeiro aparece como a cidade com maior prevalência de diagnóstico médico da doença, com 10,4 casos a cada 100 mil habitantes.”",
    q: "De acordo com o texto, a taxa de cariocas diagnosticados com diabetes é mais próxima de",
    a: ["0,0001%.", "0,01%.", "1%.", "10%.", "61%."],
    r: 1, exp: "10,4 a cada 100 000 = 10,4/100 000 = 0,000104 = 0,0104% ≈ 0,01%." },

  { id: "2019s2-23", ano: 2019, n: 23, tema: "Matemática", d: 2,
    ctx: "“O Canadá foi o país que apresentou o maior crescimento no número de visitantes ao Brasil, passando de 48 951, em 2017, para 71 160, em 2018.” Um estudante supôs que uma função polinomial de 1º grau estabelecia o número de turistas canadenses ano a ano.",
    q: "O número que ele encontrou, para turistas canadenses que entrariam no Brasil em 2022, foi",
    a: ["111 045.", "115 578.", "120 111.", "122 209.", "159 996."],
    r: 4, exp: "Aumento por ano: 71 160 − 48 951 = 22 209. De 2018 a 2022 são 4 anos: 71 160 + 4 · 22 209 = 71 160 + 88 836 = 159 996." },

  { id: "2019s2-24", ano: 2019, n: 24, tema: "Matemática", d: 3, img: ["2019s2-24.png"],
    ctx: "Na figura: as retas a, b e c são distintas e paralelas entre si; as retas p, q e r são distintas, interceptam a, b e c e concorrem no ponto M, que pertence à reta a; p e q são perpendiculares entre si; x, 4, 2, y, 3,5 e 7 são as medidas, em cm, dos seis segmentos determinados nas retas p, q e r pela intersecção com a, b e c.",
    q: "A área do triângulo determinado pelas retas p, q e c, em centímetros quadrados, é",
    a: ["6.", "12.", "18.", "21.", "24."],
    r: 2, exp: "Teorema de Tales em r: 3,5/7 = 1/2. Em p: x/4 = 1/2 → x = 2. Em q: 2/y = 1/2 → y = 4. Os catetos do triângulo (retângulo em M) medem x + 4 = 6 e 2 + y = 6. Área = 6 · 6 / 2 = 18." },

  { id: "2019s2-25", ano: 2019, n: 25, tema: "Matemática", d: 3,
    ctx: "A piscina de Miguel é um cilindro circular reto com raio da base de 5 m e profundidade de 1,5 m, completamente cheia. Ele não quer que o nível da água ultrapasse 1,2 m e aciona uma bomba com vazão de 30 litros por minuto. Adote π = 3,14.",
    q: "Para que o nível da água chegue ao desejado por Miguel, a bomba deverá ficar funcionando por, no mínimo,",
    a: ["10 horas e 35 minutos.", "11 horas e 25 minutos.", "11 horas e 55 minutos.", "12 horas e 15 minutos.", "13 horas e 05 minutos."],
    r: 4, exp: "Altura a retirar: 1,5 − 1,2 = 0,3 m. Volume = π · 5² · 0,3 = 3,14 · 7,5 = 23,55 m³ = 23 550 L. Tempo = 23 550 / 30 = 785 min = 13 h 05 min." },

  { id: "2019s2-27", ano: 2019, n: 27, tema: "Matemática", d: 3,
    ctx: "A CCJ do Senado tem 27 membros, ou seja, um terço da composição do Senado (81 senadores). A senadora Simone Tebet presidiu a comissão.",
    q: "Entre todas as formas possíveis de formar a CCJ, assinale a alternativa que apresenta o cálculo do número de comissões nas quais um dos integrantes é a senadora Simone Tebet.",
    a: ["80! / (26! · 54!)", "81! / (26! · 55!)", "81! / (27! · 53!)", "81! / 54!", "80! / 27!"],
    r: 0, exp: "Fixando Simone, faltam 26 vagas para escolher entre os outros 80 senadores: C(80, 26) = 80! / (26! · 54!)." },

  { id: "2019s2-28", ano: 2019, n: 28, tema: "Matemática", d: 3,
    ctx: "Marina precisa comprar pares de halteres (h), colchonetes (c) e camas elásticas (e), com R$ 1 700,00. 8 pares de halteres e 2 camas elásticas custam R$ 1 020,00. 8 pares de halteres e 16 colchonetes custam R$ 1 000,00. 4 camas elásticas e 16 colchonetes custam R$ 1 480,00. Marina decidiu comprar 3 camas elásticas, 8 pares de halteres e o maior número possível de colchonetes sem ultrapassar R$ 1 700,00.",
    q: "O número de colchonetes que Marina conseguirá comprar é",
    a: ["8.", "10.", "12.", "14.", "16."],
    r: 3, exp: "Do sistema: 8h + 2e = 1 020; 8h + 16c = 1 000; 4e + 16c = 1 480. Resolvendo: h = 65, e = 250, c = 30. Gasto fixo: 3 · 250 + 8 · 65 = 1 270. Sobram 430, e 430 / 30 ≈ 14,3, então são 14 colchonetes." },

  // ---------- FÍSICA ----------
  { id: "2019s2-29", ano: 2019, n: 29, tema: "Física", d: 2,
    ctx: "Uma estrada serrana possui dois túneis: UM e DOIS. A extensão do túnel DOIS é o quádruplo da do túnel UM. Um carro A entra no túnel UM com velocidade V. Nesse exato instante, um carro B, com o dobro da velocidade de A, adentra o túnel DOIS. Ambos mantêm velocidades constantes.",
    q: "Em relação ao intervalo de tempo que cada carro demorou para percorrer toda a extensão do túnel, o intervalo de tempo do carro B é",
    a: ["o quádruplo do intervalo de tempo do carro A.", "o dobro do intervalo de tempo do carro A.", "igual ao intervalo de tempo do carro A.", "a metade do intervalo de tempo do carro A.", "um quarto do intervalo de tempo do carro A."],
    r: 1, exp: "Seja L o túnel UM. A: t = L/V. B: t = 4L/(2V) = 2L/V, o dobro do tempo de A." },

  { id: "2019s2-30", ano: 2019, n: 30, tema: "Física", d: 3,
    ctx: "Em corridas de Fórmula 1, é comum os pilotos se aproximarem da parte interna de uma curva e optarem por uma trajetória tangente a essa. Quanto menor o tempo para percorrer um trajeto, melhor a performance. A figura mostra a trajetória de um carro percorrendo uma sequência de curvas (chicane), logo após uma longa reta. Para o piloto efetuar as curvas com maior segurança e melhor performance, ele deverá aumentar a força de atrito.",
    q: "Podemos deduzir corretamente que, ao iniciar a curva, ele deve procurar",
    a: ["aumentar o raio de curvatura e aumentar a velocidade tangencial, aumentando a força centrípeta.", "aumentar o raio de curvatura e diminuir a velocidade tangencial, aumentando a força centrípeta.", "aumentar o raio de curvatura e diminuir a velocidade tangencial, diminuindo a força centrípeta.", "diminuir o raio de curvatura e diminuir a velocidade tangencial, diminuindo a força centrípeta.", "diminuir o raio de curvatura e aumentar a velocidade tangencial, aumentando a força centrípeta."],
    r: 4, exp: "A força centrípeta é F = m·v²/R, fornecida pelo atrito. O enunciado pede aumentar a força de atrito: isso ocorre com menor raio e maior velocidade, conforme o gabarito oficial." },

  { id: "2019s2-31", ano: 2019, n: 31, tema: "Física", d: 2,
    ctx: "Durante uma competição de saltos ornamentais, uma atleta posiciona-se na ponta do trampolim de 5 metros e salta, traçando no ar uma trajetória parabólica até a água do tanque.",
    q: "Considerando o sistema conservativo, sobre o salto, podemos afirmar corretamente que",
    a: ["as suas energias potencial gravitacional e cinética são máximas ao tocar a água.", "a somatória de todas as forças aplicadas à atleta é zero durante todo o percurso até a água.", "a sua energia potencial gravitacional é máxima e sua energia cinética é mínima no ponto mais alto da trajetória.", "a sua velocidade tangencial é máxima no exato instante em que se encontra no ponto mais alto de sua trajetória.", "a energia mecânica é a soma das energias potenciais e cinética e é maior mais próximo à água da piscina por ser sistema conservativo."],
    r: 2, exp: "Quanto mais alto, maior a energia potencial e menor a cinética. A energia mecânica é constante (sistema conservativo) e a força resultante é o peso, não zero." },

  { id: "2019s2-32", ano: 2019, n: 32, tema: "Física", d: 2,
    ctx: "Numa tarde de céu limpo, é possível ver o nascer ou o pôr do Sol ou da Lua cheia com o “tamanho” avistado consideravelmente ampliado. É comum pensar que isso ocorre por esses astros estarem mais próximos da Terra, mas essa percepção é equivocada.",
    q: "Tendo como base a cena descrita, o correto é afirmar que",
    a: ["isso só é possível por acontecer no ponto cardeal Leste.", "a dispersão luminosa está presente devido à natureza da luz refletida da Lua e emitida pelo Sol.", "o “tamanho” real do Sol e da Lua é semelhante e isso faz com que seja possível essa imagem.", "isso é possível graças ao fenômeno da refração da luz ao passar pelas diferentes camadas da atmosfera.", "o fenômeno da difração das ondas eletromagnéticas, causada pelo espaçamento entre as partículas atmosféricas, justifica tal aparência."],
    r: 3 },

  { id: "2019s2-33", ano: 2019, n: 33, tema: "Física", d: 2, img: ["2019s2-33.png"],
    ctx: "Uma foto que “viralizou” mostra uma águia-de-cabeça-branca chamada Bruce em pleno voo, tocando a água com a ponta das asas, em um santuário no Canadá. A foto tem uma imagem enantiomorfa formada na água.",
    q: "Sobre a foto apresentada, podemos afirmar corretamente que",
    a: ["a luz que possibilitou a geração da imagem foi emitida pelas lentes da câmera do fotógrafo.", "a imagem só pode ser considerada enantiomorfa por estar refletida em relação ao plano horizontal.", "a distância entre as pontas das asas na imagem é igual à distância entre o bico da ave e o bico da ave na imagem.", "a superfície da água se comporta como um espelho plano, produzindo uma imagem que pode ser classificada como real e direita.", "a distância entre o bico da águia até a superfície da água e a distância entre o bico da águia na imagem e a superfície da água são iguais."],
    r: 4, exp: "Em um espelho plano, objeto e imagem ficam à mesma distância do espelho (a superfície da água). A imagem é virtual." },

  { id: "2019s2-34", ano: 2019, n: 34, tema: "Física", d: 1,
    ctx: "A foto de Marcello Vitorino registra descargas elétricas atmosféricas (relâmpagos) na zona oeste de São Paulo. Elas podem ser geradas entre nuvens, dentro de nuvens, entre nuvem e solo ou solo e nuvem, e ocorrem devido ao rápido movimento de elétrons de um ponto a outro, com produção de luz e mudança brusca da temperatura.",
    q: "Sobre descargas elétricas atmosféricas, é correto afirmar que",
    a: ["ocorrem em nuvens de tempestades com chuvas e ventos intensos.", "a melhor maneira de nos protegermos desses fenômenos é no meio de uma multidão.", "se originam porque o ar é considerado um excelente condutor elétrico em condições normais.", "sua origem se dá devido à presença de um intenso campo elétrico que promove uma unificação das redes cristalinas entre nuvem e ar.", "ocorrem devido à quebra da rigidez dielétrica do ar, promovida pela ionização dos seus átomos em virtude de um intenso campo elétrico."],
    r: 4, exp: "O ar é isolante em condições normais. Um campo elétrico muito intenso ioniza os átomos e rompe a rigidez dielétrica do ar, e passa a haver descarga." },

  { id: "2019s2-35", ano: 2019, n: 35, tema: "Física", d: 3, img: ["2019s2-35.png"],
    ctx: "Considere o circuito da figura (resistor R variável, fonte de tensão U variável e corrente i) e as grandezas: i (corrente), U (ddp), R (resistência), P (potência dissipada) e E (energia dissipada). Símbolos: ↑ aumento, ↓ decréscimo, ↔ constante.\nAlternativas (i, U, R, P, E):\n(A) ↓, ↔, ↑, ↓, ↓\n(B) ↑, ↔, ↑, ↑, ↓\n(C) ↔, ↑, ↑, ↓, ↓\n(D) ↔, ↓, ↑, ↑, ↑\n(E) ↔, ↓, ↑, ↓, ↑",
    q: "A relação causal apresentada de forma correta, para o circuito elétrico esquemático da figura, é a da alternativa:",
    a: ["i ↓, U ↔, R ↑, P ↓, E ↓", "i ↑, U ↔, R ↑, P ↑, E ↓", "i ↔, U ↑, R ↑, P ↓, E ↓", "i ↔, U ↓, R ↑, P ↑, E ↑", "i ↔, U ↓, R ↑, P ↓, E ↑"],
    r: 0, exp: "Com a tensão U constante e a resistência R aumentando, a corrente i = U/R diminui. A potência P = U²/R também diminui, e a energia E = P · t, para o mesmo tempo, diminui." },

  // ---------- GEOGRAFIA ----------
  { id: "2019s2-36", ano: 2019, n: 36, tema: "Geografia", d: 1,
    ctx: "A Constituição Federal Brasileira de 1988 estabelece que a reforma agrária deve ser realizada em virtude da função social da terra.",
    q: "De acordo com a lei, áreas prioritárias para a execução dessa reforma são",
    a: ["as áreas quilombolas distantes dos centros consumidores e os lugares de baixa fertilidade agrícola.", "as terras devolutas ocupadas ilegalmente e os latifúndios improdutivos que não cumprem sua função social.", "os minifúndios produtivos ocupados por posseiros ou pelo proprietário legal e as áreas de florestas tropicais desmatadas.", "as regiões de mineração atingidas por rompimento de barragens e as terras de empresas rurais devedoras de impostos municipais.", "os cinturões verdes ao redor das grandes e médias cidades e as vastas extensões de terras ocupadas ilegalmente pelos indígenas."],
    r: 1 },

  { id: "2019s2-37", ano: 2019, n: 37, tema: "Geografia", d: 1,
    ctx: "Com o término da Segunda Guerra Mundial, inicia-se uma Ordem Mundial bipolar, colocando em lados opostos a União Soviética e os Estados Unidos, ambos disputando a hegemonia global. Esse período foi chamado de Guerra Fria, pois não houve uma guerra direta entre essas superpotências.",
    q: "O término desse período histórico foi marcado",
    a: ["pelo encerramento da crise dos mísseis em Cuba.", "pelo acirramento da corrida armamentista.", "pela construção do Muro de Berlim.", "pela chegada do ser humano à lua.", "pelo fim da União Soviética."],
    r: 4, exp: "A Guerra Fria terminou com o fim da URSS (1991), depois da queda do Muro de Berlim (1989)." },

  { id: "2019s2-38", ano: 2019, n: 38, tema: "Geografia", d: 1,
    ctx: "Podemos definir globalização como um processo de integração econômica, social e cultural em escala global, e pode ser entendida como uma fase de expansão do modo de produção capitalista, tendo como ponto de partida as grandes navegações dos séculos XV e XVI.",
    q: "Nesse processo, as grandes corporações buscam a",
    a: ["redução dos custos de produção para aumentar seus lucros.", "eliminação do consumismo com a intencionalidade de terminar a exploração dos recursos naturais.", "cessação das disputas entre as grandes empresas no sentido de diminuir os lucros abusivos.", "equiparação do poder aquisitivo da população mundial com intuito de diminuir o consumo mundializado.", "diminuição da utilização da tecnologia nos meios de transporte com o objetivo de aumentar a concorrência."],
    r: 0 },

  { id: "2019s2-39", ano: 2019, n: 39, tema: "Geografia", d: 2,
    ctx: "“O avanço nos transportes, juntamente com as comunicações favoreceu a dispersão geográfica das indústrias, sem prejuízo do poder de controle das matrizes sobre suas subsidiárias.” (Scarlato. O espaço industrial brasileiro. Adaptado)",
    q: "É correto afirmar que esse processo explica a",
    a: ["concentração, nos países desenvolvidos, de indústrias que empregam muita mão de obra barata e são muito poluidoras.", "descentralização geográfica das grandes indústrias dos países desenvolvidos para os países subdesenvolvidos.", "centralização das áreas de pesquisa e de desenvolvimento (P&D) das grandes indústrias transnacionais em países subdesenvolvidos.", "desconcentração industrial que teve início na primeira revolução industrial e terminou com a descolonização dos países africanos e asiáticos.", "desindustrialização crescente em países subdesenvolvidos que transferem mão de obra barata e tecnologia de ponta para os países desenvolvidos."],
    r: 1, exp: "Indústrias de países desenvolvidos instalam fábricas em países subdesenvolvidos (mão de obra barata), mantendo o controle e a pesquisa nas matrizes." },

  { id: "2019s2-40", ano: 2019, n: 40, tema: "Geografia", d: 2,
    ctx: "“As migrações internas desempenham papel fundamental na determinação dos tamanhos populacionais das regiões, estados e municípios […]. A etapa de intensa industrialização brasileira, de expansão acelerada das fronteiras agrícolas e de integração do mercado nacional, que perdurou com maior força até início dos anos 1980, foi amplamente ancorada em volumosos fluxos migratórios […].” (Adaptado)",
    q: "Dentre os movimentos migratórios que ocorreram no Brasil no século XX, podemos destacar corretamente a migração de",
    a: ["nordestinos, também conhecidos como bóias-frias, para o trabalho nas lavouras de café do Espírito Santo, na década de 1930.", "nortistas, também conhecidos como soldados da borracha, para o trabalho de extração de látex nos seringais do Paraná, na década de 1940.", "nordestinos, também conhecidos como candangos, para o trabalho de construção de Brasília, na década de 1950.", "nortistas, também conhecidos como brasiguaios, para o trabalho nas fazendas de soja de Mato Grosso do Sul, na década de 1960.", "sulistas, também conhecidos como tropeiros, para o trabalho com o gado leiteiro em Minas Gerais, na década de 1970."],
    r: 2, exp: "Candangos foram os trabalhadores (muitos nordestinos) que construíram Brasília, nos anos 1950. Soldados da borracha foram nordestinos para a Amazônia; brasiguaios são brasileiros no Paraguai." },

  { id: "2019s2-41", ano: 2019, n: 41, tema: "Geografia", d: 2,
    ctx: "De acordo com o IBGE, a população brasileira está perto de atingir os 210 milhões de habitantes. Apesar do crescimento contínuo, a população brasileira segue a tendência mundial de declínio da taxa de crescimento.",
    q: "O crescimento da população brasileira, nas duas últimas décadas, está ligado principalmente",
    a: ["ao grande fluxo migratório registrado nesse período, principalmente de refugiados armênios, africanos e centro-americanos.", "ao aumento da taxa de mortalidade que, nesse período, superou a taxa de natalidade, aliado à redução da expectativa de vida.", "à positividade da taxa de crescimento vegetativo, que é calculada pela diferença entre a taxa de natalidade e a taxa de mortalidade, ocorrida nesse período.", "ao aumento constante da taxa de fecundidade nesse período, que é a estimativa do número de filhos por mulher, em média, durante seu período reprodutivo.", "à proibição, nesse período, do uso de métodos contraceptivos, aliada à repressão às clínicas clandestinas de aborto e ao incentivo ao aumento da taxa de natalidade."],
    r: 2, exp: "A natalidade ainda é maior que a mortalidade, então o crescimento vegetativo é positivo (apesar de cada vez menor). A fecundidade vem caindo." },

  { id: "2019s2-42", ano: 2019, n: 42, tema: "Geografia", d: 2,
    ctx: "Aziz Ab’Saber classificou as paisagens naturais brasileiras em Domínios Morfoclimáticos. Uma delas ocorre na porção próxima ao litoral oriental do país, do Nordeste ao Sul, adentrando o interior da Região Sudeste. É ocupada em sua maioria pela Mata Atlântica, segundo maior complexo de floresta com maior biodiversidade do país. O relevo é o grande elemento dessa paisagem, afetado por forte erosão causada pelas chuvas locais.",
    q: "O Domínio Morfoclimático descrito no segundo parágrafo é o",
    a: ["do Cerrado.", "da Caatinga.", "das Pradarias.", "das Araucárias.", "de Mares de Morros."],
    r: 4 },

  // ---------- BIOLOGIA ----------
  { id: "2019s2-43", ano: 2019, n: 43, tema: "Biologia", d: 1,
    ctx: "Conforme dados de 2016 do Ministério da Saúde, mais da metade da população brasileira encontra-se com sobrepeso. Esse fenômeno decorre tanto do aumento do sedentarismo quanto do maior consumo de alimentos relativamente mais calóricos.",
    q: "Esses alimentos são particularmente ricos em",
    a: ["proteínas, água e vitaminas.", "água, sais minerais e lipídios.", "vitaminas, carboidratos e fibras.", "sais minerais, fibras e vitaminas.", "proteínas, carboidratos e lipídios."],
    r: 4, exp: "Os macronutrientes energéticos são carboidratos, lipídios e proteínas. Água, sais minerais, vitaminas e fibras não fornecem calorias." },

  { id: "2019s2-44", ano: 2019, n: 44, tema: "Biologia", d: 3,
    ctx: "Para testar a hipótese de que um paciente esteja com infecção bacteriana na pele, cientistas realizaram o protocolo: (I) colocaram raspagens da pele do paciente em placas ricas em nutrientes, todas nas mesmas condições; (II) acrescentaram, em 50% das placas, um vírus que inativa exclusivamente um gene responsável pela produção de um dos precursores de dineína, proteína fundamental para a estrutura dos centríolos; (III) analisaram a formação de colônias nas placas, passados três dias.\nO resultado foi que, nas placas com vírus, uma quantidade significativamente menor de colônias se formou.",
    q: "A partir desse resultado, é possível se concluir que a hipótese inicial foi",
    a: ["corroborada, já que os centríolos são componentes indispensáveis do mesossomo bacteriano.", "refutada, já que os vírus acabaram impedindo as divisões celulares em células eucariontes.", "corroborada, já que os vírus exterminaram as bactérias que estavam presentes nas placas.", "refutada, já que os vírus são responsáveis por potencializar a proliferação bacteriana.", "corroborada, já que a dineína tem ação antibiótica."],
    r: 1, exp: "Bactérias não têm centríolos. Se o vírus, que age sobre a dineína dos centríolos, reduziu as colônias, elas eram de células eucariontes. Logo, a hipótese de infecção bacteriana foi refutada." },

  { id: "2019s2-45", ano: 2019, n: 45, tema: "Biologia", d: 1,
    ctx: "Completa 160 anos, em 2019, a publicação de um livro que é um marco na História, sobretudo por explicar a evolução das espécies por meio do mecanismo de seleção natural e deixar implícita a ideia de que duas espécies, quaisquer que sejam, descendem de pelo menos um ancestral comum.",
    q: "Assinale a alternativa que apresenta corretamente o nome dessa obra e do respectivo autor.",
    a: ["“Sistema Natural”, por Carolus Linnaeus", "“A Origem das Espécies”, por Charles Darwin", "“Filosofia Zoológica”, por Jean-Baptiste Lamarck", "“A Distribuição Geográfica dos Animais”, por Alfred Wallace", "“Experimentos em Hibridização de Plantas”, por Gregor Mendel"],
    r: 1, exp: "‘A Origem das Espécies’, de Charles Darwin, foi publicado em 1859 (160 anos antes de 2019)." },

  { id: "2019s2-46", ano: 2019, n: 46, tema: "Biologia", d: 3,
    ctx: "Os mangabeis-das-terras-altas (Rungwecebus kipunji) são primatas com longa pelagem e cerca de 13 kg de massa, que aparentemente vivem apenas em um parque nacional da Tanzânia.",
    q: "Analisando a zoologia dos vertebrados sob o paradigma da Sistemática Filogenética, é correto afirmar que os Rungwecebus kipunji compartilham um ancestral mais recente com",
    a: ["as salamandras europeias que com os jabutis americanos.", "os esquilos americanos que com os humanos australianos.", "as serpentes americanas que com as sardinhas asiáticas.", "os tubarões africanos que com os cangurus australianos.", "os pinguins americanos que com os lagartos africanos."],
    r: 2, exp: "Os primatas são mamíferos e, portanto, amniotas, como as serpentes. Dividem com elas um ancestral mais recente do que com as sardinhas (peixes). Nas demais, o primeiro grupo citado é parente mais distante (salamandras, esquilos e tubarões) ou os dois são equidistantes (pinguins e lagartos)." },

  { id: "2019s2-47", ano: 2019, n: 47, tema: "Biologia", d: 3, img: ["2019s2-47.png"],
    ctx: "Leveduras (Saccharomyces cerevisiae) liberam gás carbônico ao metabolizar glicídios. Em três erlenmeyers idênticos, em temperatura ambiente, foram colocadas massas iguais de leveduras e água previamente fervida, pobre em gás oxigênio. No frasco II, a água foi agitada para ficar enriquecida com oxigênio. Nos frascos II e III foram acrescentadas doses idênticas de glicose. Três balões iguais foram fixados, um em cada frasco. Resultado após dez minutos: balão pequeno em I, médio em II e grande em III.",
    q: "Assinale a alternativa que apresenta uma explicação coerente para esses resultados.",
    a: ["No frasco II ocorreu fermentação e no III, respiração aeróbia, uma vez que a respiração aeróbia produz mais álcool que a fermentação, liberando mais gás.", "No frasco III ocorreu fermentação e no I, respiração aeróbia, uma vez que a respiração aeróbia consome mais energia que a fermentação, liberando mais gás.", "No frasco II ocorreu respiração aeróbia e no III, fermentação, uma vez que a fermentação consome mais glicose que a respiração aeróbia, liberando mais gás.", "Nos frascos I e II ocorreu respiração aeróbia em taxas diferentes, uma vez que a respiração aeróbia consome mais glicose que a fermentação, absorvendo mais gás.", "No frasco I ocorreu respiração aeróbia e no II, fermentação, uma vez que a respiração aeróbia consome mais álcool que a fermentação, absorvendo mais gás."],
    r: 2, exp: "Frasco I não tem glicose: quase não há gás. O frasco II tem oxigênio: respiração aeróbia. O III, sem oxigênio: fermentação. A fermentação rende pouca energia por glicose, então consome mais glicose e libera mais CO₂ (balão maior)." },

  { id: "2019s2-48", ano: 2019, n: 48, tema: "Biologia", d: 2,
    ctx: "“O desenvolvimento da moral em jovens está correlacionado com o comportamento parental, mas o papel das influências genéticas nessa relação ainda não havia sido examinado. Estudando 720 jovens […] (que incluíam irmãos gêmeos e não gêmeos) […] Os resultados indicam que, em convívios mais conflituosos, o caráter virtuoso dos jovens se deve principalmente a influências hereditárias. Em contraste, em convívios mais harmoniosos, o senso de responsabilidade dos jovens se deve principalmente a influências ambientais. Essas descobertas ressaltam a influência hereditária na formação da moral […]”",
    q: "Considerando as informações apresentadas no texto, assinale a alternativa correta.",
    a: ["O genótipo é mais importante que o fenótipo na determinação das propriedades pessoais.", "A formação moral nos jovens é uma manifestação fenotípica que tem influência genotípica.", "Nos jovens, o comportamento é determinado pelo genótipo; já nos pais deles, é pelo fenótipo.", "Os conflitos familiares tendem a determinar genótipos, alterando o fenótipo das próximas gerações.", "O meio ambiente contribui igualmente para o fenótipo e para o genótipo de uma pessoa, quanto às condutas."],
    r: 1, exp: "Fenótipo = genótipo + ambiente. A moral é uma característica fenotípica, com influência hereditária (genótipo) e ambiental." },

  { id: "2019s2-49", ano: 2019, n: 49, tema: "Biologia", d: 2,
    ctx: "Para correr sobre a água, os seres humanos teriam que exercer uma frequência de passos cerca de 30 vezes maior que a dos recordistas dos 100 metros rasos. Já alguns lagartos (Basiliscus basiliscus), percevejos (Gerridae) e aranhas (Lycosoidea) conseguem isso. As façanhas desses animais dependem de uma propriedade da água que também faz as gotas em superfícies horizontais impermeáveis ficarem com aspecto hemisférico, sem se esparramarem facilmente.",
    q: "Essa propriedade é a",
    a: ["capilaridade, diretamente proporcional à razão entre as forças internas e externas de qualquer líquido.", "adesão, derivada da neutralidade resultante das cargas atômicas em moléculas de fluidos como a água e o isopropanol.", "tensão superficial, decorrente da polaridade molecular e percebida também em alguns outros fluidos, como o ácido acético.", "solubilidade, resultante de viscosidade relativamente baixa e percebida até mesmo em fluidos tão viscosos quanto o vidro.", "coesão, provocada pela equivalência de eletronegatividade entre átomos que compõem moléculas como as da água e dos ácidos graxos saturados."],
    r: 2, exp: "A tensão superficial vem da polaridade e das ligações de hidrogênio, que unem as moléculas da superfície e formam uma ‘película’ elástica." },

  // ---------- PORTUGUÊS ----------
  { id: "2019s2-50", ano: 2019, n: 50, tema: "Língua Portuguesa", d: 2, t: "editor",
    q: "O texto simula comicamente a correspondência entre um editor e um renomado autor antes da publicação de sua obra. Tendo em vista as informações no texto, pode-se concluir que ele se dirige a",
    a: ["Graciliano Ramos, autor de Vidas Secas, questionando o anonimato dos filhos de seus protagonistas, Sinha Vitória e Fabiano.", "Rachel de Queiroz e lhe sugere uma amenização no sofrimento vivenciado pelos protagonistas de O Quinze, Conceição e Vicente.", "José Américo de Almeida, em cujo livro A Bagaceira sugere alterações de enredo devido ao sofrimento excessivo de uma família de retirantes.", "Euclides da Cunha e sugere que sua obra, Os Sertões, tenha seu final modificado para amenizar o pessimismo responsável por “afastar as pessoas”.", "Guimarães Rosa e sugere que, em sua obra, Grande Sertão: Veredas, haja mais opções de nomes para os filhos dos protagonistas, Riobaldo e Diadorim."],
    r: 0, exp: "As pistas: a cadela Baleia, os filhos sem nome (‘o Menino Mais Novo’), a seca (‘aridez’, ‘crise hídrica’) e o sofrimento da família são de Vidas Secas." },

  { id: "2019s2-51", ano: 2019, n: 51, tema: "Língua Portuguesa", d: 3, t: "editor",
    ctx: "Observe os verbos destacados no período: “Julgamos, porém, que a narrativa GANHARIA se, ao final, OFERECESSE alguma possibilidade de redenção.”",
    q: "Alterando o verbo “ganharia” para “ganhará”, o final do período que mantém a norma padrão culta do português é:",
    a: ["se, ao final, oferece-se alguma possibilidade de redenção.", "se, ao final, ofereceria alguma possibilidade de redenção.", "se, ao final, oferecerá alguma possibilidade de redenção.", "se, ao final, oferecer alguma possibilidade de redenção.", "se, ao final, ofereça alguma possibilidade de redenção."],
    r: 3, exp: "Com o futuro do presente (‘ganhará’), a oração com ‘se’ usa o futuro do subjuntivo: ‘ganhará se oferecer’. Antes: futuro do pretérito + imperfeito do subjuntivo (‘ganharia se oferecesse’)." },

  { id: "2019s2-52", ano: 2019, n: 52, tema: "Língua Portuguesa", d: 3, img: ["2019s2-52.png"],
    ctx: "Tirinha em quatro quadros: “Para sua segurança, esta conversa será gravada.” / “Para seu conforto, esta conversa será poligrafada.” / “Para sua comodidade, esta conversa será radiografada.” / “Para seu governo, esta conversa será.” (o último quadro é escuro).",
    q: "Depreende-se, corretamente, da análise da tirinha que",
    a: ["o avanço tecnológico retratado, gradualmente, nos quadrinhos, acarreta a inexistência do diálogo entre as pessoas.", "cada quadrinho representa, simbolicamente, uma dificuldade associada à busca pela verdade, nunca alcançada pela personagem.", "a conversa estabelecida entre o narrador e a personagem tem por intuito representar o diálogo presente na base do sistema democrático.", "a personagem, apesar de enfrentar dificuldades imensuráveis para alcançar seu objetivo (o diálogo), acaba por o realizar.", "as ações às quais a personagem é submetida ocorrem, tendo como pretensa justificativa seu próprio bem-estar."],
    r: 4, exp: "Cada controle (gravar, polígrafo, raio X) vem com uma justificativa de ‘segurança’, ‘conforto’ ou ‘comodidade’, mas é vigilância. O último quadro revela a verdadeira finalidade." },

  { id: "2019s2-53", ano: 2019, n: 53, tema: "Língua Portuguesa", d: 3, t: "drummond19",
    q: "Os trechos apresentados, do poeta mineiro e modernista Carlos Drummond de Andrade, retratam",
    a: ["a mesma concepção de poesia como substância independentemente das palavras e, por isso, momentânea.", "concepções afins do fazer poético, pois a matéria da poesia está nas ruas, na vivência cotidiana do eu lírico com o mundo.", "momentos divergentes do trabalho poético: no primeiro poema, o poeta procura o tema a ser abordado; no segundo, ele faz a poesia.", "definições diferentes do fazer poético, pois o primeiro poema expressa a poesia que existe no momento; enquanto o segundo, o fazer poético racional.", "correntes estéticas diferentes, cuja influência é perceptível na visão idealizada da poesia, presente nos primeiros versos; e a nostálgica, no segundo poema."],
    r: 3, exp: "Em ‘Poesia’, a poesia está no momento, mesmo sem o verso pronto. Em ‘Procura da Poesia’, o poeta dá regras sobre como fazer poesia (o que evitar), uma visão mais racional e voltada ao ofício." },

  { id: "2019s2-54", ano: 2019, n: 54, tema: "Língua Portuguesa", d: 2, t: "drummond19",
    q: "Os pronomes demonstrativos “deste” e “esse”, destacados nos versos de Drummond, são usados, respectivamente, para",
    a: ["expressar o tempo presente, momento da poesia; e retomar o substantivo “corpo”.", "expressar o tempo passado, momento ali rememorado; e retomar o substantivo “corpo”.", "expressar a proximidade com o leitor do poema; e retomar a ação do verso anterior: “não faças poesia”.", "expressar o tempo passado; e retomar o substantivo “poesia”.", "expressar o tempo presente, momento da poesia; e apontar o adjetivo “excelente”."],
    r: 0, exp: "‘Deste momento’ = o momento presente (‘este’ indica o presente). ‘Esse corpo’ retoma ‘corpo’, citado no verso anterior." },

  { id: "2019s2-55", ano: 2019, n: 55, tema: "Língua Portuguesa", d: 1, t: "mulher",
    q: "De acordo com o texto, é correto afirmar que a participação feminina na construção da história",
    a: ["foi reconhecida há tempos, pois a luta de mulheres, mesmo no âmbito doméstico, sempre foi importante.", "foi problematizada há pouco tempo, diante da constatação da segregação das mulheres a papéis secundários.", "é naturalmente reconhecida por seu protagonismo, em parceria com os homens, nos processos histórico-sociais.", "foi, inicialmente, marcada pela participação de personagens femininas secundárias, como Carlota Joaquina e Princesa Isabel.", "é reconhecida desde a Revolução Francesa, movimento desencadeado pela atuação indireta de mulheres como Olympe de Gouges e Sophie de Condorcet."],
    r: 1, exp: "O texto diz que o apagamento da mulher era ‘natural’ e só ‘passou a ser percebido como problema há pouco tempo’." },

  { id: "2019s2-56", ano: 2019, n: 56, tema: "Língua Portuguesa", d: 3, t: "mulher",
    ctx: "Observe os termos destacados no primeiro parágrafo: “O apagamento da mulher na história e/ou a diminuição do seu papel eram tidos como ‘naturais’ e só, e passaram a ser percebidos como problema há pouco tempo. Uma situação da qual nos damos conta aos poucos, percebendo que, nos relatos oficiais, nós, as mulheres, sumimos e, QUANDO mencionadas, aparecemos apenas em papéis coadjuvantes – amantes, esposas, mães, ENFIM, como um detalhe pitoresco E de menor relevância da narrativa.”",
    q: "Os termos destacados (quando, enfim, e) expressam, respectivamente, o sentido de",
    a: ["adição, oposição e tempo.", "tempo, conclusão e adição.", "concessão, adição e tempo.", "tempo, concessão e conclusão.", "contradição, contradição e finalidade."],
    r: 1, exp: "‘Quando mencionadas’ = no momento em que são mencionadas (tempo). ‘Enfim’ conclui a enumeração. ‘E’ une dois termos (adição)." },

  // =====================================================================
  // PROVA 2020 (IBFC, Portaria Univesp PR nº 115/2019) — 7 questões por disciplina
  // =====================================================================

  // ---------- MATEMÁTICA ----------
  { id: "2020-01", ano: 2020, n: 1, tema: "Matemática", d: 1,
    ctx: "Os discípulos de Pitágoras denominavam de “números triangulares” a sequência de números obtida pela somatória dos “n” primeiros números naturais não nulos (n ≥ 2), ou seja, N = 1 + 2 + 3 + … + n. Assim, são números triangulares 3, 6, 10, 15, … Eles também denominavam de “números oblongos” a sequência dos números que correspondem ao dobro dos números triangulares.",
    q: "Assinale a alternativa correta que indica a fórmula para o cálculo do n-ésimo número oblongo.",
    a: ["n · (n − 1)", "2n · (n + 1)", "n² · (n − 1)", "n² · (n + 1)", "n · (n + 1)"],
    r: 4, exp: "A soma 1 + 2 + … + n = n(n + 1)/2. O oblongo é o dobro: n(n + 1)." },

  { id: "2020-02", ano: 2020, n: 2, tema: "Matemática", d: 2,
    ctx: "A notação no sistema de base 10 é uma convenção: o número 2367 equivale a 2 · 10³ + 3 · 10² + 6 · 10¹ + 7 · 10⁰.",
    q: "Caso fosse utilizado um sistema de base 6, o número 2543 neste sistema equivaleria, no sistema decimal, a:",
    a: ["639", "442", "417", "319", "213"],
    r: 0, exp: "2543 na base 6 = 2 · 6³ + 5 · 6² + 4 · 6 + 3 = 432 + 180 + 24 + 3 = 639." },

  { id: "2020-03", ano: 2020, n: 3, tema: "Matemática", d: 3, img: ["2020-03.png"],
    ctx: "Francisco fez um financiamento para comprar um veículo em 84 parcelas mensais. Já tendo pagado parte das parcelas, contraiu um empréstimo, que será pago em 36 parcelas mensais; a primeira será paga no mesmo mês em que ele pagará a 16ª parcela do financiamento. O gráfico ilustra a evolução dos pagamentos (linha cheia = financiamento; tracejada = empréstimo). Ele paga todas as parcelas sem atraso.",
    q: "Em que momento o financiamento e o empréstimo estarão com o mesmo percentual de parcelas pagas?",
    a: ["Entre os meses 22 e 23", "Entre os meses 24 e 25", "Entre os meses 26 e 27", "Entre os meses 34 e 35", "Entre os meses 38 e 39"],
    r: 2, exp: "No mês t, o financiamento tem t/84 pago. O empréstimo, com a 1ª parcela no mês 16, tem (t − 15)/36. Igualando: t/84 = (t − 15)/36 → 36t = 84t − 1 260 → t = 26,25. Portanto, entre os meses 26 e 27." },

  { id: "2020-04", ano: 2020, n: 4, tema: "Matemática", d: 3,
    ctx: "Interpolação é o método que constrói uma função a partir de pontos conhecidos, de modo que esses pontos estejam contidos na nova função. Quando a função resultante é um polinômio, chama-se interpolação polinomial. Considere três pontos (x, sen x), com x = 0, π/2 e π (em radianos).",
    q: "Quanto à função polinomial resultante deste processo, assinale a alternativa correta.",
    a: ["f(x) = (4/π) · (−x²/π − 4x)", "f(x) = (4/π) · (−x²/π + 4x)", "f(x) = (4/π) · (−x²/π − x)", "f(x) = (4/π) · (−x²/π + x)", "f(x) = (4/π) · (x²/π + x)"],
    r: 3, exp: "Os pontos são (0, 0), (π/2, 1) e (π, 0). Com f(x) = ax² + bx: aπ² + bπ = 0 → b = −aπ; e aπ²/4 + bπ/2 = 1 → −aπ²/4 = 1 → a = −4/π² e b = 4/π. Logo f(x) = (4/π)(−x²/π + x)." },

  { id: "2020-05", ano: 2020, n: 5, tema: "Matemática", d: 2,
    ctx: "Em um jogo de computador, um jogador tem desbloqueados 9 atacantes, 7 defensores e 5 curandeiros, e precisa montar duas equipes, com cinco personagens cada. Missão 1: cinco personagens quaisquer. Missão 2: dois atacantes, dois defensores e um curandeiro. A ordem dos personagens em uma equipe não importa, e um mesmo personagem pode fazer parte das duas equipes.",
    q: "Quantas formas diferentes ele pode montar as equipes para cada uma das duas missões?",
    a: ["Missão 1: 20.349 formas; Missão 2: 3.360 formas", "Missão 1: 20.349 formas; Missão 2: 3.780 formas", "Missão 1: 15.504 formas; Missão 2: 3.360 formas", "Missão 1: 15.504 formas; Missão 2: 3.780 formas", "Missão 1: 26.334 formas; Missão 2: 3.036 formas"],
    r: 1, exp: "Missão 1: C(21, 5) = 20 349. Missão 2: C(9, 2) · C(7, 2) · C(5, 1) = 36 · 21 · 5 = 3 780." },

  { id: "2020-06", ano: 2020, n: 6, tema: "Matemática", d: 3, img: ["2020-06.png"],
    ctx: "Maria desenhou um triângulo retângulo isósceles; um quadrado dentro deste triângulo, com um dos vértices tangenciando a hipotenusa; e um círculo dentro deste quadrado. O diâmetro do círculo é metade do lado do quadrado.",
    q: "Qual é a relação entre a área do triângulo e a área do círculo desenhados por Maria?",
    a: ["A área do triângulo é 16/π vezes a área do círculo", "A área do triângulo é 32/π vezes a área do círculo", "A área do triângulo é 24/π vezes a área do círculo", "A área do triângulo é 20/π vezes a área do círculo", "A área do triângulo é 18/π vezes a área do círculo"],
    r: 1, exp: "Seja s o lado do quadrado. O quadrado ocupa o canto do ângulo reto, então cada cateto vale 2s e a área do triângulo é (2s · 2s)/2 = 2s². O diâmetro do círculo é s/2, raio s/4 e área π s²/16. Razão = 2s² / (π s²/16) = 32/π." },

  { id: "2020-07", ano: 2020, n: 7, tema: "Matemática", d: 2, img: ["2020-07.png"],
    ctx: "Em uma eleição para presidente de uma cooperativa com dois candidatos (A e B), 120 membros votaram; o resultado é mostrado no gráfico de setores. 12 pessoas votaram nulo, e a “fatia” do gráfico dos votos do candidato B é 3,5 vezes menor que a “fatia” do candidato A.",
    q: "Quantos membros da cooperativa votaram no candidato A?",
    a: ["72 pessoas", "80 pessoas", "84 pessoas", "90 pessoas", "96 pessoas"],
    r: 2, exp: "Votos em A e B: 120 − 12 = 108. Como A = 3,5 · B: 4,5 · B = 108 → B = 24 e A = 84." },

  // ---------- LÍNGUA PORTUGUESA E LITERATURA ----------
  { id: "2020-08", ano: 2020, n: 8, tema: "Língua Portuguesa", d: 2, t: "rubiao",
    q: "A índole de Rubião pode estar mais ligada à de Freitas. Quanto ao fato que justificaria essa possibilidade, assinale a alternativa correta.",
    a: ["Ambos possuem uma história de enriquecimento ilícito ligado ao aproveitamento de certos relacionamentos políticos da época.", "Os dois desprezavam o convívio social desinteressado, construindo apenas relações pessoais que trouxessem vantagens financeiras.", "Tanto Rubião como Freitas calculavam as vantagens, de ordem social ou financeira, que as relações poderiam oferecer-lhes.", "O bom gosto por charutos, comidas e bebidas, enfim, pela boa vida, aproximava Rubião a Freitas mais do que a Carlos Maria.", "A alegria dos dois homens, que, mesmo em momentos de crise financeira, demonstravam atitudes alegres e desembaraçadas, principalmente com as mulheres."],
    r: 2, exp: "Rubião ‘torceu o nariz’ ao saber que Freitas era um ‘náufrago’ (sem consideração pública) e só o aceitou depois que ele se mostrou agradável. Freitas, por sua vez, ‘elogiava tudo’ e saía com os bolsos cheios de charutos. Os dois calculam o que ganham." },

  { id: "2020-09", ano: 2020, n: 9, tema: "Língua Portuguesa", d: 3, t: "rubiao",
    q: "Considere as características centrais do Realismo. É possível afirmar que o trecho se aproxima da estética realista. Nesse sentido, assinale a alternativa correta.",
    a: ["Valoriza a frugalidade do almoço dominical entre amigos e a celebração da vida com vinhos charutos e boas comidas.", "Ressalta análise cientificista da sociedade, utilizando a ficção com a finalidade de comprovar a tese do determinismo social presente na história das personagens.", "Enfoca o hedonismo das personagens, que, ao se reunirem em um farto banquete, alienadas dos problemas sociais e cotidianos, tornam-se exemplo dos privilégios sociais da elite brasileira.", "Utiliza com sutileza e requinte estilístico o texto literário para desnudar a psicologia da burguesia, que, entre outros pontos, equipara a condição emocional da personagem a um valor monetário.", "Evidencia a preocupação central com a crítica positivista e evolucionista, em que a luta de classes assume papel decisivo, de acordo com algumas teorias sociológicas e cientificistas da época."],
    r: 3, exp: "Machado usa ironia fina para mostrar a psicologia burguesa. Exemplo: Freitas é descrito como ‘alegre como um homem que tivesse cinquenta contos de renda’, ou seja, a alegria é medida em dinheiro." },

  { id: "2020-10", ano: 2020, n: 10, tema: "Língua Portuguesa", d: 2, t: "rubiao",
    q: "Assinale a alternativa que não apresenta nenhuma expressão utilizada no sentido figurado.",
    a: ["“Tinha-lhe sido apresentado em certo armazém da Rua Municipal”.", "“Freitas elogiava tudo, saudava cada prato e cada vinho”.", "“que roía as primeiras aparas dos bens da mãe”.", "“Rubião torceu o nariz”.", "“era naturalmente algum náufrago”."],
    r: 0, exp: "(B) ‘saudava’ pratos e vinhos (como se fossem pessoas); (C) ‘roía as aparas dos bens’; (D) ‘torceu o nariz’ (demonstrou desagrado); (E) ‘náufrago’ (alguém arruinado). Só a (A) está no sentido literal." },

  { id: "2020-11", ano: 2020, n: 11, tema: "Língua Portuguesa", d: 3, t: "rubiao",
    ctx: "Considere os dois trechos: (1) “Tinha-lhe sido apresentado em certo armazém” e (2) “Contaram-lhe ali a história do homem”.",
    q: "A respeito desses dois trechos, assinale a alternativa correta.",
    a: ["Os verbos de ambos os trechos estão na voz ativa.", "O sujeito do verbo “ter” é oculto, enquanto que o sujeito do verbo “contar” é indeterminado.", "A partícula “lhe” no trecho “Tinha-lhe” funciona como objeto indireto, enquanto que, no trecho “contaram-lhe”, essa partícula tem função sintática de adjunto adnominal.", "A palavra “certo” define o substantivo “armazém”, atribuindo-lhe o sentido de certeza.", "A expressão “do homem”, ao utilizar o artigo definido contraído com a preposição “de”, valoriza o substantivo “homem”, que faz referência, no caso, ao capitalista Rubião."],
    r: 1, exp: "‘Tinha sido apresentado’: o sujeito (Freitas) é oculto. ‘Contaram-lhe’: ninguém é identificado, então o sujeito é indeterminado (3ª pessoa do plural)." },

  { id: "2020-12", ano: 2020, n: 12, tema: "Língua Portuguesa", d: 2,
    ctx: "Erro de português (Oswald de Andrade)\n\nQuando o português chegou\nDebaixo de uma bruta chuva\nVestiu o índio\nQue pena!\nFosse uma manhã de sol\nO índio tinha despido\nO português.",
    q: "Leia o poema e assinale a alternativa correta.",
    a: ["O título do poema “Erro de Português” faz alusão tanto a questões linguísticas como socioculturais, preocupações típicas da segunda fase modernista, também conhecida como regionalista, de que esse poema é um importante representante.", "O texto é um exemplo modernista do “poema piada”, caracterizado pela brevidade formal e pelo conteúdo crítico mordaz, cuja intenção, por meio do humor anedótico, era dissociar a literatura das questões sociais, aproximando-a do entretenimento.", "O poema é um exemplo da fase heroica do Modernismo brasileiro, uma estética ligada à construção identitária nacional e bastante apegada aos procedimentos poéticos do Classicismo.", "A imagem do índio despindo o português liga-se ao canibalismo, um tema recorrente na literatura de informação, que, durante o século XVI, foi muito praticada no Brasil.", "Há ironia na forma como o eu-lírico atribui a colonização do português a uma questão circunstancial atmosférica, sugerindo que esse fator natural foi determinante para a construção da história brasileira."],
    r: 4, exp: "O poema ironiza a colonização: se o dia fosse de sol, o índio é que teria ‘despido’ o português. Ele é da fase heroica (1922–1930) e de ‘poema-piada’ crítico, mas não para separar a literatura da realidade social." },

  { id: "2020-13", ano: 2020, n: 13, tema: "Língua Portuguesa", d: 3, img: ["2020-13.png"],
    ctx: "Tirinha de Laerte. 1º quadro: “Preciso reorientar minha vida. Vocês têm filosofia barata?” 2º quadro (o cliente lendo): “‘Minha alma é uma casinha, meus olhos são a janela, se quiser abrir a porta, seja gentil com a tramela’” 3º quadro: “Adoro filosofia que rima.” (*tramela: espécie de tranca de portas.)",
    q: "De acordo com a tirinha, assinale a alternativa correta.",
    a: ["A personagem da tira apresenta uma crise existencial característica do sujeito contemporâneo, que, entre outros fatores, é motivada pela crise financeira, o que pode ser comprovado linguisticamente pelo uso do adjetivo “barata”, empregado no primeiro quadrinho.", "A tirinha ressalta o poder da leitura em abordar de forma profunda e meditativa questões que transcendem a banalidade e superficialidade dos assuntos cotidianos, ajudando, assim, os leitores a operarem significativas transformações em suas vidas.", "As aspas utilizadas no segundo quadrinho são usadas para indicar a citação de um trecho do texto lido pela personagem, que, formalmente, se aproxima do texto poético devido à métrica, já que os versos são escritos em redondilhas, além da utilização da rima já referida na tira.", "As palavras “casinha”, “janela”, “porta” e “tramela” pertencem ao mesmo campo semântico, estabelecendo relações de sinonímia e hiponímia entre si, o que aproxima o trecho do tipo textual poético.", "No segundo quadrinho da tira, a satisfação do cliente com o texto lido constitui uma crítica ao procedimento poético, que, ao ser aplicado ao texto filosófico, diminui-lhe o alcance crítico, ao subordinar a metodologia científica da filosofia à estética da poesia."],
    r: 2, exp: "As aspas marcam a citação do livro. Os versos são de sete sílabas (redondilha maior) e há rima (‘janela’/‘tramela’), por isso o texto se aproxima de um poema. O humor está em chamar de ‘filosofia’ o que parece poesia." },

  { id: "2020-14", ano: 2020, n: 14, tema: "Língua Portuguesa", d: 2, t: "brincar",
    q: "De acordo com o texto e com a norma padrão da Língua Portuguesa, assinale a alternativa correta.",
    a: ["A função do texto é informar às famílias contemporâneas a respeito dos males que a tecnologia pode causar no desenvolvimento cognitivo, afetivo e emocional das crianças.", "Por ser predominantemente injuntivo, o texto deixa clara a sua intenção de aconselhar e instruir pais e educadores de quais são os elementos essenciais e necessários para que estes passem um tempo de qualidade com as crianças.", "O que o texto defende como “tempo de qualidade” é uma presença atenta e amorosa que preza por intermediar a relação da criança com o mundo ludicamente sempre que o adulto quiser.", "De acordo com o texto é possível depreender que existe um tempo da criança que é distinto do tempo do adulto e que estes tempos distintos só poderão se equalizar por meio de brincadeiras até que a criança amadureça.", "Ao informar o leitor sobre a existência de uma mobilização mundial a respeito da importância do brincar, o texto também indica o decréscimo da qualidade do tempo utilizado pelas famílias para brincar com os filhos."],
    r: 4, exp: "O texto informa sobre a mobilização e, ao dizer que ‘cada vez mais vemos famílias que… passam menos tempo ao lado deles’, indica a queda da qualidade do tempo com os filhos. Em (C) a intermediação ocorre ‘quando solicitada’, e não ‘quando o adulto quiser’." },

  // ---------- LÍNGUA INGLESA ----------
  { id: "2020-15", ano: 2020, n: 15, tema: "Língua Inglesa", d: 2, t: "nodiff",
    q: "De acordo com o texto, assinale a alternativa incorreta na oposição de adjetivos.",
    a: ["sultan – mite", "small – big", "rich – poor", "same – difference", "right – wrong"],
    r: 3, exp: "‘Same’ (igual) é adjetivo, mas ‘difference’ (diferença) é substantivo; o par correto seria ‘same – different’. As demais são pares de opostos usados no poema (‘small/big’, ‘rich/poor’) ou do verso final (‘right/wrong’)." },

  { id: "2020-16", ano: 2020, n: 16, tema: "Língua Inglesa", d: 2, t: "nodiff",
    q: "De acordo com o texto, assinale a alternativa correta.",
    a: ["As diferenças entre as pessoas são acentuadas com a escuridão", "A possível solução para acabar com as desigualdades é pedir a ajuda divina para que não haja luz", "Sem luz pode haver igualdade social", "As desigualdades sociais sempre existirão, de dia ou de noite", "As pessoas não ficam do mesmo tamanho"],
    r: 1, exp: "Gabarito oficial: B. No último verso, o eu lírico sugere que a solução é Deus ‘desligar a luz’ para todos ficarem iguais. A letra (C) também fala de luz, mas o gabarito oficial é a (B)." },

  { id: "2020-17", ano: 2020, n: 17, tema: "Língua Inglesa", d: 2, t: "poverty",
    q: "Sobre a ideia principal do texto, assinale a alternativa correta.",
    a: ["to increase public awareness of the different social problems in the whole world", "to focus on donations for the campaign against poverty in the world", "to promote Bono as a rock-star", "to put pressures on political leaders of the world’s richest countries into doing much more to fight poverty and disease, especially in Africa", "to raise money for charity"],
    r: 3, exp: "O texto defende que a pobreza e a doença na África são uma crise global e que os líderes dos países ricos precisam fazer muito mais (‘persuade world leaders to invest more’)." },

  { id: "2020-18", ano: 2020, n: 18, tema: "Língua Inglesa", d: 2, t: "poverty",
    ctx: "Frase: “Africa is not the front line in the war against terror, but it soon ‘could’ be.”",
    q: "Assinale a alternativa correta para o verbo em destaque (could).",
    a: ["capacity", "permission", "possibility", "prohibition", "advice"],
    r: 2, exp: "‘Could’ aqui indica possibilidade: a África poderia vir a ser a linha de frente." },

  { id: "2020-19", ano: 2020, n: 19, tema: "Língua Inglesa", d: 2, t: "poverty",
    ctx: "Frase: “The first generation that ‘can’ end a corrupt relationship between the powerful and the weaker parts of the world…”",
    q: "Assinale a alternativa correta para o verbo em destaque (can).",
    a: ["capacity", "probability", "permission", "obligation", "advice"],
    r: 0, exp: "‘Can’ expressa capacidade: a primeira geração com poder (capaz) de acabar com essa relação." },

  { id: "2020-20", ano: 2020, n: 20, tema: "Língua Inglesa", d: 2,
    ctx: "Some artists were imprisoned during the dictatorship in Brazil. _____, some of them were exiled.",
    q: "Assinale a alternativa que preencha corretamente a lacuna.",
    a: ["Despite", "So", "As a result", "However", "Afterwards"],
    r: 4, exp: "Gabarito oficial: ‘Afterwards’ (depois). ‘Despite’ exigiria um substantivo; ‘so’ e ‘as a result’ indicariam consequência direta; ‘however’ indica contraste." },

  { id: "2020-21", ano: 2020, n: 21, tema: "Língua Inglesa", d: 1,
    ctx: "My sister is married _____ she lives in London.",
    q: "Assinale a alternativa que preencha corretamente a lacuna.",
    a: ["or", "and", "for", "because", "still"],
    r: 1, exp: "‘And’ soma duas informações (‘é casada e mora em Londres’). ‘Or’ não faz sentido, e ‘because’ e ‘for’ indicariam causa." },

  // ---------- HISTÓRIA ----------
  { id: "2020-22", ano: 2020, n: 22, tema: "História", d: 2,
    ctx: "I. A Grécia era chamada pelos antigos gregos de Hélade, que queria dizer “terra dos helenos”, referência a um lendário personagem, Heleno, cujos filhos teriam povoado a região.\nII. O período compreendido entre a ascensão de Alexandre ao poder, em 336 a.C., e o domínio da Grécia pelos romanos, em 146 a.C., é comumente denominado Período Helenístico (séculos IV a II a.C.).\nIII. Educado pelo filósofo grego Aristóteles (384-322 a.C.), Alexandre admirava a cultura grega e queria vê-la difundida pelo mundo.\nIV. Conforme expandia seu império, Alexandre criava centros de irradiação cultural que promoviam a divulgação do saber científico e das formas artísticas e literárias da Grécia.",
    q: "A respeito da Grécia Antiga, assinale a alternativa correta:",
    a: ["Apenas as afirmativas II e III estão corretas", "Apenas as afirmativas I e III estão corretas", "As afirmativas I, II, III e IV estão corretas", "Apenas as afirmativas I, II e IV estão corretas", "Apenas as afirmativas III e IV estão corretas"],
    r: 2 },

  { id: "2020-23", ano: 2020, n: 23, tema: "História", d: 2,
    ctx: "A Grécia é um país mediterrâneo localizado na península Balcânica, formado por duas regiões: a continental e a insular, composta de mais de 2 mil ilhas espalhadas pelos mares Egeu, Mediterrâneo e Jônico.",
    q: "A respeito da Grécia Antiga, assinale a alternativa incorreta.",
    a: ["A civilização grega tem suas origens na miscigenação étnica e cultural entre diferentes povos que habitaram esse território, como os indo-europeus", "Os aqueus, eólios, jônios, dórios e os arianos eram povos de origem indo-europeia que, a partir de 3000 a.C., se estabeleceram na península Balcânica", "Pouco se sabe sobre as origens da civilização que se desenvolveu em torno da ilha de Creta (denominada cretense ou minoica), mas o fato é que, por volta de 2500 a.C., já podiam ser encontradas em Creta importantes cidades, com residências de pedra e tijolos, e artesãos hábeis no fabrico de joias e de outros artefatos de metal", "Durante os primeiros séculos de sua consolidação, a sociedade cretense dividiu-se em vários principados independentes. Por volta de 1450 a.C., os príncipes locais passaram a se submeter ao controle do rei de Cnossos", "A localização da ilha de Creta não facilitou em nada a atividade mercantil, com isso, os cretenses permaneceram no comércio local"],
    r: 4, exp: "Creta fica no centro do Mediterrâneo oriental, o que favoreceu o comércio marítimo cretense, ao contrário do que afirma a letra (E)." },

  { id: "2020-24", ano: 2020, n: 24, tema: "História", d: 2,
    ctx: "Construído com concreto e areia, o Coliseu é o maior anfiteatro já construído e está situado a leste do Fórum Romano. Julgue (V ou F) as afirmativas, de cima para baixo:\n( ) Com a morte de Nero, sobreveio um ano de guerras civis, após o qual assumiu Vespasiano, general da família dos Flávios. Teve início, então, o período de maior esplendor do Império Romano.\n( ) Com Vespasiano, novas cidades surgiram e o modo de vida romano passou a ser adotado nas mais distantes províncias.\n( ) O Império em sua fase de esplendor enfrentaria, sobretudo, problemas de outras naturezas, como epidemias, incêndios e até a destruição da cidade de Pompeia em 79 d.C.\n( ) As lutas de gladiadores, iniciadas durante a República, tornaram-se um evento extremamente popular. Diversos anfiteatros, como o Coliseu, em Roma, foram construídos em todo o Império para a realização desses espetáculos.",
    q: "Assinale a alternativa que apresenta a sequência correta de cima para baixo.",
    a: ["V, V, V, V", "F, V, F, V", "V, V, V, F", "F, F, V, V", "V, F, F, V"],
    r: 0 },

  { id: "2020-25", ano: 2020, n: 25, tema: "História", d: 1,
    ctx: "A cidade de Carcassonne, na França, é um exemplo de cidade medieval fortificada, com suas muralhas que a protegiam de invasões e ataques inimigos.",
    q: "A respeito da sociedade medieval da Europa ocidental, assinale a alternativa incorreta.",
    a: ["Na Europa medieval, as pessoas da nobreza encaravam o casamento como uma forma de fortalecer alianças entre famílias poderosas", "O liberalismo econômico foi a forma de organização política, social e econômica dominante na Europa ocidental durante a Idade Média", "O poder político estava fragmentado entre os senhores feudais e o rei", "Baseava-se em uma sociedade rigidamente hierarquizada, na qual os indivíduos encontravam-se subordinados uns aos outros por laços de dependência pessoal", "Tinha na agricultura, de uma maneira geral, sua principal atividade produtiva"],
    r: 1, exp: "O liberalismo econômico surgiu nos séculos XVII e XVIII. Na Idade Média dominava o feudalismo." },

  { id: "2020-26", ano: 2020, n: 26, tema: "História", d: 2,
    ctx: "Entre 1939 e 1945, países dos cinco continentes estiveram envolvidos em uma sangrenta guerra, que provocou a morte de 50 milhões de pessoas: a Segunda Guerra Mundial.",
    q: "A respeito do período entre guerras, assinale a alternativa incorreta.",
    a: ["Apesar dos esforços para promover a reconstrução da Europa, os efeitos da Primeira Guerra Mundial deixaram muitos europeus desiludidos com a sociedade democrática", "Nesse período, surgiram alguns movimentos que propunham a substituição do regime democrático por um Estado forte que organizasse a economia e restaurasse a ordem. Além de se opor à democracia, tais movimentos eram violentamente anticomunistas e antissocialistas", "Os regimes totalitários que surgem nesse período são, portanto, movimentos libertários, pois valorizavam mais o poder do povo do que a escolha de um líder", "A característica desse período é a concentração do poder nas mãos de um pequeno grupo de pessoas, organizadas em um partido único", "Cresce, portanto, a repressão sem limites, que estabelecia um rígido controle sobre a vida pública e privada das pessoas"],
    r: 2, exp: "Regimes totalitários (nazismo, fascismo) concentravam o poder em um líder e um partido único. Não eram libertários." },

  { id: "2020-27", ano: 2020, n: 27, tema: "História", d: 2,
    ctx: "Com o fim do Estado Novo, em 1945, o Brasil passou por um período democrático até 1964. O processo de industrialização assumiu grandes proporções, ainda mais com o Plano de Metas de Juscelino Kubitschek (1956-1961). Julgue (V ou F), de cima para baixo:\n( ) Com o Plano de Metas, várias grandes empresas estrangeiras, chamadas de multinacionais, estabeleceram-se no Brasil.\n( ) Foi a partir deste plano que a modernização ganhou um ritmo ainda mais rápido do que no período anterior.\n( ) Em poucos anos, foram construídas usinas hidrelétricas, como a de Furnas e a de Três Marias, e a siderúrgica Usiminas, todas em Minas Gerais.\n( ) Mas, nesse mesmo período, o PIB caiu a uma taxa média de 10% ao ano. Dessa forma, durante o governo JK, o país registrou péssimos índices na produção industrial.",
    q: "Assinale a alternativa que apresenta a sequência correta de cima para baixo.",
    a: ["F, F, F, F", "V, V, F, F", "V, V, V, V", "F, V, F, V", "V, V, V, F"],
    r: 4, exp: "A última é falsa: no governo JK o PIB e a produção industrial cresceram muito (‘50 anos em 5’)." },

  { id: "2020-28", ano: 2020, n: 28, tema: "História", d: 3,
    ctx: "Saudosa Maloca (Adoniran Barbosa, 1951): “Si o senhor não está lembrado / Da licença de contá / Que aqui onde agora está / Esse edifício alto / Era uma casa véia, um palacete assobradado / Foi aqui, seu moço, que eu, Mato Grosso e o Joca / Construímos nossa maloca […] Veio os homens com as ferramentas, o dono mandou derrubá […] Os homes tá ca razão, nós arranja outro lugar.” A música faz referência a um processo vivido em muitas cidades brasileiras entre 1930 e 1960.",
    q: "A respeito desse período, assinale a alternativa incorreta.",
    a: ["Nesse período, a produção de eletrodomésticos, como geladeiras, máquinas de lavar roupa, liquidificadores, batedeiras, fogões a gás etc., cresceu muito no país", "A urbanização e a modernização modificaram a paisagem das grandes cidades brasileiras", "Os bondes elétricos cederam lugar aos ônibus, as quitandas foram substituídas pelos supermercados, e muitas casas antigas foram derrubadas para que, no lugar, fossem erguidos prédios de apartamentos", "São Paulo foi o centro urbano que mais retrocedeu em crescimento nesse período, a crise do café acabou por espantar um número de migrantes vindos, principalmente, do Nordeste e de Minas Gerais", "A expansão industrial fez com que muitas pessoas deixassem o campo e migrassem para as grandes cidades em busca de emprego, pois era ali que estavam instaladas as fábricas"],
    r: 3, exp: "São Paulo foi o centro urbano que mais cresceu no período, atraindo migrantes do Nordeste e de Minas." },

  // ---------- GEOGRAFIA ----------
  { id: "2020-29", ano: 2020, n: 29, tema: "Geografia", d: 1,
    ctx: "A mundialização da economia capitalista gerou a segmentação do espaço econômico mundial. Um exemplo de bloco econômico é o _____, criado a partir do Tratado de Assunção e assinado em 1991 entre Paraguai, Argentina, Uruguai e Brasil. O tratado estabeleceu a livre circulação de bens, serviços e fatores produtivos entre os países, através da eliminação das barreiras tarifárias e não tarifárias, e do estabelecimento de uma tarifa comum em relação aos países fora do bloco.",
    q: "Assinale a alternativa que preencha corretamente a lacuna.",
    a: ["Mercado Comum do Sul (MERCOSUL)", "Mercado Comum da América Latina (MERCOAL)", "Acordo de Livre Comércio da América do Norte (NAFTA)", "Organização das Nações Unidas (ONU)", "Grupo dos 8 (G-8)"],
    r: 0 },

  { id: "2020-30", ano: 2020, n: 30, tema: "Geografia", d: 1,
    ctx: "A ampliação das relações capitalistas no campo, desestruturando as antigas relações tradicionais de trabalho (a parceria, o arrendamento etc.), a mecanização da agricultura, a substituição da lavoura por pastos e a grande especulação imobiliária foram causas que estimularam a fuga da população do campo para as cidades. Ao mesmo tempo em que o campo expulsava, a cidade atraía (Scarlato, 2011).",
    q: "Qual é o nome do fenômeno caracterizado no enunciado?",
    a: ["Migração pendular", "Migração sazonal", "Diáspora", "Êxodo urbano", "Êxodo rural"],
    r: 4 },

  { id: "2020-31", ano: 2020, n: 31, tema: "Geografia", d: 2,
    ctx: "Um fato marcante da urbanização brasileira nos últimos anos é o contínuo crescimento das regiões metropolitanas. Julgue (V ou F) as afirmativas sobre as características de uma metrópole, de cima para baixo:\n( ) Um crescimento expande a cidade, prolongando-a para fora de seu perímetro, e absorve aglomerados rurais e outras cidades.\n( ) Com a expansão e a integração, desaparecem os limites físicos entre os diferentes núcleos urbanos, fenômeno chamado de cidades gêmeas.\n( ) O termo região metropolitana pode ser usado quando há fluxo pendular de população entre as cidades vizinhas, que devem obrigatoriamente somar pelo menos 10 milhões de habitantes.",
    q: "Assinale a alternativa que apresenta a sequência correta de cima para baixo.",
    a: ["F, F, F", "V, F, F", "V, V, F", "F, V, V", "V, F, V"],
    r: 1, exp: "O fenômeno da junção de núcleos urbanos é a conurbação (e não ‘cidades gêmeas’). E não há exigência de 10 milhões de habitantes para uma região metropolitana." },

  { id: "2020-32", ano: 2020, n: 32, tema: "Geografia", d: 2,
    ctx: "No censo de 2010, a população brasileira era composta por 190.755.799 habitantes. Estima-se que, em 2019, tenha 210.147.125 habitantes (IBGE).",
    q: "Em relação às características da população brasileira atual, assinale a alternativa incorreta.",
    a: ["A população brasileira é predominantemente urbana", "A população feminina é maior que a masculina", "A taxa de fecundidade é de menos de 2 filhos por mulher", "A taxa de crescimento populacional é mais alta que em 1970", "A taxa de mortalidade infantil é menor que em 2000"],
    r: 3, exp: "A taxa de crescimento populacional vem caindo e hoje é bem menor que a de 1970 (cerca de 2,9% ao ano naquela década)." },

  { id: "2020-33", ano: 2020, n: 33, tema: "Geografia", d: 2,
    ctx: "A expansão geográfica das multinacionais é um dos fatos mais importantes da economia capitalista depois da Segunda Guerra Mundial. Em função da nova divisão internacional do trabalho, o processo de mundialização da indústria expande essa atividade para vários países do chamado terceiro mundo (Oliveira, 2011).\nI. A indústria multinacional pode ser implantada nos mercados dos países através de filiais, fusões, associações e franquias.\nII. A instalação de filiais em outros países ocorre, muitas vezes, incentivada por benefícios concedidos pelos governos, como a isenção de impostos.\nIII. O principal intuito das empresas multinacionais é cooperar com o crescimento dos países em desenvolvimento, levando tecnologia e gerando empregos.",
    q: "Assinale a alternativa correta.",
    a: ["Apenas a afirmativa I está correta", "Apenas as afirmativas II e III estão corretas", "Apenas as afirmativas I e II estão corretas", "Apenas a afirmativa III está correta", "As afirmativas I, II e III estão corretas"],
    r: 2, exp: "O principal objetivo das multinacionais é o lucro (mão de obra e matéria-prima baratas, mercados e incentivos fiscais), e não cooperar com o desenvolvimento." },

  { id: "2020-34", ano: 2020, n: 34, tema: "Geografia", d: 1,
    ctx: "“Os incêndios florestais no Brasil atingiram o seu pico desde pelo menos 2013, tendo aumentado 84% neste ano até 23 de agosto, comparado com o mesmo período do ano passado, de acordo com o INPE. Cientistas temem que a contínua destruição da Amazônia possa chegar a um ponto de não retorno.” (Exame, 2019)",
    q: "No que se refere às consequências do aumento das queimadas e dos desmatamentos na Amazônia, assinale a alternativa incorreta.",
    a: ["Redução da biodiversidade de espécies", "Exposição dos solos aos processos erosivos", "Potencialização do assoreamento de cursos d’água", "Redução das emissões de dióxido de carbono na atmosfera", "Alteração do microclima na região"],
    r: 3, exp: "As queimadas liberam CO₂ e agravam o efeito estufa, e não o reduzem." },

  { id: "2020-35", ano: 2020, n: 35, tema: "Geografia", d: 2, img: ["2020-35.png"],
    ctx: "Charge de Luiz Fernando Cazo (Clic Folha): a Branca de Neve, com a maçã na mão, diz “Estão tão bonitas, nem sei qual escolher”. A bruxa responde: “Pode escolher qualquer uma. Hoje em dia todas estão envenenadas!”",
    q: "Interprete a charge e assinale a alternativa correta que pode ser associada a ela.",
    a: ["A transição verde estimulou o crescimento da agricultura orgânica, visto que o uso de agrotóxicos tem sido cada vez mais intenso", "A revolução verde representou um conjunto de esforços para aumentar a produção agrícola, empregando insumos químicos, como os agrotóxicos e os fertilizantes", "A agricultura verde teve como intuito acabar com a fome no planeta, eliminando os insetos benéficos às plantações através de insumos naturais", "A tecnificação verde esteve relacionada com a mecanização das lavouras e o uso da agricultura extensiva, a fim de elevar a produção agrícola", "A modernização verde levou ao surgimento de alimentos transgênicos, que, embora sejam mais resistentes às pragas, são proibidos no Brasil"],
    r: 1, exp: "As frutas ‘envenenadas’ remetem ao uso de agrotóxicos. A Revolução Verde (a partir da década de 1950) aumentou a produtividade com sementes melhoradas, fertilizantes e agrotóxicos." },

  // ---------- QUÍMICA ----------
  { id: "2020-36", ano: 2020, n: 36, tema: "Química", d: 2,
    q: "Considere os três tipos de ligação química: iônica, covalente e metálica, e assinale a alternativa correta.",
    a: ["A ligação iônica ocorre entre dois átomos de ametais, onde há a transferência de elétrons de um átomo para outro, tornando a molécula polar", "A ligação covalente ocorre entre átomos de ametais através do compartilhamento de elétrons. Se um átomo é mais eletronegativo, este átomo atrai este(s) elétron(s) compartilhado(s) com uma força menor e assim, a molécula é polar", "A ligação metálica ocorre entre os átomos de metais. Estes átomos se unem através da transferência de elétrons de um átomo para o outro, chamados de cátion e ânion", "A ligação iônica ocorre entre átomos de metais e átomos de ametais. Os cátions apresentam carga positiva enquanto os ânions apresentam carga negativa. Na ligação iônica, o cátion doa seu(s) elétron(s) para o ânion, formando assim um composto iônico estável com carga elétrica neutra", "Na ligação covalente entre os átomos, o átomo de maior eletronegatividade doa seu elétron para o átomo com menor eletronegatividade, obtendo-se assim, uma molécula apolar"],
    r: 3, exp: "A ligação iônica é entre metal e ametal: o metal doa elétrons (vira cátion) e o ametal recebe (vira ânion). O composto fica neutro. As outras têm erros: iônica não é entre ametais; no covalente o mais eletronegativo atrai com mais força; a metálica não é transferência." },

  { id: "2020-37", ano: 2020, n: 37, tema: "Química", d: 2, img: ["2020-37.png"],
    ctx: "O estado físico da matéria está relacionado com as forças que atuam em seu interior e depende da pressão e da temperatura. A figura mostra um esquema das mudanças de fase de uma substância: I (sólido → líquido), II (líquido → gasoso), III (líquido → sólido), IV (gasoso → líquido), V (sólido → gasoso) e VI (gasoso → sólido).",
    q: "Considere os pontos I a VI mostrados na figura e assinale a alternativa correta em relação ao processo de mudança de fase da matéria.",
    a: ["O ponto indicado por I é chamado de fusão. Neste processo, há a adição de calor ao sistema e se a substância considerada for pura, a fusão do sólido ocorre à temperatura constante (ponto de fusão)", "A sublimação de uma substância pode ser representada pelo ponto VI. Este processo é dado pela passagem da substância da fase gasosa para a fase líquida e calor é retirado do sistema para que a sublimação ocorra", "O ponto II representa o processo de vaporização, onde a substância passa do seu estado físico líquido para o estado gasoso. Este processo pode ser classificado em ebulição, evaporação e calefação. No processo de calefação, a vaporização ocorre de maneira lenta e natural, enquanto na ebulição e na evaporação a substância rapidamente muda de fase", "A solidificação de uma substância é dada pela passagem da matéria em seu estado líquido para o estado sólido. Este processo é representado pelo ponto III e para que ele ocorra há a necessidade de adicionar calor ao sistema", "Quando a matéria passa do estado líquido para o gasoso, processo chamado de vaporização (ponto II), as partículas no interior desta substância ficam mais próximas umas das outras, devido ao calor adicionado"],
    r: 0, exp: "I é a fusão (absorve calor; em substância pura ocorre a temperatura constante). B erra: a sublimação é sólido → gás. C inverte as características (a calefação é rápida). D erra: a solidificação libera calor. E erra: na vaporização as partículas se afastam." },

  { id: "2020-38", ano: 2020, n: 38, tema: "Química", d: 3, img: ["2020-38.png"],
    ctx: "As aminas são substâncias orgânicas de amplo uso industrial (sabões, vulcanização da borracha, sais de amônio para condicionadores). A figura mostra duas moléculas: (1) um ciclo-hexeno com um grupo NH₂ ligado a um carbono do anel; (2) a cadeia CH₂=CH–CH₂–CH₂–CH₂–CH(NH₂)–CH₃.",
    q: "Assinale a alternativa que apresenta a correta nomenclatura IUPAC para as substâncias (1) e (2), respectivamente.",
    a: ["4-ciclo-hexenamina e 5-hepten-2-amina", "3-ciclo-hexenamina e 6-hepten-2-amina", "4-ciclo-benzeno-hexenamina e 6-hepten-3-amina", "3-ciclo-hexenamina e 6-metil-hepten-3-amina", "3-ciclo-benzeno-hexenamina e 6-hepten-2-amina"],
    r: 1, exp: "(1) O carbono do NH₂ é o C1 e a dupla fica no C3: 3-ciclo-hexenamina. (2) Cadeia principal com 7 carbonos, amina no C2 (numerando do lado do grupo NH₂) e dupla no C6: 6-hepten-2-amina." },

  { id: "2020-39", ano: 2020, n: 39, tema: "Química", d: 2,
    ctx: "A reação entre um ácido e uma base de Arrhenius produz um sal. Considere a reação entre o ácido ortofosfórico e o hidróxido de cálcio: 2 H₃PO₄ + n Ca(OH)₂ → X + 6 H₂O",
    q: "Assinale a alternativa correta que apresenta o composto X formado e o valor de n, conforme a estequiometria da reação balanceada.",
    a: ["X = Ca₂(OH)₃ e n = 2", "X = Ca₂(PO₄)₃ e n = 2", "X = Ca₂(OH)₃ e n = 3", "X = Ca(OH)₃ e n = 2", "X = Ca₃(PO₄)₂ e n = 3"],
    r: 4, exp: "Ca²⁺ com PO₄³⁻ forma Ca₃(PO₄)₂. Balanceando: 2 H₃PO₄ + 3 Ca(OH)₂ → Ca₃(PO₄)₂ + 6 H₂O." },

  { id: "2020-40", ano: 2020, n: 40, tema: "Química", d: 3,
    ctx: "Reação de combustão completa do etileno: C₂H₄ + 3 O₂ → 2 CO₂ + 2 H₂O. Massas molares: C₂H₄ = 28 g/mol; O₂ = 32 g/mol; CO₂ = 44 g/mol.",
    q: "Quantos gramas de CO₂ serão formados com uma massa inicial de C₂H₄ igual a 2 g e de O₂ igual a 6 g, e a reação é endotérmica ou exotérmica?",
    a: ["mCO₂ = 5,50 g e a reação é exotérmica", "mCO₂ = 6,25 g e a reação é exotérmica", "mCO₂ = 5,43 g e a reação é endotérmica", "mCO₂ = 6,25 g e a reação é endotérmica", "mCO₂ = 4,20 g e a reação é exotérmica"],
    r: 0, exp: "Mols: C₂H₄ = 2/28 ≈ 0,071; O₂ = 6/32 = 0,1875. Pela proporção 1 : 3, o O₂ é o limitante (0,1875/3 = 0,0625 mol de C₂H₄ reage). CO₂: 2 · 0,0625 = 0,125 mol · 44 = 5,5 g. A combustão libera calor (exotérmica)." },

  { id: "2020-41", ano: 2020, n: 41, tema: "Química", d: 2,
    ctx: "Para obter uma solução de NaCl de molaridade igual a 0,1 M e volume igual a 500 mL, deseja-se encontrar a massa de NaCl que deve ser pesada. Massa molar do sal = 58,5 g/mol.",
    q: "Assinale a alternativa correta que contém essa quantidade.",
    a: ["m = 3,82 g", "m = 2,93 g", "m = 1,54 g", "m = 8,75 g", "m = 0,86 g"],
    r: 1, exp: "n = M · V = 0,1 · 0,5 = 0,05 mol. m = 0,05 · 58,5 = 2,925 g ≈ 2,93 g." },

  { id: "2020-42", ano: 2020, n: 42, tema: "Química", d: 2,
    ctx: "A equação de Clapeyron (PV = nRT) relaciona massa e volume de um gás ideal. Dados: R = 0,082 atm·L/(mol·K); massa molar do N₂ = 28 g/mol.",
    q: "Assinale a alternativa correta com o volume ocupado por 10 g de N₂ a 25 °C e 1 atm.",
    a: ["V = 22,4 L", "V = 7,5 L", "V = 8,7 L", "V = 8,0 L", "V = 2,5 L"],
    r: 2, exp: "n = 10/28 ≈ 0,357 mol; T = 298 K. V = nRT/P = 0,357 · 0,082 · 298 / 1 ≈ 8,7 L." },

  // ---------- BIOLOGIA ----------
  { id: "2020-43", ano: 2020, n: 43, tema: "Biologia", d: 1,
    ctx: "A unidade fundamental da vida é a célula, presente em quase todos os organismos vivos do nosso planeta.",
    q: "A respeito dos organismos vivos que são acelulares, assinale a alternativa correta.",
    a: ["Bactérias", "Vírus", "Fungos", "Parasitas", "Protozoários"],
    r: 1, exp: "Os vírus não têm células: são formados por material genético e uma cápsula proteica." },

  { id: "2020-44", ano: 2020, n: 44, tema: "Biologia", d: 2,
    ctx: "As plantas sem flores são criptógamas e as com flores, fanerógamas. As plantas também podem ser traqueófitas (com vasos condutores de seiva) ou atraqueófitas (sem).",
    q: "A respeito das plantas traqueófitas, assinale a alternativa incorreta.",
    a: ["Samambaias", "Pinheiros", "Gincobilobas", "Cavalinha", "Musgos"],
    r: 4, exp: "Musgos são briófitas, as únicas plantas da lista sem vasos condutores (atraqueófitas). Samambaias, cavalinhas (pteridófitas) e pinheiros e ginkgo (gimnospermas) têm vasos." },

  { id: "2020-45", ano: 2020, n: 45, tema: "Biologia", d: 2,
    ctx: "Todos os seres do reino Animalia têm células animais e os do reino Plantae têm células vegetais. O que difere uma estrutura celular da outra é o constituinte interno (organelas), a membrana protetora e o metabolismo energético.",
    q: "A respeito dos aspectos que diferem as células animais das células vegetais, assinale a alternativa correta.",
    a: ["Na célula animal a parede celular é mais espessa em comparação à membrana da célula vegetal, e uma das suas principais funções é a proteção do conteúdo interno", "Os cloroplastos são as organelas responsáveis pela produção de energia das células animais, por meio da respiração", "A produção de energia da célula animal ocorre na mitocôndria, por meio da respiração celular. A matriz mitocondrial apresenta sua maior semelhança com os cloroplastos, o DNA circular", "A parede celular está presente somente na célula vegetal, não fazendo parte das células animais", "A produção de energia da célula animal ocorre na mitocôndria, por meio da respiração celular. Na matriz mitocondrial apresenta sua maior semelhança com as bactérias, o DNA em forma de hélice"],
    r: 3, exp: "Entre as células animal e vegetal, a parede celular (de celulose) só existe na vegetal. A célula animal não tem cloroplastos nem parede celular." },

  { id: "2020-46", ano: 2020, n: 46, tema: "Biologia", d: 2,
    ctx: "As plantas _____ dependem de uma grande quantidade de água para sua existência e, geralmente, crescem parcialmente ou completamente _____ em água. Já as plantas _____ se adaptam a ambientes com longas carências de água, o que leva a mudanças em suas estruturas internas, como células reduzidas e cutículas e paredes celulares mais espessas.",
    q: "Assinale a alternativa que preencha correta e respectivamente as lacunas.",
    a: ["hidrófitas / submersas / xerófitas", "xerófitas / submersas / hidrófitas", "aquáticas / a cima / terrestres", "terrestres / a cima / aquáticas", "hidrófitas / a cima / xerófitas"],
    r: 0, exp: "Hidrófitas = plantas aquáticas (podem ser submersas). Xerófitas = plantas de ambientes secos, com adaptações contra a perda de água." },

  { id: "2020-47", ano: 2020, n: 47, tema: "Biologia", d: 2,
    ctx: "As interações ecológicas podem ser intraespecíficas (dentro da mesma espécie) ou interespecíficas (entre espécies diferentes) e harmônicas ou desarmônicas. Julgue (V ou F), de cima para baixo:\n( ) Exemplos de interação intraespecífica harmônica são as formigas e as abelhas.\n( ) Canibalismo e competição são exemplos de interação intraespecífica desarmônica.\n( ) Exemplos de interação interespecífica harmônica são os liquens (fungos + cianobactérias), onde ambos se beneficiam da relação.\n( ) O parasitismo é um exemplo de interação interespecífica desarmônica, onde o parasita retira do hospedeiro os nutrientes para sua sobrevivência.",
    q: "Assinale a alternativa que apresenta a sequência correta de cima para baixo.",
    a: ["V, F, F, F", "F, V, V, V", "V, V, V, V", "F, F, F, F", "V, F, F, V"],
    r: 2, exp: "Todas são verdadeiras: formigas e abelhas formam sociedades (intraespecífica harmônica); canibalismo e competição são desarmônicas; liquens são mutualismo; parasitismo prejudica o hospedeiro." },

  { id: "2020-48", ano: 2020, n: 48, tema: "Biologia", d: 1,
    ctx: "A função do DNA está ligada ao armazenamento da herança genética. O DNA é formado por nucleotídeos e apresenta, geralmente, a forma de dupla hélice.",
    q: "A respeito da composição dos nucleotídeos que formam o DNA, assinale a alternativa correta.",
    a: ["Uma pentose, uma base nitrogenada e um ou mais grupos fosfato", "Uma hexose, uma base oxigenada e um ou mais grupos folato", "Uma pentose, quatro bases nitrogenadas e um ou mais grupos fosfato", "Uma hexose, quatro bases nitrogenadas e um ou mais grupos folato", "Uma pentose, duas bases nitrogenadas e nenhum grupo fosfato"],
    r: 0, exp: "Cada nucleotídeo tem três partes: uma pentose (desoxirribose), uma base nitrogenada (A, T, C ou G) e um (ou mais) grupo fosfato." },

  { id: "2020-49", ano: 2020, n: 49, tema: "Biologia", d: 1,
    ctx: "Para descrever a diversidade dos seres vivos foi criada a Taxonomia. Os seres vivos são classificados de acordo com grupos específicos, que determinam suas características em comum dentro de cada nível.",
    q: "Em relação às unidades mais comuns utilizadas para a classificação dos seres vivos e sua ordem decrescente, assinale a alternativa correta.",
    a: ["Reino, Filo, Classe, Ordem, Família, Espécie e Gênero", "Reino, Filo, Ordem, Família, Classe, Espécie e Gênero", "Reino, Ordem, Filo, Família, Classe, Gênero e Espécie", "Reino, Filo, Classe, Ordem, Família, Gênero e Espécie", "Reino, Filo, Classe, Família, Ordem, Gênero e Espécie"],
    r: 3, exp: "A hierarquia, do maior para o menor grupo: Reino, Filo, Classe, Ordem, Família, Gênero, Espécie." },

  // ---------- FÍSICA ----------
  { id: "2020-50", ano: 2020, n: 50, tema: "Física", d: 3,
    ctx: "O tempo de reação humano médio é de cerca de 0,2 s = 200 ms. Considere uma pessoa com essa resposta, submetida às circunstâncias:\nI. Medir com um cronômetro o tempo de queda de um objeto, a partir do repouso (queda livre), de uma altura de 20 cm (g = 10 m/s²).\nII. Frear um carro que se desloca a 54 km/h (20 m/s) após o surgimento repentino de um obstáculo 2 m à frente, evitando a colisão (movimento desacelerado a taxa constante).\nIII. Desviar de uma bola que se desloca horizontalmente a 20 m/s, com velocidade constante, e que partiu de uma distância de 5 m.\nResposta mecânica em tempos menores ou iguais a 200 ms é “improvável”; em tempos maiores que 200 ms, é “possível”.",
    q: "Assinale a alternativa que classifica corretamente as situações de I a III.",
    a: ["I - possível; II - possível; III - possível", "I - improvável; II - possível; III - improvável", "I - possível; II - improvável; III - possível", "I - improvável; II - improvável; III - possível", "I - improvável; II - improvável; III - improvável"],
    r: 3, exp: "I: t = √(2h/g) = √(2·0,2/10) = 0,2 s: não é maior que 200 ms, logo improvável. II: o obstáculo está a 2 m e o carro percorre 2 m em 0,1 s: improvável. III: a bola leva 5/20 = 0,25 s, maior que 0,2 s: possível." },

  { id: "2020-51", ano: 2020, n: 51, tema: "Física", d: 3,
    ctx: "Duas pessoas A e B disputam um cabo de guerra. A tem massa 80 kg e consegue, recolhendo os braços, fazer força de 1000 N; B tem massa 100 kg e consegue fazer força de 800 N. Os competidores mantêm o corpo na vertical e são modelados como pontos materiais. Perde quem cruzar primeiro uma linha à frente. O coeficiente de atrito entre sapato e chão é 1,0 para ambos; g = 10 m/s².",
    q: "Assinale a alternativa correta que apresenta um fato verdadeiro.",
    a: ["A ficará em equilíbrio assim como B e a disputa ficará empatada", "B estará submetido a uma força resultante de 800 N e vencerá", "A estará submetido a uma força resultante de 1000 N e vencerá", "B estará submetido a uma aceleração de 12,5 m/s² e A de 10 m/s², ganha A", "A, B e a corda serão todos submetidos a uma força de 200 N"],
    r: 1, exp: "Gabarito oficial: B. Esta questão é duvidosa: o enunciado não detalha como modelar o atrito e a corda, e a explicação por cálculo direto não é conclusiva. Use com cautela." },

  { id: "2020-52", ano: 2020, n: 52, tema: "Física", d: 3,
    ctx: "A temperatura dos oceanos está aumentando. Um aumento de 1 °C levaria a um grande aumento da energia térmica na biosfera. Considere o volume total de água nos oceanos como 1,5 × 10⁹ km³, a densidade da água de 1 × 10¹² kg/km³ e o calor específico de 4 kJ/(kg·°C). Para comparação: a bomba atômica Little Boy liberou cerca de 15 ktons = 60 × 10⁹ kJ. Suponha o aumento de 1 °C ao longo de 100 anos.",
    q: "Qual o número de bombas atômicas como a Little Boy que corresponderiam à energia extra acumulada a cada ano durante esse período de transição de 100 anos?",
    a: ["1 mil bombas atômicas", "1 milhão de bombas atômicas", "100 milhões de bombas atômicas", "1 bilhão de bombas atômicas", "10 bilhões de bombas atômicas"],
    r: 3, exp: "Massa: 1,5 × 10⁹ · 10¹² = 1,5 × 10²¹ kg. Energia para 1 °C: Q = m c ΔT = 1,5 × 10²¹ · 4 · 1 = 6 × 10²¹ kJ. Por ano: 6 × 10²¹ / 100 = 6 × 10¹⁹ kJ. Bombas: 6 × 10¹⁹ / 6 × 10¹⁰ = 10⁹ (1 bilhão)." },

  { id: "2020-53", ano: 2020, n: 53, tema: "Física", d: 3,
    ctx: "Em 1995, Michel Mayor e Didier Queloz descobriram o primeiro exoplaneta, que tem massa de cerca da metade da massa de Júpiter e orbita a estrela 51 Pegasi (massa semelhante à do Sol), em órbita aproximadamente circular com 8 milhões de quilômetros de raio. Dados: massa de Júpiter = 320 massas da Terra; 1 massa do Sol = 330 000 massas da Terra; distância média Sol–Terra = 150 × 10⁶ km.",
    q: "Em relação à força existente entre o Sol e a Terra, a força gravitacional entre 51 Pegasi e o planeta é",
    a: ["160 vezes maior", "3000 vezes maior", "5625 vezes maior", "16000 vezes maior", "56250 vezes maior"],
    r: 4, exp: "Planeta: 320/2 = 160 massas terrestres. F ∝ M · m / d². Razão = (330 000 · 160 / 8²) ÷ (330 000 · 1 / 150²) = 160 · (150/8)² = 160 · 351,56 = 56 250." },

  { id: "2020-54", ano: 2020, n: 54, tema: "Física", d: 3,
    ctx: "A base de Alcântara é a mais próxima do equador no mundo. Um satélite geoestacionário acompanha a rotação da Terra e fica fixo em relação à superfície. O raio da órbita geoestacionária é de cerca de 4 × 10⁴ km. O raio terrestre no equador é de cerca de 6 × 10³ km, e o período de rotação da Terra é de 24 h. Considere π = 3 e um referencial fixo no centro da Terra.",
    q: "Quais são, respectivamente, a velocidade do satélite ainda na base, antes de ser lançado, e o módulo da diferença entre essa velocidade e a de quando ele for posto em órbita geoestacionária?",
    a: ["1.500 km/h e 2.800 km/h", "6.000 km/h e 4.250 km/h", "1.500 km/h e 8.500 km/h", "1.500 km/h e 34.000 km/h", "6.000 km/h e 60.000 km/h"],
    r: 2, exp: "ω = 2π/T = 6/24 = 0,25 rad/h. Na base: v = ω R = 0,25 · 6 000 = 1 500 km/h. Na órbita: v = 0,25 · 40 000 = 10 000 km/h. Diferença = 10 000 − 1 500 = 8 500 km/h." },

  { id: "2020-55", ano: 2020, n: 55, tema: "Física", d: 2,
    ctx: "A luz síncrotron é radiação eletromagnética de alto fluxo e brilho, em uma faixa ampla do espectro. Espectro eletromagnético: raio X de 0,01 nm a 10 nm; ultravioleta de 10 nm a 400 nm; luz visível de 400 nm a 750 nm; infravermelho de 750 nm a 1 mm. Deseja-se estudar materiais com comprimentos de onda na escala molecular (nanômetro), 1 nm = 10⁻⁹ m. Adote a velocidade da luz como 3 × 10⁸ m/s.",
    q: "Qual é a frequência, em Hz, da radiação que tem comprimento de onda nesta escala e o tipo de radiação a que corresponde?",
    a: ["1 × 10⁻⁹ Hz, Ultravioleta", "3 × 10¹⁷ Hz, Raio X", "1 × 10¹⁹ Hz, Luz visível", "1 × 10⁹ Hz, Raio X", "3 × 10² Hz, Infravermelho"],
    r: 1, exp: "f = c/λ = 3 × 10⁸ / 10⁻⁹ = 3 × 10¹⁷ Hz. Um comprimento de onda de 1 nm está na faixa de 0,01 a 10 nm: raio X." },

  { id: "2020-56", ano: 2020, n: 56, tema: "Física", d: 2,
    ctx: "Eficiência = potência útil / potência retirada da fonte. Um carregador de celular tem as inscrições: Entrada (AC): 120 V – 0,5 A; Saída (DC): 5 V – 2 A. (O valor AC é um valor efetivo, tratado como valores fixos de tensão e corrente no cálculo da potência.)",
    q: "Quanto às afirmações verdadeiras sobre este dispositivo, assinale a alternativa correta.",
    a: ["A eficiência do carregador é de cerca de 17%", "A energia gasta pelo carregador ao operar por 1 h é de 0,5 kWh", "A eficiência do carregador é de 80%", "A resistência do circuito de entrada é de 60 ohm", "A resistência elétrica do circuito de saída é de 0,4 ohm"],
    r: 0, exp: "Potência de entrada: 120 · 0,5 = 60 W. Potência de saída: 5 · 2 = 10 W. Eficiência = 10/60 ≈ 16,7% ≈ 17%. Energia em 1 h: 0,06 kWh. Resistência de entrada: 120/0,5 = 240 Ω; de saída: 5/2 = 2,5 Ω." },

  // =====================================================================
  // PROVA 2º SEMESTRE 2021 — Eixo de Computação (20/06/2021)
  // =====================================================================

  // ---------- MATEMÁTICA ----------
  { id: "2021-01", ano: 2021, n: 1, tema: "Matemática", d: 2,
    q: "Em uma papelaria, os valores de uma caixa de lápis, de um caderno, de um fichário e de uma agenda, nesta ordem, formam uma progressão aritmética cuja soma dos termos é R$ 72,00. Se a razão dessa progressão é um quarto do valor do caderno, o valor do fichário é",
    a: ["R$ 16,00.", "R$ 18,00.", "R$ 20,00.", "R$ 22,00.", "R$ 24,00."],
    r: 2, exp: "Seja c o valor do caderno e r = c/4. Termos: 3c/4, c, 5c/4, 3c/2. Soma = 18c/4 = 72 → c = 16. Fichário (3º termo) = 5c/4 = 20." },

  { id: "2021-02", ano: 2021, n: 2, tema: "Matemática", d: 3, img: ["2021-02.png"],
    ctx: "As funções f(x) = log₂(x + k) e g(x) = 2^(bx − 1), com k e b números reais, se intersectam em dois pontos, sendo um deles o ponto (1, 2), conforme mostra o gráfico.",
    q: "O valor de g(k/b) é igual a",
    a: ["5.", "4.", "3.", "2.", "1."],
    r: 1, exp: "Em (1, 2): f(1) = log₂(1 + k) = 2 → 1 + k = 4 → k = 3. g(1) = 2^(b − 1) = 2 → b = 2. Então g(k/b) = g(3/2) = 2^(2 · 3/2 − 1) = 2² = 4." },

  { id: "2021-03", ano: 2021, n: 3, tema: "Matemática", d: 2,
    q: "Em uma caixa há 7 canetas azuis, 5 vermelhas e 3 verdes. Retirando-se aleatoriamente duas canetas dessa caixa, uma após a outra e sem reposição, a probabilidade de que pelo menos uma delas seja verde é",
    a: ["8/35", "2/7", "13/35", "2/5", "3/7"],
    r: 2, exp: "Complementar: nenhuma verde. P = (12/15) · (11/14) = 132/210 = 22/35. Pelo menos uma verde = 1 − 22/35 = 13/35." },

  { id: "2021-04", ano: 2021, n: 4, tema: "Matemática", d: 2, img: ["2021-04.png"],
    ctx: "A área total de um cubo de aresta 4 cm é igual à área lateral de um prisma reto de base quadrada (lado x), com 8 cm de altura.",
    q: "O volume do prisma que tem 8 cm de altura é igual a",
    a: ["96 cm³.", "88 cm³.", "80 cm³.", "72 cm³.", "64 cm³."],
    r: 3, exp: "Área total do cubo: 6 · 4² = 96. Área lateral do prisma: 4 · x · 8 = 32x = 96 → x = 3. Volume = 3² · 8 = 72 cm³." },

  { id: "2021-05", ano: 2021, n: 5, tema: "Matemática", d: 2, img: ["2021-05.png"],
    ctx: "Em uma residência, a escada da sala forma com a parede um vão livre, no qual foram colocadas 3 prateleiras (P₁, P₂ e P₃) paralelas ao chão e equidistantes entre si. A figura mostra a parede dividida em quatro trechos iguais de medida x; a base do vão, no chão, mede 4 m.",
    q: "A soma dos comprimentos das 3 prateleiras é igual a",
    a: ["5 m.", "6 m.", "7 m.", "8 m.", "9 m."],
    r: 1, exp: "Por semelhança de triângulos, o comprimento de cada prateleira é proporcional à sua distância ao topo da parede: P₁ = 4 · 1/4 = 1 m, P₂ = 2 m e P₃ = 3 m. Soma = 6 m." },

  { id: "2021-06", ano: 2021, n: 6, tema: "Matemática", d: 1,
    q: "Um estudante dispõe de folhas de papel sulfite nas cores azul e amarelo, no total de 200 folhas. Após utilizar 50 folhas azuis e 10 folhas amarelas, o número restante de folhas das duas cores ficou o mesmo. O número de folhas restantes da cor amarela é",
    a: ["110.", "100.", "90.", "80.", "70."],
    r: 4, exp: "A − 50 = Y − 10 → A = Y + 40. Com A + Y = 200: 2Y + 40 = 200 → Y = 80. Restam 80 − 10 = 70 folhas amarelas." },

  { id: "2021-07", ano: 2021, n: 7, tema: "Matemática", d: 2,
    ctx: "Pontos feitos por um atleta nas seis primeiras partidas: 1ª = 30; 2ª = 24; 3ª = 34; 4ª = 36; 5ª = 28; 6ª = ? (a moda é 34).",
    q: "Considerando o número de pontos nessas seis partidas e sabendo que a moda é 34, o valor da média e da mediana são, respectivamente, iguais a",
    a: ["34 e 32.", "32 e 34.", "31 e 35.", "31 e 32.", "31 e 34."],
    r: 3, exp: "Para a moda ser 34, a 6ª partida vale 34. Soma = 186, média = 31. Em ordem: 24, 28, 30, 34, 34, 36. Mediana = (30 + 34)/2 = 32." },

  // ---------- LÍNGUA PORTUGUESA E LITERATURA ----------
  { id: "2021-08", ano: 2021, n: 8, tema: "Língua Portuguesa", d: 1, img: ["2021-08.png"],
    ctx: "Tirinha de Pietro Soldi (Instagram, 10.07.2020). Uma casa, em um balão de pensamento, imagina: “Que histórias minha casa contaria sobre mim se um dia pudesse então falar?” e “O que diria para as colegas da vizinhança se pudesse com palavras se expressar? O que con…”. Depois, uma vizinha comenta com outra que o dono da casa ‘deu pra escrever poema’, e ela responde: “Nem me fale! Se a quarentena não acabar logo vou ficar maluca!”",
    q: "Contribui para o efeito de humor da tirinha o recurso",
    a: ["à antítese: a oposição, em uma mesma expressão ou frase, de duas palavras de sentido contrário.", "ao eufemismo: a atenuação do sentido desagradável de uma palavra ou de uma expressão.", "à personificação: a atribuição de características humanas a seres inanimados ou irracionais.", "ao pleonasmo: a repetição desnecessária de palavras ou expressões para enunciar uma ideia.", "à hipérbole: a ênfase resultante do exagero na expressão ou comunicação de uma ideia."],
    r: 2, exp: "As casas pensam e conversam, como se fossem pessoas: personificação. A graça é que elas fazem fofoca como os moradores." },

  { id: "2021-09", ano: 2021, n: 9, tema: "Língua Portuguesa", d: 2, img: ["2021-08.png"],
    q: "Observa-se o emprego de verbo no modo imperativo",
    a: ["no primeiro quadrinho, apenas.", "no segundo quadrinho, apenas.", "no terceiro quadrinho, apenas.", "no quarto quadrinho, apenas.", "no terceiro e no quarto quadrinhos."],
    r: 3, exp: "‘Nem me fale!’ (4º quadrinho) é imperativo negativo. ‘Contaria’ e ‘diria’ estão no futuro do pretérito, ‘Já vai!’ está no presente do indicativo e ‘deu’ no pretérito perfeito." },

  { id: "2021-10", ano: 2021, n: 10, tema: "Língua Portuguesa", d: 2, t: "morozov",
    q: "De acordo com o autor,",
    a: ["o avanço social das comunidades produtoras de dados do século XXI dependerá do abandono completo de uma economia ainda baseada na exploração do petróleo.", "a ideia de que dados são o petróleo do século XXI mostra-se falha por desconsiderar as origens bastante distintas desses dois recursos.", "a produção e a acumulação ininterruptas de dados acabará por solucionar as contradições inerentes à sociedade capitalista global.", "a ideia de que dados são o petróleo do século XXI mostra-se falha por ignorar as perspectivas de mudanças sociais decorrentes da revolução digital.", "o petróleo, a despeito da acumulação frenética de dados, continuará desempenhando um papel central nos embates geopolíticos do século XXI."],
    r: 1, exp: "‘Há muito a criticar nessa definição. Para começar, a forma como produzimos dados é muito diferente daquela como a natureza produz seus recursos’." },

  { id: "2021-11", ano: 2021, n: 11, tema: "Língua Portuguesa", d: 2, t: "morozov",
    q: "O autor inclui-se em seu texto, ou seja, trata a si mesmo também como objeto de seu texto, no seguinte trecho:",
    a: ["“Já é quase um clichê afirmar que ‘dados são o petróleo do século XXI’.” (1º parágrafo)", "“Há muito a criticar nessa definição.” (1º parágrafo)", "“Para começar, a forma como produzimos dados é muito diferente daquela como a natureza produz seus recursos.” (1º parágrafo)", "“Todas essas previsões podem ter seu fundo de verdade, mas certamente essa não é a única lição a extrair da comparação entre dados e petróleo.” (3º parágrafo)", "“Se os dados são o petróleo do século XXI, quem vai ser o Saddam Hussein deste século?” (3º parágrafo)"],
    r: 2, exp: "‘Produzimos’ está na 1ª pessoa do plural (nós), então o autor se inclui entre os que produzem dados." },

  { id: "2021-12", ano: 2021, n: 12, tema: "Língua Portuguesa", d: 2, t: "morozov",
    ctx: "Em “Não surpreende o surgimento de um nicho de consultorias digitais e de gurus tecnológicos, os quais insistem na ideia de que uma sociedade detentora de tantos dados vai acabar solucionando todas as contradições QUE o sistema capitalista global não consegue resolver por conta própria” (2º parágrafo), observe o termo ‘que’.",
    q: "O termo destacado (que) refere-se a:",
    a: ["contradições.", "ideia.", "sociedade.", "dados.", "sistema."],
    r: 0, exp: "‘Que’ é pronome relativo e retoma ‘contradições’: o sistema não consegue resolver as contradições." },

  { id: "2021-13", ano: 2021, n: 13, tema: "Língua Portuguesa", d: 2, t: "morozov",
    ctx: "“Considerar essa questão nos dias de hoje pode parecer não só excessivamente sarcástico, COMO TAMBÉM ridículo.” (4º parágrafo)",
    q: "No contexto em que se encontra, a expressão destacada expressa ideia de",
    a: ["consequência.", "proporção.", "comparação.", "causa.", "adição."],
    r: 4, exp: "‘Não só… como também’ é uma locução aditiva: soma duas qualidades (sarcástico e ridículo)." },

  { id: "2021-14", ano: 2021, n: 14, tema: "Língua Portuguesa", d: 2,
    ctx: "“Esse movimento procurou a naturalidade racional, através da simplicidade estilística e da clareza das ideias. O ideal de seus autores foi realizar a integração entre a literatura, a sociedade e a Natureza. O bucolismo ajustou-se a essa perspectiva de integração, com as imagens tranquilas da contemplação pastoril. Esse ideal de serenidade seria espontâneo e natural. Para esse movimento, segundo o crítico Antonio Candido, ‘o verdadeiro é o natural, o natural é o racional’.” (Abdala Junior e Campedelli. Tempos da literatura brasileira, 1997. Adaptado)",
    q: "O texto refere-se ao movimento",
    a: ["barroco.", "árcade.", "romântico.", "naturalista.", "simbolista."],
    r: 1, exp: "Simplicidade, bucolismo, vida pastoril e razão como ideal natural são marcas do Arcadismo (Neoclassicismo)." },

  // ---------- LÍNGUA INGLESA ----------
  { id: "2021-15", ano: 2021, n: 15, tema: "Língua Inglesa", d: 2, t: "bioplastic",
    q: "According to the text,",
    a: ["fashion industry can improve on inclusivity.", "fashion should embrace second hand market.", "eco-friendly fashion always damages the environment.", "fashion industry can act to reduce its greenhouse gas emissions.", "sustainable fashion should be more affordable."],
    r: 3, exp: "Gabarito oficial: D. O texto apresenta o bioplástico, feito de algas e ‘carbon neutral’, como uma forma de a moda reduzir resíduos de plástico e o impacto ambiental. Os assuntos de inclusão, brechós e preço não aparecem." },

  { id: "2021-16", ano: 2021, n: 16, tema: "Língua Inglesa", d: 1, t: "bioplastic",
    q: "In the excerpt from the second paragraph “Once cooled, the sheets of bioplastic are finally cut into sequins”, the underlined word (Once) means",
    a: ["since.", "while.", "after.", "then.", "also."],
    r: 2, exp: "‘Once cooled’ = depois de resfriadas (‘after being cooled’)." },

  { id: "2021-17", ano: 2021, n: 17, tema: "Língua Inglesa", d: 2, t: "bioplastic",
    q: "No trecho do terceiro parágrafo “is not a scarce resource”, a expressão sublinhada (scarce resource) refere-se a",
    a: ["algae.", "carbon.", "fossil fuels.", "bioplastic.", "regular plastic."],
    r: 0, exp: "‘Perhaps the most obvious is algae, which unlike fossil fuels, is not a scarce resource’: as algas não são um recurso escasso." },

  { id: "2021-18", ano: 2021, n: 18, tema: "Língua Inglesa", d: 1, t: "bioplastic",
    q: "O trecho do quarto parágrafo “There are some downsides to bioplastic, however”, estabelece, em relação ao parágrafo anterior, uma relação de",
    a: ["adição.", "explicação.", "oposição.", "conclusão.", "alternância."],
    r: 2, exp: "O 3º parágrafo lista as vantagens e o 4º traz as desvantagens, introduzidas por ‘however’ (no entanto): oposição." },

  { id: "2021-19", ano: 2021, n: 19, tema: "Língua Inglesa", d: 2, t: "bioplastic",
    q: "The expression “pie in the sky”, in the excerpt from the fifth paragraph “perhaps that change isn’t a pie in the sky”, indicates that the change isn’t",
    a: ["a good idea.", "an unreal thing.", "a total surprise.", "a side effect.", "a cause for alarm."],
    r: 1, exp: "‘Pie in the sky’ é uma expressão para algo bom demais para ser real, um sonho distante. A mudança não é algo irreal." },

  { id: "2021-20", ano: 2021, n: 20, tema: "Língua Inglesa", d: 2, img: ["2021-20.png"],
    ctx: "Tirinha do Garfield: Jon diz “Liz thinks I have no fashion sense” (Liz acha que não tenho senso de moda). Depois, “Well, I’ll show her!”. Garfield pensa: “Where’s my paisley ascot? I’d better close the drapes.”",
    q: "The excerpt from the last panel “I’d better close the drapes” can be replaced, without change in meaning, by",
    a: ["I’m able to close the drapes.", "I could close the drapes.", "It would be wise to close the drapes.", "I must close the drapes.", "It would be a mistake to close the drapes."],
    r: 2, exp: "‘I’d better’ (I had better) = é melhor / seria prudente. Garfield acha mais sensato fechar as cortinas para não ver a roupa de Jon." },

  { id: "2021-21", ano: 2021, n: 21, tema: "Língua Inglesa", d: 2, img: ["2021-21.png"],
    ctx: "Campanha publicitária da marca de roupas Everlane. Imagem 1: garrafa plástica, com o texto “Warming the planet.” Imagem 2: um jovem com uma jaqueta e o texto “Warming you.” e “This puffer is made from 16 discarded plastic bottles.”",
    q: "The aim of the ad campaign is to",
    a: ["encourage people to recycle plastic bottles.", "raise awareness about eco-friendly fashion.", "highlight the importance of drinking water.", "bring awareness to body image issues.", "take a stand against sustainability issues."],
    r: 1, exp: "As garrafas ‘aquecem o planeta’ quando descartadas; a jaqueta feita com elas ‘aquece você’. A campanha promove a moda ecológica." },

  // ---------- HISTÓRIA ----------
  { id: "2021-22", ano: 2021, n: 22, tema: "História", d: 3,
    ctx: "“Os séculos II e I a.C. são tidos como o período de crise da República romana. O modelo político centrado na supremacia do Senado, instrumento de poder da elite patrícia, sofreu uma forte contestação, fruto da ação de diferentes setores da sociedade: uma camada de comerciantes enriquecidos com a expansão de Roma; a massa de plebeus miseráveis e descontentes e o enorme contingente de escravos. Além disso, não podem ser descartadas as pretensões políticas dos generais, fortalecidos pela crescente importância do Exército na vida romana.” (Flávia Eyler. História antiga: Grécia e Roma, 2014. Adaptado)",
    q: "A crise à qual a historiadora se refere decorreu",
    a: ["da expansão do cristianismo, que questionou a hierarquia social e a autoridade política.", "das guerras civis entre patrícios, plebeus e escravos, que deram origem a leis escritas.", "da extensão da cidadania aos povos dominados, que tirou os privilégios dos romanos.", "das conquistas na bacia do Mar Mediterrâneo, que alteraram a estrutura socioeconômica.", "da disputa pelo poder entre os generais, que pôs fim à economia centrada no escravismo."],
    r: 3, exp: "As conquistas (Guerras Púnicas e outras) trouxeram escravos, riquezas para comerciantes e generais e empobrecimento de camponeses, o que mudou a sociedade e abalou a República." },

  { id: "2021-23", ano: 2021, n: 23, tema: "História", d: 2,
    ctx: "“As cidades, para nascer, precisaram de um meio rural favorável, mas, à medida que se desenvolviam, exerciam uma atração cada vez maior sobre um entorno agrário dilatado na medida de suas exigências. […] A emigração do campo para a cidade entre os séculos X e XIV é um dos fenômenos principais da Cristandade. Dos diversos elementos humanos que recebe, a cidade faz uma nova sociedade.” (Jacques Le Goff. A civilização do Ocidente medieval, 2017)",
    q: "No excerto, ao tratar das cidades medievais, o historiador",
    a: ["estabelece vínculos com o campo, de onde provinham os alimentos e a mão de obra que sustentavam a vida urbana.", "minimiza a importância da nobreza feudal, cujo poder ficou restrito às áreas rurais e aos camponeses.", "explica o motivo do surgimento de uma nova classe social, a burguesia, a partir da acumulação monetária.", "separa a zona urbana da periferia rural, destacando o desenvolvimento de novas atividades econômicas.", "destaca as relações político-administrativas como a base da vida urbana, ao contrário da função econômica do campo."],
    r: 0 },

  { id: "2021-24", ano: 2021, n: 24, tema: "História", d: 3, img: ["2021-24.png"],
    ctx: "Gráfico: Estimativas de entradas decenais de escravos nos portos de Salvador (Bahia) e do Rio de Janeiro, de 1700 a 1780. A Bahia começa com cerca de 85 mil, atinge o pico (cerca de 110 mil) entre 1711–20 e cai depois. O Rio de Janeiro começa com cerca de 28 mil, cresce quase continuamente e termina em cerca de 95 mil.",
    q: "Os dados do gráfico revelam",
    a: ["o aumento das alforrias dos escravos urbanos na colônia e o auge dos engenhos de açúcar no Nordeste.", "a mudança na mão de obra na América Portuguesa e o esgotamento das minas de ouro no interior.", "o fluxo estável de escravos africanos e o deslocamento do eixo econômico do Sul para o Nordeste da colônia.", "o crescimento da população devido à riqueza do ouro e o encarecimento das mercadorias nos portos coloniais.", "a ampliação do tráfico de escravos no Atlântico e a progressiva importância comercial do porto do Rio de Janeiro."],
    r: 4, exp: "A entrada de escravos cresce (tráfico atlântico) e o porto do Rio ganha importância ao longo do século XVIII, por conta da mineração (ouro de Minas Gerais)." },

  { id: "2021-25", ano: 2021, n: 25, tema: "História", d: 2,
    ctx: "“E, enquanto as partes da América Inglesa e Espanhola tornaram-se politicamente independentes através de guerras sangrentas contra as respectivas metrópoles, com a instauração de regimes republicanos, na América Portuguesa a direção e o movimento desse processo eram bem diversos.” (Maria de Lourdes Viana Lyra. O Império em construção, 2000)",
    q: "O processo de independência do Brasil teve como diferencial",
    a: ["a continuidade da monarquia sob comando do herdeiro da Coroa portuguesa.", "o papel decisivo das camadas populares na elevação a Reino Unido.", "a participação destacada dos escravos nas lutas de libertação da colônia.", "o caráter liberal com a manutenção do federalismo e dos privilégios sociais.", "a fragmentação do território em vários países integrados pelo lusitanismo."],
    r: 0, exp: "A independência foi proclamada por D. Pedro, herdeiro do trono português, e o Brasil se manteve monárquico, unido e escravista." },

  { id: "2021-26", ano: 2021, n: 26, tema: "História", d: 2,
    ctx: "“Todavia, o que aproximava franceses, ingleses e outros colonizadores, e dava-lhes consciência de pertencerem à Europa, era aquela convicção de que encarnavam a ciência e a técnica, e de que este saber permitia às sociedades por eles subjugadas progredir. Civilizar-se.” (Marc Ferro. Histórias das Colonizações, 1996)",
    q: "De acordo com o historiador, no final do século XIX,",
    a: ["a evolução das diferentes sociedades dependia da fusão entre os saberes dos povos nativos e dos europeus.", "o domínio de conhecimentos técnico-científicos embasava a crença na superioridade dos europeus.", "a concepção de progresso social baseava-se no rompimento dos laços entre colonizados e colonizadores.", "o ideal de pertencimento à civilização europeia envolvia questões religiosas desconhecidas por outras sociedades.", "a diferença entre povo atrasado e povo desenvolvido foi superada pela missão civilizadora do homem branco."],
    r: 1, exp: "É a ideologia da ‘missão civilizadora’ do imperialismo: os europeus se achavam superiores por seu saber técnico-científico." },

  { id: "2021-27", ano: 2021, n: 27, tema: "História", d: 3,
    ctx: "“O centro de sustentação do Estado Novo estava corporificado funcional e pessoalmente na figura de [Getúlio] Vargas – o único civil a comandar uma ditadura no Brasil, garantida pelas Forças Armadas, em especial pelo Exército, e apoiada numa política de massas.” (Schwarcz e Starling. Brasil: uma biografia, 2015)",
    q: "Caracterizam esse regime",
    a: ["a concentração dos poderes no presidente legitimamente eleito e o alinhamento aos países fascistas.", "a censura dos meios de comunicação e a ampliação da autonomia dos sindicatos operários.", "a instituição de um partido único no governo e o intervencionismo estatal nas atividades econômicas.", "a organização de um aparato policial repressivo e a mobilização dos trabalhadores urbanos.", "a adoção de medidas liberais de incentivo à industrialização e o nacionalismo exacerbado."],
    r: 3, exp: "Gabarito oficial: D. O Estado Novo (1937–1945) teve censura (DIP), polícia política repressiva e uma política de massas voltada aos trabalhadores urbanos (trabalhismo, CLT). Não houve partido único formal nem sindicatos autônomos." },

  { id: "2021-28", ano: 2021, n: 28, tema: "História", d: 2, img: ["2021-28.png"],
    ctx: "Charge publicada no jornal O Estado de S.Paulo em outubro de 1962, mostrando o presidente norte-americano John F. Kennedy, o dirigente soviético Nikita Kruschev e o líder cubano Fidel Castro.",
    q: "A charge refere-se",
    a: ["ao auge do intervencionismo norte-americano na América Latina.", "ao conflito bélico entre EUA e URSS após a Revolução Cubana.", "ao momento mais tenso da bipolarização entre as superpotências.", "ao fim da Guerra Fria entre os países capitalistas e os socialistas.", "à consolidação do modelo socialista soviético na América Latina."],
    r: 2, exp: "Em outubro de 1962 ocorreu a Crise dos Mísseis de Cuba, o momento em que EUA e URSS chegaram mais perto de uma guerra nuclear. Não houve conflito bélico direto." },

  // ---------- GEOGRAFIA ----------
  { id: "2021-29", ano: 2021, n: 29, tema: "Geografia", d: 2,
    ctx: "“A estratégia de desenvolvimento dos Tigres Asiáticos pode ser considerada um caso de sucesso na conquista de melhores condições econômicas e sociais para o conjunto da população e para a soberania nacional. Ao contrário da América Latina e Caribe, que adotaram uma estratégia de ‘substituição de importações’, o modelo implementado por Hong Kong, Singapura, Taiwan e Coreia do Sul se mostrou mais efetivo […]” (Ecodebate, 2019. Adaptado)",
    q: "Para estimular a industrialização, uma das medidas adotadas pelos Tigres Asiáticos em seu planejamento estratégico foi o",
    a: ["incentivo às exportações com a redução de impostos.", "cancelamento das medidas protecionistas aos concorrentes estrangeiros.", "estímulo à sindicalização dos funcionários nas indústrias.", "veto às políticas de atração para empresas transnacionais.", "estabelecimento de leis rígidas de proteção ambiental."],
    r: 0, exp: "Os Tigres Asiáticos apostaram em indústrias voltadas à exportação, com incentivos fiscais e atração de multinacionais. Ao contrário da América Latina, não focaram na substituição de importações." },

  { id: "2021-30", ano: 2021, n: 30, tema: "Geografia", d: 2,
    ctx: "“Sabe-se que as cidades são espaços de congregação demográfica que reúnem condições de instalação concentrada de múltiplas atividades necessárias à produção e reprodução da vida contemporânea. […] O acesso à terra na cidade, mais precisamente ao solo urbano, é a chave explicativa das grandes questões urbanas. Na cidade, a terra muda constantemente de dono ou de donos e se ajusta aos interesses de uma minoria que aposta nos ganhos pautados na acumulação.” (José B. Silva, 2019. Adaptado)",
    q: "A análise sobre a cidade e o urbano apresentada no excerto revela",
    a: ["a produção da cidade como traço cultural, segregadora daqueles que se opõem à lógica capitalista de acumulação.", "o cooperativismo como estratégia de mercado, oferecendo às famílias opções mais acessíveis para a compra de imóveis.", "a insustentabilidade das ocupações urbanas, espaços que são desestruturados com a ação de políticas de retorno da população ao campo.", "o solo urbano enquanto mercadoria, sujeito à especulação imobiliária que reforça diferenças socioeconômicas.", "a desvalorização da propriedade privada, resultado de uma população alienada aos instrumentos oficiais que normatizam os espaços urbanos."],
    r: 3 },

  { id: "2021-31", ano: 2021, n: 31, tema: "Geografia", d: 3, img: ["2021-31.png"],
    ctx: "Mapa do Brasil com a quantidade comercializada, em toneladas, em 2014, por município: as manchas mais escuras (de 2 500 a 7 144 toneladas) concentram-se em Mato Grosso, Goiás, Mato Grosso do Sul, oeste da Bahia, sul do Maranhão e do Tocantins, e partes do Sul.",
    q: "O mapa apresenta dados sobre a comercialização de",
    a: ["cana-de-açúcar, utilizada nas usinas de etanol da região do Seridó.", "carvão, utilizado na produção de energia elétrica da região Sudeste.", "minérios, utilizados na siderurgia da Zona Franca de Manaus.", "trigo, utilizado nas indústrias alimentícias da região Sul.", "agrotóxicos, utilizados nas agroindústrias da região do Matopiba."],
    r: 4, exp: "A concentração em áreas de agronegócio (Centro-Oeste e Matopiba: Maranhão, Tocantins, Piauí e Bahia) indica agrotóxicos. As outras alternativas misturam produtos e regiões que não combinam (Seridó, Zona Franca de Manaus etc.)." },

  { id: "2021-32", ano: 2021, n: 32, tema: "Geografia", d: 1, img: ["2021-32.png"],
    ctx: "Perfil da vegetação: Mata de igapó (alagada o ano todo, junto ao rio), Mata de várzea (alaga na cheia) e Mata de terra firme (nunca alaga), com sedimentos recentes de várzea e sedimentos terciários de terra firme.",
    q: "A vegetação representada na imagem corresponde ao domínio morfoclimático denominado",
    a: ["Mares de Morros.", "Amazônico.", "Pradarias.", "Cerrado.", "Araucárias."],
    r: 1, exp: "Igapó, várzea e terra firme são os três ambientes da floresta amazônica, conforme a influência dos rios." },

  { id: "2021-33", ano: 2021, n: 33, tema: "Geografia", d: 1,
    ctx: "“Atualmente, entre os principais riscos para essas áreas estão a proposta de reabertura da Estrada do Colono, que passa dentro do Parque Nacional do Iguaçu, a redução do status de proteção do Parque Nacional Campos Gerais, da Estação Ecológica de Tamoios e as propostas de redelimitação dos parques nacionais Serra da Bodoquena e Lençóis Maranhenses. […] De 2017 para 2018, o ICMBio, responsável pela sua manutenção, teve redução de 44% em seu orçamento.” (WWF-Brasil, 2020. Adaptado)",
    q: "O excerto expõe os riscos",
    a: ["aos cinturões agrícolas.", "à reforma agrária.", "às unidades de conservação.", "à prática de biopirataria.", "aos divisores de águas."],
    r: 2, exp: "Parques nacionais e estações ecológicas são unidades de conservação, geridas pelo ICMBio." },

  { id: "2021-34", ano: 2021, n: 34, tema: "Geografia", d: 2, img: ["2021-34.png"],
    ctx: "Mapa-múndi com a concentração de resíduos (kg/km², de 0 a 10) e as correntes marítimas. As maiores concentrações aparecem em grandes áreas circulares do meio dos oceanos Atlântico, Pacífico e Índico.",
    q: "Considerando a distribuição espacial do fenômeno e conhecimentos sobre o meio ambiente, é correto afirmar que o mapa apresenta",
    a: ["a convergência de efluentes industriais para baixas latitudes.", "o aumento de atividades extrativistas junto às cadeias mesoatlânticas.", "a multiplicidade de emissários submarinos distantes de áreas costeiras.", "o acúmulo de geleiras no encontro de correntes marítimas frias.", "a concentração de plásticos em giros oceânicos."],
    r: 4, exp: "As correntes formam giros que ‘prendem’ o lixo plástico no centro dos oceanos (como a Grande Mancha de Lixo do Pacífico)." },

  // ---------- HISTÓRIA (cont.) ----------
  { id: "2021-35", ano: 2021, n: 35, tema: "História", d: 3,
    ctx: "O fim da Segunda Guerra Mundial e a criação da Organização das Nações Unidas impulsionaram a independência de países africanos e asiáticos.",
    q: "Esse processo promoveu",
    a: ["a formação de enclaves relacionados à luta étnica, que conferiram soberania para as nacionalidades minoritárias.", "novas possessões administradas por ex-metrópoles, que buscaram a manutenção do poder autoritário nos continentes.", "disputas entre superpotências por zonas de influência, que marcaram o início de guerras nas ex-colônias.", "acordos econômicos internacionais, que cumpriram o desejo humanitário de industrializar as ex-colônias.", "grupos terroristas organizados em rede, que responderam à formação de governos teocráticos."],
    r: 2, exp: "No contexto da Guerra Fria, EUA e URSS disputaram influência nos novos países, e houve guerras (como a do Vietnã e a da Coreia)." },

  // ---------- QUÍMICA ----------
  { id: "2021-36", ano: 2021, n: 36, tema: "Química", d: 2,
    ctx: "Informações de um produto químico: o contato de vapores de propeno com a pele pode causar queimaduras por congelamento. Ponto de fusão (PF) = −185 °C. Ponto de ebulição (PE) = −48 °C.",
    q: "A fórmula molecular e o estado físico a −156 °C e a −35 °C do produto químico mencionado são, respectivamente,",
    a: ["C₃H₆, sólido e gasoso.", "C₃H₈, líquido e gasoso.", "C₃H₆, líquido e líquido.", "C₃H₈, líquido e sólido.", "C₃H₆, líquido e gasoso."],
    r: 4, exp: "Propeno tem 3 carbonos e uma dupla ligação: C₃H₆. A −156 °C (acima do PF e abaixo do PE) é líquido. A −35 °C (acima do PE de −48 °C) é gasoso." },

  { id: "2021-37", ano: 2021, n: 37, tema: "Química", d: 1,
    ctx: "Considere o íon do elemento químico hipotético A: massa 134, número atômico 52, carga 2+ (¹³⁴₅₂A²⁺).",
    q: "As quantidades de prótons, nêutrons e elétrons do íon apresentado são, respectivamente,",
    a: ["52, 82 e 54.", "52, 82 e 50.", "52, 134 e 50.", "54, 84 e 134.", "54, 84 e 54."],
    r: 1, exp: "Prótons = Z = 52. Nêutrons = 134 − 52 = 82. Como o íon é 2+ (perdeu 2 elétrons), elétrons = 52 − 2 = 50." },

  { id: "2021-38", ano: 2021, n: 38, tema: "Química", d: 3,
    ctx: "O dióxido de enxofre (SO₂) é um gás produzido pela combustão do enxofre. Sua oxidação produz o trióxido de enxofre (SO₃), que, em contato com água, forma o ácido sulfúrico (H₂SO₄).",
    q: "Com relação aos compostos e às estruturas moleculares mencionadas, pode-se afirmar que:",
    a: ["na estrutura do SO₂, o enxofre possui dois pares de elétrons não compartilhados.", "na estrutura do H₂SO₄ há apenas um hidrogênio ionizável.", "o composto SO₃ é classificado como um óxido básico.", "o composto H₂SO₄ é classificado como um hidrácido.", "a molécula do SO₃ é apolar, apresentando momento dipolar igual a zero."],
    r: 4, exp: "O SO₃ é trigonal plana e simétrica: os dipolos S=O se anulam, e a molécula é apolar. (A) o S do SO₂ tem 1 par não ligante; (B) o H₂SO₄ tem 2 H ionizáveis; (C) o SO₃ é óxido ácido; (D) é oxiácido, e não hidrácido." },

  { id: "2021-39", ano: 2021, n: 39, tema: "Química", d: 2,
    ctx: "A reação de síntese mais utilizada para formar o metanol (CH₃OH) ocorre entre os gases CO e H₂. Equação não balanceada: CO (g) + H₂ (g) → CH₃OH (ℓ). Em uma reação com 100% de rendimento, foram empregados 25 g de hidrogênio gasoso e quantidade suficiente de monóxido de carbono. (Massas molares: H = 1; C = 12; O = 16 g/mol)",
    q: "A quantidade máxima de metanol produzida nessa síntese é igual a",
    a: ["50 g.", "100 g.", "200 g.", "400 g.", "800 g."],
    r: 2, exp: "CO + 2 H₂ → CH₃OH. 25 g de H₂ = 12,5 mol (massa molar 2 g/mol). Metanol = 12,5/2 = 6,25 mol · 32 g/mol = 200 g." },

  { id: "2021-40", ano: 2021, n: 40, tema: "Química", d: 3,
    ctx: "Equilíbrio químico que envolve a formação do gás cloreto de hidrogênio (HCl):\n2 Cl₂ (g) + 2 H₂O (g) + 113 kJ ⇌ 4 HCl (g) + O₂ (g)",
    q: "Considerando o equilíbrio químico mencionado, para aumentar o rendimento do gás cloreto de hidrogênio nesse sistema é preciso",
    a: ["reduzir a quantidade de gás cloro no sistema.", "aumentar a temperatura do sistema.", "adicionar uma maior quantidade de gás oxigênio no sistema.", "adicionar um catalisador no sistema.", "aumentar a pressão sobre o sistema."],
    r: 1, exp: "O calor (113 kJ) está do lado dos reagentes: a reação direta é endotérmica. Aumentar a temperatura desloca o equilíbrio no sentido endotérmico, formando mais HCl. Catalisador não desloca equilíbrio; aumentar a pressão favorece o lado com menos mols de gás (reagentes: 4 mol contra 5 mol)." },

  { id: "2021-41", ano: 2021, n: 41, tema: "Química", d: 2, img: ["2021-41.png"],
    ctx: "Os antialérgicos (anti-histamínicos) são substâncias que bloqueiam a histamina, que atua em processos alérgicos. A fórmula estrutural de um anti-histamínico mostra dois anéis benzênicos ligados a um mesmo carbono, que também se liga a um oxigênio (–O–) ligado a uma cadeia com um nitrogênio ligado a três carbonos.",
    q: "Nessa estrutura, podem-se identificar as funções orgânicas",
    a: ["amina e éter.", "aldeído e éter.", "amina e cetona.", "aldeído e amida.", "amina e éster."],
    r: 0, exp: "O nitrogênio ligado só a carbonos é amina (terciária). O oxigênio entre dois carbonos (C–O–C) é éter. Não há grupo carbonila (C=O)." },

  { id: "2021-42", ano: 2021, n: 42, tema: "Química", d: 2,
    ctx: "Equação da transformação geral dos gases: (P₁ · V₁)/T₁ = (P₂ · V₂)/T₂. À temperatura de 300 K, uma amostra de gás hidrogênio ocupa um volume de 0,15 L à pressão de 0,5 atm.",
    q: "O volume aproximado ocupado por essa amostra a 293 K em uma transformação isobárica é",
    a: ["107 mL.", "146 mL.", "153 mL.", "500 mL.", "586 mL."],
    r: 1, exp: "Isobárica (P constante): V₁/T₁ = V₂/T₂ → V₂ = 0,15 · 293/300 = 0,1465 L ≈ 146 mL." },

  // ---------- BIOLOGIA ----------
  { id: "2021-43", ano: 2021, n: 43, tema: "Biologia", d: 1, img: ["2021-43.png"],
    ctx: "A figura ilustra quatro níveis de organização em ecologia: população (um pinguim e seus semelhantes), comunidade (vários animais), ecossistema (comunidade mais o ambiente) e biosfera (planeta Terra).",
    q: "Na ecologia, os níveis superiores agregam os níveis inferiores a novos componentes. Essa organização está conceituada na formação",
    a: ["de uma população, que é composta por diferentes espécies de uma comunidade.", "de uma comunidade, que é o conjunto de todos os seres vivos de um ecossistema.", "de um ecossistema, que é definido pelos fatores abióticos ambientais.", "da biosfera, que consiste na atmosfera do planeta Terra.", "dos fatores bióticos, que correspondem aos fatores químicos e físicos do ecossistema."],
    r: 1, exp: "Comunidade = todas as populações (seres vivos) de um ecossistema. (A) população é de uma só espécie; (C) o ecossistema inclui bióticos e abióticos; (D) a biosfera abrange todos os ecossistemas; (E) fatores bióticos são os seres vivos." },

  { id: "2021-44", ano: 2021, n: 44, tema: "Biologia", d: 2, img: ["2021-44.png"],
    ctx: "O gráfico representa uma reação metabólica que ocorre na presença (curva azul) e na ausência (curva vermelha) de uma molécula orgânica X presente nos seres vivos. Com X, a energia de ativação é menor, e a energia total liberada pela reação é a mesma.",
    q: "A interpretação do gráfico permite afirmar que a molécula orgânica X é",
    a: ["um colesterol de alta densidade.", "um carboidrato com ação digestiva.", "um polinucleotídeo com ação replicante.", "um peptídeo com ação catalisadora.", "um hormônio esteroide."],
    r: 3, exp: "Algo que reduz a energia de ativação sem alterar o saldo energético é um catalisador. Nos seres vivos, os catalisadores são as enzimas, que são proteínas (cadeias de peptídeos)." },

  { id: "2021-45", ano: 2021, n: 45, tema: "Biologia", d: 2,
    ctx: "As plantas superiores absorvem água e nutrientes minerais através dos pelos radiculares localizados no tecido epidérmico.",
    q: "Para que exista o fluxo de água do solo para os tecidos internos da raiz vegetal é preciso",
    a: ["diferentes concentrações osmóticas entre o solo e os tecidos da raiz.", "gasto de energia, na forma de ATP, para o bombeamento do solvente.", "concentrações osmóticas idênticas entre os meios intracelular e extracelular.", "a presença de proteínas com canais internos nas células dos pelos radiculares.", "que os estômatos localizados nos pelos radiculares estejam abertos."],
    r: 0, exp: "A água entra por osmose, de modo passivo, do meio menos concentrado (solo) para o mais concentrado (células da raiz). Sem diferença de concentração, não há fluxo. Estômatos ficam nas folhas." },

  { id: "2021-46", ano: 2021, n: 46, tema: "Biologia", d: 2, img: ["2021-46.png"],
    ctx: "Esquema do dogma central da biologia molecular: DNA → (replicação, de volta ao DNA) → (transcrição) RNA → (tradução) Proteína, formada por aminoácidos.",
    q: "Os conceitos ilustrados no esquema permitem afirmar corretamente que, a partir",
    a: ["de uma molécula de proteína, é possível determinar exatamente a molécula de DNA que a codificou.", "de uma molécula de RNA, uma molécula DNA é produzida diretamente, pelo processo de replicação.", "de uma molécula de DNA, uma molécula de proteína é produzida diretamente, pelo processo de tradução.", "de uma das fitas da molécula de DNA, uma molécula de RNA é produzida, pelo processo de transcrição.", "de uma molécula de proteína, moléculas de aminoácidos são produzidas, pelo processo de tradução."],
    r: 3, exp: "A transcrição usa uma das fitas do DNA como molde para produzir RNA. (A) o código é degenerado (vários códons para o mesmo aminoácido); (C) a proteína vem do RNA, não direto do DNA; (E) tradução monta proteínas a partir de aminoácidos." },

  { id: "2021-47", ano: 2021, n: 47, tema: "Biologia", d: 1,
    ctx: "Excreção é a eliminação pelo organismo de substâncias tóxicas geradas pelo metabolismo. A eliminação de gás carbônico é um modo de excreção realizado pelo sistema respiratório, por meio dos pulmões.",
    q: "Porém, o sistema excretor humano relaciona-se mais diretamente",
    a: ["à eliminação das fezes após a absorção de nutrientes.", "à quebra de toxinas realizada pelo fígado.", "à ação dos leucócitos no combate aos microrganismos invasores.", "à produção do suor para regulação térmica do organismo.", "à filtração do sangue realizada pelos néfrons renais."],
    r: 4, exp: "O sistema urinário (rins e néfrons) filtra o sangue e elimina ureia e outras excretas. Fezes são egestão, e não excreção." },

  { id: "2021-48", ano: 2021, n: 48, tema: "Biologia", d: 3,
    ctx: "As condições genéticas relacionadas ao par de alelos responsável para que uma criança apresente eritroblastose são: a mãe apresentar genótipo recessivo; o pai e a criança apresentarem genótipo dominante.",
    q: "Uma outra condição necessária, não relacionada à genética, para a manifestação dessa doença é a sensibilização imunológica",
    a: ["da criança durante a gestação.", "do pai e da mãe, anteriormente à gestação da criança.", "da mãe, anteriormente à gestação da criança.", "da criança, posteriormente ao parto.", "da mãe, posteriormente ao parto e durante a amamentação."],
    r: 2, exp: "Mãe Rh⁻ precisa já ter produzido anticorpos anti-Rh, por exposição ao sangue Rh⁺ em gestação ou parto anterior (ou transfusão), antes da gestação da criança afetada." },

  { id: "2021-49", ano: 2021, n: 49, tema: "Biologia", d: 3, img: ["2021-49.png"],
    ctx: "As figuras I e II representam as relações de parentesco evolutivo entre três grupos de organismos: X, Y e Z. Na figura I, X e Y se ligam a um ramo comum, que depois se liga a Z. Na figura II, Y e X formam um par unido por um ramo comum, e Z se une a eles depois.",
    q: "A interpretação correta das figuras I e II permite afirmar que, do ponto de vista evolutivo,",
    a: ["ambas representam os mesmos níveis de parentesco entre os grupos.", "em ambas, os grupos X, Y e Z têm entre si o mesmo nível de parentesco.", "em I, o grupo Y tem com X o mesmo nível de parentesco que tem com Z.", "em II, Z é ancestral de X e Y e tem com estes o mesmo nível de parentesco.", "em I, o grupo Y tem maior parentesco com Z do que com X, mas em II o parentesco entre X e Z é maior."],
    r: 0, exp: "Nas duas árvores, X e Y são mais próximos entre si e Z é o grupo mais distante: ((X,Y),Z). A ordem em que os grupos aparecem nas pontas não altera o parentesco." },

  // ---------- FÍSICA ----------
  { id: "2021-50", ano: 2021, n: 50, tema: "Física", d: 1,
    ctx: "A blindagem do tipo III-A acrescenta cerca de 200 kg à massa final do carro. O motor de um automóvel de massa 1 000 kg produz originalmente uma aceleração máxima de 2,4 m/s².",
    q: "Após o automóvel ter sua massa aumentada por receber essa blindagem, o motor produzirá no automóvel, sob as mesmas condições anteriores, uma aceleração máxima de",
    a: ["1,2 m/s².", "1,4 m/s².", "1,6 m/s².", "2,0 m/s².", "2,9 m/s²."],
    r: 3, exp: "A força do motor é F = 1 000 · 2,4 = 2 400 N. Com 1 200 kg: a = 2 400/1 200 = 2,0 m/s²." },

  { id: "2021-51", ano: 2021, n: 51, tema: "Física", d: 3, img: ["2021-51.png"],
    ctx: "Durante um jogo de futebol, o goleiro faz uma defesa desviando a trajetória da bola de um ângulo de 90° em relação à direção inicial do movimento. Desprezando a ação da gravidade, a massa da bola é de 450 g, a velocidade antes de atingir a mão do goleiro era de 16 m/s e depois da defesa, de 12 m/s.",
    q: "A intensidade do impulso recebido pela bola durante o contato com a mão do goleiro foi de",
    a: ["1,5 N·s.", "4,5 N·s.", "6,3 N·s.", "9,0 N·s.", "12,6 N·s."],
    r: 3, exp: "O impulso é a variação do vetor quantidade de movimento. Como as velocidades são perpendiculares, |Δv| = √(16² + 12²) = 20 m/s. I = m · |Δv| = 0,45 · 20 = 9,0 N·s." },

  { id: "2021-52", ano: 2021, n: 52, tema: "Física", d: 2,
    ctx: "Por volta do dia 21 de março, para um observador na superfície da Terra, o Sol descreve um movimento circular uniforme sobre a linha do Equador. Num determinado instante, o Sol está verticalmente posicionado sobre a cidade de Macapá. A cidade de São Gabriel da Cachoeira, assim como Macapá, está sobre a linha do Equador, 15° a oeste de Macapá.",
    q: "O Sol estará posicionado verticalmente sobre São Gabriel da Cachoeira após",
    a: ["15 minutos.", "20 minutos.", "30 minutos.", "40 minutos.", "60 minutos."],
    r: 4, exp: "A Terra gira 360° em 24 h, ou seja, 15° por hora. Percorrer 15° leva 1 hora = 60 minutos." },

  { id: "2021-53", ano: 2021, n: 53, tema: "Física", d: 3,
    ctx: "As placas de gelo da Groenlândia e da Antártica, juntas, perderam aproximadamente 80 bilhões de toneladas de gelo por ano na década de 1990 e aproximadamente 470 bilhões de toneladas por ano na década de 2010. Calor latente de fusão do gelo: 80 cal/g.",
    q: "A quantidade de calor necessária para produzir a diferença de gelo fundido por ano nas duas regiões juntas entre as décadas de 1990 e 2010 foi, aproximadamente, de",
    a: ["6,4 × 10¹⁸ cal.", "9,6 × 10¹⁸ cal.", "3,1 × 10¹⁹ cal.", "3,8 × 10¹⁹ cal.", "4,4 × 10¹⁹ cal."],
    r: 2, exp: "Diferença: 470 − 80 = 390 bilhões de toneladas = 3,9 × 10¹¹ t = 3,9 × 10¹⁷ g. Q = m · L = 3,9 × 10¹⁷ · 80 ≈ 3,1 × 10¹⁹ cal." },

  { id: "2021-54", ano: 2021, n: 54, tema: "Física", d: 3,
    ctx: "Imersa no ar, uma lente biconvexa de vidro é convergente e tem distância focal igual a f. Índices de refração absolutos: ar = 1,00; vidro = 1,62; água = 1,34.",
    q: "Se essa lente for imersa em água, ela se comportará como uma lente",
    a: ["convergente e de distância focal maior que f.", "convergente e de distância focal menor que f.", "convergente e de distância focal igual a f.", "divergente e de distância focal igual a –f.", "divergente e de distância focal menor que –f."],
    r: 0, exp: "A lente continua convergente porque o vidro (1,62) é mais refringente que a água (1,34). Mas o contraste de índices diminui (1,62/1,34 − 1 ≈ 0,21, contra 0,62 no ar), então ela converge menos e a distância focal aumenta." },

  { id: "2021-55", ano: 2021, n: 55, tema: "Física", d: 2,
    ctx: "As emissoras AM operam em frequências entre 535 kHz e 1 705 kHz, enquanto o intervalo das emissoras FM está entre 88 MHz e 108 MHz.",
    q: "Quando se propagam no ar, as ondas eletromagnéticas emitidas pelas emissoras AM, em comparação com as emitidas pelas emissoras FM, têm",
    a: ["comprimentos de onda e períodos maiores.", "comprimentos de onda e períodos menores.", "maiores comprimentos de onda e menores períodos.", "maiores comprimentos de onda e períodos iguais.", "menores comprimentos de onda e maiores períodos."],
    r: 0, exp: "AM tem frequência menor (kHz contra MHz). Como λ = c/f e T = 1/f, quem tem menor frequência tem maior comprimento de onda e maior período." },

  { id: "2021-56", ano: 2021, n: 56, tema: "Física", d: 2, img: ["2021-56.png"],
    ctx: "O gráfico mostra a resistência elétrica de um resistor dependente da luz (LDR) em função da luminosidade que incide sobre ele: a resistência diminui quando a luminosidade aumenta (de baixa para alta).",
    q: "Em um LDR submetido a uma diferença de potencial constante, quando a luminosidade incidente sobre ele é acrescida dentro da mesma faixa apresentada no gráfico, a intensidade da corrente que o atravessa e a potência por ele dissipada",
    a: ["diminuem.", "aumentam.", "aumenta e permanece constante, respectivamente.", "aumenta e diminui, respectivamente.", "diminui e aumenta, respectivamente."],
    r: 1, exp: "Mais luz → menor resistência R. Com U constante, i = U/R aumenta e P = U²/R também aumenta." },

  // =====================================================================
  // PROVA 2º SEMESTRE 2022 (22/05/2022) — Licenciaturas, Computação e Negócios e Produção
  // =====================================================================

  // ---------- MATEMÁTICA ----------
  { id: "2022-01", ano: 2022, n: 1, tema: "Matemática", d: 1,
    q: "Uma papelaria comprou determinado número de calculadoras, dentre o qual 30% eram calculadoras científicas, 15% eram calculadoras financeiras e as 22 calculadoras restantes só efetuavam operações básicas. O número de calculadoras científicas compradas por essa papelaria foi",
    a: ["6.", "8.", "10.", "12.", "14."],
    r: 3, exp: "As básicas são 100% − 30% − 15% = 55% do total. 55% = 22 → total = 40. Científicas: 30% de 40 = 12." },

  { id: "2022-02", ano: 2022, n: 2, tema: "Matemática", d: 1,
    q: "Uma universidade oferece um total de 160 vagas para cursos de especialização nas áreas de negócios e de produção. Após o preenchimento de todas essas vagas, a razão do número de participantes do curso de produção para o número de participantes do curso de negócios, nessa ordem, era 3/5. O número de participantes do curso de negócios superou o número de participantes do curso de produção em",
    a: ["40 participantes.", "35 participantes.", "30 participantes.", "25 participantes.", "20 participantes."],
    r: 0, exp: "Produção : negócios = 3 : 5, em 8 partes. Cada parte = 160/8 = 20. Produção = 60, negócios = 100. Diferença = 40." },

  { id: "2022-03", ano: 2022, n: 3, tema: "Matemática", d: 1,
    q: "Em uma palestra, no auditório de uma faculdade, estavam presentes 240 pessoas, dentre as quais 1/8 era professor da própria faculdade, 18 eram professores de outras faculdades e as demais presentes eram alunos. Sorteando-se aleatoriamente uma dessas pessoas presentes, a probabilidade de ela ser um aluno é de",
    a: ["90%.", "85%.", "80%.", "75%.", "70%."],
    r: 2, exp: "Professores da faculdade: 240/8 = 30. Professores de fora: 18. Alunos = 240 − 48 = 192. 192/240 = 0,8 = 80%." },

  { id: "2022-04", ano: 2022, n: 4, tema: "Matemática", d: 2,
    q: "Considere as funções f(x) = x − k e g(x) = x² − 4x + k, em que k é um número real. Sabendo que f(−1) = 3 · g(1), o valor de g(k) é igual a",
    a: ["−3.", "−2.", "−1.", "1.", "2."],
    r: 1, exp: "f(−1) = −1 − k e g(1) = 1 − 4 + k = k − 3. Então −1 − k = 3(k − 3) → −1 − k = 3k − 9 → k = 2. g(2) = 4 − 8 + 2 = −2." },

  { id: "2022-05", ano: 2022, n: 5, tema: "Matemática", d: 1,
    q: "Uma pessoa fez uma compra no valor de R$ 1.200,00 sob as seguintes condições: o pagamento seria feito de uma só vez 2 meses após o ato da compra e ao seu valor inicial seria acrescida taxa de juros simples. Sabendo que o valor pago, após esses 2 meses, foi de R$ 1.236,00, a taxa mensal de juros simples cobrada foi igual a",
    a: ["3,5%.", "3,0%.", "2,5%.", "2,0%.", "1,5%."],
    r: 4, exp: "Juros = 1 236 − 1 200 = 36. J = C · i · t → 36 = 1 200 · i · 2 → i = 0,015 = 1,5% ao mês." },

  { id: "2022-06", ano: 2022, n: 6, tema: "Matemática", d: 2,
    q: "A soma dos 5 primeiros termos de uma progressão aritmética é 65. Sabendo que o 5º termo é 19, o valor do 1º termo dessa progressão é",
    a: ["6.", "7.", "8.", "9.", "10."],
    r: 1, exp: "S₅ = (a₁ + a₅) · 5/2 = 65 → a₁ + 19 = 26 → a₁ = 7." },

  { id: "2022-07", ano: 2022, n: 7, tema: "Matemática", d: 3, img: ["2022-07.png"],
    ctx: "Considere um quadrado de lado 6 cm, cujas diagonais se intersectam no ponto P (o centro do quadrado). Considere também os retângulos PQRS e ABRC, ambos de lados paralelos aos lados do quadrado. Na figura, PQRS mede 10 cm de largura e 8 cm de altura, e o ponto A é o vértice do quadrado.",
    q: "A área do retângulo ABRC, destacado na figura, é igual a",
    a: ["50 cm².", "45 cm².", "40 cm².", "35 cm².", "30 cm²."],
    r: 3, exp: "P é o centro do quadrado, então A (vértice inferior direito) fica 3 cm à direita e 3 cm abaixo de P. O retângulo ABRC tem largura 10 − 3 = 7 cm e altura 8 − 3 = 5 cm. Área = 7 · 5 = 35 cm²." },

  { id: "2022-08", ano: 2022, n: 8, tema: "Matemática", d: 1,
    q: "Um estudante comprou três livros, um de álgebra, um de cálculo e um de geometria, pagando o total de R$ 240,00. Sabendo que o livro de cálculo custou R$ 40,00 a menos do que a soma dos valores dos outros dois livros, então, o valor do livro de cálculo foi",
    a: ["R$ 100,00.", "R$ 120,00.", "R$ 140,00.", "R$ 160,00.", "R$ 180,00."],
    r: 0, exp: "Sejam C o cálculo e S a soma dos outros: C = S − 40 e C + S = 240. Somando: 2C = 200 → C = 100." },

  { id: "2022-09", ano: 2022, n: 9, tema: "Matemática", d: 2, img: ["2022-09.png"],
    ctx: "Determinado alimento é vendido em caixas com a forma de um prisma reto de base retangular, de medidas internas 5 cm, 20 cm e 30 cm. O alimento ocupa 80% da capacidade total da caixa, e uma pessoa utiliza 70 cm³ dele no preparo de uma torta.",
    q: "O número máximo de tortas que poderão ser feitas com o conteúdo de uma caixa desse produto é",
    a: ["42.", "40.", "38.", "36.", "34."],
    r: 4, exp: "Volume da caixa: 5 · 20 · 30 = 3 000 cm³. Alimento: 80% = 2 400 cm³. 2 400/70 ≈ 34,3, então são 34 tortas inteiras." },

  { id: "2022-10", ano: 2022, n: 10, tema: "Matemática", d: 2,
    q: "Uma loja de produtos para cães e gatos vendeu, em média, 32 sacos de ração nos últimos 5 dias. Considerando-se somente os três dias com maior número de sacos de ração vendidos, a média diária foi de 36 sacos. A média diária de sacos de ração vendidos nos outros dois dias foi",
    a: ["34.", "30.", "26.", "22.", "18."],
    r: 2, exp: "Total nos 5 dias: 5 · 32 = 160. Nos três melhores: 3 · 36 = 108. Os outros dois: 160 − 108 = 52, média 26." },

  // ---------- LÍNGUA PORTUGUESA E LITERATURA ----------
  { id: "2022-11", ano: 2022, n: 11, tema: "Língua Portuguesa", d: 2, img: ["2022-11.png"],
    ctx: "Tirinha de Quino (Mafalda). 1º quadrinho: Mafalda dança com a música “I’m looking through you, where did you go…”, e o amigo diz: “Os Beatles!” 2º: “Como é que você pode gostar deles se não entende o que dizem?” / “E daí?” 3º: “Meio mundo gosta de cachorro e até hoje ninguém sabe o que quer dizer au au.”",
    q: "No terceiro quadrinho, para responder ao questionamento do amigo, a personagem",
    a: ["usa um argumento de autoridade.", "prova que entende a letra da música.", "reprova o gosto musical do amigo.", "recorre a uma comparação.", "sugere que mudem de assunto."],
    r: 3, exp: "Mafalda compara a música dos Beatles (que ela não entende) ao latido dos cachorros: gosta-se de algo sem entender." },

  { id: "2022-12", ano: 2022, n: 12, tema: "Língua Portuguesa", d: 2, t: "duvivier",
    q: "O emprego da “hipérbole”, ou seja, o exagero intencional na expressão de uma ideia, pode produzir um efeito cômico, como ocorre no trecho:",
    a: ["“cantar é mais do que lembrar” (3º parágrafo)", "“forçando toda uma geração de poetas à aposentadoria” (2º parágrafo)", "“o antropólogo Claude Lévi-Strauss detestou a baía de Guanabara” (3º parágrafo)", "“Não viu sua musa ser pintada” (4º parágrafo)", "“Estar vivo ao mesmo tempo que Caetano nos dá essa sorte” (4º parágrafo)"],
    r: 1, exp: "Dizer que um verso aposenta ‘toda uma geração de poetas’ é um exagero bem-humorado." },

  { id: "2022-13", ano: 2022, n: 13, tema: "Língua Portuguesa", d: 2, t: "duvivier",
    ctx: "“Uma mesma canção do Caetano Veloso poderá ninar seus filhos, orientar seu Carnaval e ASSOMBRAR VOCÊ pelo resto da sua existência.” (1º parágrafo)",
    q: "Mantendo a coerência e a coesão, sem prejuízo para o sentido do texto, o trecho destacado pode ser substituído por:",
    a: ["assombrar-se.", "assombrar-nos.", "assombrá-lo.", "assombrar-me.", "assombrá-las."],
    r: 2, exp: "‘Você’ é 3ª pessoa e objeto direto. Seu pronome oblíquo é ‘o’. Após verbo no infinitivo terminado em r, o ‘r’ cai e o pronome vira ‘lo’: assombrá-lo." },

  { id: "2022-14", ano: 2022, n: 14, tema: "Língua Portuguesa", d: 2, t: "duvivier",
    ctx: "Depreende-se do segundo parágrafo que o verso “tropeçavas nos astros, desastrada”, de Caetano Veloso, retoma o da canção “Chão de estrelas”, de Orestes Barbosa, “tu pisavas nos astros, distraída”.",
    q: "Esse recurso é um exemplo de",
    a: ["sinonímia: relação que se estabelece entre duas palavras com significados iguais ou semelhantes.", "intertextualidade: influência direta ou indireta de um ou mais textos preexistentes na elaboração de um novo texto.", "plágio: apresentação de imitação ou cópia de obra intelectual ou artística alheia como sendo de própria autoria.", "citação: reprodução da obra escrita de alguém (geralmente com indicação do autor original), como reforço ou abonação daquilo que se quer dizer.", "polissemia: multiplicidade de significados de uma palavra em determinado contexto."],
    r: 1 },

  { id: "2022-15", ano: 2022, n: 15, tema: "Língua Portuguesa", d: 1, t: "duvivier",
    q: "No quarto parágrafo, Gregório Duvivier faz uma reflexão sobre obras de arte. Para ele, uma característica de tais obras seria sua",
    a: ["subjetividade.", "concretude.", "perenidade.", "simplicidade.", "fragilidade."],
    r: 2, exp: "‘Uma coisa bela é uma alegria pra sempre’, ‘tu ficarás’, ‘coisas eternas’: as obras de arte duram, ou seja, são perenes." },

  { id: "2022-16", ano: 2022, n: 16, tema: "Língua Portuguesa", d: 2, t: "consideracao",
    q: "Nesse trecho do poema, o eu lírico",
    a: ["emprega a primeira pessoa como modo de expressar de maneira clara suas ideias e sentimentos mais íntimos.", "tenta convencer o leitor de que a linguagem poética requer rimas ricas, ou seja, que ocorrem entre palavras de classes gramaticais diferentes.", "afirma que a escolha da palavra exata é fundamental para a construção de um bom poema.", "defende que o som das palavras é um elemento pouco importante, que pode ser desconsiderado na elaboração de um poema.", "refere-se à estratégia de construção do próprio poema, afirmando a liberdade de criação artística."],
    r: 4, exp: "O poema fala sobre como escrever poesia (metalinguagem): o poeta rima ‘sono’ com ‘carne’ e defende que as palavras são livres." },

  { id: "2022-17", ano: 2022, n: 17, tema: "Língua Portuguesa", d: 1, t: "consideracao",
    q: "A palavra “incorrespondente” (2º verso) é formada com o uso do prefixo “in”, que tem sentido de negação, como ocorre na palavra",
    a: ["íntimo.", "intermunicipal.", "intrauterino.", "insatisfatório.", "injetável."],
    r: 3, exp: "‘Insatisfatório’ = não satisfatório. Em ‘íntimo’, ‘intermunicipal’, ‘intrauterino’ e ‘injetável’ o ‘in’ não é prefixo de negação." },

  { id: "2022-18", ano: 2022, n: 18, tema: "Língua Portuguesa", d: 2, t: "consideracao",
    ctx: "Nos versos “Rimarei com a palavra carne” (3º verso) / “ou qualquer outra, QUE todas me convêm” (4º verso), observe a palavra destacada.",
    q: "A palavra destacada (que) pode ser substituída, sem prejuízo para o sentido, por:",
    a: ["pois.", "portanto.", "assim.", "contudo.", "como."],
    r: 0, exp: "‘Que’ é conjunção explicativa: ‘qualquer outra, pois todas me convêm’." },

  { id: "2022-19", ano: 2022, n: 19, tema: "Língua Portuguesa", d: 1, t: "classicismo",
    q: "O texto refere-se ao movimento literário conhecido como",
    a: ["Parnasianismo.", "Classicismo.", "Romantismo.", "Simbolismo.", "Surrealismo."],
    r: 1, exp: "Valorização da Antiguidade greco-latina, imitação dos Antigos, séculos XV a XVII, ligado ao Renascimento: Classicismo." },

  { id: "2022-20", ano: 2022, n: 20, tema: "Língua Portuguesa", d: 2, t: "classicismo",
    ctx: "“TODAVIA, consideravam que a imitação não significava servilismo, cópia elementar” (2º parágrafo)",
    q: "No contexto em que se encontra, o termo destacado introduz uma oração que expressa",
    a: ["oposição.", "comparação.", "tempo.", "condição.", "conclusão."],
    r: 0, exp: "‘Todavia’ é conjunção adversativa: opõe-se à ideia de que imitar é copiar." },

  // ---------- LÍNGUA INGLESA ----------
  { id: "2022-21", ano: 2022, n: 21, tema: "Língua Inglesa", d: 1, t: "nz",
    q: "De acordo com o texto, a Nova Zelândia",
    a: ["planeja fazer um apelo a outros países para que ajudem a controlar a entrada de cigarro por suas fronteiras.", "planeja impor medidas restritivas à venda do cigarro para garantir que os jovens das próximas gerações não comecem a fumar.", "pretende se tornar o primeiro país do mundo a banir completamente a venda de tabaco em seu território.", "planeja imprimir os dizeres “fumar mata” em todos os maços de cigarro fabricados no país.", "pretende lançar uma campanha de alcance nacional para conscientizar a população sobre os malefícios do cigarro."],
    r: 1, exp: "Quem nascer depois de 2008 não poderá comprar cigarro: restrição para que os jovens ‘never start smoking’. Não se trata de banir totalmente a venda." },

  { id: "2022-22", ano: 2022, n: 22, tema: "Língua Inglesa", d: 2, t: "nz",
    q: "No trecho do segundo parágrafo “which will reduce access to tobacco and restrict nicotine levels in cigarettes”, o termo sublinhado (which) refere-se a",
    a: ["“cigarettes”.", "“health experts”.", "“world-leading reforms”.", "“nicotine levels”.", "“less harmful products”."],
    r: 2, exp: "‘The “world-leading” reforms, which will reduce access to tobacco…’: o pronome relativo retoma as reformas." },

  { id: "2022-23", ano: 2022, n: 23, tema: "Língua Inglesa", d: 2, t: "nz",
    q: "No trecho do quarto parágrafo “However, others have warned that the move may create a black market for tobacco”, o termo sublinhado (may) expressa uma",
    a: ["possibilidade.", "obrigação.", "necessidade.", "habilidade.", "suposição."],
    r: 0, exp: "‘May’ indica possibilidade: a medida pode vir a criar um mercado negro." },

  { id: "2022-24", ano: 2022, n: 24, tema: "Língua Inglesa", d: 2, t: "nz",
    q: "O trecho do texto em que se exprime uma opinião é:",
    a: ["“New Zealand will ban the sale of tobacco to its next generation” (1º parágrafo)", "“‘It will help people quit smoking or switch to less harmful products’” (2º parágrafo)", "“The crackdown has been met with mixed reactions” (3º parágrafo)", "“Anyone born after 2008 will not be able to buy cigarettes” (1º parágrafo)", "“‘Public are asking how they’re getting these smokes’” (3º parágrafo)"],
    r: 1, exp: "A fala do professor é uma avaliação (‘ajudará as pessoas a parar de fumar’). Os demais trechos relatam fatos." },

  { id: "2022-25", ano: 2022, n: 25, tema: "Língua Inglesa", d: 1, img: ["2022-25.png"],
    ctx: "Tirinha: um senhor diz ao menino Nelson: “Nelson, you’re going to meet people in this life who are hard to like. Everyone you meet is fighting a secret battle that you know nothing about. For instance, I have a scratchy tag on the inside collar of this shirt that is driving me crazy. But you should always be kind, even if it isn’t always easy.”",
    q: "No segundo quadrinho, o homem aconselha o menino a ser sempre",
    a: ["cauteloso.", "humilde.", "sincero.", "gentil.", "corajoso."],
    r: 3, exp: "‘You should always be kind’: gentil." },

  { id: "2022-26", ano: 2022, n: 26, tema: "Língua Inglesa", d: 1, img: ["2022-25.png"],
    q: "A expressão “for instance”, no último quadrinho, foi empregada para introduzir",
    a: ["uma condição.", "um motivo.", "um exemplo.", "uma consequência.", "uma concessão."],
    r: 2, exp: "‘For instance’ = por exemplo." },

  // ---------- HISTÓRIA ----------
  { id: "2022-27", ano: 2022, n: 27, tema: "História", d: 1, img: ["2022-27.png"],
    ctx: "Estátua de São Jorge, esculpida pelo artista Donatello em 1416.",
    q: "Típica do período chamado de Renascimento, essa obra",
    a: ["reproduz a rigidez das esculturas egípcias.", "despreza as características humanas da figura.", "consolida o teocentrismo da cultura medieval.", "expressa uma visão politeísta de mundo.", "retoma valores estéticos da arte greco-romana."],
    r: 4, exp: "O Renascimento retomou o ideal clássico: proporção, naturalismo e valorização do corpo humano, como na escultura grega e romana." },

  { id: "2022-28", ano: 2022, n: 28, tema: "História", d: 2,
    ctx: "“Os reveses para a montagem dos impérios português e espanhol foram inúmeros. A solução encontrada foi transformar o Estado no grande administrador do comércio colonial. Tanto no caso de Portugal como no da Espanha, o Estado assumia a tarefa de organizar não apenas o comércio como também a extração e produção das matérias-primas.” (Janice Theodoro da Silva. Descobrimentos e colonização, 1989. Adaptado)",
    q: "A colonização ibérica na América baseou-se",
    a: ["no monopólio e na exploração do trabalho de indígenas e escravizados africanos.", "na criação de empresas vinculadas à Igreja e na diversificação das exportações.", "no liberalismo alfandegário e na organização de minifúndios com monocultura.", "na ação de companhias privadas mercantis e no estabelecimento da escravidão.", "no livre comércio e na produção de manufaturados para os países europeus."],
    r: 0, exp: "O Estado controlava o comércio (monopólio, pacto colonial) e a produção se apoiava no trabalho compulsório de indígenas e de africanos escravizados." },

  { id: "2022-29", ano: 2022, n: 29, tema: "História", d: 2,
    ctx: "Trecho do romance Tempos Difíceis (Charles Dickens, 1854): “Estêvão inclinou-se sobre o tear, calmo, atento e laborioso. Como todos os homens na floresta de teares, onde trabalhava, Estêvão formava contraste estranho com o rumor, o barulho e a agitação das peças do mecanismo a que fora destinado. Havia centenas de operários na fábrica e a força de centenas de cavalos-vapor. […] O trabalho prosseguiu ao som das sinetas do meio-dia. Novo tropel pelo calçamento. Os teares, as rodas, os operários saíram todos da engrenagem por uma hora.” (Apud Decca e Meneguelo. Fábricas e homens, 1999. Adaptado)",
    q: "No excerto, o escritor Charles Dickens refere-se",
    a: ["à atmosfera saudável aos operários predominante nas fábricas.", "à independência dos operários frente aos instrumentos de produção.", "à progressiva autonomia dos operários a partir da industrialização.", "à rígida rotina dos operários em ambiente dominado pela máquina.", "à regulação do cotidiano dos operários conforme o ritmo da natureza."],
    r: 3, exp: "Barulho, máquinas, luzes, sinetas e horários mostram uma rotina rígida controlada pela fábrica, e não pelo ritmo natural." },

  { id: "2022-30", ano: 2022, n: 30, tema: "História", d: 3,
    ctx: "“Formado inicialmente por profissionais liberais ligados a setores urbanos, o Partido Republicano foi reforçado em 1873 por novos adeptos: fazendeiros paulistas que, descontentes com o que consideravam ser uma política intervencionista do Estado, passaram a engrossar as fileiras de oposição à monarquia. Além do mais, com o predomínio do café na região, São Paulo ia se tornando a província mais rica da União, sem a correspondente representação no Parlamento.” (Schwarcz e Starling. Brasil: uma biografia, 2015. Adaptado)",
    q: "A adesão dos fazendeiros paulistas ao movimento republicano está associada, entre outros fatores,",
    a: ["à demora do imperador em aprovar a abolição da escravidão.", "ao déficit público provocado pelas medidas positivistas de governo.", "à crítica sobre a reduzida autonomia provincial vigente no Império.", "à hegemonia da burguesia industrial na estrutura de poder.", "ao avanço das medidas governamentais para a reforma agrária."],
    r: 2, exp: "O Império era centralizado: as províncias tinham pouca autonomia e pouca representação, mesmo São Paulo sendo a mais rica. Os cafeicultores defendiam o federalismo." },

  { id: "2022-31", ano: 2022, n: 31, tema: "História", d: 2,
    ctx: "“A ideologia fascista surgiu no contexto da crise vivida pelo capitalismo e pela sociedade ocidental após a Primeira Guerra Mundial. Nesse período, tanto a esquerda quanto a direita empreenderam esforços para encontrar soluções para os inconvenientes mais ostensivos da vida política e social do momento. Uma das alternativas encontradas pela direita para resolver tais dilemas foi o fascismo.” (João Fábio Bertonha. Fascismo, nazismo, integralismo, 2000. Adaptado)",
    q: "O contexto que originou os movimentos fascistas no início do século XX foi marcado",
    a: ["pelo fortalecimento dos ideais democráticos.", "pelos efeitos da depressão econômica.", "pelo apogeu dos conflitos da Guerra Fria.", "pelos movimentos de independência colonial.", "pela expansão do comunismo soviético."],
    r: 1, exp: "O fascismo cresceu no pós-guerra e com a crise de 1929 (desemprego, inflação, instabilidade). A Guerra Fria veio depois." },

  { id: "2022-32", ano: 2022, n: 32, tema: "História", d: 2,
    ctx: "“O período do chamado ‘milagre’ estendeu-se de 1969 a 1973, combinando o extraordinário crescimento econômico com taxas relativamente baixas de inflação. O PIB cresceu na média anual 11,2%, tendo seu pico em 1973, com uma variação de 13%.” (Boris Fausto. História do Brasil, 1994)",
    q: "Um dos fatores que propiciou esse “milagre” no Brasil foi",
    a: ["a redução dos gastos públicos com a ampliação do programa de privatizações.", "a política governamental de aumentos salariais acima da inflação.", "a crise internacional do petróleo responsável pelo encarecimento dos insumos.", "a proibição de importação de tecnologia e de bens de produção.", "a disponibilidade de capital estrangeiro para empréstimos e investimentos."],
    r: 4, exp: "Na ditadura militar, a liquidez internacional trouxe empréstimos e investimentos externos. O arrocho salarial e a crise do petróleo (1973) vêm depois ou são contrários ao ‘milagre’." },

  // ---------- GEOGRAFIA ----------
  { id: "2022-33", ano: 2022, n: 33, tema: "Geografia", d: 2, img: ["2022-33.png"],
    ctx: "Gráfico “Insegurança alimentar no Brasil” (% da população), de 2004 a 2020, em três níveis: leve, moderada e grave. Todas as curvas caem até 2013 e sobem depois. Em 2020: leve 31,7%; moderada 12,7%; grave 15,0%. (Bruno Lupion, DW, 2021)",
    q: "Os dados expressos no gráfico estão relacionados com",
    a: ["o aumento da produção e do consumo de alimentos orgânicos.", "a diminuição da demanda internacional por produtos agropecuários.", "o crescimento do Índice de Desenvolvimento Humano da população urbana.", "a ampliação da renda per capita no contexto de pandemia da Covid-19.", "a redução do poder aquisitivo da população brasileira."],
    r: 4, exp: "A insegurança alimentar cresce depois de 2013 e dispara em 2020, no contexto de crise econômica, inflação de alimentos e pandemia, ou seja, com a queda do poder de compra." },

  { id: "2022-34", ano: 2022, n: 34, tema: "Geografia", d: 1,
    q: "O grande fluxo de migrantes nordestinos para a região amazônica, entre o final do século XIX e o início do XX, esteve atrelado à",
    a: ["expansão da produção de soja.", "mineração de bauxita.", "criação da Zona Franca de Manaus.", "economia extrativista da borracha.", "exportação de café."],
    r: 3, exp: "O ciclo da borracha (1879–1912) atraiu nordestinos, muitos fugindo da seca, para os seringais da Amazônia." },

  { id: "2022-35", ano: 2022, n: 35, tema: "Geografia", d: 2, img: ["2022-35.png"],
    ctx: "Ilustração do desenhista Percy Lau: um mapa do Brasil desenhado com cenas típicas de cada região (floresta e ribeirinhos no Norte, sertão e vaqueiros no Nordeste, gado no Sul etc.).",
    q: "Considerando o conceito de regiões homogêneas com a combinação de aspectos naturais, sociais e econômicos que permitem a diferenciação dos lugares, a ilustração pretende",
    a: ["indicar a desconcentração da população.", "criar faixas de transições ecológicas.", "apresentar uma regionalização do espaço brasileiro.", "expor os fluxos de migração interna.", "indicar os impactos da revolução verde."],
    r: 2 },

  { id: "2022-36", ano: 2022, n: 36, tema: "Geografia", d: 3, img: ["2022-36.png"],
    ctx: "Mapas-múndi do potencial de deslizamento (em %, de baixo a alto) em junho e em dezembro. As áreas de maior potencial (amarelo e vermelho) mudam de lugar entre os meses, acompanhando as zonas de chuva.",
    q: "Os mapas demonstram que",
    a: ["no hemisfério sul, os maiores potenciais de deslizamento ocorrem no inverno.", "no hemisfério norte, os maiores potenciais de deslizamento ocorrem em áreas de baixa altitude.", "no hemisfério sul, os maiores potenciais de deslizamento ocorrem no mês de elevado índice pluviométrico.", "no hemisfério norte, existe pouca influência do relevo e do clima no potencial de deslizamento.", "no hemisfério sul, os menores potenciais de deslizamento ocorrem em áreas montanhosas."],
    r: 2, exp: "Deslizamentos dependem de chuva e de relevo inclinado. No hemisfério sul, o potencial é maior em dezembro (verão, mais chuvoso) do que em junho." },

  { id: "2022-37", ano: 2022, n: 37, tema: "Geografia", d: 1,
    ctx: "“Este fenômeno é causado pela presença de poluentes na atmosfera, os quais ocorrem devido à queima dos combustíveis fósseis por veículos e indústrias, principais fontes de óxidos de nitrogênio, enxofre, monóxido de carbono e material particulado em áreas urbanas. Entre os efeitos desse fenômeno está a corrosão de superfícies, o enfraquecimento da vegetação pela limitação de nutrientes e a liberação de compostos no solo, como o alumínio.” (Adaptado)",
    q: "O excerto faz referência ao fenômeno denominado",
    a: ["ilhas de calor.", "La Niña.", "aquecimento global.", "inversão térmica.", "chuva ácida."],
    r: 4, exp: "Óxidos de nitrogênio e de enxofre reagem com a água da atmosfera e formam ácidos, que causam corrosão e empobrecem o solo: chuva ácida." },

  { id: "2022-38", ano: 2022, n: 38, tema: "Geografia", d: 1,
    ctx: "“Trata-se de um serviço de carro sob demanda que permite solicitar os serviços de um motorista particular por meio de um aplicativo em execução nos aparelhos celulares. Esse serviço utiliza um software que envia ao motorista mais próximo a localização do passageiro.”",
    q: "Para o funcionamento do aplicativo descrito no excerto, necessita-se de",
    a: ["mapas políticos.", "aerofotogrametria.", "sistema de posicionamento global.", "perfis topográficos.", "mapas altimétricos."],
    r: 2, exp: "A localização em tempo real de motorista e passageiro vem do GPS (sistema de posicionamento global)." },

  // ---------- QUÍMICA ----------
  { id: "2022-39", ano: 2022, n: 39, tema: "Química", d: 2,
    ctx: "O gás hidrogênio é produzido na reação entre água e carbono: H₂O (g) + C (s) → CO (g) + H₂ (g).",
    q: "Nessa reação, verifica-se que a geometria molecular do reagente gasoso e a polaridade da molécula do produto que é classificado como uma substância simples são, respectivamente,",
    a: ["angular e polar.", "linear e polar.", "piramidal e apolar.", "linear e apolar.", "angular e apolar."],
    r: 4, exp: "O reagente gasoso é a água, que é angular. A substância simples produzida é o H₂ (formada por um só elemento), que é apolar." },

  { id: "2022-40", ano: 2022, n: 40, tema: "Química", d: 2, img: ["2022-40.png"],
    ctx: "O esquema mostra um experimento em que um único reagente, o peróxido de hidrogênio (H₂O₂), forma dois produtos. Certo tempo após o início, o kitassato é aberto rapidamente para a introdução de um ________ sólido, notando-se na proveta um aumento da vazão do gás oxigênio liberado, cuja fórmula molecular é ________, formado a partir da reação de ________ ocorrida no kitassato.",
    q: "As lacunas do texto são preenchidas, respectivamente, por",
    a: ["catalisador; O═O; adição.", "inibidor; O₂; decomposição.", "catalisador; O─O; simples troca.", "catalisador; O₂; decomposição.", "inibidor; O₂; adição."],
    r: 3, exp: "A vazão de gás aumentou, então o sólido é um catalisador (acelera a reação). O gás oxigênio é O₂ (fórmula molecular, e não estrutural). Um reagente que forma dois produtos é uma decomposição (2 H₂O₂ → 2 H₂O + O₂)." },

  { id: "2022-41", ano: 2022, n: 41, tema: "Química", d: 2,
    ctx: "Respiração aeróbica: C₆H₁₂O₆ (s) + 6 O₂ (g) → 6 H₂O (ℓ) + 6 CO₂ (g) + Energia. Massa molar da glicose = 180 g/mol.",
    q: "A massa de sólido consumida na produção de 2,4 mol de dióxido de carbono é igual a:",
    a: ["12,5 g.", "30,0 g.", "72,0 g.", "180,0 g.", "450,0 g."],
    r: 2, exp: "1 mol de glicose gera 6 mol de CO₂. Para 2,4 mol de CO₂ são necessários 2,4/6 = 0,4 mol de glicose. Massa = 0,4 · 180 = 72 g." },

  { id: "2022-42", ano: 2022, n: 42, tema: "Química", d: 1, img: ["2022-42.png"],
    ctx: "A fenilalanina, presente em diversos alimentos, precisa de uma enzima específica para ser processada pelo organismo. Sem ela, acumula-se e provoca a fenilcetonúria. Sua fórmula estrutural tem um grupo carboxila (C(=O)–OH), um grupo NH₂ ligado ao carbono central e um anel benzênico ligado por um CH₂.",
    q: "Na fórmula estrutural da fenilalanina estão presentes as funções orgânicas",
    a: ["cetona e álcool.", "amina e cetona.", "ácido carboxílico e fenol.", "amina e ácido carboxílico.", "amina e fenol."],
    r: 3, exp: "–NH₂ = amina; –COOH = ácido carboxílico. Não há –OH ligado ao anel (fenol)." },

  { id: "2022-43", ano: 2022, n: 43, tema: "Química", d: 3,
    ctx: "Para preparar uma solução de densidade 1,2 g/mL de um determinado sal, dissolve-se 20 g desse composto em 230 g de água.",
    q: "A concentração dessa solução é igual a",
    a: ["80,0 g/L.", "86,0 g/L.", "96,0 g/L.", "110,4 g/L.", "114,0 g/L."],
    r: 2, exp: "Massa da solução = 20 + 230 = 250 g. Volume = 250 / 1,2 ≈ 208,3 mL = 0,2083 L. Concentração = 20 / 0,2083 ≈ 96 g/L." },

  { id: "2022-44", ano: 2022, n: 44, tema: "Química", d: 2,
    ctx: "Substâncias com o elemento cloro: gás cloro (Cl₂), cloreto de sódio (NaCl), hipoclorito de potássio (KClO) e ácido perclórico (HClO₄).",
    q: "Os números de oxidação (Nox) do elemento cloro nessas quatro substâncias são, respectivamente, iguais a",
    a: ["0, −1, +1 e +7.", "−1, −1, +1 e +3.", "−2, −1, +1 e +3.", "0, −7, −1 e +7.", "−1, −7, +3 e +7."],
    r: 0, exp: "Cl₂: substância simples, Nox 0. NaCl: Na é +1, então Cl é −1. KClO: K +1, O −2, logo Cl = +1. HClO₄: H +1, 4 O = −8, logo Cl = +7." },

  // ---------- BIOLOGIA ----------
  { id: "2022-45", ano: 2022, n: 45, tema: "Biologia", d: 2, img: ["2022-45.png"],
    ctx: "A figura ilustra as etapas de uma sucessão ecológica primária, da rocha nua até a floresta. A primeira etapa, denominada ecese, é caracterizada pela presença de líquens, musgos, samambaias e gramíneas.",
    q: "Esses organismos são",
    a: ["capazes de suportar grande variação nas condições ambientais.", "autotróficos e realizam a quimiossíntese ao invés da fotossíntese.", "caracterizados pela rápida capacidade de evolução e especiação.", "vegetais pertencentes ao grupo das angiospermas.", "assexuados e se reproduzem por brotamento."],
    r: 0, exp: "Os pioneiros (espécies colonizadoras) são rústicos e toleram solo pobre, sol forte e variações de temperatura e umidade. A maioria faz fotossíntese, e líquens, musgos e samambaias não são angiospermas." },

  { id: "2022-46", ano: 2022, n: 46, tema: "Biologia", d: 2,
    ctx: "As parasitoses ascaridíase (lombriga), teníase (solitária) e amebíase (ameba) são causadas por agentes etiológicos de diferentes grupos taxonômicos e têm ciclos reprodutivos que diferem em diversos aspectos.",
    q: "No entanto, essas três doenças parasitárias humanas são contraídas devido à",
    a: ["infecção por meio de animais invertebrados vetores.", "contaminação pela ingestão de ovos de vermes intestinais.", "contaminação por ingestão de água com protozoários.", "contaminação pela ingestão de formas infectantes.", "infecção por patógenos que parasitam dois hospedeiros em seus ciclos biológicos."],
    r: 3, exp: "Ascaris (ovos), tênia (cisticerco na carne mal cozida) e ameba (cistos) são adquiridos pela ingestão de formas infectantes, que são diferentes em cada caso (ovos, larvas ou cistos). Nenhuma delas usa vetor." },

  { id: "2022-47", ano: 2022, n: 47, tema: "Biologia", d: 2,
    ctx: "As ligações peptídicas decorrem da reação do grupo carboxila de um aminoácido com o grupo amina de outro aminoácido. Para essa ligação se consumar, é necessária a atuação de enzimas específicas que promovem, ao final do processo, a produção de uma molécula de água.",
    q: "A ocorrência da ligação peptídica está relacionada à",
    a: ["síntese de polissacarídeos.", "duplicação do DNA.", "tradução do RNA mensageiro.", "digestão de proteínas.", "transcrição do RNA transportador."],
    r: 2, exp: "Na tradução, os ribossomos unem aminoácidos por ligações peptídicas (com liberação de água), formando a proteína. A digestão de proteínas é o contrário: as quebra." },

  { id: "2022-48", ano: 2022, n: 48, tema: "Biologia", d: 2, img: ["2022-48.png"],
    ctx: "A fotografia mostra o momento exato da liberação de esporos por uma espécie de cogumelo. Os cogumelos são corpos de frutificação de certas espécies de fungos e são formados a partir de filamentos subterrâneos (hifas), que compõem micélios organizados e emergem para a superfície.",
    q: "Os esporos produzidos e liberados pelos cogumelos",
    a: ["são as sementes dos cogumelos, classificados como vegetais primitivos.", "são estruturas de dispersão que desenvolvem novas hifas.", "indicam que o ciclo de vida do fungo chegou ao seu final.", "caem no solo e se unem para a formação de novos micélios.", "dependem da presença de luz solar para se desenvolverem."],
    r: 1, exp: "Esporos são células de dispersão: ao encontrar condições favoráveis, germinam e formam hifas e um novo micélio. Fungos não são vegetais e não fazem fotossíntese." },

  { id: "2022-49", ano: 2022, n: 49, tema: "Biologia", d: 3, img: ["2022-49.png"],
    ctx: "O heredograma ilustra uma família em que o indivíduo II-3 (uma mulher, símbolo preenchido) manifestou uma rara doença condicionada por apenas um par de alelos autossômicos. Seus pais (I-1 e I-2) e seus irmãos (II-1 e II-2) não são afetados.",
    q: "A análise do heredograma permite afirmar que os alelos que condicionam a doença",
    a: ["apresentam caráter dominante.", "estão ligados ao cromossomo sexual X.", "se manifestam em homozigose.", "se manifestam em heterozigose.", "são influenciados pelo sexo."],
    r: 2, exp: "Dois pais normais tiveram uma filha afetada, então a doença é recessiva (os pais são heterozigotos). Como é autossômica, uma mulher afetada é aa: homozigose." },

  { id: "2022-50", ano: 2022, n: 50, tema: "Biologia", d: 2,
    ctx: "O processo de coevolução é compreendido a partir da interação entre espécies que, ao longo de milhares de anos, evoluem de maneira conjunta em um determinado aspecto, anatômico ou fisiológico. Um exemplo de coevolução são as flores tubulares e os bicos dos beija-flores.",
    q: "Com base nos conceitos evolutivos, afirma-se que",
    a: ["a relação ecológica entre a flor e o beija-flor indica que houve especiação.", "o bico do beija-flor se modificou em função do formato da flor.", "a flor se modificou em função do formato do bico do beija-flor.", "o formato das flores e o do bico do beija-flor são resultantes das mesmas mutações.", "o processo de seleção natural ocorre de forma relacionada na flor e no beija-flor."],
    r: 4, exp: "Na coevolução, a seleção natural age nas duas espécies ao mesmo tempo: cada uma exerce pressão seletiva sobre a outra. As mutações são independentes em cada espécie." },

  // ---------- FÍSICA ----------
  { id: "2022-51", ano: 2022, n: 51, tema: "Física", d: 1,
    q: "Um atleta completou uma corrida de 100 m em 10,0 s. Sabendo que ele percorreu os primeiros 34 m em 4,0 s, a sua velocidade média no trecho restante dessa corrida foi de",
    a: ["10,0 m/s.", "10,5 m/s.", "11,0 m/s.", "11,5 m/s.", "12,0 m/s."],
    r: 2, exp: "Trecho restante: 100 − 34 = 66 m em 10 − 4 = 6 s. v = 66/6 = 11 m/s." },

  { id: "2022-52", ano: 2022, n: 52, tema: "Física", d: 2,
    ctx: "Ao flutuar nas águas de um lago, certa canoa, quando desocupada, fica sujeita à ação de uma força de empuxo de intensidade igual a 400 N. Aceleração da gravidade: 10 m/s².",
    q: "Quando essa mesma canoa é ocupada por duas pessoas de 70 kg cada uma e flutua nas águas desse mesmo lago, ela sofre a ação de uma força de empuxo de intensidade igual a",
    a: ["540 N.", "1100 N.", "1400 N.", "1800 N.", "5400 N."],
    r: 3, exp: "Flutuando, o empuxo é igual ao peso. Peso da canoa = 400 N. Pessoas: 2 · 70 · 10 = 1 400 N. Empuxo = 400 + 1 400 = 1 800 N." },

  { id: "2022-53", ano: 2022, n: 53, tema: "Física", d: 1,
    q: "Na parte final de um salto de paraquedas, com este já aberto, o paraquedista desce com velocidade constante. Durante essa parte da descida, a energia potencial gravitacional do paraquedista",
    a: ["permanece constante e a sua energia cinética aumenta.", "aumenta e a sua energia cinética permanece constante.", "aumenta e a sua energia cinética diminui.", "diminui e a sua energia cinética permanece constante.", "diminui e a sua energia cinética aumenta."],
    r: 3, exp: "Ele desce, então a altura e a energia potencial diminuem. A velocidade é constante, então a energia cinética não muda. A energia perdida vira calor, por causa da resistência do ar." },

  { id: "2022-54", ano: 2022, n: 54, tema: "Física", d: 2,
    ctx: "Em um local ao nível do mar, um bloco metálico, a 50 °C, foi colocado no interior de um calorímetro contendo certa massa de gelo a −10 °C. Quando o sistema atingiu o equilíbrio térmico, observou-se que no interior do calorímetro havia água no estado líquido, gelo e o bloco metálico.",
    q: "A temperatura de equilíbrio desse sistema foi de",
    a: ["−5,0 °C.", "0,0 °C.", "20 °C.", "25 °C.", "30 °C."],
    r: 1, exp: "Gelo e água coexistindo ao nível do mar: o sistema está em mudança de fase, no ponto de fusão do gelo, a 0 °C." },

  { id: "2022-55", ano: 2022, n: 55, tema: "Física", d: 2, img: ["2022-55.png"],
    ctx: "Uma pessoa observa um quadro, localizado em uma parede às suas costas, por meio de um espelho plano colocado na parede à sua frente. A distância entre os olhos da pessoa e o espelho é de 1,0 m, e a distância entre os olhos da pessoa e a imagem do quadro, conjugada pelo espelho, é de 4,0 m. L é a distância entre as duas paredes.",
    q: "A distância L entre essas duas paredes é de",
    a: ["3,0 m.", "3,5 m.", "4,0 m.", "4,5 m.", "5,0 m."],
    r: 0, exp: "Num espelho plano, a imagem fica atrás do espelho, à mesma distância que o objeto está à frente. O quadro está a L do espelho, então a imagem fica L atrás dele. Olhos–imagem = 1,0 + L = 4,0 → L = 3,0 m." },

  { id: "2022-56", ano: 2022, n: 56, tema: "Física", d: 1,
    ctx: "Uma sala é iluminada por um conjunto de quatro lâmpadas de 15 W cada uma, as quais permanecem acesas simultaneamente por 6,0 horas a cada dia.",
    q: "O consumo diário de energia elétrica desse conjunto de lâmpadas é",
    a: ["0,06 kWh.", "0,09 kWh.", "0,24 kWh.", "0,30 kWh.", "0,36 kWh."],
    r: 4, exp: "Potência total: 4 · 15 = 60 W = 0,06 kW. Energia = 0,06 · 6 = 0,36 kWh." },

  // =====================================================================
  // PROVA 2º SEMESTRE 2023 (28/05/2023) — Licenciaturas, Computação e Negócios e Produção
  // =====================================================================

  // ---------- MATEMÁTICA ----------
  { id: "2023-01", ano: 2023, n: 1, tema: "Matemática", d: 2,
    q: "Para armazenar alguns arquivos, uma pessoa comprou determinado número de pen drives. Em 2/3 deles foram colocados 12 arquivos em cada um, e nos pen drives restantes foram colocados, em cada um, 8 arquivos. Se o número total de arquivos armazenados foi 160, o número de pen drives que ficaram com 12 arquivos cada um foi",
    a: ["18.", "15.", "12.", "10.", "8."],
    r: 3, exp: "Com n pen drives: (2n/3) · 12 + (n/3) · 8 = 8n + 8n/3 = 32n/3 = 160 → n = 15. Com 12 arquivos: 2/3 de 15 = 10." },

  { id: "2023-02", ano: 2023, n: 2, tema: "Matemática", d: 2,
    q: "Em um concurso público, foram aprovados 20% do número total de participantes, mas somente 30% dos aprovados foram chamados para ocupar o cargo. Os outros 168 candidatos aprovados ficaram na lista de espera. O número de candidatos aprovados que foram chamados foi",
    a: ["168.", "144.", "120.", "96.", "72."],
    r: 4, exp: "Os 168 da lista de espera são 70% dos aprovados, então os aprovados são 168/0,7 = 240. Chamados: 30% de 240 = 72." },

  { id: "2023-03", ano: 2023, n: 3, tema: "Matemática", d: 2,
    q: "Em uma sala de aula, 35 das 40 cadeiras estão ocupadas. Se dois alunos entrarem nessa sala, o número de maneiras distintas de eles escolherem as cadeiras onde irão se sentar é",
    a: ["25.", "20.", "15.", "10.", "5."],
    r: 1, exp: "Sobram 5 cadeiras. O primeiro aluno tem 5 escolhas e o segundo, 4: 5 · 4 = 20." },

  { id: "2023-04", ano: 2023, n: 4, tema: "Matemática", d: 1,
    q: "A reta r de equação y = 2x + 1 é paralela à reta s. Sabendo que a reta s passa pelo ponto (1, 5), sua equação pode ser dada por",
    a: ["y = 2x + 3", "y = 3x − 2", "y = x + 4", "y = x/5", "y = 2x + 5"],
    r: 0, exp: "Retas paralelas têm o mesmo coeficiente angular: y = 2x + b. Passando por (1, 5): 5 = 2 + b → b = 3." },

  { id: "2023-05", ano: 2023, n: 5, tema: "Matemática", d: 2,
    q: "O ponto A(x, 2) pertence ao gráfico da função f(x) = 3x – 4 e o ponto V(3, y) é o vértice da parábola descrita pela função g(x) = x² – 6x + 5. A distância entre os pontos A e V é igual a",
    a: ["√34", "√35", "√37", "√39", "√41"],
    r: 2, exp: "3x − 4 = 2 → x = 2, então A(2, 2). O vértice tem x = 3 e y = 9 − 18 + 5 = −4, então V(3, −4). d = √(1² + 6²) = √37." },

  { id: "2023-06", ano: 2023, n: 6, tema: "Matemática", d: 3,
    q: "Três amigos, Bento, Caio e Edu, compararam as notas obtidas por eles nas provas de Matemática e de Português, sempre na ordem alfabética de seus nomes. Eles observaram que as notas de Matemática formavam uma progressão aritmética de razão rM = 2 e que as notas de Português formavam outra progressão aritmética de razão rP = – 1. Sabendo que a soma das notas da prova de Português foi 21 e que Caio obteve a mesma nota nas duas provas, então, a maior nota da prova de Matemática foi",
    a: ["10.", "9.", "8.", "7.", "6."],
    r: 1, exp: "Português: p, p−1, p−2 somam 3p − 3 = 21 → p = 8: notas 8, 7, 6. Caio (do meio) tirou 7. Matemática: 5, 7, 9. A maior é 9." },

  { id: "2023-07", ano: 2023, n: 7, tema: "Matemática", d: 3, img: ["2023-07.png"],
    ctx: "Um quadrado ABCD, com 6 cm de lado, foi dividido em cinco polígonos, sendo três triângulos, T₁, T₂, T₃, um quadrado Q e um trapézio TP. A área do quadrado Q é 9 cm², e os pontos M e N são pontos médios dos lados do quadrado ABCD.",
    q: "A área do trapézio é igual a",
    a: ["9/2 cm².", "13/2 cm².", "9 cm².", "11 cm².", "27/2 cm²."],
    r: 4, exp: "Com D na origem: M(0, 3), N(3, 6), B(6, 6). O trapézio é MNBD, com bases MN = 3√2 e DB = 6√2 (paralelas). A distância entre elas é 3/√2. Área = (3√2 + 6√2)/2 · 3/√2 = 27/2." },

  { id: "2023-08", ano: 2023, n: 8, tema: "Matemática", d: 1,
    q: "Em uma urna foram colocados 24 cartões, numerados de 29 a 52. Retirando-se aleatoriamente um cartão dessa urna, a probabilidade de que o número que está no cartão seja divisível por 3 é de",
    a: ["1/3", "1/4", "1/5", "1/6", "1/8"],
    r: 0, exp: "Múltiplos de 3 entre 29 e 52: 30, 33, …, 51, que são 8 números. 8/24 = 1/3." },

  { id: "2023-09", ano: 2023, n: 9, tema: "Matemática", d: 3, img: ["2023-09.png"],
    ctx: "Duas caixas, A e B, ambas na forma de um prisma reto de base retangular, com alturas HA e HB. A caixa A mede 40 cm × 25 cm e a caixa B mede 35 cm × 20 cm na base.",
    q: "Sabendo que o volume da caixa A é 300 cm³ maior do que o volume da caixa B e que a altura da caixa A é 6 cm menor do que a altura da caixa B, então a altura da caixa B é",
    a: ["15 cm.", "18 cm.", "21 cm.", "24 cm.", "27 cm."],
    r: 2, exp: "1 000 · (HB − 6) = 700 · HB + 300 → 300 HB = 6 300 → HB = 21 cm." },

  { id: "2023-10", ano: 2023, n: 10, tema: "Matemática", d: 3, img: ["2023-10.png"],
    ctx: "O gráfico apresenta o número de parques temáticos dos cinco estados brasileiros que possuem o maior número deles, cadastrados no Ministério do Turismo até março de 2022: RS 42, SP 35, SC 18, PE 16, GO 14. (Nexo Jornal, 21.07.2022. Adaptado)",
    q: "Suponha que o número de parques temáticos dos estados do RS e de SP mantenha-se igual nos próximos três anos. Nessas condições, o número mínimo de parques temáticos que os estados de SC, PE e GO, juntos, precisariam abrir nesses três anos, além dos que eles já possuem, para que a média aritmética do número de parques temáticos deles fique maior que a média aritmética do número de parques temáticos dos estados do RS e de SP seria de",
    a: ["71.", "70.", "69.", "68.", "67."],
    r: 3, exp: "Média de RS e SP: (42 + 35)/2 = 38,5. Os três têm 18 + 16 + 14 = 48. Com x novos: (48 + x)/3 > 38,5 → x > 67,5, então x mínimo = 68." },

  // ---------- LÍNGUA PORTUGUESA ----------
  { id: "2023-11", ano: 2023, n: 11, tema: "Língua Portuguesa", d: 2, t: "santa",
    q: "Em relação ao evento ocorrido na Igreja, o homem acredita que as pessoas se mostrariam",
    a: ["atônitas.", "oportunistas.", "céticas.", "compassivas.", "indignadas."],
    r: 2, exp: "Quando Carolina diz que vai chamar mais gente, ele responde: ‘Ninguém vai acreditar em você’. Acredita que as pessoas seriam céticas." },

  { id: "2023-12", ano: 2023, n: 12, tema: "Língua Portuguesa", d: 3, t: "santa",
    q: "O discurso indireto livre se configura pela mistura entre a voz de um personagem e a do narrador, a exemplo do que ocorre em",
    a: ["“O homem ficou de pé, apontou pra Santa, abaixou os braços.” (4º parágrafo)", "“— A Santa está com pena de mim.” (6º parágrafo)", "“Não adianta discutir com doido, a questão é essa estátua chorando.” (9º parágrafo)", "“Saiu correndo, abriu as portas que davam pra frente do altar.” (13º parágrafo)", "“Com muito jeito, muito mesmo, que era pra não ser vista como doida, explicou a situação.” (13º parágrafo)"],
    r: 2, exp: "Sem travessão nem verbo de fala, o pensamento de Carolina aparece junto com a narração (‘Não adianta discutir com doido…’). (A) e (D) são narração; (B) é discurso direto." },

  { id: "2023-13", ano: 2023, n: 13, tema: "Língua Portuguesa", d: 1, t: "santa",
    ctx: "Em “Viu uma SENHORINHA caminhando devagar pela calçada perto da Igreja e foi até ela.” (13º parágrafo), observe a palavra destacada.",
    q: "O sufixo da palavra destacada expressa",
    a: ["exagero.", "depreciação.", "ironia.", "atenuação.", "afeto."],
    r: 4, exp: "O sufixo diminutivo -inha, aqui, dá carinho (afeto) à ‘senhora’." },

  { id: "2023-14", ano: 2023, n: 14, tema: "Língua Portuguesa", d: 2, t: "itamar",
    q: "O eu lírico vê a cidade de São Paulo como um espaço no qual",
    a: ["a violência e a pressa eliminam as possibilidades de civilidade e de convívio com o outro.", "a busca por desenvolvimento tecnológico implica a falta de liberdade da população.", "a intensidade do fluxo migratório é diminuída pela falta de capacidade real de acolhimento.", "a população parece se misturar em meio a uma realidade urbana caótica.", "a miscigenação dos habitantes impossibilita a definição de uma identidade ao lugar."],
    r: 3, exp: "A letra mistura Liberdade e ‘Japão’, gente do nordeste, do norte e do sudeste, e um ritmo frenético (‘vai e vem… sobe e desce… não tem intervalo’)." },

  { id: "2023-15", ano: 2023, n: 15, tema: "Língua Portuguesa", d: 2, t: "itamar",
    q: "Pertence ao grupo das classes de palavras invariáveis o termo (sublinhado no original) em:",
    a: ["“Venha até São Paulo ver o que é bom pra tosse” (1ª estrofe), termo: bom", "“entre no meu carro vamos ao largo do Arouche” (1ª estrofe), termo: meu", "“Venha nesse embalo concrete fax telex” (2ª estrofe), termo: nesse", "“quem vem pra São Paulo, meu bem, jamais se esquece” (2ª estrofe), termo: jamais", "“batalhando nesse mundaréu de mundo que só cresce que só carece” (3ª estrofe), termo: mundaréu"],
    r: 3, exp: "‘Jamais’ é advérbio, que não varia em gênero nem em número. ‘Bom’ é adjetivo; ‘meu’ é pronome possessivo; ‘nesse’ varia (nesse/nessa/nesses); ‘mundaréu’ é substantivo." },

  { id: "2023-16", ano: 2023, n: 16, tema: "Língua Portuguesa", d: 2, t: "itamar",
    q: "Na última estrofe, há predominância de verbos no",
    a: ["presente do indicativo, o que corresponde à previsão de ações iminentes.", "presente do indicativo, o que corresponde à descrição de ações constantes.", "gerúndio, o que corresponde à narração de ações já cessadas, mas que se estenderam no tempo.", "gerúndio, o que corresponde à narração de ações começadas no passado e que continuam a se estender no tempo.", "imperativo afirmativo, o que corresponde à proposta do eu lírico de que ocorram certas ações."],
    r: 1, exp: "‘Vai e vem’, ‘sobe e desce’, ‘cresce’ e ‘carece’ estão no presente do indicativo e mostram o movimento contínuo da cidade (ações habituais)." },

  { id: "2023-17", ano: 2023, n: 17, tema: "Língua Portuguesa", d: 2, t: "itamar",
    q: "Em “Venha até São Paulo”, há associação de duas palavras com semelhança fônica e significados diferentes no verso:",
    a: ["“Venha até São Paulo ver o que é bom pra tosse” (1ª estrofe)", "“entre no meu carro vamos ao largo do Arouche” (1ª estrofe)", "“Liberdade é bairro mas é como Japão fosse” (1ª estrofe)", "“gente do nordeste do norte aqui no sudeste” (3ª estrofe)", "“batalhando nesse mundaréu de mundo que só cresce que só carece” (3ª estrofe)"],
    r: 4, exp: "‘Cresce’ e ‘carece’ têm sons parecidos e sentidos diferentes: é a paronomásia." },

  { id: "2023-18", ano: 2023, n: 18, tema: "Língua Portuguesa", d: 2, t: "balada",
    q: "O poema pode remeter às cantigas de amigo do Trovadorismo porque nele se observa",
    a: ["religiosidade mística.", "eu lírico feminino.", "idealização do pretendente.", "ambiente bucólico.", "submissão masculina."],
    r: 1, exp: "Nas cantigas de amigo, o eu lírico é feminino (‘Vivo tranquila…’, ‘sou amiga’)." },

  { id: "2023-19", ano: 2023, n: 19, tema: "Língua Portuguesa", d: 3, t: "balada",
    ctx: "“TENDES castelo, mais nada. / Nem por isso vós SEREIS” (1ª estrofe)",
    q: "Se a concordância fosse feita com a terceira pessoa do plural, mantendo-se o tempo e o modo dos verbos destacados, as formas verbais seriam, respectivamente:",
    a: ["teriam – foram.", "têm – seriam.", "tem – eram.", "têm – serão.", "tem – serão."],
    r: 3, exp: "‘Tendes’ (presente do indicativo, vós) passa a ‘têm’ (eles). ‘Sereis’ (futuro do presente) passa a ‘serão’." },

  { id: "2023-20", ano: 2023, n: 20, tema: "Língua Portuguesa", d: 2, t: "balada",
    ctx: "“Tendes castelo, afirmais / E não me convencereis.” (2ª estrofe)",
    q: "O termo destacado (e) introduz uma oração que, em relação à anterior, expressa",
    a: ["alternativa.", "condição.", "explicação.", "conclusão.", "oposição."],
    r: 4, exp: "Aqui o ‘e’ tem valor de ‘mas’: vocês afirmam, mas não me convencerão (oposição)." },

  // ---------- LÍNGUA INGLESA ----------
  { id: "2023-21", ano: 2023, n: 21, tema: "Língua Inglesa", d: 2, t: "turismo",
    q: "The text intends to",
    a: ["compare the differences between travel and tourism.", "explain why cultural tourism is important.", "show important tips on how to stay safe while travelling.", "draw attention to the different types of tourism.", "indicate ways on how to make a positive impact on travels."],
    r: 4, exp: "Depois de mostrar o lado bom e o ruim do turismo, o texto dá dicas (garrafas reutilizáveis, menos lençóis e toalhas lavados) para viajar de forma sustentável." },

  { id: "2023-22", ano: 2023, n: 22, tema: "Língua Inglesa", d: 1, t: "turismo",
    q: "In the excerpt from the first paragraph “IT provides jobs”, the word (It) refers to",
    a: ["“world”.", "“regional development”.", "“tourism”.", "“community building”.", "“cultural awareness”."],
    r: 2, exp: "O parágrafo inteiro fala de ‘tourism’, que fornece empregos e incentiva o desenvolvimento regional." },

  { id: "2023-23", ano: 2023, n: 23, tema: "Língua Inglesa", d: 1, t: "turismo",
    q: "No trecho do segundo parágrafo “BUT there is often a downside”, o termo destacado (But) expressa",
    a: ["consequência.", "contraste.", "concessão.", "condição.", "causa."],
    r: 1, exp: "‘But’ = mas: contrasta os aspectos positivos do 1º parágrafo com os negativos do 2º." },

  { id: "2023-24", ano: 2023, n: 24, tema: "Língua Inglesa", d: 2, t: "turismo",
    q: "No trecho do item 1 do texto “BY CHOOSING reusable bottles and bags wherever you go, you can help ensure there is less plastic waste in the ocean and other habitats”, a expressão destacada descreve",
    a: ["como algo deve ser feito.", "quando algo deve ser feito.", "o lugar onde algo deve ser feito.", "o motivo pelo qual algo deve ser feito.", "a frequência com que algo deve ser feito."],
    r: 0, exp: "‘By + -ing’ indica o modo (como): ajudar escolhendo garrafas e sacolas reutilizáveis." },

  { id: "2023-25", ano: 2023, n: 25, tema: "Língua Inglesa", d: 1, t: "turismo",
    q: "A expressão “water scarcity”, no item 2 do texto, significa, em português,",
    a: ["poluição da água.", "falta de água.", "fornecimento de água.", "custo da água.", "desperdício de água."],
    r: 1 },

  { id: "2023-26", ano: 2023, n: 26, tema: "Língua Inglesa", d: 2, img: ["2023-26.png"],
    ctx: "Cartum de Glasbergen. Um cachorro diz ao dono, que lê o jornal: “You keep me on a chain, you make me eat on the floor, you never let me go out in public alone. We need counseling!”",
    q: "A fala do cachorro",
    a: ["revela um posicionamento favorável às atitudes de seu dono.", "sugere uma alternativa viável para seu comportamento inadequado.", "mostra que ele está cansado da ração oferecida por seu dono.", "indica uma insatisfação em relação às atitudes de seu dono.", "evidencia seu medo de andar sozinho em local público."],
    r: 3, exp: "Ele reclama de ser acorrentado, comer no chão e não sair sozinho, e propõe terapia de casal: está insatisfeito." },

  // ---------- HISTÓRIA ----------
  { id: "2023-27", ano: 2023, n: 27, tema: "História", d: 1,
    q: "A democracia estabelecida na Atenas da Antiguidade Clássica ficou conhecida por ser",
    a: ["fundamentada em distinções sociais e reservada à aristocracia ateniense.", "baseada na participação direta e restrita aos homens atenienses.", "representativa e reduzida àqueles que nasceram na pólis.", "apoiada na coletividade e aberta a todos os residentes da cidade.", "exclusivista e limitada ao grupo militar urbano."],
    r: 1, exp: "Era uma democracia direta (os cidadãos votavam na ágora), mas só os homens livres atenienses eram cidadãos. Mulheres, estrangeiros e escravos ficavam de fora." },

  { id: "2023-28", ano: 2023, n: 28, tema: "História", d: 2,
    ctx: "Para descrever os nove anos em que viveu no chamado Brasil holandês, Johan Niehof, funcionário da Companhia das Índias Ocidentais, escreveu uma crônica: “Todo o litoral brasileiro está literalmente tarjado de pequenos cursos d’água que vêm lançar ao mar após terem banhado extensos vales. Por isso, os engenhos de cana erigidos nas regiões ribeirinhas desfrutam grande economia tanto no transporte como na mão de obra. Além de moverem esses rios os engenhos instalados em suas margens, servem eles para o transporte do açúcar e constituem via fácil para o abastecimento das fábricas. Condições assim tão vantajosas não se encontram em nenhum outro país das Índias Ocidentais, e, por isso, neles não se poderia cuidar com lucro da cultura da cana.” (Apud Evaldo Cabral de Mello. O Brasil holandês, 2010)",
    q: "No excerto, o funcionário holandês faz uma",
    a: ["averiguação da devastação do sistema ambiental devido ao plantio extensivo da cana-de-açúcar.", "projeção de como poderiam ser os sistemas de exploração açucareiros empregados ao longo da costa brasileira.", "indagação das possibilidades de uso da natureza para o bom aproveitamento do cultivo de cana-de-açúcar.", "constatação da potencialidade dos recursos naturais para a maximização dos ganhos da produção açucareira.", "certificação do aproveitamento ineficaz da riqueza ambiental brasileira pelos engenhos de açúcar."],
    r: 3, exp: "Ele destaca que os rios movem os engenhos e transportam o açúcar, condições vantajosas que garantem lucro: a natureza favorece os ganhos." },

  { id: "2023-29", ano: 2023, n: 29, tema: "História", d: 2,
    ctx: "Um museu de Londres concordou em devolver ao governo nigeriano 72 objetos saqueados de Benin City em 1897. Todos os objetos foram retirados do Reino de Benin, no que hoje é a capital do estado de Edo, no sul da Nigéria, durante uma operação militar britânica em fevereiro de 1897. Os artefatos incluem 12 placas de latão do gênero conhecido como “bronze do Benin”, criadas pelo menos desde o século 16 para decorar a corte real. (CNN Brasil)",
    q: "O saque realizado pelos britânicos em Benin foi uma das expressões",
    a: ["da missão civilizadora europeia para preservar a cultura africana.", "do desprezo dos países europeus em relação à produção artística africana.", "do equilíbrio entre as forças industriais europeias e os reinos africanos.", "da divisão igualitária das riquezas africanas entre os países europeus.", "da dominação do continente africano pelas potências imperialistas europeias."],
    r: 4, exp: "Foi um episódio do imperialismo do século XIX: potências europeias dominaram militar e economicamente o continente africano e levaram seu patrimônio." },

  { id: "2023-30", ano: 2023, n: 30, tema: "História", d: 3,
    ctx: "Aristides Lobo (1889): “Por ora, a cor do governo é puramente militar e deverá ser assim. O fato foi deles, deles só […]. O povo assistiu àquilo bestializado, atônito, surpreso, sem conhecer o que significava. Muitos acreditavam sinceramente estar vendo uma parada.”\n\nMachado de Assis, Esaú e Jacó (1904): “— Como diabo é que eles fizeram isto, sem que ninguém desse pela coisa? refletia Paulo. […]. Deodoro é uma bela figura. Dizem que a entrada do marechal no quartel, e a saída, puxando os batalhões, foram esplêndidas. Talvez fáceis demais; é que o regime estava podre e caiu por si…”",
    q: "Ambos os excertos partilham a ideia de que a Proclamação da República",
    a: ["causou espanto nos setores das elites da sociedade brasileira.", "resultou do enfraquecimento dos militares brasileiros.", "aconteceu sem a participação das camadas populares brasileiras.", "decorreu da fragilidade do regime imperial brasileiro.", "expressou a comunhão dos interesses econômicos brasileiros."],
    r: 2, exp: "Lobo diz que o povo assistiu ‘bestializado’; no romance, ‘ninguém desse pela coisa’. Em ambos, o povo ficou de fora. (A ideia de regime ‘podre’ aparece só em Machado.)" },

  { id: "2023-31", ano: 2023, n: 31, tema: "Geografia", d: 3,
    ctx: "População urbana (O Brasil em números, Anuário Estatístico do Brasil 1960, IBGE):\nGoiás: 36.131 (1940) → 90.791 (1950): aumento de 151,28%.\nBrasil: 8.899.202 (1940) → 13.925.769 (1950): aumento de 56,48%.",
    q: "Os dados da tabela são explicados, entre outros fatores,",
    a: ["pela criação da cidade de Brasília como capital do país.", "pela expansão da atividade extrativista da borracha.", "pelo aumento da industrialização pesada em Goiás.", "pelo esvaziamento das áreas litorâneas em direção ao centro do país.", "pela crise agropecuária no Planalto Central brasileiro."],
    r: 0, exp: "Gabarito oficial: A. Goiás cresceu no período da Marcha para o Oeste, com Goiânia (fundada nos anos 1930) e o movimento rumo ao interior que culminou com Brasília (1960). A industrialização pesada, a borracha e o esvaziamento do litoral não explicam o dado." },

  { id: "2023-32", ano: 2023, n: 32, tema: "História", d: 3, img: ["2023-32.png"],
    ctx: "Imagem de Rube Goldberg, publicada originalmente em 1947: uma casa com o texto “Paz na atualidade” está sobre uma enorme bomba atômica, apoiada na beira de um precipício. A bomba é rotulada “Bomba atômica”; de um lado está “Controle mundial” e, embaixo, “Destruição mundial”.",
    q: "Publicada originalmente em 1947, já no início da Guerra Fria, a imagem revela uma preocupação com a",
    a: ["insuficiência da divisão internacional em zonas de influência ideológicas.", "instabilidade da manutenção da segurança internacional.", "alienação das pessoas em relação aos problemas políticos do mundo.", "inviabilidade na organização de conferências internacionais de paz.", "pressão psicológica no mundo devido à fragilidade das armas nucleares."],
    r: 1, exp: "A ‘paz’ está equilibrada sobre uma bomba atômica na beira do abismo: a segurança mundial é instável, e a bomba pode cair para o lado do ‘controle’ ou da ‘destruição’." },

  // ---------- GEOGRAFIA ----------
  { id: "2023-33", ano: 2023, n: 33, tema: "Geografia", d: 2,
    ctx: "“O Mercosul não deve ser considerado como um fardo, apesar das dificuldades, mas sim um espaço privilegiado para o Brasil conseguir implementar uma estratégia de desenvolvimento”, argumenta Roberto Menezes, professor de relações internacionais da UnB. “Um país não pode ficar preso à sua região, porém, nesse contexto, deve tratá-la como prioridade”. (Metrópoles, 08.01.2023. Adaptado)",
    q: "Considerando o excerto, uma vantagem proporcionada pelo Mercosul para o desenvolvimento da economia brasileira consiste",
    a: ["no aumento dos custos envolvendo entrega e estoque de mercadorias.", "na burocratização dos processos de importação e exportação.", "na redução das tarifas alfandegárias na comercialização entre países-membros.", "na integração das políticas fiscais e trabalhistas entre os países-membros.", "na destinação das mercadorias concentrada em países que não integram o bloco."],
    r: 2, exp: "Um bloco econômico facilita o comércio entre seus membros pela redução ou eliminação de tarifas alfandegárias." },

  { id: "2023-34", ano: 2023, n: 34, tema: "Geografia", d: 2, img: ["2023-34a.png", "2023-34b.png"],
    ctx: "Mapas da taxa de crescimento do rebanho bovino nas microrregiões brasileiras em 1990 (primeiro mapa) e em 2015 (segundo mapa). As áreas mais escuras indicam maior crescimento. (Freitas Junior e Barros, Nova Economia, 2021)",
    q: "Os mapas evidenciam que a área de maior expansão do rebanho bovino entre 1990 e 2015 na Amazônia Legal coincide com a região",
    a: ["dos maiores índices de industrialização.", "de produção de eucalipto.", "de produção de algodão.", "do arco do desmatamento.", "das reservas de carvão mineral."],
    r: 3, exp: "Em 2015 o tom mais escuro avança sobre o sul e o leste da Amazônia (MT, PA, RO), o arco do desmatamento, onde a floresta dá lugar ao pasto." },

  { id: "2023-35", ano: 2023, n: 35, tema: "Geografia", d: 2, img: ["2023-35.png"],
    ctx: "Imagem de um dos movimentos das placas tectônicas: dois blocos de rocha se deslocam lateralmente, em sentidos opostos (setas), ao longo de uma falha. (www.byjus.com. Adaptado)",
    q: "Uma das consequências desse movimento é a",
    a: ["formação de fossas tectônicas.", "ocorrência de abalos sísmicos.", "constituição de cadeias montanhosas.", "diminuição do intemperismo.", "expansão das dorsais oceânicas."],
    r: 1, exp: "É um movimento transcorrente (as placas deslizam lado a lado, como na falha de San Andreas). O atrito acumula tensão, que é liberada em terremotos." },

  { id: "2023-36", ano: 2023, n: 36, tema: "Geografia", d: 1,
    ctx: "“Sem árvores e com seu subsolo permanentemente congelado, essa monótona paisagem horizontal é o bioma mais frio que existe na Terra. Sua frágil vegetação, em geral musgos, com menos de 10 centímetros de altura e escassos caules anões lenhosos, raramente se conserva nas camadas de rocha. Isso explica a grande dificuldade em localizar musgos primitivos preservados em sedimentos glaciais.” (Marcos Pivetta, Pesquisa FAPESP, 2004. Adaptado)",
    q: "O excerto faz referência ao bioma",
    a: ["taiga.", "tundra.", "floresta tropical.", "floresta temperada.", "savana."],
    r: 1, exp: "Solo congelado (permafrost), sem árvores e vegetação de musgos e líquens: tundra. A taiga tem coníferas." },

  { id: "2023-37", ano: 2023, n: 37, tema: "Geografia", d: 2, img: ["2023-37.png"],
    ctx: "Esquema do funcionamento de uma termoelétrica a gás: o combustível queima na câmara de combustão, os gases movem a turbina e o gerador, e os gases de combustão saem para a atmosfera. (www.usinas.energiaeambiente.org.br)",
    q: "Um dos impactos ambientais causados pelo funcionamento das usinas termoelétricas é a",
    a: ["recorrência de acidentes nucleares.", "potencialização das queimadas.", "dependência da regularidade do vento.", "necessidade de intensa extração de silício.", "emissão de gases de efeito estufa."],
    r: 4, exp: "A queima de combustíveis fósseis libera CO₂ e outros gases de efeito estufa. Acidente nuclear é de usina nuclear; vento é energia eólica; silício é de painéis solares." },

  { id: "2023-38", ano: 2023, n: 38, tema: "Geografia", d: 2, img: ["2023-38.png"],
    ctx: "Fragmento de carta topográfica do IBGE, com curvas de nível em marrom, rios em azul e estradas.",
    q: "Esse tipo de representação cartográfica tem como objetivo",
    a: ["estabelecer uma regionalização.", "apresentar diferenças altimétricas.", "indicar fluxos de dados.", "exibir pontos de contagem.", "apresentar limites e fronteiras."],
    r: 1, exp: "As cartas topográficas usam curvas de nível para mostrar o relevo e as diferenças de altitude." },

  // ---------- QUÍMICA ----------
  { id: "2023-39", ano: 2023, n: 39, tema: "Química", d: 2,
    ctx: "O propano, um dos componentes do gás liquefeito de petróleo (GLP), é um hidrocarboneto que, nas condições ambiente, é um gás incolor, inflamável e não tóxico. Sua combustão completa produz gás carbônico, água e calor: 1 C₃H₈ (g) + x O₂ (g) → y CO₂ (g) + 4 H₂O (g) + calor.",
    q: "Os valores dos coeficientes estequiométricos, x e y, para essa reação de combustão e a classificação desse hidrocarboneto são, respectivamente,",
    a: ["5, 2 e alcano.", "2, 3 e alceno.", "5, 4 e alcano.", "4, 5 e alceno.", "5, 3 e alcano."],
    r: 4, exp: "C₃H₈ + 5 O₂ → 3 CO₂ + 4 H₂O (3 carbonos geram 3 CO₂; oxigênios: 6 + 4 = 10 → x = 5). Só ligações simples entre carbonos: alcano." },

  { id: "2023-40", ano: 2023, n: 40, tema: "Química", d: 2,
    ctx: "A necessidade de ingestão diária de cálcio (M = 40 g/mol) por seres humanos varia de acordo com a idade. Indivíduos entre 19 e 50 anos precisam ingerir, em média, 1000 mg de cálcio por dia.",
    q: "A quantidade média de cálcio que um indivíduo de 50 anos deve ingerir por dia é de",
    a: ["2,5 × 10⁻³ mol.", "4,0 × 10⁻² mol.", "2,5 × 10⁻² mol.", "2,5 × 10⁻¹ mol.", "4,0 × 10¹ mol."],
    r: 2, exp: "1 000 mg = 1 g. n = 1/40 = 0,025 = 2,5 × 10⁻² mol." },

  { id: "2023-41", ano: 2023, n: 41, tema: "Química", d: 1,
    ctx: "Do ponto de vista meteorológico, a geada é um fenômeno caracterizado pela formação de uma camada fina de gelo em superfícies expostas, como o solo e plantas, quando a temperatura ambiente atinge 0 °C ou menos. Nessa condição, o vapor d’água presente no ar, em contato com a superfície fria, muda de estado físico, depositando-se sobre ela e dando um aspecto esbranquiçado sobre a paisagem. (Diário de Canoas)",
    q: "A mudança de estado físico descrita no excerto é denominada",
    a: ["vaporização.", "condensação.", "liquefação.", "ressublimação.", "fusão."],
    r: 3, exp: "O vapor vira gelo diretamente, sem passar pelo líquido: passagem gás → sólido, chamada de ressublimação (ou sublimação inversa, ou deposição)." },

  { id: "2023-42", ano: 2023, n: 42, tema: "Química", d: 2, img: ["2023-42.png"],
    ctx: "A figura ilustra a obtenção de três misturas em três tubos de ensaio: tubo 1 = 250 mL de água + 1 g de cloreto de sódio; tubo 2 = 250 mL de água + 250 mL de etanol; tubo 3 = 250 mL de água + 250 mL de óleo vegetal.",
    q: "Constitui um sistema homogêneo a mistura que foi preparada",
    a: ["no tubo 1, apenas.", "no tubo 2, apenas.", "nos tubos 1 e 2.", "nos tubos 1 e 3.", "nos tubos 2 e 3."],
    r: 2, exp: "Água e sal (1 g, que se dissolve) e água e etanol (miscíveis) formam uma só fase. Água e óleo não se misturam: sistema heterogêneo." },

  { id: "2023-43", ano: 2023, n: 43, tema: "Química", d: 2, img: ["2023-43.png"],
    ctx: "O composto orgânico, em seu estado puro, apresenta-se como um líquido incolor, corrosivo e malcheiroso. É obtido naturalmente pela fermentação da polpa de madeira e pode ser encontrado em alguns queijos e temperos artificiais. A figura mostra sua fórmula em bastão: cadeia com três carbonos, terminando em um grupo C(=O)–OH.",
    q: "Considerando a fórmula estrutural apresentada, afirma-se que",
    a: ["a molécula apresenta cadeia carbônica aberta e insaturada.", "a molécula possui seis átomos de hidrogênio.", "o composto orgânico representado é insolúvel em água.", "a estrutura apresenta o grupo funcional álcool.", "a molécula possui um carbono terciário."],
    r: 1, exp: "É o ácido propanoico, CH₃–CH₂–COOH = C₃H₆O₂, com 6 H. É saturado (a dupla C=O não está entre carbonos), solúvel em água (cadeia curta), tem o grupo ácido carboxílico e não tem carbono terciário." },

  { id: "2023-44", ano: 2023, n: 44, tema: "Química", d: 2,
    ctx: "A idade de fósseis de até 40 000 anos pode ser determinada pelo carbono-14. O tempo de meia-vida do carbono-14 é de 5 730 anos, e a idade é determinada pela comparação entre a quantidade de carbono-14 no fóssil e a existente em um ser vivo semelhante.",
    q: "Considere o fóssil de um hominídeo, cuja idade, determinada pelo método do carbono-14, é de 22 920 anos. A porcentagem de carbono-14 presente nesse fóssil será de",
    a: ["6,25%.", "12,5%.", "25%.", "50%.", "75%."],
    r: 0, exp: "22 920 / 5 730 = 4 meias-vidas. Depois de 4 meias-vidas resta (1/2)⁴ = 1/16 = 6,25%." },

  // ---------- BIOLOGIA ----------
  { id: "2023-45", ano: 2023, n: 45, tema: "Biologia", d: 2, img: ["2023-45.png"],
    ctx: "O esquema (diagrama de Venn) ilustra um conceito X estudado na ecologia, responsável por caracterizar biologicamente, e de forma abrangente, os seres vivos. O X está na intersecção de quatro círculos: comportamento social, disponibilidade de alimento, reprodução e predação sofrida.",
    q: "O conceito X refere-se",
    a: ["à produtividade primária.", "à comunidade.", "ao hábitat.", "ao nicho ecológico.", "ao nível trófico."],
    r: 3, exp: "O nicho ecológico é o ‘papel’ da espécie no ambiente: como obtém alimento, se reproduz, se comporta e é predada." },

  { id: "2023-46", ano: 2023, n: 46, tema: "Biologia", d: 1,
    ctx: "O efeito estufa, fenômeno natural que promove o aquecimento global e, consequentemente, as mudanças climáticas, está se intensificando no planeta, tendo em vista",
    q: "Assinale a alternativa que completa corretamente a frase.",
    a: ["o volume emitido de gases como o CO₂, CO e CH₄ ser cada vez maior, desde a revolução industrial.", "a combustão da gasolina e a fermentação do etanol contribuírem de forma similar para o tal efeito.", "a capacidade das florestas tropicais de capturarem os gases emitidos na combustão ser bastante reduzida.", "a destruição da camada de ozônio permitir maior absorção e refração de radiação infravermelha e ultravioleta.", "o aumento de abalos sísmicos provocarem liberação de magma superaquecido na superfície terrestre."],
    r: 0, exp: "A emissão de gases de efeito estufa (CO₂, CH₄…) cresce desde a Revolução Industrial. O buraco na camada de ozônio é outro problema, e terremotos não influenciam o clima de forma relevante." },

  { id: "2023-47", ano: 2023, n: 47, tema: "Biologia", d: 2,
    ctx: "Yanomamis concentraram quase 10% dos casos de malária em 2022 no Brasil. Dos 123 151 casos de malária registrados no Brasil no ano passado, 11 530 ocorreram no território Yanomami. Apesar do elevado volume de registros da doença, esse povo indígena é uma fatia muito pequena no Brasil: os Yanomamis são cerca de 0,013% da população do país. (Yahoo Notícias, 26.01.2023. Adaptado)",
    q: "A malária é uma doença",
    a: ["transmitida diretamente dos garimpeiros para os indígenas por via respiratória.", "causada por um protozoário flagelado que parasita essencialmente a população nativa.", "prevenida pelas campanhas nacionais de vacinação na Amazônia e no Cerrado.", "relacionada aos distúrbios gastrointestinais como disenterias, náuseas e vômitos.", "caracterizada pela presença de dois hospedeiros, o mosquito Anopheles e o ser humano."],
    r: 4, exp: "A malária é causada por Plasmodium (protozoário não flagelado, de outra classe) e transmitida pela picada da fêmea do Anopheles. O ciclo tem dois hospedeiros: o mosquito e o ser humano. Não há vacina de campanha nacional." },

  { id: "2023-48", ano: 2023, n: 48, tema: "Biologia", d: 1, img: ["2023-48.png"],
    ctx: "A figura ilustra um hipotético organismo unicelular com organização procariota, com as estruturas: nucleoide, parede celular, membrana plasmática, plasmídeo e ribossomo.",
    q: "Com relação às estruturas representadas na figura, afirma-se que",
    a: ["a parede celular é composta por celulose.", "a membrana plasmática é semipermeável.", "o nucleoide é envolto pela membrana nuclear.", "o plasmídeo é responsável pela produção de energia.", "o ribossomo é responsável pela digestão dos nutrientes."],
    r: 1, exp: "A membrana plasmática controla o que entra e sai da célula: é semipermeável. A parede bacteriana é de peptidoglicano; o nucleoide não tem membrana; o plasmídeo é um DNA extra; o ribossomo sintetiza proteínas." },

  { id: "2023-49", ano: 2023, n: 49, tema: "Biologia", d: 2, img: ["2023-49.png"],
    ctx: "O néfron é a unidade funcional dos rins, responsável pelas três etapas da formação da urina (filtração, reabsorção e secreção). A figura mostra: cápsula renal (de Bowman), glomérulo renal, tubo contorcido proximal, alça néfrica (alça de Henle), tubo contorcido distal e ducto coletor.",
    q: "Durante o processo de formação da urina em uma pessoa saudável, a região",
    a: ["da cápsula renal e do glomérulo renal produz amônia.", "do tubo contorcido proximal degrada toxinas.", "da alça néfrica reabsorve água para o sistema circulatório.", "do tubo contorcido distal produz hormônios glicêmicos.", "do ducto coletor elimina o excesso de células sanguíneas."],
    r: 2, exp: "Na alça de Henle há reabsorção de água e de sais, que voltam para os capilares. O glomérulo só filtra; as células do sangue não passam para a urina em pessoa saudável." },

  { id: "2023-50", ano: 2023, n: 50, tema: "Biologia", d: 3,
    ctx: "Simone e Murilo tiveram quatro filhos. A testagem do tipo sanguíneo referente ao sistema ABO revelou que os quatro filhos do casal apresentavam quatro fenótipos diferentes entre si (A, B, AB e O).",
    q: "Com base apenas nessas informações, com relação ao sistema ABO de tipagem sanguínea, afirma-se que",
    a: ["Simone e Murilo apresentam genótipos homozigotos.", "os quatro filhos do casal apresentam genótipos homozigotos.", "os quatro filhos do casal apresentam genótipos heterozigotos.", "Simone e Murilo apresentam o mesmo genótipo.", "Simone e Murilo apresentam genótipos heterozigotos."],
    r: 4, exp: "Para surgir um filho O (ii), cada pai tem ao menos um alelo i. Para surgirem A e B, um genitor precisa ter Iᴬ e o outro Iᴮ. Logo, os pais são Iᴬi e Iᴮi (heterozigotos). Os filhos A, B e O têm genótipos diferentes." },

  // ---------- FÍSICA ----------
  { id: "2023-51", ano: 2023, n: 51, tema: "Física", d: 1,
    q: "O atleta ugandense Andrew Rotich Kwemoi foi o vencedor da Corrida Internacional de São Silvestre de 2022. Durante a corrida, ele percorreu as ruas da cidade de São Paulo com a velocidade média de 20 km/h e, portanto, percorreu cada quilômetro, em média, em um intervalo de tempo igual a",
    a: ["1,0 min.", "2,0 min.", "3,0 min.", "5,0 min.", "6,0 min."],
    r: 2, exp: "t = d/v = 1 km / 20 km/h = 0,05 h = 3 min." },

  { id: "2023-52", ano: 2023, n: 52, tema: "Física", d: 3, img: ["2023-52.png"],
    ctx: "As figuras mostram dois sistemas de polias, S₁ e S₂, combinações de polias fixas (azuis) com polias móveis (vermelhas). Cada polia móvel divide por dois a força necessária para sustentar a carga, e a polia fixa só muda o sentido e a direção da força. O sistema S₁ tem duas polias móveis e o S₂ tem três.",
    q: "Nas situações representadas nas figuras, as forças F₁ e F₂ necessárias para manter suspensas e em repouso as cargas de peso P nos sistemas S₁ e S₂ têm intensidades, respectivamente, iguais a",
    a: ["P/2 e P/4", "P/2 e P/6", "P/4 e P/6", "P/4 e P/8", "P/6 e P/8"],
    r: 3, exp: "Cada polia móvel divide a força por 2: S₁ (2 móveis) → P/2² = P/4. S₂ (3 móveis) → P/2³ = P/8." },

  { id: "2023-53", ano: 2023, n: 53, tema: "Física", d: 2,
    ctx: "A dilatação linear ΔL de uma barra é diretamente proporcional ao comprimento inicial, ao coeficiente de dilatação linear e à variação de temperatura (ΔL = L₀ · α · ΔT). O coeficiente de dilatação linear do alumínio é 2,4 × 10⁻⁵ °C⁻¹.",
    q: "A dilatação linear ΔL sofrida por uma barra de alumínio de comprimento inicial igual a 40 cm, ao ser submetida a uma variação de temperatura de 50 °C, é de",
    a: ["4,8 × 10⁻² cm.", "2,4 × 10⁻² cm.", "9,6 × 10⁻³ cm.", "9,6 × 10⁻⁴ cm.", "4,8 × 10⁻⁴ cm."],
    r: 0, exp: "ΔL = 40 · 2,4 × 10⁻⁵ · 50 = 4 800 × 10⁻⁵ = 4,8 × 10⁻² cm." },

  { id: "2023-54", ano: 2023, n: 54, tema: "Física", d: 2,
    ctx: "Em um salão de beleza, uma cliente vê, por meio do espelho plano à sua frente, o desenho do logotipo do salão pintado na parede às suas costas.",
    q: "A imagem do desenho vista pela cliente",
    a: ["tem dimensões maiores do que a do desenho na parede.", "tem as mesmas dimensões do desenho na parede.", "tem dimensões que dependem da distância entre a cliente e o espelho.", "está a uma distância do espelho igual à distância da cliente ao espelho.", "está a uma distância do espelho menor do que a distância da cliente ao espelho."],
    r: 1, exp: "Num espelho plano a imagem tem o mesmo tamanho do objeto e fica atrás do espelho, à mesma distância que o objeto (o desenho), e não que a cliente." },

  { id: "2023-55", ano: 2023, n: 55, tema: "Física", d: 3, img: ["2023-55.png"],
    ctx: "A figura mostra cinco posições equidistantes entre si (V, W, X, Y e Z), na trajetória de um pêndulo simples que oscila entre V e Z. A massa foi solta do repouso em V no instante t₀ = 0 s e retornou a V, pela primeira vez, em t₁ = 1,2 s. Não há forças dissipativas.",
    q: "No instante t₂ = 1,8 s, a massa estava na posição",
    a: ["V.", "W.", "X.", "Y.", "Z."],
    r: 4, exp: "A volta completa (V a V) é o período T = 1,2 s. Em 1,8 s = 1,5 T, o pêndulo completou uma oscilação e mais meia: está no extremo oposto, Z." },

  { id: "2023-56", ano: 2023, n: 56, tema: "Física", d: 1, img: ["2023-56.png"],
    ctx: "Gráfico da intensidade da corrente elétrica I em função da diferença de potencial U aplicada a um resistor R: reta pela origem, passando pelo ponto (U = 20 V, I = 4,0 A). A resistência é definida como R = U/I.",
    q: "Da análise do gráfico conclui-se que a resistência elétrica do resistor R",
    a: ["é constante e vale 0,20 Ω.", "é constante e vale 5,0 Ω.", "aumenta com o aumento da diferença de potencial e vale 0,20 Ω quando U = 20 V.", "aumenta com o aumento da diferença de potencial e vale 5,0 Ω quando U = 20 V.", "diminui com o aumento da diferença de potencial e vale 0,20 Ω quando U = 20 V."],
    r: 1, exp: "A reta pela origem indica U/I constante (resistor ôhmico). R = 20/4,0 = 5,0 Ω." },

  // =====================================================================
  // PROVA VESTIBULAR 2024 (26/05/2024) — gabarito oficial retificado (Q4 retificada: D)
  // =====================================================================

  // ---------- MATEMÁTICA ----------
  { id: "2024-01", ano: 2024, n: 1, tema: "Matemática", d: 2, img: ["2024-01.png"],
    ctx: "Em outubro de 2023, o IBGE divulgou dados sobre a mudança no perfil de idade do país. O índice de envelhecimento (IE) estima o ritmo de envelhecimento da população pela razão entre a população idosa (65 anos ou mais) e a população jovem (14 anos ou menos). Em 2022, o IE indica que, para cada grupo de 1000 jovens no Brasil, existiam 552 idosos. Valores do IE (%): 1970 = 7,5; 1980 = 10,5; 1990 = 13,9; 2000 = 19,8; 2010 = 30,7; 2022 = 55,2.",
    q: "Considerando o gráfico e as informações relativas a ele, assinale a opção correta.",
    a: ["No período que se estende de 1970 a 1990, a taxa de crescimento do IE manteve-se constante.", "O intervalo entre 1990 e 2000 foi aquele em que o Brasil registrou o maior aumento em seu IE.", "Entre os anos de 2000 e 2010, o IE apresentou o menor crescimento em relação aos demais intervalos.", "De 2010 a 2022, o IE indica que a população idosa aumentou, ao contrário da população jovem, que diminuiu.", "Se a taxa de crescimento da última década for mantida, estima-se que, até 2034, o IE ultrapasse o valor de 60 %."],
    r: 4, exp: "De 2010 a 2022 o IE subiu 24,5 pontos. Mantendo esse ritmo, em 2034 ele passaria de 79%, bem acima de 60%. Nas outras, os aumentos variam e o IE é uma razão: não prova que os jovens diminuíram." },

  { id: "2024-02", ano: 2024, n: 2, tema: "Matemática", d: 3, img: ["2024-01.png"],
    q: "No período de 10 anos, contados a partir de 1985, o IE indica que, para cada grupo de 1000 jovens no Brasil, o número de idosos existentes estava compreendido entre",
    a: ["75,0 e 90,0.", "90,0 e 122,0.", "105,0 e 139,5.", "122,0 e 168,5.", "130,0 e 190,5."],
    r: 3, exp: "Interpolando entre os pontos: 1985 fica no meio de 10,5 e 13,9, ou seja 12,2%. 1995 fica no meio de 13,9 e 19,8, ou seja 16,85%. Por 1 000 jovens: 122 e 168,5." },

  { id: "2024-03", ano: 2024, n: 3, tema: "Matemática", d: 2, img: ["2024-01.png"],
    q: "Sobre os índices referentes aos anos que vão de 1970 a 1980, tomados ano a ano, é correto afirmar que eles formam uma",
    a: ["Progressão Aritmética de razão igual a 7/5.", "Progressão Geométrica de razão igual a 7/5.", "Progressão Aritmética de razão igual a 5/2.", "Progressão Geométrica de razão igual a 3/10.", "Progressão Aritmética de razão igual a 3/10."],
    r: 4, exp: "De 7,5 a 10,5 em 10 anos, com crescimento linear ano a ano, o aumento é de 3,0/10 = 0,3 = 3/10 por ano. A razão de uma P.A. é um valor somado a cada ano." },

  { id: "2024-04", ano: 2024, n: 4, tema: "Matemática", d: 2, t: "esferas",
    ctx: "Suponha que uma dessas esferas vá ser transportada para uma exposição em outro país. Para isso, ela será acondicionada em uma caixa cúbica que ficará circunscrita a ela. O diâmetro dessa esfera corresponde ao valor médio do intervalo informado no texto.",
    q: "Logo, o volume dessa caixa, desprezando a espessura de suas laterais, é mais próximo de",
    a: ["0,51 m³.", "2,05 m³.", "2,56 m³.", "4,10 m³.", "7,68 m³."],
    r: 3, exp: "Diâmetro médio: (0,7 + 2,5)/2 = 1,6 m. A caixa cúbica circunscrita tem aresta igual ao diâmetro: V = 1,6³ = 4,096 ≈ 4,10 m³. (Questão retificada pela banca, gabarito D.)" },

  { id: "2024-05", ano: 2024, n: 5, tema: "Matemática", d: 2,
    ctx: "Um motoboy realiza entregas para seis lojas diferentes que comercializam camisetas. Todas as lojas distribuem seus produtos em pacotes iguais e de mesmo tamanho. No baú da moto cabem apenas 8 pacotes.\nNúmero de pacotes aguardando retirada: Loja 1 = 6; Loja 2 = 52; Loja 3 = 35; Loja 4 = 82; Loja 5 = 23; Loja 6 = 11.\nA cada vez que vai realizar entregas, o motoboy se dirige a uma única das seis lojas, coloca os produtos no baú e entrega em todos os endereços, antes de retornar a qualquer uma dessas lojas para reabastecer.",
    q: "Diante do exposto, a quantidade máxima de pacotes de camisetas que o motoboy consegue transportar, após 16 entregas, é igual a",
    a: ["122.", "124.", "126.", "128.", "130."],
    r: 3, exp: "Cada viagem leva no máximo 8 pacotes. As lojas permitem mais de 16 viagens cheias (a loja 4 sozinha dá 10, a 2 dá 6). Logo, 16 viagens · 8 = 128." },

  { id: "2024-06", ano: 2024, n: 6, tema: "Matemática", d: 3, img: ["2024-06.png"],
    ctx: "Uma pessoa instalou um aplicativo de relacionamentos. Dentro de uma área circular de 1 km de diâmetro, existiam 3 pretendentes com os quais ela sempre “cruzava” em regiões específicas, representadas no gráfico de setores.",
    q: "Se o setor circular referente ao pretendente 1 possui ângulo de 30° e o ângulo do setor de maior área é o dobro do ângulo do setor de área intermediária, adotando π = 3,14, é correto afirmar que o perímetro do setor de área referente ao pretendente 2 é mais próximo de",
    a: ["3 919 m.", "2 878 m.", "2 195 m.", "1 959 m.", "624 m."],
    r: 3, exp: "Os ângulos somam 360°: 30° + x + 2x = 360° → x = 110° (pretendente 2) e 220° (pretendente 3). Raio = 500 m. Arco = (110/360) · 2 · 3,14 · 500 ≈ 959 m. Perímetro = arco + 2 raios = 959 + 1 000 ≈ 1 959 m." },

  { id: "2024-07", ano: 2024, n: 7, tema: "Matemática", d: 2,
    ctx: "Uma rede de supermercados oferece para os clientes do programa de fidelidade duas promoções: “leve 3 unidades do mesmo produto e pague apenas 2” (mercadorias veganas) e “leve 5 unidades do mesmo produto e pague apenas 4” (itens de higiene pessoal).",
    q: "A respeito da promoção “leve 5 unidades do mesmo produto e pague apenas 4”, uma outra promoção que oferece o mesmo desconto percentual seria",
    a: ["a segunda unidade tem 66 % de desconto, ao levar 2 unidades do mesmo produto.", "a segunda unidade tem 40 % de desconto, ao levar 2 unidades do mesmo produto.", "você recebe 33 % de desconto, ao levar 1 unidade de um produto em promoção.", "você recebe 80 % de desconto, ao levar 1 unidade de um produto em promoção.", "pague apenas 5, ao levar 6 unidades do mesmo produto."],
    r: 1, exp: "Pagar 4 de 5 é 1/5 = 20% de desconto no total. Com 2 unidades, 40% de desconto na segunda dá 0,4/2 = 20% do total." },

  { id: "2024-08", ano: 2024, n: 8, tema: "Matemática", d: 2,
    ctx: "A rede de supermercados constatou que existem: 1730 produtos que são mercadorias veganas; 2 650 produtos que são itens de higiene pessoal; e 4 000 que são mercadorias veganas ou itens de higiene pessoal.",
    q: "Com base nessas informações, a quantidade de produtos que estão participando de apenas uma das promoções é",
    a: ["380.", "910.", "1350.", "2270.", "3620."],
    r: 4, exp: "Os dois grupos juntos: 1 730 + 2 650 = 4 380, mas a união é 4 000, então 380 são veganos e de higiene ao mesmo tempo. Só em uma promoção: 4 000 − 380 = 3 620." },

  { id: "2024-09", ano: 2024, n: 9, tema: "Matemática", d: 3,
    ctx: "No rugby, o ensaio vale 5 pontos e pode ser transformado por um pontapé de transformação, que vale 2 pontos suplementares. Suponha que um jogador de rugby tenha um aproveitamento de 80 % ao converter o ensaio por meio desse pontapé.",
    q: "É correto afirmar que a probabilidade de, em 5 tentativas, o jogador conseguir realizar essa transformação, com sucesso, em apenas 2 delas é de, aproximadamente,",
    a: ["32 %.", "20 %.", "15 %.", "10 %.", "5 %."],
    r: 4, exp: "Binomial: C(5, 2) · 0,8² · 0,2³ = 10 · 0,64 · 0,008 = 0,0512 ≈ 5%." },

  { id: "2024-10", ano: 2024, n: 10, tema: "Matemática", d: 1,
    ctx: "Alfredo comprou um colchão (R$ 2.500,00), uma cama de casal (R$ 800,00), armários para a cozinha (R$ 3.500,00) e duas cadeiras de R$ 350,00 cada. Ele optou por parcelar o valor total em três vezes, o que implica um aumento de 10% sobre o valor total a pagar.",
    q: "Logo, o valor de cada uma das parcelas, em reais, foi igual a",
    a: ["R$ 3.250,00.", "R$ 2.383,33.", "R$ 2.750,00.", "R$ 2.166,67.", "R$ 2.500,00."],
    r: 2, exp: "Total: 2 500 + 800 + 3 500 + 700 = 7 500. Com 10%: 8 250. Em 3 vezes: 2 750." },

  // ---------- LÍNGUA PORTUGUESA ----------
  { id: "2024-11", ano: 2024, n: 11, tema: "Língua Portuguesa", d: 2, t: "bosi",
    ctx: "O autor apresenta brevemente as correntes estéticas da Literatura Brasileira após a Geração de 1922.",
    q: "Assinale a alternativa que corresponde a uma das temáticas expostas no texto.",
    a: ["Tinha andado a procurar raízes, à toa: o resto de farinha acabara, não se ouvia um berro de rês perdida na caatinga. […] Despertara-a um grito áspero, vira de perto a realidade e o papagaio, que andava furioso, com os pés apalhetados, numa atitude ridícula. Resolvera de supetão aproveitá-lo como alimento e justificara-se declarando a si mesma que ele era mudo e inútil.",
        "Enquanto pasta alegre o manso gado, / Minha bela Marília, nos sentemos / À sombra deste cedro levantado. / Um pouco meditemos / Na regular beleza. / Que em tudo quanto vive, nos descobre / A sábia Natureza.",
        "Alguém havia, porém, que reparava nessa mudança, que o coração já lho havia denunciado, fazendo-lhe vibrar nas suas cordas todos os simpáticos eflúvios que emanavam do peito cândido e descuidoso da virgem. Esse alguém amava a palidez de Úrsula, esse alguém adorava-lhe a suave melancolia, e o doce langor de seus negros olhos.",
        "Pálida estrela! o canto do crepúsculo / Acorda-te no céu: / Ergue-te nua na floresta morta / No teu doirado véu! / Ergue-te! Eu vim por ti e pela tarde / Pelos campos errar, / Sentir o vento, respirando a vida, / E livre suspirar.",
        "O dono da sege estava no adro, e tinha fome, muita fome, porque era tarde, e almoçara cedo e pouco. Dali pôde fazer sinal ao cocheiro; este fustigou as mulas para ir buscar o patrão. A sege no meio do caminho achou um obstáculo e derrubou-o; esse obstáculo era minha avó. O primeiro ato dessa série de atos foi um movimento de conservação: Humanitas tinha fome."],
    r: 0, exp: "(A) é Vidas Secas, de Graciliano Ramos: seca, fome e o Nordeste decadente, do romance regionalista de 1930. (B) é Arcadismo, (C) Romantismo, (D) Romantismo/Simbolismo e (E) Realismo (Machado de Assis)." },

  { id: "2024-12", ano: 2024, n: 12, tema: "Língua Portuguesa", d: 3, t: "bosi", img: ["2024-12.png"],
    q: "Os termos sublinhados, nas alternativas, pertencem à mesma classe gramatical em",
    a: ["(A) — veja a figura", "(B) — veja a figura", "(C) — veja a figura", "(D) — veja a figura", "(E) — veja a figura"],
    r: 3, exp: "Gabarito oficial: D. A figura mostra as alternativas com os termos sublinhados. Em D, ‘entre’ e ‘e’ são palavras invariáveis que ligam termos (conectivos); nas outras, as palavras sublinhadas são de classes diferentes (por exemplo, adjetivo e substantivo, ou artigo e verbo)." },

  { id: "2024-13", ano: 2024, n: 13, tema: "Língua Portuguesa", d: 2, t: "acotirene",
    q: "Analisando o texto apresentado, pode-se concluir corretamente que se trata de um",
    a: ["versículo, uma vez que numera as subdivisões de um artigo e expõe, por meio da dissertação, informações sobre o quilombo de Palmares.", "poema, uma vez que conta as ações de incursão contra Palmares por meio de uma narrativa construída em versos e rimas.", "artigo de opinião, uma vez que defende um posicionamento em uma linguagem denotativa, valendo-se da dissertação.", "editorial, uma vez que evidencia o posicionamento de uma revista sobre o papel das mulheres por meio da descrição.", "verbete, uma vez que expõe informações sobre determinados termos valendo-se da dissertação."],
    r: 4, exp: "O texto é um verbete de enciclopédia (da Enciclopédia Negra): título com os nomes, época e local, e explicações objetivas." },

  { id: "2024-14", ano: 2024, n: 14, tema: "Língua Portuguesa", d: 3, t: "acotirene",
    q: "Os termos “que”, “os” e “seus” (destacados em maiúsculas no texto) pertencem à mesma classe morfológica, sendo",
    a: ["pronomes, que se referem a “Mocambo”, “armamentos” e “quilombolas”, respectivamente.", "artigos, que acompanham os termos “aparece”, “lugares” e “nomes”, respectivamente.", "pronomes, retomando “Mocambo de Acotirene”, “feridos” e “mulheres”, respectivamente.", "adjetivos, que qualificam os termos “Mocambo”, “lugares” e “nomes”, respectivamente.", "advérbios, que modificam os termos “aparece”, “transferindo” e “silenciou”, respectivamente."],
    r: 2, exp: "‘Que’ (relativo) retoma ‘Mocambo de Acotirene’; ‘os’ (pronome oblíquo) retoma os ‘feridos’; ‘seus’ (possessivo) refere-se às ‘mulheres’ (e a seus nomes)." },

  { id: "2024-15", ano: 2024, n: 15, tema: "Língua Portuguesa", d: 3, t: "acotirene",
    q: "Com base no texto, é correto afirmar que",
    a: ["havia um quilombo dos Palmares que serviu de modelo de resistência a outras comunidades locais, posteriormente chamadas de Porto Calvo.", "os poucos registros existentes sobre a participação feminina nas incursões de captura evidenciam que mulheres ocupavam postos de liderança.", "o cuidado doméstico, na organização dos quilombos, ficava restrito às mulheres, cabendo aos homens as funções de transporte dos mantimentos e de defesa.", "a preocupação dos colonizadores com o destino das mulheres capturadas em Palmares evidencia que elas eram vistas como uma possível ameaça.", "o silenciamento da participação feminina nos quilombos é resultado do isolamento físico de mulheres e crianças, realizado como estratégia para manter as expedições de captura."],
    r: 3, exp: "As autoridades discutiam exterminar ou vender as prisioneiras para longe, para que todos ficassem ‘mais seguros’: viam as mulheres como ameaça. Porto Calvo era uma vila, e as mulheres também combatiam e transportavam armas." },

  { id: "2024-16", ano: 2024, n: 16, tema: "Língua Portuguesa", d: 2, t: "acotirene",
    ctx: "“Se a história colonial SILENCIOU sobre seus nomes, não PODE EVITAR falar de seus atos…”",
    q: "Se o sujeito do período fosse “historiadores”, mantendo-se tempo e modo dos verbos destacados, as formas verbais seriam",
    a: ["silenciasse e podia evitar.", "silenciam e podem evitar.", "silenciarão e poderão evitar.", "silenciavam e puderam evitar.", "silenciaram e podem evitar."],
    r: 4, exp: "‘Silenciou’ (pretérito perfeito, 3ª singular) → ‘silenciaram’ (3ª plural). ‘Pode evitar’ (presente) → ‘podem evitar’." },

  { id: "2024-17", ano: 2024, n: 17, tema: "Língua Portuguesa", d: 1, img: ["2024-17.png"],
    ctx: "Cartum: um médico, de jaleco e com uma prancheta, diz ao paciente sentado: “You tested positive for being negative.” (Você deu positivo para ser negativo.)",
    q: "No cartum, a oposição entre “positive” (positivo) e “negative” (negativo) configura uma",
    a: ["metáfora.", "metonímia.", "personificação.", "paronomásia.", "antítese."],
    r: 4, exp: "Antítese é a oposição entre palavras de sentidos contrários (positivo × negativo)." },

  { id: "2024-18", ano: 2024, n: 18, tema: "Língua Portuguesa", d: 1, t: "pai",
    q: "No texto apresentado, o eu lírico se dirige a",
    a: ["seu melhor amigo de infância, o qual se faz presente nas memórias de sua vivência escolar.", "si mesmo, no passado, quando era possível uma expressão sincera de seus sentimentos.", "sua imagem no espelho, a qual não reconhece devido a mudanças causadas pela velhice.", "seu pai, cuja presença se realiza por meio da escrita em primeira pessoa.", "seus pais, no futuro, evidenciando a saudade que sente de sua infância."],
    r: 3, exp: "O título é ‘Pai’ e o poema fala da letra do pai num papel velho, em que ele ‘ainda consegue conjugar os verbos na primeira pessoa’." },

  { id: "2024-19", ano: 2024, n: 19, tema: "Língua Portuguesa", d: 3, t: "pai",
    ctx: "Nos versos “Descobri / um velho PEDAÇO de papel”, o termo “pedaço” é o núcleo do objeto direto de ‘descobri’. As alternativas citam palavras sublinhadas dos versos: (A) “traços”, (B) “sombra”, (C) “mexendo”, (D) “verbos”, (E) “você”.",
    q: "O termo “pedaço” desempenha a mesma função sintática do vocábulo sublinhado em",
    a: ["“Nesses traços / a sombra da sua mão / ainda está se mexendo” (sublinhado: traços)", "“Nesses traços / a sombra da sua mão / ainda está se mexendo” (sublinhado: sombra)", "“Nesses traços / a sombra da sua mão / ainda está se mexendo” (sublinhado: mexendo)", "“mas nele você ainda / consegue conjugar / os verbos na primeira pessoa” (sublinhado: verbos)", "“mas nele você ainda / consegue conjugar / os verbos na primeira pessoa” (sublinhado: você)"],
    r: 3, exp: "‘Pedaço’ complementa ‘descobri’ sem preposição: objeto direto. ‘Verbos’ complementa ‘conjugar’ da mesma forma: objeto direto. ‘Traços’ é adjunto adverbial; ‘sombra’, sujeito; ‘você’, sujeito." },

  { id: "2024-20", ano: 2024, n: 20, tema: "Língua Portuguesa", d: 3, t: "pai",
    q: "Sobre os termos destacados entre aspas, é correto afirmar que",
    a: ["“sua”, na primeira estrofe, é possessivo e indica que a letra do poema pertence ao enunciador.", "“nesses”, na segunda estrofe, é demonstrativo e expressa proximidade de “traços” com o interlocutor.", "“você”, na terceira estrofe, é pronome de tratamento e evidencia a formalidade entre os interlocutores.", "“nele”, na terceira estrofe, é pessoal reto e exerce função de sujeito da locução “consegue conjugar”.", "“se”, na segunda estrofe, é pronome apassivador e marca a construção da voz passiva sintética."],
    r: 1, exp: "‘Nesses’ (em + esses) é demonstrativo e indica o que está perto do interlocutor, o pai. (A) ‘sua letra’ é do pai; (C) ‘você’ aqui é informal; (D) ‘nele’ é pronome oblíquo precedido de preposição (o sujeito é ‘você’); (E) ‘se’ em ‘está se mexendo’ é parte do verbo pronominal." },

  // ---------- LÍNGUA INGLESA ----------
  { id: "2024-21", ano: 2024, n: 21, tema: "Língua Inglesa", d: 2, img: ["2024-21.png"],
    ctx: "Charge: “Some polar bear populations coping with warming Arctic…”. Um urso enterra a cabeça em um balde de areia (“SAND”) sobre um bloco de gelo que derrete. Dois ursos filhotes comentam: “Bob’s decided to cope by being a climate change denier.”",
    q: "A fala no balão indica que o urso denominado Bob",
    a: ["coordena uma luta contra a mudança climática.", "anseia por outros tipos de alimentação.", "aguarda a chegada do verão.", "sente saudades da costa.", "busca fugir da realidade."],
    r: 4, exp: "Bob enfia a cabeça na areia (como o avestruz) e escolhe ser ‘negacionista’ do clima: foge da realidade." },

  { id: "2024-22", ano: 2024, n: 22, tema: "Língua Inglesa", d: 2, img: ["2024-21.png"],
    q: "A palavra coping, no topo da charge, poderia ser substituída, sem prejuízo de significado, por",
    a: ["dealing.", "risking.", "running.", "stopping.", "playing."],
    r: 0, exp: "‘Cope with’ = lidar com. ‘Dealing (with)’ tem o mesmo sentido." },

  { id: "2024-23", ano: 2024, n: 23, tema: "Língua Inglesa", d: 1, t: "habitos",
    q: "O sufixo -able, na palavra reachable, destacada no segundo parágrafo, indica",
    a: ["ação improvável.", "sensação de saciedade.", "formação de substantivo.", "indicação de capacidade.", "certeza de impossibilidade."],
    r: 3, exp: "O sufixo -able indica possibilidade ou capacidade: reachable = que pode ser alcançado." },

  { id: "2024-24", ano: 2024, n: 24, tema: "Língua Inglesa", d: 2, t: "habitos",
    q: "A sentença “Yet every January 21 very few people can boast that they have kept their resolutions”, no segundo parágrafo,",
    a: ["reforça a ideia de que tomadas de decisão, na virada do ano, são as mais prováveis de se concretizarem.", "mostra que, após 21 dias de persistência, as novas atividades se tornam habituais.", "demonstra que qualquer resolução tomada nas festas de final de ano cai por terra no dia 21 de janeiro.", "indica que, apesar da motivação de realizar novas atividades no início do ano, a maioria das pessoas não consegue mantê-las.", "refuta a ideia de que três semanas sejam realmente necessárias para a solidificação de um novo hábito."],
    r: 3, exp: "‘Yet’ = no entanto: muita motivação no começo do ano, mas poucos (só 9%) mantêm suas metas." },

  { id: "2024-25", ano: 2024, n: 25, tema: "Língua Inglesa", d: 1, t: "habitos",
    q: "De acordo com o texto, para uma ação se tornar um hábito inconsciente deve-se",
    a: ["acordar cedo.", "manter a repetição.", "ter acompanhamento psicológico.", "acabar com hábitos degenerativos.", "estabelecer uma meta na virada do ano."],
    r: 1, exp: "‘Repetition is the key to making it work’, no último parágrafo." },

  { id: "2024-26", ano: 2024, n: 26, tema: "Língua Inglesa", d: 2,
    ctx: "Publicação em rede social que cria conteúdo cômico a partir de questões linguísticas: “What’s the difference between grey and gray? One is a color, and the other is a colour.”",
    q: "O humor do texto se constrói por",
    a: ["perda de sentido.", "equívocos na acentuação.", "variação ortográfica.", "incorreção semântica.", "trocadilho sintático."],
    r: 2, exp: "‘Grey/gray’ e ‘colour/color’ são grafias diferentes da mesma palavra (britânica e americana). A graça é fingir que há duas cores diferentes." },

  // ---------- HISTÓRIA ----------
  { id: "2024-27", ano: 2024, n: 27, tema: "História", d: 2,
    ctx: "“Fale macio e use um porrete.” Segundo os historiadores, essa frase de Theodore Roosevelt Jr., presidente dos Estados Unidos, sintetizou…",
    q: "Assinale a alternativa que completa corretamente a frase.",
    a: ["a Guerra às Drogas, um conjunto de políticas destinadas a desencorajar a produção, a distribuição e o consumo de drogas psicoativas ilegais em países da América Latina.", "a Declaração de Direitos dos cidadãos estadunidenses, que equiparou a posse de armas às liberdades de expressão, de imprensa, de religião e de reunião.", "a Política do Apaziguamento, adotada por Inglaterra e França, em resposta à expansão do domínio alemão sobre a Europa, que daria início à Segunda Guerra Mundial.", "a política do Big Stick, segundo a qual os EUA mantinham negociações amistosas com outros países, enquanto deixavam clara a possibilidade de usar a força para alcançar seus objetivos.", "as negociações do Tratado de Versalhes, segundo o qual a Alemanha e seus aliados se responsabilizaram por todas as perdas e os prejuízos causados pela Primeira Guerra Mundial."],
    r: 3, exp: "‘Speak softly and carry a big stick’ é o lema da política do Big Stick (Roosevelt, início do século XX): diplomacia com ameaça militar, sobretudo na América Latina." },

  { id: "2024-28", ano: 2024, n: 28, tema: "História", d: 2,
    ctx: "“Ao lado das estradas de ferro, as cidades eram o símbolo mais característico da sociedade industrial. A indústria tornou-se fator de aglomeração urbana. A urbanização cresceu em escala gigantesca, e a concentração de pessoas em cidades tornou-se o principal fenômeno social do século XIX.” (Campos e Claro. Oficina de História, 2015)",
    q: "Na Inglaterra, durante a Primeira Revolução Industrial, as cidades",
    a: ["cresceram rapidamente, sem infraestrutura adequada; os serviços sanitários e a iluminação eram precários; e as áreas de concentração de pessoas pobres eram cortadas por avenidas e linhas de estradas de ferro, o que piorava as já insalubres condições de vida dessa população.", "foram resultado dos primeiros esforços de planejamento urbano; os governos promoveram melhorias na circulação e na higienização dos espaços públicos, com a demolição de cortiços, alargamento e iluminação de ruas e avenidas, criação de praças, monumentos e boulevards.", "concentraram a maior parte da população do país; a falta de planejamento urbano, os incentivos à indústria automotiva e o maior poder de consumo das famílias levaram as pessoas a optar pelo transporte individual, o que agravou os problemas de mobilidade urbana.", "registraram grande déficit habitacional, devido ao êxodo rural; para facilitar o acesso ao financiamento de construção, aquisição ou reforma de imóveis, foi criado um sistema financeiro para habitação, com recursos de financiamento imobiliário geridos pelo Estado britânico.", "implementaram projetos de geração de energia renovável; devido à alta demanda das indústrias, foram oferecidos incentivos à pesquisa em áreas como energia eólica, a partir da produção cooperativa entre prefeituras, instituições públicas e empresas privadas, organizações de pesquisa e moradores das grandes cidades."],
    r: 0, exp: "O êxodo rural lotou as cidades industriais inglesas, sem saneamento nem planejamento (cortiços, doenças). O planejamento com boulevards é da Paris de Haussmann. Indústria automotiva e financiamento habitacional são do século XX." },

  { id: "2024-29", ano: 2024, n: 29, tema: "História", d: 1,
    ctx: "“A cena cultural estava efervescente: o cinema havia nascido, as artes visuais e plásticas experimentavam novas formas, com o surgimento do Impressionismo e da Art Nouveau. O período foi marcado por uma cultura urbana de divertimento, de otimismo baseado na paz regional e na prosperidade econômica, além das inovações culturais, científicas e tecnológicas, especialmente o desenvolvimento dos meios de comunicação e de transporte, como o telefone, o telégrafo sem fio, a bicicleta, o automóvel e o avião.”",
    q: "O texto faz referência ao período histórico conhecido como",
    a: ["Renascimento Cultural.", "Revolução Francesa.", "Era Vargas.", "Guerra Fria.", "Belle Époque."],
    r: 4, exp: "A Belle Époque (cerca de 1871–1914) foi o período de otimismo, de inovações e de efervescência cultural que precedeu a Primeira Guerra." },

  { id: "2024-30", ano: 2024, n: 30, tema: "História", d: 2,
    ctx: "“(I) ________, país do Caribe, uma rebelião de negros escravizados deflagrou uma longa guerra racial e civil, que culminou na (II) ________ e na Independência da então mais rica colônia francesa.”",
    q: "Assinale a alternativa que preenche, correta e respectivamente, as lacunas. Opções (I / II): (A) No Haiti / Industrialização; (B) Em Cuba / Reforma Agrária; (C) Em Cuba / Revolução Cubana; (D) No Haiti / Abolição da Escravatura; (E) Na Jamaica / Rebelião da Baía de Morant.",
    a: ["No Haiti — Industrialização", "Em Cuba — Reforma Agrária", "Em Cuba — Revolução Cubana", "No Haiti — Abolição da Escravatura", "Na Jamaica — Rebelião da Baía de Morant"],
    r: 3, exp: "A Revolução Haitiana (1791–1804), liderada por Toussaint Louverture, aboliu a escravidão e levou à independência do Haiti, antiga colônia francesa de São Domingos." },

  { id: "2024-31", ano: 2024, n: 31, tema: "História", d: 2,
    ctx: "“Em 1807, uma frota de malconservados navios de guerra portugueses atravessava o Atlântico em direção ao Brasil, escoltada por uma esquadra inglesa. A bordo, quase dez mil pessoas, entre as quais o príncipe regente D. João e sua corte. Na bagagem, tudo o que podiam carregar: pratas, louças, joias, roupas, livros, manuscritos e mapas. Eles deixaram para trás a ameaça de deposição em direção a uma colônia que nunca mais seria a mesma.”",
    q: "O evento histórico, abordado no texto,",
    a: ["está relacionado à ação de corsários e piratas ingleses, que se caracterizava por ataques a colônias e a navios espanhóis nas Américas, nas Ilhas Caraíbas e no leste do Pacífico.", "pertence ao contexto das Grandes Navegações e marca o momento em que Portugal estabeleceu suas primeiras colônias nos territórios americanos.", "foi resultado da desobediência ao Bloqueio Continental, decretado por Napoleão Bonaparte, e é considerado, por muitos historiadores, o início do processo de Independência do Brasil.", "é considerado o início da Guerra do Ultramar, travada entre Portugal e uma de suas províncias africanas, Moçambique, que lutava por sua independência.", "representa a fuga da elite portuguesa devido à destruição causada em Lisboa, capital do Império, por um terremoto de 9 graus na escala Richter."],
    r: 2, exp: "Portugal não aderiu ao Bloqueio Continental contra a Inglaterra. Ameaçada por Napoleão, a Corte fugiu para o Brasil em 1807–1808, e a abertura dos portos e a elevação a Reino Unido (1815) iniciaram a ruptura com Portugal." },

  { id: "2024-32", ano: 2024, n: 32, tema: "História", d: 2, img: ["2024-32.png"],
    ctx: "Em 11 de fevereiro de 1979, durante um jogo entre Corinthians e Santos, no estádio do Morumbi, dois torcedores estenderam uma faixa na arquibancada: “Anistia ampla, geral e irrestrita”.",
    q: "Nesse contexto histórico, a faixa reivindicava",
    a: ["o perdão aos crimes cometidos pelos integrantes da organização criminosa Comando Vermelho, criada no fim dos anos 1970, no presídio da Ilha Grande, no Rio de Janeiro.", "o fim da perseguição política e criminal a pessoas que se manifestaram, de diversas formas, contra o regime cívico-militar implementado no Brasil, em março de 1964.", "a absolvição de torcedores que, em prisão preventiva, respondiam a processos por brigas violentas nas imediações de estádios paulistanos.", "a assinatura de um decreto presidencial, previsto na Constituição, que extinguia a pena de réus primários condenados a até oito anos de prisão e que já tinham cumprido um quarto da pena.", "a reabilitação criminal de Josef Mengele, médico responsável por experiências macabras nos campos de concentração nazista, que morreu em fevereiro de 1979, em Bertioga, São Paulo."],
    r: 1, exp: "O movimento pela anistia, nos anos finais da ditadura militar, pedia a libertação e o retorno dos perseguidos políticos. A Lei da Anistia foi sancionada em agosto de 1979." },

  // ---------- GEOGRAFIA ----------
  { id: "2024-33", ano: 2024, n: 33, tema: "Geografia", d: 2,
    ctx: "“…é o conjunto de duas ou mais regiões metropolitanas interligadas, conurbadas, por intenso fluxo de pessoas, mercadorias e serviços.” (Paulo Roberto Moraes. Geografia Geral e do Brasil, 2017)",
    q: "O texto exprime o conceito de",
    a: ["tecnopolo.", "megacidade.", "megalópole.", "cidade global.", "hierarquia urbana."],
    r: 2, exp: "Megalópole = várias metrópoles conurbadas (como o eixo Rio–São Paulo, ou Boston–Washington). Megacidade é uma cidade única com mais de 10 milhões de habitantes." },

  { id: "2024-34", ano: 2024, n: 34, tema: "Geografia", d: 3,
    ctx: "O primeiro-ministro de Israel, Benjamin Netanyahu, disse, em 18 de janeiro de 2024, que a ideia de criar um Estado palestino entraria em conflito com a segurança de Israel. Netanyahu afirmou que Israel precisa controlar a segurança de todo o território a oeste da Jordânia.",
    q: "Sobre Israel e Palestina, é correto afirmar que o Estado",
    a: ["palestino foi fundado, no século XXI, pela organização nacionalista Hezbollah, inimiga de Israel, motivo pelo qual este Estado não reconhece a existência de um Estado palestino.", "palestino foi fundado no início de 2024, em terras israelenses, o que levou Israel a se posicionar contra a fundação desse Estado, atacando a Faixa de Gaza e a Cisjordânia.", "de Israel foi fundado no século XIX, durante o congresso Sionista, no qual foi estabelecida a luta contra a fundação de um Estado palestino.", "de Israel foi fundado no século XX, no Oriente Médio, e vê, na criação de um Estado palestino, um perigo para a segurança.", "de Israel é secular, sendo fundado no início da era Cristã, em substituição ao até então existente Estado palestino."],
    r: 3, exp: "Israel foi proclamado em 1948 (século XX), no Oriente Médio. O 1º Congresso Sionista (1897) defendeu a ideia, mas o Estado só surgiu depois." },

  { id: "2024-35", ano: 2024, n: 35, tema: "Geografia", d: 1,
    ctx: "O Brasil é dividido atualmente em cinco Grandes Regiões, de acordo com o IBGE.",
    q: "Sobre as atuais Grandes Regiões Brasileiras e os estados que as compõem, é correto afirmar que a Região",
    a: ["Nordeste é composta pelos estados de Alagoas, Bahia, Ceará, Espírito Santo, Paraíba, Pernambuco, Piauí, Rio Grande do Norte e Sergipe.", "Sudeste é composta pelos estados de Minas Gerais, Rio de Janeiro, São Paulo, além da cidade de Brasília, no Distrito Federal.", "Norte é composta pelos estados do Acre, Amapá, Amazonas, Maranhão, Pará, Rondônia e Roraima.", "Centro-Oeste é composta pelos estados de Goiás, Mato Grosso, Mato Grosso do Sul e Tocantins.", "Sul é composta pelos estados do Paraná, Rio Grande do Sul e Santa Catarina."],
    r: 4, exp: "O Sul tem PR, SC e RS. O Espírito Santo é do Sudeste; o Maranhão é do Nordeste; o Tocantins é do Norte; e Brasília (DF) é do Centro-Oeste." },

  { id: "2024-36", ano: 2024, n: 36, tema: "Geografia", d: 1,
    q: "Em dezembro de 2023, durante a 63ª Cúpula do Mercado Comum do Sul (Mercosul), reunida no Rio de Janeiro, os chefes de Estado desse bloco se encontraram para, dentre outras atividades, oficializar a entrada, como membro pleno do bloco,",
    a: ["do Peru.", "do Chile.", "da Bolívia.", "do Equador.", "da Colômbia."],
    r: 2, exp: "A Bolívia, que estava em processo de adesão, tornou-se membro pleno do Mercosul em dezembro de 2023." },

  { id: "2024-37", ano: 2024, n: 37, tema: "Geografia", d: 2,
    ctx: "“Este domínio morfoclimático se estende ao longo do litoral brasileiro, do Nordeste ao Sul, adentrando com maior intensidade na região Sudeste, possuindo aproximadamente 1 000 000 km². É formado pela intensa ação erosiva na estrutura cristalina das Serras do Mar, da Mantiqueira e do Espinhaço. Possui área de relevo planáltico com morros arredondados, sob influência do clima tropical quente e úmido.”",
    q: "O domínio morfoclimático, apresentado no texto, denomina-se de",
    a: ["cerrado.", "caatinga.", "pradaria.", "araucárias.", "mares de morros."],
    r: 4, exp: "Morros arredondados (‘meia laranja’), clima tropical úmido e Mata Atlântica: é o domínio dos Mares de Morros (Ab’Saber)." },

  { id: "2024-38", ano: 2024, n: 38, tema: "Geografia", d: 1,
    ctx: "Em um determinado mapa, a distância, em linha reta, entre a cidade X e a cidade Y é de 8 centímetros. Na superfície real, a distância, em linha reta, entre essas cidades é de 64 quilômetros.",
    q: "Com base nos dados apresentados, a escala numérica do referido mapa é",
    a: ["1: 800.", "1: 8 000.", "1: 80 000.", "1: 800 000.", "1: 8 000 000."],
    r: 3, exp: "64 km = 6 400 000 cm. Escala = 8 cm : 6 400 000 cm = 1 : 800 000." },

  // ---------- QUÍMICA ----------
  { id: "2024-39", ano: 2024, n: 39, tema: "Química", d: 1, t: "atomos",
    ctx: "Após o experimento descrito, o cientista faz colocações sobre suas observações experimentais, presentes em negrito no texto (o átomo é descontínuo e é formado por duas regiões: o núcleo e a eletrosfera; o núcleo é denso e tem carga positiva; a eletrosfera é uma grande região vazia).",
    q: "Essa descrição se refere ao modelo atômico de",
    a: ["Demócrito.", "Dalton.", "Thomson.", "Rutherford.", "Bohr."],
    r: 3, exp: "A lâmina de ouro bombardeada com partículas alfa é o experimento de Rutherford (1911), que propôs o átomo nuclear: núcleo denso e positivo e eletrosfera quase vazia." },

  { id: "2024-40", ano: 2024, n: 40, tema: "Química", d: 1, t: "atomos",
    q: "Assinale a alternativa que apresenta, respectivamente, o número de prótons, elétrons e nêutrons presentes no isótopo do elemento polônio, mencionado no texto (²¹⁰₈₄Po).",
    a: ["84 – 126 – 210", "84 – 84 – 210", "84 – 84 – 126", "126 – 84 – 126", "126 – 126 – 210"],
    r: 2, exp: "Número atômico Z = 84 = prótons = elétrons (átomo neutro). Nêutrons = A − Z = 210 − 84 = 126." },

  { id: "2024-41", ano: 2024, n: 41, tema: "Química", d: 2,
    ctx: "A esterificação é a reação reversível de ácido carboxílico e álcool, com eliminação de água. Ésteres e aromas: acetato de isoamila = banana; propanoato de isobutila = rum; acetato de benzila = pêssego e rum; butirato de metila = maçã; butirato de etila = abacaxi; formiato de etila = rum, groselha e framboesa; acetato de octila = laranja.",
    q: "São aromas que podem ser produzidos por meio da reação de esterificação descrita no texto, a partir do ácido etanoico,",
    a: ["maçã e abacaxi.", "banana, pêssego e laranja.", "framboesa, groselha e abacaxi.", "rum, groselha e laranja.", "abacaxi e framboesa."],
    r: 1, exp: "Ácido etanoico (acético) forma acetatos: acetato de isoamila (banana), de benzila (pêssego e rum) e de octila (laranja). Os outros ésteres vêm de ácidos butanoico, propanoico ou fórmico." },

  { id: "2024-42", ano: 2024, n: 42, tema: "Química", d: 1, t: "amonia",
    q: "Baseando-se no texto, o ferro atua como",
    a: ["reagente, pois apresenta elevada energia de ativação.", "reagente, pois a reação não ocorre sem sua presença.", "catalisador, aumentando a energia de ativação da reação.", "catalisador, diminuindo a variação de entalpia do processo.", "catalisador, diminuindo a energia de ativação da reação."],
    r: 4, exp: "O ferro ‘acelera o processo’ sem ser consumido: é catalisador, e diminui a energia de ativação. Ele não altera o ΔH." },

  { id: "2024-43", ano: 2024, n: 43, tema: "Química", d: 2, t: "amonia",
    q: "A expressão da constante de equilíbrio da reação, mencionada no texto, é",
    a: ["Kc = [NH₃]² / ([N₂] · [H₂]³)", "Kc = [NH₃] / ([N₂] · [H₂])", "Kc = ([N₂] · [H₂]³) / [NH₃]²", "Kc = ([N₂] · [H₂]) / [NH₃]", "Kc = [NH₃]²"],
    r: 0, exp: "Produtos no numerador e reagentes no denominador, cada concentração elevada ao seu coeficiente: [NH₃]² / ([N₂]¹ · [H₂]³)." },

  { id: "2024-44", ano: 2024, n: 44, tema: "Química", d: 3,
    ctx: "Antiácido: 10 mL de suspensão, sendo que 1 mL contém 61,5 mg de hidróxido de alumínio. Reação: 3 HCl (aq) + Al(OH)₃ (aq) → AlCl₃ (aq) + 3 H₂O (ℓ). Massas molares (g/mol): H = 1, O = 16, Al = 27, Cl = 35,5.",
    q: "Assinale a alternativa que apresenta a quantidade aproximada, em mols, de ácido que será neutralizada.",
    a: ["0,61", "0,10", "0,05", "0,02", "0,01"],
    r: 3, exp: "Massa de Al(OH)₃: 10 · 61,5 = 615 mg = 0,615 g. Massa molar: 27 + 3 · 17 = 78 g/mol, então n = 0,615/78 ≈ 0,0079 mol. HCl neutralizado: 3 · 0,0079 ≈ 0,024 ≈ 0,02 mol." },

  // ---------- BIOLOGIA ----------
  { id: "2024-45", ano: 2024, n: 45, tema: "Biologia", d: 2,
    ctx: "A respiração celular e a fermentação são processos realizados pelos seres vivos para a obtenção de energia. Nesses processos, moléculas de ácidos graxos ou de glicídios, principalmente glicose, são degradadas liberando energia, que é transferida para moléculas de ATP.",
    q: "Comparando esses dois processos, é correto afirmar que ambos",
    a: ["dependem da cadeia transportadora de elétrons para a produção de ATP, que ocorre no citosol.", "ocorrem no interior de mitocôndrias e de cloroplastos, com a participação de enzimas do ciclo de Krebs.", "apresentam uma etapa anaeróbia em comum, denominada glicólise, que independe do gás oxigênio para ocorrer.", "utilizam oxigênio como um aceptor final de elétrons na cadeia respiratória, que ocorre nas cristas mitocondriais.", "produzem a mesma quantidade de moléculas de ATP para cada molécula de glicose completamente degradada."],
    r: 2, exp: "Os dois processos começam com a glicólise, no citosol, que não precisa de O₂. Depois, a respiração (aeróbia) continua na mitocôndria e rende muito mais ATP; a fermentação termina no citosol." },

  { id: "2024-46", ano: 2024, n: 46, tema: "Biologia", d: 2,
    ctx: "A Doença Hemolítica Perinatal (eritroblastose fetal) começa depois do primeiro contato da mãe Rh negativo com as hemácias Rh positivas (parto, gravidez, agulhas, transfusões). O sistema imunológico materno produz anticorpos e guarda a resposta em células de memória. Por isso, em geral, a primeira criança Rh positivo nasce normal, e os sintomas só se manifestam a partir da segunda gestação Rh positivo.",
    q: "Sobre a DHPN, é correto afirmar que",
    a: ["a destruição dos leucócitos do recém-nascido pelos anticorpos maternos provoca anemia e hemorragias.", "a passagem transplacentária de anticorpos, produzidos pelo feto, acarreta a hemólise das hemácias maternas.", "a sensibilização de uma mulher Rh positivo pode ocorrer quando ela recebe transfusão de sangue Rh negativo.", "o feto produz células sanguíneas anormais, que induzem o organismo materno a produzir anticorpos de defesa.", "a mãe Rh negativo, ao ser sensibilizada em uma primeira gravidez, produz anticorpos contra os eritrócitos do filho Rh positivo."],
    r: 4, exp: "A mãe Rh⁻ é sensibilizada no primeiro contato e produz anticorpos anti-Rh, que na gestação seguinte atravessam a placenta e destroem as hemácias do feto Rh⁺ (hemólise)." },

  { id: "2024-47", ano: 2024, n: 47, tema: "Biologia", d: 2, img: ["2024-47.png"],
    ctx: "Figuras sobre o intercâmbio de gases no sistema respiratório humano: (A) extremidade dos bronquíolos e alvéolos; (B) um alvéolo envolto por um capilar sanguíneo (O₂ entra no sangue, CO₂ sai). Os alvéolos têm paredes delgadas e são recobertos por capilares, favorecendo as trocas gasosas e a transformação do sangue venoso em arterial.",
    q: "Essas trocas gasosas, que ocorrem nos capilares sanguíneos dos alvéolos pulmonares, são feitas pelo processo conhecido como",
    a: ["pinocitose, no qual as células dos capilares alveolares formam invaginações para absorver os gases respiratórios.", "fagocitose, no qual células das paredes dos alvéolos formam pseudópodes para englobar os gases respiratórios.", "difusão, no qual ocorre a passagem dos gases respiratórios do meio mais concentrado para o meio menos concentrado.", "osmose, no qual ocorre a ativação das enzimas responsáveis pela penetração dos gases respiratórios nos alvéolos pulmonares.", "transporte ativo, no qual ocorre a passagem dos gases respiratórios do meio menos concentrado para o meio mais concentrado."],
    r: 2, exp: "Os gases atravessam a parede do alvéolo por difusão simples: do local de maior concentração (O₂ no ar, CO₂ no sangue) para o de menor, sem gastar ATP." },

  { id: "2024-48", ano: 2024, n: 48, tema: "Biologia", d: 2,
    ctx: "Sempre que células duplicam seu material genético, ocorre a formação de duas novas duplas fitas de DNA, cada uma direcionada a uma célula-filha.",
    q: "Sobre o processo descrito, é correto afirmar que",
    a: ["a duplicação da molécula de DNA é descrita como conservativa, pois ocorre em trechos de DNA ainda condensados a fim de acelerar a divisão celular e preservar intacta a molécula parental original após o processo.", "as pontes de hidrogênio, entre as bases nitrogenadas da dupla fita de DNA parental, se rompem e as duas fitas se separam, permitindo a formação do RNA, que será transformado em DNA.", "os nucleotídeos livres existentes na célula se encaixam na dupla fita aberta de DNA, de forma complementar, pareando adenina com citosina e timina com guanina.", "a enzima chamada RNA-polimerase catalisa a duplicação da molécula de DNA e orienta o emparelhamento de nucleotídeos livres a cada uma das fitas parental.", "a duplicação da molécula de DNA é semiconservativa, pois cada dupla fita formada consiste de uma fita parental e de uma recém-sintetizada."],
    r: 4, exp: "A replicação é semiconservativa (Meselson e Stahl): cada molécula-filha mantém uma fita antiga e uma nova. O pareamento correto é A–T e C–G, e a enzima é a DNA-polimerase." },

  { id: "2024-49", ano: 2024, n: 49, tema: "Biologia", d: 2, img: ["2024-49.png"],
    ctx: "O diagrama representa, a partir das algas verdes, as relações evolutivas entre plantas terrestres: musgo (I), samambaia (II), araucária (III) e lírio branco (IV). A presença de embrião é a novidade inicial. As letras A, B e C indicam novidades evolutivas compartilhadas pelas plantas acima de cada letra: A está abaixo de samambaia, araucária e lírio; B abaixo de araucária e lírio; C abaixo apenas do lírio.",
    q: "As letras A, B e C correspondem, respectivamente, ao surgimento de",
    a: ["clorofila, sementes e estróbilos.", "sementes, vasos condutores e flores.", "vasos condutores, sementes e flores.", "clorofila, inflorescências e estróbilos.", "vasos condutores, inflorescências e sementes."],
    r: 2, exp: "O musgo não tem vasos; samambaia, araucária e lírio têm (A: vasos condutores). Só araucária e lírio têm sementes (B). Só o lírio tem flores e frutos (C)." },

  { id: "2024-50", ano: 2024, n: 50, tema: "Biologia", d: 1,
    ctx: "O nitrogênio (N₂) corresponde a 79% do ar, mas só alguns micro-organismos fazem a biofixação do nitrogênio. Nos ecossistemas terrestres, a fixação é feita por algumas bactérias, como as do gênero Rhizobium, que vivem nas raízes de leguminosas (feijão, soja e ervilha), com as quais estabelecem uma relação ecológica interespecífica.",
    q: "Essa relação ecológica é denominada",
    a: ["mutualismo, em que todos os participantes se beneficiam.", "comensalismo, em que apenas um dos participantes se beneficia.", "competição, em que todos disputam entre si os recursos do ambiente.", "predatismo, em que um dos participantes mata o outro para se alimentar.", "parasitismo, em que um dos participantes vive no corpo do outro, prejudicando-o."],
    r: 0, exp: "A bactéria fornece nitrogênio utilizável à planta e recebe abrigo e alimento (açúcares): os dois ganham, que é o mutualismo." },

  // ---------- FÍSICA ----------
  { id: "2024-51", ano: 2024, n: 51, tema: "Física", d: 2,
    ctx: "Histórias interessantes envolvendo pipas: (I) Benjamin Franklin empinando uma pipa numa tempestade, na qual coloca uma chave na extremidade de baixo do fio; (II) usinas de eletricidade que usam pipas parafólio a 300–500 m de altura para gerar energia com o vento; (III) navios cargueiros puxados por uma pipa parafólio gigante, à mesma altura de 300 m, que economizam até 30% de combustível em uma travessia oceânica.",
    q: "No caso (I), em que uma descarga elétrica atmosférica utiliza a pipa, o fio e a chave como elementos condutores de eletricidade entre as nuvens e o solo, podemos afirmar corretamente que",
    a: ["a pipa e o fio, usados por Franklin, eram feitos de metal condutor.", "o experimento só foi possível devido ao uso da chave na ponta do fio.", "a descarga elétrica ocorreu em virtude de uma diferença de potencial elétrica (ddp) entre o solo e a nuvem.", "a história descrita é uma lenda por ser proibido empinar pipas com chaves em dias de chuva.", "a descarga elétrica ocorrida só foi possível graças ao gerador instalado por Franklin."],
    r: 2, exp: "Uma descarga atmosférica ocorre quando há grande diferença de potencial entre a nuvem e o solo. Ela não depende de a pipa ser metálica nem de a chave existir." },

  { id: "2024-52", ano: 2024, n: 52, tema: "Física", d: 1,
    ctx: "No caso (II), as pipas parafólio são conectadas a uma turbina e a um gerador para produzir eletricidade a partir do vento, desprezando-se as perdas de energia térmica.",
    q: "Podemos afirmar corretamente que as energias envolvidas no sistema pipa-gerador são",
    a: ["solar, mecânica e elétrica.", "eólica, mecânica e elétrica.", "mecânica, cinética e luminosa.", "eletromagnética, solar e elétrica.", "luminosa, mecânica e aerodinâmica."],
    r: 1, exp: "O vento (energia eólica) move a pipa e a turbina (energia mecânica), e o gerador produz eletricidade." },

  { id: "2024-53", ano: 2024, n: 53, tema: "Física", d: 3,
    ctx: "No caso (III), todo o combustível e a pipa ‘soprada’ pelo vento são usados no movimento de um navio de massa 100 000 t, para conversão, sem perdas, em energia cinética. O navio tem velocidade de 20 nós (≈ 10 m/s). Considere: 1 nó = 0,5 m/s; 1 t = 1 000 kg; Ec = m·v²/2.",
    q: "É correto afirmar que, nessas condições, a pipa parafólio contribui, em joules, com uma economia máxima de",
    a: ["1,5 × 10³.", "3,0 × 10³.", "1,5 × 10⁶.", "1,5 × 10⁹.", "3,0 × 10⁹."],
    r: 3, exp: "m = 1 × 10⁸ kg e v = 10 m/s: Ec = 1 × 10⁸ · 10²/2 = 5 × 10⁹ J. A pipa economiza até 30% do combustível: 0,3 · 5 × 10⁹ = 1,5 × 10⁹ J." },

  { id: "2024-54", ano: 2024, n: 54, tema: "Física", d: 3, img: ["2024-54.png"],
    ctx: "Uma estudante monta um alfabeto com resistores incandescentes e fios bons condutores: letras A, B, C, D e E, cada uma com um ponto X e um ponto Y. Ela aplica uma ddp diferente de zero entre X e Y, para que os resistores incandesçam (não necessariamente com o mesmo brilho) e apareça a letra desejada.",
    q: "Nessa montagem, é correto afirmar que ela obtém sucesso em todas, exceto na letra",
    a: ["A.", "B.", "C.", "D.", "E."],
    r: 4, exp: "Gabarito oficial: E. Na letra E, o traço do meio não faz parte de um caminho fechado entre X e Y, então não passa corrente por ele e ele não se acende. A letra não aparece completa. (Dependendo da figura, as demais têm todos os resistores num caminho entre X e Y.)" },

  { id: "2024-55", ano: 2024, n: 55, tema: "Física", d: 2, img: ["2024-55.png"],
    ctx: "Em 14 de outubro de 2012, o atleta austríaco Felix Baumgartner saltou de uma cápsula, a cerca de 39 km de altitude, para ser o primeiro homem a alcançar Mach 1 (343 m/s). O gráfico compara a velocidade do atleta (0 a 400 m/s em 40 s) com a de um caça F-16 (0 a 500 m/s em 40 s).",
    q: "Com as informações fornecidas, as acelerações escalares médias aproximadas atingidas pelo atleta Felix Baumgartner e pelo caça F-16 são, em m/s², respectivamente,",
    a: ["8,5 e 8,5.", "8,5 e 12,0.", "10,0 e 12,5.", "12,5 e 10,0.", "12,5 e 12,5."],
    r: 2, exp: "Aceleração média = Δv/Δt. Felix: 400/40 = 10 m/s². F-16: 500/40 = 12,5 m/s²." },

  { id: "2024-56", ano: 2024, n: 56, tema: "Física", d: 2,
    ctx: "Na altitude do salto (39 km), a aceleração gravitacional é de aproximadamente 9,7 m/s². O atleta possui 87,0 kg de massa corporal e usa um traje especial de cerca de 13 kg. Considere Ep = m · g · h.",
    q: "Podemos determinar que a energia potencial gravitacional do atleta, em relação à Terra, é, aproximadamente, igual a",
    a: ["38 J.", "33 kJ.", "38 kJ.", "33 MJ.", "38 MJ."],
    r: 4, exp: "Gabarito oficial: E (38 MJ). Ele conta a massa do atleta com o traje: 87 + 13 = 100 kg. Ep = 100 · 9,7 · 39 000 ≈ 3,8 × 10⁷ J = 38 MJ. Só com os 87 kg daria ≈ 33 MJ (letra D); a banca usou a massa total." }
];
