const product = [
    {
        id: 1,
        img: '../img/product10.png',
        name: 'PLEYN EXTRAORDINARY MASK',
        amt: 299,
    },
    
    {
        id: 2,
        img: '../img/product11.png',
        name: 'DENIM CAP - BLACK/KHAKI',
        amt: 250,
    },
    
    {
        id: 3,
        img: '../img/product12.png',
        name: 'TOTE BAG - BLACK',
        amt: 349,
    },

    
];

let cart = JSON.parse(localStorage.getItem('cart')) || [];

const categories = [...new Set(product.map((item) => item))];
let i = 0;

document.addEventListener('DOMContentLoaded', () => {
  displaycart();

});

document.getElementById('container').innerHTML = categories
  .map((item) => {
    var { img, name, amt } = item;
    return `
            <div class='items'>
                <img src=${img}></img>
                <h4> ${name}</h4>
                 <p>₱ ${amt}.00</p>
                    <button onclick='addtocart(${i++})'>Add to cart</button>
            </div>
    `;
  })
  .join('');

function addtocart(a) {
  cart.push({ ...categories[a] });
  localStorage.setItem('cart', JSON.stringify(cart));
  added();
  displaycart();

}

function added() {
    alert("This product is added to your cart.\nPlease proceed to cart section to see your items.");
  }
function delElement(a) {
  cart.splice(a, 1);
  localStorage.setItem('cart', JSON.stringify(cart));
  displaycart();

}



function displaycart() {
  let j = 0,
    total = 0;
  document.getElementById('count').innerHTML = cart.length;
  if (cart.length == 0) {
    document.getElementById('shop').innerHTML = '<p>Oops...Your cart is empty</p>';
    document.getElementById('total').innerHTML = '₱ ' + 0 + '.00';
  } else {
    document.getElementById('shop').innerHTML = cart
      .map((items) => {
        var { img, name, amt } = items;
        total = total + amt;
        document.getElementById('total').innerHTML = '₱ ' + total + '.00';
        return `
          <div class='box'>
            <div class='row-img'>
              <img class='rowimg' src=${img}>
            </div>
        <div class = 'content'>
            <h3>${name}</h3>
            <h4>₱ ${amt}.00</h4>
            <button class ='btn-area' onclick='delElement(${j++})'> <ion-icon name="trash"></ion-icon>Remove </button>
        </div>
            </div>
        `;
      })
      .join('');
  } 
}

