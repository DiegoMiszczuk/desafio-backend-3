
//import * as fs from 'fs';
const fs = require('fs')


class ProductManager {
  constructor(path) {
    this.products = [];
    this.path = path

    fs.writeFileSync("./productos.json", "[]");
  }


  static id = 0;

  addProduct(title, description, price, thumbnail, code, stock) {
    for (let i = 0; i < this.products.length; i++) {
      if (this.products[i].code === code) {
        console.log(`el codigo ${code} esta repetido`);
        return;
      }

    }

    const newProduct = {
      title,
      description,
      price,
      thumbnail,
      code,
      stock
    }

    if (!Object.values(newProduct).includes(undefined)) {
      ProductManager.id++;
      this.products.push({
        ...newProduct,

        id: ProductManager.id,
      }); saveProducts(this.products, "producto añadido")

    } else {
      console.log("ERROR..Complete todos los campos")
    }

  }


  getProducts = async () => {

    let productos = await fs.promises.readFile('./productos.json', 'utf-8')

    let productosConsulta = JSON.parse(productos)
    console.log(productosConsulta)


  }



  async deleteProduct(id) {
    let producto = await fs.promises.readFile(this.path, 'utf-8')
    let productoParse = JSON.parse(producto)
    try {
      const nuevoArray = productoParse.filter((ele) => {
        return ele.id !== id
      })

      saveProducts(nuevoArray, "producto eliminado")

    } catch (error) {
      console.log("error al eliminar")
    }


  }
  async getProductbyId(id) {
    let producto = await fs.promises.readFile(this.path, 'utf-8')
    let productoParse = JSON.parse(producto)
    try {
      const nuevoArray = productoParse.filter((ele) => {
        return ele.id === id
      })
      console.log(nuevoArray)

    } catch (error) {
      console.log("No se encontro el producto")
    }

  }

  async updateProduct(id, infoNew) {
    let producto = await fs.promises.readFile(this.path, 'utf-8')
    let productoParse = JSON.parse(producto)

    let updated = productoParse.map((el) => {
      if (el.id == id) {
        return { ...el, title: infoNew.title, price: infoNew.price }

      } else {
        return el
      }
    })
    saveProducts(updated, "producto actualizado")

  }
}



const saveProducts = async (el, text) => {
  try {
    await fs.promises.writeFile('./productos.json', JSON.stringify(el, null, 2), 'utf-8')
    console.log(text)
  } catch (err) {
    console.log("error al añadir producto")
  }
}

module.exports = ProductManager
 


//const productos = new ProductManager('./productos.json');
//productos.addProduct("text product", "se ingresa producto de prueba", 5000, "imagen", "abcvcvcvc123", 25);

//productos.getProducts()

 //productos.addProduct("text product", "se ingresa producto de prueba", 5000, "imagen", "abcvcvdsdsdsdcvc123", 25);

// console.log(productos.getProducts())
 //productos.addProduct("text product", "se ingresa producto de prueba", 5000, "imagen", "abcvcv4546dsdsdsdcvc123", 25);
// console.log(this.products)
//productos.deleteProduct(1)
// console.log(productos.getProducts())

//productos.getProducts()

//productos.addProduct("text product", "se ingresa producto de prueba", 5000, "imagen", "abcvcv4546dsdsdsdcvc123", 25);

//  productos.getProducts()
//productos.getProductbyId(1)
//productos.deleteProduct(1)
 //productos.updateProduct( 2,{price: 66666, title: "titulo nuevo"})