const productos = [
    {
        nombre: "ACANA",
        precio: "$5.340",
        stock: 3,
        imagen: "https://static.zoomalia.com/prod_img/68481/sm_1675878a7ab84fb43402106c575658472fa1574867062.jpg"
    },
    {
        nombre: "ROYAL CANIN",
        precio: "$3.299",
        stock: 0,
        imagen: "https://static.zoomalia.com/prod_img/36666/sm_264d6baf65e0b240ce177cf70da146c8dc81575451713.jpg"
    },
    {
        nombre: "ADULT DINNER",
        precio: "$4.487",
        stock: 1,
        imagen: "https://static.zoomalia.com/prod_img/17123/sm_8877ce3284b743aefde80ffd9aec500e0851592226397.jpg"
    },
    {
        nombre: "Pelota de goma multicolor",
        precio: "$1.359",
        stock: 0,
        imagen: "https://static.zoomalia.com/prod_img/103029/sm_986fe7ee8fc1959cc7214fa21c4840dff0a1632901789.jpg"
    },
    {
        nombre: "Pelota para perros con sonido Zolia Woopy Ball",
        precio: "$2.799",
        stock: 14,
        imagen: "https://static.zoomalia.com/prod_img/41664/sm_2638c19f571e251e61cb8dd3612f26d5ecf1531488487.jpg"
    },
    {
        nombre: "Hueso de caucho muy resistente",
        precio: "$1.999",
        stock: 5,
        imagen: "https://static.zoomalia.com/prod_img/67506/sm_450f5f8590cd58a54e94377e6ae2eded4d91571137645.jpg"
    },
    {
        nombre: "Abrigo impermeable y transpirable",
        precio: "$8.789",
        stock: 10,
        imagen: "https://static.zoomalia.com/prod_img/73443/sm_4130deb1c54814305ca9ad266f53bc825111587548642.jpg"
    },
    {
        nombre: "Abrigo aislante rojo",
        precio: "$5.699",
        stock: 0,
        imagen: "https://static.zoomalia.com/prod_img/72367/sm_77386b122d4358357d834a87ce618a55de01639061532.jpg"
    },
    {
        nombre: "Botas de proteccion",
        precio: "$3.900",
        stock: 3,
        imagen: "https://static.zoomalia.com/prod_img/123967/sm_14847d1e990583c9c67424d369f3414728e1656344134.jpg"
    },
    {
        nombre: "",
        precio: "",
        stock: "",
        imagen: "https://images.hola.com/imagenes/mascotas/20211129200495/perros-inquietos-causas/1-25-713/perro-activo-t.jpg?tx=w_680"
    },
    {
        nombre: "",
        precio: "",
        stock: "",
        imagen: "https://i0.wp.com/blog.mascotaysalud.com/wp-content/uploads/2020/06/Corgi-Gales-de-Cardigan-paseando.jpg?fit=865%2C540&ssl=1"
    }
] 

function imprimirCartas(productos){  
    var stocks = productos.filter((items)=>{
        return items.stock 
        // console.log(items.stock);
    })
    var templateHtml = "";
    if(stocks.stock >= 1){
        console.log(stocks.stock);
        stocks.forEach(item =>{
           
                templateHtml += `
                    <div class="card" style="width: 20rem; margin: 1rem">
                        <img src=${item.imagen}>
                        <div class="card-body">
                            <h4 class="card-title">${item.nombre}</h5>
                            <h5 class="card-text">${item.precio}</h2>
                        </div>
                    </div>
             ` ;  
             
             document.querySelector('#card-tienda').innerHTML = templateHtml
        })
    }
    else{
        stocks.map(item =>{
                templateHtml += `
                    <div class="card" style="width: 20rem; margin: 1rem">
                        <img src=${item.imagen}>
                        <h3 class="h3-tienda">Stock agotado</h3>
                        <div class="card-body">
                            <h4 class="card-title">${item.nombre}</h5>
                            <h5 class="card-text">${item.precio}</h2>
                        </div>
                    </div>
             ` ; 
             document.querySelector('#card-tienda').innerHTML = templateHtml
        })
    }
}
imprimirCartas(productos)
