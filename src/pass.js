#!/usr/bin/env -S node

const rl = require('node:readline').createInterface({ input: process.stdin, output: process.stdout});

async function generatePass() {
    const chars = () => {return new Promise((resolve, reject) => {
      rl.question('Chars:', r => {
      if (typeof Number(r) !== 'number') return reject('Not a valid number');
      resolve(r)
    })
    })}
    const ch = await chars();
    let pass = '';
    let str = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ' +
        'abcdefghijklmnopqrstuvwxyz0123456789@#$&*!%';

    for (let i = 1; i <= ch; i++) {
        let char = Math.floor(Math.random()
            * str.length + 1);

        pass += str.charAt(char)
    }

    console.log(pass);
  rl.close();
}
