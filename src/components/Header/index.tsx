import { Container, Content, NewTransactionButton } from './styles'

import logoImg from '@/assets/logo-dt-money.svg'

export const Header = () => {
  return (
    <Container>
      <Content>
        <img src={logoImg} alt="dt money" />
        <NewTransactionButton>Nova transação</NewTransactionButton>
      </Content>
    </Container>
  )
}
