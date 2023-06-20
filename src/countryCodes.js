const countryCodes = [
  {
    id: 1,
    country: "Afghanistan",
    phone_code: "+93",
  },
  {
    id: 2,
    country: "Albania",
    phone_code: "+355",
  },
  {
    id: 3,
    country: "Algeria",
    phone_code: "+213",
  },
  {
    id: 4,
    country: "Andorra",
    phone_code: "+376",
  },
  {
    id: 5,
    country: "Angola",
    phone_code: "+244",
  },
  {
    id: 6,
    country: "Antigua & Barbuda",
    phone_code: "+1",
  },
  {
    id: 7,
    country: "Argentina",
    phone_code: "+54",
  },
  {
    id: 8,
    country: "Armenia",
    phone_code: "+374",
  },
  {
    id: 9,
    country: "Australia",
    phone_code: "+61",
  },
  {
    id: 10,
    country: "Austria",
    phone_code: "+43",
  },
  {
    id: 11,
    country: "Azerbaijan",
    phone_code: "+994",
  },
  {
    id: 12,
    country: "Bahamas",
    phone_code: "+1",
  },
  {
    id: 13,
    country: "Bahrain",
    phone_code: "+973",
  },
  {
    id: 14,
    country: "Bangladesh",
    phone_code: "+880",
  },
  {
    id: 15,
    country: "Barbados",
    phone_code: "+1",
  },
  {
    id: 16,
    country: "Belarus",
    phone_code: "+375",
  },
  {
    id: 17,
    country: "Belgium",
    phone_code: "+32",
  },
  {
    id: 18,
    country: "Belize",
    phone_code: "+501",
  },
  {
    id: 19,
    country: "Benin",
    phone_code: "+229",
  },
  {
    id: 20,
    country: "Bhutan",
    phone_code: "+975",
  },
  {
    id: 21,
    country: "Bolivia",
    phone_code: "+591",
  },
  {
    id: 22,
    country: "Bosnia Herzegovina",
    phone_code: "+387",
  },
  {
    id: 23,
    country: "Botswana",
    phone_code: "+267",
  },
  {
    id: 24,
    country: "Brazil",
    phone_code: "+55",
  },
  {
    id: 25,
    country: "Brunei",
    phone_code: "+673",
  },
  {
    id: 26,
    country: "Bulgaria",
    phone_code: "+359",
  },
  {
    id: 27,
    country: "Burkina",
    phone_code: "+226",
  },
  {
    id: 28,
    country: "Burundi",
    phone_code: "+257",
  },
  {
    id: 29,
    country: "Cambodia",
    phone_code: "+855",
  },
  {
    id: 30,
    country: "Cameroon",
    phone_code: "+237",
  },
  {
    id: 31,
    country: "Canada",
    phone_code: "+1",
  },
  {
    id: 32,
    country: "Cape Verde",
    phone_code: "+238",
  },
  {
    id: 33,
    country: "Central African Rep",
    phone_code: "+236",
  },
  {
    id: 34,
    country: "Chad",
    phone_code: "+235",
  },
  {
    id: 35,
    country: "Chile",
    phone_code: "+56",
  },
  {
    id: 36,
    country: "China",
    phone_code: "+86",
  },
  {
    id: 37,
    country: "Colombia",
    phone_code: "+57",
  },
  {
    id: 38,
    country: "Comoros",
    phone_code: "+269",
  },
  {
    id: 39,
    country: "Congo",
    phone_code: "+242",
  },
  {
    id: 40,
    country: "Congo (Democratic Rep)",
    phone_code: "+243",
  },
  {
    id: 41,
    country: "Costa Rica",
    phone_code: "+506",
  },
  {
    id: 42,
    country: "Croatia",
    phone_code: "+385",
  },
  {
    id: 43,
    country: "Cuba",
    phone_code: "+53",
  },
  {
    id: 44,
    country: "Cyprus",
    phone_code: "+357",
  },
  {
    id: 45,
    country: "Czech Republic",
    phone_code: "+420",
  },
  {
    id: 46,
    country: "Denmark",
    phone_code: "+45",
  },
  {
    id: 47,
    country: "Djibouti",
    phone_code: "+253",
  },
  {
    id: 48,
    country: "Dominica",
    phone_code: "+1",
  },
  {
    id: 49,
    country: "Dominican Republic",
    phone_code: "+1",
  },
  {
    id: 50,
    country: "East Timor",
    phone_code: "+670",
  },
  {
    id: 51,
    country: "Ecuador",
    phone_code: "+593",
  },
  {
    id: 52,
    country: "Egypt",
    phone_code: "+20",
  },
  {
    id: 53,
    country: "El Salvador",
    phone_code: "+503",
  },
  {
    id: 54,
    country: "Equatorial Guinea",
    phone_code: "+240",
  },
  {
    id: 55,
    country: "Eritrea",
    phone_code: "+291",
  },
  {
    id: 56,
    country: "Estonia",
    phone_code: "+372",
  },
  {
    id: 57,
    country: "Ethiopia",
    phone_code: "+251",
  },
  {
    id: 58,
    country: "Fiji",
    phone_code: "+679",
  },
  {
    id: 59,
    country: "Finland",
    phone_code: "+358",
  },
  {
    id: 60,
    country: "France",
    phone_code: "+33",
  },
  {
    id: 61,
    country: "Gabon",
    phone_code: "+241",
  },
  {
    id: 62,
    country: "Gambia",
    phone_code: "+220",
  },
  {
    id: 63,
    country: "Georgia",
    phone_code: "+995",
  },
  {
    id: 64,
    country: "Germany",
    phone_code: "+49",
  },
  {
    id: 65,
    country: "Ghana",
    phone_code: "+233",
  },
  {
    id: 66,
    country: "Greece",
    phone_code: "+30",
  },
  {
    id: 67,
    country: "Grenada",
    phone_code: "+1",
  },
  {
    id: 68,
    country: "Guatemala",
    phone_code: "+502",
  },
  {
    id: 69,
    country: "Guinea",
    phone_code: "+224",
  },
  {
    id: 70,
    country: "Guinea-Bissau",
    phone_code: "+245",
  },
  {
    id: 71,
    country: "Guyana",
    phone_code: "+592",
  },
  {
    id: 72,
    country: "Haiti",
    phone_code: "+509",
  },
  {
    id: 73,
    country: "Honduras",
    phone_code: "+504",
  },
  {
    id: 197,
    country: "Hong Kong",
    phone_code: "+852",
  },
  {
    id: 74,
    country: "Hungary",
    phone_code: "+36",
  },
  {
    id: 75,
    country: "Iceland",
    phone_code: "+354",
  },
  {
    id: 76,
    country: "India",
    phone_code: "+91",
  },
  {
    id: 77,
    country: "Indonesia",
    phone_code: "+62",
  },
  {
    id: 78,
    country: "Iran",
    phone_code: "+98",
  },
  {
    id: 79,
    country: "Iraq",
    phone_code: "+964",
  },
  {
    id: 80,
    country: "Ireland",
    phone_code: "+353",
  },
  {
    id: 81,
    country: "Israel",
    phone_code: "+972",
  },
  {
    id: 82,
    country: "Italy",
    phone_code: "+39",
  },
  {
    id: 83,
    country: "Ivory Coast",
    phone_code: "+225",
  },
  {
    id: 84,
    country: "Jamaica",
    phone_code: "+1",
  },
  {
    id: 85,
    country: "Japan",
    phone_code: "+81",
  },
  {
    id: 86,
    country: "Jordan",
    phone_code: "+962",
  },
  {
    id: 87,
    country: "Kazakhstan",
    phone_code: "+7",
  },
  {
    id: 88,
    country: "Kenya",
    phone_code: "+254",
  },
  {
    id: 89,
    country: "Kiribati",
    phone_code: "+686",
  },
  {
    id: 90,
    country: "North Korea",
    phone_code: "+850",
  },
  {
    id: 91,
    country: "South Korea",
    phone_code: "+82",
  },
  {
    id: 92,
    country: "Kosovo",
    phone_code: "+383",
  },
  {
    id: 93,
    country: "Kuwait",
    phone_code: "+965",
  },
  {
    id: 94,
    country: "Kyrgyzstan",
    phone_code: "+996",
  },
  {
    id: 95,
    country: "Laos",
    phone_code: "+856",
  },
  {
    id: 96,
    country: "Latvia",
    phone_code: "+371",
  },
  {
    id: 97,
    country: "Lebanon",
    phone_code: "+961",
  },
  {
    id: 98,
    country: "Lesotho",
    phone_code: "+266",
  },
  {
    id: 99,
    country: "Liberia",
    phone_code: "+231",
  },
  {
    id: 100,
    country: "Libya",
    phone_code: "+218",
  },
  {
    id: 101,
    country: "Liechtenstein",
    phone_code: "+423",
  },
  {
    id: 102,
    country: "Lithuania",
    phone_code: "+370",
  },
  {
    id: 103,
    country: "Luxembourg",
    phone_code: "+352",
  },
  {
    id: 104,
    country: "Macedonia",
    phone_code: "+389",
  },
  {
    id: 105,
    country: "Madagascar",
    phone_code: "+261",
  },
  {
    id: 106,
    country: "Malawi",
    phone_code: "+265",
  },
  {
    id: 107,
    country: "Malaysia",
    phone_code: "+60",
  },
  {
    id: 108,
    country: "Maldives",
    phone_code: "+960",
  },
  {
    id: 109,
    country: "Mali",
    phone_code: "+223",
  },
  {
    id: 110,
    country: "Malta",
    phone_code: "+356",
  },
  {
    id: 111,
    country: "Marshall Islands",
    phone_code: "+692",
  },
  {
    id: 112,
    country: "Mauritania",
    phone_code: "+222",
  },
  {
    id: 113,
    country: "Mauritius",
    phone_code: "+230",
  },
  {
    id: 114,
    country: "Mexico",
    phone_code: "+52",
  },
  {
    id: 115,
    country: "Micronesia",
    phone_code: "+691",
  },
  {
    id: 116,
    country: "Moldova",
    phone_code: "+373",
  },
  {
    id: 117,
    country: "Monaco",
    phone_code: "+377",
  },
  {
    id: 118,
    country: "Mongolia",
    phone_code: "+976",
  },
  {
    id: 119,
    country: "Montenegro",
    phone_code: "+382",
  },
  {
    id: 120,
    country: "Morocco",
    phone_code: "+212",
  },
  {
    id: 121,
    country: "Mozambique",
    phone_code: "+258",
  },
  {
    id: 122,
    country: "Myanmar (Burma)",
    phone_code: "+95",
  },
  {
    id: 123,
    country: "Namibia",
    phone_code: "+264",
  },
  {
    id: 124,
    country: "Nauru",
    phone_code: "+674",
  },
  {
    id: 125,
    country: "Nepal",
    phone_code: "+977",
  },
  {
    id: 126,
    country: "Netherlands",
    phone_code: "+31",
  },
  {
    id: 127,
    country: "New Zealand",
    phone_code: "+64",
  },
  {
    id: 128,
    country: "Nicaragua",
    phone_code: "+505",
  },
  {
    id: 129,
    country: "Niger",
    phone_code: "+227",
  },
  {
    id: 130,
    country: "Nigeria",
    phone_code: "+234",
  },
  {
    id: 131,
    country: "Norway",
    phone_code: "+47",
  },
  {
    id: 132,
    country: "Oman",
    phone_code: "+968",
  },
  {
    id: 133,
    country: "Pakistan",
    phone_code: "+92",
  },
  {
    id: 134,
    country: "Palau",
    phone_code: "+680",
  },
  {
    id: 135,
    country: "Palau",
    phone_code: "+680",
  },
  {
    id: 136,
    country: "Panama",
    phone_code: "+507",
  },
  {
    id: 137,
    country: "Papua New Guinea",
    phone_code: "+675",
  },
  {
    id: 138,
    country: "Paraguay",
    phone_code: "+595",
  },
  {
    id: 139,
    country: "Peru",
    phone_code: "+51",
  },
  {
    id: 140,
    country: "Philippines",
    phone_code: "+63",
  },
  {
    id: 141,
    country: "Poland",
    phone_code: "+48",
  },
  {
    id: 142,
    country: "Portugal",
    phone_code: "+351",
  },
  {
    id: 143,
    country: "Qatar",
    phone_code: "+974",
  },
  {
    id: 144,
    country: "Romania",
    phone_code: "+40",
  },
  {
    id: 145,
    country: "Russian Federation",
    phone_code: "+7",
  },
  {
    id: 146,
    country: "Rwanda",
    phone_code: "+250",
  },
  {
    id: 147,
    country: "St Kitts & Nevis",
    phone_code: "+1",
  },
  {
    id: 148,
    country: "St Lucia",
    phone_code: "+1",
  },
  {
    id: 149,
    country: "Saint Vincent & the Grenadines",
    phone_code: "+1",
  },
  {
    id: 150,
    country: "Samoa",
    phone_code: "+685",
  },
  {
    id: 151,
    country: "San Marino",
    phone_code: "+378",
  },
  {
    id: 152,
    country: "Sao Tome & Principe",
    phone_code: "+239",
  },
  {
    id: 153,
    country: "Saudi Arabia",
    phone_code: "+966",
  },
  {
    id: 154,
    country: "Senegal",
    phone_code: "+221",
  },
  {
    id: 155,
    country: "Serbia",
    phone_code: "+381",
  },
  {
    id: 156,
    country: "Seychelles",
    phone_code: "+248",
  },
  {
    id: 157,
    country: "Sierra Leone",
    phone_code: "+232",
  },
  {
    id: 158,
    country: "Singapore",
    phone_code: "+65",
  },
  {
    id: 159,
    country: "Slovakia",
    phone_code: "+421",
  },
  {
    id: 160,
    country: "Slovenia",
    phone_code: "+386",
  },
  {
    id: 161,
    country: "Solomon Islands",
    phone_code: "+677",
  },
  {
    id: 162,
    country: "Somalia",
    phone_code: "+252",
  },
  {
    id: 163,
    country: "South Africa",
    phone_code: "+27",
  },
  {
    id: 164,
    country: "South Sudan",
    phone_code: "+211",
  },
  {
    id: 165,
    country: "Spain",
    phone_code: "+34",
  },
  {
    id: 166,
    country: "Sri Lanka",
    phone_code: "+94",
  },
  {
    id: 167,
    country: "Sudan",
    phone_code: "+249",
  },
  {
    id: 168,
    country: "Suriname",
    phone_code: "+597",
  },
  {
    id: 169,
    country: "Swaziland",
    phone_code: "+268",
  },
  {
    id: 170,
    country: "Sweden",
    phone_code: "+46",
  },
  {
    id: 171,
    country: "Switzerland",
    phone_code: "+41",
  },
  {
    id: 172,
    country: "Syria",
    phone_code: "+963",
  },
  {
    id: 173,
    country: "Taiwan",
    phone_code: "+886",
  },
  {
    id: 174,
    country: "Tajikistan",
    phone_code: "+992",
  },
  {
    id: 175,
    country: "Tanzania",
    phone_code: "+255",
  },
  {
    id: 176,
    country: "Thailand",
    phone_code: "+66",
  },
  {
    id: 177,
    country: "Togo",
    phone_code: "+228",
  },
  {
    id: 178,
    country: "Tonga",
    phone_code: "+676",
  },
  {
    id: 179,
    country: "Trinidad & Tobago",
    phone_code: "+1",
  },
  {
    id: 180,
    country: "Tunisia",
    phone_code: "+216",
  },
  {
    id: 181,
    country: "Turkey",
    phone_code: "+90",
  },
  {
    id: 182,
    country: "Turkmenistan",
    phone_code: "+993",
  },
  {
    id: 183,
    country: "Tuvalu",
    phone_code: "+688",
  },
  {
    id: 184,
    country: "Uganda",
    phone_code: "+256",
  },
  {
    id: 185,
    country: "Ukraine",
    phone_code: "+380",
  },
  {
    id: 186,
    country: "United Arab Emirates",
    phone_code: "+971",
  },
  {
    id: 187,
    country: "United Kingdom",
    phone_code: "+44",
  },
  {
    id: 188,
    country: "United States",
    phone_code: "+1",
  },
  {
    id: 189,
    country: "Uruguay",
    phone_code: "+598",
  },
  {
    id: 190,
    country: "Uzbekistan",
    phone_code: "+998",
  },
  {
    id: 191,
    country: "Vanuatu",
    phone_code: "+678",
  },
  {
    id: 192,
    country: "Vatican City",
    phone_code: "+39",
  },
  {
    id: 193,
    country: "Venezuela",
    phone_code: "+58",
  },
  {
    id: 194,
    country: "Vietnam",
    phone_code: "+84",
  },
  {
    id: 195,
    country: "Yemen",
    phone_code: "+967",
  },
  {
    id: 196,
    country: "Zambia",
    phone_code: "+260",
  },
];

export default countryCodes;
