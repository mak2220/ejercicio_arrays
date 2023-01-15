const compra = ["carne", "manzanas", "arroz", "yogourt", "leche"];

compra.push("Aceite de Girasol");

compra.pop("Aceite de Girasol");

const películas = [
    {título:"Contracara",
     director:"Jhon Woo",
     fecha: new Date(2000, 07, 01)},
    {título:"Ocean´s 11", 
     director:"Mark Sodeberg", 
     fecha: new Date(2012, 09, 19)},
    {título:"Tonto y Retonto", 
     director:"Farrelly Brothers", 
     fecha: new Date(1998, 05, 25)},
]

const películasNuevas = películas.filter(obj => obj.fecha >= new Date(2010,00,01));

const directores = películas.map((value)=>value.director);

const título = películas.map((value)=>value.título);

const películasYDirectoresUsandoConcat = directores.concat(título);

const películasYDirectoresUsandoPropagacion = [...directores,...título];


