interface ProductItemProps {
  product: {
    id: number
    price: number
    title: string
  }
}

export function ProductItem({ product }: ProductItemProps) {
  return (
    <div className="product-item">
      { product.title } = <strong>R$ { String(product.price).replace('.', ',') }</strong>
    </div>
  )
}