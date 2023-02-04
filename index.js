const Product = ({ product, amount, unit, done }) => {
  return `
    <div class="shopping-item">
      <div class="product">${product}</div>
      <div class="amount">${amount} ${unit}</div>
      <div class="done">${done ? 'koupeno' : 'ještě koupit'}</div>
    </div>
  `;
};

const ShoppingList = (items) => {
  document.querySelector('.shopping-list').innerHTML = items.map((item) => {
    return Product(item);
  }).join('');
}

const handleSubmit = (e) => {
  e.preventDefault();

  const productName = document.querySelector('#name-input').value;
  const newProduct = {
    product: productName,
    amount: 1,
    unit: 'ks',
    done: false,
  };
  
  // funguje pouze pokud máme data přímo v proměnné
//items.push(newProduct);
//ShoppingList();
};

document.querySelector('form').addEventListener('submit', handleSubmit);

fetch('https://apps.kodim.cz/daweb/shoplist/api/weeks/0/mon')
  .then((resp) => resp.json())
  .then((data) => ShoppingList(data.results.items));
//