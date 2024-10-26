import { Route, Routes } from "react-router-dom";
import { TransactionsLayout } from "./transactions-layout";
import { AllInvoices } from "./invoices";
import { AllPayments } from "./payments";
import WalletTransactions from "./wallet-transactions-widget";
import { AllWallets } from "./wallets";
import { ViewWallet } from "./view-wallet";

const TransactionsPage = () => (
  <Routes>
    <Route element={<TransactionsLayout />}>
      <Route path="payments" element={<AllPayments />} />
      <Route path="invoices" element={<AllInvoices />} />
      <Route path="wallets" element={<AllWallets />} />
      <Route path="wallets/:walletId/view" element={<ViewWallet />} />
      <Route index element={<AllPayments />} />
    </Route>
  </Routes>
);

export { TransactionsPage };
