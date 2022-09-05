/* Create a function named changeMode:

It accepts 5 arguments size (number), weight (string), transform (string), background (string), color (string)
Using closure, it changes the style of the entire page and set the font-size, font-weight, text-transform, background-color, and color
Write a function named main:

Set a variable named spooky that passes the arguments 9, bold, uppercase, pink, green to changeMode
Set a variable named darkMode that passes the arguments 12, bold, capitalize, black, white to changeMode
Set a variable named screamMode that passes the arguments 12, normal, lowercase, white, black to changeMode
Add a paragraph to the body of the page with the text Welcome Holberton!
Add a button to the body with the text Spooky
Add a button to the body with the text Dark mode
Add a button to the body with the text Scream mode
When clicking on each button, the page CSS should change to the different themes you created previously
Call the main function */


function changeMode(size, weight, transform, background, color) {
  document.documentElement.style['font-size'] = size;
  document.documentElement.style['font-weight'] = weight;
  document.documentElement.style['text-transform'] = transform;
  document.documentElement.style['background-color'] = background;
  document.documentElement.style['color'] = color;
}

function main() {
  let spooky = changeMode(9, bold, uppercase, pink, green);
  let darkMode = changeMode(12, bold, capitalize, black, white);
  let screamMode = changeMode(12, normal, lowercase, white, black);
  let paragraph = document.createElement('p');
  paragraph.appendChild(document.createTextNode('Welcome Holberton!'));

  let spookyButton = document.createElement('button');
  spookyButton.createTextNode('Spooky');
  spookyButton.setAttribute('onClick', spooky());

  let darkButton = document.createElement('button');
  darkButton.createTextNode('Dark Mode');
  darkButton.setAttribute('onClick', darkMode());

  let screamButton = document.createElement('button');
  screamButton.createTextNode('Scream Mode');
  screamButton.setAttribute('onClick', screamMode());
}

window.onload = main();
