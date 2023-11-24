const elementsWithChangedStyle = document.getElementsByTagName("p");
for (let i = 0; i < elementsWithChangedStyle.length; i++) {
   if (i % 2 !== 0) {
      elementsWithChangedStyle[i].style.fontSize = "24px";
      elementsWithChangedStyle[i].style.color = "yellow";
      elementsWithChangedStyle[i].style.backgroundColor = "pink";
      elementsWithChangedStyle[i].style.border = "2px dashed red";
   }
}
