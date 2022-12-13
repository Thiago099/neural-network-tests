import {parse} from 'esprima'

import JSONFormatter from 'json-formatter-js'

var program = `
var min = array[0]
for (var i = 0; i < array.length; i++) {
  if (array[i] < min)
    min = array[i]
}
`;

const root = element("div").parent(document.body);




const parsed = parse(program);

var formatter = new JSONFormatter(parsed, 9999)





root
  .html(JSON.stringify(parsed, null, 4).replace(/\n/g, "<br>").replace(/ /g, "&nbsp;"))
  