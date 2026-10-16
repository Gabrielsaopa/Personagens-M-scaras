/**
 * Script de População do Compêndio - Máscaras de Nyarlathotep (Capítulo: Peru)
 * Compatível com Foundry VTT v14 e sistema CoC7
 */

const PERU_DATA = [
  // ==========================================
  // ALIADOS OU INDEPENDENTES
  // ==========================================
  {
    name: "Jackson Elias",
    type: "npc",
    subFolder: "Aliados e Independentes",
    characteristics: { str: 70, con: 85, siz: 65, dex: 65, int: 80, app: 55, pow: 80, edu: 70, luck: 80 },
    attribs: { hp: { value: 15, max: 15 }, mp: { value: 16, max: 16 }, san: { value: 76, max: 95 }, mov: 6, db: "+1D4", build: 1, armor: "0" },
    infos: { occupation: "Investigador destemido", age: "41" },
    attacksPerRound: "1",
    biography: `<p><strong>Especial:</strong> Embora Elias tenha algum conhecimento do Mythos de Cthulhu, ele não acredita que seja real antes dos eventos deste cenário. Até ser apresentado a provas incontestáveis, ele logo afirma que coisas relacionadas ao Mythos não passam de folclore ou invenções.</p>
    <hr>
    <p><strong>Combate Pulp:</strong></p>
    <ul>
      <li><strong>Briga:</strong> 80% (40/16), 1D3 + 1D4 de dano, ou por arma</li>
      <li><strong>Revólver .45:</strong> 80% (40/16), 1D10+2 de dano</li>
      <li><strong>Esquivar:</strong> 60% (30/12)</li>
    </ul>
    <p><strong>Talentos Pulp:</strong></p>
    <ul>
      <li><strong>Alerta:</strong> nunca é surpreendido em combate.</li>
      <li><strong>Casca-grossa:</strong> absorve dano, pode gastar 10 pontos de Sorte para ignorar até 5 de dano recebidos em uma rodada de combate.</li>
    </ul>`,
    skills: [
      { name: "Briga", value: 60, fighting: true },
      { name: "Armas de Fogo ( Armas Curtas )", value: 60, firearms: true },
      { name: "Esquivar", value: 50, dodge: true },
      { name: "Arremessar", value: 35 },
      { name: "Arte/Ofício (Escrita)", value: 70 },
      { name: "Charme", value: 45 },
      { name: "Consertos Mecânicos", value: 50 },
      { name: "Dirigir Automóveis", value: 50 },
      { name: "Encontrar", value: 60 },
      { name: "Escalar", value: 60 },
      { name: "Escutar", value: 55 },
      { name: "Furtividade", value: 65 },
      { name: "Lábia", value: 70 },
      { name: "Mundo Natural", value: 45 },
      { name: "Mythos de Cthulhu", value: 4 },
      { name: "Nível de Crédito", value: 40 },
      { name: "Ocultismo", value: 70 },
      { name: "Persuasão", value: 40 },
      { name: "Psicologia", value: 50 },
      { name: "Sobrevivência (Montanhas)", value: 25 },
      { name: "Usar Bibliotecas", value: 65 },
      { name: "Língua (Chinês - Cantonês)", value: 20 },
      { name: "Língua (Inglês)", value: 85 },
      { name: "Língua (Francês)", value: 40 },
      { name: "Língua (Hindustani)", value: 40 },
      { name: "Língua (Português)", value: 45 },
      { name: "Língua (Espanhol)", value: 50 }
    ],
    weapons: [
      { name: "Briga", skillName: "Briga", value: 60, damage: "1D3", addStrenth: true, melee: true },
      { name: "Revólver .45", skillName: "Armas de Fogo ( Armas Curtas )", value: 60, damage: "1D10+2", addStrenth: false, melee: false }
    ]
  },
  {
    name: "Professor Nemesio Sánchez",
    type: "npc",
    subFolder: "Aliados e Independentes",
    characteristics: { str: 50, con: 55, siz: 60, dex: 65, int: 75, app: 65, pow: 50, edu: 85, luck: null },
    attribs: { hp: { value: 11, max: 11 }, mp: { value: 10, max: 10 }, san: { value: 50, max: 99 }, mov: 8, db: "0", build: 0, armor: "0" },
    infos: { occupation: "Arqueólogo acadêmico", age: "35" },
    attacksPerRound: "1",
    biography: `<p><strong>Combate Pulp:</strong></p>
    <ul>
      <li><strong>Briga:</strong> 50% (25/10), 1D3 de dano ou por arma</li>
      <li><strong>Esquivar:</strong> 45% (22/9)</li>
    </ul>
    <p><strong>Talentos Pulp:</strong></p>
    <ul>
      <li><strong>Visão Aguçada:</strong> concede um dado de bônus a testes de Encontrar.</li>
    </ul>`,
    skills: [
      { name: "Briga", value: 30, fighting: true },
      { name: "Esquivar", value: 32, dodge: true },
      { name: "Antropologia", value: 40 },
      { name: "Arqueologia", value: 80 },
      { name: "Arremessar", value: 40 },
      { name: "Encontrar", value: 60 },
      { name: "História", value: 65 },
      { name: "Lábia", value: 70 },
      { name: "Nível de Crédito", value: 40 },
      { name: "Persuasão", value: 40 },
      { name: "Usar Bibliotecas", value: 65 },
      { name: "Língua (Inglês)", value: 40 },
      { name: "Língua (Espanhol)", value: 80 }
    ],
    weapons: [
      { name: "Briga", skillName: "Briga", value: 30, damage: "1D3", addStrenth: true, melee: true }
    ]
  },
  {
    name: "Trinidad Rizo",
    type: "npc",
    subFolder: "Aliados e Independentes",
    characteristics: { str: 55, con: 65, siz: 50, dex: 65, int: 70, app: 55, pow: 50, edu: 65, luck: null },
    attribs: { hp: { value: 11, max: 11 }, mp: { value: 10, max: 10 }, san: { value: 50, max: 99 }, mov: 9, db: "0", build: 0, armor: "0" },
    infos: { occupation: "Estudante empolgada", age: "19" },
    attacksPerRound: "1",
    biography: `<p>Estudante empolgada da Universidade de Lima, assistente do Professor Sánchez.</p>`,
    skills: [
      { name: "Briga", value: 25, fighting: true },
      { name: "Esquivar", value: 32, dodge: true },
      { name: "Antropologia", value: 20 },
      { name: "Arqueologia", value: 50 },
      { name: "Arremessar", value: 30 },
      { name: "Encontrar", value: 60 },
      { name: "Escutar", value: 40 },
      { name: "Furtividade", value: 35 },
      { name: "História", value: 45 },
      { name: "Nível de Crédito", value: 20 },
      { name: "Usar Bibliotecas", value: 65 },
      { name: "Língua (Inglês)", value: 10 },
      { name: "Língua (Espanhol)", value: 70 }
    ],
    weapons: [
      { name: "Briga", skillName: "Briga", value: 25, damage: "1D3", addStrenth: true, melee: true }
    ]
  },
  {
    name: "Petronila Cupitina",
    type: "npc",
    subFolder: "Aliados e Independentes",
    characteristics: { str: 30, con: 55, siz: 45, dex: 35, int: 65, app: 45, pow: 70, edu: 50, luck: null },
    attribs: { hp: { value: 10, max: 10 }, mp: { value: 14, max: 14 }, san: { value: 70, max: 99 }, mov: 3, db: "-1", build: -1, armor: "0" },
    infos: { occupation: "Hoteleira pragmática", age: "71" },
    attacksPerRound: "1",
    biography: `<p>Hoteleira pragmática em Puno.</p>`,
    skills: [
      { name: "Briga", value: 25, fighting: true },
      { name: "Esquivar", value: 17, dodge: true },
      { name: "Arremessar", value: 30 },
      { name: "Balançar Bengala Ameaçadoramente", value: 55 },
      { name: "Encontrar", value: 50 },
      { name: "Escutar", value: 55 },
      { name: "Intimidação", value: 55 },
      { name: "Nível de Crédito", value: 50 },
      { name: "Psicologia", value: 40 },
      { name: "Língua (Espanhol)", value: 65 }
    ],
    weapons: [
      { name: "Briga", skillName: "Briga", value: 25, damage: "1D3", addStrenth: true, melee: true },
      { name: "Bengala", skillName: "Briga", value: 25, damage: "1D6", addStrenth: true, melee: true }
    ]
  },
  {
    name: "Julio Céspedes",
    type: "npc",
    subFolder: "Aliados e Independentes",
    characteristics: { str: 65, con: 65, siz: 65, dex: 55, int: 50, app: 40, pow: 45, edu: 45, luck: null },
    attribs: { hp: { value: 13, max: 13 }, mp: { value: 9, max: 9 }, san: { value: 45, max: 99 }, mov: 8, db: "+1D4", build: 1, armor: "0" },
    infos: { occupation: "Pai protetor", age: "38" },
    attacksPerRound: "1",
    biography: `<p>Pai protetor de Domingo Céspedes.</p>`,
    skills: [
      { name: "Briga", value: 40, fighting: true },
      { name: "Armas de Fogo ( Rifles/Espingardas )", value: 40, firearms: true },
      { name: "Esquivar", value: 30, dodge: true },
      { name: "Escutar", value: 35 },
      { name: "Encontrar", value: 40 },
      { name: "Psicologia", value: 45 },
      { name: "Língua (Espanhol)", value: 45 }
    ],
    weapons: [
      { name: "Briga", skillName: "Briga", value: 40, damage: "1D3", addStrenth: true, melee: true },
      { name: "Rifle", skillName: "Armas de Fogo ( Rifles/Espingardas )", value: 40, damage: "2D6+4", addStrenth: false, melee: false }
    ]
  },
  {
    name: "Domingo Céspedes",
    type: "npc",
    subFolder: "Aliados e Independentes",
    characteristics: { str: 60, con: 55, siz: 55, dex: 65, int: 60, app: 60, pow: 55, edu: 50, luck: null },
    attribs: { hp: { value: 3, max: 11 }, mp: { value: 11, max: 11 }, san: { value: 55, max: 99 }, mov: 9, db: "0", build: 0, armor: "0" },
    infos: { occupation: "Filho gravemente ferido", age: "15" },
    attacksPerRound: "1",
    biography: `<p><strong>Nota sobre Ferimentos:</strong> Atualmente os pontos de vida estão reduzidos para <strong>3</strong> (máximo 11), MOV reduzido para <strong>0*</strong> (normal 9) e Esquivar reduzido para <strong>10% (5/2)</strong> (normalmente 27% (13/5)) devido ao ferimento grave.</p>`,
    skills: [
      { name: "Briga", value: 40, fighting: true },
      { name: "Esquivar", value: 10, dodge: true },
      { name: "Escutar", value: 35 },
      { name: "Encontrar", value: 40 },
      { name: "Psicologia", value: 30 },
      { name: "Língua (Espanhol)", value: 55 }
    ],
    weapons: [
      { name: "Briga", skillName: "Briga", value: 40, damage: "1D3", addStrenth: true, melee: true }
    ]
  },
  {
    name: "Nayra",
    type: "npc",
    subFolder: "Aliados e Independentes",
    characteristics: { str: 40, con: 55, siz: 50, dex: 50, int: 65, app: 50, pow: 80, edu: 65, luck: null },
    attribs: { hp: { value: 10, max: 10 }, mp: { value: 16, max: 16 }, san: { value: 80, max: 97 }, mov: 3, db: "0", build: 0, armor: "0" },
    infos: { occupation: "Curandeira e sábia", age: "76" },
    attacksPerRound: "1",
    biography: `<p><strong>Talentos Pulp / Perícias Psíquicas*:</strong></p>
    <ul>
      <li><strong>Poder Psíquico: Divinação:</strong> 60%</li>
      <li><strong>Poder Psíquico: Clarividência:</strong> 50%</li>
    </ul>
    <p><em>*As perícias psíquicas de Nayra se aplicam tanto em jogos clássicos quanto em jogos pulp.</em></p>`,
    skills: [
      { name: "Briga", value: 25, fighting: true },
      { name: "Esquivar", value: 25, dodge: true },
      { name: "Clarividência e Divinação", value: 55 },
      { name: "Poder Psíquico: Divinação", value: 60 },
      { name: "Poder Psíquico: Clarividência", value: 50 },
      { name: "Conhecimento (Folclore Peruano)", value: 70 },
      { name: "Encontrar", value: 50 },
      { name: "Escutar", value: 40 },
      { name: "História", value: 50 },
      { name: "Medicina", value: 50 },
      { name: "Mythos de Cthulhu", value: 2 },
      { name: "Ocultismo", value: 65 },
      { name: "Persuasão", value: 55 },
      { name: "Primeiros Socorros", value: 70 },
      { name: "Psicologia", value: 60 },
      { name: "Língua (Aymara)", value: 65 },
      { name: "Língua (Espanhol)", value: 40 }
    ],
    weapons: [
      { name: "Briga", skillName: "Briga", value: 25, damage: "1D3", addStrenth: true, melee: true }
    ]
  },

  // ==========================================
  // ADVERSÁRIOS E MONSTROS
  // ==========================================
  {
    name: "Augustus Larkin (Forma Humana)",
    type: "npc",
    subFolder: "Adversários e Monstros",
    characteristics: { str: 45, con: 35, siz: 65, dex: 45, int: 60, app: 45, pow: 50, edu: 65, luck: 50 },
    attribs: { hp: { value: 10, max: 10 }, mp: { value: 10, max: 10 }, san: { value: 9, max: 72 }, mov: 7, db: "0", build: 0, armor: "0" },
    infos: { occupation: "Hospedeiro de Nyarlathotep", age: "32" },
    attacksPerRound: "1",
    biography: `<p>Este perfil é para Larkin em forma humana (Larkin ainda possui um resquício de humanidade: SAN 09). Se ele ficar completamente possuído, use a ficha <strong>Augustus Larkin Possuído por Nyarlathotep</strong>.</p>
    <hr>
    <p><strong>Combate Pulp:</strong></p>
    <ul>
      <li><strong>Briga:</strong> 45% (22/9), 1D3 de dano ou por arma</li>
      <li><strong>Esquivar:</strong> 35% (17/7)</li>
    </ul>
    <p><strong>Talentos Pulp:</strong></p>
    <ul>
      <li><strong>Poder Psíquico: Divinação:</strong> 60%</li>
    </ul>`,
    skills: [
      { name: "Briga", value: 25, fighting: true },
      { name: "Esquivar", value: 22, dodge: true },
      { name: "Arremessar", value: 30 },
      { name: "Charme", value: 45 },
      { name: "Encontrar", value: 40 },
      { name: "Escutar", value: 55 },
      { name: "Furtividade", value: 50 },
      { name: "Intimidação", value: 25 },
      { name: "Lábia", value: 70 },
      { name: "Mythos de Cthulhu", value: 27 },
      { name: "Nível de Crédito", value: 60 },
      { name: "Persuasão", value: 40 },
      { name: "Psicologia", value: 40 },
      { name: "Usar Bibliotecas", value: 25 },
      { name: "Língua (Inglês)", value: 65 },
      { name: "Língua (Kikuyu)", value: 15 },
      { name: "Língua (Espanhol)", value: 30 },
      { name: "Língua (Swahili)", value: 25 }
    ],
    weapons: [
      { name: "Briga", skillName: "Briga", value: 25, damage: "1D3", addStrenth: true, melee: true }
    ]
  },
  {
    name: "Augustus Larkin Possuído por Nyarlathotep",
    type: "creature",
    subFolder: "Adversários e Monstros",
    characteristics: { str: 60, con: 95, siz: 65, dex: 95, int: 430, app: 45, pow: 500, edu: null, luck: null },
    attribs: { hp: { value: 16, max: 16 }, mp: { value: 100, max: 100 }, san: { value: null, max: null }, mov: 7, db: "+1D4", build: 1, armor: "0" },
    infos: { occupation: "Arauto das Trevas" },
    attacksPerRound: "1",
    sanLoss: { checkPassed: "0", checkFailled: "0" },
    biography: `<p><strong>Talentos Pulp:</strong></p>
    <ul>
      <li><strong>Alerta:</strong> nunca é surpreendido em combate.</li>
    </ul>
    <p><strong>Armadura:</strong> Nenhuma; Larkin pode ser morto por meios físicos normais. Ao contrário de outros hospedeiros possuídos por Nyarlathotep, Larkin não assume uma forma monstruosa ao morrer.</p>
    <p><strong>Feitiços:</strong> Nyarlathotep conhece todos os feitiços do Mythos, usa <em>Sugestão Mental</em> quando necessário.</p>
    <p><strong>Perda de Sanidade:</strong> Nenhuma.</p>`,
    skills: [
      { name: "Briga", value: 90, fighting: true },
      { name: "Esquivar", value: 60, dodge: true },
      { name: "Arremessar", value: 80 },
      { name: "Encontrar", value: 99 },
      { name: "Escutar", value: 99 },
      { name: "Intimidação", value: 99 },
      { name: "Psicologia", value: 90 }
    ],
    weapons: [
      { name: "Briga", skillName: "Briga", value: 90, damage: "1D3", addStrenth: true, melee: true }
    ]
  },
  {
    name: "Luis de Mendoza",
    type: "creature",
    subFolder: "Adversários e Monstros",
    characteristics: { str: 100, con: 90, siz: 65, dex: 75, int: 30, app: 50, pow: 50, edu: 20, luck: 25 },
    attribs: { hp: { value: 15, max: 15 }, mp: { value: 10, max: 10 }, san: { value: null, max: null }, mov: 7, db: "+1D6", build: 2, armor: "Regenera 1 PV/rodada (2 PV/rodada em Pulp)" },
    infos: { occupation: "Conquistador morto-vivo (Kharisiri)" },
    attacksPerRound: "1 (agarrar/morder, arranhar, socar)",
    sanLoss: { checkPassed: "0", checkFailled: "1D6" },
    biography: `<p><strong>Agarrar (mnbr):</strong> Segura e prende uma vítima, pronto para sugar a vida dela. Na rodada seguinte, sua boca se prende ao corpo de sua vítima e começa a sugar gordura, sangue e outros fluidos, devorando <strong>1D10 de FOR, 1D10 de CON, e 1D4 de TAM por rodada</strong> até se saciar ou parar (com zero de CON a vítima morre). A vítima pode tentar libertar-se com um teste resistido de FOR. Se sobreviver ao ataque, a vítima recupera FOR e CON à taxa de 1D10 pontos por semana, e 1 de TAM por semana, até retornar aos valores normais; no entanto, o ataque deixa uma cicatriz hedionda.</p>
    <p><strong>Espada:</strong> Quando está esperando por problemas, de Mendoza leva a espada que usava em seus dias como um conquistador. Ela é bem velha, mas está conservada e afiada.</p>
    <hr>
    <p><strong>Combate Pulp:</strong></p>
    <ul>
      <li><strong>Lutar:</strong> 75% (37/15), 1D3 + 1D6 de dano</li>
      <li><strong>Agarrar (mnbr):</strong> 75% (37/15)</li>
      <li><strong>Espada:</strong> 50% (25/10), 1D8 + 1D6 de dano</li>
      <li><strong>Esquivar:</strong> 60% (30/12)</li>
      <li><strong>Nota Pulp:</strong> Regenera 2 pontos de vida por rodada.</li>
      <li><strong>Talento Pulp - Ataques Rápidos:</strong> Pode gastar 10 pontos de Sorte para ganhar outro ataque corpo a corpo em uma única rodada de combate.</li>
    </ul>
    <hr>
    <p><strong>Armadura:</strong> Regenera 1 ponto de vida por rodada após atingir 0 ponto de vida. Só pode ser morto por desmembramento completo ou incineração. Se um kharisiri for apenas decapitado, ele pode se recuperar se conseguir encontrar a cabeça e recolocá-la. Se a conexão dos kharisiri com o Pai dos Vermes for cortada pela restauração do sigilo, eles perdem essa habilidade de se regenerar, desfazendo-se à taxa de 1 ponto de vida a cada 10 minutos conforme vai envelhecendo e tornando-se pó.</p>
    <p><strong>Feitiços:</strong> Contactar Pai dos Vermes (Nyarlathotep).</p>
    <p><strong>Perda de Sanidade:</strong> 0/1D6 de Sanidade por ver um kharisiri na sua forma monstruosa ou no processo de transformação. Não há perda de Sanidade se for encontrado em forma humana.</p>`,
    skills: [
      { name: "Lutar (Briga)", value: 60, fighting: true },
      { name: "Lutar (Espada)", value: 50, fighting: true },
      { name: "Esquivar", value: 35, dodge: true },
      { name: "Encontrar", value: 60 },
      { name: "Escutar", value: 60 },
      { name: "Furtividade", value: 70 },
      { name: "Intimidação", value: 70 }
    ],
    weapons: [
      { name: "Lutar (Arranhar/Socar)", skillName: "Lutar (Briga)", value: 60, damage: "1D3", addStrenth: true, melee: true },
      { name: "Agarrar (Manobra - Sugar Vida)", skillName: "Lutar (Briga)", value: 60, damage: "Manobra (Drena 1D10 FOR/CON e 1D4 TAM)", addStrenth: false, melee: true },
      { name: "Espada de Conquistador", skillName: "Lutar (Espada)", value: 50, damage: "1D8", addStrenth: true, melee: true }
    ]
  },
  // KHARISIRI 1 A 4
  ...[
    { num: 1, str: 90, con: 85, siz: 60, dex: 65, pow: 45, hp: 14, db: "+1D4", build: 1 },
    { num: 2, str: 95, con: 95, siz: 70, dex: 55, pow: 50, hp: 16, db: "+1D6", build: 2 },
    { num: 3, str: 100, con: 90, siz: 75, dex: 60, pow: 55, hp: 16, db: "+1D6", build: 2 },
    { num: 4, str: 95, con: 85, siz: 65, dex: 50, pow: 40, hp: 15, db: "+1D4", build: 1 }
  ].map(k => ({
    name: `Kharisiri, Sanguessuga Imortal #${k.num}`,
    type: "creature",
    subFolder: "Adversários e Monstros",
    characteristics: { str: k.str, con: k.con, siz: k.siz, dex: k.dex, int: 30, app: 50, pow: k.pow, edu: null, luck: null },
    attribs: { hp: { value: k.hp, max: k.hp }, mp: { value: Math.floor(k.pow / 5), max: Math.floor(k.pow / 5) }, san: { value: null, max: null }, mov: 7, db: k.db, build: k.build, armor: "Regenera 1 PV/rodada" },
    infos: { occupation: "Sanguessuga Imortal" },
    attacksPerRound: "1 (agarrar/morder, arranhar, socar)",
    sanLoss: { checkPassed: "0", checkFailled: "1D6" },
    biography: `<p><strong>Agarrar (mnbr):</strong> Segura e prende uma vítima, pronto para sugar a vida dela. Na rodada seguinte, sua boca se prende ao corpo de sua vítima e começa a sugar gordura, sangue e outros fluidos, devorando <strong>1D10 de FOR, 1D10 de CON, e 1D4 de TAM por rodada</strong> até se saciar ou parar (com zero de CON, a vítima morre). A vítima pode tentar libertar-se com um teste resistido de FOR.</p>
    <p><strong>Combate Pulp:</strong> Briga 70% (35/14), 1D3 + DX de dano. Kharisiri não se esquivam.</p>
    <p><strong>Armadura:</strong> Regenera 1 ponto de vida por rodada após atingir 0 ponto de vida. Só pode ser morto por desmembramento completo ou incineração.</p>
    <p><strong>Feitiços:</strong> Contactar Pai dos Vermes (Nyarlathotep).</p>
    <p><strong>Perda de Sanidade:</strong> 0/1D6 na forma monstruosa ou transformando-se.</p>`,
    skills: [
      { name: "Briga", value: 60, fighting: true },
      { name: "Esquivar (Não se esquiva)", value: 0, dodge: true }
    ],
    weapons: [
      { name: "Briga", skillName: "Briga", value: 60, damage: "1D3", addStrenth: true, melee: true },
      { name: "Agarrar (Manobra)", skillName: "Briga", value: 60, damage: "Manobra (Sugar Vida)", addStrenth: false, melee: true }
    ]
  })),
  {
    name: "Múmia Animada",
    type: "creature",
    subFolder: "Adversários e Monstros",
    characteristics: { str: 80, con: 80, siz: 40, dex: 35, int: null, app: null, pow: 5, edu: null, luck: null },
    attribs: { hp: { value: 12, max: 12 }, mp: { value: 1, max: 1 }, san: { value: null, max: null }, mov: 6, db: "0", build: 0, armor: "Ignora dano exceto na cabeça" },
    infos: { occupation: "Suposto monte de trapos" },
    attacksPerRound: "1 (soco, rasgar, ou transferir larva)",
    sanLoss: { checkPassed: "0", checkFailled: "1D8" },
    biography: `<p>Essas formas ressequidas são os restos das vítimas dos kharisiri, animadas por uma das larvas do deus. Ao contrário do kharisiri, são irracionais.</p>
    <p><strong>Entrar em corpo (mnbr):</strong> Uma larva pode entrar no corpo de um alvo através de qualquer orifício ou ferimento, desde que passe pelo menos uma rodada rastejando até o lugar. A gosma que exsuda da larva causa 1 ponto de dano por rodada se entrar em contato com pele nua.</p>
    <p><strong>Combate Pulp:</strong> Briga 45% (22/9), 1D4 de dano. Múmias não se esquivam.</p>
    <p><strong>Armadura:</strong> Lesões graves causadas contra o tronco causam a perda de um membro; caso contrário, ignorar todo dano exceto na cabeça (um dado de penalidade para atingir a cabeça).</p>
    <p><strong>Perda de Sanidade:</strong> 0/1D8 pontos de Sanidade.</p>`,
    skills: [
      { name: "Briga", value: 30, fighting: true },
      { name: "Furtividade", value: 40 },
      { name: "Parecer uma Pilha de Trapos", value: 90 }
    ],
    weapons: [
      { name: "Briga (Soco/Rasgar)", skillName: "Briga", value: 30, damage: "1D3", addStrenth: false, melee: true },
      { name: "Entrar em Corpo (Manobra da Larva)", skillName: "Briga", value: 30, damage: "1 por rodada (ácido/gosma)", addStrenth: false, melee: true }
    ]
  },
  {
    name: "Larva de Kharisiri",
    type: "creature",
    subFolder: "Adversários e Monstros",
    characteristics: { str: 10, con: 45, siz: 5, dex: 85, int: 10, app: null, pow: 50, edu: null, luck: null },
    attribs: { hp: { value: 5, max: 5 }, mp: { value: 10, max: 10 }, san: { value: null, max: null }, mov: 9, db: "-2", build: -2, armor: "0" },
    infos: { occupation: "Semente de um deus" },
    attacksPerRound: "1",
    sanLoss: { checkPassed: "0", checkFailled: "1D3" },
    biography: `<p>Fragmento da carne do Pai dos Vermes do tamanho aproximado de um punho humano, composto de protoplasma branco semelhante a gordura coagulada e rançosa.</p>
    <p><strong>Fluidos Cáusticos:</strong> Causam queimaduras químicas (1 ponto de dano por rodada de exposição em pele nua). Uma vez dentro de um hospedeiro humano, o hospedeiro recém-infectado precisa passar em um teste Extremo de CON para permanecer consciente, lúcido e capaz de se comunicar.</p>
    <p><strong>Combate Pulp:</strong> Lutar 45% (22/9), 1D3-2 de dano (mínimo de 1); Esquivar 95% (47/19).</p>
    <p><strong>Perda de Sanidade:</strong> 0/1D3 pontos de Sanidade.</p>`,
    skills: [
      { name: "Lutar", value: 25, fighting: true },
      { name: "Esquivar", value: 75, dodge: true },
      { name: "Apertar-se em Passagens Pequenas", value: 90 },
      { name: "Escalar", value: 70 },
      { name: "Furtividade", value: 60 }
    ],
    weapons: [
      { name: "Lutar (Contato Cáustico)", skillName: "Lutar", value: 25, damage: "1D3-2", addStrenth: false, melee: true },
      { name: "Entrar em Corpo (Manobra)", skillName: "Lutar", value: 25, damage: "Infecção", addStrenth: false, melee: true }
    ]
  },
  {
    name: "Pai dos Vermes",
    type: "creature",
    subFolder: "Adversários e Monstros",
    characteristics: { str: 200, con: 150, siz: 450, dex: 65, int: 1, app: null, pow: 500, edu: null, luck: null },
    attribs: { hp: { value: 60, max: 60 }, mp: { value: 100, max: 100 }, san: { value: null, max: null }, mov: 0, db: "+7D6", build: 8, armor: "0" },
    infos: { occupation: "Avatar aprisionado de Nyarlathotep" },
    attacksPerRound: "1 (golpear com pseudópodes, pústulas explosivas)",
    sanLoss: { checkPassed: "1D6", checkFailled: "1D20" },
    biography: `<p>Massa monstruosa e convoluta feita inteiramente de gordura rançosa, contorcendo-se com larvas e vermes.</p>
    <p><strong>Ataques corpo a corpo:</strong> Embora imóvel, seções de seu corpo alcançam até 6 metros como pseudópodes grandes e amorfos (85%, 7D6 de dano).</p>
    <p><strong>Pústulas explosivas (100%):</strong> Quem estiver dentro de 100 metros está sujeito a receber 2D10 de dano devido a queimaduras corrosivas. Cobertura leve não oferece proteção; cobertura pesada pode negar ou reduzir pela metade.</p>
    <p><strong>Especial (Fedor de Decomposição):</strong> Investigadores em sua presença precisam passar por um teste de CON ou serão incapacitados por náuseas e vômitos.</p>
    <p><strong>Perda de Sanidade:</strong> 1D6/1D20 pontos de Sanidade.</p>`,
    skills: [
      { name: "Lutar (Pseudópodes)", value: 85, fighting: true },
      { name: "Pústulas Explosivas", value: 100, firearms: true },
      { name: "Emite Odores Nefastos", value: 100 }
    ],
    weapons: [
      { name: "Golpear com Pseudópodes (Alcance 6m)", skillName: "Lutar (Pseudópodes)", value: 85, damage: "7D6", addStrenth: false, melee: true },
      { name: "Pústulas Explosivas (Alcance 100m)", skillName: "Pústulas Explosivas", value: 100, damage: "2D10", addStrenth: false, melee: false }
    ]
  }
];

