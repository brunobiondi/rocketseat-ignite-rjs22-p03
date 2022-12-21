import styled from 'styled-components'

export const Container = styled.header`
  background: ${({ theme }) => theme['gray-900']};
  padding: 2.5rem 0 7.5rem;
`

export const Content = styled.div`
  margin: 0 auto;
  padding: 0 1.5rem;
  width: 100%;
  max-width: 1120px;

  display: flex;
  align-items: center;
  justify-content: space-between;
`

export const NewTransactionButton = styled.button`
  background: ${({ theme }) => theme['green-500']};
  border: 0;
  border-radius: 6px;
  color: ${({ theme }) => theme.white};
  cursor: pointer;
  font-weight: bold;
  height: 50px;
  padding: 0 1.25rem;
  transition: background-color 0.2s;

  &:hover {
    background: ${({ theme }) => theme['green-700']};
  }
`
