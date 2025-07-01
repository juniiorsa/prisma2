import React, { useState } from 'react';
import { mockTemplates } from '../data/mock-data';
import { Save, Send, Sparkles, MessageSquare } from 'lucide-react';

const NovoTRPage = () => {
  const [formData, setFormData] = useState({
    titulo: '',
    responsavel: 'Júnior Almeida',
    categoria: '',
    template: '',
    conteudo: ''
  });

  const [showAIChat, setShowAIChat] = useState(false);
  const [aiSuggestions, setAiSuggestions] = useState([]);

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
  };

  const handleTemplateSelect = (template) => {
    setFormData(prev => ({
      ...prev,
      template: template.id,
      categoria: template.categoria,
      conteudo: template.blocos.map(bloco => `## ${bloco}\n\n[Descreva aqui o conteúdo para ${bloco.toLowerCase()}]\n\n`).join('')
    }));
  };

  const generateAISuggestions = () => {
    // Simulação de sugestões de IA
    const suggestions = [
      'Adicionar seção sobre critérios de sustentabilidade',
      'Incluir especificações técnicas detalhadas',
      'Definir métricas de qualidade do serviço',
      'Estabelecer cronograma de execução'
    ];
    setAiSuggestions(suggestions);
  };

  return (
    <div className="text-left max-w-6xl mx-auto">
      <div className="flex items-center justify-between mb-8">
        <h1 className="text-3xl font-bold text-gray-800">Criar Novo Termo de Referência</h1>
        <div className="flex space-x-3">
          <button
            onClick={() => setShowAIChat(!showAIChat)}
            className="flex items-center px-4 py-2 bg-purple-600 text-white rounded-lg hover:bg-purple-700 transition-colors"
          >
            <MessageSquare className="mr-2 h-4 w-4" />
            Chat IA
          </button>
          <button className="flex items-center px-4 py-2 bg-gray-600 text-white rounded-lg hover:bg-gray-700 transition-colors">
            <Save className="mr-2 h-4 w-4" />
            Salvar Rascunho
          </button>
          <button className="flex items-center px-4 py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition-colors">
            <Send className="mr-2 h-4 w-4" />
            Finalizar
          </button>
        </div>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
        {/* Formulário Principal */}
        <div className="lg:col-span-2 space-y-6">
          {/* Seção de Informações Gerais */}
          <div className="bg-white p-6 rounded-lg shadow-md">
            <h2 className="text-xl font-semibold text-gray-700 border-b pb-4 mb-6">Informações Gerais</h2>
            
            <div className="space-y-4">
              <div>
                <label htmlFor="titulo" className="block text-sm font-medium text-gray-700 mb-2">
                  Título do Documento
                </label>
                <input
                  type="text"
                  id="titulo"
                  name="titulo"
                  value={formData.titulo}
                  onChange={handleInputChange}
                  placeholder="Ex: Contratação de serviço de desenvolvimento de software"
                  className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
                />
              </div>

              <div>
                <label htmlFor="responsavel" className="block text-sm font-medium text-gray-700 mb-2">
                  Responsável pela Elaboração
                </label>
                <input
                  type="text"
                  id="responsavel"
                  name="responsavel"
                  value={formData.responsavel}
                  onChange={handleInputChange}
                  readOnly
                  className="w-full px-3 py-2 border border-gray-300 rounded-lg bg-gray-100 cursor-not-allowed"
                />
              </div>

              <div>
                <label htmlFor="categoria" className="block text-sm font-medium text-gray-700 mb-2">
                  Categoria
                </label>
                <select
                  id="categoria"
                  name="categoria"
                  value={formData.categoria}
                  onChange={handleInputChange}
                  className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
                >
                  <option value="">Selecione uma categoria</option>
                  <option value="Tecnologia">Tecnologia</option>
                  <option value="Infraestrutura">Infraestrutura</option>
                  <option value="Serviços">Serviços</option>
                  <option value="Obras">Obras</option>
                </select>
              </div>
            </div>
          </div>

          {/* Seção do Editor de Conteúdo */}
          <div className="bg-white p-6 rounded-lg shadow-md">
            <div className="flex justify-between items-center border-b pb-4 mb-6">
              <h2 className="text-xl font-semibold text-gray-700">Conteúdo do Documento</h2>
              <button
                onClick={generateAISuggestions}
                className="flex items-center px-3 py-1 bg-purple-100 text-purple-700 rounded-lg hover:bg-purple-200 transition-colors"
              >
                <Sparkles className="mr-2 h-4 w-4" />
                Sugestões IA
              </button>
            </div>
            
            <div>
              <textarea
                id="conteudo"
                name="conteudo"
                value={formData.conteudo}
                onChange={handleInputChange}
                placeholder="Digite o conteúdo do termo de referência aqui..."
                rows={20}
                className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500 font-mono text-sm"
              />
            </div>

            {/* Sugestões de IA */}
            {aiSuggestions.length > 0 && (
              <div className="mt-4 p-4 bg-purple-50 rounded-lg">
                <h3 className="text-sm font-medium text-purple-800 mb-2">Sugestões da IA:</h3>
                <ul className="space-y-1">
                  {aiSuggestions.map((suggestion, index) => (
                    <li key={index} className="text-sm text-purple-700 cursor-pointer hover:text-purple-900">
                      • {suggestion}
                    </li>
                  ))}
                </ul>
              </div>
            )}
          </div>
        </div>

        {/* Sidebar com Templates e Ferramentas */}
        <div className="space-y-6">
          {/* Templates Inteligentes */}
          <div className="bg-white p-6 rounded-lg shadow-md">
            <h3 className="text-lg font-semibold text-gray-700 mb-4">Templates Inteligentes</h3>
            <div className="space-y-3">
              {mockTemplates.map((template) => (
                <div
                  key={template.id}
                  onClick={() => handleTemplateSelect(template)}
                  className="p-3 border border-gray-200 rounded-lg cursor-pointer hover:bg-gray-50 transition-colors"
                >
                  <h4 className="font-medium text-gray-800">{template.titulo}</h4>
                  <p className="text-sm text-gray-600 mt-1">{template.descricao}</p>
                  <span className="inline-block mt-2 px-2 py-1 bg-blue-100 text-blue-800 text-xs rounded">
                    {template.categoria}
                  </span>
                </div>
              ))}
            </div>
          </div>

          {/* Chat com IA */}
          {showAIChat && (
            <div className="bg-white p-6 rounded-lg shadow-md">
              <h3 className="text-lg font-semibold text-gray-700 mb-4">Assistente IA</h3>
              <div className="h-64 border border-gray-200 rounded-lg p-3 overflow-y-auto mb-3">
                <div className="text-sm text-gray-600">
                  <p className="mb-2"><strong>IA:</strong> Olá! Como posso ajudá-lo com seu Termo de Referência?</p>
                  <p className="mb-2"><strong>Você:</strong> Preciso de ajuda com especificações técnicas.</p>
                  <p className="mb-2"><strong>IA:</strong> Claro! Para especificações técnicas, recomendo incluir: requisitos funcionais, não-funcionais, tecnologias obrigatórias e critérios de aceitação.</p>
                </div>
              </div>
              <div className="flex">
                <input
                  type="text"
                  placeholder="Digite sua pergunta..."
                  className="flex-1 px-3 py-2 border border-gray-300 rounded-l-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
                />
                <button className="px-4 py-2 bg-blue-600 text-white rounded-r-lg hover:bg-blue-700 transition-colors">
                  Enviar
                </button>
              </div>
            </div>
          )}

          {/* Ferramentas */}
          <div className="bg-white p-6 rounded-lg shadow-md">
            <h3 className="text-lg font-semibold text-gray-700 mb-4">Ferramentas</h3>
            <div className="space-y-2">
              <button className="w-full text-left px-3 py-2 text-sm text-gray-700 hover:bg-gray-100 rounded">
                Verificar Ortografia
              </button>
              <button className="w-full text-left px-3 py-2 text-sm text-gray-700 hover:bg-gray-100 rounded">
                Validador Legal
              </button>
              <button className="w-full text-left px-3 py-2 text-sm text-gray-700 hover:bg-gray-100 rounded">
                Exportar Preview
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default NovoTRPage;

