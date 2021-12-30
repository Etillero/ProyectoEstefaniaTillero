/*

function calcularPresupuesto ( servUsuario , dUsuario){
    let cotizar;
    if (servUsuario == "CARTAS"){
        cotizar = carta * dUsuario;
        return cotizar
    }
  
    else if (servUsuario == "HISTORIETAS"){
        cotizar = histo * dUsuario;
        return cotizar
    }
  
    else if (servUsuario == "DISFRACES"){
        cotizar = disfra * dUsuario;
        return cotizar
    }
  
    else if (servUsuario == "SOUVENIRS"){
        cotizar = sou * dUsuario;
        return cotizar
    }
  }
  
  function calcularcuotas ( presupuesto , pagocuotas ){
    let cuotas;
  
    let cuotaslistadas = [
      { descripcion: "cuota6" , cantidad: 6 , interes: 0 },
      { descripcion: "cuota3" , cantidad: 3 , interes: 0.10 },
      { descripcion: "cuota12" , cantidad: 12 , interes: 0.16 },
      { descripcion: "cuota18" , cantidad: 18 , interes: 0.21 },
     ] 

  cuotaslistadas.sort(((a, b) => a.cantidad - b.cantidad));
  console.log(cuotaslistadas);
     

  const arrayCuotas = [6,3,12,18];
  
    if( pagocuotas == arrayCuotas[0]){
        cuotas = presupuesto / arrayCuotas[0];
        return cuotas
    }
  
    else if( pagocuotas == arrayCuotas[1]){
        cuotas = (presupuesto + (presupuesto * 0.10)) / arrayCuotas[1];
        return cuotas
    }
  
    else if (pagocuotas == arrayCuotas[2]){
        cuotas = (presupuesto + (presupuesto * 0.16)) / arrayCuotas[2];
        return cuotas
    }
  
    else if (pagocuotas == arrayCuotas[3]){
        cuotas = (presupuesto + (presupuesto * 0.21)) / arrayCuotas[3];
        return cuotas
    }
  
     }
  
  class servicios{ 
    constructor( nombre,costoproducto,cantidad) {
  
    this.nombre = nombre;
    this.costoproducto = costoproducto;
    this.cantidad = cantidad;
  }
    acomprar () {
        alert("El producto seleccionado a cotirzar es: " + this.nombre + ". " + "por: " + this.costoproducto + "regalos")
        
    }    
  
      }

  
      let cartas = new servicios ("Cartas",900,30);
      let historietas = new servicios ("Historietas",2000,50);
      let disfraces = new servicios ("Disfraces",8000,40);
      let souvenirs = new servicios ("Souvenirs",1800,30);


  
  
  alert("Cotiza tus regalos aqui");
  
  let carta = 900;
  let histo = 2000;
  let disfra = 8000;
  let sou = 1800;
  
  
  let servUsuario = prompt("Indique el servicio a cotizar (Cartas / Historietas / Disfraces/ Souvenirs") .toUpperCase();
  let dUsuario = parseInt(prompt("Indique el número de productos totales a requerir del servicio seleccionado (productos: 1, 2, 3)"));
  
  let serviciousuario = new servicios (servUsuario, dUsuario, "Star Wars");
  console.log(serviciousuario);
  serviciousuario.acomprar();
  
  let presupuesto = calcularPresupuesto ( servUsuario , dUsuario);
  
  alert("El costo total es de " + presupuesto + " pesos");
  let respUsuario = prompt("Si desea avanzar calculando las cuotas disponibles con tarjeta VISA por favor indicar SI, caso contrario indicar ESC").toUpperCase();
  
  if (respUsuario == "SI"){
    let pagocuotas = parseInt(prompt("Ingrese la cuota deseada (Sin interes: 6) (Con interes: 3, 12, 18)"));
    let cuotaspedidas = calcularcuotas ( presupuesto , pagocuotas );
    alert("Las cuotas te quedan en: " + cuotaspedidas + " pesos");
    
  }
  
  else if(respUsuario == "ESC" || respUsuario != "SI"){
    alert("Hasta pronto")
  }
*/

const addToShoppingCartButtons = document.querySelectorAll('.addToCart');
addToShoppingCartButtons.forEach((addToCartButton) => {
  addToCartButton.addEventListener('click', addToCartClicked);
});

