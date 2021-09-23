import { memo } from 'react'

interface ProductItemProps {
  product: {
    id: number
    price: number
    title: string
  }
}

function ProductItemComponent({ product }: ProductItemProps) {
  return (
    <div className="product-item">
      { product.title } = <strong>R$ { String(product.price.toFixed(2)).replace('.', ',') }</strong>
    </div>
  )
}

export const ProductItem = memo(ProductItemComponent, (prevProps, nextProps) => {
  return Object.is(prevProps.product, nextProps.product)
})