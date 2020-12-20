const fs = require("fs");
const path = require("path");

let products = fs.readFileSync(path.resolve(__dirname, "../data/productsDataBase.json"));






let indexControllers = {
  index: function (req, res, next) {

    let productsObject = JSON.parse(products);


    /*Filter*/
/*     let productsObjectFiltradosInsale = productsObject.filter(function(producto) {
            return producto.category == "in-sale"
    })

    let productsObjectFiltradosVisited = productsObject.filter(function(producto) {
      return producto.category == "visited"
})


    

    res.render('index', {productsObjectFiltradosInsale, productsObjectFiltradosVisited}); */


/*Con Reduce*/
/*     let data  = productsObject.reduce(function(result, producto) {

      if (producto.category=="visited") {
        result.visited.push(producto)
       } else {
        result.inSale.push(producto)
       }

       return result;

    }, {inSale: [], visited: []} valor como predeterminado)


    res.render("index", {data})

  } */

let data = {insale:[], visited:[]}

productsObject.forEach(product => {
  if (product.category == "visited") {
    data.visited.push(product)
  }
  else {
    data.insale.push(product)
  }
});

res.render("index", {data})

}

}

module.exports = indexControllers;