/**
 * Função utilitária para converter nosso objeto simplificado em um Documento Actor + Items do CoC7
 */
function buildCoC7ActorData(entry, folderId) {
  const characteristics = {};
  for (const [k, v] of Object.entries(entry.characteristics)) {
    characteristics[k] = { value: v, tempValue: v };
  }

  const items = [];

  // Criar Perícias (Skills)
  for (const sk of entry.skills || []) {
    const isSpec = sk.name.includes("(") && sk.name.includes(")");
    let mainName = sk.name;
    let specName = "";
    if (isSpec) {
      const parts = sk.name.split("(");
      mainName = parts[0].trim();
      specName = parts[1].replace(")", "").trim();
    }
    items.push({
      name: sk.name,
      type: "skill",
      system: {
        skillName: isSpec ? specName : mainName,
        specialization: isSpec ? mainName : "",
        value: sk.value,
        base: sk.value,
        properties: {
          special: isSpec,
          fighting: !!sk.fighting,
          firearms: !!sk.firearms,
          dodge: !!sk.dodge
        }
      }
    });
  }

  // Criar Armas (Weapons)
  for (const wp of entry.weapons || []) {
    items.push({
      name: wp.name,
      type: "weapon",
      system: {
        skill: {
          main: { name: wp.skillName }
        },
        range: {
          normal: {
            value: wp.value,
            damage: wp.damage
          }
        },
        properties: {
          melee: !!wp.melee,
          rngd: !wp.melee,
          addb: !!wp.addStrenth
        }
      }
    });
  }

  const systemData = {
    characteristics,
    attribs: {
      hp: { value: entry.attribs.hp.value, max: entry.attribs.hp.max },
      mp: { value: entry.attribs.mp.value, max: entry.attribs.mp.max },
      san: {
        value: entry.attribs.san.value,
        max: entry.attribs.san.max,
        dailyLoss: 0
      },
      mov: { value: entry.attribs.mov },
      db: { value: entry.attribs.db },
      build: { value: entry.attribs.build },
      armor: { value: entry.attribs.armor }
    },
    infos: {
      occupation: entry.infos?.occupation || "",
      age: entry.infos?.age || ""
    },
    special: {
      attacksPerRound: entry.attacksPerRound || "1",
      sanLoss: {
        checkPassed: entry.sanLoss?.checkPassed || "",
        checkFailled: entry.sanLoss?.checkFailled || ""
      }
    },
    biography: [
      {
        title: "Detalhes, Combate Pulp e Notas",
        value: entry.biography || ""
      }
    ],
    description: {
      keeper: entry.biography || ""
    }
  };

  return {
    name: entry.name,
    type: entry.type,
    folder: folderId,
    system: systemData,
    items: items
  };
}

