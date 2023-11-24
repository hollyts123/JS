function changeNodeProperties(nodeIdn, attribute, value, callback) {
   let node = document.getElementById(nodeIdn);
   callback(node, attribute, value);
}

function setNewProperty(node, attribute, value) {
   node.style[attribute] = value;
}

changeNodeProperties("image", "width", "300px", setNewProperty);
