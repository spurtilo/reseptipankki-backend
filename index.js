const express = require("express");
const app = express();

let recipes = [
  {
    id: "1",
    name: "Marry me -kana",
    headerText: "",
    ingredients: [
      "1 rs (3 kpl/500 g) kanan fileepihvejä, maustamaton",
      "1/2 tl suolaa",
      "1/2 tl mustapippuria",
      "3 rkl oliiviöljyä",
      "1 prk (200 g/95 g) aurinkokuivattuja tomaatteja",
      "2 valkosipulinkynttä",
      "1 rkl tuoretta timjamia hienonnettuna",
      "1 tl Pirkka chilirouhetta",
      "2 dl Pirkka kuohukermaa",
      "1 dl vettä",
      "1 rkl Pirkka kanafondia",
      "1 dl Pirkka Parhaat parmesaania raastettuna",
    ],
    steps: [
      "Ota broilerinfileet huoneenlämpöön 1/2 tuntia ennen paistamista. Mausta fileet suolalla ja mustapippurilla.",
      "Kuumenna 1 rkl öljyä uuninkestävällä pannulla. Ruskista fileet molemmin puolin kauniin värisiksi. Nosta lautaselle. Älä huuhdo pannua.",
      "Valuta ja hienonna aurinkokuivatut tomaatit. Hienonna kuoritut valkosipulinkynnet.",
      "Kaada pannulle loppu öljy (2 rkl). Kuullota valkosipulia, timjamia ja chilihiutaleita pannulla noin minuutti. Lisää kerma, vesi, kanafondi, aurinkokuivatut tomaatit ja parmesaaniraaste. Sekoita ja kuumenna kiehuvaksi. Nosta fileet takaisin pannulle.",
      "Nosta pannu 175 asteiseen uuniin noin 15 minuutiksi.",
      "Koristele basilikalla. Tarjoa kana esimerkiksi pastan, leivän tai riisin kanssa.",
    ],
    additionalInfo:
      "Jos sinulla ei ole uuninkestävää pannua, voit hauduttaa kanan kypsäksi liedellä, tähän menee noin 9 minuuttia.",
    url: "https://www.k-ruoka.fi/reseptit/marry-me--kana",
    img: "/images/marry_me_kana.jpeg",
  },
  {
    id: "2",
    name: "Ragu alla Bolognese",
    headerText: "",
    ingredients: [
      "rakkautta",
      "intohimoa",
      "3 varsisellerin vartta",
      "4 porkkanaa",
      "2 sipulia",
      "oliiviöljyä niin että hirvittää",
      "600 g rasvaista naudanjauhelihaa",
      "100 g pancettaa eli italialaista ilmakuivattua pekonia (tai pekonia)",
      "1,5 dl kuivaa italialaista valkoviiniä",
      "70 g tomaattipyrettä",
      "1,5 l paseerattua tomaattikastiketta",
      "suolaa niin että tulee irvistyttää",
      "Tarjoiluun: tagliatelle pasta (markettipastoista esim Rummo), Parmigiano reggiano juustoa",
    ],
    steps: [
      "Kokkaa rakkaudella ja intohimolla. Maista. Sovella. Ota vähän viiniä.",
      "Pieni varsisellerit, sipulit ja porkkanat. Kuullota kasviksia padassa oliiviöljyssä. Oliiviöljyä saa olla niin paljon, että hirvittää. Fiiliksen mukaan, itse laitan ainakin pari desiä.",
      "Kun kasvikset ovat kuullottuneet (noin 10 minuuttia), nosta lämpöä, lisää jauheliha ja paista. Leikkaa pancetta pieniksi paloiksi (taittelen pancettasiivukasan kahteen kertaan ja leikkaan veitsellä kuutioiksi). Paista. Lisää valkoviini ja anna poreilla hetki.",
      "Lisää lopuksi tomaattipyre ja paseerattu tomaattikastike. Anna poreilla 2 tuntia. Sekoittele välillä. Mausta hirvittävällä määrällä suolaa.",
      "Keitä hyvälaatuinen durumpasta (tagliatelle) al denteksi reippaalla suolalla maustetussa keitinvedessä. Sekoita pasta kastikkeen joukkoon. Pelkkää kastiketta voi myös pakastaa. Tarjoile parmigiano reggiano juuston kera.",
    ],
    additionalInfo: "",
    url: "https://liemessa.fi/2019/11/aito-italialainen-ragu-alla-bolognese/",
    img: "/images/bolognese.jpg",
  },
  {
    id: "3",
    name: "Butter chicken",
    headerText: "",
    ingredients: [
      "Marinoitu broileri:",
      "4 broilerin rintafileetä",
      "2 valkosipulinkynttä",
      "1 dl turkkilaista jogurttia",
      "1 rkl raastettua inkivääriä",
      "2  tl garam masalaa",
      "2 tl juustokuminaa",
      "1 tl kurkumaa",
      "1 tl suolaa",
      "½ tl  kuivattua chiliä",
      "Kastike:",
      "1 sipuli",
      "2 valkosipulinkynttä",
      "1 rkl raastettua inkivääriä",
      "50 g voita",
      "2 tl garam masalaa",
      "2 tl juustokuminaa",
      "2 tl jauhettua korianteria",
      "1 tl kuivattua chiliä",
      "1 prk tomaattimurskaa",
      " 2 dl kuohukermaa",
      " 2 tl sokeria",
      "1 tl suolaa",
      "1–2 rkl rypsiöljyä paistamiseen",
      "tuoretta korianteria ja cashewpähkinöitä",
    ],
    steps: [
      "Leikkaa broilerinrinnat parin sentin paloiksi. Kuori ja hienonna valkosipuli. Laita lihapalat ja valkosipulit kulhoon. Lisää jogurtti ja marinoidun broilerin mausteet. Anna maustua jääkaapissa vähintään 30 minuuttia.",
      "Tee kastike. Kuori ja hienonna sipuli ja valkosipulit. Kuori ja raasta inkivääri. Kuullota sipulia, valkosipulia ja inkivääriä voissa pannussa keskilämmöllä muutama minuutti. Lisää kastikkeen mausteet ja paista sekoitellen noin minuutti.",
      "Nosta lieden lämpöä, kaada tomaattimurska pannuun ja kiehauta seos. Laske sitten lämpöä ja anna kastikkeen porista noin 20 minuuttia.",
      "Soseuta kastike teho- tai sauvasekoittimella. Laita se tehosekoittimesta takaisin pannuun ja lisää kerma, sokeri ja suola.",
      "Paista broileripaloihin toisessa pannussa, muutamassa erässä, öljyssä kaunis väri. Laita paistetut palat kastikkeeseen ja kuumenna noin 10 minuuttia, kunnes broileri on kypsää.",
      "Viimeistele ruoka korianterilla ja cashew-pähkinöillä. Tarjoa keitetyn riisin tai naan-leivän kanssa.",
    ],
    additionalInfo: "",
    url: "https://rosaviinijaruoka.fi/resepti/butter-chicken/",
    img: "/images/butter_chicken.jpg",
  },
];

app.get("/", (req, res) => {
  res.send("<h1>Hello World!</h1>");
});

app.get("/api/recipes", (req, res) => {
  res.json(recipes);
});

app.get("/api/recipes/:id", (req, res) => {
  const id = req.params.id;
  const recipe = recipes.find((recipe) => recipe.id === id);

  if (recipe) {
    res.json(recipe);
  } else {
    res.status(404).end();
  }
});

app.delete("/api/recipes/:id", (req, res) => {
  const id = req.params.id;
  recipes = recipes.filter((recipe) => recipe.id !== id);

  res.status(204).end();
});

const PORT = 3001;
app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});
