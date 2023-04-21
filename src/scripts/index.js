/* Desenvolva sua lógica aqui ... */

function buttonsFilterRender(array) {
  array.forEach((element, indice) => {
    const categoryList = document.querySelector('.category__filter')
    const buttonFilter = document.createElement('button')
    buttonFilter.classList.add('filter__button')
    buttonFilter.id = indice
    buttonFilter.innerText = element
    categoryList.appendChild(buttonFilter)
  })
}
buttonsFilterRender(categories)

function productsRender(array) {
  const productsList = document.querySelector('.products__list')
  productsList.innerHTML = ''
  array.forEach(element => {

    const listProduct = document.createElement('li')
    listProduct.classList.add('list__item')
    listProduct.id = element.id
    listProduct.innerHTML =
      `
    <img src="${element.img}" alt="" class="item__image">
    <div class="item__info">
      <span class="info__author">${element.band}</span>
      <span class="info__date">${element.year}</span>
    </div>
    <h2 class="item__title">${element.title}</h2>
    <div class="item__price">
      <h2 class="price__value">R$ ${element.price.toFixed(2)}</h2>
      <button class="price__buy">comprar</button>
    </div>
    `
    productsList.appendChild(listProduct)
  })
}
productsRender(products)


function filter(array) {
  const filterButtons = document.querySelectorAll(".filter__button")
  const productsList = document.querySelector('.products__list')
  const rangeFilter = document.querySelector('.range__filter')
  let categoryFilter = array

  filterButtons.forEach(button => {
    button.addEventListener('click', (event) => {
      event.preventDefault()
      rangeFilter.value = rangeFilter.max
      rangeValue.innerText = `até R$ ${Number(rangeFilter.value).toFixed(2)}`

      if (Number(event.target.id) === 0) {
        categoryFilter = array
      }
      else {
        categoryFilter = array.filter(product => {
          if (product.category === Number(event.target.id) && product.price) {
            return product
          }
        })
      }
      productsRender(categoryFilter)

      if (productsList.innerHTML === '') {productsList.innerHTML = `<li class="null">Nenhum album encontrado</li>`}
    })
  })

  const rangeValue = document.querySelector('.range__value')

  rangeFilter.addEventListener('input', (event) => {
    let value = event.target.value
    rangeValue.innerText = `até R$ ${Number(value).toFixed(2)}`

    let priceFilter = categoryFilter.filter(product => product.price <= value)
    productsRender(priceFilter)

    if (productsList.innerHTML === '') {productsList.innerHTML = `<li class="null">Nenhum album encontrado</li>`}
  })
}

filter(products)