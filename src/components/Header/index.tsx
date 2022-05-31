import { useState } from 'react';
import Modal from 'react-modal';
import logoImg from '../../assets/logo.svg';
import { Container, Content } from './styles';

interface HeaderProps {
  onOpennewTransactionModal: () => void;
}
export function Header({onOpennewTransactionModal}: HeaderProps) {
  return (
    <Container>
      <Content>
        <img src={logoImg} alt="dt money" />
        <button type="button" onClick={onOpennewTransactionModal}>
          Nova Transação
        </button>
      </Content>
    </Container>
  )
}