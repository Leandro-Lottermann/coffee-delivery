import { CurrencyDollar, MapPin, Timer } from 'phosphor-react'
import { GradientBorder, OrderInfoContainer, SuccessContainer } from './styles'
import motobikeImg from '../../assets/motobike.png'
import { IconDetail } from '../../components/IconDetail'

export default function Success() {
  return (
    <SuccessContainer>
      <div>
        <h1>Uhu! Pedido confirmado</h1>
        <p>Agora é só aguardar que logo o café chegará até você</p>
        <GradientBorder>
          <OrderInfoContainer>
            <ul>
              <li>
                <IconDetail detailColor="purple">
                  <MapPin weight="fill" />
                </IconDetail>
                Entrega em <strong>Rua João Daniel Martinelli, 102</strong>{' '}
                <br />
                Farrapos - Porto Alegre, RS
              </li>

              <li>
                <IconDetail detailColor="yellow">
                  <Timer weight="fill" />
                </IconDetail>
                Previsão de entrega <br /> <strong>20 min - 30 min</strong>
              </li>

              <li>
                <IconDetail detailColor="orange">
                  <CurrencyDollar weight="fill" />
                </IconDetail>
                Pagamento na entrega <br /> <strong>Cartão de Crédito</strong>
              </li>
            </ul>
          </OrderInfoContainer>
        </GradientBorder>
      </div>
      <img
        src={motobikeImg}
        alt="Imagem de uma pessoa com camiseta amarela pilotando uma moto roxa com uma caixa carregada"
      />
    </SuccessContainer>
  )
}
