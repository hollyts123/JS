const allNodes = document.body.childNodes;
let childNodesCount = 0;
let elementWithMostChildren;


for (let i = 0; i < allNodes.length; i++) {
   if (allNodes[i].childNodes.length > childNodesCount) {
      childNodesCount = allNodes[i].childNodes.length;
      elementWithMostChildren = allNodes[i];
   }
}

console.log(`The node with the most child nodes is ${elementWithMostChildren.tagName.toLowerCase()} with the id="${elementWithMostChildren.id}"`);
