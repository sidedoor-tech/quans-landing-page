
import React from 'react';

interface LogoProps {
  variant?: 'color' | 'negative';
  className?: string;
}

const Logo: React.FC<LogoProps> = ({ 
  variant = 'color', 
  className = '' 
}) => {
  const logos = {
    color: '/lovable-uploads/1a1442e2-ea71-4c86-b6e2-1fdb2382e2ad.png',
    negative: '/lovable-uploads/8e7c9823-70a8-41ea-b91e-44e3d26dd86d.png'
  };

  return (
    <img 
      src={logos[variant]} 
      alt="QUANS Logo" 
      className={`h-12 md:h-14 ${className}`} 
      onError={(e) => {
        console.error(`Failed to load logo: ${logos[variant]}`);
        e.currentTarget.src = logos['color']; // Fallback to color logo
      }}
    />
  );
};

export default Logo;
