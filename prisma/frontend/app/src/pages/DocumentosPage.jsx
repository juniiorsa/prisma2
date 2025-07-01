import React, { useState } from 'react';
import { mockDocumentos, mockHistoricoVersoes } from '../data/mock-data';
import { MoreHorizontal, Eye, Edit, Download, History, Trash2 } from 'lucide-react';

// Componente para o badge de status
const StatusBadge = ({ status }) => {
  const colorClasses = {
    'Finalizado': 'bg-green-100 text-green-800',
    'Em Elaboracao': 'bg-yellow-100 text-yellow-800',
    'Com Pendencia': 'bg-red-100 text-red-800',
  };
  return (
    <span className={`px-2 py-1 text-xs font-medium rounded-full ${colorClasses[status]}`}>
      {status}
    </span>
  );
};

// Componente para o menu de ações
const ActionMenu = ({ documento, onAction }) => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <div className="relative">
      <button
        onClick={() => setIsOpen(!isOpen)}
        className="text-gray-500 hover:text-blue-600 p-1 rounded-full hover:bg-gray-200"
      >
        <MoreHorizontal size={20} />
      </button>

      {isOpen && (
        <div className="absolute right-0 mt-2 w-48 bg-white rounded-lg shadow-xl py-1 z-50 border">
          <button
            onClick={() => {
              onAction('view', documento);
              setIsOpen(false);
            }}
            className="flex items-center w-full px-4 py-2 text-sm text-gray-700 hover:bg-gray-100"
          >
            <Eye className="mr-3 h-4 w-4" />
            Visualizar
          </button>
          <button
            onClick={() => {
              onAction('edit', documento);
              setIsOpen(false);
            }}
            className="flex items-center w-full px-4 py-2 text-sm text-gray-700 hover:bg-gray-100"
          >
            <Edit className="mr-3 h-4 w-4" />
            Editar
          </button>
          <button
            onClick={() => {
              onAction('history', documento);
              setIsOpen(false);
            }}
            className="flex items-center w-full px-4 py-2 text-sm text-gray-700 hover:bg-gray-100"
          >
            <History className="mr-3 h-4 w-4" />
            Histórico
          </button>
          <button
            onClick={() => {
              onAction('export', documento);
              setIsOpen(false);
            }}
            className="flex items-center w-full px-4 py-2 text-sm text-gray-700 hover:bg-gray-100"
          >
            <Download className="mr-3 h-4 w-4" />
            Exportar
          </button>
          <div className="border-t my-1"></div>
          <button
            onClick={() => {
              onAction('delete', documento);
              setIsOpen(false);
            }}
            className="flex items-center w-full px-4 py-2 text-sm text-red-600 hover:bg-red-50"
          >
            <Trash2 className="mr-3 h-4 w-4" />
            Excluir
          </button>
        </div>
      )}
    </div>
  );
};

const DocumentosPage = () => {
  const [selectedDocument, setSelectedDocument] = useState(null);
  const [showHistory, setShowHistory] = useState(false);

  const handleAction = (action, documento) => {
    switch (action) {
      case 'view':
        console.log('Visualizar documento:', documento.titulo);
        break;
      case 'edit':
        console.log('Editar documento:', documento.titulo);
        break;
      case 'history':
        setSelectedDocument(documento);
        setShowHistory(true);
        break;
      case 'export':
        console.log('Exportar documento:', documento.titulo);
        // Aqui será implementada a funcionalidade de exportação
        break;
      case 'delete':
        console.log('Excluir documento:', documento.titulo);
        break;
      default:
        break;
    }
  };

  return (
    <div className="text-left">
      <div className="flex items-center justify-between mb-6">
        <h1 className="text-3xl font-bold text-gray-800">Meus Documentos</h1>
        <button className="bg-blue-600 text-white px-4 py-2 rounded-lg hover:bg-blue-700 transition-colors">
          Novo Documento
        </button>
      </div>

      {/* Tabela de Documentos */}
      <div className="bg-white rounded-lg shadow-md overflow-hidden">
        <table className="w-full">
          <thead className="bg-gray-50 border-b border-gray-200">
            <tr>
              <th className="px-6 py-3 text-left text-sm font-semibold text-gray-600">Título</th>
              <th className="px-6 py-3 text-left text-sm font-semibold text-gray-600">Status</th>
              <th className="px-6 py-3 text-left text-sm font-semibold text-gray-600">Responsável</th>
              <th className="px-6 py-3 text-left text-sm font-semibold text-gray-600">Versão</th>
              <th className="px-6 py-3 text-left text-sm font-semibold text-gray-600">Última Atualização</th>
              <th className="px-6 py-3 text-center text-sm font-semibold text-gray-600">Ações</th>
            </tr>
          </thead>
          <tbody className="divide-y divide-gray-200">
            {mockDocumentos.map((doc) => (
              <tr key={doc.id} className="hover:bg-gray-50">
                <td className="px-6 py-4 font-medium text-gray-800">{doc.titulo}</td>
                <td className="px-6 py-4">
                  <StatusBadge status={doc.status} />
                </td>
                <td className="px-6 py-4 text-gray-600">{doc.responsavel}</td>
                <td className="px-6 py-4 text-gray-600">v{doc.versao}</td>
                <td className="px-6 py-4 text-gray-600">{doc.atualizadoEm}</td>
                <td className="px-6 py-4 text-center">
                  <ActionMenu documento={doc} onAction={handleAction} />
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>

      {/* Modal de Histórico */}
      {showHistory && selectedDocument && (
        <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50">
          <div className="bg-white rounded-lg p-6 w-full max-w-2xl mx-4">
            <div className="flex justify-between items-center mb-4">
              <h2 className="text-xl font-semibold text-gray-800">
                Histórico de Versões - {selectedDocument.titulo}
              </h2>
              <button
                onClick={() => setShowHistory(false)}
                className="text-gray-500 hover:text-gray-700"
              >
                ✕
              </button>
            </div>
            
            <div className="space-y-4">
              {mockHistoricoVersoes[selectedDocument.id]?.map((versao, index) => (
                <div key={index} className="border-l-4 border-blue-500 pl-4 py-2">
                  <div className="flex justify-between items-start">
                    <div>
                      <p className="font-medium text-gray-800">Versão {versao.versao}</p>
                      <p className="text-sm text-gray-600">{versao.autor} • {versao.data}</p>
                      <p className="text-sm text-gray-700 mt-1">{versao.alteracoes}</p>
                    </div>
                    <button className="text-blue-600 hover:text-blue-800 text-sm">
                      Restaurar
                    </button>
                  </div>
                </div>
              )) || (
                <p className="text-gray-500">Nenhum histórico disponível para este documento.</p>
              )}
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default DocumentosPage;

