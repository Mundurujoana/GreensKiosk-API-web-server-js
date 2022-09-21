

   let products = document.getElementById('products');
   let fruits= document.getElementById('fruList');
   let vegetables = document.getElementById('vegList');
   

   //products
  let fetchProducts = async () => {
    const res = await fetch("http://localhost:5000/products");
    const resProducts = await res.json();
    return resProducts;
}
fetchProducts()
    .then((jsData) =>{
    let prodData = jsData
    prodData.map( x => {
        let li = document.createElement('li')
        li.innerHTML = `${x.name}`
        products.appendChild(li)
    })
    })
    .catch((err) => {
        console.error(err);
    })



//fruits
let fetchFruits  = async () => {
    const res = await fetch("http://localhost:5000/products/fruits");
    const resFruits = await res.json();
    return resFruits;
}
fetchFruits()
    .then((jsData) =>{
    let fruitData = jsData
    fruitData.map( x => {
        let li = document.createElement('li');
        li.innerHTML = `${x.name}`;
        fruits.appendChild(li);
    })
    })
    .catch((err) => {
        console.error(err);
    })



 //vegetables
 let fetchVegatables  = async () => {
    const res = await fetch("http://localhost:5000/products/vegetables");
    const resVegatables = await res.json();
    return resVegatables;
}
fetchVegatables()
 .then((jsData) =>{
 let vegData = jsData
 vegData.map( x => {
     let li = document.createElement('li');
     li.innerHTML = `${x.name}`;
     vegetables.appendChild(li);
 })
 })
 .catch((err) => {
     console.error(err);
 })
 