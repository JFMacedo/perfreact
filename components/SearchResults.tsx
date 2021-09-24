import { ProductItem } from "./ProductItem";

interface SearchResultsProps {
  results: Array<{
    id: number
    price: number
    formattedPrice: string
    title: string
  }>
  totalPrice: number
  onAddToWishList: (id: number) => void
}

export function SearchResults({ results, totalPrice, onAddToWishList }: SearchResultsProps) {
  return (
    <div>
      <h2>R$ { String(totalPrice.toFixed(2)).replace(".", ",") }</h2>

      { results.map(product => (
        <ProductItem
          key={ product.id }
          product={ product }
          onAddToWishList={ onAddToWishList }
        />
      )) }
    </div>
  )
}