function getElementWidth (content, padding, border) {
  const conNumber = Number.parseFloat(content);
  const padNumber = Number.parseFloat(padding);
  const borNumber = Number.parseFloat(border);
return conNumber+ 2 * padNumber + 2 * borNumber;

}

console.log(getElementWidth("50px", "8px", "4px"));
console.log(getElementWidth("60px", "12px", "8.5px"));
console.log(getElementWidth("200px", "0px", "0px"));