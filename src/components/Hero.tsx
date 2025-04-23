
import { Button } from "@/components/ui/button";

const Hero = () => {
  const scrollToContact = () => {
    const contactSection = document.getElementById("contato");
    if (contactSection) {
      contactSection.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <section className="relative min-h-screen flex items-center bg-gradient-to-r from-quans-navy to-quans-green pt-16">
      <div
        className="absolute inset-0 bg-gradient-to-r from-quans-navy/90 to-quans-green/90"
        style={{
          backgroundImage: "url('data:image/svg+xml,%3Csvg width=\"20\" height=\"20\" viewBox=\"0 0 20 20\" xmlns=\"http://www.w3.org/2000/svg\"%3E%3Cg fill=\"%23ffffff\" fill-opacity=\"0.05\" fill-rule=\"evenodd\"%3E%3Ccircle cx=\"3\" cy=\"3\" r=\"3\"/%3E%3Ccircle cx=\"13\" cy=\"13\" r=\"3\"/%3E%3C/g%3E%3C/svg%3E')"
        }}
      ></div>

      <div className="container mx-auto px-4 md:px-6 relative z-10">
        <div className="flex flex-col lg:flex-row items-center">
          <div className="w-full lg:w-1/2 text-white animate-fade-in" style={{ animationDelay: '0.2s' }}>
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6 leading-tight">
              Validação inteligente de obrigações ANS
            </h1>
            <p className="text-xl md:text-2xl mb-8 max-w-xl opacity-90">
              Transforme o cumprimento de obrigações legais em vantagem estratégica para sua operadora de saúde
            </p>
            <div className="flex flex-col sm:flex-row gap-4">
              <Button
                onClick={scrollToContact}
                className="bg-quans-yellow hover:bg-quans-yellow/90 text-quans-navy font-medium px-6 py-3 rounded-md text-base md:text-lg transition-all transform hover:scale-105"
              >
                Fale com um especialista
              </Button>
              <Button
                variant="outline"
                className="bg-transparent border-white text-white hover:bg-white/10 font-medium px-6 py-3 rounded-md text-base md:text-lg transition-all"
                onClick={() => document.getElementById("sobre")?.scrollIntoView({ behavior: "smooth" })}
              >
                Conheça a plataforma
              </Button>
            </div>
          </div>

          <div className="w-full lg:w-1/2 mt-12 lg:mt-0 flex justify-center lg:justify-end animate-fade-in" style={{ animationDelay: '0.4s' }}>
            <div className="relative w-full max-w-md">
              <div className="absolute inset-0 bg-gradient-to-tr from-quans-yellow to-quans-green rounded-lg transform rotate-3 opacity-50"></div>
              <div className="relative bg-white p-6 rounded-lg shadow-xl">
                <div className="flex items-center justify-between mb-6">
                  <h3 className="text-quans-navy font-bold text-xl">Validador QUANS</h3>
                  <span className="bg-quans-green/10 text-quans-green px-3 py-1 rounded-full text-sm font-medium">
                    Lançamento: Abril/2025
                  </span>
                </div>
                <div className="space-y-4">
                  <div className="p-4 bg-quans-gray rounded-md border border-gray-200">
                    <h4 className="font-semibold text-quans-navy mb-2">Upload de Arquivos</h4>
                    <p className="text-gray-600 text-sm">Valide seus arquivos ANS em segundos e receba feedback imediato</p>
                  </div>
                  <div className="p-4 bg-quans-gray rounded-md border border-gray-200">
                    <h4 className="font-semibold text-quans-navy mb-2">Identificação de Críticas</h4>
                    <p className="text-gray-600 text-sm">Análise detalhada de inconformidades e sugestões corretivas</p>
                  </div>
                  <div className="p-4 bg-quans-gray rounded-md border border-gray-200">
                    <h4 className="font-semibold text-quans-navy mb-2">Consultoria Especializada</h4>
                    <p className="text-gray-600 text-sm">Suporte técnico de especialistas para todas as suas dúvidas</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
