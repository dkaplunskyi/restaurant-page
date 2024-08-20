import saladImgSrc_1 from '../images/salad-1.jpg';
import saladImgSrc_2 from '../images/salad-2.jpg';
import saladImgSrc_3 from '../images/salad-3.jpg';
import saladImgSrc_4 from '../images/salad-4.jpg';
import saladImgSrc_5 from '../images/salad-5.jpg';

class Salad {
  constructor(name, about, src, price) {
    this.name = name;
    this.about = about;
    this.imgSrc = src;
    this.price = price;
  }

}

const caesarSalad = new Salad('Caesar', 'A Caesar salad is a classic salad typically made with romaine lettuce, croutons, Parmesan cheese, and Caesar dressing. The dressing is usually a creamy blend of ingredients like egg yolk, olive oil, lemon juice, Worcestershire sauce, anchovies, garlic, Dijon mustard, and black pepper. Some variations also include grilled chicken, bacon, or shrimp to make it a more substantial meal.', saladImgSrc_1, '$15');
const greekSalad = new Salad('Greek', 'A Greek salad is a vibrant and refreshing dish popular in Mediterranean cuisine. It typically features fresh, ripe tomatoes and crisp cucumbers, often paired with thinly sliced red onions and briny Kalamata olives. The salad is topped with generous chunks or crumbles of feta cheese, which adds a rich, tangy flavor. Green bell peppers are sometimes included for extra crunch, and capers may be added for a tangy bite.', saladImgSrc_2, '$18');
const capreseSalad = new Salad('Caprese', 'A Caprese salad is a simple yet elegant Italian dish that highlights the freshness of its ingredients. It consists of ripe tomatoes and fresh mozzarella cheese, both sliced into rounds and arranged in an alternating pattern. Fresh basil leaves are interspersed between the tomato and mozzarella slices, adding a fragrant and flavorful element to the salad.', saladImgSrc_3, '$13');
const cobbSalad = new Salad('Cobb', 'A Cobb salad is a hearty American salad that combines a variety of flavors and textures. It traditionally includes a base of mixed greens, such as romaine, iceberg lettuce, and watercress. On top of the greens, a variety of ingredients are arranged in neat rows or sections. These typically include diced grilled or roasted chicken breast, crispy bacon, hard-boiled eggs, avocado, tomatoes, and crumbled blue cheese.', saladImgSrc_4, '$17');
const waldorfSalad = new Salad('Waldorf', 'A Waldorf salad is a classic American salad that offers a delightful mix of sweet and savory flavors. It was originally created in the late 19th century at the Waldorf-Astoria Hotel in New York City. The salad traditionally consists of fresh, crisp apples and crunchy celery, both chopped into bite-sized pieces. These are mixed with juicy grapes and walnuts, which add a sweet and nutty flavor.', saladImgSrc_5, '$11');

function createMenuElement(obj) {
  const item = document.createElement('div');
  const wrapper = document.createElement('div');

  const header = document.createElement('h2');
  const about = document.createElement('p');
  const img = document.createElement('img');
  const price = document.createElement('h3');

  header.textContent = obj.name;
  about.textContent = obj.about;
  img.src = obj.imgSrc;
  price.textContent = `Price: ${obj.price}`;
  price.classList.add('price');

  wrapper.append(header, about, price);
  wrapper.classList.add('wrapper');

  item.append(img, wrapper);
  item.classList.add('item');

  return item;
}

const caesar = createMenuElement(caesarSalad);
const greek = createMenuElement(greekSalad);
const caprese = createMenuElement(capreseSalad);
const cobb = createMenuElement(cobbSalad);
const waldord = createMenuElement(waldorfSalad);


const menu_page = document.createElement('div');
menu_page.classList.add('menu-page');

menu_page.append(caesar, greek, caprese, cobb, waldord);


export { menu_page };