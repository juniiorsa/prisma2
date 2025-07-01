import React from 'react';
import { BarChart, Bar, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer, PieChart, Pie, Cell } from 'recharts';
import { mockMetricas } from '../data/mock-data';
import { TrendingUp, Clock, CheckCircle, AlertTriangle } from 'lucide-react';

const DashboardPage = () => {
  const COLORS = ['#10B981', '#F59E0B', '#EF4444'];

  return (
    <div>
      <div className="mb-8">
        <h1 className="text-3xl font-bold text-gray-800">Dashboard de Métricas</h1>
        <p className="mt-2 text-gray-600">
          Acompanhe o desempenho e progresso dos seus documentos.
        </p>
      </div>

      {/* Cards de Métricas Principais */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-8">
        <div className="bg-white p-6 rounded-lg shadow-md">
          <div className="flex items-center">
            <div className="p-3 rounded-full bg-blue-100">
              <TrendingUp className="h-6 w-6 text-blue-600" />
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
              <p className="text-sm font-medium text-gray-600">Tempo Médio</p>
              <p className="text-2xl font-bold text-gray-900">{mockMetricas.tempoMedioElaboracao}</p>
            </div>
          </div>
        </div>

        <div className="bg-white p-6 rounded-lg shadow-md">
          <div className="flex items-center">
            <div className="p-3 rounded-full bg-red-100">
              <AlertTriangle className="h-6 w-6 text-red-600" />
            </div>
            <div className="ml-4">
              <p className="text-sm font-medium text-gray-600">Com Pendência</p>
              <p className="text-2xl font-bold text-gray-900">{mockMetricas.documentosComPendencia}</p>
            </div>
          </div>
        </div>
      </div>

      {/* Gráficos */}
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 mb-8">
        {/* Gráfico de Documentos por Mês */}
        <div className="bg-white p-6 rounded-lg shadow-md">
          <h2 className="text-xl font-semibold text-gray-800 mb-4">Documentos por Mês</h2>
          <ResponsiveContainer width="100%" height={300}>
            <BarChart data={mockMetricas.documentosPorMes}>
              <CartesianGrid strokeDasharray="3 3" />
              <XAxis dataKey="mes" />
              <YAxis />
              <Tooltip />
              <Bar dataKey="quantidade" fill="#3B82F6" />
            </BarChart>
          </ResponsiveContainer>
        </div>

        {/* Gráfico de Distribuição por Status */}
        <div className="bg-white p-6 rounded-lg shadow-md">
          <h2 className="text-xl font-semibold text-gray-800 mb-4">Distribuição por Status</h2>
          <ResponsiveContainer width="100%" height={300}>
            <PieChart>
              <Pie
                data={mockMetricas.statusDistribuicao}
                cx="50%"
                cy="50%"
                labelLine={false}
                label={({ status, quantidade }) => `${status}: ${quantidade}`}
                outerRadius={80}
                fill="#8884d8"
                dataKey="quantidade"
              >
                {mockMetricas.statusDistribuicao.map((entry, index) => (
                  <Cell key={`cell-${index}`} fill={COLORS[index % COLORS.length]} />
                ))}
              </Pie>
              <Tooltip />
            </PieChart>
          </ResponsiveContainer>
        </div>
      </div>

      {/* Tabela de Resumo */}
      <div className="bg-white rounded-lg shadow-md overflow-hidden">
        <div className="px-6 py-4 border-b border-gray-200">
          <h2 className="text-xl font-semibold text-gray-800">Resumo por Status</h2>
        </div>
        <div className="overflow-x-auto">
          <table className="w-full">
            <thead className="bg-gray-50">
              <tr>
                <th className="px-6 py-3 text-left text-sm font-semibold text-gray-600">Status</th>
                <th className="px-6 py-3 text-left text-sm font-semibold text-gray-600">Quantidade</th>
                <th className="px-6 py-3 text-left text-sm font-semibold text-gray-600">Percentual</th>
                <th className="px-6 py-3 text-left text-sm font-semibold text-gray-600">Tendência</th>
              </tr>
            </thead>
            <tbody className="divide-y divide-gray-200">
              {mockMetricas.statusDistribuicao.map((item, index) => {
                const percentual = ((item.quantidade / mockMetricas.totalDocumentos) * 100).toFixed(1);
                return (
                  <tr key={index} className="hover:bg-gray-50">
                    <td className="px-6 py-4">
                      <div className="flex items-center">
                        <div 
                          className="w-3 h-3 rounded-full mr-3"
                          style={{ backgroundColor: item.cor }}
                        ></div>
                        <span className="font-medium text-gray-800">{item.status}</span>
                      </div>
                    </td>
                    <td className="px-6 py-4 text-gray-600">{item.quantidade}</td>
                    <td className="px-6 py-4 text-gray-600">{percentual}%</td>
                    <td className="px-6 py-4">
                      <span className="text-green-600">↗ +12%</span>
                    </td>
                  </tr>
                );
              })}
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
};

export default DashboardPage;

