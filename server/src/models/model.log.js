import {Schema, model} from "mongoose";

const logs_fw = new Schema({
  "fields": [
    {
      "name": "_id",
      "path": "_id",
      "count": 24,
      "types": [
        {
          "name": "ObjectID",
          "bsonType": "ObjectID",
          "path": "_id",
          "count": 24,
          "values": [
            "62ffd574c7cc3313f90596f0",
            "62ffd574878f0d68125c3597",
            "62ffd5743741251225a5527b",
            "62ffd569738101c6e8c6d22f",
            "62ffd5696ef1f8d0a60069bb",
            "62ffd56a43740671a1ec5088",
            "62ffd574f4ab660a03ae2d6e",
            "62ffd56aae22a197c4132517",
            "62ffc0105d98587ef3d7ffd4",
            "62ffd55c3789398e6ad32ae3",
            "62ffd55b33e701e2f9e2e679",
            "62ffc104575747d48720c797",
            "62ffd55c4612a6e0cbac9c43",
            "62ffd55be79f1b4fcec03a4b",
            "62ffd57416933b2f588b304e",
            "62ffbf73f12f665ebb96a034",
            "62ffd55ce2afb2208c30935d",
            "62ffd55c5f1bcdf8933ad3f5",
            "62ffd569bafe11d8a7e88ed0",
            "62ffad54859e0f62254a6069",
            "62ffd5697a4fa6b02133f522",
            "62ffd55ca65b908be3d4a56c",
            "62ffd574de9e6ded2ddc8d0f",
            "62ffd55b247a56d384e49bd6"
          ],
          "total_count": 0,
          "probability": 1,
          "unique": 24,
          "has_duplicates": false
        }
      ],
      "total_count": 24,
      "type": "ObjectID",
      "has_duplicates": false,
      "probability": 1
    },
    {
      "name": "action",
      "path": "action",
      "count": 1,
      "types": [
        {
          "name": "Undefined",
          "type": "Undefined",
          "path": "action",
          "count": 23,
          "total_count": 0,
          "probability": 0.9583333333333334,
          "unique": 1,
          "has_duplicates": true
        },
        {
          "name": "String",
          "bsonType": "String",
          "path": "action",
          "count": 1,
          "values": [
            "asdf"
          ],
          "total_count": 0,
          "probability": 0.041666666666666664,
          "unique": 1,
          "has_duplicates": false
        }
      ],
      "total_count": 24,
      "type": [
        "Undefined",
        "String"
      ],
      "has_duplicates": true,
      "probability": 0.041666666666666664
    },
    {
      "name": "c",
      "path": "c",
      "count": 1,
      "types": [
        {
          "name": "Undefined",
          "type": "Undefined",
          "path": "c",
          "count": 23,
          "total_count": 0,
          "probability": 0.9583333333333334,
          "unique": 1,
          "has_duplicates": true
        },
        {
          "name": "String",
          "bsonType": "String",
          "path": "c",
          "count": 1,
          "values": [
            "1"
          ],
          "total_count": 0,
          "probability": 0.041666666666666664,
          "unique": 1,
          "has_duplicates": false
        }
      ],
      "total_count": 24,
      "type": [
        "Undefined",
        "String"
      ],
      "has_duplicates": true,
      "probability": 0.041666666666666664
    },
    {
      "name": "data",
      "path": "data",
      "count": 23,
      "types": [
        {
          "name": "Document",
          "bsonType": "Document",
          "path": "data",
          "count": 23,
          "fields": [
            {
              "name": "action",
              "path": "data.action",
              "count": 23,
              "types": [
                {
                  "name": "String",
                  "bsonType": "String",
                  "path": "data.action",
                  "count": 23,
                  "values": [
                    "drop",
                    "drop",
                    "drop",
                    "drop",
                    "drop",
                    "drop",
                    "drop",
                    "drop",
                    "drop",
                    "drop",
                    "drop",
                    "drop",
                    "drop",
                    "drop",
                    "drop",
                    "drop",
                    "drop",
                    "drop",
                    "drop",
                    "drop",
                    "drop",
                    "drop",
                    "drop"
                  ],
                  "total_count": 0,
                  "probability": 1,
                  "unique": 1,
                  "has_duplicates": true
                }
              ],
              "total_count": 23,
              "type": "String",
              "has_duplicates": true,
              "probability": 1
            },
            {
              "name": "c",
              "path": "data.c",
              "count": 23,
              "types": [
                {
                  "name": "String",
                  "bsonType": "String",
                  "path": "data.c",
                  "count": 23,
                  "values": [
                    "32",
                    "32",
                    "32",
                    "32",
                    "32",
                    "32",
                    "32",
                    "32",
                    "32",
                    "32",
                    "32",
                    "32",
                    "32",
                    "32",
                    "32",
                    "32",
                    "32",
                    "32",
                    "32",
                    "32",
                    "32",
                    "32",
                    "32"
                  ],
                  "total_count": 0,
                  "probability": 1,
                  "unique": 1,
                  "has_duplicates": true
                }
              ],
              "total_count": 23,
              "type": "String",
              "has_duplicates": true,
              "probability": 1
            },
            {
              "name": "date",
              "path": "data.date",
              "count": 23,
              "types": [
                {
                  "name": "String",
                  "bsonType": "String",
                  "path": "data.date",
                  "count": 23,
                  "values": [
                    "2022-08-19",
                    "2022-08-19",
                    "2022-08-19",
                    "2022-08-19",
                    "2022-08-19",
                    "2022-08-19",
                    "2022-08-19",
                    "2022-08-19",
                    "2022-08-19",
                    "2022-08-19",
                    "2022-08-19",
                    "2022-08-19",
                    "2022-08-19",
                    "2022-08-19",
                    "2022-08-19",
                    "2022-08-19",
                    "2022-08-19",
                    "2022-08-19",
                    "2022-08-19",
                    "2022-08-19",
                    "2022-08-19",
                    "2022-08-19",
                    "2022-08-19"
                  ],
                  "total_count": 0,
                  "probability": 1,
                  "unique": 1,
                  "has_duplicates": true
                }
              ],
              "total_count": 23,
              "type": "String",
              "has_duplicates": true,
              "probability": 1
            },
            {
              "name": "dst_interface",
              "path": "data.dst_interface",
              "count": 23,
              "types": [
                {
                  "name": "String",
                  "bsonType": "String",
                  "path": "data.dst_interface",
                  "count": 23,
                  "values": [
                    "192.168.10.255",
                    "192.168.10.255",
                    "192.168.10.255",
                    "192.168.10.255",
                    "192.168.10.255",
                    "192.168.10.255",
                    "192.168.10.255",
                    "192.168.10.255",
                    "192.168.10.255",
                    "192.168.10.255",
                    "192.168.10.255",
                    "192.168.10.255",
                    "192.168.10.255",
                    "192.168.10.255",
                    "192.168.10.255",
                    "192.168.10.255",
                    "192.168.10.255",
                    "192.168.10.255",
                    "192.168.10.255",
                    "192.168.10.255",
                    "192.168.10.255",
                    "192.168.10.255",
                    "192.168.10.255"
                  ],
                  "total_count": 0,
                  "probability": 1,
                  "unique": 1,
                  "has_duplicates": true
                }
              ],
              "total_count": 23,
              "type": "String",
              "has_duplicates": true,
              "probability": 1
            },
            {
              "name": "dst_ip",
              "path": "data.dst_ip",
              "count": 23,
              "types": [
                {
                  "name": "String",
                  "bsonType": "String",
                  "path": "data.dst_ip",
                  "count": 23,
                  "values": [
                    "192.168.10.255",
                    "192.168.10.255",
                    "192.168.10.255",
                    "192.168.10.255",
                    "192.168.10.255",
                    "192.168.10.255",
                    "192.168.10.255",
                    "192.168.10.255",
                    "192.168.10.255",
                    "192.168.10.255",
                    "192.168.10.255",
                    "192.168.10.255",
                    "192.168.10.255",
                    "192.168.10.255",
                    "192.168.10.255",
                    "192.168.10.255",
                    "192.168.10.255",
                    "192.168.10.255",
                    "192.168.10.255",
                    "192.168.10.255",
                    "192.168.10.255",
                    "192.168.10.255",
                    "192.168.10.255"
                  ],
                  "total_count": 0,
                  "probability": 1,
                  "unique": 1,
                  "has_duplicates": true
                }
              ],
              "total_count": 23,
              "type": "String",
              "has_duplicates": true,
              "probability": 1
            },
            {
              "name": "dst_port",
              "path": "data.dst_port",
              "count": 23,
              "types": [
                {
                  "name": "String",
                  "bsonType": "String",
                  "path": "data.dst_port",
                  "count": 23,
                  "values": [
                    "192.168.10.255",
                    "192.168.10.255",
                    "192.168.10.255",
                    "192.168.10.255",
                    "192.168.10.255",
                    "192.168.10.255",
                    "192.168.10.255",
                    "192.168.10.255",
                    "192.168.10.255",
                    "192.168.10.255",
                    "192.168.10.255",
                    "192.168.10.255",
                    "192.168.10.255",
                    "192.168.10.255",
                    "192.168.10.255",
                    "192.168.10.255",
                    "192.168.10.255",
                    "192.168.10.255",
                    "192.168.10.255",
                    "192.168.10.255",
                    "192.168.10.255",
                    "192.168.10.255",
                    "192.168.10.255"
                  ],
                  "total_count": 0,
                  "probability": 1,
                  "unique": 1,
                  "has_duplicates": true
                }
              ],
              "total_count": 23,
              "type": "String",
              "has_duplicates": true,
              "probability": 1
            },
            {
              "name": "dstMAC",
              "path": "data.dstMAC",
              "count": 23,
              "types": [
                {
                  "name": "String",
                  "bsonType": "String",
                  "path": "data.dstMAC",
                  "count": 23,
                  "values": [
                    "2c:b8:ed:ba:c3:6a",
                    "2c:b8:ed:ba:c3:6a",
                    "2c:b8:ed:ba:c3:6a",
                    "2c:b8:ed:ba:c3:6a",
                    "2c:b8:ed:ba:c3:6a",
                    "2c:b8:ed:ba:c3:6a",
                    "2c:b8:ed:ba:c3:6a",
                    "2c:b8:ed:ba:c3:6a",
                    "2c:b8:ed:ba:c3:6a",
                    "2c:b8:ed:ba:c3:6a",
                    "2c:b8:ed:ba:c3:6a",
                    "2c:b8:ed:ba:c3:6a",
                    "2c:b8:ed:ba:c3:6a",
                    "2c:b8:ed:ba:c3:6a",
                    "2c:b8:ed:ba:c3:6a",
                    "2c:b8:ed:ba:c3:6a",
                    "2c:b8:ed:ba:c3:6a",
                    "2c:b8:ed:ba:c3:6a",
                    "2c:b8:ed:ba:c3:6a",
                    "2c:b8:ed:ba:c3:6a",
                    "2c:b8:ed:ba:c3:6a",
                    "2c:b8:ed:ba:c3:6a",
                    "2c:b8:ed:ba:c3:6a"
                  ],
                  "total_count": 0,
                  "probability": 1,
                  "unique": 1,
                  "has_duplicates": true
                }
              ],
              "total_count": 23,
              "type": "String",
              "has_duplicates": true,
              "probability": 1
            },
            {
              "name": "fw",
              "path": "data.fw",
              "count": 23,
              "types": [
                {
                  "name": "String",
                  "bsonType": "String",
                  "path": "data.fw",
                  "count": 23,
                  "values": [
                    "192.168.20.99",
                    "192.168.20.99",
                    "192.168.20.99",
                    "192.168.20.99",
                    "192.168.20.99",
                    "192.168.20.99",
                    "192.168.20.99",
                    "192.168.20.99",
                    "192.168.20.99",
                    "192.168.20.99",
                    "192.168.20.99",
                    "192.168.20.99",
                    "192.168.20.99",
                    "192.168.20.99",
                    "192.168.20.99",
                    "192.168.20.99",
                    "192.168.20.99",
                    "192.168.20.99",
                    "192.168.20.99",
                    "192.168.20.99",
                    "192.168.20.99",
                    "192.168.20.99",
                    "192.168.20.99"
                  ],
                  "total_count": 0,
                  "probability": 1,
                  "unique": 1,
                  "has_duplicates": true
                }
              ],
              "total_count": 23,
              "type": "String",
              "has_duplicates": true,
              "probability": 1
            },
            {
              "name": "m",
              "path": "data.m",
              "count": 23,
              "types": [
                {
                  "name": "String",
                  "bsonType": "String",
                  "path": "data.m",
                  "count": 23,
                  "values": [
                    "23",
                    "23",
                    "23",
                    "23",
                    "23",
                    "23",
                    "23",
                    "23",
                    "23",
                    "23",
                    "23",
                    "23",
                    "23",
                    "23",
                    "23",
                    "23",
                    "23",
                    "23",
                    "23",
                    "23",
                    "23",
                    "23",
                    "23"
                  ],
                  "total_count": 0,
                  "probability": 1,
                  "unique": 1,
                  "has_duplicates": true
                }
              ],
              "total_count": 23,
              "type": "String",
              "has_duplicates": true,
              "probability": 1
            },
            {
              "name": "msg",
              "path": "data.msg",
              "count": 23,
              "types": [
                {
                  "name": "String",
                  "bsonType": "String",
                  "path": "data.msg",
                  "count": 23,
                  "values": [
                    "IP spoof dropped",
                    "IP spoof dropped",
                    "IP spoof dropped",
                    "IP spoof dropped",
                    "IP spoof dropped",
                    "IP spoof dropped",
                    "IP spoof dropped",
                    "IP spoof dropped",
                    "IP spoof dropped",
                    "IP spoof dropped",
                    "IP spoof dropped",
                    "IP spoof dropped",
                    "IP spoof dropped",
                    "IP spoof dropped",
                    "IP spoof dropped",
                    "IP spoof dropped",
                    "IP spoof dropped",
                    "IP spoof dropped",
                    "IP spoof dropped",
                    "IP spoof dropped",
                    "IP spoof dropped",
                    "IP spoof dropped",
                    "IP spoof dropped"
                  ],
                  "total_count": 0,
                  "probability": 1,
                  "unique": 1,
                  "has_duplicates": true
                }
              ],
              "total_count": 23,
              "type": "String",
              "has_duplicates": true,
              "probability": 1
            },
            {
              "name": "n",
              "path": "data.n",
              "count": 23,
              "types": [
                {
                  "name": "String",
                  "bsonType": "String",
                  "path": "data.n",
                  "count": 23,
                  "values": [
                    "21988026",
                    "21988026",
                    "21988026",
                    "21988026",
                    "21988026",
                    "21988026",
                    "21988026",
                    "21988026",
                    "21981308",
                    "21988026",
                    "21988026",
                    "21981573",
                    "21988026",
                    "21988026",
                    "21988026",
                    "21980971",
                    "21988026",
                    "21988026",
                    "21988026",
                    "21988026",
                    "21988026",
                    "21988026",
                    "21988026"
                  ],
                  "total_count": 0,
                  "probability": 1,
                  "unique": 4,
                  "has_duplicates": true
                }
              ],
              "total_count": 23,
              "type": "String",
              "has_duplicates": true,
              "probability": 1
            },
            {
              "name": "pri",
              "path": "data.pri",
              "count": 23,
              "types": [
                {
                  "name": "String",
                  "bsonType": "String",
                  "path": "data.pri",
                  "count": 23,
                  "values": [
                    "1",
                    "1",
                    "1",
                    "1",
                    "1",
                    "1",
                    "1",
                    "1",
                    "1",
                    "1",
                    "1",
                    "1",
                    "1",
                    "1",
                    "1",
                    "1",
                    "1",
                    "1",
                    "1",
                    "1",
                    "1",
                    "1",
                    "1"
                  ],
                  "total_count": 0,
                  "probability": 1,
                  "unique": 1,
                  "has_duplicates": true
                }
              ],
              "total_count": 23,
              "type": "String",
              "has_duplicates": true,
              "probability": 1
            },
            {
              "name": "protocol",
              "path": "data.protocol",
              "count": 23,
              "types": [
                {
                  "name": "String",
                  "bsonType": "String",
                  "path": "data.protocol",
                  "count": 23,
                  "values": [
                    "udp",
                    "udp",
                    "udp",
                    "udp",
                    "udp",
                    "udp",
                    "udp",
                    "udp",
                    "udp",
                    "udp",
                    "udp",
                    "udp",
                    "udp",
                    "udp",
                    "udp",
                    "udp",
                    "udp",
                    "udp",
                    "udp",
                    "udp",
                    "udp",
                    "udp",
                    "udp"
                  ],
                  "total_count": 0,
                  "probability": 1,
                  "unique": 1,
                  "has_duplicates": true
                }
              ],
              "total_count": 23,
              "type": "String",
              "has_duplicates": true,
              "probability": 1
            },
            {
              "name": "sn",
              "path": "data.sn",
              "count": 23,
              "types": [
                {
                  "name": "String",
                  "bsonType": "String",
                  "path": "data.sn",
                  "count": 23,
                  "values": [
                    "2CB8EDBAC368",
                    "2CB8EDBAC368",
                    "2CB8EDBAC368",
                    "2CB8EDBAC368",
                    "2CB8EDBAC368",
                    "2CB8EDBAC368",
                    "2CB8EDBAC368",
                    "2CB8EDBAC368",
                    "2CB8EDBAC368",
                    "2CB8EDBAC368",
                    "2CB8EDBAC368",
                    "2CB8EDBAC368",
                    "2CB8EDBAC368",
                    "2CB8EDBAC368",
                    "2CB8EDBAC368",
                    "2CB8EDBAC368",
                    "2CB8EDBAC368",
                    "2CB8EDBAC368",
                    "2CB8EDBAC368",
                    "2CB8EDBAC368",
                    "2CB8EDBAC368",
                    "2CB8EDBAC368",
                    "2CB8EDBAC368"
                  ],
                  "total_count": 0,
                  "probability": 1,
                  "unique": 1,
                  "has_duplicates": true
                }
              ],
              "total_count": 23,
              "type": "String",
              "has_duplicates": true,
              "probability": 1
            },
            {
              "name": "src_interface",
              "path": "data.src_interface",
              "count": 23,
              "types": [
                {
                  "name": "String",
                  "bsonType": "String",
                  "path": "data.src_interface",
                  "count": 23,
                  "values": [
                    "X2",
                    "X2",
                    "X2",
                    "X2",
                    "X2",
                    "X2",
                    "X2",
                    "X2",
                    "X2",
                    "X2",
                    "X2",
                    "X2",
                    "X2",
                    "X2",
                    "X2",
                    "X2",
                    "X2",
                    "X2",
                    "X2",
                    "X2",
                    "X2",
                    "X2",
                    "X2"
                  ],
                  "total_count": 0,
                  "probability": 1,
                  "unique": 1,
                  "has_duplicates": true
                }
              ],
              "total_count": 23,
              "type": "String",
              "has_duplicates": true,
              "probability": 1
            },
            {
              "name": "src_ip",
              "path": "data.src_ip",
              "count": 23,
              "types": [
                {
                  "name": "String",
                  "bsonType": "String",
                  "path": "data.src_ip",
                  "count": 23,
                  "values": [
                    "192.168.10.199",
                    "192.168.10.199",
                    "192.168.10.199",
                    "192.168.10.199",
                    "192.168.10.199",
                    "192.168.10.199",
                    "192.168.10.199",
                    "192.168.10.199",
                    "192.168.10.129",
                    "192.168.10.199",
                    "192.168.10.199",
                    "192.168.10.199",
                    "192.168.10.199",
                    "192.168.10.199",
                    "192.168.10.199",
                    "192.168.10.199",
                    "192.168.10.199",
                    "192.168.10.199",
                    "192.168.10.199",
                    "192.168.10.199",
                    "192.168.10.199",
                    "192.168.10.199",
                    "192.168.10.199"
                  ],
                  "total_count": 0,
                  "probability": 1,
                  "unique": 2,
                  "has_duplicates": true
                }
              ],
              "total_count": 23,
              "type": "String",
              "has_duplicates": true,
              "probability": 1
            },
            {
              "name": "src_port",
              "path": "data.src_port",
              "count": 23,
              "types": [
                {
                  "name": "String",
                  "bsonType": "String",
                  "path": "data.src_port",
                  "count": 23,
                  "values": [
                    "1534",
                    "1534",
                    "1534",
                    "1534",
                    "1534",
                    "1534",
                    "1534",
                    "1534",
                    "17500",
                    "1534",
                    "1534",
                    "1534",
                    "1534",
                    "1534",
                    "1534",
                    "1534",
                    "1534",
                    "1534",
                    "1534",
                    "1534",
                    "1534",
                    "1534",
                    "1534"
                  ],
                  "total_count": 0,
                  "probability": 1,
                  "unique": 2,
                  "has_duplicates": true
                }
              ],
              "total_count": 23,
              "type": "String",
              "has_duplicates": true,
              "probability": 1
            },
            {
              "name": "srcMAC",
              "path": "data.srcMAC",
              "count": 23,
              "types": [
                {
                  "name": "String",
                  "bsonType": "String",
                  "path": "data.srcMAC",
                  "count": 23,
                  "values": [
                    "00:24:c6:13:48:4e",
                    "00:24:c6:13:48:4e",
                    "00:24:c6:13:48:4e",
                    "00:24:c6:13:48:4e",
                    "00:24:c6:13:48:4e",
                    "00:24:c6:13:48:4e",
                    "00:24:c6:13:48:4e",
                    "00:24:c6:13:48:4e",
                    "00:24:c6:13:48:4e",
                    "00:24:c6:13:48:4e",
                    "00:24:c6:13:48:4e",
                    "00:24:c6:13:48:4e",
                    "00:24:c6:13:48:4e",
                    "00:24:c6:13:48:4e",
                    "00:24:c6:13:48:4e",
                    "00:24:c6:13:48:4e",
                    "00:24:c6:13:48:4e",
                    "00:24:c6:13:48:4e",
                    "00:24:c6:13:48:4e",
                    "00:24:c6:13:48:4e",
                    "00:24:c6:13:48:4e",
                    "00:24:c6:13:48:4e",
                    "00:24:c6:13:48:4e"
                  ],
                  "total_count": 0,
                  "probability": 1,
                  "unique": 1,
                  "has_duplicates": true
                }
              ],
              "total_count": 23,
              "type": "String",
              "has_duplicates": true,
              "probability": 1
            },
            {
              "name": "time",
              "path": "data.time",
              "count": 23,
              "types": [
                {
                  "name": "String",
                  "bsonType": "String",
                  "path": "data.time",
                  "count": 23,
                  "values": [
                    "20:24:16",
                    "20:24:16",
                    "20:24:16",
                    "20:24:16",
                    "20:24:16",
                    "20:24:16",
                    "20:24:16",
                    "20:24:16",
                    "18:53:16",
                    "20:24:16",
                    "20:24:16",
                    "18:57:16",
                    "20:24:16",
                    "20:24:16",
                    "20:24:16",
                    "18:50:16",
                    "20:24:16",
                    "20:24:16",
                    "20:24:16",
                    "20:24:16",
                    "20:24:16",
                    "20:24:16",
                    "20:24:16"
                  ],
                  "total_count": 0,
                  "probability": 1,
                  "unique": 4,
                  "has_duplicates": true
                }
              ],
              "total_count": 23,
              "type": "String",
              "has_duplicates": true,
              "probability": 1
            }
          ],
          "total_count": 0,
          "probability": 0.9583333333333334
        },
        {
          "name": "Undefined",
          "type": "Undefined",
          "path": "data",
          "count": 1,
          "total_count": 0,
          "probability": 0.041666666666666664,
          "unique": 1,
          "has_duplicates": false
        }
      ],
      "total_count": 24,
      "type": [
        "Document",
        "Undefined"
      ],
      "has_duplicates": false,
      "probability": 0.9583333333333334
    },
    {
      "name": "date",
      "path": "date",
      "count": 1,
      "types": [
        {
          "name": "Undefined",
          "type": "Undefined",
          "path": "date",
          "count": 23,
          "total_count": 0,
          "probability": 0.9583333333333334,
          "unique": 1,
          "has_duplicates": true
        },
        {
          "name": "String",
          "bsonType": "String",
          "path": "date",
          "count": 1,
          "values": [
            "01-01-1969"
          ],
          "total_count": 0,
          "probability": 0.041666666666666664,
          "unique": 1,
          "has_duplicates": false
        }
      ],
      "total_count": 24,
      "type": [
        "Undefined",
        "String"
      ],
      "has_duplicates": true,
      "probability": 0.041666666666666664
    },
    {
      "name": "datetime",
      "path": "datetime",
      "count": 23,
      "types": [
        {
          "name": "String",
          "bsonType": "String",
          "path": "datetime",
          "count": 23,
          "values": [
            "Aug 19 20:24:16",
            "Aug 19 20:24:16",
            "Aug 19 20:24:16",
            "Aug 19 20:24:16",
            "Aug 19 20:24:16",
            "Aug 19 20:24:16",
            "Aug 19 20:24:16",
            "Aug 19 20:24:16",
            "Aug 19 18:53:16",
            "Aug 19 20:24:16",
            "Aug 19 20:24:16",
            "Aug 19 18:57:16",
            "Aug 19 20:24:16",
            "Aug 19 20:24:16",
            "Aug 19 20:24:16",
            "Aug 19 18:50:16",
            "Aug 19 20:24:16",
            "Aug 19 20:24:16",
            "Aug 19 20:24:16",
            "Aug 19 20:24:16",
            "Aug 19 20:24:16",
            "Aug 19 20:24:16",
            "Aug 19 20:24:16"
          ],
          "total_count": 0,
          "probability": 0.9583333333333334,
          "unique": 4,
          "has_duplicates": true
        },
        {
          "name": "Undefined",
          "type": "Undefined",
          "path": "datetime",
          "count": 1,
          "total_count": 0,
          "probability": 0.041666666666666664,
          "unique": 1,
          "has_duplicates": false
        }
      ],
      "total_count": 24,
      "type": [
        "String",
        "Undefined"
      ],
      "has_duplicates": true,
      "probability": 0.9583333333333334
    },
    {
      "name": "device",
      "path": "device",
      "count": 23,
      "types": [
        {
          "name": "String",
          "bsonType": "String",
          "path": "device",
          "count": 23,
          "values": [
            "SonicWall",
            "SonicWall",
            "SonicWall",
            "SonicWall",
            "SonicWall",
            "SonicWall",
            "SonicWall",
            "SonicWall",
            "SonicWall",
            "SonicWall",
            "SonicWall",
            "SonicWall",
            "SonicWall",
            "SonicWall",
            "SonicWall",
            "SonicWall",
            "SonicWall",
            "SonicWall",
            "SonicWall",
            "SonicWall",
            "SonicWall",
            "SonicWall",
            "SonicWall"
          ],
          "total_count": 0,
          "probability": 0.9583333333333334,
          "unique": 1,
          "has_duplicates": true
        },
        {
          "name": "Undefined",
          "type": "Undefined",
          "path": "device",
          "count": 1,
          "total_count": 0,
          "probability": 0.041666666666666664,
          "unique": 1,
          "has_duplicates": false
        }
      ],
      "total_count": 24,
      "type": [
        "String",
        "Undefined"
      ],
      "has_duplicates": true,
      "probability": 0.9583333333333334
    },
    {
      "name": "dst_Interface",
      "path": "dst_Interface",
      "count": 1,
      "types": [
        {
          "name": "Undefined",
          "type": "Undefined",
          "path": "dst_Interface",
          "count": 23,
          "total_count": 0,
          "probability": 0.9583333333333334,
          "unique": 1,
          "has_duplicates": true
        },
        {
          "name": "String",
          "bsonType": "String",
          "path": "dst_Interface",
          "count": 1,
          "values": [
            "asdf"
          ],
          "total_count": 0,
          "probability": 0.041666666666666664,
          "unique": 1,
          "has_duplicates": false
        }
      ],
      "total_count": 24,
      "type": [
        "Undefined",
        "String"
      ],
      "has_duplicates": true,
      "probability": 0.041666666666666664
    },
    {
      "name": "dst_ip",
      "path": "dst_ip",
      "count": 1,
      "types": [
        {
          "name": "Undefined",
          "type": "Undefined",
          "path": "dst_ip",
          "count": 23,
          "total_count": 0,
          "probability": 0.9583333333333334,
          "unique": 1,
          "has_duplicates": true
        },
        {
          "name": "String",
          "bsonType": "String",
          "path": "dst_ip",
          "count": 1,
          "values": [
            "asdf"
          ],
          "total_count": 0,
          "probability": 0.041666666666666664,
          "unique": 1,
          "has_duplicates": false
        }
      ],
      "total_count": 24,
      "type": [
        "Undefined",
        "String"
      ],
      "has_duplicates": true,
      "probability": 0.041666666666666664
    },
    {
      "name": "dst_port",
      "path": "dst_port",
      "count": 1,
      "types": [
        {
          "name": "Undefined",
          "type": "Undefined",
          "path": "dst_port",
          "count": 23,
          "total_count": 0,
          "probability": 0.9583333333333334,
          "unique": 1,
          "has_duplicates": true
        },
        {
          "name": "String",
          "bsonType": "String",
          "path": "dst_port",
          "count": 1,
          "values": [
            "1"
          ],
          "total_count": 0,
          "probability": 0.041666666666666664,
          "unique": 1,
          "has_duplicates": false
        }
      ],
      "total_count": 24,
      "type": [
        "Undefined",
        "String"
      ],
      "has_duplicates": true,
      "probability": 0.041666666666666664
    },
    {
      "name": "dstMAC",
      "path": "dstMAC",
      "count": 1,
      "types": [
        {
          "name": "Undefined",
          "type": "Undefined",
          "path": "dstMAC",
          "count": 23,
          "total_count": 0,
          "probability": 0.9583333333333334,
          "unique": 1,
          "has_duplicates": true
        },
        {
          "name": "String",
          "bsonType": "String",
          "path": "dstMAC",
          "count": 1,
          "values": [
            "asdf"
          ],
          "total_count": 0,
          "probability": 0.041666666666666664,
          "unique": 1,
          "has_duplicates": false
        }
      ],
      "total_count": 24,
      "type": [
        "Undefined",
        "String"
      ],
      "has_duplicates": true,
      "probability": 0.041666666666666664
    },
    {
      "name": "fw",
      "path": "fw",
      "count": 1,
      "types": [
        {
          "name": "Undefined",
          "type": "Undefined",
          "path": "fw",
          "count": 23,
          "total_count": 0,
          "probability": 0.9583333333333334,
          "unique": 1,
          "has_duplicates": true
        },
        {
          "name": "String",
          "bsonType": "String",
          "path": "fw",
          "count": 1,
          "values": [
            "asdf"
          ],
          "total_count": 0,
          "probability": 0.041666666666666664,
          "unique": 1,
          "has_duplicates": false
        }
      ],
      "total_count": 24,
      "type": [
        "Undefined",
        "String"
      ],
      "has_duplicates": true,
      "probability": 0.041666666666666664
    },
    {
      "name": "m",
      "path": "m",
      "count": 1,
      "types": [
        {
          "name": "Undefined",
          "type": "Undefined",
          "path": "m",
          "count": 23,
          "total_count": 0,
          "probability": 0.9583333333333334,
          "unique": 1,
          "has_duplicates": true
        },
        {
          "name": "String",
          "bsonType": "String",
          "path": "m",
          "count": 1,
          "values": [
            "1"
          ],
          "total_count": 0,
          "probability": 0.041666666666666664,
          "unique": 1,
          "has_duplicates": false
        }
      ],
      "total_count": 24,
      "type": [
        "Undefined",
        "String"
      ],
      "has_duplicates": true,
      "probability": 0.041666666666666664
    },
    {
      "name": "msg",
      "path": "msg",
      "count": 1,
      "types": [
        {
          "name": "Undefined",
          "type": "Undefined",
          "path": "msg",
          "count": 23,
          "total_count": 0,
          "probability": 0.9583333333333334,
          "unique": 1,
          "has_duplicates": true
        },
        {
          "name": "String",
          "bsonType": "String",
          "path": "msg",
          "count": 1,
          "values": [
            "asdf"
          ],
          "total_count": 0,
          "probability": 0.041666666666666664,
          "unique": 1,
          "has_duplicates": false
        }
      ],
      "total_count": 24,
      "type": [
        "Undefined",
        "String"
      ],
      "has_duplicates": true,
      "probability": 0.041666666666666664
    },
    {
      "name": "n",
      "path": "n",
      "count": 1,
      "types": [
        {
          "name": "Undefined",
          "type": "Undefined",
          "path": "n",
          "count": 23,
          "total_count": 0,
          "probability": 0.9583333333333334,
          "unique": 1,
          "has_duplicates": true
        },
        {
          "name": "String",
          "bsonType": "String",
          "path": "n",
          "count": 1,
          "values": [
            "1"
          ],
          "total_count": 0,
          "probability": 0.041666666666666664,
          "unique": 1,
          "has_duplicates": false
        }
      ],
      "total_count": 24,
      "type": [
        "Undefined",
        "String"
      ],
      "has_duplicates": true,
      "probability": 0.041666666666666664
    },
    {
      "name": "pri",
      "path": "pri",
      "count": 1,
      "types": [
        {
          "name": "Undefined",
          "type": "Undefined",
          "path": "pri",
          "count": 23,
          "total_count": 0,
          "probability": 0.9583333333333334,
          "unique": 1,
          "has_duplicates": true
        },
        {
          "name": "String",
          "bsonType": "String",
          "path": "pri",
          "count": 1,
          "values": [
            "1"
          ],
          "total_count": 0,
          "probability": 0.041666666666666664,
          "unique": 1,
          "has_duplicates": false
        }
      ],
      "total_count": 24,
      "type": [
        "Undefined",
        "String"
      ],
      "has_duplicates": true,
      "probability": 0.041666666666666664
    },
    {
      "name": "protocol",
      "path": "protocol",
      "count": 1,
      "types": [
        {
          "name": "Undefined",
          "type": "Undefined",
          "path": "protocol",
          "count": 23,
          "total_count": 0,
          "probability": 0.9583333333333334,
          "unique": 1,
          "has_duplicates": true
        },
        {
          "name": "String",
          "bsonType": "String",
          "path": "protocol",
          "count": 1,
          "values": [
            "asdf"
          ],
          "total_count": 0,
          "probability": 0.041666666666666664,
          "unique": 1,
          "has_duplicates": false
        }
      ],
      "total_count": 24,
      "type": [
        "Undefined",
        "String"
      ],
      "has_duplicates": true,
      "probability": 0.041666666666666664
    },
    {
      "name": "sn",
      "path": "sn",
      "count": 1,
      "types": [
        {
          "name": "Undefined",
          "type": "Undefined",
          "path": "sn",
          "count": 23,
          "total_count": 0,
          "probability": 0.9583333333333334,
          "unique": 1,
          "has_duplicates": true
        },
        {
          "name": "String",
          "bsonType": "String",
          "path": "sn",
          "count": 1,
          "values": [
            "1"
          ],
          "total_count": 0,
          "probability": 0.041666666666666664,
          "unique": 1,
          "has_duplicates": false
        }
      ],
      "total_count": 24,
      "type": [
        "Undefined",
        "String"
      ],
      "has_duplicates": true,
      "probability": 0.041666666666666664
    },
    {
      "name": "src_Interface",
      "path": "src_Interface",
      "count": 1,
      "types": [
        {
          "name": "Undefined",
          "type": "Undefined",
          "path": "src_Interface",
          "count": 23,
          "total_count": 0,
          "probability": 0.9583333333333334,
          "unique": 1,
          "has_duplicates": true
        },
        {
          "name": "String",
          "bsonType": "String",
          "path": "src_Interface",
          "count": 1,
          "values": [
            "asdf"
          ],
          "total_count": 0,
          "probability": 0.041666666666666664,
          "unique": 1,
          "has_duplicates": false
        }
      ],
      "total_count": 24,
      "type": [
        "Undefined",
        "String"
      ],
      "has_duplicates": true,
      "probability": 0.041666666666666664
    },
    {
      "name": "src_ip",
      "path": "src_ip",
      "count": 1,
      "types": [
        {
          "name": "Undefined",
          "type": "Undefined",
          "path": "src_ip",
          "count": 23,
          "total_count": 0,
          "probability": 0.9583333333333334,
          "unique": 1,
          "has_duplicates": true
        },
        {
          "name": "String",
          "bsonType": "String",
          "path": "src_ip",
          "count": 1,
          "values": [
            "asdf"
          ],
          "total_count": 0,
          "probability": 0.041666666666666664,
          "unique": 1,
          "has_duplicates": false
        }
      ],
      "total_count": 24,
      "type": [
        "Undefined",
        "String"
      ],
      "has_duplicates": true,
      "probability": 0.041666666666666664
    },
    {
      "name": "src_port",
      "path": "src_port",
      "count": 1,
      "types": [
        {
          "name": "Undefined",
          "type": "Undefined",
          "path": "src_port",
          "count": 23,
          "total_count": 0,
          "probability": 0.9583333333333334,
          "unique": 1,
          "has_duplicates": true
        },
        {
          "name": "String",
          "bsonType": "String",
          "path": "src_port",
          "count": 1,
          "values": [
            "1"
          ],
          "total_count": 0,
          "probability": 0.041666666666666664,
          "unique": 1,
          "has_duplicates": false
        }
      ],
      "total_count": 24,
      "type": [
        "Undefined",
        "String"
      ],
      "has_duplicates": true,
      "probability": 0.041666666666666664
    },
    {
      "name": "srcMAC",
      "path": "srcMAC",
      "count": 1,
      "types": [
        {
          "name": "Undefined",
          "type": "Undefined",
          "path": "srcMAC",
          "count": 23,
          "total_count": 0,
          "probability": 0.9583333333333334,
          "unique": 1,
          "has_duplicates": true
        },
        {
          "name": "String",
          "bsonType": "String",
          "path": "srcMAC",
          "count": 1,
          "values": [
            "asdf"
          ],
          "total_count": 0,
          "probability": 0.041666666666666664,
          "unique": 1,
          "has_duplicates": false
        }
      ],
      "total_count": 24,
      "type": [
        "Undefined",
        "String"
      ],
      "has_duplicates": true,
      "probability": 0.041666666666666664
    },
    {
      "name": "time",
      "path": "time",
      "count": 1,
      "types": [
        {
          "name": "Undefined",
          "type": "Undefined",
          "path": "time",
          "count": 23,
          "total_count": 0,
          "probability": 0.9583333333333334,
          "unique": 1,
          "has_duplicates": true
        },
        {
          "name": "String",
          "bsonType": "String",
          "path": "time",
          "count": 1,
          "values": [
            "asdf"
          ],
          "total_count": 0,
          "probability": 0.041666666666666664,
          "unique": 1,
          "has_duplicates": false
        }
      ],
      "total_count": 24,
      "type": [
        "Undefined",
        "String"
      ],
      "has_duplicates": true,
      "probability": 0.041666666666666664
    }
  ],
});

export default model('log', logs_fw)
