import { Container } from "./style";
import { useTransactions } from '../../hooks/useTransactions'


export function TransactionsTable() {
  const { transactions } = useTransactions();
  
  return (
    <Container>
      <table>
        <thead>
          <tr>
            <th>Titulo</th>
            <th>Valor</th>
            <th>Categoria</th>
            <th>Data</th>
          </tr>
        </thead>

        <tbody>
          {transactions.map(transaction => (
            <tr>
              <td data-label="Titulo">{transaction.title}</td>
              <td data-label="Valor">{new Intl.NumberFormat('pt-BR', {
                style: 'currency',
                currency: 'BRL'
              }).format(transaction.amount)}
              </td>
              <td data-label="Categoria">{transaction.category}</td>
              <td data-label="Data">
                {new Intl.DateTimeFormat('pt-BR').format( new Date(transaction.createdAt)
                )}
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </Container>
  )
}