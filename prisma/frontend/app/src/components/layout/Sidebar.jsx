import React from 'react';
import { NavLink } from 'react-router-dom';
import { Home, Files, FilePlus2, BarChart3, Settings, Users } from 'lucide-react';
import Logo from './Logo';

const Sidebar = () => {
  const navLinkClass = ({ isActive }) =>
    `flex items-center px-4 py-2.5 rounded-lg transition-colors ${
      isActive
        ? 'bg-gray-200 text-gray-900 font-semibold'
        : 'text-gray-600 hover:bg-gray-100'
    }`;

  return (
    <aside className="w-64 bg-white shadow-md flex flex-col flex-shrink-0">
      <div className="flex items-center justify-center p-4 border-b">
        <Logo />
      </div>
      <nav className="flex-1 px-4 py-4 space-y-2">
        <NavLink to="/" className={navLinkClass}>
          <Home className="mr-3 h-5 w-5" /> Início
        </NavLink>
        <NavLink to="/documentos" className={navLinkClass}>
          <Files className="mr-3 h-5 w-5" /> Documentos
        </NavLink>
        <NavLink to="/documentos/novo" className={navLinkClass}>
          <FilePlus2 className="mr-3 h-5 w-5" /> Novo TR
        </NavLink>
        <NavLink to="/dashboard" className={navLinkClass}>
          <BarChart3 className="mr-3 h-5 w-5" /> Dashboard
        </NavLink>
        <NavLink to="/colaboracao" className={navLinkClass}>
          <Users className="mr-3 h-5 w-5" /> Colaboração
        </NavLink>
        <NavLink to="/configuracoes" className={navLinkClass}>
          <Settings className="mr-3 h-5 w-5" /> Configurações
        </NavLink>
      </nav>
    </aside>
  );
};

export default Sidebar;

