import { createContext, PropsWithChildren, useEffect, useState } from 'react'
import { api } from '@/lib/axios'

interface CreateTransactionInput {
  description: string
  price: number
  type: 'income' | 'outcome'
  category: string
}

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
  fetchTransactions: (query?: string) => Promise<void>
  createTransaction: (inputs: CreateTransactionInput) => Promise<void>
}

export const TransactionsContext = createContext({} as TransactionsContextType)

export const TransactionsProvider = ({ children }: PropsWithChildren) => {
  const [transactions, setTransactions] = useState<Transaction[]>([])

  const fetchTransactions = async (query?: string) => {
    const response = await api.get('/transactions', {
      params: { _sort: 'createdAt', _order: 'desc', q: query },
    })
    setTransactions(response.data)
  }

  const createTransaction = async (inputs: CreateTransactionInput) => {
    const { data } = await api.post('/transactions', {
      ...inputs,
      createdAt: new Date(),
    })

    setTransactions((state) => [data, ...state])
  }

  useEffect(() => {
    fetchTransactions()
  }, [])

  return (
    <TransactionsContext.Provider
      value={{ transactions, fetchTransactions, createTransaction }}
    >
      {children}
    </TransactionsContext.Provider>
  )
}
