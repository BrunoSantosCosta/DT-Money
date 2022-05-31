import Modal from 'react-modal';
import { GlobalStyle } from './styles/global';
import { Header } from './components/Header';
import { Dashboard } from './components/Dashboard';
import { useState } from 'react';
import { NewTransactionModal } from './components/NewTransactionModal';
import { Transactionsprovider } from './hooks/useTransactions'

Modal.setAppElement('#root')

export function App() {
  const [isNewTransactionModalOpen, setIsNewTransactionModalOpen] = useState(false);

  function handleOpenNewTransactionmodal() {
    setIsNewTransactionModalOpen(true);
  }

  function handleCloseNewTransactionmodal() {
    setIsNewTransactionModalOpen(false); 
  }

  return (
    <Transactionsprovider>
      <Header onOpennewTransactionModal={handleOpenNewTransactionmodal}/>
      <Dashboard />

      <NewTransactionModal
      isOpen={isNewTransactionModalOpen}
      onRequestClose={handleCloseNewTransactionmodal} />
      <GlobalStyle />
    </Transactionsprovider>
  );
}