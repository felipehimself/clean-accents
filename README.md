<p align="center"> <h1 align="center">clean-accents</h1></p>

<p align="center">
<a href="https://github.com/felipehimself" rel="nofollow"><img src="https://img.shields.io/badge/created%20by-@felipehimself-4BBAAB.svg" alt="Created by felipehimself"></a>
<a href="https://opensource.org/licenses/MIT" rel="nofollow"><img src="https://img.shields.io/github/license/felipehimself/clean-accents" alt="License"></a>
</p>

## Introduction

A light weight tiny package for cleaning accents from string.

## Motivation

Node.js projects can often become overloaded with dependencies, which can lead to performance issues. This package aims to remain as lightweight as possible to help mitigate such problems.

## Installation

```bash
npm install clean-accents
# or
yarn add clean-accents
```

## Features

| function                | argument | return type | description                                          |
| ----------------------- | -------- | ----------- | ---------------------------------------------------- |
| cleanAccents.clean(str) | string   | string      | returns a given string without accents               |
| cleanAccents.has(str)   | string   | boolean     | returns true if it has accent or false if it doesn't |

## Usage

### Cleaning accents

```
import { cleanAccents } from "clean-accents";
// or
const { cleanAccents } = require("clean-accents");


const str = `àáâãäåāăąèéêëēėęěìíîïīįòóôõöōőùúûüūůűýÿçćčďğģńñňřśšşťžźżÀÁÂÃÄÅĀĂĄÈÉÊËĒĖĘĚÌÍÎÏĪĮÒÓÔÕÖŌŐÙÚÛÜŪŮŰÝŸÇĆČĎĞĢŃÑŇŘŚŠŞŤŽŹŻ`

const stringWithNoaccent = cleanAccents.clean(str)

console.log(stringWithNoaccent)

// output
aaaaaaaaaeeeeeeeeiiiiiiooooooouuuuuuuyycccdggnnnrssstzzzAAAAAAAAAEEEEEEEEIIIIIIOOOOOOOUUUUUUUYYCCCDGGNNNRSSSTZZZ

```

### Checking if has accents

```
import { cleanAccents } from "clean-accents";
// or
const { cleanAccents } = require("clean-accents");


const str = `àáâãäåāăąèéêëēėęěìíîïīįòóôõöōőùúûüūůűýÿçćčďğģńñňřśšşťžźżÀÁÂÃÄÅĀĂĄÈÉÊËĒĖĘĚÌÍÎÏĪĮÒÓÔÕÖŌŐÙÚÛÜŪŮŰÝŸÇĆČĎĞĢŃÑŇŘŚŠŞŤŽŹŻ`
const strHasAccent = cleanAccents.has(str)
console.log(strHasAccent) // outputs true

const str2 = 'some random string'
const string2HasAccent = cleanAccents.has(str2)
console.log(string2HasAcent) // outputs false
```
