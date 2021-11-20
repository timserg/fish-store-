// Fish add

let fish9 = document.createElement('li');
fish9.id = 'fish-9';
fish9.className = 'fish-list-card flex-column light';
let image = document.createElement('img');
image.src = './images/green-wrasse.jpg';
image.className = 'fish-list-card-image';
image.alt = 'fish pic';
let text = document.createElement('span');
text.innerHTML = 'Green Wrasse';
text.className = 'fish-list-card-name';
fish9.appendChild(image);
fish9.appendChild(text);
let fishs = document.getElementById('fish-list');
fishs.appendChild(fish9);

// Buttons add

let fishes = document.querySelectorAll('.fish-list-card-name');
for (let i = 0; i < fishes.length; i++) {
  let button = document.createElement('button');
  button.innerText = 'Купить';
  fishes[i].after(button);
  button.addEventListener('click',function() {
   alert(`Вы купили рыбку 🐠 ${fishes[i].innerText}`)});
  button.style.marginBottom = '10px';
}