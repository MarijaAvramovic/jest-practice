Using Babel to Transform Modules

With this approach, WE use:

Babel

Often with babel-jest

✅ What It Does

Instead of running ES modules directly, Babel converts:

import sum from './sum.js'

into:

const sum = require('./sum.js')

So:

You write modern JS

Babel converts it to CommonJS

Jest runs it normally

👍 Pros

Extremely stable

Works perfectly with Jest

Better mocking support

Can transform other modern syntax too

Industry standard setup

👎 Cons

Adds a build/transform step

Slightly slower test startup

More configuration


Install @babel/preset-env:

npm install --save-dev @babel/preset-env
Create a babel.config.js in the project root with the following contents:

export default {
  presets: [["@babel/preset-env", { targets: { node: "current" } }]],
};