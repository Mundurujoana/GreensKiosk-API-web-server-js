

   let products = document.getElementById('products');
   let fruits= document.getElementById('fruList');
   let vegetables = document.getElementById('vegList');
   

   //products
    const getProducts = fetch("http://localhost:5000/products")
    getProducts
    .then((res) =>{
        return res.json()
    })
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
    });

   


//fruits
    const getFruits = fetch("http://localhost:5000/products/fruits")
    getFruits
    .then((res) =>{
        return res.json()
    })
    .then((jsData) =>{
    let fruitData = jsData
    fruitData.map( x => {
        let li = document.createElement('li');
        li.innerHTML = `${x.name}`;
        fruits.appendChild(li);
    });
    })
    .catch((err) => {
        console.error(err);
    })

 


 //vegetables
 const getVegatables = fetch("http://localhost:5000/products/vegetables")
 getVegatables
 .then((res) =>{
     return res.json()
 })
 .then((jsData) =>{
 let vegData = jsData
 vegData.map( x => {
     let li = document.createElement('li');
     li.innerHTML = `${x.name}`;
     vegetables.appendChild(li);
 });
 })
 .catch((err) => {
     console.error(err);
 })
 