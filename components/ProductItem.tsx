interface ProductItemProps {
  product: {
    id: number
    price: number
    title: string
  }
}

export function ProductItem({ product }: ProductItemProps) {
  return (
    <div>
      { product.title } = <strong>{ String(product.price).replace('.', ',') }</strong>
    </div>
  )
}