/**
 * Função principal que cria a pasta "Peru" e importa os personagens no Compêndio
 */
async function popularCompendioPeru() {
  const pack = game.packs.get("mascaras-compendio.personagens");
  if (!pack) {
    return ui.notifications.error("Compêndio 'mascaras-compendio.personagens' não encontrado!");
  }

  ui.notifications.info("Iniciando população dos personagens do Peru no compêndio...");

  // Destravar o compêndio se estiver bloqueado
  const wasLocked = pack.locked;
  if (wasLocked) await pack.configure({ locked: false });

  // Verificar se a pasta "Peru" já existe no Compêndio
  let peruFolder = pack.folders.find(f => f.name === "Peru" && !f.folder);
  if (!peruFolder) {
    peruFolder = await Folder.create(
      { name: "Peru", type: "Actor", color: "#8b0000" },
      { pack: pack.collection }
    );
  }

  // Criar subpastas dentro de "Peru" para melhor organização
  const subFolders = {};
  for (const subName of ["Aliados e Independentes", "Adversários e Monstros"]) {
    let sf = pack.folders.find(f => f.name === subName && f.folder?.id === peruFolder.id);
    if (!sf) {
      sf = await Folder.create(
        { name: subName, type: "Actor", folder: peruFolder.id },
        { pack: pack.collection }
      );
    }
    subFolders[subName] = sf.id;
  }

  // Carregar índice atual para evitar duplicatas
  await pack.getIndex();

  let criados = 0;
  for (const npc of PERU_DATA) {
    const existing = pack.index.find(i => i.name === npc.name);
    if (existing) {
      console.log(`[Máscaras Compêndio] ${npc.name} já existe no compêndio, pulando...`);
      continue;
    }

    const folderId = subFolders[npc.subFolder] || peruFolder.id;
    const actorData = buildCoC7ActorData(npc, folderId);
    await Actor.create(actorData, { pack: pack.collection });
    criados++;
  }

  if (wasLocked) await pack.configure({ locked: true });
  ui.notifications.info(`Concluído! ${criados} personagens do Peru foram adicionados ao compêndio!`);
}

// Registra no objeto global para você poder rodar via Macro se desejar, ou roda automaticamente na primeira vez
Hooks.once("ready", async () => {
  if (!game.user.isGM) return;

  window.MascarasCompendio = {
    popularPeru: popularCompendioPeru
  };

  const pack = game.packs.get("mascaras-compendio.personagens");
  if (pack) {
    await pack.getIndex();
    const peruFolder = pack.folders.find(f => f.name === "Peru");
    if (!peruFolder) {
      await popularCompendioPeru();
    }
  }
});