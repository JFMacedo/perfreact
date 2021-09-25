import { List, ListRowRenderer } from "react-virtualized"

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
  const rowRender: ListRowRenderer = ({ index, key, style }) => {
    return (
      <div key={ key } style={ style }>
        <ProductItem
          product={ results[index] }
          onAddToWishList={ onAddToWishList }
        />
      </div>
    )
  }

  return (
    <div>
      <h2>R$ { String(totalPrice.toFixed(2)).replace(".", ",") }</h2>

      <List
        height={ 300 }
        rowHeight={ 30 }
        width={ 900 }
        overscanRowCount={ 5 }
        rowCount={ results.length }
        rowRenderer={ rowRender }
      />
      {/* { results.map(product => (
        <ProductItem
          key={ product.id }
          product={ product }
          onAddToWishList={ onAddToWishList }
        />
      )) } */}
    </div>
  )
}