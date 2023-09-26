/* import { emojify } from "npm:node-emoji@2";

console.log(emojify(":t-rex: :heart:  NPM")); */

import express from "npm:express@^4.17";

const app = express()

app.get('/', function (req, res) {
    res.send('Hello World')
})

app.listen(3000)