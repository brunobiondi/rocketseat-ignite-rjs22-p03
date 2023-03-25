import { Container, SummaryCard } from '@/components/Summary/styles'
import { ArrowCircleDown, ArrowCircleUp, CurrencyDollar } from 'phosphor-react'
import { useTheme } from 'styled-components'
import { useContext } from 'react'
import { TransactionsContext } from '@/contexts/TransactionsContext'
import { priceFormatter } from '@/formatter'

export const Summary = () => {
  const theme = useTheme()

  const { transactions } = useContext(TransactionsContext)

  const summary = transactions.reduce(
    (acc, transaction) => {
      if (transaction.type === 'income') {
        acc.income += transaction.price
      } else {
        acc.outcome += transaction.price
      }
      acc.total = acc.income - acc.outcome

      return acc
    },
    {
      income: 0,
      outcome: 0,
      total: 0,
    }
  )

  return (
    <Container>
      <SummaryCard>
        <header>
          <span>Entradas</span>
          <ArrowCircleUp size={32} color={theme['green-300']} />
        </header>

        <strong>{priceFormatter.format(summary.income)}</strong>
      </SummaryCard>

      <SummaryCard>
        <header>
          <span>Saídas</span>
          <ArrowCircleDown size={32} color={theme['red-300']} />
        </header>

        <strong>{priceFormatter.format(summary.outcome)}</strong>
      </SummaryCard>

      <SummaryCard variant="green">
        <header>
          <span>Total</span>
          <CurrencyDollar size={32} color={theme.white} />
        </header>

        <strong>{priceFormatter.format(summary.total)}</strong>
      </SummaryCard>
    </Container>
  )
}
