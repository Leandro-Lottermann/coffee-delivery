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
import { CoffeeType } from '../../@types/Coffee.interface'

const coffeesList: CoffeeType[] = [
  {
    id: 1,
    name: 'Expresso Tradicional',
    description: 'O tradicional café feito com água quente e grãos moídos',
    price: 9.9,
    image: '/src/assets/Type=Expresso.png',
    tags: ['tradicional'],
  },
  {
    id: 2,
    name: 'Expresso Americano',
    description: 'Expresso diluído, menos intenso que o tradicional',
    price: 9.9,
    image: '/src/assets/Type=Americano.png',
    tags: ['tradicional'],
  },
  {
    id: 3,
    name: 'Expresso Cremoso',
    description: 'Café expresso tradicional com espuma cremosa',
    price: 9.9,
    image: '/src/assets/Type=Expresso Cremoso.png',
    tags: ['tradicional'],
  },
  {
    id: 4,
    name: 'Expresso Gelado',
    description: 'Bebida preparada com café expresso e cubos de gelo',
    price: 9.9,
    image: '/src/assets/Type=Café Gelado.png',
    tags: ['tradicional', 'gelado'],
  },
  {
    id: 5,
    name: 'Café com Leite',
    description: 'Meio a meio de expresso tradicional com leite vaporizado',
    price: 9.9,
    image: '/src/assets/Type=Café com Leite.png',
    tags: ['tradicional', 'com leite'],
  },
  {
    id: 6,
    name: 'Latte',
    description:
      'Uma dose de café expresso com o dobro de leite e espuma cremosa',
    price: 9.9,
    image: '/src/assets/Type=Latte.png',
    tags: ['tradicional', 'com leite'],
  },
  {
    id: 7,
    name: 'Capuccino',
    description:
      'Bebida com canela feita de doses iguais de café, leite e espuma',
    price: 9.9,
    image: '/src/assets/Type=Capuccino.png',
    tags: ['tradicional', 'com leite'],
  },
  {
    id: 8,
    name: 'Macchiato',
    description:
      'Café expresso misturado com um pouco de leite quente e espuma',
    price: 9.9,
    image: '/src/assets/Type=Macchiato.png',
    tags: ['tradicional', 'com leite'],
  },
  {
    id: 9,
    name: 'Mocaccino',
    description: 'Café expresso com calda de chocolate, pouco leite e espuma',
    price: 9.9,
    image: '/src/assets/Type=Mochaccino.png',
    tags: ['tradicional', 'com leite'],
  },
  {
    id: 10,
    name: 'Chocolate Quente',
    description:
      'Bebida feita com chocolate dissolvido no leite quente e cafés',
    price: 9.9,
    image: '/src/assets/Type=Chocolate Quente.png',
    tags: ['especial', 'com leite'],
  },
  {
    id: 11,
    name: 'Cubano',
    description:
      'Drink gelado de café expresso com rum, creme de leite e hortelã',
    price: 9.9,
    image: '/src/assets/Type=Cubano.png',
    tags: ['especial', 'alcoólico', 'gelado'],
  },
  {
    id: 12,
    name: 'Havaiano',
    description: 'Bebida adocicada preparada com café e leite de coco',
    price: 9.9,
    image: '/src/assets/Type=Havaiano.png',
    tags: ['especial'],
  },
  {
    id: 13,
    name: 'Árabe',
    description: 'Bebida preparada com grãos de café árabe e especiarias',
    price: 9.9,
    image: '/src/assets/Type=Árabe.png',
    tags: ['especial'],
  },
  {
    id: 14,
    name: 'Irlandês',
    description: 'Bebida a base de café, uísque irlandês, açúcar e chantilly',
    price: 9.9,
    image: '/src/assets/Type=Irlandês.png',
    tags: ['especial', 'alcoólico'],
  },
]

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
