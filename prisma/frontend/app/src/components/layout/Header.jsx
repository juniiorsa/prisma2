import React, { useState } from 'react';
import { User, ChevronDown, Settings, LogOut, UserCircle } from 'lucide-react';

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  // Dados mocados do usuário conforme especificado no planejamento
  const userName = "Júnior Almeida";
  const userRole = "Gestor";

  return (
    <header className="flex justify-end items-center p-4 bg-white border-b h-16">
      <div className="relative">
        <button
          onClick={() => setIsMenuOpen(!isMenuOpen)}
          className="flex items-center space-x-2 p-2 rounded-lg hover:bg-gray-100 transition-colors"
        >
          <div className="bg-gray-200 rounded-full h-8 w-8 flex items-center justify-center">
            <User className="h-5 w-5 text-gray-600" />
          </div>
          <div className="text-left hidden md:block">
            <p className="text-sm font-semibold text-gray-800">{userName}</p>
            <p className="text-xs text-gray-500">{userRole}</p>
          </div>
          <ChevronDown className="h-4 w-4 text-gray-500" />
        </button>

        {/* Menu Dropdown Interativo */}
        {isMenuOpen && (
          <div 
            className="absolute right-0 mt-2 w-48 bg-white rounded-lg shadow-xl py-1 z-50 border"
            onClick={() => setIsMenuOpen(false)}
          >
            <a href="#" className="flex items-center px-4 py-2 text-sm text-gray-700 hover:bg-gray-100">
              <UserCircle className="mr-3 h-4 w-4" />
              Meu Perfil
            </a>
            <a href="#" className="flex items-center px-4 py-2 text-sm text-gray-700 hover:bg-gray-100">
              <Settings className="mr-3 h-4 w-4" />
              Configurações
            </a>
            <div className="border-t my-1"></div>
            <a href="#" className="flex items-center px-4 py-2 text-sm text-red-600 hover:bg-red-50">
              <LogOut className="mr-3 h-4 w-4" />
              Sair
            </a>
          </div>
        )}
      </div>
    </header>
  );
};

export default Header;

