const express = require('express');
const cors = require('cors');
const compiler = require('vue-template-compiler');
const { compileTemplate } = require('@vue/component-compiler-utils');
const fs = require('fs');

app = express();
app.use(cors());

app.get('/test', (req, res) => {
  const vueFileContent = fs.readFileSync('./src/component-files/test.vue', 'utf8')

  const compiled = compileTemplate({
    source: vueFileContent,
    compiler: compiler,
    filename: 'example.vue',
    isProduction: false,
    isFunctional: false
  });

  console.log(compiled['code'])

  res.send(vueFileContent);
});

app.listen(9898);
