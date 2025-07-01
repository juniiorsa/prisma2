import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Sidebar from './components/layout/Sidebar';
import Header from './components/layout/Header';
import HomePage from './pages/HomePage';
import DocumentosPage from './pages/DocumentosPage';
import NovoTRPage from './pages/NovoTRPage';
import DashboardPage from './pages/DashboardPage';
import './App.css';

function App() {
  return (
    <BrowserRouter>
      <div className="flex h-screen bg-gray-100 font-sans">
        <Sidebar />
        <div className="flex-1 flex flex-col overflow-hidden">
          <Header />
          <main className="flex-1 overflow-x-hidden overflow-y-auto p-6">
            <Routes>
              <Route path="/" element={<HomePage />} />
              <Route path="/documentos" element={<DocumentosPage />} />
              <Route path="/documentos/novo" element={<NovoTRPage />} />
              <Route path="/dashboard" element={<DashboardPage />} />
              <Route path="/colaboracao" element={<div className="text-center py-12"><h1 className="text-2xl font-bold text-gray-800">Colaboração em Tempo Real</h1><p className="text-gray-600 mt-2">Funcionalidade em desenvolvimento</p></div>} />
              <Route path="/configuracoes" element={<div className="text-center py-12"><h1 className="text-2xl font-bold text-gray-800">Configurações</h1><p className="text-gray-600 mt-2">Funcionalidade em desenvolvimento</p></div>} />
            </Routes>
          </main>
        </div>
      </div>
    </BrowserRouter>
  );
}

export default App;

