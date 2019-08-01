// ==============================================================================
// Copyright (C) 2019 - Philip Paquette, Steven Bocco
//
//  This program is free software: you can redistribute it and/or modify it under
//  the terms of the GNU Affero General Public License as published by the Free
//  Software Foundation, either version 3 of the License, or (at your option) any
//  later version.
//
//  This program is distributed in the hope that it will be useful, but WITHOUT
//  ANY WARRANTY; without even the implied warranty of MERCHANTABILITY or FITNESS
//  FOR A PARTICULAR PURPOSE.  See the GNU Affero General Public License for more
//  details.
//
//  You should have received a copy of the GNU Affero General Public License along
//  with this program.  If not, see <https://www.gnu.org/licenses/>.
// ==============================================================================
export const SvgStandardExtra = {
    "jdipNS:DISPLAY": {
        "jdipNS:ZOOM": {
            "min": "5",
            "max": "2200",
            "factor": "1.2"
        },
        "jdipNS:LABELS": {
            "brief": "true",
            "full": "true"
        }
    },
    "jdipNS:ORDERDRAWING": {
        "jdipNS:POWERCOLORS": {
            "jdipNS:POWERCOLOR": [
                {
                    "power": "austria",
                    "color": "#c48f85"
                },
                {
                    "power": "england",
                    "color": "darkviolet"
                },
                {
                    "power": "france",
                    "color": "royalblue"
                },
                {
                    "power": "germany",
                    "color": "#a08a75"
                },
                {
                    "power": "italy",
                    "color": "forestgreen"
                },
                {
                    "power": "russia",
                    "color": "#757d91"
                },
                {
                    "power": "turkey",
                    "color": "#b9a61c"
                }
            ]
        },
        "jdipNS:SYMBOLSIZE": [
            {
                "name": "Fleet",
                "width": "40",
                "height": "40"
            },
            {
                "name": "Army",
                "width": "40",
                "height": "40"
            },
            {
                "name": "Wing",
                "width": "40",
                "height": "40"
            },
            {
                "name": "DislodgedFleet",
                "width": "40",
                "height": "40"
            },
            {
                "name": "DislodgedArmy",
                "width": "40",
                "height": "40"
            },
            {
                "name": "DislodgedWing",
                "width": "40",
                "height": "40"
            },
            {
                "name": "FailedOrder",
                "width": "30",
                "height": "30"
            },
            {
                "name": "SupplyCenter",
                "width": "20",
                "height": "20"
            },
            {
                "name": "BuildUnit",
                "width": "60",
                "height": "60"
            },
            {
                "name": "RemoveUnit",
                "width": "50",
                "height": "50"
            },
            {
                "name": "WaivedBuild",
                "width": "40",
                "height": "40"
            }
        ],
        "jdipNS:BUILD": {
            "deltaRadius": "0"
        },
        "jdipNS:REMOVE": {
            "deltaRadius": "5"
        },
        "jdipNS:DISBAND": {
            "deltaRadius": "5"
        },
        "jdipNS:WAIVE": {
            "deltaRadius": "0"
        },
        "jdipNS:HOLD": {
            "deltaRadius": "5",
            "strokeCSSStyle": "varwidthorder",
            "highlightOffset": "0",
            "highlightCSSClass": "varwidthshadow",
            "widths": "6,9,12,18",
            "shadowWidths": "10,15,20,25"
        },
        "jdipNS:MOVE": {
            "deltaRadius": "5",
            "strokeCSSStyle": "varwidthorder",
            "markerID": "arrow",
            "highlightOffset": "0",
            "highlightCSSClass": "varwidthshadow",
            "widths": "6,9,12,18",
            "shadowWidths": "10,15,20,25"
        },
        "jdipNS:RETREAT": {
            "deltaRadius": "5",
            "strokeCSSStyle": "defaultorder",
            "markerID": "arrow",
            "highlightOffset": "0",
            "highlightCSSClass": "shadoworder"
        },
        "jdipNS:SUPPORT": {
            "deltaRadius": "10",
            "strokeCSSStyle": "supportorder",
            "markerID": "arrow",
            "highlightOffset": "0",
            "highlightCSSClass": "shadowdash"
        },
        "jdipNS:CONVOY": {
            "deltaRadius": "10",
            "strokeCSSStyle": "convoyorder",
            "markerID": "arrow",
            "highlightOffset": "0",
            "highlightCSSClass": "shadowdash"
        }
    },
    "jdipNS:PROVINCE_DATA": {
        "jdipNS:PROVINCE": [
            {
                "jdipNS:UNIT": {
                    "x": "805",
                    "y": "1058"
                },
                "jdipNS:DISLODGED_UNIT": {
                    "x": "792.5",
                    "y": "1045.5"
                },
                "name": "adr"
            },
            {
                "jdipNS:UNIT": {
                    "x": "1055",
                    "y": "1240"
                },
                "jdipNS:DISLODGED_UNIT": {
                    "x": "1042.5",
                    "y": "1227.5"
                },
                "name": "aeg"
            },
            {
                "jdipNS:UNIT": {
                    "x": "918",
                    "y": "1123"
                },
                "jdipNS:DISLODGED_UNIT": {
                    "x": "905.5",
                    "y": "1110.5"
                },
                "name": "alb"
            },
            {
                "jdipNS:UNIT": {
                    "x": "1313",
                    "y": "1120"
                },
                "jdipNS:DISLODGED_UNIT": {
                    "x": "1300.5",
                    "y": "1107.5"
                },
                "jdipNS:SUPPLY_CENTER": {
                    "x": "1271",
                    "y": "1144"
                },
                "name": "ank"
            },
            {
                "jdipNS:UNIT": {
                    "x": "803",
                    "y": "1116"
                },
                "jdipNS:DISLODGED_UNIT": {
                    "x": "790.5",
                    "y": "1103.5"
                },
                "name": "apu"
            },
            {
                "jdipNS:UNIT": {
                    "x": "1496",
                    "y": "1100"
                },
                "jdipNS:DISLODGED_UNIT": {
                    "x": "1483.5",
                    "y": "1087.5"
                },
                "name": "arm"
            },
            {
                "jdipNS:UNIT": {
                    "x": "890",
                    "y": "620"
                },
                "jdipNS:DISLODGED_UNIT": {
                    "x": "877.5",
                    "y": "607.5"
                },
                "name": "bal"
            },
            {
                "jdipNS:UNIT": {
                    "x": "1174",
                    "y": "83"
                },
                "jdipNS:DISLODGED_UNIT": {
                    "x": "1161.5",
                    "y": "70.5"
                },
                "name": "bar"
            },
            {
                "jdipNS:UNIT": {
                    "x": "573",
                    "y": "763"
                },
                "jdipNS:DISLODGED_UNIT": {
                    "x": "560.5",
                    "y": "750.5"
                },
                "jdipNS:SUPPLY_CENTER": {
                    "x": "575",
                    "y": "755"
                },
                "name": "bel"
            },
            {
                "jdipNS:UNIT": {
                    "x": "783",
                    "y": "700"
                },
                "jdipNS:DISLODGED_UNIT": {
                    "x": "770.5",
                    "y": "687.5"
                },
                "jdipNS:SUPPLY_CENTER": {
                    "x": "783",
                    "y": "736"
                },
                "name": "ber"
            },
            {
                "jdipNS:UNIT": {
                    "x": "1245",
                    "y": "1010"
                },
                "jdipNS:DISLODGED_UNIT": {
                    "x": "1232.5",
                    "y": "997.5"
                },
                "name": "bla"
            },
            {
                "jdipNS:UNIT": {
                    "x": "818",
                    "y": "824"
                },
                "jdipNS:DISLODGED_UNIT": {
                    "x": "805.5",
                    "y": "811.5"
                },
                "name": "boh"
            },
            {
                "jdipNS:UNIT": {
                    "x": "953",
                    "y": "495"
                },
                "jdipNS:DISLODGED_UNIT": {
                    "x": "940.5",
                    "y": "482.5"
                },
                "name": "bot"
            },
            {
                "jdipNS:UNIT": {
                    "x": "416",
                    "y": "829"
                },
                "jdipNS:DISLODGED_UNIT": {
                    "x": "403.5",
                    "y": "816.5"
                },
                "jdipNS:SUPPLY_CENTER": {
                    "x": "369",
                    "y": "799"
                },
                "name": "bre"
            },
            {
                "jdipNS:UNIT": {
                    "x": "962",
                    "y": "914"
                },
                "jdipNS:DISLODGED_UNIT": {
                    "x": "949.5",
                    "y": "901.5"
                },
                "jdipNS:SUPPLY_CENTER": {
                    "x": "900",
                    "y": "916"
                },
                "name": "bud"
            },
            {
                "jdipNS:UNIT": {
                    "x": "1060",
                    "y": "1078"
                },
                "jdipNS:DISLODGED_UNIT": {
                    "x": "1047.5",
                    "y": "1065.5"
                },
                "jdipNS:SUPPLY_CENTER": {
                    "x": "1013",
                    "y": "1078"
                },
                "name": "bul"
            },
            {
                "jdipNS:UNIT": {
                    "x": "571",
                    "y": "881"
                },
                "jdipNS:DISLODGED_UNIT": {
                    "x": "558.5",
                    "y": "868.5"
                },
                "name": "bur"
            },
            {
                "jdipNS:UNIT": {
                    "x": "448",
                    "y": "502"
                },
                "jdipNS:DISLODGED_UNIT": {
                    "x": "435.5",
                    "y": "489.5"
                },
                "jdipNS:SUPPLY_CENTER": {
                    "x": "446",
                    "y": "480"
                },
                "name": "cly"
            },
            {
                "jdipNS:UNIT": {
                    "x": "1157",
                    "y": "1147"
                },
                "jdipNS:DISLODGED_UNIT": {
                    "x": "1144.5",
                    "y": "1134.5"
                },
                "jdipNS:SUPPLY_CENTER": {
                    "x": "1141",
                    "y": "1119"
                },
                "name": "con"
            },
            {
                "jdipNS:UNIT": {
                    "x": "715",
                    "y": "597"
                },
                "jdipNS:DISLODGED_UNIT": {
                    "x": "702.5",
                    "y": "584.5"
                },
                "jdipNS:SUPPLY_CENTER": {
                    "x": "767",
                    "y": "626"
                },
                "name": "den"
            },
            {
                "jdipNS:UNIT": {
                    "x": "1230",
                    "y": "1321"
                },
                "jdipNS:DISLODGED_UNIT": {
                    "x": "1217.5",
                    "y": "1308.5"
                },
                "name": "eas"
            },
            {
                "jdipNS:UNIT": {
                    "x": "485",
                    "y": "524"
                },
                "jdipNS:DISLODGED_UNIT": {
                    "x": "472.5",
                    "y": "511.5"
                },
                "jdipNS:SUPPLY_CENTER": {
                    "x": "489",
                    "y": "565"
                },
                "name": "edi"
            },
            {
                "jdipNS:UNIT": {
                    "x": "406",
                    "y": "761"
                },
                "jdipNS:DISLODGED_UNIT": {
                    "x": "393.5",
                    "y": "748.5"
                },
                "name": "eng"
            },
            {
                "jdipNS:UNIT": {
                    "x": "1000",
                    "y": "390"
                },
                "jdipNS:DISLODGED_UNIT": {
                    "x": "987.5",
                    "y": "377.5"
                },
                "name": "fin"
            },
            {
                "jdipNS:UNIT": {
                    "x": "1011",
                    "y": "841"
                },
                "jdipNS:DISLODGED_UNIT": {
                    "x": "998.5",
                    "y": "828.5"
                },
                "name": "gal"
            },
            {
                "jdipNS:UNIT": {
                    "x": "434",
                    "y": "922"
                },
                "jdipNS:DISLODGED_UNIT": {
                    "x": "421.5",
                    "y": "909.5"
                },
                "name": "gas"
            },
            {
                "jdipNS:UNIT": {
                    "x": "556",
                    "y": "1060"
                },
                "jdipNS:DISLODGED_UNIT": {
                    "x": "543.5",
                    "y": "1047.5"
                },
                "name": "gol"
            },
            {
                "jdipNS:UNIT": {
                    "x": "978",
                    "y": "1200"
                },
                "jdipNS:DISLODGED_UNIT": {
                    "x": "965.5",
                    "y": "1187.5"
                },
                "jdipNS:SUPPLY_CENTER": {
                    "x": "1023",
                    "y": "1237"
                },
                "name": "gre"
            },
            {
                "jdipNS:UNIT": {
                    "x": "663",
                    "y": "641"
                },
                "jdipNS:DISLODGED_UNIT": {
                    "x": "650.5",
                    "y": "628.5"
                },
                "name": "hel"
            },
            {
                "jdipNS:UNIT": {
                    "x": "608",
                    "y": "721"
                },
                "jdipNS:DISLODGED_UNIT": {
                    "x": "595.5",
                    "y": "708.5"
                },
                "jdipNS:SUPPLY_CENTER": {
                    "x": "630",
                    "y": "692"
                },
                "name": "hol"
            },
            {
                "jdipNS:UNIT": {
                    "x": "858",
                    "y": "1296"
                },
                "jdipNS:DISLODGED_UNIT": {
                    "x": "845.5",
                    "y": "1283.5"
                },
                "name": "ion"
            },
            {
                "jdipNS:UNIT": {
                    "x": "347",
                    "y": "671"
                },
                "jdipNS:DISLODGED_UNIT": {
                    "x": "334.5",
                    "y": "658.5"
                },
                "name": "iri"
            },
            {
                "jdipNS:UNIT": {
                    "x": "695",
                    "y": "711"
                },
                "jdipNS:DISLODGED_UNIT": {
                    "x": "682.5",
                    "y": "698.5"
                },
                "jdipNS:SUPPLY_CENTER": {
                    "x": "724",
                    "y": "685"
                },
                "name": "kie"
            },
            {
                "jdipNS:UNIT": {
                    "x": "500",
                    "y": "685"
                },
                "jdipNS:DISLODGED_UNIT": {
                    "x": "487.5",
                    "y": "672.5"
                },
                "jdipNS:SUPPLY_CENTER": {
                    "x": "489",
                    "y": "717"
                },
                "name": "lon"
            },
            {
                "jdipNS:UNIT": {
                    "x": "1037",
                    "y": "577"
                },
                "jdipNS:DISLODGED_UNIT": {
                    "x": "1024.5",
                    "y": "564.5"
                },
                "name": "lvn"
            },
            {
                "jdipNS:UNIT": {
                    "x": "462",
                    "y": "586"
                },
                "jdipNS:DISLODGED_UNIT": {
                    "x": "449.5",
                    "y": "573.5"
                },
                "jdipNS:SUPPLY_CENTER": {
                    "x": "458",
                    "y": "638"
                },
                "name": "lvp"
            },
            {
                "jdipNS:UNIT": {
                    "x": "525.8",
                    "y": "1065"
                },
                "jdipNS:DISLODGED_UNIT": {
                    "x": "513.3",
                    "y": "1052.5"
                },
                "name": "lyo"
            },
            {
                "jdipNS:UNIT": {
                    "x": "536",
                    "y": "985"
                },
                "jdipNS:DISLODGED_UNIT": {
                    "x": "523.5",
                    "y": "972.5"
                },
                "jdipNS:SUPPLY_CENTER": {
                    "x": "562",
                    "y": "1018"
                },
                "name": "mar"
            },
            {
                "jdipNS:UNIT": {
                    "x": "153.3",
                    "y": "845.3"
                },
                "jdipNS:DISLODGED_UNIT": {
                    "x": "140.8",
                    "y": "832.8"
                },
                "name": "mao"
            },
            {
                "jdipNS:UNIT": {
                    "x": "126",
                    "y": "902"
                },
                "jdipNS:DISLODGED_UNIT": {
                    "x": "113.5",
                    "y": "889.5"
                },
                "name": "mid"
            },
            {
                "jdipNS:UNIT": {
                    "x": "1212",
                    "y": "600"
                },
                "jdipNS:DISLODGED_UNIT": {
                    "x": "1199.5",
                    "y": "587.5"
                },
                "jdipNS:SUPPLY_CENTER": {
                    "x": "1267",
                    "y": "584"
                },
                "name": "mos"
            },
            {
                "jdipNS:UNIT": {
                    "x": "705",
                    "y": "838"
                },
                "jdipNS:DISLODGED_UNIT": {
                    "x": "692.5",
                    "y": "825.5"
                },
                "jdipNS:SUPPLY_CENTER": {
                    "x": "730",
                    "y": "878"
                },
                "name": "mun"
            },
            {
                "jdipNS:UNIT": {
                    "x": "337",
                    "y": "1291"
                },
                "jdipNS:DISLODGED_UNIT": {
                    "x": "324.5",
                    "y": "1278.5"
                },
                "name": "naf"
            },
            {
                "jdipNS:UNIT": {
                    "x": "191.6",
                    "y": "298.2"
                },
                "jdipNS:DISLODGED_UNIT": {
                    "x": "179.1",
                    "y": "285.7"
                },
                "name": "nao"
            },
            {
                "jdipNS:UNIT": {
                    "x": "818",
                    "y": "1180"
                },
                "jdipNS:DISLODGED_UNIT": {
                    "x": "815.5",
                    "y": "1167.5"
                },
                "jdipNS:SUPPLY_CENTER": {
                    "x": "778",
                    "y": "1143"
                },
                "name": "nap"
            },
            {
                "jdipNS:UNIT": {
                    "x": "238",
                    "y": "427"
                },
                "jdipNS:DISLODGED_UNIT": {
                    "x": "225.5",
                    "y": "414.5"
                },
                "name": "nat"
            },
            {
                "jdipNS:UNIT": {
                    "x": "605",
                    "y": "250"
                },
                "jdipNS:DISLODGED_UNIT": {
                    "x": "592.5",
                    "y": "237.5"
                },
                "name": "nrg"
            },
            {
                "jdipNS:UNIT": {
                    "x": "565",
                    "y": "570"
                },
                "jdipNS:DISLODGED_UNIT": {
                    "x": "552.5",
                    "y": "557.5"
                },
                "name": "nth"
            },
            {
                "jdipNS:UNIT": {
                    "x": "664.2",
                    "y": "191.8"
                },
                "jdipNS:DISLODGED_UNIT": {
                    "x": "651.7",
                    "y": "179.3"
                },
                "name": "nwg"
            },
            {
                "jdipNS:UNIT": {
                    "x": "715",
                    "y": "420"
                },
                "jdipNS:DISLODGED_UNIT": {
                    "x": "702.5",
                    "y": "407.5"
                },
                "jdipNS:SUPPLY_CENTER": {
                    "x": "761",
                    "y": "463"
                },
                "name": "nwy"
            },
            {
                "jdipNS:UNIT": {
                    "x": "500",
                    "y": "855"
                },
                "jdipNS:DISLODGED_UNIT": {
                    "x": "487.5",
                    "y": "842.5"
                },
                "jdipNS:SUPPLY_CENTER": {
                    "x": "518",
                    "y": "819"
                },
                "name": "par"
            },
            {
                "jdipNS:UNIT": {
                    "x": "535",
                    "y": "791"
                },
                "jdipNS:DISLODGED_UNIT": {
                    "x": "522.5",
                    "y": "778.5"
                },
                "name": "pic"
            },
            {
                "jdipNS:UNIT": {
                    "x": "642",
                    "y": "978"
                },
                "jdipNS:DISLODGED_UNIT": {
                    "x": "629.5",
                    "y": "965.5"
                },
                "name": "pie"
            },
            {
                "jdipNS:UNIT": {
                    "x": "193",
                    "y": "1023"
                },
                "jdipNS:DISLODGED_UNIT": {
                    "x": "180.5",
                    "y": "1010.5"
                },
                "jdipNS:SUPPLY_CENTER": {
                    "x": "151",
                    "y": "1060"
                },
                "name": "por"
            },
            {
                "jdipNS:UNIT": {
                    "x": "877",
                    "y": "700"
                },
                "jdipNS:DISLODGED_UNIT": {
                    "x": "864.5",
                    "y": "687.5"
                },
                "name": "pru"
            },
            {
                "jdipNS:UNIT": {
                    "x": "743",
                    "y": "1112"
                },
                "jdipNS:DISLODGED_UNIT": {
                    "x": "730.5",
                    "y": "1099.5"
                },
                "jdipNS:SUPPLY_CENTER": {
                    "x": "719",
                    "y": "1087"
                },
                "name": "rom"
            },
            {
                "jdipNS:UNIT": {
                    "x": "648",
                    "y": "789"
                },
                "jdipNS:DISLODGED_UNIT": {
                    "x": "635.5",
                    "y": "776.5"
                },
                "name": "ruh"
            },
            {
                "jdipNS:UNIT": {
                    "x": "1108",
                    "y": "977"
                },
                "jdipNS:DISLODGED_UNIT": {
                    "x": "1095.5",
                    "y": "964.5"
                },
                "jdipNS:SUPPLY_CENTER": {
                    "x": "1083",
                    "y": "1014"
                },
                "name": "rum"
            },
            {
                "jdipNS:UNIT": {
                    "x": "945",
                    "y": "1060"
                },
                "jdipNS:DISLODGED_UNIT": {
                    "x": "932.5",
                    "y": "1047.5"
                },
                "jdipNS:SUPPLY_CENTER": {
                    "x": "936",
                    "y": "1021"
                },
                "name": "ser"
            },
            {
                "jdipNS:UNIT": {
                    "x": "1296",
                    "y": "855"
                },
                "jdipNS:DISLODGED_UNIT": {
                    "x": "1283.5",
                    "y": "842.5"
                },
                "jdipNS:SUPPLY_CENTER": {
                    "x": "1267",
                    "y": "973"
                },
                "name": "sev"
            },
            {
                "jdipNS:UNIT": {
                    "x": "844",
                    "y": "779"
                },
                "jdipNS:DISLODGED_UNIT": {
                    "x": "831.5",
                    "y": "766.5"
                },
                "name": "sil"
            },
            {
                "jdipNS:UNIT": {
                    "x": "747",
                    "y": "528"
                },
                "jdipNS:DISLODGED_UNIT": {
                    "x": "734.5",
                    "y": "515.5"
                },
                "name": "ska"
            },
            {
                "jdipNS:UNIT": {
                    "x": "1265",
                    "y": "1220"
                },
                "jdipNS:DISLODGED_UNIT": {
                    "x": "1252.5",
                    "y": "1207.5"
                },
                "jdipNS:SUPPLY_CENTER": {
                    "x": "1132",
                    "y": "1222"
                },
                "name": "smy"
            },
            {
                "jdipNS:UNIT": {
                    "x": "347",
                    "y": "1049"
                },
                "jdipNS:DISLODGED_UNIT": {
                    "x": "334.5",
                    "y": "1036.5"
                },
                "jdipNS:SUPPLY_CENTER": {
                    "x": "302",
                    "y": "1056"
                },
                "name": "spa"
            },
            {
                "jdipNS:UNIT": {
                    "x": "1178",
                    "y": "415"
                },
                "jdipNS:DISLODGED_UNIT": {
                    "x": "1165.5",
                    "y": "402.5"
                },
                "jdipNS:SUPPLY_CENTER": {
                    "x": "1113",
                    "y": "469"
                },
                "name": "stp"
            },
            {
                "jdipNS:UNIT": {
                    "x": "841",
                    "y": "469"
                },
                "jdipNS:DISLODGED_UNIT": {
                    "x": "828.5",
                    "y": "456.5"
                },
                "jdipNS:SUPPLY_CENTER": {
                    "x": "890",
                    "y": "489"
                },
                "name": "swe"
            },
            {
                "jdipNS:UNIT": {
                    "x": "642",
                    "y": "928"
                },
                "jdipNS:DISLODGED_UNIT": {
                    "x": "629",
                    "y": "915.5"
                },
                "name": "swi"
            },
            {
                "jdipNS:UNIT": {
                    "x": "1464",
                    "y": "1216"
                },
                "jdipNS:DISLODGED_UNIT": {
                    "x": "1451.5",
                    "y": "1203.5"
                },
                "name": "syr"
            },
            {
                "jdipNS:UNIT": {
                    "x": "837",
                    "y": "1006"
                },
                "jdipNS:DISLODGED_UNIT": {
                    "x": "824.5",
                    "y": "993.5"
                },
                "jdipNS:SUPPLY_CENTER": {
                    "x": "794",
                    "y": "975"
                },
                "name": "tri"
            },
            {
                "jdipNS:UNIT": {
                    "x": "634",
                    "y": "1310"
                },
                "jdipNS:DISLODGED_UNIT": {
                    "x": "621.5",
                    "y": "1297.5"
                },
                "jdipNS:SUPPLY_CENTER": {
                    "x": "647",
                    "y": "1282"
                },
                "name": "tun"
            },
            {
                "jdipNS:UNIT": {
                    "x": "698",
                    "y": "1044"
                },
                "jdipNS:DISLODGED_UNIT": {
                    "x": "685.5",
                    "y": "1031.5"
                },
                "name": "tus"
            },
            {
                "jdipNS:UNIT": {
                    "x": "720",
                    "y": "1160"
                },
                "jdipNS:DISLODGED_UNIT": {
                    "x": "707.5",
                    "y": "1147.5"
                },
                "name": "tyn"
            },
            {
                "jdipNS:UNIT": {
                    "x": "754",
                    "y": "914"
                },
                "jdipNS:DISLODGED_UNIT": {
                    "x": "741.5",
                    "y": "901.5"
                },
                "name": "tyr"
            },
            {
                "jdipNS:UNIT": {
                    "x": "710.0",
                    "y": "1159.1"
                },
                "jdipNS:DISLODGED_UNIT": {
                    "x": "697.5",
                    "y": "1146.6"
                },
                "name": "tys"
            },
            {
                "jdipNS:UNIT": {
                    "x": "1136",
                    "y": "810"
                },
                "jdipNS:DISLODGED_UNIT": {
                    "x": "1123.5",
                    "y": "797.5"
                },
                "name": "ukr"
            },
            {
                "jdipNS:UNIT": {
                    "x": "719",
                    "y": "1004"
                },
                "jdipNS:DISLODGED_UNIT": {
                    "x": "706.5",
                    "y": "991.5"
                },
                "jdipNS:SUPPLY_CENTER": {
                    "x": "733",
                    "y": "971"
                },
                "name": "ven"
            },
            {
                "jdipNS:UNIT": {
                    "x": "867",
                    "y": "874"
                },
                "jdipNS:DISLODGED_UNIT": {
                    "x": "854.5",
                    "y": "861.5"
                },
                "jdipNS:SUPPLY_CENTER": {
                    "x": "835",
                    "y": "887"
                },
                "name": "vie"
            },
            {
                "jdipNS:UNIT": {
                    "x": "440",
                    "y": "668"
                },
                "jdipNS:DISLODGED_UNIT": {
                    "x": "427.5",
                    "y": "655.5"
                },
                "jdipNS:SUPPLY_CENTER": {
                    "x": "440",
                    "y": "712"
                },
                "name": "wal"
            },
            {
                "jdipNS:UNIT": {
                    "x": "995",
                    "y": "750"
                },
                "jdipNS:DISLODGED_UNIT": {
                    "x": "982.5",
                    "y": "737.5"
                },
                "jdipNS:SUPPLY_CENTER": {
                    "x": "937",
                    "y": "748"
                },
                "name": "war"
            },
            {
                "jdipNS:UNIT": {
                    "x": "474",
                    "y": "1173"
                },
                "jdipNS:DISLODGED_UNIT": {
                    "x": "461.5",
                    "y": "1160.5"
                },
                "name": "wes"
            },
            {
                "jdipNS:UNIT": {
                    "x": "504",
                    "y": "626"
                },
                "jdipNS:DISLODGED_UNIT": {
                    "x": "491.5",
                    "y": "613.5"
                },
                "jdipNS:SUPPLY_CENTER": {
                    "x": "506",
                    "y": "647"
                },
                "name": "yor"
            },
            {
                "jdipNS:UNIT": {
                    "x": "1218",
                    "y": "222"
                },
                "jdipNS:DISLODGED_UNIT": {
                    "x": "1205.5",
                    "y": "209.5"
                },
                "name": "stp-nc"
            },
            {
                "jdipNS:UNIT": {
                    "x": "1066",
                    "y": "487"
                },
                "jdipNS:DISLODGED_UNIT": {
                    "x": "1053.5",
                    "y": "474.5"
                },
                "name": "stp-sc"
            },
            {
                "jdipNS:UNIT": {
                    "x": "1127",
                    "y": "1067"
                },
                "jdipNS:DISLODGED_UNIT": {
                    "x": "1114.5",
                    "y": "1054.5"
                },
                "name": "bul-ec"
            },
            {
                "jdipNS:UNIT": {
                    "x": "1070",
                    "y": "1140"
                },
                "jdipNS:DISLODGED_UNIT": {
                    "x": "1057.5",
                    "y": "1127.5"
                },
                "name": "bul-sc"
            },
            {
                "jdipNS:UNIT": {
                    "x": "289",
                    "y": "965"
                },
                "jdipNS:DISLODGED_UNIT": {
                    "x": "276.5",
                    "y": "952.5"
                },
                "name": "spa-nc"
            },
            {
                "jdipNS:UNIT": {
                    "x": "291",
                    "y": "1166"
                },
                "jdipNS:DISLODGED_UNIT": {
                    "x": "278.5",
                    "y": "1153.5"
                },
                "name": "spa-sc"
            }
        ]
    }
};
