import { Container } from '@/pages/Transactions/components/SearchForm/styles'
import { MagnifyingGlass } from 'phosphor-react'

export const SearchForm = () => {
  return (
    <Container>
      <input type="text" placeholder="Busque por transações" />

      <button type="submit">
        <MagnifyingGlass size={20} />
        Buscar
      </button>
    </Container>
  )
}
