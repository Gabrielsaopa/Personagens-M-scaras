/**
 * Script de População do Compêndio - Máscaras de Nyarlathotep (Capítulos: Peru e América)
 * Compatível com Foundry VTT v14 e sistema CoC7
 */

const PERU_DATA = [
  // ==========================================
  // PERU - ALIADOS OU INDEPENDENTES
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
    <p><strong>Combate Pulp:</strong> Briga 80% (40/16), 1D3 + 1D4; Revólver .45 80% (40/16), 1D10+2; Esquivar 60% (30/12).</p>
    <p><strong>Talentos Pulp:</strong> Alerta (nunca é surpreendido em combate); Casca-grossa (pode gastar 10 pontos de Sorte para ignorar até 5 de dano em uma rodada).</p>`,
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
    biography: `<p><strong>Combate Pulp:</strong> Briga 50% (25/10), 1D3; Esquivar 45% (22/9).</p>
    <p><strong>Talentos Pulp:</strong> Visão Aguçada (concede um dado de bônus a testes de Encontrar).</p>`,
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
    biography: `<p>Hoteleira pragmática.</p>`,
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
    biography: `<p><strong>Nota sobre Ferimentos:</strong> Atualmente os PVs estão reduzidos para 3 (máx 11), MOV 0* (normal 9) e Esquivar 10% (normalmente 27%) devido ao ferimento.</p>`,
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
    biography: `<p><strong>Talentos Pulp / Perícias Psíquicas*:</strong> Poder Psíquico: Divinação 60%, Clarividência 50% (aplicam-se tanto em jogos clássicos quanto em jogos pulp).</p>`,
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
  // PERU - ADVERSÁRIOS E MONSTROS
  // ==========================================
  {
    name: "Augustus Larkin (Forma Humana)",
    type: "npc",
    subFolder: "Adversários e Monstros",
    characteristics: { str: 45, con: 35, siz: 65, dex: 45, int: 60, app: 45, pow: 50, edu: 65, luck: 50 },
    attribs: { hp: { value: 10, max: 10 }, mp: { value: 10, max: 10 }, san: { value: 9, max: 72 }, mov: 7, db: "0", build: 0, armor: "0" },
    infos: { occupation: "Hospedeiro de Nyarlathotep", age: "32" },
    attacksPerRound: "1",
    biography: `<p>Perfil em forma humana. <strong>Combate Pulp:</strong> Briga 45%, Esquivar 35%. <strong>Talento Pulp:</strong> Poder Psíquico: Divinação 60%.</p>`,
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
    biography: `<p><strong>Talentos Pulp:</strong> Alerta. <strong>Feitiços:</strong> Todos os feitiços do Mythos (usa Sugestão Mental).</p>`,
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
    biography: `<p><strong>Agarrar (mnbr):</strong> Drena 1D10 FOR, 1D10 CON e 1D4 TAM por rodada. <strong>Combate Pulp:</strong> Lutar 75%, Agarrar 75%, Espada 50%, Esquivar 60%. Talento: Ataques Rápidos.</p>`,
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
      { name: "Agarrar (Manobra - Sugar Vida)", skillName: "Lutar (Briga)", value: 60, damage: "Drena 1D10 FOR/CON e 1D4 TAM", addStrenth: false, melee: true },
      { name: "Espada de Conquistador", skillName: "Lutar (Espada)", value: 50, damage: "1D8", addStrenth: true, melee: true }
    ]
  },
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
    biography: `<p><strong>Agarrar (mnbr):</strong> Drena 1D10 FOR, 1D10 CON e 1D4 TAM por rodada. <strong>Combate Pulp:</strong> Briga 70%.</p>`,
    skills: [
      { name: "Briga", value: 60, fighting: true }
    ],
    weapons: [
      { name: "Briga", skillName: "Briga", value: 60, damage: "1D3", addStrenth: true, melee: true },
      { name: "Agarrar (Manobra)", skillName: "Briga", value: 60, damage: "Sugar Vida", addStrenth: false, melee: true }
    ]
  })),
  {
    name: "Múmia Animada",
    type: "creature",
    subFolder: "Adversários e Monstros",
    characteristics: { str: 80, con: 80, siz: 40, dex: 35, int: null, app: null, pow: 5, edu: null, luck: null },
    attribs: { hp: { value: 12, max: 12 }, mp: { value: 1, max: 1 }, san: { value: null, max: null }, mov: 6, db: "0", build: 0, armor: "Ignora dano exceto na cabeça" },
    infos: { occupation: "Suposto monte de trapos" },
    attacksPerRound: "1",
    sanLoss: { checkPassed: "0", checkFailled: "1D8" },
    biography: `<p><strong>Combate Pulp:</strong> Briga 45%, 1D4 de dano.</p>`,
    skills: [
      { name: "Briga", value: 30, fighting: true },
      { name: "Furtividade", value: 40 },
      { name: "Parecer uma Pilha de Trapos", value: 90 }
    ],
    weapons: [
      { name: "Briga", skillName: "Briga", value: 30, damage: "1D3", addStrenth: false, melee: true }
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
    biography: `<p><strong>Combate Pulp:</strong> Lutar 45%, Esquivar 95%.</p>`,
    skills: [
      { name: "Lutar", value: 25, fighting: true },
      { name: "Esquivar", value: 75, dodge: true },
      { name: "Apertar-se em Passagens Pequenas", value: 90 },
      { name: "Escalar", value: 70 },
      { name: "Furtividade", value: 60 }
    ],
    weapons: [
      { name: "Lutar", skillName: "Lutar", value: 25, damage: "1D3-2", addStrenth: false, melee: true }
    ]
  },
  {
    name: "Pai dos Vermes",
    type: "creature",
    subFolder: "Adversários e Monstros",
    characteristics: { str: 200, con: 150, siz: 450, dex: 65, int: 1, app: null, pow: 500, edu: null, luck: null },
    attribs: { hp: { value: 60, max: 60 }, mp: { value: 100, max: 100 }, san: { value: null, max: null }, mov: 0, db: "+7D6", build: 8, armor: "0" },
    infos: { occupation: "Avatar aprisionado de Nyarlathotep" },
    attacksPerRound: "1",
    sanLoss: { checkPassed: "1D6", checkFailled: "1D20" },
    biography: `<p>Avatar aprisionado de Nyarlathotep. Fedor exige teste de CON para não ficar incapacitado por náuseas.</p>`,
    skills: [
      { name: "Lutar (Pseudópodes)", value: 85, fighting: true },
      { name: "Pústulas Explosivas", value: 100, firearms: true },
      { name: "Emite Odores Nefastos", value: 100 }
    ],
    weapons: [
      { name: "Golpear com Pseudópodes (6m)", skillName: "Lutar (Pseudópodes)", value: 85, damage: "7D6", addStrenth: false, melee: true },
      { name: "Pústulas Explosivas (100m)", skillName: "Pústulas Explosivas", value: 100, damage: "2D10", addStrenth: false, melee: false }
    ]
  }
];

const AMERICA_DATA = [
  // ==========================================
  // AMÉRICA - A POLÍCIA
  // ==========================================
  {
    name: "Tenente Martin Poole",
    type: "npc",
    subFolder: "A Polícia",
    characteristics: { str: 60, con: 65, siz: 65, dex: 45, int: 50, app: 45, pow: 40, edu: 55, luck: null },
    attribs: { hp: { value: 13, max: 13 }, mp: { value: 8, max: 8 }, san: { value: 55, max: 99 }, mov: 6, db: "+1D4", build: 1, armor: "0" },
    infos: { occupation: "Detetive de homicídios", age: "43" },
    attacksPerRound: "1",
    biography: `<p>Detetive de homicídios da polícia de Nova York responsável pela investigação do assassinato de Jackson Elias.</p>`,
    skills: [
      { name: "Briga", value: 60, fighting: true },
      { name: "Armas de Fogo ( Armas Curtas )", value: 55, firearms: true },
      { name: "Esquivar", value: 22, dodge: true },
      { name: "Arremessar", value: 40 },
      { name: "Charme", value: 45 },
      { name: "Direito", value: 50 },
      { name: "Dirigir Automóveis", value: 60 },
      { name: "Encontrar", value: 40 },
      { name: "Escalar", value: 50 },
      { name: "Escutar", value: 55 },
      { name: "Intimidação", value: 25 },
      { name: "Saltar", value: 40 },
      { name: "Lábia", value: 75 },
      { name: "Nível de Crédito", value: 40 },
      { name: "Persuasão", value: 30 },
      { name: "Psicologia", value: 50 },
      { name: "Rastrear", value: 15 },
      { name: "Usar Bibliotecas", value: 25 },
      { name: "Língua (Inglês)", value: 55 }
    ],
    weapons: [
      { name: "Briga", skillName: "Briga", value: 60, damage: "1D3", addStrenth: true, melee: true },
      { name: "Cassetete", skillName: "Briga", value: 60, damage: "1D8", addStrenth: true, melee: true },
      { name: "Revólver Colt .38", skillName: "Armas de Fogo ( Armas Curtas )", value: 55, damage: "1D10", addStrenth: false, melee: false }
    ]
  },
  {
    name: "Capitão Walter Robson",
    type: "npc",
    subFolder: "A Polícia",
    characteristics: { str: 70, con: 70, siz: 75, dex: 40, int: 70, app: 40, pow: 65, edu: 65, luck: 35 },
    attribs: { hp: { value: 14, max: 14 }, mp: { value: 13, max: 13 }, san: { value: 65, max: 99 }, mov: 5, db: "+1D4", build: 1, armor: "0" },
    infos: { occupation: "Policial corrupto", age: "52" },
    attacksPerRound: "1",
    biography: `<p>Capitão de polícia corrupto no Harlem.</p>`,
    skills: [
      { name: "Briga", value: 65, fighting: true },
      { name: "Armas de Fogo ( Armas Curtas )", value: 65, firearms: true },
      { name: "Armas de Fogo ( Rifles/Espingardas )", value: 45, firearms: true },
      { name: "Esquivar", value: 40, dodge: true },
      { name: "Arremessar", value: 60 },
      { name: "Arte/Ofício (Atuação)", value: 45 },
      { name: "Avaliação", value: 45 },
      { name: "Charme", value: 45 },
      { name: "Direito", value: 65 },
      { name: "Dirigir Automóveis", value: 50 },
      { name: "Encontrar", value: 45 },
      { name: "Escalar", value: 35 },
      { name: "Intimidação", value: 75 },
      { name: "Lábia", value: 60 },
      { name: "Nível de Crédito", value: 60 },
      { name: "Prestidigitação", value: 50 },
      { name: "Psicologia", value: 60 },
      { name: "Língua (Inglês)", value: 65 }
    ],
    weapons: [
      { name: "Briga", skillName: "Briga", value: 65, damage: "1D3", addStrenth: true, melee: true },
      { name: "Soqueiras de Latão", skillName: "Briga", value: 65, damage: "1D3+1", addStrenth: true, melee: true },
      { name: "Revólver Colt .38", skillName: "Armas de Fogo ( Armas Curtas )", value: 65, damage: "1D10", addStrenth: false, melee: false }
    ]
  },
  {
    name: "Detetive Júnior",
    type: "npc",
    subFolder: "A Polícia",
    characteristics: { str: 70, con: 65, siz: 60, dex: 65, int: 70, app: 75, pow: 35, edu: 65, luck: null },
    attribs: { hp: { value: 12, max: 12 }, mp: { value: 7, max: 7 }, san: { value: 35, max: 99 }, mov: 9, db: "+1D4", build: 1, armor: "0" },
    infos: { occupation: "Oficial de polícia corrupto", age: "26" },
    attacksPerRound: "1",
    biography: `<p>Use este perfil para todos os detetives (corruptos ou não).</p>`,
    skills: [
      { name: "Briga", value: 55, fighting: true },
      { name: "Armas de Fogo ( Armas Curtas )", value: 50, firearms: true },
      { name: "Armas de Fogo ( Rifles/Espingardas )", value: 45, firearms: true },
      { name: "Esquivar", value: 35, dodge: true },
      { name: "Arremessar", value: 35 },
      { name: "Direito", value: 45 },
      { name: "Dirigir Automóveis", value: 50 },
      { name: "Disfarce", value: 45 },
      { name: "Encontrar", value: 50 },
      { name: "Escalar", value: 40 },
      { name: "Escutar", value: 50 },
      { name: "Furtividade", value: 45 },
      { name: "Persuasão", value: 60 },
      { name: "Prestidigitação", value: 35 },
      { name: "Psicologia", value: 45 },
      { name: "Saltar", value: 40 },
      { name: "Língua (Inglês)", value: 65 }
    ],
    weapons: [
      { name: "Briga", skillName: "Briga", value: 55, damage: "1D3", addStrenth: true, melee: true },
      { name: "Revólver Colt .38", skillName: "Armas de Fogo ( Armas Curtas )", value: 50, damage: "1D10", addStrenth: false, melee: false },
      { name: "Escopeta Cerrada Calibre 12", skillName: "Armas de Fogo ( Rifles/Espingardas )", value: 45, damage: "4D6/1D6", addStrenth: false, melee: false }
    ]
  },
  {
    name: "Polícia de Patrulha",
    type: "npc",
    subFolder: "A Polícia",
    characteristics: { str: 65, con: 70, siz: 85, dex: 60, int: 65, app: 60, pow: 55, edu: 60, luck: null },
    attribs: { hp: { value: 15, max: 15 }, mp: { value: 11, max: 11 }, san: { value: 55, max: 99 }, mov: 7, db: "+1D4", build: 1, armor: "0" },
    infos: { occupation: "Patrulha de NYC", age: "24" },
    attacksPerRound: "1",
    biography: `<p>Use esse perfil para todos os policiais de patrulha de Nova York.</p>`,
    skills: [
      { name: "Briga", value: 65, fighting: true },
      { name: "Armas de Fogo ( Armas Curtas )", value: 45, firearms: true },
      { name: "Esquivar", value: 40, dodge: true },
      { name: "Arremessar", value: 60 },
      { name: "Direito", value: 45 },
      { name: "Encontrar", value: 55 },
      { name: "Escalar", value: 50 },
      { name: "Escutar", value: 50 },
      { name: "Intimidação", value: 75 },
      { name: "Primeiros Socorros", value: 50 },
      { name: "Psicologia", value: 50 },
      { name: "Saltar", value: 50 },
      { name: "Língua (Inglês)", value: 60 }
    ],
    weapons: [
      { name: "Briga", skillName: "Briga", value: 65, damage: "1D3", addStrenth: true, melee: true },
      { name: "Revólver Colt .38", skillName: "Armas de Fogo ( Armas Curtas )", value: 45, damage: "1D10", addStrenth: false, melee: false }
    ]
  },

  // ==========================================
  // AMÉRICA - ALIADOS E INDEPENDENTES
  // ==========================================
  {
    name: "Jonah Kensington",
    type: "npc",
    subFolder: "Aliados e Independentes",
    characteristics: { str: 50, con: 60, siz: 50, dex: 30, int: 80, app: 65, pow: 50, edu: 70, luck: 25 },
    attribs: { hp: { value: 11, max: 11 }, mp: { value: 10, max: 10 }, san: { value: 50, max: 99 }, mov: 7, db: "0", build: 0, armor: "0" },
    infos: { occupation: "Dono/editor da Prospero House", age: "48" },
    attacksPerRound: "1",
    biography: `<p>Editor e amigo de Jackson Elias na Prospero House.</p>`,
    skills: [
      { name: "Briga", value: 35, fighting: true },
      { name: "Esquivar", value: 20, dodge: true },
      { name: "Antropologia", value: 25 },
      { name: "Arremessar", value: 40 },
      { name: "Arte/Ofício (Fotografia)", value: 20 },
      { name: "Contabilidade", value: 60 },
      { name: "Dirigir Automóveis", value: 25 },
      { name: "Encontrar", value: 80 },
      { name: "Escalar", value: 35 },
      { name: "História", value: 67 },
      { name: "Intimidação", value: 50 },
      { name: "Nível de Crédito", value: 55 },
      { name: "Ocultismo", value: 50 },
      { name: "Persuasão", value: 55 },
      { name: "Psicologia", value: 75 },
      { name: "Usar Bibliotecas", value: 50 },
      { name: "Língua (Inglês)", value: 90 },
      { name: "Língua (Francês)", value: 65 },
      { name: "Língua (Grego)", value: 54 },
      { name: "Língua (Latim)", value: 33 }
    ],
    weapons: [
      { name: "Briga", skillName: "Briga", value: 35, damage: "1D3", addStrenth: true, melee: true }
    ]
  },
  {
    name: "Carlton Ramsey",
    type: "npc",
    subFolder: "Aliados e Independentes",
    characteristics: { str: 50, con: 50, siz: 45, dex: 60, int: 75, app: 45, pow: 60, edu: 80, luck: null },
    attribs: { hp: { value: 9, max: 9 }, mp: { value: 12, max: 12 }, san: { value: 60, max: 99 }, mov: 7, db: "0", build: 0, armor: "0" },
    infos: { occupation: "Advogado e executor testamentário de Elias", age: "54" },
    attacksPerRound: "1",
    biography: `<p>Advogado e executor testamentário de Jackson Elias.</p>`,
    skills: [
      { name: "Briga", value: 25, fighting: true },
      { name: "Armas de Fogo ( Armas Curtas )", value: 45, firearms: true },
      { name: "Esquivar", value: 30, dodge: true },
      { name: "Arremessar", value: 60 },
      { name: "Charme", value: 65 },
      { name: "Contabilidade", value: 75 },
      { name: "Direito", value: 80 },
      { name: "Dirigir Automóveis", value: 55 },
      { name: "Encontrar", value: 55 },
      { name: "Escutar", value: 60 },
      { name: "Lábia", value: 75 },
      { name: "Nível de Crédito", value: 64 },
      { name: "Persuasão", value: 65 },
      { name: "Psicologia", value: 70 },
      { name: "Usar Bibliotecas", value: 60 },
      { name: "Língua (Inglês)", value: 80 }
    ],
    weapons: [
      { name: "Briga", skillName: "Briga", value: 25, damage: "1D3", addStrenth: true, melee: true },
      { name: "Revólver .32", skillName: "Armas de Fogo ( Armas Curtas )", value: 45, damage: "1D8", addStrenth: false, melee: false }
    ]
  },
  {
    name: "Willa Sligh",
    type: "npc",
    subFolder: "Aliados e Independentes",
    characteristics: { str: 60, con: 65, siz: 75, dex: 50, int: 80, app: 55, pow: 65, edu: 60, luck: null },
    attribs: { hp: { value: 14, max: 14 }, mp: { value: 13, max: 13 }, san: { value: 65, max: 99 }, mov: 7, db: "+1D4", build: 1, armor: "0" },
    infos: { occupation: "Secretária jurídica", age: "20" },
    attacksPerRound: "1",
    biography: `<p>Secretária jurídica de Carlton Ramsey.</p>`,
    skills: [
      { name: "Briga", value: 25, fighting: true },
      { name: "Armas de Fogo ( Armas Curtas )", value: 45, firearms: true },
      { name: "Esquivar", value: 40, dodge: true },
      { name: "Arte/Ofício (Datilografia)", value: 55 },
      { name: "Arte/Ofício (Taquigrafia)", value: 55 },
      { name: "Contabilidade", value: 45 },
      { name: "Direito", value: 35 },
      { name: "Escalar", value: 55 },
      { name: "Escutar", value: 60 },
      { name: "Furtividade", value: 70 },
      { name: "Lábia", value: 65 },
      { name: "Persuasão", value: 60 },
      { name: "Psicologia", value: 60 },
      { name: "Usar Bibliotecas", value: 50 },
      { name: "Língua (Inglês)", value: 60 }
    ],
    weapons: [
      { name: "Briga", skillName: "Briga", value: 25, damage: "1D3", addStrenth: true, melee: true },
      { name: "Revólver .32", skillName: "Armas de Fogo ( Armas Curtas )", value: 45, damage: "1D8", addStrenth: false, melee: false }
    ]
  },
  {
    name: "Erica Carlyle",
    type: "npc",
    subFolder: "Aliados e Independentes",
    characteristics: { str: 40, con: 60, siz: 40, dex: 55, int: 85, app: 80, pow: 65, edu: 80, luck: 35 },
    attribs: { hp: { value: 10, max: 10 }, mp: { value: 13, max: 13 }, san: { value: 65, max: 99 }, mov: 8, db: "-1", build: -1, armor: "0" },
    infos: { occupation: "Empresária milionária", age: "26" },
    attacksPerRound: "1",
    biography: `<p>Irmã de Roger Carlyle e herdeira do império da família.</p>
    <p><strong>Talentos Pulp:</strong> Voluntarioso (recebe um dado de bônus em testes de POD).</p>`,
    skills: [
      { name: "Briga", value: 25, fighting: true },
      { name: "Lutar (Florete de Esgrima)", value: 70, fighting: true },
      { name: "Armas de Fogo ( Armas Curtas )", value: 40, firearms: true },
      { name: "Esquivar", value: 50, dodge: true },
      { name: "Cavalgar", value: 60 },
      { name: "Charme", value: 75 },
      { name: "Contabilidade", value: 70 },
      { name: "Direito", value: 35 },
      { name: "Dirigir Automóveis", value: 35 },
      { name: "Intimidação", value: 65 },
      { name: "Natação", value: 30 },
      { name: "Nível de Crédito", value: 95 },
      { name: "Persuasão", value: 60 },
      { name: "Psicologia", value: 35 },
      { name: "Língua (Inglês)", value: 85 },
      { name: "Língua (Francês)", value: 45 },
      { name: "Língua (Alemão)", value: 50 },
      { name: "Língua (Italiano)", value: 60 }
    ],
    weapons: [
      { name: "Briga", skillName: "Briga", value: 25, damage: "1D3", addStrenth: true, melee: true },
      { name: "Florete de Esgrima (Ponta Afiada)", skillName: "Lutar (Florete de Esgrima)", value: 70, damage: "1D6", addStrenth: false, melee: true },
      { name: "Derringer .25", skillName: "Armas de Fogo ( Armas Curtas )", value: 40, damage: "1D6", addStrenth: false, melee: false }
    ]
  },
  {
    name: "Joe Corey",
    type: "npc",
    subFolder: "Aliados e Independentes",
    characteristics: { str: 85, con: 75, siz: 80, dex: 70, int: 60, app: 45, pow: 40, edu: 40, luck: 40 },
    attribs: { hp: { value: 15, max: 15 }, mp: { value: 8, max: 8 }, san: { value: 40, max: 99 }, mov: 8, db: "+1D6", build: 2, armor: "0" },
    infos: { occupation: "Guarda-costas de Erica Carlyle", age: "37" },
    attacksPerRound: "1",
    biography: `<p><strong>Talentos Pulp:</strong></p>
    <ul>
      <li><strong>Golpes Fortes:</strong> pode gastar 10 pontos de Sorte para adicionar um outro dado de dano quando acerta ataques corpo a corpo.</li>
      <li><strong>Casca Grossa:</strong> pode gastar 10 pontos de Sorte para ignorar até 5 de dano recebidos em uma rodada de combate.</li>
    </ul>`,
    skills: [
      { name: "Briga", value: 85, fighting: true },
      { name: "Lutar (Taco de Basebol)", value: 65, fighting: true },
      { name: "Armas de Fogo ( Armas Curtas )", value: 75, firearms: true },
      { name: "Esquivar", value: 60, dodge: true },
      { name: "Arremessar", value: 70 },
      { name: "Chaveiro", value: 30 },
      { name: "Consertos Mecânicos", value: 50 },
      { name: "Dirigir Automóveis", value: 90 },
      { name: "Encontrar", value: 55 },
      { name: "Escalar", value: 45 },
      { name: "Escutar", value: 50 },
      { name: "Furtividade", value: 50 },
      { name: "Intimidação", value: 75 },
      { name: "Lábia", value: 65 },
      { name: "Psicologia", value: 60 },
      { name: "Saltar", value: 65 },
      { name: "Língua (Inglês)", value: 40 }
    ],
    weapons: [
      { name: "Briga", skillName: "Briga", value: 85, damage: "1D3", addStrenth: true, melee: true },
      { name: "Soqueiras de Latão", skillName: "Briga", value: 85, damage: "1D3+1", addStrenth: true, melee: true },
      { name: "Taco de Basebol", skillName: "Lutar (Taco de Basebol)", value: 65, damage: "1D8", addStrenth: true, melee: true },
      { name: "Revólver .45", skillName: "Armas de Fogo ( Armas Curtas )", value: 75, damage: "1D10+2", addStrenth: false, melee: false }
    ]
  },
  {
    name: "Bradley Grey",
    type: "npc",
    subFolder: "Aliados e Independentes",
    characteristics: { str: 45, con: 50, siz: 45, dex: 50, int: 85, app: 70, pow: 55, edu: 90, luck: null },
    attribs: { hp: { value: 9, max: 9 }, mp: { value: 11, max: 11 }, san: { value: 55, max: 99 }, mov: 7, db: "0", build: 0, armor: "0" },
    infos: { occupation: "Conselheiro de Erica Carlyle", age: "41" },
    attacksPerRound: "1",
    biography: `<p>Advogado e conselheiro de confiança de Erica Carlyle.</p>`,
    skills: [
      { name: "Briga", value: 25, fighting: true },
      { name: "Esquivar", value: 25, dodge: true },
      { name: "Cavalgar", value: 10 },
      { name: "Charme", value: 50 },
      { name: "Contabilidade", value: 70 },
      { name: "Direito", value: 90 },
      { name: "Dirigir Automóveis", value: 30 },
      { name: "Lábia", value: 50 },
      { name: "Nível de Crédito", value: 85 },
      { name: "Persuasão", value: 80 },
      { name: "Pilotar (Barco)", value: 10 },
      { name: "Psicologia", value: 40 },
      { name: "Usar Bibliotecas", value: 70 },
      { name: "Língua (Inglês)", value: 90 },
      { name: "Língua (Francês)", value: 60 },
      { name: "Língua (Latim)", value: 25 }
    ],
    weapons: [
      { name: "Briga", skillName: "Briga", value: 25, damage: "1D3", addStrenth: true, melee: true }
    ]
  },
  // GUARDAS DA MANSÃO CARLYLE 1 A 6
  ...[
    { num: 1, str: 65, con: 75, siz: 60, dex: 65, int: 55, app: 45, pow: 55, edu: 55, san: 55, hp: 13, mov: 9, mp: 11, note: "" },
    { num: 2, str: 75, con: 65, siz: 60, dex: 60, int: 50, app: 55, pow: 50, edu: 60, san: 50, hp: 12, mov: 8, mp: 10, note: "" },
    { num: 3, str: 70, con: 70, siz: 65, dex: 55, int: 60, app: 65, pow: 65, edu: 50, san: 65, hp: 13, mov: 8, mp: 13, note: "" },
    { num: 4, str: 65, con: 60, siz: 70, dex: 50, int: 55, app: 45, pow: 40, edu: 65, san: 40, hp: 13, mov: 7, mp: 8, note: "" },
    { num: 5, str: 80, con: 70, siz: 75, dex: 60, int: 60, app: 55, pow: 45, edu: 55, san: 45, hp: 14, mov: 8, mp: 9, note: "<p><strong>Nota:</strong> O guarda #5 é acompanhado por um cão de guarda (Pastor Alemão).</p>" },
    { num: 6, str: 70, con: 65, siz: 60, dex: 50, int: 65, app: 60, pow: 40, edu: 60, san: 40, hp: 12, mov: 8, mp: 8, note: "<p><strong>Nota:</strong> O guarda #6 é acompanhado por um cão de guarda (Pastor Alemão).</p>" }
  ].map(g => ({
    name: `Guarda da Mansão Carlyle #${g.num}`,
    type: "npc",
    subFolder: "Aliados e Independentes",
    characteristics: { str: g.str, con: g.con, siz: g.siz, dex: g.dex, int: g.int, app: g.app, pow: g.pow, edu: g.edu, luck: null },
    attribs: { hp: { value: g.hp, max: g.hp }, mp: { value: g.mp, max: g.mp }, san: { value: g.san, max: 99 }, mov: g.mov, db: "+1D4", build: 1, armor: "0" },
    infos: { occupation: "Guarda da Mansão Carlyle" },
    attacksPerRound: "1",
    biography: `<p>Guarda de segurança da propriedade Carlyle.</p>${g.note}`,
    skills: [
      { name: "Briga", value: 55, fighting: true },
      { name: "Armas de Fogo ( Armas Curtas )", value: 50, firearms: true },
      { name: "Armas de Fogo ( Rifles/Espingardas )", value: 45, firearms: true },
      { name: "Esquivar", value: 35, dodge: true },
      { name: "Arremessar", value: 60 },
      { name: "Encontrar", value: 50 },
      { name: "Escalar", value: 50 },
      { name: "Escutar", value: 65 },
      { name: "Furtividade", value: 65 },
      { name: "Intimidação", value: 60 },
      { name: "Rastrear", value: 50 },
      { name: "Saltar", value: 40 },
      { name: "Língua (Inglês)", value: 60 }
    ],
    weapons: [
      { name: "Briga", skillName: "Briga", value: 55, damage: "1D3", addStrenth: true, melee: true },
      { name: "Pistola Automática .45", skillName: "Armas de Fogo ( Armas Curtas )", value: 50, damage: "1D10+2", addStrenth: false, melee: false },
      { name: "Espingarda Calibre 12", skillName: "Armas de Fogo ( Rifles/Espingardas )", value: 45, damage: "4D6/2D6/1D6", addStrenth: false, melee: false }
    ]
  })),
  // CÃES DE GUARDA DA MANSÃO CARLYLE
  ...[
    { name: "Rex (Cão de Guarda da Mansão Carlyle)", str: 40, con: 40, siz: 40, dex: 70, pow: 50, hp: 8, db: "-1", build: -1 },
    { name: "Zoltan (Cão de Guarda da Mansão Carlyle)", str: 55, con: 55, siz: 40, dex: 85, pow: 45, hp: 9, db: "0", build: 0 }
  ].map(dog => ({
    name: dog.name,
    type: "creature",
    subFolder: "Aliados e Independentes",
    characteristics: { str: dog.str, con: dog.con, siz: dog.siz, dex: dog.dex, int: null, app: null, pow: dog.pow, edu: null, luck: null },
    attribs: { hp: { value: dog.hp, max: dog.hp }, mp: { value: Math.floor(dog.pow / 5), max: Math.floor(dog.pow / 5) }, san: { value: null, max: null }, mov: 12, db: dog.db, build: dog.build, armor: "0" },
    infos: { occupation: "Pastor Alemão" },
    attacksPerRound: "1",
    biography: `<p>Cão de guarda Pastor Alemão da Mansão Carlyle (acompanha os guardas 5 e 6).</p>`,
    skills: [
      { name: "Lutar", value: 60, fighting: true },
      { name: "Esquivar", value: 45, dodge: true },
      { name: "Encontrar", value: 75 },
      { name: "Escutar", value: 75 },
      { name: "Farejar Algo Interessante", value: 90 },
      { name: "Saltar", value: 70 }
    ],
    weapons: [
      { name: "Mordida (Lutar)", skillName: "Lutar", value: 60, damage: "1D6", addStrenth: true, melee: true }
    ]
  })),
  {
    name: "Miriam Atwright",
    type: "npc",
    subFolder: "Aliados e Independentes",
    characteristics: { str: 55, con: 60, siz: 50, dex: 50, int: 70, app: 60, pow: 65, edu: 70, luck: null },
    attribs: { hp: { value: 11, max: 11 }, mp: { value: 13, max: 13 }, san: { value: 61, max: 97 }, mov: 7, db: "0", build: 0, armor: "0" },
    infos: { occupation: "Bibliotecária da Universidade de Harvard", age: "47" },
    attacksPerRound: "1",
    biography: `<p>Bibliotecária prestativa da Universidade de Harvard.</p>`,
    skills: [
      { name: "Briga", value: 25, fighting: true },
      { name: "Esquivar", value: 25, dodge: true },
      { name: "Antropologia", value: 60 },
      { name: "Charme", value: 60 },
      { name: "Contabilidade", value: 45 },
      { name: "Encontrar", value: 65 },
      { name: "História", value: 65 },
      { name: "Mythos de Cthulhu", value: 2 },
      { name: "Nível de Crédito", value: 35 },
      { name: "Ocultismo", value: 45 },
      { name: "Persuasão", value: 55 },
      { name: "Psicologia", value: 60 },
      { name: "Usar Bibliotecas", value: 90 },
      { name: "Língua (Inglês)", value: 80 },
      { name: "Língua (Latim)", value: 60 },
      { name: "Língua (Espanhol)", value: 50 }
    ],
    weapons: [
      { name: "Briga", skillName: "Briga", value: 25, damage: "1D3", addStrenth: true, melee: true }
    ]
  },
  {
    name: "Professor Anthony Cowles",
    type: "npc",
    subFolder: "Aliados e Independentes",
    characteristics: { str: 50, con: 60, siz: 65, dex: 55, int: 65, app: 60, pow: 70, edu: 90, luck: null },
    attribs: { hp: { value: 12, max: 12 }, mp: { value: 14, max: 14 }, san: { value: 53, max: 84 }, mov: 7, db: "0", build: 0, armor: "0" },
    infos: { occupation: "Professor de antropologia", age: "46" },
    attacksPerRound: "1",
    biography: `<p>Professor de antropologia especialista em culturas da Polinésia e Austrália.</p>`,
    skills: [
      { name: "Briga", value: 35, fighting: true },
      { name: "Esquivar", value: 35, dodge: true },
      { name: "Antropologia", value: 60 },
      { name: "Arqueologia", value: 45 },
      { name: "Arremessar", value: 30 },
      { name: "Cavalgar", value: 25 },
      { name: "Charme", value: 25 },
      { name: "Conhecimento (Aborígene)", value: 65 },
      { name: "Direito", value: 15 },
      { name: "Dirigir Automóveis", value: 50 },
      { name: "Encontrar", value: 30 },
      { name: "Escutar", value: 50 },
      { name: "História (Culturas da Polinésia)", value: 70 },
      { name: "Lábia", value: 55 },
      { name: "Mundo Natural", value: 30 },
      { name: "Mythos de Cthulhu", value: 15 },
      { name: "Natação", value: 30 },
      { name: "Nível de Crédito", value: 50 },
      { name: "Ocultismo", value: 15 },
      { name: "Persuasão", value: 55 },
      { name: "Psicologia", value: 45 },
      { name: "Usar Bibliotecas", value: 80 },
      { name: "Língua (Inglês)", value: 90 },
      { name: "Língua (Grego)", value: 35 },
      { name: "Língua (Latim)", value: 20 }
    ],
    weapons: [
      { name: "Briga", skillName: "Briga", value: 35, damage: "1D3", addStrenth: true, melee: true }
    ]
  },
  {
    name: "Ewa Cowles",
    type: "npc",
    subFolder: "Aliados e Independentes",
    characteristics: { str: 65, con: 70, siz: 50, dex: 75, int: 80, app: 90, pow: 70, edu: 65, luck: null },
    attribs: { hp: { value: 12, max: 12 }, mp: { value: 14, max: 14 }, san: { value: 70, max: 99 }, mov: 9, db: "0", build: 0, armor: "0" },
    infos: { occupation: "Estudante e filha atenciosa", age: "20" },
    attacksPerRound: "1",
    biography: `<p>Filha e assistente do Professor Anthony Cowles.</p>`,
    skills: [
      { name: "Briga", value: 45, fighting: true },
      { name: "Armas de Fogo ( Armas Curtas )", value: 40, firearms: true },
      { name: "Esquivar", value: 45, dodge: true },
      { name: "Antropologia", value: 40 },
      { name: "Arqueologia", value: 20 },
      { name: "Arremessar", value: 35 },
      { name: "Cavalgar", value: 70 },
      { name: "Charme", value: 25 },
      { name: "Ciência (Astronomia)", value: 20 },
      { name: "Dirigir Automóveis", value: 30 },
      { name: "Encontrar", value: 70 },
      { name: "Escalar", value: 50 },
      { name: "Escutar", value: 45 },
      { name: "Fotografia", value: 25 },
      { name: "História (Culturas da Polinésia)", value: 55 },
      { name: "Lábia", value: 35 },
      { name: "Medicina", value: 20 },
      { name: "Nível de Crédito", value: 40 },
      { name: "Primeiros Socorros", value: 55 },
      { name: "Saltar", value: 40 },
      { name: "Usar Bibliotecas", value: 30 },
      { name: "Língua (Árabe)", value: 15 },
      { name: "Língua (Inglês)", value: 90 }
    ],
    weapons: [
      { name: "Briga", skillName: "Briga", value: 45, damage: "1D3", addStrenth: true, melee: true },
      { name: "Revólver .32", skillName: "Armas de Fogo ( Armas Curtas )", value: 40, damage: "1D8", addStrenth: false, melee: false }
    ]
  },
  {
    name: "Arthur Emerson",
    type: "npc",
    subFolder: "Aliados e Independentes",
    characteristics: { str: 65, con: 65, siz: 70, dex: 40, int: 75, app: 45, pow: 55, edu: 60, luck: null },
    attribs: { hp: { value: 13, max: 13 }, mp: { value: 11, max: 11 }, san: { value: 55, max: 99 }, mov: 5, db: "+1D4", build: 1, armor: "0" },
    infos: { occupation: "Importador e associado involuntário do culto", age: "53" },
    attacksPerRound: "1",
    biography: `<p>Importador da Emerson Imports, associado involuntário do culto.</p>`,
    skills: [
      { name: "Briga", value: 65, fighting: true },
      { name: "Armas de Fogo ( Armas Curtas )", value: 40, firearms: true },
      { name: "Esquivar", value: 25, dodge: true },
      { name: "Consertos Mecânicos", value: 40 },
      { name: "Contabilidade", value: 65 },
      { name: "Direito", value: 55 },
      { name: "Dirigir Automóveis", value: 50 },
      { name: "Escutar", value: 40 },
      { name: "Intimidação", value: 65 },
      { name: "Lábia", value: 45 },
      { name: "Nível de Crédito", value: 40 },
      { name: "Operar Maquinário Pesado", value: 50 },
      { name: "Persuasão", value: 60 },
      { name: "Psicologia", value: 50 },
      { name: "Língua (Inglês)", value: 60 }
    ],
    weapons: [
      { name: "Briga", skillName: "Briga", value: 65, damage: "1D3", addStrenth: true, melee: true },
      { name: "Revólver .38", skillName: "Armas de Fogo ( Armas Curtas )", value: 40, damage: "1D10", addStrenth: false, melee: false }
    ]
  },
  {
    name: "Porteiro do Murray Hill Hotel",
    type: "npc",
    subFolder: "Aliados e Independentes",
    characteristics: { str: 70, con: 70, siz: 70, dex: 55, int: 60, app: 70, pow: 65, edu: 55, luck: null },
    attribs: { hp: { value: 14, max: 14 }, mp: { value: 13, max: 13 }, san: { value: 65, max: 99 }, mov: 8, db: "+1D4", build: 1, armor: "0" },
    infos: { occupation: "Ex-soldado e porteiro" },
    attacksPerRound: "1",
    biography: `<p>Ex-soldado e porteiro do Murray Hill Hotel.</p>`,
    skills: [
      { name: "Briga", value: 70, fighting: true },
      { name: "Armas de Fogo ( Pistolas )", value: 55, firearms: true },
      { name: "Esquivar", value: 50, dodge: true },
      { name: "Arremessar", value: 45 },
      { name: "Encontrar", value: 55 },
      { name: "Escalar", value: 40 },
      { name: "Escutar", value: 50 },
      { name: "Furtividade", value: 50 },
      { name: "Intimidação", value: 60 },
      { name: "Persuasão", value: 50 },
      { name: "Primeiros Socorros", value: 50 },
      { name: "Psicologia", value: 60 },
      { name: "Saltar", value: 50 },
      { name: "Língua (Inglês)", value: 55 }
    ],
    weapons: [
      { name: "Briga", skillName: "Briga", value: 70, damage: "1D3", addStrenth: true, melee: true }
    ]
  },
  {
    name: "Dr. Mordecai Lemming",
    type: "npc",
    subFolder: "Aliados e Independentes",
    characteristics: { str: 50, con: 35, siz: 45, dex: 55, int: 60, app: 60, pow: 50, edu: 70, luck: null },
    attribs: { hp: { value: 8, max: 8 }, mp: { value: 10, max: 10 }, san: { value: 50, max: 99 }, mov: 6, db: "0", build: 0, armor: "0" },
    infos: { occupation: "Folclorista excêntrico", age: "62" },
    attacksPerRound: "1",
    biography: `<p>Folclorista excêntrico.</p>`,
    skills: [
      { name: "Briga", value: 25, fighting: true },
      { name: "Esquivar", value: 27, dodge: true },
      { name: "Antropologia", value: 65 },
      { name: "Avaliação", value: 65 },
      { name: "Ciência (Astronomia)", value: 40 },
      { name: "Ciência (Botânica)", value: 40 },
      { name: "Encontrar", value: 45 },
      { name: "História", value: 75 },
      { name: "Mundo Natural", value: 45 },
      { name: "Nível de Crédito", value: 70 },
      { name: "Ocultismo", value: 45 },
      { name: "Persuasão", value: 40 },
      { name: "Usar Bibliotecas", value: 65 },
      { name: "Língua (Inglês)", value: 70 },
      { name: "Língua (Latim)", value: 60 },
      { name: "Língua (Grego Clássico)", value: 45 }
    ],
    weapons: [
      { name: "Briga", skillName: "Briga", value: 25, damage: "1D3", addStrenth: true, melee: true }
    ]
  },
  {
    name: "Rebecca Shosenburg",
    type: "npc",
    subFolder: "Aliados e Independentes",
    characteristics: { str: 70, con: 45, siz: 45, dex: 65, int: 90, app: 55, pow: 55, edu: 65, luck: 25 },
    attribs: { hp: { value: 9, max: 9 }, mp: { value: 11, max: 11 }, san: { value: 55, max: 99 }, mov: 9, db: "0", build: 0, armor: "0" },
    infos: { occupation: "Repórter do New York Times", age: "27" },
    attacksPerRound: "1",
    biography: `<p>Repórter investigativa do New York Times.</p>`,
    skills: [
      { name: "Briga", value: 35, fighting: true },
      { name: "Esquivar", value: 50, dodge: true },
      { name: "Arremessar", value: 35 },
      { name: "Arte/Ofício (Atuação)", value: 45 },
      { name: "Direito", value: 25 },
      { name: "Encontrar", value: 65 },
      { name: "Escalar", value: 45 },
      { name: "Escutar", value: 60 },
      { name: "Furtividade", value: 60 },
      { name: "História", value: 45 },
      { name: "Lábia", value: 55 },
      { name: "Nível de Crédito", value: 30 },
      { name: "Persuasão", value: 60 },
      { name: "Psicologia", value: 60 },
      { name: "Saltar", value: 40 },
      { name: "Usar Bibliotecas", value: 60 },
      { name: "Língua (Inglês)", value: 85 },
      { name: "Língua (Hebraico)", value: 20 }
    ],
    weapons: [
      { name: "Briga", skillName: "Briga", value: 35, damage: "1D3", addStrenth: true, melee: true }
    ]
  },
  {
    name: "Millie Adams",
    type: "npc",
    subFolder: "Aliados e Independentes",
    characteristics: { str: 50, con: 60, siz: 60, dex: 60, int: 75, app: 75, pow: 75, edu: 60, luck: 35 },
    attribs: { hp: { value: 12, max: 12 }, mp: { value: 15, max: 15 }, san: { value: 75, max: 99 }, mov: 8, db: "0", build: 0, armor: "0" },
    infos: { occupation: "Esposa desesperada, mas determinada", age: "27" },
    attacksPerRound: "1",
    biography: `<p>Esposa de Hilton Adams, determinada a provar a inocência do marido.</p>`,
    skills: [
      { name: "Briga", value: 35, fighting: true },
      { name: "Armas de Fogo ( Armas Curtas )", value: 30, firearms: true },
      { name: "Esquivar", value: 30, dodge: true },
      { name: "Arremessar", value: 60 },
      { name: "Arte/Ofício (Canto)", value: 65 },
      { name: "Arte/Ofício (Piano)", value: 65 },
      { name: "Charme", value: 60 },
      { name: "Encontrar", value: 65 },
      { name: "Escutar", value: 60 },
      { name: "Persuasão", value: 65 },
      { name: "Primeiros Socorros", value: 60 },
      { name: "Psicologia", value: 60 },
      { name: "Língua (Inglês)", value: 60 }
    ],
    weapons: [
      { name: "Briga", skillName: "Briga", value: 35, damage: "1D3", addStrenth: true, melee: true },
      { name: "Revólver .32", skillName: "Armas de Fogo ( Armas Curtas )", value: 30, damage: "1D8", addStrenth: false, melee: false }
    ]
  },
  {
    name: "Hilton Adams",
    type: "npc",
    subFolder: "Aliados e Independentes",
    characteristics: { str: 75, con: 65, siz: 85, dex: 65, int: 65, app: 65, pow: 50, edu: 60, luck: null },
    attribs: { hp: { value: 15, max: 15 }, mp: { value: 10, max: 10 }, san: { value: 50, max: 99 }, mov: 7, db: "+1D4", build: 1, armor: "0" },
    infos: { occupation: "Um homem inocente", age: "29" },
    attacksPerRound: "1",
    biography: `<p>Veterano dos Harlem Hellfighters injustamente acusado dos crimes do culto.</p>`,
    skills: [
      { name: "Briga", value: 65, fighting: true },
      { name: "Armas de Fogo ( Pistolas )", value: 65, firearms: true },
      { name: "Armas de Fogo ( Rifles/Espingardas )", value: 55, firearms: true },
      { name: "Esquivar", value: 55, dodge: true },
      { name: "Arremessar", value: 50 },
      { name: "Arte/Ofício (Forja)", value: 65 },
      { name: "Charme", value: 70 },
      { name: "Consertos Mecânicos", value: 55 },
      { name: "Dirigir Automóveis", value: 40 },
      { name: "Encontrar", value: 65 },
      { name: "Escalar", value: 50 },
      { name: "Furtividade", value: 50 },
      { name: "Operar Maquinário Pesado", value: 35 },
      { name: "Persuasão", value: 60 },
      { name: "Primeiros Socorros", value: 60 },
      { name: "Saltar", value: 45 },
      { name: "Língua (Inglês)", value: 60 },
      { name: "Língua (Francês)", value: 35 }
    ],
    weapons: [
      { name: "Briga", skillName: "Briga", value: 65, damage: "1D3", addStrenth: true, melee: true }
    ]
  },

  // ==========================================
  // AMÉRICA - OS AMIGOS DE HILTON ADAMS
  // ==========================================
  {
    name: "Needham Johnson",
    type: "npc",
    subFolder: "Os Amigos de Hilton Adams",
    characteristics: { str: 65, con: 50, siz: 65, dex: 40, int: 75, app: 80, pow: 65, edu: 70, luck: null },
    attribs: { hp: { value: 11, max: 11 }, mp: { value: 13, max: 13 }, san: { value: 55, max: 99 }, mov: 8, db: "+1D4", build: 1, armor: "0" },
    infos: { occupation: "Repórter do New York Age", age: "30" },
    attacksPerRound: "1",
    biography: `<p>Amigo de Hilton Adams e repórter do jornal New York Age.</p>`,
    skills: [
      { name: "Briga", value: 55, fighting: true },
      { name: "Armas de Fogo ( Rifles/Espingardas )", value: 45, firearms: true },
      { name: "Esquivar", value: 40, dodge: true },
      { name: "Arremessar", value: 30 },
      { name: "Arte/Ofício (Escrita)", value: 75 },
      { name: "Arte/Ofício (Fotografia)", value: 45 },
      { name: "Encontrar", value: 65 },
      { name: "Furtividade", value: 60 },
      { name: "História", value: 55 },
      { name: "Intimidação", value: 50 },
      { name: "Nível de Crédito", value: 25 },
      { name: "Persuasão", value: 60 },
      { name: "Psicologia", value: 60 },
      { name: "Usar Bibliotecas", value: 60 },
      { name: "Língua (Inglês)", value: 80 },
      { name: "Língua (Francês)", value: 40 }
    ],
    weapons: [
      { name: "Briga", skillName: "Briga", value: 55, damage: "1D3", addStrenth: true, melee: true }
    ]
  },
  {
    name: "Douglas Fells",
    type: "npc",
    subFolder: "Os Amigos de Hilton Adams",
    characteristics: { str: 60, con: 80, siz: 65, dex: 70, int: 80, app: 40, pow: 35, edu: 65, luck: null },
    attribs: { hp: { value: 14, max: 14 }, mp: { value: 7, max: 7 }, san: { value: 25, max: 99 }, mov: 8, db: "+1D4", build: 1, armor: "0" },
    infos: { occupation: "Escultor", age: "31" },
    attacksPerRound: "1",
    biography: `<p>Amigo de Hilton Adams e escultor.</p>`,
    skills: [
      { name: "Briga", value: 45, fighting: true },
      { name: "Armas de Fogo ( Rifles/Espingardas )", value: 75, firearms: true },
      { name: "Esquivar", value: 40, dodge: true },
      { name: "Arremessar", value: 50 },
      { name: "Arte/Ofício (Belas Artes)", value: 55 },
      { name: "Arte/Ofício (Escultura)", value: 75 },
      { name: "Dirigir Automóveis", value: 50 },
      { name: "Encontrar", value: 80 },
      { name: "Mundo Natural", value: 40 },
      { name: "Nível de Crédito", value: 35 },
      { name: "Persuasão", value: 50 },
      { name: "Psicologia", value: 40 },
      { name: "Língua (Inglês)", value: 65 },
      { name: "Língua (Francês)", value: 60 }
    ],
    weapons: [
      { name: "Briga", skillName: "Briga", value: 45, damage: "1D3", addStrenth: true, melee: true }
    ]
  },
  {
    name: "Art Mills",
    type: "npc",
    subFolder: "Os Amigos de Hilton Adams",
    characteristics: { str: 55, con: 70, siz: 70, dex: 75, int: 65, app: 65, pow: 80, edu: 55, luck: null },
    attribs: { hp: { value: 14, max: 14 }, mp: { value: 16, max: 16 }, san: { value: 70, max: 99 }, mov: 8, db: "+1D4", build: 1, armor: "0" },
    infos: { occupation: "Músico de jazz", age: "29" },
    attacksPerRound: "1",
    biography: `<p>Amigo de Hilton Adams e trompetista de jazz.</p>`,
    skills: [
      { name: "Briga", value: 65, fighting: true },
      { name: "Armas de Fogo ( Rifles/Espingardas )", value: 45, firearms: true },
      { name: "Esquivar", value: 50, dodge: true },
      { name: "Arremessar", value: 45 },
      { name: "Arte/Ofício (Trompete)", value: 75 },
      { name: "Avaliação", value: 45 },
      { name: "Encontrar", value: 60 },
      { name: "Escutar", value: 70 },
      { name: "Furtividade", value: 60 },
      { name: "Lábia", value: 65 },
      { name: "Nível de Crédito", value: 15 },
      { name: "Prestidigitação", value: 60 },
      { name: "Psicologia", value: 50 },
      { name: "Língua (Inglês)", value: 55 },
      { name: "Língua (Francês)", value: 40 }
    ],
    weapons: [
      { name: "Briga", skillName: "Briga", value: 65, damage: "1D3", addStrenth: true, melee: true }
    ]
  },
  {
    name: "Jackie Wallace",
    type: "npc",
    subFolder: "Os Amigos de Hilton Adams",
    characteristics: { str: 75, con: 85, siz: 55, dex: 75, int: 70, app: 55, pow: 70, edu: 60, luck: null },
    attribs: { hp: { value: 14, max: 14 }, mp: { value: 14, max: 14 }, san: { value: 61, max: 99 }, mov: 9, db: "+1D4", build: 1, armor: "0" },
    infos: { occupation: "Auxiliar de hospital", age: "30" },
    attacksPerRound: "1",
    biography: `<p>Amigo de Hilton Adams e auxiliar de hospital.</p>`,
    skills: [
      { name: "Briga", value: 65, fighting: true },
      { name: "Armas de Fogo ( Rifles/Espingardas )", value: 65, firearms: true },
      { name: "Esquivar", value: 50, dodge: true },
      { name: "Arremessar", value: 65 },
      { name: "Charme", value: 65 },
      { name: "Consertos Elétricos", value: 30 },
      { name: "Consertos Mecânicos", value: 30 },
      { name: "Encontrar", value: 65 },
      { name: "Escutar", value: 60 },
      { name: "Furtividade", value: 60 },
      { name: "Nível de Crédito", value: 10 },
      { name: "Primeiros Socorros", value: 70 },
      { name: "Psicologia", value: 70 },
      { name: "Língua (Inglês)", value: 60 },
      { name: "Língua (Francês)", value: 30 }
    ],
    weapons: [
      { name: "Briga", skillName: "Briga", value: 65, damage: "1D3", addStrenth: true, melee: true }
    ]
  },

  // ==========================================
  // AMÉRICA - ADVERSÁRIOS E MONSTROS
  // ==========================================
  {
    name: "Iregi Kipkemboi (Cultista 1)",
    type: "npc",
    subFolder: "Adversários e Monstros",
    characteristics: { str: 60, con: 60, siz: 60, dex: 65, int: 35, app: 35, pow: 40, edu: 55, luck: 20 },
    attribs: { hp: { value: 12, max: 12 }, mp: { value: 8, max: 8 }, san: { value: 0, max: 96 }, mov: 8, db: "0", build: 0, armor: "0" },
    infos: { occupation: "Membro da Língua Sangrenta (Assassino de Elias)", age: "23" },
    attacksPerRound: "1",
    biography: `<p><strong>Combate Pulp:</strong></p>
    <ul>
      <li><strong>Briga / Panga:</strong> 80% (40/16), 1D3 de dano ou panga 1D8+1D4 de dano</li>
      <li><strong>Faca de arremesso africana:</strong> 30% (15/6), 1D4+2 de dano, mais 1D4 de dilaceramento ao remover (negado por Medicina Regular ou Primeiros Socorros Difícil)</li>
      <li><strong>Esquivar:</strong> 85% (42/17)</li>
    </ul>
    <p><strong>Talentos Pulp:</strong> Golpes Fortes (gasta 10 de Sorte para +1 dado de dano corpo a corpo).</p>`,
    skills: [
      { name: "Briga", value: 60, fighting: true },
      { name: "Esquivar", value: 65, dodge: true },
      { name: "Arremessar", value: 25 },
      { name: "Escalar", value: 75 },
      { name: "Escutar", value: 65 },
      { name: "Furtividade", value: 60 },
      { name: "Intimidação", value: 25 },
      { name: "Mythos de Cthulhu", value: 3 },
      { name: "Natação", value: 60 },
      { name: "Prestidigitação", value: 50 },
      { name: "Rastrear", value: 10 },
      { name: "Saltar", value: 90 },
      { name: "Língua (Inglês)", value: 30 },
      { name: "Língua (Kikuyu)", value: 50 },
      { name: "Língua (Nandi)", value: 35 },
      { name: "Língua (Swahili)", value: 35 }
    ],
    weapons: [
      { name: "Briga", skillName: "Briga", value: 60, damage: "1D3", addStrenth: true, melee: true },
      { name: "Panga", skillName: "Briga", value: 60, damage: "1D8+1D4", addStrenth: false, melee: true },
      { name: "Faca de Arremesso Africana (Pulp)", skillName: "Arremessar", value: 30, damage: "1D4+2 (+1D4 dilaceramento)", addStrenth: false, melee: false }
    ]
  },
  {
    name: "Colm Doyle (Cultista 2)",
    type: "npc",
    subFolder: "Adversários e Monstros",
    characteristics: { str: 80, con: 75, siz: 70, dex: 50, int: 40, app: 30, pow: 60, edu: 40, luck: 30 },
    attribs: { hp: { value: 14, max: 14 }, mp: { value: 10, max: 12 }, san: { value: 0, max: 95 }, mov: 8, db: "+1D4", build: 1, armor: "0" },
    infos: { occupation: "Membro da Língua Sangrenta (Assassino de Elias)", age: "24" },
    attacksPerRound: "1",
    biography: `<p><strong>Combate Pulp:</strong></p>
    <ul>
      <li><strong>Briga / Panga:</strong> 70% (35/14), 1D3+1D4 de dano ou panga 1D8+1D4 de dano</li>
      <li><strong>Faca de arremesso africana:</strong> 30% (15/6), 1D4+2 de dano, mais 1D4 de dilaceramento ao remover</li>
      <li><strong>Esquivar:</strong> 50% (25/10)</li>
    </ul>
    <p><strong>Talentos Pulp:</strong> Audição Aguçada (recebe um dado de bônus em testes de Escutar).</p>`,
    skills: [
      { name: "Briga", value: 50, fighting: true },
      { name: "Esquivar", value: 40, dodge: true },
      { name: "Arremessar", value: 30 },
      { name: "Chaveiro", value: 25 },
      { name: "Dirigir Automóveis", value: 35 },
      { name: "Escalar", value: 60 },
      { name: "Escutar", value: 75 },
      { name: "Furtividade", value: 60 },
      { name: "Intimidação", value: 20 },
      { name: "Mythos de Cthulhu", value: 4 },
      { name: "Natação", value: 30 },
      { name: "Prestidigitação", value: 55 },
      { name: "Rastrear", value: 15 },
      { name: "Saltar", value: 65 },
      { name: "Língua (Inglês)", value: 55 },
      { name: "Língua (Swahili)", value: 15 }
    ],
    weapons: [
      { name: "Briga", skillName: "Briga", value: 50, damage: "1D3", addStrenth: true, melee: true },
      { name: "Panga", skillName: "Briga", value: 50, damage: "1D8", addStrenth: true, melee: true },
      { name: "Faca de Arremesso Africana (Pulp)", skillName: "Arremessar", value: 30, damage: "1D4+2 (+1D4 dilaceramento)", addStrenth: false, melee: false }
    ]
  },
  {
    name: "Jomo \"Jimmy\" Jepleting (Cultista 3)",
    type: "npc",
    subFolder: "Adversários e Monstros",
    characteristics: { str: 75, con: 65, siz: 60, dex: 80, int: 50, app: 20, pow: 50, edu: 55, luck: 25 },
    attribs: { hp: { value: 12, max: 12 }, mp: { value: 8, max: 10 }, san: { value: 0, max: 94 }, mov: 9, db: "+1D4", build: 1, armor: "0" },
    infos: { occupation: "Membro da Língua Sangrenta (Assassino de Elias)", age: "26" },
    attacksPerRound: "1",
    biography: `<p><strong>Combate Pulp:</strong></p>
    <ul>
      <li><strong>Briga / Panga:</strong> 70% (35/14), 1D3+1D4 de dano ou panga 1D8+1D4 de dano</li>
      <li><strong>Faca de arremesso africana:</strong> 35% (17/7), 1D4+2 de dano, mais 1D4 de dilaceramento ao remover</li>
      <li><strong>Esquivar:</strong> 75% (37/15)</li>
    </ul>
    <p><strong>Talentos Pulp:</strong> Ataques Rápidos (pode gastar 10 pontos de Sorte para ganhar outro ataque corpo a corpo em uma única rodada de combate).</p>`,
    skills: [
      { name: "Briga", value: 50, fighting: true },
      { name: "Esquivar", value: 65, dodge: true },
      { name: "Arremessar", value: 35 },
      { name: "Escalar", value: 55 },
      { name: "Escutar", value: 75 },
      { name: "Furtividade", value: 55 },
      { name: "Intimidação", value: 25 },
      { name: "Mythos de Cthulhu", value: 5 },
      { name: "Natação", value: 25 },
      { name: "Prestidigitação", value: 60 },
      { name: "Rastrear", value: 65 },
      { name: "Saltar", value: 55 },
      { name: "Língua (Inglês)", value: 35 },
      { name: "Língua (Kikuyu)", value: 60 },
      { name: "Língua (Nandi)", value: 25 },
      { name: "Língua (Swahili)", value: 40 }
    ],
    weapons: [
      { name: "Briga", skillName: "Briga", value: 50, damage: "1D3", addStrenth: true, melee: true },
      { name: "Panga", skillName: "Briga", value: 50, damage: "1D8", addStrenth: true, melee: true },
      { name: "Faca de Arremesso Africana (Pulp)", skillName: "Arremessar", value: 35, damage: "1D4+2 (+1D4 dilaceramento)", addStrenth: false, melee: false }
    ]
  },
  // CULTISTAS PADRÃO DA LÍNGUA SANGRENTA (NYC) 1 A 8
  ...[
    { num: 1, str: 60, con: 75, siz: 60, dex: 85, int: 65, app: 70, pow: 50, edu: 30, hp: 13, mov: 8, hasGun: false, hasKnife: true },
    { num: 2, str: 50, con: 65, siz: 70, dex: 75, int: 40, app: 50, pow: 50, edu: 60, hp: 13, mov: 8, hasGun: false, hasKnife: false },
    { num: 3, str: 70, con: 60, siz: 50, dex: 65, int: 70, app: 55, pow: 55, edu: 55, hp: 11, mov: 9, hasGun: true, hasKnife: false },
    { num: 4, str: 70, con: 85, siz: 40, dex: 55, int: 50, app: 40, pow: 75, edu: 40, hp: 12, mov: 9, hasGun: true, hasKnife: false },
    { num: 5, str: 75, con: 55, siz: 45, dex: 50, int: 50, app: 45, pow: 60, edu: 60, hp: 10, mov: 9, hasGun: false, hasKnife: true },
    { num: 6, str: 55, con: 60, siz: 60, dex: 50, int: 75, app: 65, pow: 55, edu: 50, hp: 12, mov: 7, hasGun: false, hasKnife: false },
    { num: 7, str: 45, con: 70, siz: 70, dex: 45, int: 50, app: 60, pow: 65, edu: 25, hp: 14, mov: 7, hasGun: false, hasKnife: false },
    { num: 8, str: 55, con: 90, siz: 65, dex: 40, int: 55, app: 30, pow: 45, edu: 45, hp: 15, mov: 7, hasGun: false, hasKnife: true }
  ].map(c => {
    const weapons = [
      { name: "Briga", skillName: "Briga", value: 45, damage: "1D3", addStrenth: true, melee: true },
      { name: "Faca Pequena / Navalha", skillName: "Briga", value: 45, damage: "1D4", addStrenth: true, melee: true },
      { name: "Panga", skillName: "Briga", value: 45, damage: "1D8", addStrenth: true, melee: true }
    ];
    if (c.hasGun) {
      weapons.push({ name: "Revólver .22", skillName: "Armas de Fogo ( Armas Curtas )", value: 30, damage: "1D6", addStrenth: false, melee: false });
    }
    if (c.hasKnife) {
      weapons.push({ name: "Faca de Arremesso Africana (Pulp)", skillName: "Arremessar", value: 35, damage: "1D4+2 (+1D4 dilaceramento)", addStrenth: false, melee: false });
    }
    return {
      name: `Cultista da Língua Sangrenta (NYC) #${c.num}`,
      type: "npc",
      subFolder: "Adversários e Monstros",
      characteristics: { str: c.str, con: c.con, siz: c.siz, dex: c.dex, int: c.int, app: c.app, pow: c.pow, edu: c.edu, luck: null },
      attribs: { hp: { value: c.hp, max: c.hp }, mp: { value: Math.floor(c.pow / 5), max: Math.floor(c.pow / 5) }, san: { value: 0, max: 94 }, mov: c.mov, db: "0", build: 0, armor: "0" },
      infos: { occupation: "Capanga do Culto da Língua Sangrenta" },
      attacksPerRound: "1",
      biography: `<p><strong>Combate Pulp:</strong> Briga 65% (32/13), Panga 65% (32/13), Revólver .22 50% (apenas #3 e #4), Faca de arremesso africana 35% (apenas #1, #5 e #8), Esquivar 60% (30/12).</p>`,
      skills: [
        { name: "Briga", value: 45, fighting: true },
        ...(c.hasGun ? [{ name: "Armas de Fogo ( Armas Curtas )", value: 30, firearms: true }] : []),
        { name: "Esquivar", value: 40, dodge: true },
        { name: "Arremessar", value: 35 },
        { name: "Encontrar", value: 35 },
        { name: "Escalar", value: 60 },
        { name: "Escutar", value: 50 },
        { name: "Furtividade", value: 60 },
        { name: "Mythos de Cthulhu", value: 5 },
        { name: "Ocultismo", value: 10 },
        { name: "Rastrear", value: 35 },
        { name: "Saltar", value: 55 },
        { name: "Língua (Inglês)", value: 35 },
        { name: "Língua (Kikuyu)", value: 60 },
        { name: "Língua (Nandi)", value: 35 },
        { name: "Língua (Swahili)", value: 50 }
      ],
      weapons
    };
  }),
  {
    name: "Silas N'Kwane",
    type: "npc",
    subFolder: "Adversários e Monstros",
    characteristics: { str: 30, con: 85, siz: 40, dex: 50, int: 75, app: 45, pow: 65, edu: 30, luck: 35 },
    attribs: { hp: { value: 12, max: 12 }, mp: { value: 13, max: 13 }, san: { value: 0, max: 88 }, mov: 5, db: "-1", build: -1, armor: "0" },
    infos: { occupation: "Gerente da Casa Ju-Ju", age: "73" },
    attacksPerRound: "1",
    biography: `<p>Ancião gerente da loja Casa Ju-Ju no Harlem.</p>`,
    skills: [
      { name: "Briga", value: 25, fighting: true },
      { name: "Esquivar", value: 35, dodge: true },
      { name: "Antropologia", value: 15 },
      { name: "Arqueologia", value: 10 },
      { name: "Arremessar", value: 30 },
      { name: "Charme", value: 60 },
      { name: "Encontrar", value: 65 },
      { name: "Escutar", value: 35 },
      { name: "Furtividade", value: 65 },
      { name: "Lábia", value: 45 },
      { name: "Mythos de Cthulhu", value: 11 },
      { name: "Nível de Crédito", value: 23 },
      { name: "Ocultismo", value: 50 },
      { name: "Psicologia", value: 45 },
      { name: "Língua (Inglês)", value: 45 },
      { name: "Língua (Kikuyu)", value: 70 },
      { name: "Língua (Nandi)", value: 20 },
      { name: "Língua (Swahili)", value: 20 }
    ],
    weapons: [
      { name: "Briga", skillName: "Briga", value: 25, damage: "1D3", addStrenth: true, melee: true },
      { name: "Panga", skillName: "Briga", value: 25, damage: "1D8", addStrenth: true, melee: true }
    ]
  },
  {
    name: "Mukunga M'Dari",
    type: "npc",
    subFolder: "Adversários e Monstros",
    characteristics: { str: 80, con: 100, siz: 75, dex: 65, int: 65, app: 85, pow: 85, edu: 40, luck: 85 },
    attribs: { hp: { value: 17, max: 17 }, mp: { value: 17, max: 17 }, san: { value: 0, max: 73 }, mov: 8, db: "+1D4", build: 1, armor: "0" },
    infos: { occupation: "Sumo-sacerdote da Língua Sangrenta", age: "36" },
    attacksPerRound: "1",
    biography: `<p>Sumo-sacerdote do Culto da Língua Sangrenta em Nova York.</p>
    <p><strong>Combate Pulp:</strong></p>
    <ul>
      <li><strong>Briga:</strong> 95% (47/19), 1D3+1D4 (porrete grande 1D8+1D4, garras de leão 1D4+1D4, canivete 1D4+1D4)</li>
      <li><strong>Panga:</strong> 85% (42/17), 1D8+1D4</li>
      <li><strong>Faca de arremesso africana:</strong> 50% (25/10), 1D4+2 mais 1D4 de dilaceramento</li>
      <li><strong>Esquivar:</strong> 95% (47/19)</li>
    </ul>
    <p><strong>Talentos Pulp:</strong> Casca Grossa e Golpes Fortes.</p>
    <p><strong>Feitiços:</strong> Vincular Byakhee, Aperto de Nyogtha, Contactar Nyarlathotep, Criar Ciimba, Maldição Pavorosa de Azathoth, Rajada Mental, Drenar Poder, Encarquilhar, Invocar/Vincular Horror Caçador.</p>`,
    skills: [
      { name: "Briga", value: 85, fighting: true },
      { name: "Lutar (Panga)", value: 75, fighting: true },
      { name: "Esquivar", value: 85, dodge: true },
      { name: "Arremessar", value: 50 },
      { name: "Arte/Ofício (Canto)", value: 55 },
      { name: "Encontrar", value: 55 },
      { name: "Escalar", value: 70 },
      { name: "Escutar", value: 65 },
      { name: "Furtividade", value: 75 },
      { name: "Intimidação", value: 60 },
      { name: "Mundo Natural", value: 40 },
      { name: "Mythos de Cthulhu", value: 26 },
      { name: "Nível de Crédito", value: 7 },
      { name: "Ocultismo", value: 45 },
      { name: "Prestidigitação", value: 55 },
      { name: "Rastrear", value: 20 },
      { name: "Saltar", value: 75 },
      { name: "Língua (Inglês)", value: 35 },
      { name: "Língua (Kikuyu)", value: 30 },
      { name: "Língua (Nandi)", value: 90 },
      { name: "Língua (Swahili)", value: 55 }
    ],
    weapons: [
      { name: "Briga", skillName: "Briga", value: 85, damage: "1D3", addStrenth: true, melee: true },
      { name: "Porrete Grande", skillName: "Briga", value: 85, damage: "1D8", addStrenth: true, melee: true },
      { name: "Garras de Leão / Canivete", skillName: "Briga", value: 85, damage: "1D4", addStrenth: true, melee: true },
      { name: "Panga", skillName: "Lutar (Panga)", value: 75, damage: "1D8", addStrenth: true, melee: true },
      { name: "Faca de Arremesso Africana (Pulp)", skillName: "Arremessar", value: 50, damage: "1D4+2 (+1D4 dilaceramento)", addStrenth: false, melee: false }
    ]
  },
  {
    name: "Chakota",
    type: "creature",
    subFolder: "Adversários e Monstros",
    characteristics: { str: 180, con: 180, siz: 180, dex: 15, int: 0, app: null, pow: 180, edu: null, luck: null },
    attribs: { hp: { value: 36, max: 36 }, mp: { value: 36, max: 36 }, san: { value: null, max: null }, mov: 4, db: "0", build: 4, armor: "Imune a armas de fogo e mundanas (vulnerável a fogo, magia e eletricidade)" },
    infos: { occupation: "Espírito de Muitos Rostos (36 faces)" },
    attacksPerRound: "1D8 mordidas por alvo (1 alvo padrão / até 3 alvos em Pulp)",
    sanLoss: { checkPassed: "1D4", checkFailled: "2D4" },
    biography: `<p><strong>Lamentos do Chakota:</strong> Afeta automaticamente todos os que puderem ouvir suas bocas chorando e gritando; provoca um teste de Sanidade (perda de <strong>1/1D6</strong> pontos) ao ouvi-los pela primeira vez.</p>
    <p><strong>Combate - Mordida (30%):</strong> Cada alvo é atacado por 1D8 faces por rodada (1 de dano por mordida). Uma mordida bem-sucedida prende a vítima. Para se libertar, faça um teste resistido de FOR contra FOR = (número de rostos mordendo x 5). Quem está preso recebe um dado de bônus para atacar o Chakota.</p>
    <p><strong>Armadura:</strong> Imune a armas de fogo e armas mundanas; fogo, magia e eletricidade podem feri-lo. Pode sufocar se todas as bocas forem cobertas.</p>
    <p><strong>Perda de Sanidade:</strong> 1D4/2D4 pontos (+1D4 se vir o rosto de um conhecido, ou +1D6 se for um amigo próximo/ente querido).</p>`,
    skills: [
      { name: "Mordida", value: 30, fighting: true }
    ],
    weapons: [
      { name: "Mordida (1D8 faces por rodada)", skillName: "Mordida", value: 30, damage: "1", addStrenth: false, melee: true }
    ]
  },
  // CIIMBA 1 A 4
  ...[
    { num: 1, str: 90, con: 95, siz: 60, dex: 65, pow: 5, hp: 15, db: "+1D4", build: 1 },
    { num: 2, str: 110, con: 35, siz: 45, dex: 55, pow: 5, hp: 8, db: "+1D4", build: 1 },
    { num: 3, str: 105, con: 65, siz: 50, dex: 50, pow: 5, hp: 11, db: "+1D4", build: 1 },
    { num: 4, str: 120, con: 50, siz: 65, dex: 20, pow: 5, hp: 11, db: "+1D6", build: 2 }
  ].map(ci => ({
    name: `Ciimba, Horror Desmorto #${ci.num}`,
    type: "creature",
    subFolder: "Adversários e Monstros",
    characteristics: { str: ci.str, con: ci.con, siz: ci.siz, dex: ci.dex, int: null, app: null, pow: ci.pow, edu: null, luck: null },
    attribs: { hp: { value: ci.hp, max: ci.hp }, mp: { value: 1, max: 1 }, san: { value: null, max: null }, mov: 6, db: ci.db, build: ci.build, armor: "Ignora todo dano exceto na cabeça (lesão grave decepa membro)" },
    infos: { occupation: "Horror Desmorto Monstruosamente Forte" },
    attacksPerRound: "1",
    sanLoss: { checkPassed: "0", checkFailled: "1D8" },
    biography: `<p><strong>Armadura:</strong> Lesões graves causadas contra um ciimba causam a perda de um membro; caso contrário, ignore todo dano, exceto na cabeça (um dado de penalidade para atingir a cabeça).</p>
    <p><strong>Perda de Sanidade:</strong> 0/1D8 pontos (+1D2 adicionais se era conhecido em vida e ainda reconhecível).</p>`,
    skills: [
      { name: "Lutar", value: 30, fighting: true }
    ],
    weapons: [
      { name: "Lutar", skillName: "Lutar", value: 30, damage: "1D4", addStrenth: true, melee: true }
    ]
  })),

  // ==========================================
  // AMÉRICA - AJUDANTES
  // ==========================================
  {
    name: "Solomon \"Solly\" Reznik",
    type: "npc",
    subFolder: "Ajudantes",
    characteristics: { str: 40, con: 55, siz: 75, dex: 75, int: 80, app: 80, pow: 60, edu: 65, luck: 30 },
    attribs: { hp: { value: 13, max: 13 }, mp: { value: 12, max: 12 }, san: { value: 60, max: 99 }, mov: 8, db: "0", build: 0, armor: "0" },
    infos: { occupation: "Arrombador de cofres e ladrão", age: "29" },
    attacksPerRound: "1",
    biography: `<p>Imigrante judeu russo de Lower East Side que se voltou para o crime após ter perdido tudo num incêndio no negócio de carpintaria de armários da família.</p>
    <p><strong>Combate Pulp:</strong> Briga 75% (37/15), 1D3 ou pé-de-cabra 1D8; Esquivar 60% (30/12).</p>
    <p><strong>Talento Pulp:</strong> Engenhoso (pode gastar 10 pontos de Sorte para encontrar algum equipamento útil).</p>`,
    skills: [
      { name: "Briga", value: 55, fighting: true },
      { name: "Esquivar", value: 40, dodge: true },
      { name: "Arremessar", value: 45 },
      { name: "Arte/Ofício (Construir Armários)", value: 45 },
      { name: "Avaliação", value: 55 },
      { name: "Chaveiro", value: 70 },
      { name: "Consertos Mecânicos", value: 50 },
      { name: "Encontrar", value: 75 },
      { name: "Escalar", value: 40 },
      { name: "Escutar", value: 70 },
      { name: "Furtividade", value: 60 },
      { name: "Nível de Crédito", value: 20 },
      { name: "Persuasão", value: 40 },
      { name: "Prestidigitação", value: 60 },
      { name: "Língua (Inglês)", value: 65 },
      { name: "Língua (Russo)", value: 20 }
    ],
    weapons: [
      { name: "Briga", skillName: "Briga", value: 55, damage: "1D3", addStrenth: true, melee: true },
      { name: "Pé-de-cabra", skillName: "Briga", value: 55, damage: "1D8", addStrenth: true, melee: true }
    ]
  },
  {
    name: "Gino Fabbri",
    type: "npc",
    subFolder: "Ajudantes",
    characteristics: { str: 80, con: 65, siz: 85, dex: 80, int: 70, app: 55, pow: 50, edu: 60, luck: 25 },
    attribs: { hp: { value: 15, max: 15 }, mp: { value: 10, max: 10 }, san: { value: 50, max: 99 }, mov: 7, db: "+1D6", build: 2, armor: "0" },
    infos: { occupation: "Ex-soldado e perito em explosivos", age: "30" },
    attacksPerRound: "1",
    biography: `<p>Ítalo-americano de segunda geração que aprendeu suas habilidades com explosivos nas linhas de frente durante a Grande Guerra.</p>
    <p><strong>Combate Pulp:</strong> Briga 85% (42/17), 1D3+1D6; Colt .45 automática 75% (37/15), 1D10+2; Esquivar 60% (30/12).</p>
    <p><strong>Talento Pulp:</strong> Alerta (nunca é surpreendido em combate).</p>`,
    skills: [
      { name: "Briga", value: 65, fighting: true },
      { name: "Armas de Fogo ( Armas Curtas )", value: 60, firearms: true },
      { name: "Esquivar", value: 40, dodge: true },
      { name: "Arremessar", value: 60 },
      { name: "Consertos Mecânicos", value: 60 },
      { name: "Demolições", value: 70 },
      { name: "Escalar", value: 40 },
      { name: "Furtividade", value: 50 },
      { name: "Intimidação", value: 65 },
      { name: "Nível de Crédito", value: 20 },
      { name: "Primeiros Socorros", value: 50 },
      { name: "Saltar", value: 40 },
      { name: "Sobrevivência (Deserto)", value: 40 },
      { name: "Língua (Inglês)", value: 60 },
      { name: "Língua (Italiano)", value: 60 }
    ],
    weapons: [
      { name: "Briga", skillName: "Briga", value: 65, damage: "1D3", addStrenth: true, melee: true },
      { name: "Colt .45 Automática", skillName: "Armas de Fogo ( Armas Curtas )", value: 60, damage: "1D10+2", addStrenth: false, melee: false }
    ]
  },
  {
    name: "Clodagh Bannon",
    type: "npc",
    subFolder: "Ajudantes",
    characteristics: { str: 50, con: 65, siz: 60, dex: 85, int: 85, app: 70, pow: 70, edu: 65, luck: 42 },
    attribs: { hp: { value: 12, max: 12 }, mp: { value: 17, max: 17 }, san: { value: 70, max: 99 }, mov: 8, db: "0", build: 0, armor: "0" },
    infos: { occupation: "Professora de piano, especialista em segurança e ocultista curiosa", age: "36" },
    attacksPerRound: "1",
    biography: `<p>Herdeira de uma longa linhagem de policiais, que ficaria horrorizada se soubesse do trabalho paralelo de Clo como gênia do crime.</p>
    <p><strong>Combate Pulp:</strong> Briga 65% (32/13), 1D3; Revólver .32 60% (30/12), 1D8; Esquivar 65% (32/13).</p>
    <p><strong>Talento Pulp:</strong> Sagaz (dado de bônus em testes de INT, mas não de Ideia).</p>`,
    skills: [
      { name: "Briga", value: 45, fighting: true },
      { name: "Armas de Fogo ( Armas Curtas )", value: 40, firearms: true },
      { name: "Esquivar", value: 45, dodge: true },
      { name: "Arremessar", value: 50 },
      { name: "Arte/Ofício (Piano)", value: 55 },
      { name: "Avaliação", value: 55 },
      { name: "Charme", value: 65 },
      { name: "Dirigir Automóveis", value: 30 },
      { name: "Encontrar", value: 75 },
      { name: "Escutar", value: 70 },
      { name: "Furtividade", value: 70 },
      { name: "Nível de Crédito", value: 25 },
      { name: "Ocultismo", value: 35 },
      { name: "Persuasão", value: 60 },
      { name: "Língua (Inglês)", value: 65 }
    ],
    weapons: [
      { name: "Briga", skillName: "Briga", value: 45, damage: "1D3", addStrenth: true, melee: true },
      { name: "Revólver .32", skillName: "Armas de Fogo ( Armas Curtas )", value: 40, damage: "1D8", addStrenth: false, melee: false }
    ]
  },
  {
    name: "Jessica Templeton",
    type: "npc",
    subFolder: "Ajudantes",
    characteristics: { str: 60, con: 65, siz: 50, dex: 90, int: 85, app: 80, pow: 50, edu: 60, luck: 25 },
    attribs: { hp: { value: 11, max: 11 }, mp: { value: 10, max: 10 }, san: { value: 50, max: 99 }, mov: 9, db: "0", build: 0, armor: "0" },
    infos: { occupation: "Vigarista e punguista", age: "26" },
    attacksPerRound: "1",
    biography: `<p>A "pequena Jessie" cresceu num dos bairros mais pobres de Yonkers antes de se tornar uma dama vigarista.</p>
    <p><strong>Combate Pulp:</strong> Briga 35% (17/7), 1D3; Derringer .25 60% (30/12), 1D6; Esquivar 65% (32/13).</p>
    <p><strong>Talento Pulp:</strong> Mestre dos Disfarces (gasta 10 de Sorte para ganhar um dado de bônus em Disfarce ou Atuação).</p>`,
    skills: [
      { name: "Briga", value: 25, fighting: true },
      { name: "Armas de Fogo ( Armas Curtas )", value: 40, firearms: true },
      { name: "Esquivar", value: 45, dodge: true },
      { name: "Arremessar", value: 45 },
      { name: "Arte/Ofício (Atuação)", value: 65 },
      { name: "Avaliação", value: 65 },
      { name: "Charme", value: 65 },
      { name: "Direito", value: 15 },
      { name: "Encontrar", value: 60 },
      { name: "Escalar", value: 60 },
      { name: "Escutar", value: 60 },
      { name: "Furtividade", value: 50 },
      { name: "Lábia", value: 70 },
      { name: "Nível de Crédito", value: 30 },
      { name: "Prestidigitação", value: 70 },
      { name: "Psicologia", value: 60 },
      { name: "Língua (Inglês)", value: 75 }
    ],
    weapons: [
      { name: "Briga", skillName: "Briga", value: 25, damage: "1D3", addStrenth: true, melee: true },
      { name: "Derringer .25", skillName: "Armas de Fogo ( Armas Curtas )", value: 40, damage: "1D6", addStrenth: false, melee: false }
    ]
  },
  {
    name: "Beauford Jones",
    type: "npc",
    subFolder: "Ajudantes",
    characteristics: { str: 75, con: 80, siz: 70, dex: 70, int: 75, app: 75, pow: 60, edu: 60, luck: 30 },
    attribs: { hp: { value: 15, max: 15 }, mp: { value: 12, max: 12 }, san: { value: 60, max: 99 }, mov: 8, db: "+1D4", build: 1, armor: "0" },
    infos: { occupation: "Músculos e motorista de fuga", age: "21" },
    attacksPerRound: "1",
    biography: `<p>Residente do Harlem e ex-motorista de uma família rica de Manhattan.</p>
    <p><strong>Combate Pulp:</strong> Briga 85% (42/17), 1D3+1D4; Revólver Colt .45 60% (30/12), 1D10+2; Esquivar 55% (22/11).</p>
    <p><strong>Talento Pulp:</strong> Golpes Fortes (gasta 10 de Sorte para +1 dado de dano em ataques corpo a corpo).</p>`,
    skills: [
      { name: "Briga", value: 65, fighting: true },
      { name: "Armas de Fogo ( Armas Curtas )", value: 40, firearms: true },
      { name: "Esquivar", value: 35, dodge: true },
      { name: "Arremessar", value: 40 },
      { name: "Consertos Mecânicos", value: 60 },
      { name: "Dirigir Automóveis", value: 70 },
      { name: "Encontrar", value: 65 },
      { name: "Escalar", value: 35 },
      { name: "Furtividade", value: 50 },
      { name: "Intimidação", value: 65 },
      { name: "Navegação", value: 60 },
      { name: "Nível de Crédito", value: 15 },
      { name: "Operar Maquinário Pesado", value: 50 },
      { name: "Persuasão", value: 50 },
      { name: "Psicologia", value: 40 },
      { name: "Língua (Inglês)", value: 60 }
    ],
    weapons: [
      { name: "Briga", skillName: "Briga", value: 65, damage: "1D3", addStrenth: true, melee: true },
      { name: "Revólver Colt .45", skillName: "Armas de Fogo ( Armas Curtas )", value: 40, damage: "1D10+2", addStrenth: false, melee: false }
    ]
  },
  {
    name: "Fearghal Wong",
    type: "npc",
    subFolder: "Ajudantes",
    characteristics: { str: 70, con: 80, siz: 60, dex: 85, int: 65, app: 60, pow: 60, edu: 50, luck: 30 },
    attribs: { hp: { value: 14, max: 14 }, mp: { value: 12, max: 12 }, san: { value: 60, max: 99 }, mov: 9, db: "+1D4", build: 1, armor: "0" },
    infos: { occupation: "Boxeador e capanga contratado", age: "24" },
    attacksPerRound: "1",
    biography: `<p>Meio chinês e meio irlandês criado em Chinatown, hábil com os punhos.</p>
    <p><strong>Combate Pulp:</strong> Briga 95% (47/19), 1D3+1D4 ou cabo de picareta 1D8+1D4; Esquivar 75% (37/15).</p>
    <p><strong>Talento Pulp:</strong> Casca Grossa (gasta 10 de Sorte para diminuir 5 pontos de dano por rodada).</p>`,
    skills: [
      { name: "Briga", value: 75, fighting: true },
      { name: "Esquivar", value: 60, dodge: true },
      { name: "Arremessar", value: 50 },
      { name: "Encontrar", value: 65 },
      { name: "Escalar", value: 50 },
      { name: "Furtividade", value: 50 },
      { name: "Intimidação", value: 75 },
      { name: "Nível de Crédito", value: 15 },
      { name: "Primeiros Socorros", value: 45 },
      { name: "Psicologia", value: 40 },
      { name: "Saltar", value: 60 },
      { name: "Língua (Chinês - Mandarim)", value: 50 },
      { name: "Língua (Inglês)", value: 50 }
    ],
    weapons: [
      { name: "Briga", skillName: "Briga", value: 75, damage: "1D3", addStrenth: true, melee: true },
      { name: "Cabo de Picareta", skillName: "Briga", value: 75, damage: "1D8", addStrenth: true, melee: true }
    ]
  }
];

