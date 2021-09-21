module.exports = () => {
  const data = {
    products: []
  }
  
  for(let i = 0; i < 1000; i++) {
    data.products.push({
      id: i + 1,
      price: Number((Math.random() * 500).toFixed(1)),
      title: `Camiseta ${ i + 1 }`
    })
  }
  return data
}