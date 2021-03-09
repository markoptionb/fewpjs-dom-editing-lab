const body = document.querySelector('body');

let node = document.createElement('h1')
let textnode = document.createTextNode('My HTML adventure')
node.appendChild(textnode)
body.appendChild(node);

let parag = document.createElement('p')
let textparag = document.createTextNode("We're writing HTML markup to display in our browser.")
parag.appendChild(textparag)
body.appendChild(parag);

parag.innerHTML = `We're writing HTML markup to display in our <strong>browser</strong>.We're basically telling computers what to do. <em>Neat!</em> We're writing <a href=\"https://developer.mozilla.org/en-US/docs/Web/HTML">HTML</a> markup to display in our <strong>browser</strong>`

const myTable = document.createElement('table')
const thead = document.createElement('tableHead')
const tbody = document.createElement('tableBody')

body.appendChild(myTable)
thead.append(myTable)
tbody.appendChild(myTable)

thead.innerHTML =
`<tr>
  <th>Element name</th>
  <th>Display value</th>
</tr>`

tbody.innerHTML = `<tr>
<td>h1</td>
<td>block</td>
</tr>
<tr>
<td>p</td>
<td>block</td>
</tr>
<tr>    
<td>strong</td>
<td>inline</td>
</tr> 
<tr>
<td>em</td>
<td>inline</td>
</tr>`


