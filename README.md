<h1 align="center">Welcome to security-json-to-csv 👋</h1>
<p>
  <a href="https://img.shields.io/npm/v/security-json-to-csv" target="_blank">
    <img alt="Version" src="https://img.shields.io/npm/v/security-json-to-csv.svg">
  </a>
  <a href="https://github.com/Nandolinhares/security-json-to-csv" target="_blank">
    <img alt="Documentation" src="https://img.shields.io/badge/documentation-yes-brightgreen.svg" />
  </a>
  <a href="#" target="_blank">
    <img alt="License: MIT" src="https://img.shields.io/badge/License-MIT-yellow.svg" />
  </a>
</p>

> Lib to convert JSON to XLSX and apply password options 

### 🏠 [Homepage](https://github.com/Nandolinhares/security-json-to-csv)

### ✨ [Demo](https://github.com/Nandolinhares/security-json-to-csv)

## Install

```sh
yarn add security-json-to-csv
```

## Usage

```sh
import { CalopsitaCsv } from 'security-json-to-csv'
const values = [
  {
    name: 'teste11',
    email: 'teste21',
    password: 'teste31'
  },
  {
    name: 'teste12',
    email: 'teste22',
    password: 'teste32'
  }]
  
const calopsitaCsv = new CalopsitaCsv()
calopsitaCsv.convertJsonToCsv(values, `filename`, 'password')
```

## Author

👤 **Fernando Linhares**

* Website: https://github.com/nandolinhares
* Github: [@nandolinhares](https://github.com/nandolinhares)

## Show your support

Give a ⭐️ if this project helped you!

***
_This README was generated with ❤️ by [readme-md-generator](https://github.com/kefranabg/readme-md-generator)_