/**
 * Converte um objeto de dados em um Documento Actor + Items do CoC7
 */
function buildCoC7ActorData(entry, folderId) {
  const characteristics = {};
  for (const [k, v] of Object.entries(entry.characteristics)) {
    characteristics[k] = { value: v, tempValue: v };
  }

  const items = [];

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

  return {
    name: entry.name,
    type: entry.type,
    folder: folderId,
    system: {
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
    },
    items
  };
}

/**
 * Função genérica para popular um país (pasta raiz + subpastas) no compêndio
 */
async function popularPais(countryName, color, subFolderNames, dataArray) {
  const pack = game.packs.get("mascaras-compendio.personagens");
  if (!pack) {
    return ui.notifications.error("Compêndio 'mascaras-compendio.personagens' não encontrado!");
  }

  const wasLocked = pack.locked;
  if (wasLocked) await pack.configure({ locked: false });

  let rootFolder = pack.folders.find(f => f.name === countryName && !f.folder);
  if (!rootFolder) {
    rootFolder = await Folder.create(
      { name: countryName, type: "Actor", color },
      { pack: pack.collection }
    );
  }

  const subFolders = {};
  for (const subName of subFolderNames) {
    let sf = pack.folders.find(f => f.name === subName && f.folder?.id === rootFolder.id);
    if (!sf) {
      sf = await Folder.create(
        { name: subName, type: "Actor", folder: rootFolder.id },
        { pack: pack.collection }
      );
    }
    subFolders[subName] = sf.id;
  }

  await pack.getIndex();

  let criados = 0;
  for (const npc of dataArray) {
    const existing = pack.index.find(i => i.name === npc.name);
    if (existing) continue;

    const folderId = subFolders[npc.subFolder] || rootFolder.id;
    const actorData = buildCoC7ActorData(npc, folderId);
    await Actor.create(actorData, { pack: pack.collection });
    criados++;
  }

  if (wasLocked) await pack.configure({ locked: true });
  if (criados > 0) {
    ui.notifications.info(`[Máscaras] ${criados} personagens de "${countryName}" adicionados ao compêndio!`);
  }
}

async function popularCompendioPeru() {
  await popularPais(
    "Peru",
    "#8b0000",
    ["Aliados e Independentes", "Adversários e Monstros"],
    PERU_DATA
  );
}

async function popularCompendioAmerica() {
  await popularPais(
    "América",
    "#1b365d",
    [
      "A Polícia",
      "Aliados e Independentes",
      "Os Amigos de Hilton Adams",
      "Adversários e Monstros",
      "Ajudantes"
    ],
    AMERICA_DATA
  );
}

Hooks.once("ready", async () => {
  if (!game.user.isGM) return;

  window.MascarasCompendio = {
    popularPeru: popularCompendioPeru,
    popularAmerica: popularCompendioAmerica
  };

  const pack = game.packs.get("mascaras-compendio.personagens");
  if (pack) {
    await pack.getIndex();
    if (!pack.folders.find(f => f.name === "Peru")) {
      await popularCompendioPeru();
    }
    if (!pack.folders.find(f => f.name === "América")) {
      await popularCompendioAmerica();
    }
  }
});
