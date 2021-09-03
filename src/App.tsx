import { useState } from 'react';
import Modal from 'react-modal';
import { ThemeProvider } from 'styled-components';

import { GlobalStyle } from "./styles/global";
import { TransactionsProvider } from './hooks/useTransactions';

import { Header } from "./components/Header";
import { NewTransactionModal } from './components/NewTransactionModal';
import { Dashboard } from "./pages/Dashboard";
import theme from './styles/theme';

Modal.setAppElement('#root');

export function App() {
  const [isNewTransactionModalOpen, setIsNewTransactionModalOpen] = useState(false);

  function handleOpenNewTransactionModal() {
    setIsNewTransactionModalOpen(true);
  }

  function handleCloseNewTransactionModal() {
    setIsNewTransactionModalOpen(false);
  }

  return (
    <ThemeProvider theme={theme}>
      <TransactionsProvider>
        <Header onOpenNewTransactionModal={handleOpenNewTransactionModal} />
        <Dashboard />

        <NewTransactionModal
          isOpen={isNewTransactionModalOpen}
          onRequestClose={handleCloseNewTransactionModal}
        />

        <GlobalStyle />
      </TransactionsProvider>
    </ThemeProvider>
  );
}
