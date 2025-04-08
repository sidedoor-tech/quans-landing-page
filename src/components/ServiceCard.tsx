
import { ReactNode } from 'react';

interface ServiceCardProps {
  title: string;
  description: string;
  icon: ReactNode;
}

const ServiceCard = ({ title, description, icon }: ServiceCardProps) => {
  return (
    <div className="bg-white rounded-lg shadow-lg overflow-hidden transition-all hover:shadow-xl hover:transform hover:scale-[1.02]">
      <div className="h-2 bg-gradient-to-r from-quans-green to-quans-yellow"></div>
      <div className="p-6">
        <div className="w-12 h-12 rounded-full bg-quans-navy/10 flex items-center justify-center mb-4">
          {icon}
        </div>
        <h3 className="text-xl font-bold text-quans-navy mb-3">{title}</h3>
        <p className="text-gray-600">{description}</p>
      </div>
    </div>
  );
};

export default ServiceCard;
