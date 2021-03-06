const mongoose = require("mongoose");
const db = require("../models");

mongoose.connect(process.env.MONGODB_URI || "mongodb://localhost/myDatabase");

// const UserSeed = [
//   {
//     "email": "colin.199643@gmail.com",
//     password: "cool",
//     category: "Coach",
//     name: "Colin Cunningham",
//     link: "http://localhost:3000/dash/colin.199643@gmail.com",
//     "teamID": "demoday",
//     motto: "If you ain't first You're last"
//   },
// ];

// db.User
// .remove({})
// .then(() => db.User.collection 
// .insertMany(UserSeed)
//   .then((data) => {
//     console.log(data.result.n + " records inserted!");
//     process.exit(0);
//   })
//   .catch((err) => {
//     console.error(err);
//     process.exit(1);
//   })
  
const playerSeed = [
  {
    "firstName": "Troy",
    "lastName": "Jamieson",
    "teamID": "demoday",
    "email": "tjamieson0@twitpic.com",
    "cellphone": "(184) 9818462",
    "oPosition": "WR",
    "dPosition": "DE",
    "number": "1,"
  },
  {
    "firstName": "Tobie",
    "lastName": "Simonetto",
    "teamID": "demoday",
    "email": "tsimonetto1@yellowbook.com",
    "cellphone": "(903) 3209396",
    "oPosition": "FB",
    "dPosition": "CB",
    "number": "2,"
  },
  {
    "firstName": "Randie",
    "lastName": "Pentony",
    "teamID": "demoday",
    "email": "rpentony2@sun.com",
    "cellphone": "(864) 4172046",
    "oPosition": "OG",
    "dPosition": "CB",
    "number": "3,"
  },
  {
    "firstName": "Orrin",
    "lastName": "Brinsford",
    "teamID": "demoday",
    "email": "obrinsford3@springer.com",
    "cellphone": "(674) 9254284",
    "oPosition": "TE",
    "dPosition": "DT",
    "number": "4,"
  },
  {
    "firstName": "Lennard",
    "lastName": "Digby",
    "teamID": "demoday",
    "email": "ldigby4@china.com.cn",
    "cellphone": "(812) 1380861",
    "oPosition": "RB",
    "dPosition": "OLB",
    "number": "5,"
  },
  {
    "firstName": "Damien",
    "lastName": "Skeats",
    "teamID": "demoday",
    "email": "dskeats5@mayoclinic.com",
    "cellphone": "(515) 2975312",
    "oPosition": "FB",
    "dPosition": "DT",
    "number": "6,"
  },
  {
    "firstName": "Frants",
    "lastName": "Curme",
    "teamID": "demoday",
    "email": "fcurme6@infoseek.co.jp",
    "cellphone": "(783) 5550353",
    "oPosition": "C",
    "dPosition": "CB",
    "number": "7,"
  },
  {
    "firstName": "Tobie",
    "lastName": "Stolze",
    "teamID": "demoday",
    "email": "tstolze7@state.tx.us",
    "cellphone": "(480) 3193305",
    "oPosition": "C",
    "dPosition": "CB",
    "number": "8,"
  },
  {
    "firstName": "Raimund",
    "lastName": "Kemmer",
    "teamID": "demoday",
    "email": "rkemmer8@globo.com",
    "cellphone": "(639) 8761905",
    "oPosition": "WR",
    "dPosition": "OLB",
    "number": "9,"
  },
  {
    "firstName": "Nye",
    "lastName": "Crates",
    "teamID": "demoday",
    "email": "ncrates9@cargocollective.com",
    "cellphone": "(978) 7179170",
    "oPosition": "TE",
    "dPosition": "CB",
    "number": "10",
  },
  {
    "firstName": "Thayne",
    "lastName": "Tidbold",
    "teamID": "demoday",
    "email": "ttidbolda@trellian.com",
    "cellphone": "(946) 3124305",
    "oPosition": "C",
    "dPosition": "OLB",
    "number": "11",
  },
  {
    "firstName": "Torr",
    "lastName": "Watters",
    "teamID": "demoday",
    "email": "twattersb@usatoday.com",
    "cellphone": "(247) 9341530",
    "oPosition": "C",
    "dPosition": "OLB",
    "number": "12",
  },
  {
    "firstName": "Faber",
    "lastName": "Peck",
    "teamID": "demoday",
    "email": "fpeckc@soup.io",
    "cellphone": "(642) 3129854",
    "oPosition": "RB",
    "dPosition": "ILB",
    "number": "13",
  },
  {
    "firstName": "Lindon",
    "lastName": "Waldram",
    "teamID": "demoday",
    "email": "lwaldramd@usgs.gov",
    "cellphone": "(371) 9323084",
    "oPosition": "C",
    "dPosition": "SS",
    "number": "14",
  },
  {
    "firstName": "Domenic",
    "lastName": "Greener",
    "teamID": "demoday",
    "email": "dgreenere@google.cn",
    "cellphone": "(197) 4487099",
    "oPosition": "OT",
    "dPosition": "DE",
    "number": "15",
  },
  {
    "firstName": "Dane",
    "lastName": "Backes",
    "teamID": "demoday",
    "email": "dbackesf@shareasale.com",
    "cellphone": "(915) 2228891",
    "oPosition": "RB",
    "dPosition": "CB",
    "number": "16",
  },
  {
    "firstName": "Connie",
    "lastName": "Spellecy",
    "teamID": "demoday",
    "email": "cspellecyg@amazon.de",
    "cellphone": "(628) 9701248",
    "oPosition": "QB",
    "dPosition": "SS",
    "number": "17",
  },
  {
    "firstName": "Floyd",
    "lastName": "Iglesiaz",
    "teamID": "demoday",
    "email": "figlesiazh@walmart.com",
    "cellphone": "(288) 6525414",
    "oPosition": "QB",
    "dPosition": "DE",
    "number": "18",
  },
  {
    "firstName": "Ezechiel",
    "lastName": "Paull",
    "teamID": "demoday",
    "email": "epaulli@ustream.tv",
    "cellphone": "(717) 7917629",
    "oPosition": "RB",
    "dPosition": "FS",
    "number": "19",
  },
  {
    "firstName": "Lorne",
    "lastName": "Besse",
    "teamID": "demoday",
    "email": "lbessej@spiegel.de",
    "cellphone": "(670) 4919943",
    "oPosition": "WR",
    "dPosition": "OLB",
    "number": "20",
  },
  {
    "firstName": "Frazier",
    "lastName": "Bartlet",
    "teamID": "demoday",
    "email": "fbartletk@flickr.com",
    "cellphone": "(337) 7704056",
    "oPosition": "WR",
    "dPosition": "FS",
    "number": "21",
  },
  {
    "firstName": "Abram",
    "lastName": "Pregel",
    "teamID": "demoday",
    "email": "apregell@latimes.com",
    "cellphone": "(192) 3309405",
    "oPosition": "OT",
    "dPosition": "FS",
    "number": "22",
  },
  {
    "firstName": "Greg",
    "lastName": "Byrd",
    "teamID": "demoday",
    "email": "gbyrdm@si.edu",
    "cellphone": "(755) 6431361",
    "oPosition": "C",
    "dPosition": "FS",
    "number": "23",
  },
  {
    "firstName": "Jeffrey",
    "lastName": "Massen",
    "teamID": "demoday",
    "email": "jmassenn@mit.edu",
    "cellphone": "(857) 9572232",
    "oPosition": "TE",
    "dPosition": "SS",
    "number": "24",
  },
  {
    "firstName": "Izak",
    "lastName": "Grunwald",
    "teamID": "demoday",
    "email": "igrunwaldo@mayoclinic.com",
    "cellphone": "(685) 7081925",
    "oPosition": "FB",
    "dPosition": "CB",
    "number": "25",
  },
  {
    "firstName": "Huntley",
    "lastName": "Jerrams",
    "teamID": "demoday",
    "email": "hjerramsp@wunderground.com",
    "cellphone": "(452) 6150867",
    "oPosition": "RB",
    "dPosition": "DT",
    "number": "26",
  },
  {
    "firstName": "Serge",
    "lastName": "Deverson",
    "teamID": "demoday",
    "email": "sdeversonq@paypal.com",
    "cellphone": "(997) 5706430",
    "oPosition": "WR",
    "dPosition": "OLB",
    "number": "27",
  },
  {
    "firstName": "Wallace",
    "lastName": "Bugg",
    "teamID": "demoday",
    "email": "wbuggr@noaa.gov",
    "cellphone": "(645) 9350445",
    "oPosition": "RB",
    "dPosition": "OLB",
    "number": "28",
  },
  {
    "firstName": "Aguie",
    "lastName": "Gallagher",
    "teamID": "demoday",
    "email": "agallaghers@washingtonpost.com",
    "cellphone": "(500) 2945824",
    "oPosition": "C",
    "dPosition": "DT",
    "number": "29",
  },
  {
    "firstName": "Garner",
    "lastName": "Huston",
    "teamID": "demoday",
    "email": "ghustont@ucla.edu",
    "cellphone": "(456) 6118348",
    "oPosition": "RB",
    "dPosition": "CB",
    "number": "30",
  },
  {
    "firstName": "Vail",
    "lastName": "Fulks",
    "teamID": "demoday",
    "email": "vfulksu@mail.ru",
    "cellphone": "(138) 1949487",
    "oPosition": "OT",
    "dPosition": "CB",
    "number": "31",
  },
  {
    "firstName": "Federico",
    "lastName": "Worsnup",
    "teamID": "demoday",
    "email": "fworsnupv@sohu.com",
    "cellphone": "(258) 8519699",
    "oPosition": "FB",
    "dPosition": "SS",
    "number": "32",
  },
  {
    "firstName": "Donal",
    "lastName": "Swettenham",
    "teamID": "demoday",
    "email": "dswettenhamw@joomla.org",
    "cellphone": "(823) 6679029",
    "oPosition": "FB",
    "dPosition": "DE",
    "number": "33",
  },
  {
    "firstName": "Gib",
    "lastName": "Goodin",
    "teamID": "demoday",
    "email": "ggoodinx@naver.com",
    "cellphone": "(264) 6311865",
    "oPosition": "OT",
    "dPosition": "FS",
    "number": "34",
  },
  {
    "firstName": "Shamus",
    "lastName": "Ardy",
    "teamID": "demoday",
    "email": "sardyy@sciencedirect.com",
    "cellphone": "(245) 5545239",
    "oPosition": "QB",
    "dPosition": "DE",
    "number": "35",
  },
  {
    "firstName": "Lewiss",
    "lastName": "Rubinchik",
    "teamID": "demoday",
    "email": "lrubinchikz@altervista.org",
    "cellphone": "(466) 4673963",
    "oPosition": "RB",
    "dPosition": "FS",
    "number": "36",
  },
  {
    "firstName": "Reg",
    "lastName": "Garman",
    "teamID": "demoday",
    "email": "rgarman10@about.me",
    "cellphone": "(449) 7742609",
    "oPosition": "C",
    "dPosition": "CB",
    "number": "37",
  },
  {
    "firstName": "Neal",
    "lastName": "Gregan",
    "teamID": "demoday",
    "email": "ngregan11@imageshack.us",
    "cellphone": "(712) 1284566",
    "oPosition": "TE",
    "dPosition": "OLB",
    "number": "38",
  },
  {
    "firstName": "Giorgi",
    "lastName": "Shuard",
    "teamID": "demoday",
    "email": "gshuard12@surveymonkey.com",
    "cellphone": "(395) 3675148",
    "oPosition": "OT",
    "dPosition": "OLB",
    "number": "39",
  },
  {
    "firstName": "Hendrick",
    "lastName": "Yushachkov",
    "teamID": "demoday",
    "email": "hyushachkov13@wisc.edu",
    "cellphone": "(452) 1013909",
    "oPosition": "QB",
    "dPosition": "DT",
    "number": "40",
  },
  {
    "firstName": "Waylon",
    "lastName": "Kahane",
    "teamID": "demoday",
    "email": "wkahane14@soup.io",
    "cellphone": "(840) 6125877",
    "oPosition": "OT",
    "dPosition": "CB",
    "number": "41",
  },
  {
    "firstName": "Ashby",
    "lastName": "Barbey",
    "teamID": "demoday",
    "email": "abarbey15@photobucket.com",
    "cellphone": "(694) 8927769",
    "oPosition": "QB",
    "dPosition": "DE",
    "number": "42",
  },
  {
    "firstName": "Rudolfo",
    "lastName": "Puttick",
    "teamID": "demoday",
    "email": "rputtick16@twitpic.com",
    "cellphone": "(917) 8164036",
    "oPosition": "RB",
    "dPosition": "ILB",
    "number": "43",
  },
  {
    "firstName": "Erny",
    "lastName": "Laight",
    "teamID": "demoday",
    "email": "elaight17@nasa.gov",
    "cellphone": "(918) 2640484",
    "oPosition": "FB",
    "dPosition": "ILB",
    "number": "44",
  }
];

db.Team.updateMany({}, { $push: { players: playerSeed } })
  .then((dbModel) => {
    console.log("you did it!");
  })
  .catch((err) => res.status(422).json(err));
