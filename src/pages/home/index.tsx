import {
  CoffeeListContainer,
  Detail,
  DetailsContainer,
  FirstSection,
  FirstSectionContent,
  HomeContainer,
  MainContainer,
} from './styles'
import imgCoffeeDelivery from '../../assets/coffee-delivery-picture.png'
import { Timer, ShoppingCart, Package, Coffee } from 'phosphor-react'
import { CoffeeCard } from './components/CoffeeCard'

import { coffeesList } from '../../data'

export function Home() {
  return (
    <HomeContainer>
      <FirstSection>
        <FirstSectionContent>
          <h1>Encontre o café perfeito para qualquer hora do dia</h1>
          <p>
            Com o Coffee Delivery você recebe seu café onde estiver, a qualquer
            hora
          </p>
          <DetailsContainer>
            <div>
              <Detail detailColor="orange">
                <span>
                  <ShoppingCart weight="fill" size={16} />
                </span>
                Compra simprres e segura
              </Detail>

              <Detail detailColor="yellow">
                <span>
                  <Timer weight="fill" size={16} />
                </span>
                Entrega rápida e rastreada
              </Detail>
            </div>
            <div>
              <Detail detailColor="gray">
                <span>
                  <Package weight="fill" size={16} />
                </span>
                Embalagem mantém o café
              </Detail>

              <Detail detailColor="purple">
                <span>
                  <Coffee weight="fill" size={16} />
                </span>
                O café chega fresquinho até você
              </Detail>
            </div>
          </DetailsContainer>
        </FirstSectionContent>
        <img src={imgCoffeeDelivery} alt="" />
      </FirstSection>
      <MainContainer>
        <h1>Nossos cafés</h1>
        <CoffeeListContainer>
          {coffeesList.map((coffee) => (
            <CoffeeCard key={coffee.id} Coffee={coffee} />
          ))}
        </CoffeeListContainer>
      </MainContainer>
    </HomeContainer>
  )
}
