import { FileText, Users, Settings, MessageSquare, ShieldCheck } from "lucide-react";
import ServiceCard from "./ServiceCard";

const ServicesSection = () => {
  const services = [
    {
      title: "Monitoramento TISS - Envio de Dados do Padrão TISS",
      description: "Análise e qualificação de dados voltada ao envio preciso das informações no padrão TISS, assegurando conformidade com os prazos regulatórios e impacto positivo nos indicadores do IDSS (índice de desenvolviemnto da saúde suplementar).",
      icon: <FileText className="text-quans-green" size={24} />
    },
    {
      title: "SIB – Sistema de Informação de Beneficiários",
      description: "Consultoria especializada nas obrigações legais relacionadas ao SIB, com leitura e qualificação dos dados para transmissão precisa à ANS.",
      icon: <Users className="text-quans-green" size={24} />
    },
    {
      title: "SIP – Sistema de Informações de Produtos",
      description: "Consultoria abrangente para qualificação dos dados necessários para o preenchimento do SIP, incluindo simulação prévia dos resultados do Mapeamento do Risco Assistencial.",
      icon: <Settings className="text-quans-green" size={24} />
    },
    {
      title: "DIOPS - Documento de Informações Periódicas",
      description: "Leitura e indicações de melhorias na estrutura e dados, garantindo sincronização com todas as outras Obrigações Legais (TISS, SIB, SIP).",
      icon: <FileText className="text-quans-green" size={24} />
    },
    {
      title: "RPC - Reajustes de Planos Coletivos",
      description: "Consultoria especializada nos impactos da obrigação legal RPC, com qualificação de dados e garantia de informações precisas transmitidas à ANS.",
      icon: <ShieldCheck className="text-quans-green" size={24} />
    },
    {
      title: "Serviços de Consultoria",
      description: "Nossa equipe de especialistas mapeia processos, identifica brechas e fornece suporte contínuo, com implementação de dashboards para indicadores de desempenho.",
      icon: <MessageSquare className="text-quans-green" size={24} />
    }
  ];

  return (
    <section id="servicos" className="py-20 bg-quans-gray">
      <div className="container mx-auto px-4 md:px-6">
        <div className="max-w-3xl mx-auto text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-quans-navy mb-4">
            Nossos Serviços
          </h2>
          <p className="text-xl text-gray-600">
            Soluções completas para operadoras de saúde cumprirem obrigações legais com eficiência
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {services.map((service, index) => (
            <ServiceCard 
              key={index}
              title={service.title}
              description={service.description}
              icon={service.icon}
            />
          ))}
        </div>
      </div>
    </section>
  );
};

export default ServicesSection;