const comprarButton = document.querySelector('.comprarButton');
comprarButton.addEventListener('click', comprarButtonClicked);


const shoppingCartItemsContainer = document.querySelector(
  '.shoppingCartItemsContainer'
);

function addToCartClicked(event) {
  const button = event.target;
  const item = button.closest('.item');

  const itemTitle = item.querySelector('.item-title').textContent;
  const itemPrice = item.querySelector('.item-price').textContent;
  const itemImage = item.querySelector('.item-image').src;

  addItemToShoppingCart(itemTitle, itemPrice, itemImage);
}


function addItemToShoppingCart(itemTitle, itemPrice, itemImage) {
  const elementsTitle = shoppingCartItemsContainer.getElementsByClassName(
    'shoppingCartItemTitle'
  );

  console.log(itemTitle);
  console.log(itemPrice);
  console.log(itemImage);

  for (let i = 0; i < elementsTitle.length; i++) {
    if (elementsTitle[i].innerText === itemTitle) {
      let elementQuantity = elementsTitle[
        i
      ].parentElement.parentElement.parentElement.querySelector(
        '.shoppingCartItemQuantity'
      );
      elementQuantity.value++;
      $('.toast').toast('show');
      updateShoppingCartTotal();
      return;
    }
  }


  const shoppingCartRow = document.createElement('div');
  const shoppingCartContent = `
  <div class="row shoppingCartItem">
        <div class="col-6">
            <div class="shopping-cart-item d-flex align-items-center h-100 border-bottom pb-2 pt-3">
                <img src=${itemImage} class="shopping-cart-image">
                <h6 class="shopping-cart-item-title shoppingCartItemTitle text-truncate ml-3 mb-0">${itemTitle}</h6>
            </div>
        </div>
        <div class="col-2">
            <div class="shopping-cart-price d-flex align-items-center h-100 border-bottom pb-2 pt-3">
                <p class="item-price mb-0 shoppingCartItemPrice">${itemPrice}</p>
            </div>
        </div>
        <div class="col-4">
            <div
                class="shopping-cart-quantity d-flex justify-content-between align-items-center h-100 border-bottom pb-2 pt-3">
                <input class="shopping-cart-quantity-input shoppingCartItemQuantity" type="number"
                    value="1">
                <button class="btn btn-danger buttonDelete" type="button">X</button>
            </div>
        </div>
    </div>`;
  shoppingCartRow.innerHTML = shoppingCartContent;
  shoppingCartItemsContainer.append(shoppingCartRow);

  shoppingCartRow
    .querySelector('.buttonDelete')
    .addEventListener('click', removeShoppingCartItem);

  shoppingCartRow
    .querySelector('.shoppingCartItemQuantity')
    .addEventListener('change', quantityChanged);

  updateShoppingCartTotal();
}

function updateShoppingCartTotal() {
  let total = 0;
  const shoppingCartTotal = document.querySelector('.shoppingCartTotal');

  const shoppingCartItems = document.querySelectorAll('.shoppingCartItem');

  shoppingCartItems.forEach((shoppingCartItem) => {
    const shoppingCartItemPriceElement = shoppingCartItem.querySelector(
      '.shoppingCartItemPrice'
    );
    const shoppingCartItemPrice = Number(
      shoppingCartItemPriceElement.textContent.replace('$', '')
    );
    const shoppingCartItemQuantityElement = shoppingCartItem.querySelector(
      '.shoppingCartItemQuantity'
    );
    const shoppingCartItemQuantity = Number(
      shoppingCartItemQuantityElement.value
    );
    total = total + shoppingCartItemPrice * shoppingCartItemQuantity;
  });
  shoppingCartTotal.innerHTML = `${total.toFixed(2)}$`;
}

function removeShoppingCartItem(event) {
  const buttonClicked = event.target;
  buttonClicked.closest('.shoppingCartItem').remove();
  updateShoppingCartTotal();
}

function quantityChanged(event) {
  const input = event.target;
  input.value <= 0 ? (input.value = 1) : null;
  updateShoppingCartTotal();
}

function comprarButtonClicked() {
  shoppingCartItemsContainer.innerHTML = '';
  updateShoppingCartTotal();
}

  
