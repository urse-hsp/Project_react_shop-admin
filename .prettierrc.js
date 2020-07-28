const fabric = require('@umijs/fabric');

module.exports = {
  ...fabric.prettier,
  // "tabWidth": 2,
  "printWidth": 150,
  // 使用分号, 默认true
  "semi": false,
  // 单引号
  "singleQuote": true
};
