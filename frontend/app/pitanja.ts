export type pitanje = {
  i: number;
  q: string;
  a: string;
  b: string;
  c?: string;
  d?: string;
  correct: string[];
};
export const pitanja: pitanje[] = [
  {
    i: 1,
    q: "Koja je maksimalna dozvoljena brzina kretanja vozila u naseljenom mjestu, ako saobraćajnim znakom nije drugačije određeno?",
    a: "40 km/h",
    b: "50 km/h",
    c: "60 km/h",
    correct: ["b"],
  },
  {
    i: 2,
    q: "Šta označava crveno svjetlo na semaforu?",
    a: "Zabranjen prolaz",
    b: "Slobodan prolaz uz oprez",
    c: "Obavezno smanjenje brzine",
    correct: ["a", "b"],
  },
  {
    i: 3,
    q: "Vozilo hitne pomoći sa upaljenim plavim rotacionim svjetlom ima prvenstvo prolaza u odnosu na sva druga vozila osim:",
    a: "Vozila policije",
    b: "Vozila pod pratnjom",
    c: "Tramvaja",
    correct: ["b"],
  },
  {
    i: 4,
    q: "Dozvoljena količina alkohola u krvi za vozače početnike (do 21 godine ili 2 godine iskustva) iznosi:",
    a: "0.3 g/kg",
    b: "0.5 g/kg",
    c: "0.0 g/kg",
    correct: ["c"],
  },
  {
    i: 5,
    q: "Kada je vozač dužan da upali dnevna ili kratka svjetla na vozilu?",
    a: "Samo noću",
    b: "Samo u uslovima smanjene vidljivosti",
    c: "Uvijek, i danju i noću",
    correct: ["c"],
  },
  // {
  //   i: 6,
  //   q: "Šta vozač mora uraditi prije skretanja ulijevo?",
  //   a: "Samo usporiti",
  //   b: "Upaliti lijevi pokazivač pravca i uvjeriti se da radnju može izvršiti bezbjedno",
  //   c: "Samo zatrubiti",
  //   correct: ["b"],
  // },
  // {
  //   i: 7,
  //   q: "Znak 'Stop' (osmogougaoni crveni znak) obavezuje vozača da:",
  //   a: "Uspori i prođe ako nema nikoga",
  //   b: "Obavezno zaustavi vozilo na liniji zaustavljanja ili pregledu raskrsnice",
  //   c: "Samo blica drugim vozačima",
  //   correct: ["b"],
  // },
  // {
  //   i: 8,
  //   q: "Na autoputu je zabranjeno polukružno okretanje i kretanje unazad.",
  //   a: "Tačno",
  //   b: "Netačno",
  //   correct: ["a"],
  // },
  // {
  //   i: 9,
  //   q: "Koji od navedenih faktora najviše produžava put kočenja?",
  //   a: "Muzika u vozilu",
  //   b: "Mokar i klizav kolovoz",
  //   c: "Upaljena klima",
  //   correct: ["b"],
  // },
  // {
  //   i: 10,
  //   q: "Kada se smije preticati drugo vozilo sa desne strane?",
  //   a: "Kada se vozilo ispred isključuje ulijevo, a ima dovoljno prostora desno",
  //   b: "Nikada",
  //   c: "Kada je gužva u saobraćaju",
  //   correct: ["a"],
  // },
  // {
  //   i: 11,
  //   q: "Šta znači žuto svjetlo na semaforu upaljeno istovremeno sa crvenim?",
  //   a: "Spremanje za polazak, uskoro se pali zeleno",
  //   b: "Obavezno kočenje",
  //   c: "Kraj zabrane prolaza",
  //   correct: ["a"],
  // },
  // {
  //   i: 12,
  //   q: "Na kojem rastojanju od mjesta saobraćajne nezgode se postavlja sigurnosni trougao van naselja?",
  //   a: "10 metara",
  //   b: "50 metara",
  //   c: "100 metara",
  //   correct: ["b"],
  // },
  // {
  //   i: 13,
  //   q: "Koja je uloga ABS sistema na vozilu?",
  //   a: "Smanjenje potrošnje goriva",
  //   b: "Sprečavanje blokiranja točkova prilikom naglog kočenja",
  //   c: "Brže startovanje motora",
  //   correct: ["b"],
  // },
  // {
  //   i: 14,
  //   q: "Puna uzdužna linija na kolovozu znači:",
  //   a: "Dozvoljeno preticanje",
  //   b: "Zabranjen prelazak vozila preko te linije",
  //   c: "Oznaka za parking",
  //   correct: ["b"],
  // },
  // {
  //   i: 15,
  //   q: "Vozač koji se uključuje sa sporednog puta na glavni dužan je da:",
  //   a: "Ubrza da ne ometa druge",
  //   b: "Ustupi prvenstvo svim vozilima na glavnom putu",
  //   c: "Samo zatrubi",
  //   correct: ["b"],
  // },
  // {
  //   i: 16,
  //   q: "Šta označava znak u obliku obrnutog trougla (bijela osnova, crveni rub)?",
  //   a: "Zabrana prolaza",
  //   b: "Raskrsnica sa putem sa prvenstvom prolaza",
  //   c: "Opasnost na putu",
  //   correct: ["b"],
  // },
  // {
  //   i: 17,
  //   q: "Kada se koristi sirena u naseljenom mjestu?",
  //   a: "Za pozdravljanje prijatelja",
  //   b: "Samo u slučaju neposredne opasnosti",
  //   c: "Kada je pješak na trotoaru",
  //   correct: ["b"],
  // },
  // {
  //   i: 18,
  //   q: "Da li pješak smije prelaziti kolovoz van pješačkog prelaza ako je isti udaljen više od 100 metara?",
  //   a: "Da, uz maksimalan oprez",
  //   b: "Ne, nikada",
  //   correct: ["a"],
  // },
  // {
  //   i: 19,
  //   q: "Koji je minimalni dozvoljeni profil gume (šara) za ljetne gume na putničkom automobilu?",
  //   a: "1.0 mm",
  //   b: "1.6 mm",
  //   c: "4.0 mm",
  //   correct: ["b"],
  // },
  // {
  //   i: 20,
  //   q: "U raskrsnici bez znakova, ko ima prvenstvo?",
  //   a: "Vozilo koje ide pravo",
  //   b: "Vozilo koje dolazi sa desne strane",
  //   c: "Veće vozilo",
  //   d: "Vozilo koje se brže kreće",
  //   correct: ["b"],
  // },
];
/*
[
  {
    "i": 1,
    "q": "U saobraćajnoj situaciji kao na slici kojom putanjom vozač motocikla mora izvršiti radnju skretanja ulijevo?",
    "a": "putanjom broj 2;",
    "b": "putanjom broj 1.",
    "correct": ["1"]
  },
  {
    "i": 2,
    "q": "Koji je redoslijed prolaska vozila na raskrsnici u situaciji kao na slici?",
    "a": "2-3-1;",
    "b": "2-1-3;",
    "c": "1-3-2.",
    "correct": ["2"]
  },
  {
    "i": 3,
    "q": "Koji je redoslijed prolaska vozila na raskrsnici u situaciji kao na slici?",
    "a": "1-2;",
    "b": "2-1.",
    "correct": ["2"]
  },
  {
    "i": 4,
    "q": "Kako u saobraćajnoj situaciji kao na slici mora postupiti vozač vozila broj 1:",
    "a": "propustiti vozilo broj 3, a zatim proći prije vozila broj 2;",
    "b": "propustiti vozilo broj 3, zatim propustiti vozilo broj 2 i zadnji proći kroz raskrsnicu.",
    "correct": ["2"]
  },
  {
    "i": 5,
    "q": "Koji je redoslijed prolaska vozila na raskrsnici u situaciji kao na slici?",
    "a": "2-3-4-1;",
    "b": "2-3-1-4;",
    "c": "1-2-3-4.",
    "correct": ["3"]
  },
  {
    "i": 6,
    "q": "Kako u saobraćajnoj situaciji kao na slici mora postupiti vozač vozila broj 1?",
    "a": "proći kroz raskrsnicu prije vozila broj 2, a propustiti vozilo broj 3;",
    "b": "propustiti vozilo broj 2, a zatim proći kroz raskrsnicu prije vozila broj 3.",
    "correct": ["1"]
  },
  {
    "i": 7,
    "q": "Koji je redoslijed prolaska vozila na raskrsnici u situaciji kao na slici?",
    "a": "3-1-2-4;",
    "b": "4-2-1-3;",
    "c": "3-4-2-1.",
    "correct": ["1"]
  },
  {
    "i": 8,
    "q": "Koji je redoslijed prolaska vozila na raskrsnici u situaciji kao na slici?",
    "a": "2-3-1;",
    "b": "2-1-3;",
    "c": "3-1-2.",
    "correct": ["2"]
  },
  {
    "i": 9,
    "q": "Da li je u saobraćajnoj situaciji kao na slici dozvoljeno izvršiti radnju polukružnog okretanja vozilom?",
    "a": "da;",
    "b": "ne.",
    "correct": ["2"]
  },
  {
    "i": 10,
    "q": "U saobraćajnoj situaciji kao na slici, koji učesnik u saobraćaju mora sačekati i propustiti drugog učesnika?",
    "a": "broj 2;",
    "b": "broj 1.",
    "correct": ["1"]
  },
  {
    "i": 11,
    "q": "Koji je redoslijed prolaska vozila na raskrsnici u situaciji kao na slici?",
    "a": "5-4-3-2-1;",
    "b": "1-2-3-4-5.",
    "correct": ["2"]
  },
  {
    "i": 12,
    "q": "Koji je redoslijed prolaska vozila na raskrsnici u situaciji kao na slici?",
    "a": "2-3-1;",
    "b": "1-2-3;",
    "c": "3-1-2.",
    "correct": ["1"]
  },
  {
    "i": 13,
    "q": "Kojim vozilima u saobraćajnoj situaciji kao na slici nije dozvoljen prolaz na raskrsnici?",
    "a": "vozilo broj 1 i broj 3;",
    "b": "vozilo broj 4 i broj 2.",
    "correct": ["2"]
  },
  {
    "i": 14,
    "q": "Koji je redoslijed prolaska vozila na raskrsnici u situaciji kao na slici?",
    "a": "4-3-1-2;",
    "b": "3-4-1-2;",
    "c": "4-3-1-2.",
    "correct": ["2"]
  },
  {
    "i": 15,
    "q": "Koji je redoslijed prolaska vozila na raskrsnici u situaciji kao na slici?",
    "a": "1-2-3;",
    "b": "2-3-1;",
    "c": "3-1-2.",
    "correct": ["2"]
  },
  {
    "i": 16,
    "q": "Koji je redoslijed prolaska vozila na raskrsnici u situaciji kao na slici?",
    "a": "2-3-1;",
    "b": "3-1-2;",
    "c": "1-3-2.",
    "correct": ["2"]
  },
  {
    "i": 17,
    "q": "Koji je redoslijed prolaska vozila na raskrsnici u situaciji kao na slici?",
    "a": "1-2-3;",
    "b": "3-2-1;",
    "c": "2-1-3.",
    "correct": ["1"]
  },
  {
    "i": 18,
    "q": "Koji je redoslijed prolaska vozila na raskrsnici u situaciji kao na slici?",
    "a": "1-3-2;",
    "b": "2-3-1;",
    "c": "2-1-3.",
    "correct": ["2"]
  },
  {
    "i": 19,
    "q": "Koji je redoslijed prolaska vozila na raskrsnici u situaciji kao na slici?",
    "a": "1-3-2-4;",
    "b": "3-2-1-4;",
    "c": "3-1-2-4;",
    "d": "1-4-2-3.",
    "correct": ["3"]
  },
  {
    "i": 20,
    "q": "Kako u saobraćajnoj situaciji kao na slici mora postupiti vozač vozila broj 2?",
    "a": "zaustaviti se i propustiti vozilo broj 1;",
    "b": "proći prije vozila broj 1.",
    "correct": ["1"]
  },
  {
    "i": 21,
    "q": "Koji je redoslijed prolaska vozila na raskrsnici u situaciji kao na slici?",
    "a": "2-1-3;",
    "b": "3-1-2;",
    "c": "1-2-3.",
    "correct": ["1"]
  },
  {
    "i": 22,
    "q": "Koji je redoslijed prolaska vozila na raskrsnici u situaciji kao na slici?",
    "a": "1-2-3;",
    "b": "1-3-2;",
    "c": "3-1-2.",
    "correct": ["3"]
  },
  {
    "i": 23,
    "q": "Koji je redoslijed prolaska vozila na raskrsnici u situaciji kao na slici?",
    "a": "2-1-3;",
    "b": "1-3-2;",
    "c": "3-2-1.",
    "correct": ["1"]
  },
  {
    "i": 24,
    "q": "Koji je redoslijed prolaska vozila na raskrsnici u situaciji kao na slici?",
    "a": "3-2-1;",
    "b": "1-2-3;",
    "c": "1-3-2.",
    "correct": ["1"]
  },
  {
    "i": 25,
    "q": "Koji je redoslijed prolaska vozila na raskrsnici u situaciji kao na slici?",
    "a": "1-2-3;",
    "b": "2-1-3;",
    "c": "3-1-2.",
    "correct": ["2"]
  },
  {
    "i": 26,
    "q": "Koji je redoslijed prolaska vozila na raskrsnici u situaciji kao na slici?",
    "a": "2-1-3;",
    "b": "3-2-1;",
    "c": "1-3-2.",
    "correct": ["3"]
  },
  {
    "i": 27,
    "q": "Koji je redoslijed prolaska vozila na raskrsnici u situaciji kao na slici?",
    "a": "1-2-3;",
    "b": "2-1-3;",
    "c": "3-1-2.",
    "correct": ["2"]
  },
  {
    "i": 28,
    "q": "Koji je redoslijed prolaska vozila na raskrsnici u situaciji kao na slici?",
    "a": "3-2-1;",
    "b": "2-1-3;",
    "c": "1-3-2.",
    "correct": ["2"]
  },
  {
    "i": 29,
    "q": "Kako u saobraćajnoj situaciji kao na slici mora postupiti vozač vozila broj 2?",
    "a": "propustiti vozilo broj 1;",
    "b": "proći prije vozila broj 1.",
    "correct": ["1"]
  },
  {
    "i": 30,
    "q": "Kako u saobraćajnoj situaciji kao na slici mora postupiti vozač vozila broj 2?",
    "a": "proći prije vozila broj 1;",
    "b": "propustiti vozilo broj 1.",
    "correct": ["2"]
  },
  {
    "i": 31,
    "q": "Koji je redoslijed prolaska vozila na raskrsnici u situaciji kao na slici?",
    "a": "2-1-3;",
    "b": "3-1-2;",
    "c": "3-2-1.",
    "correct": ["3"]
  },
  {
    "i": 32,
    "q": "Koji je redoslijed prolaska vozila na raskrsnici u situaciji kao na slici?:",
    "a": "1-2-3-4;",
    "b": "4-1-2-3;",
    "c": "2-3-4-1.",
    "correct": ["2"]
  },
  {
    "i": 33,
    "q": "Koji je redoslijed prolaska vozila na raskrsnici u situaciji kao na slici?",
    "a": "3-1-2;",
    "b": "2-1-3;",
    "c": "1-2-3.",
    "correct": ["1"]
  },
  {
    "i": 34,
    "q": "Koji je redoslijed prolaska vozila na raskrsnici u situaciji kao na slici?",
    "a": "3-2-1;",
    "b": "1-2-3;",
    "c": "2-1-3.",
    "correct": ["3"]
  },
  {
    "i": 35,
    "q": "Koji je redoslijed prolaska vozila na raskrsnici u situaciji kao na slici?",
    "a": "1-3-2;",
    "b": "2-3-1;",
    "c": "3-2-1.",
    "correct": ["2"]
  },
  {
    "i": 36,
    "q": "Koji je redoslijed prolaska vozila na raskrsnici u situaciji kao na slici?",
    "a": "2-3-1;",
    "b": "3-2-1;",
    "c": "3-1-2.",
    "correct": ["3"]
  },
  {
    "i": 37,
    "q": "Koji je redoslijed prolaska vozila na raskrsnici u situaciji kao na slici?",
    "a": "3-2-1;",
    "b": "1-2-3;",
    "c": "2-1-3.",
    "correct": ["3"]
  },
  {
    "i": 38,
    "q": "Koji je redoslijed prolaska vozila na raskrsnici u situaciji kao na slici?",
    "a": "3-2-1;",
    "b": "2-3-1;",
    "c": "1-2-3.",
    "correct": ["2"]
  },
  {
    "i": 39,
    "q": "Koji je redoslijed prolaska vozila na raskrsnici u situaciji kao na slici?",
    "a": "2-3-1;",
    "b": "1-3-2;",
    "c": "1-2-3.",
    "correct": ["3"]
  },
  {
    "i": 40,
    "q": "Koji je redoslijed prolaska vozila na raskrsnici u situaciji kao na slici?",
    "a": "3-2-1;",
    "b": "2-1-3;",
    "c": "1-2-3.",
    "correct": ["2"]
  },
  {
    "i": 41,
    "q": "Koji je redoslijed prolaska vozila na raskrsnici u situaciji kao na slici?",
    "a": "2-3-1;",
    "b": "1-3-2;",
    "c": "2-1-3.",
    "correct": ["3"]
  },
  {
    "i": 42,
    "q": "Koji je redoslijed prolaska vozila na raskrsnici u situaciji kao na slici?",
    "a": "3-2-1;",
    "b": "3-1-2;",
    "c": "1-2-3.",
    "correct": ["2"]
  },
  {
    "i": 43,
    "q": "Koji je redoslijed prolaska vozila na raskrsnici u situaciji kao na slici?",
    "a": "1-2-3;",
    "b": "3-1-2;",
    "c": "2-1-3.",
    "correct": ["3"]
  },
  {
    "i": 44,
    "q": "Koji je redoslijed prolaska vozila na raskrsnici u situaciji kao na slici?",
    "a": "3-2-1;",
    "b": "2-1-3;",
    "c": "1-2-3.",
    "correct": ["2"]
  },
  {
    "i": 45,
    "q": "Koji je redoslijed prolaska vozila na raskrsnici u situaciji kao na slici?",
    "a": "3-2-1;",
    "b": "2-1-3;",
    "c": "1-3-2.",
    "correct": ["3"]
  },
  {
    "i": 46,
    "q": "Koji je redoslijed prolaska vozila na raskrsnici u situaciji kao na slici?",
    "a": "3-1-2;",
    "b": "2-1-3;",
    "c": "1-3-2.",
    "correct": ["3"]
  },
  {
    "i": 47,
    "q": "Koji je redoslijed prolaska vozila na raskrsnici u situaciji kao na slici?",
    "a": "2-1-3;",
    "b": "3-2-1;",
    "c": "1-3-2.",
    "correct": ["3"]
  },
  {
    "i": 48,
    "q": "Koji je redoslijed prolaska vozila na raskrsnici u situaciji kao na slici?",
    "a": "1-2-3;",
    "b": "2-3-1;",
    "c": "3-2-1.",
    "correct": ["3"]
  },
  {
    "i": 49,
    "q": "Koji je redoslijed prolaska vozila na raskrsnici u situaciji kao na slici?",
    "a": "2-1-3-4;",
    "b": "1-2-3-4;",
    "c": "1-2-4-3.",
    "correct": ["3"]
  },
  {
    "i": 50,
    "q": "Koji je redoslijed prolaska vozila na raskrsnici u situaciji kao na slici?",
    "a": "1-3-2;",
    "b": "3-2-1;",
    "c": "2-3-1.",
    "correct": ["2"]
  },
  {
    "i": 51,
    "q": "Koji je redoslijed prolaska vozila na raskrsnici u situaciji kao na slici?",
    "a": "2 – 3 – 1;",
    "b": "2 – 1 – 3;",
    "c": "3 – 1 – 2.",
    "correct": ["2"]
  },
  {
    "i": 52,
    "q": "Koji je redoslijed prolaska učesnika u saobraćaju na raskrsnici u situaciji kao na slici?",
    "a": "1-3-2;",
    "b": "3, pa 2 i 1 istovremeno;",
    "c": "2 i 1 istovremeno, pa 3.",
    "correct": ["2"]
  },
  {
    "i": 53,
    "q": "Da li je u saobraćajnoj situaciji kao na slici dozvoljeno izvršiti radnju polukružnog okretanja vozilom kojim upravljate?",
    "a": "da;",
    "b": "ne.",
    "correct": ["2"]
  },
  {
    "i": 54,
    "q": "Koji je redoslijed prolaska vozila na raskrsnici u situaciji kao na slici?",
    "a": "1 – 3 – 2;",
    "b": "1 – 2 – 3;",
    "c": "3 – 1 – 2.",
    "correct": ["2"]
  },
  {
    "i": 55,
    "q": "Koji je redoslijed prolaska vozila na raskrsnici u situaciji kao na slici?",
    "a": "1 – 3 – 2;",
    "b": "3 – 1 – 2;",
    "c": "2 – 3 – 1.",
    "correct": ["1"]
  },
  {
    "i": 56,
    "q": "Koji je redoslijed prolaska vozila na raskrsnici u situaciji kao na slici?",
    "a": "4 – 1 – 2 – 3;",
    "b": "2 – 3 – 4 – 1;",
    "c": "2 – 3 – 1 – 4.",
    "correct": ["3"]
  },
  {
    "i": 57,
    "q": "Koji je redoslijed prolaska vozila na raskrsnici u situaciji kao na slici?",
    "a": "3 – 2 – 1;",
    "b": "3 – 1 – 2;",
    "c": "2 – 3 – 1.",
    "correct": ["3"]
  },
  {
    "i": 58,
    "q": "Kako ćete postupiti na raskrsnici na kojoj je saobraćaj regulisan svjetlosnom saobraćajnom signalizacijom kao na slici?",
    "a": "obavezno zaustaviti vozilo jer se uključujem sa sporednog puta;",
    "b": "obavezno zaustaviti vozilo zbog znaka „STOP“;",
    "c": "nastaviti kretanje vozilom.",
    "correct": ["3"]
  },
  {
    "i": 59,
    "q": "Kako ćete postupiti na raskrsnici u saobraćajnoj situaciji kao na slici?",
    "a": "nastaviti kretanje vozilom jer nema niko sa desne strane;",
    "b": "proći drugi jer sam žutom vozilu sa desne strane;",
    "c": "zaustaviti se i propustiti oba vozila;",
    "correct": ["3"]
  },
  {
    "i": 60,
    "q": "Kako ćete postupiti na raskrsnici u saobraćajnoj situaciji kao na slici? (više tačnih odgovora)",
    "a": "proći prvi kroz raskrsnicu;",
    "b": "propustiti crveno vozilo;",
    "c": "zaustaviti se i propustiti oba vozila;",
    "d": "proći kroz raskrsnicu prije žutog vozila.",
    "correct": ["2", "4"]
  },
  {
    "i": 61,
    "q": "Kako ćete postupiti u saobraćajnoj situaciji kao na slici ako upravljate plavim automobilom?",
    "a": "proći prvi jer sam sa desne strane;",
    "b": "proći prvi jer skrećem udesno;",
    "c": "zaustaviti se i propustiti crveno vozilo.",
    "correct": ["3"]
  },
  {
    "i": 62,
    "q": "Kako ćete postupiti u saobraćajnoj situaciji kao na slici ako imate namjeru proći raskrsnicu?",
    "a": "obavezno se zaustaviti, bez obzira ima li vozila sa lijeve strane u raskrsnici;",
    "b": "nastaviti kretanje bez zaustavljanja jer me vozači vozila u raskrsnici moraju propustiti;",
    "c": "zaustaviti se po potrebi, radi propuštanja vozila koja su već u raskrsnici, a potom proći kroz raskrsnicu.",
    "correct": ["3"]
  },
  {
    "i": 63,
    "q": "Kako ćete postupiti u saobraćajnoj situaciji kao na slici prilikom dolaska na raskrsnicu? (više tačnih odgovora)",
    "a": "nastaviti kretanje jer ne mijenjam smjer kretanja vozila;",
    "b": "propustiti motocikl;",
    "c": "proći prije vozila koje dolazi iz suprotnog smjera.",
    "correct": ["2", "3"]
  },
  {
    "i": 64,
    "q": "Kako trebate postupiti u saobraćajnoj situaciji kao na slici prilikom dolaska na raskrsnicu?",
    "a": "proći prvi kroz raskrsnicu;",
    "b": "proći drugi kroz raskrsnicu, nakon propuštanja bijelog vozila;",
    "c": "proći posljednji kroz raskrsnicu.",
    "correct": ["3"]
  },
  {
    "i": 65,
    "q": "Kako trebate postupiti u saobraćajnoj situaciji kao na slici prilikom dolaska na raskrsnicu?",
    "a": "zaustaviti se i propustiti oba vozila;",
    "b": "proći prvi kroz raskrsnicu jer sam cvenom vozilu sa desne strane;",
    "c": "propustiti crveno vozilo, a zatim proći kroz raskrsnicu istovremeno istovremeno sa autobusom.",
    "correct": ["3"]
  },
  {
    "i": 66,
    "q": "Kako trebate postupiti u saobraćajnoj situaciji kao na slici? (više tačnih odgovora)",
    "a": "obavezno se zaustaviti;",
    "b": "nastaviti kretanje vozilom ulijevo, nakon propuštanja vozila koja dolaze sa desne strane;",
    "c": "nakon što se na semaforu upali zeleno svjetlo, nastaviti kretanje vozilom ulijevo;",
    "d": "nakon što se na semaforu upali zeleno svjetlo, nastaviti kretanje udesno.",
    "correct": ["1", "3"]
  },
  {
    "i": 67,
    "q": "Kako ćete postupiti u saobraćajnoj situaciji kao na slici? (više tačnih odgovora)",
    "a": "povećati pažnju zbog nailaska na ukrštanje odnosno spajanje puta sa prednošću prolaska sa sporednim putem;",
    "b": "obavezno nastaviti kretanje vozilom pravo;",
    "c": "skrenuti udesno na sporedni put ili nastaviti kretanje vozilom pravo.",
    "correct": ["1", "3"]
  },
  {
    "i": 68,
    "q": "Kako ćete postupiti u saobraćajnoj situaciji kao na slici?",
    "a": "obratiti pažnju na moguću djecu na putu ili u blizini puta, a brzinu kretanja vozila prilagoditi trenutnim uslovima saobraćaja, s tim da brzina ne smije biti veća od brzine određene saobraćajnim znakom;",
    "b": "obratiti pažnju samo ako se djeca nalaze na putu, a brzinu prilagoditi trenutnim uslovima saobraćaja.",
    "correct": ["1"]
  },
  {
    "i": 69,
    "q": "Kako treba postupiti vozač motocikla u saobraćajnoj situaciji kao na slici, ako je na vozilu javnog gradskog prevoza putnika uključen lijevi pokazivač smjera?",
    "a": "nije dužan omogućiti autobusu uključivanje u saobraćaj;",
    "b": "dužan je omogućiti autobusu uključivanje u saobraćaj;",
    "c": "nije dužan omogućiti autobusu uključivanje u saobraćaj jer se autobus nalazi na sporednom putu.",
    "correct": ["2"]
  },
  {
    "i": 70,
    "q": "U saobraćajnoj situaciji kao na slici vozač putničkog automobila:",
    "a": "ne smije da izvrši radnju kretanja vozilom unazad, jer čini prekršaj;",
    "b": "smije izvršiti radnju kretanja vozilom unazad, jer se nalazi neposredno uz mjesto za zaustavljanje vozila.",
    "correct": ["1"]
  },
  {
    "i": 71,
    "q": "U saobraćajnoj situaciji kao na slici, vozač kamiona prilikom vršenja radnje kretanja vozilom unazad mora da se kreće:",
    "a": "linijama broj 1 i broj 2;",
    "b": "linijom broj 2;",
    "c": "linijom broj 1.",
    "correct": ["2"]
  },
  {
    "i": 72,
    "q": "Koji je redoslijed prolaska vozila na raskrsnici u situaciji kao na slici?",
    "a": "autobus, kamion, motocikl;",
    "b": "motocikl, autobus, kamion;",
    "c": "motocikl i kamion istovremeno, pa autobus;",
    "d": "motocikl, kamion, autobus.",
    "correct": ["2"]
  },
  {
    "i": 73,
    "q": "Koji je redoslijed prolaska vozila na raskrsnici u situaciji kao na slici?",
    "a": "tramvaj, motocikl, putnički automobil;",
    "b": "tramvaj, a zatim istovremeno putnički automobil i motocikl;",
    "c": "motocikl, putnički automobil, tramvaj;",
    "d": "motocikl, tramvaj, putnički automobil.",
    "correct": ["2"]
  },
  {
    "i": 74,
    "q": "Koje vozilo će u saobraćajnoj situaciji kao na slici posljednje proći kroz raskrsnicu?",
    "a": "motocikl;",
    "b": "policijsko vozilo koje drugom policijskom vozilu dolazi sa desne strane;",
    "c": "policijsko vozilo koje se nalazi na putu sa prvenstvom prolaza.",
    "correct": ["1"]
  },
  {
    "i": 75,
    "q": "Kojoj vrsti saobraćajnih znakova pripada postavljeni saobraćajni znak na slici?",
    "a": "znakovima opasnosti;",
    "b": "znakovima obavještenja;",
    "c": "znakovima izričitih naredbi.",
    "correct": ["3"]
  },
  {
    "i": 76,
    "q": "Kako treba postupiti u saobraćajnoj situaciji kao na slici?",
    "a": "obavezno se zaustaviti pa nastaviti kretanje vozilom ulijevo ili udesno;",
    "b": "nastaviti kretanje vozilom nakon propuštanja vozila koja dolaze samo sa desne strane;",
    "c": "nastaviti kretanje vozilom ulijevo ili udesno nakon propuštanja propuštanja svih vozila koja se kreću putem na koji se uključujem.",
    "correct": ["3"]
  },
  {
    "i": 77,
    "q": "Kako treba postupiti u saobraćajnoj situaciji kao na slici ako vozilom prolazite pored dva postavljena saobraćajna znaka?",
    "a": "prilagoditi brzinu kretanja vozila tako da ona ne prelazi 50 km/h;",
    "b": "obratiti pažnju na pješake, jer saobraćajni znak ukazuje na blizinu pješačkog prelaza;",
    "c": "nastaviti kretanje vozilom uz prethodno propuštanja pješaka.",
    "correct": ["2", "3"]
  },
  {
    "i": 78,
    "q": "Kako ćete postupiti u saobraćajnoj situaciji kao na slici ako kretanje vozilom nastavljate pravo, na raskrsnici puteva iste važnosti na kojoj uređaji za davanje svjetlosnih saobraćajnih znakova nisu u funkciji? (više tačnih odgovora)",
    "a": "pažljivo proći vozilom kroz raskrsnicu;",
    "b": "propustiti vozila koja dolaze i sa lijeve i sa desne strane;",
    "c": "propustiti vozila koja dolaze sa desne strane;",
    "d": "propustiti vozila iz suprotnog smjera koja namjeravaju skrenuti ulijevo.",
    "correct": ["3", "4"]
  },
  {
    "i": 79,
    "q": "U saobraćajnoj situaciji kao na slici učesnici u saobraćaju će proći kroz raskrsnicu sljedećim redoslijedom:",
    "a": "oba bicikla, crveni automobil, zeleni automobil;",
    "b": "zeleni automobil, crveni automobil, pa bicikli;",
    "c": "oba bicikla, zeleni automobil, crveni automobil.",
    "correct": ["3"]
  },
  {
    "i": 80,
    "q": "U saobraćajnoj situaciji kao na slici vozač vozila koje se nalazi u srednjoj saobraćajnoj traci: (više tačnih odgovora)",
    "a": "mora nastaviti kretanje vozilom pravo, jer nije pravovremeno izvršio radnju prestrojavanja;",
    "b": "ne smije izvršiti radnju skretanja ulijevo, jer čini prekršaj;",
    "c": "sačekaće sva vozila da skrenu ulijevo, a potom izvršiti radnju skretanja ulijevo.",
    "correct": ["1", "2"]
  },
  {
    "i": 81,
    "q": "U saobraćajnoj situaciji kao na slici, plavi putnički automobil:",
    "a": "ne čini prekršaj jer je prelaz preko pruge regulisan svjetlosnim saobraćajnim znakovima;",
    "b": "čini prekršaj.",
    "correct": ["2"]
  },
  {
    "i": 82,
    "q": "Kako ćete postupiti u saobraćajnoj situaciji kao na slici ukoliko automobilom skrećete udesno?",
    "a": "propustiću biciklistu, a zatim vršim radnju skretanja udesno;",
    "b": "vozim istovremeno sa biciklistom.",
    "correct": ["1"]
  },
  {
    "i": 83,
    "q": "Kako treba postupiti u saobraćajnoj situaciji kao na slici? (više tačnih odgovora)",
    "a": "povećati brzinu kretanja vozila;",
    "b": "obratiti pažnju na postupke vozača vozila iz suprotnog smjera;",
    "c": "povećati pažnju i prije vozila iz suprotnog smjera proći dionicu na kojoj je suženje puta.",
    "correct": ["2", "3"]
  },
  {
    "i": 84,
    "q": "Kako ćete postupiti u saobraćajnoj situaciji kao na slici? (više tačnih odgovora)",
    "a": "propustiti crveni automobil;",
    "b": "proći kroz raskrsnicu prije crnog automobila;",
    "c": "proći kroz raskrsnicu prije crvenog automobila.",
    "correct": ["1", "2"]
  },
  {
    "i": 85,
    "q": "Kako ćete postupiti u saobraćajnoj situaciji kao na slici? (više tačnih odgovora)",
    "a": "propustiti autobus;",
    "b": "propustiti motocikl;",
    "c": "proći kroz raskrsnicu prije autobusa.",
    "correct": ["1", "2"]
  },
  {
    "i": 86,
    "q": "Kako ćete postupiti u saobraćajnoj situaciji kao na slici? (više tačnih odgovora)",
    "a": "proći prvi kroz raskrsnicu;",
    "b": "proći zadnji kroz raskrsnicu;",
    "c": "proći prije crvenog vozila kroz raskrsnicu;",
    "d": "propustiti vozilo koje dolazi iz suprotnog smjera.",
    "correct": ["2", "4"]
  },
  {
    "i": 87,
    "q": "Koji je redoslijed prolaska vozila na raskrsnici u situaciji kao na slici?",
    "a": "1 – 2 – 3;",
    "b": "2 – 3 – 1;",
    "c": "3 – 1 – 2.",
    "correct": ["3"]
  },
  {
    "i": 88,
    "q": "Kako ćete postupiti u saobraćajnoj situaciji kao na slici?",
    "a": "proći prvi kroz raskrsnicu jer imate prednost;",
    "b": "propustiti oba vozila i zadnji proći kroz raskrsnicu;",
    "c": "propustiti vozilo hitne pomoći koje daje svjetlosne znakove, a zatim proći kroz raskrsnicu.",
    "correct": ["3"]
  },
  {
    "i": 89,
    "q": "Kako treba postupiti vozač putničkog automobila u saobraćajnoj situaciji kao na slici ako ako se vozač autobusa uključuje u saobračaj sa stajališta?",
    "a": "smanjuje brzinu kretanja i omogućuje uključivanje autobusa u saobraćaj;",
    "b": "zvučnim znakom upozorava vozača autobusa da ga propusti jer ima prvenstvo prolaza;",
    "c": "prolazi pored autobusa jer ima prednost.",
    "correct": ["1"]
  },
  {
    "i": 90,
    "q": "Kako treba postupiti u saobraćajnoj situaciji kao na slici? (više tačnih odgovora)",
    "a": "proći prvi kroz raskrsnicu;",
    "b": "propustiti autobus;",
    "c": "proći kroz raskrsnicu prije vozila sa lijeve strane;",
    "d": "proći kroz raskrsnicu prije autobusa, jer vrši radnju skretanja ulijevo.",
    "correct": ["2", "4"]
  },
  {
    "i": 91,
    "q": "Kako ćete postupiti u saobraćajnoj situaciji kao na slici ako na raskrsnici skrećete ulijevo dok je na semaforu upaljeno zeleno svjetlo?",
    "a": "zaustaviti se prije raskrsnice;",
    "b": "propustiti tramvaj koji dolazi iz suprotnog smjera.",
    "correct": ["2"]
  },
  {
    "i": 92,
    "q": "Koji je redoslijed prolaska vozila na raskrsnici u situaciji kao na slici?",
    "a": "1 – 2 – 3;",
    "b": "3 – 1 – 2;",
    "c": "2 – 1 – 3.",
    "correct": ["3"]
  },
  {
    "i": 93,
    "q": "U saobraćajnoj situaciji kao na slici pravilno skretanje udesno vrši:",
    "a": "samo žuto vozilo;",
    "b": "samo plavo vozilo;",
    "c": "nijedno vozilo;",
    "d": "oba vozila.",
    "correct": ["3"]
  },
  {
    "i": 94,
    "q": "Koji je redoslijed prolaska vozila na raskrsnici u situaciji kao na slici?",
    "a": "tramvaj, autobus, putnički automobil;",
    "b": "autobus, tramvaj, putnički automobil;",
    "c": "autobus, putnički automobil, tramvaj.",
    "correct": ["1"]
  },
  {
    "i": 95,
    "q": "Kako ćete postupiti ako se za vrijeme upravljanja vozilom nađete u saobraćajnoj situaciji kao na slici? (više tačnih odgovora)",
    "a": "zaustaviti vozilo;",
    "b": "zvučnim znakom upozoriti pješake na opasnost;",
    "c": "nastaviću kretanje jer nema obilježenog pješačkog prelaza.",
    "correct": ["1"]
  },
  {
    "i": 96,
    "q": "Kako ćete postupiti u saobraćajnoj situaciji kao na slici ako se vozač autobusa uključuje sa autobuskog stajalista u saobraćaj. (više tačnih odgovora)",
    "a": "smanjiti brzinu kretanja vozila;",
    "b": "povećati brzinu kretanja vozila i proći prije autobusa;",
    "c": "po potrebi zaustaviti vozilo i omogućiti vozaču autobusa da se bezbjedno uključi u saobraćaj;",
    "correct": ["1", "3"]
  },
  {
    "i": 97,
    "q": "Kako ćete postupiti, ako je autobus, označen kao na slici, zaustavljen na kolovozu zbog ulaska i izlaska djece? (više tačnih odgovora)",
    "a": "ako se krećem vozilom iza autobusa, zaustaviti se;",
    "b": "ako se krećem vozilom iza autobusa, nastaviti kretanje vozilom;",
    "c": "ako se krećem vozilom u susret autobusu, nastaviti kretanje vozilom;",
    "d": "ako se krećem vozilom u susret autobusu, zaustaviti se.",
    "correct": ["1", "4"]
  },
  {
    "i": 98,
    "q": "Kako trebate postupiti u saobraćajnoj situaciji kao na slici prilikom približavanja raskrsnici? (više tačnih odgovora)",
    "a": "propustiti vozilo koje dolazi iz suprotnog smjera kretanja, i ima namjeru izvršiti radnju skretanja udesno;",
    "b": "proći prvi kroz raskrsnicu;",
    "c": "proći drugi kroz raskrsnicu;",
    "d": "propustiti vozilo koje dolazi sa desne strane.",
    "correct": ["3", "4"]
  },
  {
    "i": 99,
    "q": "Kako trebate postupiti u saobraćajnoj situaciji kao na slici? (više tačnih odgovora)",
    "a": "proći prvi kroz raskrsnicu jer nemate nikoga sa desne strane;",
    "b": "propustiti vozilo koje dolazi sa lijeve strane;",
    "c": "propustiti vozilo koje dolazi iz suprotnog smjera kretanja;",
    "d": "proći drugi kroz raskrsnicu.",
    "correct": ["3", "4"]
  },
  {
    "i": 100,
    "q": "Kako trebate postupiti u saobraćajnoj situaciji kao na slici?",
    "a": "propustiti crveno vozilo;",
    "b": "proći kroz raskrsnicu prije crvenog vozila;",
    "c": "proći istovremeno sa crvenim vozilom kroz raskrsnicu.",
    "correct": ["2"]
  },
  {
    "i": 101,
    "q": "Kako trebate postupiti u saobraćajnoj situaciji kao na slici? (više tačnih odgovora)",
    "a": "povećati brzinu kretanja vozila;",
    "b": "obratiti pažnju na postupke vozača vozila iz suprotnog smjera;",
    "c": "propustiti vozilo iz suprotnog smjera, a zatim proći dionicu na kojoj je suženje puta.",
    "correct": ["2", "3"]
  },
  {
    "i": 102,
    "q": "Kako trebate postupiti u saobraćajnoj situaciji kao na slici?",
    "a": "proći prvi kroz raskrsnicu jer nastavljate kretanje vozilom pravo;",
    "b": "propustiti oba vozila;",
    "c": "proći drugi kroz raskrsnicu;",
    "d": "propustiti samo crveni automobil.",
    "correct": ["2"]
  },
  {
    "i": 103,
    "q": "Kako ćete postupiti ako se krećete putem na kome se izvode radovi u saobraćajnoj situaciji kao na slici?",
    "a": "zaustaviti se jer se izvode radovi na saobraćajnoj traci kojom se krećem vozilom;",
    "b": "nastaviti kretanje vozilom jer je na semaforu upaljeno zeleno svjetlo.",
    "correct": ["2"]
  },
  {
    "i": 104,
    "q": "Kako ćete postupiti u saobraćajnoj situaciji kao na slici ukoliko upravljate crnim utomobilom?",
    "a": "obavezno se zaustaviti;",
    "b": "nastaviti kretanje vozilom uz povećani oprez;",
    "c": "obavezno izvršiti radnju skretanja udesno.",
    "correct": ["2"]
  },
  {
    "i": 105,
    "q": "Kako ćete postupiti u saobraćajnoj situaciji kao na slici na prelazu puta preko željezničke pruge u istom nivou kada se crvena svjetla počinju naizmjenično da pale?",
    "a": "nastaviti kretanje vozilom dok se polubranik još nije spustio;",
    "b": "zaustaviti vozilo ispred pružnog prelaza i sačekati prolazak voza.",
    "correct": ["2"]
  },
  {
    "i": 106,
    "q": "Kako ćete postupiti u saobraćajnoj situaciji kao na slici?",
    "a": "propustiti oba vozila;",
    "b": "propustiti samo crveno vozilo;",
    "c": "proći prvi kroz raskrsnicu.",
    "correct": ["1"]
  },
  {
    "i": 107,
    "q": "Kako ćete postupiti u saobraćajnoj situaciji kao na slici? (više tačnih odgovora)",
    "a": "propustiti pješake koji prelaze preko pješačkog prelaza;",
    "b": "proći prije pješaka;",
    "c": "propustiti tramvaj koji dolazi iz suprotnog smjera.",
    "correct": ["1", "3"]
  },
  {
    "i": 108,
    "q": "Kako ćete postupiti na raskrsnici u saobraćajnoj situaciji kao na slici?",
    "a": "proći prvi kroz raskrsnicu;",
    "b": "propustiti oba vozila;",
    "c": "propustiti samo crveno vozilo.",
    "correct": ["2"]
  },
  {
    "i": 109,
    "q": "Kako ćete postupiti na raskrsnici u saobraćajnoj situaciji kao na slici?",
    "a": "propustiti autobus;",
    "b": "proći kroz raskrsnicu prije autobusa.",
    "correct": ["2"]
  },
  {
    "i": 110,
    "q": "Kako ćete postupiti u saobraćajnoj situaciji kao na slici ako je na semaforu upaljeno crveno svjetlo i dopunska strelica za skretanje udesno? (više tačnih odgovora)",
    "a": "propustiti crveno vozilo koje dolazi sa lijeve strane;",
    "b": "proći kroz raskrsnicu prije crvenog vozila;",
    "c": "izvršiću radnju skretanja udesno nakon crvenog vozila.",
    "correct": ["1", "3"]
  }
]
 */
