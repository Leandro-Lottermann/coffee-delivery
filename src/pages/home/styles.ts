import styled from 'styled-components'
import sectionBackgroud from '../../assets/Background.png'

export const HomeContainer = styled.div`
  width: 100%;
`

export const FirstSection = styled.section`
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 0 160px;
  height: 74vh;
  background-image: url(${sectionBackgroud});
  background-repeat: no-repeat;
  background-size: cover;
`

export const FirstSectionContent = styled.div`
  display: flex;
  flex-direction: column;
  max-width: 588px;

  h1 {
    font-family: 'Baloo 2', sans-serif;
    font-size: 3rem;
    font-weight: 800;
    line-height: 1.3;
    color: ${(props) => props.theme['base-title']};
  }

  p {
    margin-top: 12px;
    font-size: 1.25rem;
    line-height: 1.3;
  }
`

export const DetailsContainer = styled.div`
  margin-top: 66px;
  display: flex;
  gap: 40px;
`

export const Detail = styled.div`
  display: flex;
  align-items: center;
  gap: 12px;

  font-size: 1rem;
  color: ${(props) => props.theme['base-text']};

  margin-top: 12px;
`

export const MainContainer = styled.main`
  padding: 32px 160px 150px;
  display: flex;
  flex-direction: column;
  align-items: center;

  > h1 {
    align-self: flex-start;
    font-family: 'Baloo 2', sans-serif;
    font-size: 2rem;
    font-weight: 800;
    color: ${(props) => props.theme['base-subtitle']};
  }
`

export const CoffeeListContainer = styled.div`
  padding-top: 50px;
  display: flex;
  justify-content: center;
  flex-wrap: wrap;
  row-gap: 40px;
  column-gap: 26px;
`
