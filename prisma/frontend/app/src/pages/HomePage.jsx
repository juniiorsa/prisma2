import React from 'react';
import { mockMetricas } from '../data/mock-data';
import { Files, Clock, CheckCircle, AlertCircle } from 'lucide-react';

const HomePage = () => {
  return (
    <div>
      <div className="mb-8">
        <h1 className="text-3xl font-bold text-gray-800">
          Bem-vindo(a) ao PrismaGov!
        </h1>
        <p className="mt-2 text-gray-600">
          Seu dashboard central para uma gestão de contratações mais inteligente.
        </p>
      </div>

      {/* Cards de Métricas */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-8">
        <div className="bg-white p-6 rounded-lg shadow-md">
          <div className="flex items-center">
            <div className="p-3 rounded-full bg-blue-100">
              <Files className="h-6 w-6 text-blue-600" />
            </div>
            <div className="ml-4">
              <p className="text-sm font-medium text-gray-600">Total de Documentos</p>
              <p className="text-2xl font-bold text-gray-900">{mockMetricas.totalDocumentos}</p>
            </div>
          </div>
        </div>

        <div className="bg-white p-6 rounded-lg shadow-md">
          <div className="flex items-center">
            <div className="p-3 rounded-full bg-green-100">
              <CheckCircle className="h-6 w-6 text-green-600" />
            </div>
            <div className="ml-4">
              <p className="text-sm font-medium text-gray-600">Finalizados</p>
              <p className="text-2xl font-bold text-gray-900">{mockMetricas.documentosFinalizados}</p>
            </div>
          </div>
        </div>

        <div className="bg-white p-6 rounded-lg shadow-md">
          <div className="flex items-center">
            <div className="p-3 rounded-full bg-yellow-100">
              <Clock className="h-6 w-6 text-yellow-600" />
            </div>
            <div className="ml-4">
              <p className="text-sm font-medium text-gray-600">Em Andamento</p>
              <p className="text-2xl font-bold text-gray-900">{mockMetricas.documentosEmAndamento}</p>
            </div>
          </div>
        </div>

        <div className="bg-white p-6 rounded-lg shadow-md">
          <div className="flex items-center">
            <div className="p-3 rounded-full bg-red-100">
              <AlertCircle className="h-6 w-6 text-red-600" />
            </div>
            <div className="ml-4">
              <p className="text-sm font-medium text-gray-600">Com Pendência</p>
              <p className="text-2xl font-bold text-gray-900">{mockMetricas.documentosComPendencia}</p>
            </div>
          </div>
        </div>
      </div>

      {/* Seção de Ações Rápidas */}
      <div className="bg-white p-6 rounded-lg shadow-md">
        <h2 className="text-xl font-semibold text-gray-800 mb-4">Ações Rápidas</h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
          <button className="p-4 border border-gray-200 rounded-lg hover:bg-gray-50 transition-colors text-left">
            <h3 className="font-medium text-gray-800">Criar Novo TR</h3>
            <p className="text-sm text-gray-600 mt-1">Iniciar um novo Termo de Referência</p>
          </button>
          <button className="p-4 border border-gray-200 rounded-lg hover:bg-gray-50 transition-colors text-left">
            <h3 className="font-medium text-gray-800">Ver Documentos</h3>
            <p className="text-sm text-gray-600 mt-1">Acessar todos os seus documentos</p>
          </button>
          <button className="p-4 border border-gray-200 rounded-lg hover:bg-gray-50 transition-colors text-left">
            <h3 className="font-medium text-gray-800">Dashboard</h3>
            <p className="text-sm text-gray-600 mt-1">Visualizar métricas e relatórios</p>
          </button>
        </div>
      </div>
    </div>
  );
};

export default HomePage;

