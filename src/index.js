const component = () => {
  const message = "Hello, World!";
  const element = document.createElement("div");

  element.id = "app";
  element.innerHTML = `<h1>${message}</h1>`;

  return element;
};

document.body.appendChild(component());
