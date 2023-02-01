let productos =[
  {
  id:1,
  nombre:"Taza de Ceramica recta",
  img:"../img/productos-servicios/productos/taza-de-ceramica.png",
  descripcion:"10 cm de alto por 8cm de diametro",
  precio:"$1500,00"
},
{
  id:2,
  nombre:"Taza termica",
  img:"../img/productos-servicios/productos/taza-termica.png",
  descripcion:"16 cm de alto por 8cm de diametro",
  precio:"$1300,00"
},
{
  id:3,
  nombre:"Taza de polimero recta",
  img:"../img/productos-servicios/productos/taza-recta-polimero.png",
  descripcion:"10 cm de alto por 8cm de diametro",
  precio:"$1600,00"
},
{
  id:4,
  nombre:"Chop",
  img:"../img/productos-servicios/productos/chop.png",
  descripcion:"10 cm de alto por 8cm de diametro",
  precio:"$1500,00"
},
{
  id:5,
  nombre:"Taza magica",
  img:"../img/productos-servicios/productos/taza-magica.png",
  descripcion:"10 cm de alto por 8cm de diametro",
  precio:"$2000,00"
},
{
  id:6,
  nombre:"Gorra Trucker",
  img:"../img/productos-servicios/productos/gorra-trucker.png",
  descripcion:"Área donde se realiza el estampado de 12 cm de ancho y 7 cm de alto",
  precio:"$1400,00"
},

{
  id:7,
  nombre:"Huesito Grande",
  img:"../img/productos-servicios/productos/huesito-grande.png",
  descripcion:"Huesito identificador para mascotas hecho de polímero, el polímero es plástico rígido sublimable de dimensiones 4cm de alto por 6cm de ancho.",
  precio:"$350"
},
{
  id:8,
  nombre:"Huesito Pequeño",
  img:"../img/productos-servicios/productos/huesito-pequeño.png",
  descripcion:"Huesito identificador para mascotas hecho de polímero, el polímero es plástico rígido sublimable de dimensiones 2.8cm de alto por 4.2cm de ancho.",
  precio:"$350"
},
{
  id:9,
  nombre:"Circulo Grande",
  img:"../img/productos-servicios/productos/circulo-grande.png",
  descripcion:"Identificador circular para mascotas hecho de polímero, el polímero es plástico rígido sublimable de dimensiones 4cm de diámetro.",
  precio:"$350"
},
{
  id:10,
  nombre:"Circulo Pequeño",
  img:"../img/productos-servicios/productos/circulo-chico.png",
  descripcion:"Identificador circular para mascotas hecho de polímero, el polímero es plástico rígido sublimable de dimensiones 3cm de diámetro.",
  precio:"$350"
},
{
  id:11,
  nombre:"Pez",
  img:"../img/productos-servicios/productos/pez.png",
  descripcion:"Identificador circular para mascotas hecho de polímero, el polímero es plástico rígido sublimable de dimensiones 4cm de ancho y 3.3cm de alto.",
  precio:"$350"
},
{
  id:12,
  nombre:"Llavero corazón",
  img:"../img/productos-servicios/productos/llavero-corazon.png",
  descripcion:"Hecho de polímero, el polímero es plástico rígido sublimable de dimensiones 5cm de ancho y 4 de alto.",
  precio:"$350"
},

]

let card =document.getElementById("card-productos");
productos.map((producto)=>{
  card.innerHTML+=`
  <div class="card col-6 col-md-4 col-lg-3 bg-light" style="width: 18rem;">
  <img src="${producto.img}" class="card-img-top" alt="${producto.nombre}">
  <div class="card-body flex-column justify-content-between">
    <h5 class="card-title text-center">${producto.nombre}</h5>
    <h5 class="card-title text-center ">${producto.precio}</h5>
    <p class="card-text">${producto.descripcion}</p>
    <button class="text-center btn btn-primary col-12 mb-auto"><i class="icon ion-md-cart me-2"></i>Añadir al carrito</button>
  </div>
</div>
  `
})