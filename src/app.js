/* eslint-disable */
import "bootstrap";
import "./style.css";

import "./assets/img/rigo-baby.jpg";
import "./assets/img/4geeks.ico";

let pronoun = ["the", "our"];
let adj = ["great", "big"];
let noun = ["jogger", "racoon"];
let extensions = [".com", ".net", ".us", ".io"];

for (let p of pronoun) {
  for (let a of adj) {
    for (let n of noun) {
      for (let ext of extensions) {
        console.log(`${p}${a}${n}${ext}`);
      }
    }
  }
}