/**
 [
  {
    "i": 1,
    "q": "Šta treba izbjegavati nailaskom na ovaj saobraćajni znak? (više tačnih odgovora)",
    "a": "vožnju prilagođenu uslovima koji vladaju na kolovozu;",
    "b": "nagle pokrete točkom upravljača;",
    "c": "naglo kočenje i zaustavljanje.",
    "correct": ["2", "3"]
  },
  {
    "i": 2,
    "q": "Kako treba postupiti nailaskom na ovaj saobraćajni znak?",
    "a": "pripremiti se za savladavanje više uzastopnih krivina od kojih je prva udesno;",
    "b": "učesnike u saobraćaju iza sebe upozoriti desnim pokazivačem pravca;",
    "correct": ["1"]
  },
  {
    "i": 3,
    "q": "Na koju opasnost upozorava ovaj saobraćajni znak?",
    "a": "na blizinu dijela puta gdje je uz kolovoz neutvrđena bankina;",
    "b": "na blizinu dijela puta gdje je zaleđen kolovoz.",
    "correct": ["1"]
  },
  {
    "i": 4,
    "q": "Kako ćete postupiti nailaskom na ovoj saobraćajni znak? (više tačnih odgovora)",
    "a": "nastaviti kretanje vozilom jer imam prvenstvo prolaza;",
    "b": "smanjiti brzinu kretanja vozila i po potrebi zaustaviti vozilo;",
    "c": "propustiti vozila iz suprotnog smjera.",
    "correct": ["2", "3"]
  },
  {
    "i": 5,
    "q": "Tačan naziv saobraćajnog znaka je?",
    "a": "zabrana saobraćaja za sva motorna vozila koja vuku priključno vozilo;",
    "b": "zabrana saobraćaja za sva motorna vozila koja vuku laku prikolicu.",
    "correct": ["1"]
  },
  {
    "i": 6,
    "q": "Tačan naziv saobraćajnog znaka je:",
    "a": "elektronska naplata putarine;",
    "b": "zabrana korištenja radio-aparata u vozilu.",
    "correct": ["1"]
  },
  {
    "i": 7,
    "q": "Tačan naziv saobraćajnog znaka je:",
    "a": "niša za zaustavljanje vozila u slučaju opasnosti;",
    "b": "prostor rezervisan za zaustavljanje vozila javnog gradskog prevoza.",
    "correct": ["1"]
  },
  {
    "i": 8,
    "q": "Tačan naziv saobraćajnog znaka je:",
    "a": "radionica za popravak guma;",
    "b": "mjesto gdje možete kontrolisati pritisak u gumama.",
    "correct": ["1"]
  },
  {
    "i": 9,
    "q": "Kako treba postupiti nailaskom na ovaj saobraćajni znak? (više tačnih odgovora)",
    "a": "povećavati pažnju;",
    "b": "pružiti pomoć povrjeđenim u saobraćajnoj nezgodi;",
    "c": "povećavati brzinu kretanja vozila.",
    "correct": ["1", "2"]
  },
  {
    "i": 10,
    "q": "Koje značenje ima ovaj saobraćajni znak?",
    "a": "ulazak u područje u kojem postoji povećana opasnost od izbijanja nekontrolisanog požara;",
    "b": "ulazak u područje gdje je izletnicima dozvoljeno paljenje vatre.",
    "correct": ["1"]
  },
  {
    "i": 11,
    "q": "Kako treba postupiti nailaskom na ovaj saobraćajni znak? (više tačnih odgovora)",
    "a": "smanjiti brzinu kretanja vozila i povećavati pažnju;",
    "b": "predviditi mogućnost nailaska na poledicu na kolovozu;",
    "c": "povećavati brzinu kretanja vozila.",
    "correct": ["1", "2"]
  },
  {
    "i": 12,
    "q": "Kojim vozilima je zabranjeno kretanje putem označenim ovim saobraćajnim znakom?",
    "a": "bicikli;",
    "b": "autobusi i teretna vozila.",
    "correct": ["2"]
  },
  {
    "i": 13,
    "q": "Kojim vozilima je dozvoljeno kretanje putem označenim ovim saobraćajnim znakom?",
    "a": "bicikli, mopedi i laki motocikli;",
    "b": "motocikli.",
    "correct": ["2"]
  },
  {
    "i": 14,
    "q": "Koje značenje ima ovaj saobraćajni znak?",
    "a": "zabrana saobraćaja za vozila koja prevoze opasne materije iznad određene količine;",
    "b": "zabrana saobraćaja za vozila koja prevoze eksploziv ili neke lako zapaljive materije.",
    "correct": ["1"]
  },
  {
    "i": 15,
    "q": "Tačan naziv saobraćajnog znaka je?",
    "a": "teren uređen za kampovanje u vozilima;",
    "b": "zabranjeno kampovanje u vozilima.",
    "correct": ["1"]
  },
  {
    "i": 16,
    "q": "Tačan naziv saobraćajnog znaka je?",
    "a": "blizina mjesta na kojem se nalazi autopraonica;",
    "b": "blizina mjesta gdje je zabranjeno pranje vozila.",
    "correct": ["1"]
  },
  {
    "i": 17,
    "q": "Koje značenje ima znak koji daje ovlašteno lice na raskrsnici?",
    "a": "dozvoljen prolaz vozilima koja dolaze sa bočnih strana ovlaštenog lica;",
    "b": "obavezno zaustavljanje za sva vozila ispred raskrsnice.",
    "correct": ["1"]
  },
  {
    "i": 18,
    "q": "Dvostruka isprekidana linija služi za obilježavanje:",
    "a": "saobraćajnih traka sa izmjenljivim smjerom kretanja na kojima je saobraćaj regulisan uređajima za davanje svjetlosnih saobraćajnih znakova;",
    "b": "saobraćajne trake koju mogu koristiti samo vozila sa pravom prvenstva prolaza.",
    "correct": ["1"]
  },
  {
    "i": 19,
    "q": "Kada će vozač koji upravlja vozilom koje prevozi opasne materije koristiti ovaj znak?",
    "a": "kad vrši prevoz na temperaturi ispod 0°C;",
    "b": "kad vrši prevoz opasnih materija na povišenoj temperaturi.",
    "correct": ["2"]
  },
  {
    "i": 20,
    "q": "Kako treba postupiti nailaskom na ovaj saobraćajni znak?",
    "a": "obavezno voziti ulijevo;",
    "b": "nastaviti kretanje vozilom pravom.",
    "correct": ["1"]
  },
  {
    "i": 21,
    "q": "Tačan naziv saobraćajnog znaka je?",
    "a": "ukrštanje puteva istog značaja;",
    "b": "ukrštanje sporednih puteva pod oštrim uglom.",
    "correct": ["1"]
  },
  {
    "i": 22,
    "q": "Tačan naziv saobraćajnog znaka je?",
    "a": "pokretni most;",
    "b": "blizina obale.",
    "correct": ["2"]
  },
  {
    "i": 23,
    "q": "Koje značenje ima ovaj saobraćajni znak? (više tačnih odgovora)",
    "a": "zabrana saobraćaja u oba smjera;",
    "b": "zabrana saobraćaja u smjeru kretanja vozila;",
    "c": "da se saobraćaj odvija iz suprotnog smjera.",
    "correct": ["2", "3"]
  },
  {
    "i": 24,
    "q": "Koje značenje ima ovaj saobraćajni znak?",
    "a": "produžetak puta sa prvenstvom prolaza;",
    "b": "završetak puta ili dijela puta sa prvenstvom prolaza.",
    "correct": ["2"]
  },
  {
    "i": 25,
    "q": "Kako ćete postupiti nailaskom na ovaj saobraćajni znak?",
    "a": "uz povećanu pažnju nastaviti kretanje vozilom, jer imam pravo prvenstva prolaza u odnosu na vozila koja dolaze iz suprotnog smjera;",
    "b": "zaustaviti vozilo i propustiti vozila iz suprotnog smjera.",
    "correct": ["1"]
  },
  {
    "i": 26,
    "q": "Kako ćete postupiti nailaskom na ovaj saobraćajni znak?",
    "a": "smanjiti brzinu kretanja vozila do brzine hoda pješaka;",
    "b": "povećati brzinu kretanja vozila.",
    "correct": ["1"]
  },
  {
    "i": 27,
    "q": "Kojim vozilima je dozvoljeno kretanje putem označenim ovim saobraćajnim znakom? (više tačnih odgovora)",
    "a": "bicikl;",
    "b": "putničko vozilo, teretno vozilo, autobus;",
    "c": "motocikl.",
    "correct": ["2", "3"]
  },
  {
    "i": 28,
    "q": "Koja vozila se obilježavaju znakom kao na slici?",
    "a": "vozila koja prevoze opasne materije;",
    "b": "spora vozila;",
    "correct": ["2"]
  },
  {
    "i": 29,
    "q": "Koje značenje ima ovaj saobraćajni znak?",
    "a": "opasnost za koju nije predviđen poseban znak;",
    "b": "opasnost kad se krećemo klizavim kolovozom.",
    "correct": ["1"]
  },
  {
    "i": 30,
    "q": "Kako treba postupiti nailaskom na ovaj saobraćajni znak?",
    "a": "pravovremeno prebaciti u niži stepen prenosa;",
    "b": "prebaciti u viši stepen prenosa i što više kočiti nožnom kočnicom.",
    "correct": ["1"]
  },
  {
    "i": 31,
    "q": "Kako treba postupiti nailaskom na ovaj saobraćajni znak? (više tačnih odgovora)",
    "a": "smanjiti brzinu kretanja vozila;",
    "b": "povećavati pažnju i očekivati bicikliste;",
    "c": "povećati brzinu kretanja vozila.",
    "correct": ["1", "2"]
  },
  {
    "i": 32,
    "q": "Kojim vozilima nije dozvoljeno kretanje putem označenim ovim saobraćajnim znakom?",
    "a": "vozilima čije je osovinsko opterećenje veće od određenog na znaku;",
    "b": "vozilima čije je osovinsko opterećenje manje od određenog na znaku.",
    "correct": ["1"]
  },
  {
    "i": 33,
    "q": "Tačan naziv saobraćajnog znaka je:",
    "a": "zabrana saobraćaja za sva motorna vozila, osim za motocikla bez prikolice i mopeda;",
    "b": "zabrana saobraćaja za sva motorna vozila, osim za motocikla bez prikolice.",
    "correct": ["1"]
  },
  {
    "i": 34,
    "q": "Tačan naziv saobraćajnog znaka je?",
    "a": "zabrana saobraćaja za bicikle;",
    "b": "zabrana saobraćaja za bicikle i mopede.",
    "correct": ["1"]
  },
  {
    "i": 35,
    "q": "Koje značenje ima ovaj saobraćajni znak?",
    "a": "obavezno obilaženje sa lijeve strane;",
    "b": "obavezan smjer.",
    "correct": ["1"]
  },
  {
    "i": 36,
    "q": "Šta zabranjuje ovaj saobraćajni znak?",
    "a": "zaustavljanje vozila;",
    "b": "parkiranje vozila.",
    "correct": ["2"]
  },
  {
    "i": 37,
    "q": "Koja vozila se obilježavaju oznakom kao na slici?",
    "a": "teška vozila;",
    "b": "vozila šira od 2,5 m.",
    "correct": ["2"]
  },
  {
    "i": 38,
    "q": "Tačan naziv saobraćajnog znaka je:",
    "a": "prvenstvo prolaza za vozila iz suprotnog smjera;",
    "b": "dozvoljeni smjer;",
    "c": "saobraćaj u oba smjera.",
    "correct": ["3"]
  },
  {
    "i": 39,
    "q": "Koje značenje ima ovaj saobraćajni znak?",
    "a": "moguće neravnine i izbočine na putu;",
    "b": "opasnost od kamenja koje se odronjava na put.",
    "correct": ["2"]
  },
  {
    "i": 40,
    "q": "Koje značenje ima ovaj saobraćajni znak?",
    "a": "blizina prelaza puta preko željezničke pruge u nivou koja nije obezbijeđena branicima ili polubranicima;",
    "b": "blizina prelaza puta preko željezničke pruge u nivou koja je obezbijeđena branicima ili polubranicima;",
    "c": "nailazak na drveni most.",
    "correct": ["1"]
  },
  {
    "i": 41,
    "q": "Tačan naziv saobraćajnog znaka je:",
    "a": "zabrana saobraćaja za vozila koja prevoze opasne materije;",
    "b": "zabrana saobraćaja za teretna vozila koja prevoze opasne materije.",
    "correct": ["1"]
  },
  {
    "i": 42,
    "q": "Tačan naziv saobraćajnog znaka je:",
    "a": "zabrana saobraćaja za vozila koja prekoračuju određeno dvoosovinsko opterećenje;",
    "b": "zabrana saobraćaja za vozila čije opterećenje po jednostrukoj osovini prelazi opterećenje označeno na znaku.",
    "correct": ["2"]
  },
  {
    "i": 43,
    "q": "Tačan naziv saobraćajnog znaka je:",
    "a": "pješačka staza;",
    "b": "zona smirenog saobraćaja.",
    "correct": ["1"]
  },
  {
    "i": 44,
    "q": "Tačan naziv saobraćajnog znaka je:",
    "a": "put sa jednosmjernim saobraćajem;",
    "b": "obavezan smjer.",
    "correct": ["2"]
  },
  {
    "i": 45,
    "q": "Koja vozila se obilježavaju oznakom kao na slici?",
    "a": "duga vozila;",
    "b": "vozila čija širina prelazi 2,5 m.",
    "correct": ["1"]
  },
  {
    "i": 46,
    "q": "Šta može imati za posljedicu nepoštovanje ovog znaka? (više tačnih odgovora)",
    "a": "moguće zanošenje i izlijetanje vozila sa kolovoza;",
    "b": "veću kontrolu prilikom upravljanja vozilom;",
    "c": "moguće oštećenje ili lomljenje dijelova na vozilu.",
    "correct": ["1", "3"]
  },
  {
    "i": 47,
    "q": "Tačan naziv saobraćajnog znaka je?",
    "a": "pokretni most;",
    "b": "blizina obale.",
    "correct": ["1"]
  },
  {
    "i": 48,
    "q": "Tačan naziv saobraćajnog znaka je?",
    "a": "životinje na putu;",
    "b": "divljač na putu.",
    "correct": ["2"]
  },
  {
    "i": 49,
    "q": "Tačan naziv saobraćajnog znaka je?",
    "a": "zabrana preticanja svih motornih vozila, osim motocikla bez prikolice i mopeda;",
    "b": "zabrana preticanja svih motornih vozila, osim mopeda.",
    "correct": ["1"]
  },
  {
    "i": 50,
    "q": "Kojim vozilima nije dozvoljeno kretanje putem označenim ovim saobraćajnim znakom?",
    "a": "vozilima čija ukupna visina premašuje visinu označenu na znaku;",
    "b": "vozilima čija ukupna visina ne premašuje visinu označenu na znaku.",
    "correct": ["1"]
  },
  {
    "i": 51,
    "q": "Koje značenje ima ovaj saobraćajni znak?",
    "a": "obavezni smjerovi;",
    "b": "dozvoljeni smjerovi.",
    "correct": ["2"]
  },
  {
    "i": 52,
    "q": "Koje značenje ima ovaj saobraćajni znak?",
    "a": "najmanja dozvoljena brzina;",
    "b": "najveća dozvoljena brzina;",
    "c": "brzina koja se preporučuje na određenom dijelu puta.",
    "correct": ["2"]
  },
  {
    "i": 53,
    "q": "Koje značenje ima ovaj saobraćajni znak?",
    "a": "početak autoputa;",
    "b": "početak brzog puta;",
    "c": "početak puta rezervisanog za saobraćaj motornih vozila.",
    "correct": ["3"]
  },
  {
    "i": 54,
    "q": "Kako treba postupiti nailaskom na ovaj saobraćajni znak? (više tačnih odgovora)",
    "a": "povećati brzinu kretanja vozila;",
    "b": "smanjiti brzinu kretanja vozila;",
    "c": "računati na mogućnost udara bočnog vjetra sa desne strane.",
    "correct": ["2", "3"]
  },
  {
    "i": 55,
    "q": "Koje značenje imaj ovaj saobraćajni znak?",
    "a": "obavezno zaustaviti vozilo;",
    "b": "nailazak na raskrsnicu regulisanu svjetlosnom saobraćajnom signalizacijom;",
    "c": "nastaviti kretanje vozilom bez smanjenja brzine kretanja.",
    "correct": ["2"]
  },
  {
    "i": 56,
    "q": "Kako treba postupiti nailaskom na ovaj saobraćajni znak? (više tačnih odgovora)",
    "a": "povećati pažnju;",
    "b": "povećati brzinu kretanja vozila;",
    "c": "smanjiti brzinu kretanja vozila.",
    "correct": ["1", "3"]
  },
  {
    "i": 57,
    "q": "Tačan naziv saobraćajnog znaka je:",
    "a": "zabrana polukružnog okretanja;",
    "b": "obavezno polukružno okretanje.",
    "correct": ["1"]
  },
  {
    "i": 58,
    "q": "Tačan naziv saobraćajnog znaka je:",
    "a": "zabrana saobraćaja za vozila koja prevoze opasne materije;",
    "b": "zabrana saobraćaja za vozila cisterne.",
    "correct": ["1"]
  },
  {
    "i": 59,
    "q": "Tačan naziv saobraćajnog znaka je:",
    "a": "zabrana saobraćaja za sva motorna vozila koja vuku priključno vozilo;",
    "b": "zabrana saobraćaja za teretno vozilo koje vuče priključno vozilo.",
    "correct": ["1"]
  },
  {
    "i": 60,
    "q": "Koje značenje ima ovaj saobraćajni znak?",
    "a": "obavezan smjer;",
    "b": "obavezno polukružno okretanje.",
    "correct": ["1"]
  },
  {
    "i": 61,
    "q": "Koje značenje ima ovaj saobraćajni znak? (više tačnih odgovora)",
    "a": "staza kojom se moraju kretati bicikli;",
    "b": "biciklistička staza;",
    "c": "zabrana kretanja za bicikle.",
    "correct": ["1", "2"]
  },
  {
    "i": 62,
    "q": "Tačan naziv saobraćajnog znaka je:",
    "a": "zabrana održavanja sportskih priredbi na putu;",
    "b": "prevrtanje ili iskliznuće vozila sa kolovoza.",
    "correct": ["2"]
  },
  {
    "i": 63,
    "q": "Tačan naziv saobraćajnog znaka je:",
    "a": "obavezno zaustavljanje;",
    "b": "nailazak na put sa prvenstvom prolaza.",
    "correct": ["2"]
  },
  {
    "i": 64,
    "q": "Tačan naziv saobraćajnog znaka je:",
    "a": "najveće odstojanje između vozila;",
    "b": "najmanje odstojanje između vozila.",
    "correct": ["2"]
  },
  {
    "i": 65,
    "q": "Tačan naziv saobraćajnog znaka je:",
    "a": "zabrana saobraćaja za sva motorna vozila;",
    "b": "zabrana saobraćaja za sva motorna vozila, osim mopeda.",
    "correct": ["1"]
  },
  {
    "i": 66,
    "q": "Koje značenje ima ovaj saobraćajni znak?",
    "a": "brzina koja je preporučena;",
    "b": "najmanja dopuštena brzina kretanja vozila;",
    "c": "ograničenje brzine.",
    "correct": ["2"]
  },
  {
    "i": 67,
    "q": "Koje značenje ima ovaj saobraćajni znak?",
    "a": "zabrana saobraćaja za vozila koja na točkovima koriste lance;",
    "b": "označava početak dijela puta na kome motorna vozila, osim motocikla moraju imati propisanu zimsku opremu u zimskim uslovima.",
    "correct": ["2"]
  },
  {
    "i": 68,
    "q": "Koje značenje ima ovaj saobraćajni znak?",
    "a": "obavezno se prestrojiti u desnu saobraćajnu traku;",
    "b": "najava završetka preticanja.",
    "correct": ["2"]
  },
  {
    "i": 69,
    "q": "Koja motorna vozila je dozvoljeno preticati na putu označenim ovim saobraćajnim znakom?",
    "a": "motocikl bez prikolice i moped;",
    "b": "putničko vozilo.",
    "correct": ["1"]
  },
  {
    "i": 70,
    "q": "Kako treba postupiti nailaskom na ovaj saobraćajni znak? (više tačnih odgovora)",
    "a": "obavezno zaustaviti vozilo;",
    "b": "povećavati pažnju;",
    "c": "smanjiti brzinu kretanja vozila tako da se u slučaju potrebe može blagovremeno izvršiti radnja kočenja i zaustavljanja;",
    "d": "nastaviti kretanje vozilom bez smanjenja brzine kretanja.",
    "correct": ["2", "3"]
  },
  {
    "i": 71,
    "q": "Kako treba postupiti nailaskom na ovaj saobraćajni znak? (više tačnih odgovora)",
    "a": "obavezno zaustaviti vozilo;",
    "b": "nastaviti kretanje vozilom sa naročitom opreznošću;",
    "c": "smanjiti brzinu kretanja vozila tako da se u slučaju potrebe može blagovremeno izvršiti radnja kočenja i zaustavljanja;",
    "d": "nastaviti kretanje vozilom bez smanjenja brzine kretanja.",
    "correct": ["2", "3"]
  },
  {
    "i": 72,
    "q": "Koje značenje ima ovaj saobraćajni znak?",
    "a": "dozvoljeni smjer;",
    "b": "put sa jednosmjernim saobraćajem;",
    "c": "obavezno obilaženje sa desne strane.",
    "correct": ["2"]
  },
  {
    "i": 73,
    "q": "Kako treba postupiti nailaskom na ovaj saobraćajni znak?",
    "a": "obavezno smanjiti brzinu kretanja vozila ispod 30 km/h;",
    "b": "nastaviti kretanje vozilom sa naročitom opreznošću u dužini od 30 km;",
    "c": "nastaviti kretanje vozilom pri čemu je najmanja dopuštena brzina kretanja vozila 30 km/h.",
    "correct": ["3"]
  },
  {
    "i": 74,
    "q": "Kako treba postupiti nailaskom na ove oznake na kolovozu? (više tačnih odgovora)",
    "a": "obavezno izvršiti radnju skretanja udesno;",
    "b": "zaustaviti se po potrebi i propustiti pješake na obilježenom pješačkom prelazu;",
    "c": "zaustaviti se po potrebi i propustiti vozila koja se kreću na putu sa prvenstvom prolaza.",
    "correct": ["2", "3"]
  },
  {
    "i": 75,
    "q": "Kako treba postupiti nailaskom na ovaj saobraćajni znak? (više tačnih odgovora)",
    "a": "obavezno zaustaviti vozilo;",
    "b": "nastaviti kretanje vozilom sa naročitom opreznošću;",
    "c": "prilagoditi brzinu kretanja vozila tako da se, u slučaju potrebe, može blagovremeno zaustaviti vozilo.",
    "correct": ["2", "3"]
  },
  {
    "i": 76,
    "q": "Koje značenje ima ovaj saobraćajni znak?",
    "a": "prestanak ograničenja brzine od 80 km/h;",
    "b": "dio puta gdje prestaje preporučena brzina od 80 km/h;",
    "c": "dio puta gdje je preporučena brzina 80 km/h.",
    "correct": ["2"]
  },
  {
    "i": 77,
    "q": "Koje značenje ima ovaj saobraćajni znak?",
    "a": "mjesto gdje prestaju sve zabrane;",
    "b": "put ili dio puta na kojem vozila imaju prednost prolaza prema vozilima koja se kreću putevima koji se ukrštaju, odnosno spajaju sa tim putem ili dijelom puta;",
    "c": "prelazak puta preko željezničke pruge.",
    "correct": ["2"]
  },
  {
    "i": 78,
    "q": "Koje značenje ima ovaj saobraćajni znak?",
    "a": "dozvoljeni smjer;",
    "b": "prvenstvo prolaza u odnosu na vozila koja dolaze iz suprotnog smjera;",
    "c": "put sa jednosmjernim saobraćajem.",
    "correct": ["2"]
  },
  {
    "i": 79,
    "q": "Tačan naziv saobraćajnog znaka je?",
    "a": "prestanak najmanje dopuštene brzine;",
    "b": "prestanak preporučene brzine;",
    "c": "prestanak ograničenja brzine.",
    "correct": ["1"]
  },
  {
    "i": 80,
    "q": "Kako treba postupiti nailaskom na ove oznake na kolovozu?",
    "a": "odustati od eventualne namjere zaustavljanja i parkiranja;",
    "b": "po potrebi se zaustaviti, ali ne i parkirati;",
    "c": "obavezno se zaustaviti.",
    "correct": ["1"]
  },
  {
    "i": 81,
    "q": "Koje značenje ima ovaj saobraćajni znak?",
    "a": "zabrana kretanja za bicikliste i pješake;",
    "b": "razdvojena staza za pješake i bicikliste, kojom je zabranjeno kretanje drugih učesnika u saobraćaju;",
    "c": "staza za kretanje pješaka, bicikla i motocikla.",
    "correct": ["2"]
  },
  {
    "i": 82,
    "q": "Kako treba postupiti nailaskom na ovaj saobraćajni znak?",
    "a": "povećati brzinu kretanja vozila;",
    "b": "prilagoditi brzinu kretanja vozila uslovima i stanju na putu jer postoji povećana opasnost od iskliznuća ili prevrtanja vozila.",
    "correct": ["2"]
  },
  {
    "i": 83,
    "q": "Koje značenje ima ovaj saobraćajni znak?",
    "a": "mjesto na putu gdje je postavljeno preventivno ulegnuće kao objekat koji se koristi za smirivanje saobraćaja;",
    "b": "mjesto na putu gdje je postavljena preventivna izbočina kao objekat koji se koristi za smirivanje saobraćaja.",
    "correct": ["2"]
  },
  {
    "i": 84,
    "q": "Koje značenje ima ovaj saobraćajni znak? (više tačnih odgovora)",
    "a": "blizina mjesta na kojem se izvode radovi ili na kojem je prepreka na putu;",
    "b": "približavanje mjestu na kojem je saobraćaj regulisan svjetlosnim saobraćajnim znacima;",
    "c": "smjer i način preusmjeravanja saobraćaja.",
    "correct": ["1", "3"]
  },
  {
    "i": 85,
    "q": "Koje značenje ima ovaj saobraćajni znak?",
    "a": "blizina dijela puta na kojem se često događaju saobraćajne nezgode;",
    "b": "blizina dijela puta na kojem se dogodila saobraćajna nezgoda.",
    "correct": ["1"]
  },
  {
    "i": 86,
    "q": "Koje značenje ima ovaj saobraćajni znak? (više tačnih odgovora)",
    "a": "mjesto od kog počinje autoput;",
    "b": "mjesto od kog počinje put rezervisan za saobraćaj motornih vozila;",
    "c": "mjesto od kog počinje brzi put.",
    "correct": ["2", "3"]
  },
  {
    "i": 87,
    "q": "Koje značenje ima ovaj saobraćajni znak?",
    "a": "položaj puta sa pravom prvenstva prolaza;",
    "b": "obavezno skretanje ulijevo;",
    "c": "prvenstvo prolaza u svim smjerovima.",
    "correct": ["1"]
  },
  {
    "i": 88,
    "q": "Koje značenje ima ovaj saobraćajni znak?",
    "a": "mjesto u naselju na kojem se ulazi u područje u kojem se ne smije upravljati vozilom brže od brzine hoda pješaka budući da je dječija igra dopuštena;",
    "b": "mjesto u naselju na kojem se ulazi u područje u kojem je dozvoljeno upravljati vozilom brže od brzine hoda pješaka.",
    "correct": ["1"]
  },
  {
    "i": 89,
    "q": "Kako treba postupiti prilikom nailaska vozilom na ovlašteno lice koje u vašem smjeru kretanja daje znak kao na slici?",
    "a": "povećati brzinu kretanja vozila;",
    "b": "smanjiti brzinu kretanja vozila;",
    "c": "zaustaviti vozilo.",
    "correct": ["3"]
  },
  {
    "i": 90,
    "q": "Kako ćete postupiti nailaskom na ovaj saobraćajni znak?",
    "a": "nastaviti kretanje vozilom jer imam prednost u odnosu na vozila iz suprotnog smjera;",
    "b": "nastaviti kretanje vozilom sa naročitom opreznošću u odnosu na vozila iz suprotnog smjera;",
    "c": "ne nastaviti kretanje vozilom, jer je zabranjen saobraćaj vozilima iz smjera prema kome je okrenut znak.",
    "correct": ["1"]
  },
  {
    "i": 91,
    "q": "Na koju opasnost upozorava ovaj saobraćajni znak?",
    "a": "na blizinu tramvajske pruge;",
    "b": "na blizinu prelaza puta preko željezničke pruge u nivou koja je obezbijeđena branicima ili polubranicima;",
    "c": "na blizinu prelaza puta preko željezničke pruge u nivou koja nije obezbijeđena branicima ili polubranicima.",
    "correct": ["2"]
  },
  {
    "i": 92,
    "q": "Na koju opasnost upozorava ovaj saobraćajni znak?",
    "a": "na blizinu dijela puta na kojem su česte duže kolone vozila u kretanju;",
    "b": "na blizinu dijela puta na kojem u određenim uslovima saobraćaja ili drugim okolnostima postoji opasnost od kolone zaustavljenih vozila.",
    "correct": ["2"]
  },
  {
    "i": 93,
    "q": "Dva crvena trepćuća svjetla koja se naizmjenično pale na saobraćajnom znaku postavljenom prije prelaza puta preko željezničke pruge u nivou, kao na slici, upozoravaju na: (više tačnih odgovora)",
    "a": "približavanje voza;",
    "b": "spuštanje branika ili polubranika;",
    "c": "mjesto na putu gdje se izvode radovi.",
    "correct": ["1", "2"]
  },
  {
    "i": 94,
    "q": "Koje značenje ima ovaj saobraćajni znak?",
    "a": "blizina i položaj puta koji nema izlaza (slijepi put);",
    "b": "zabrana skretanja ulijevo.",
    "correct": ["1"]
  },
  {
    "i": 95,
    "q": "Šta zabranjuje ovaj saobraćajni znak?",
    "a": "parkiranje vozila;",
    "b": "samo zaustavljanje vozila;",
    "c": "zaustavljanje i parkiranje vozila.",
    "correct": ["3"]
  },
  {
    "i": 96,
    "q": "Kako ćete postupiti prilikom nailaska vozilom na ovlašteno lice koje u vašem smjeru kretanja daje znak kao na slici?",
    "a": "povećati brzinu kretanja vozila;",
    "b": "zaustaviti vozilo;",
    "c": "smanjiti brzinu kretanja vozila.",
    "correct": ["2"]
  },
  {
    "i": 97,
    "q": "Koje značenje ima ovaj saobraćajni znak?",
    "a": "mjesto na kojem se nalazi obilježeni pješački prelaz;",
    "b": "blizina mjesta na kojem se nalazi obilježeni pješački prelaz;",
    "c": "posebno izgrađena pješačka staza.",
    "correct": ["1"]
  },
  {
    "i": 98,
    "q": "Sta označava crvena kontrolna lampica ako vam se upali za vrijeme kretanja vozilom, kao na slici?",
    "a": "kvar u sistemu za punjenje akumulatora;",
    "b": "kvar u sistemu za osvjetljenje puta.",
    "correct": ["1"]
  },
  {
    "i": 99,
    "q": "Koje značenje ima ovaj saobraćajni znak?",
    "a": "ukrštanje puteva iste važnosti;",
    "b": "ukrštanje puta sa sporednim putem pod pravim uglom.",
    "correct": ["2"]
  },
  {
    "i": 100,
    "q": "Koje značenje ima ovaj saobraćajni znak?",
    "a": "prevoj puta;",
    "b": "suženje puta.",
    "correct": ["2"]
  },
  {
    "i": 101,
    "q": "Koje značenje ima ovaj saobraćajni znak?",
    "a": "blizina raskrsnice na kojoj se saobraćaj odvija kružno;",
    "b": "kružni tok saobraćaja.",
    "correct": ["2"]
  },
  {
    "i": 102,
    "q": "Koje značenje ima ovaj saobraćajni znak?",
    "a": "vremensko ograničenje parkiranja;",
    "b": "zona u kojoj je ograničeno trajanje parkiranja;",
    "c": "parkiralište.",
    "correct": ["2"]
  },
  {
    "i": 103,
    "q": "Kako ćete postupiti prilikom nailaska na saobraćajni znak sa dopunskom tablom, ukoliko nastavljate kretanje vozilom pravo?",
    "a": "propustiću vozila koja se nalaze na putu sa prvenstvom prolaza;",
    "b": "obavezno ću se zaustaviti;",
    "c": "propustiću samo vozila sa desne strane.",
    "correct": ["1"]
  },
  {
    "i": 104,
    "q": "Koje značenje ima ovaj saobraćajni znak? (više tačnih odgovora)",
    "a": "da upravljamo vozilom po jednosmjernom putu;",
    "b": "da ne smijemo skrenuti udesno ili ulijevo;",
    "c": "da je zabranjen saobraćaj iz suprotnog smjera.",
    "correct": ["1", "3"]
  },
  {
    "i": 105,
    "q": "Kako postupate za vrijeme upravljanja vozilom nailaskom na ovaj saobraćajni znak? (više tačnih odgovora)",
    "a": "smanjujete brzinu kretanja vozila jer nailazite na oštru krivinu udesno;",
    "b": "izbjegavate kočenje u krivini;",
    "c": "povećavate brzinu kretanja vozila.",
    "correct": ["1", "2"]
  },
  {
    "i": 106,
    "q": "Na šta vas upozorava crvena kontrolna lampica na instrument-tabli, ako vam se upali za vrijeme kretanja vozilom, kao na slici?",
    "a": "višak ulja u motoru;",
    "b": "kvar u sistemu za podmazivanje motora.",
    "correct": ["2"]
  },
  {
    "i": 107,
    "q": "Koje značenje ima ovaj saobraćajni znak?",
    "a": "zabrana prelaza za bicikl;",
    "b": "obilježeni prelaz biciklističke staze.",
    "correct": ["2"]
  },
  {
    "i": 108,
    "q": "Kako treba postupiti prilikom nailaska vozilom na ovlašteno lice koje u vašem smjeru kretanja daje znak kao na slici?",
    "a": "izvršiti radnju skretanja udesno;",
    "b": "izvršiti radnju skretanja ulijevo;",
    "c": "obavezno se zaustaviti.",
    "correct": ["3"]
  },
  {
    "i": 109,
    "q": "Koje značenje ima ovaj saobraćajni znak?",
    "a": "mjesto gdje se nailazi na oštru krivinu;",
    "b": "mjesto gdje se nailazi na blagu krivinu;",
    "c": "mjesto gdje se izvode radovi na putu.",
    "correct": ["1"]
  }
]

 */
/*

*/
