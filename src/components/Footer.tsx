import Logo from "./Logo";

const Footer = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-quans-navy text-white">
      <div className="container mx-auto px-4 md:px-6 py-12">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          <div className="col-span-1 md:col-span-2">
            <Logo variant="negative" className="h-12 mb-4 filter brightness-0 invert" />
            <p className="text-gray-300 mb-4 max-w-md">
              Soluções especializadas em obrigações ANS para operadoras de saúde,
              com foco em validação de arquivos e consultoria estratégica.
            </p>
          </div>

          <div>
            <h3 className="text-lg font-semibold mb-4">Navegação</h3>
            <ul className="space-y-2">
              <li><a href="#" className="text-gray-300 hover:text-white transition-colors">Início</a></li>
              <li><a href="#sobre" className="text-gray-300 hover:text-white transition-colors">Sobre</a></li>
              <li><a href="#servicos" className="text-gray-300 hover:text-white transition-colors">Serviços</a></li>
              <li><a href="#contato" className="text-gray-300 hover:text-white transition-colors">Contato</a></li>
            </ul>
          </div>

          <div>
            <h3 className="text-lg font-semibold mb-4">Serviços</h3>
            <ul className="space-y-2">
              <li><a href="#servicos" className="text-gray-300 hover:text-white transition-colors">TISS</a></li>
              <li><a href="#servicos" className="text-gray-300 hover:text-white transition-colors">SIB</a></li>
              <li><a href="#servicos" className="text-gray-300 hover:text-white transition-colors">SIP</a></li>
              <li><a href="#servicos" className="text-gray-300 hover:text-white transition-colors">DIOPS</a></li>
              <li><a href="#servicos" className="text-gray-300 hover:text-white transition-colors">RPC</a></li>
              <li><a href="#servicos" className="text-gray-300 hover:text-white transition-colors">Consultoria</a></li>
            </ul>
          </div>
        </div>

        <div className="border-t border-gray-700 mt-12 pt-8">
          <div className="flex flex-col md:flex-row justify-between items-center">
            <p className="text-gray-400 text-sm mb-4 md:mb-0">
              &copy; {currentYear} QUANS. Todos os direitos reservados.
            </p>
            <div className="flex space-x-6">
              <a href="#" className="text-gray-400 hover:text-white text-sm transition-colors">
                Política de Privacidade
              </a>
              <a href="#" className="text-gray-400 hover:text-white text-sm transition-colors">
                Termos de Uso
              </a>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
