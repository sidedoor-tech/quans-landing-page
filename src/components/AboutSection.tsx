
import { CheckCircle, Shield, Clock } from "lucide-react";

const AboutSection = () => {
  return (
    <section id="sobre" className="py-20 bg-white">
      <div className="container mx-auto px-4 md:px-6">
        <div className="max-w-3xl mx-auto text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-quans-navy mb-4">
            QUANS: Qualifica ANS
          </h2>
          <p className="text-xl text-gray-600">
            Sistemas especializados na qualificação e processamento das Obrigações Legais ANS
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-10 items-center">
          <div className="order-2 md:order-1">
            <div className="space-y-6">
              <p className="text-lg text-gray-700 leading-relaxed">
                Somos a QUANS, uma empresa de sistemas e consultoria que atende exclusivamente Operadoras de Saúde. 
                Inovando ao organizar seus dados das Obrigações Legais ANS com alta segurança, atendendo todas as 
                características específicas deste setor.
              </p>
              <p className="text-lg text-gray-700 leading-relaxed">
                Não somente simulamos, mas oportunizamos a gestão concentrada dos dados ANS num só lugar, 
                e com facilidade de gestão das informações.
              </p>
              
              <div className="pt-4">
                <h3 className="text-xl font-semibold text-quans-navy mb-4">Nossos diferenciais</h3>
                <ul className="space-y-3">
                  <li className="flex items-start">
                    <CheckCircle className="text-quans-green mr-3 flex-shrink-0 mt-1" size={20} />
                    <span className="text-gray-700">Validação completa de arquivos obrigatórios ANS</span>
                  </li>
                  <li className="flex items-start">
                    <CheckCircle className="text-quans-green mr-3 flex-shrink-0 mt-1" size={20} />
                    <span className="text-gray-700">Integração com os principais ERPs de gestão de Operadoras</span>
                  </li>
                  <li className="flex items-start">
                    <CheckCircle className="text-quans-green mr-3 flex-shrink-0 mt-1" size={20} />
                    <span className="text-gray-700">Dashboards intuitivos para tomada de decisões estratégicas</span>
                  </li>
                  <li className="flex items-start">
                    <CheckCircle className="text-quans-green mr-3 flex-shrink-0 mt-1" size={20} />
                    <span className="text-gray-700">Consultoria especializada no setor de saúde suplementar</span>
                  </li>
                </ul>
              </div>
            </div>
          </div>
          
          <div className="order-1 md:order-2">
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
              <div className="bg-gradient-to-br from-quans-navy to-quans-blue p-6 rounded-lg shadow-lg text-white">
                <Shield className="mb-4" size={40} />
                <h3 className="text-xl font-semibold mb-2">Segurança de dados</h3>
                <p className="text-sm opacity-90">
                  Proteção avançada para todas as informações sensíveis de sua operadora de saúde
                </p>
              </div>
              
              <div className="bg-gradient-to-br from-quans-green to-quans-lightGreen p-6 rounded-lg shadow-lg text-white">
                <CheckCircle className="mb-4" size={40} />
                <h3 className="text-xl font-semibold mb-2">Precisão garantida</h3>
                <p className="text-sm opacity-90">
                  Validação minuciosa conforme os padrões e exigências mais recentes da ANS
                </p>
              </div>
              
              <div className="sm:col-span-2 bg-gradient-to-br from-quans-yellow to-yellow-400 p-6 rounded-lg shadow-lg text-quans-navy">
                <Clock className="mb-4" size={40} />
                <h3 className="text-xl font-semibold mb-2">Eficiência operacional</h3>
                <p className="text-sm">
                  Reduza o tempo de preparação de arquivos e elimine erros com nossa plataforma especializada
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutSection;
