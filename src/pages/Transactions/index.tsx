import { Header } from '@/components/Header'
import { Summary } from '@/components/Summary'
import { Container, PriceHighlight, Table } from '@/pages/Transactions/styles'
import { SearchForm } from '@/pages/Transactions/components/SearchForm'
import { useContext } from 'react'
import { TransactionsContext } from '@/contexts/TransactionsContext'
import { dateFormatter, priceFormatter } from '@/formatter'

export const Transactions = () => {
  const { transactions } = useContext(TransactionsContext)

  return (
    <div>
      <Header />
      <Summary />

      <Container>
        <SearchForm />

        <Table>
          <tbody>
            {transactions.map((transaction) => (
              <tr key={transaction.id}>
                <td width="50%">{transaction.description}</td>
                <td>
                  <PriceHighlight variant={transaction.type}>
                    {transaction.type === 'outcome' && '- '}
                    {priceFormatter.format(transaction.price)}
                  </PriceHighlight>
                </td>
                <td>{transaction.category}</td>
                <td>{dateFormatter.format(new Date(transaction.createdAt))}</td>
              </tr>
            ))}
          </tbody>
        </Table>
      </Container>
    </div>
  )
}
