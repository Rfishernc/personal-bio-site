function writeToDom(string, divId) {
  const div = document.getElementById(divId);
  div.innerHTML = string;
}

export default { writeToDom };
