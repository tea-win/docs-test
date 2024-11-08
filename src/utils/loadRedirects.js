const fs = require('fs');
const path = require('path');
const yaml = require('js-yaml');
function loadRedirects() {
  const yamlPath = path.resolve(__dirname, '../../redirects.yml');
  const fileContents = fs.readFileSync(yamlPath, 'utf8');
  const data = yaml.load(fileContents);

  return data.redirects.map(({ src, dst }) => ({
    from: src,
    to: dst,
  }));
}

module.exports = loadRedirects;
