import { createContext, PropsWithChildren, useEffect, useState } from 'react'

interface Transaction {
  id: number
  description: string
  price: number
  type: 'income' | 'outcome'
  category: string
  createdAt: string
}

interface TransactionsContextType {
  transactions: Transaction[]
}

export const TransactionsContext = createContext({} as TransactionsContextType)

export const TransactionsProvider = ({ children }: PropsWithChildren) => {
  const [transactions, setTransactions] = useState<Transaction[]>([])

  const loadTransactions = async () => {
    const response = await fetch('http://localhost:3333/transactions')
    const data = await response.json()
    setTransactions(data)
  }

  useEffect(() => {
    loadTransactions()
  }, [])

  return (
    <TransactionsContext.Provider value={{ transactions }}>
      {children}
    </TransactionsContext.Provider>
  )
}
