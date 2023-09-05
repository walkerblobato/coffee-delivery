import CoffeeDataList from '../../../../data/coffeeData'

import { CoffeeListContainer, CoffeeListStyles } from './styles'
import { ProductCard } from '../../../../components/ProductCard'

export function CoffeeList() {
  return (
    <CoffeeListStyles>
      <h2>Nossos cafés</h2>

      <CoffeeListContainer>
        {CoffeeDataList.map((coffee, index) => (
          <ProductCard data={coffee} key={index} />
        ))}
      </CoffeeListContainer>
    </CoffeeListStyles>
  )
}
