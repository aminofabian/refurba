import React from 'react';

interface LogoProps {
  className?: string;
  size?: 'sm' | 'md' | 'lg' | 'xl';
  variant?: 'full' | 'icon' | 'text';
  color?: 'brand' | 'white' | 'dark';
}

const Logo: React.FC<LogoProps> = ({ 
  className = '', 
  size = 'md', 
  variant = 'full',
  color = 'brand'
}) => {
  const sizeClasses = {
    sm: 'h-8',
    md: 'h-12',
    lg: 'h-16',
    xl: 'h-20'
  };

  const colorSchemes = {
    brand: {
      text: '#1e964c',
      accent: '#7dc7ee',
      secondary: '#e2161f'
    },
    white: {
      text: '#ffffff',
      accent: '#f8fafc',
      secondary: '#e2e8f0'
    },
    dark: {
      text: '#1e293b',
      accent: '#334155',
      secondary: '#475569'
    }
  };

  const colors = colorSchemes[color];

  const RefreshIcon = () => (
    <svg viewBox="0 0 40 40" className="w-full h-full">
      {/* Circular refresh arrows */}
      <path
        d="M20 8 C26.6 8 32 13.4 32 20"
        stroke={colors.accent}
        strokeWidth="3"
        strokeLinecap="round"
        fill="none"
      />
      <path
        d="M32 20 C32 26.6 26.6 32 20 32"
        stroke={colors.secondary}
        strokeWidth="3"
        strokeLinecap="round"
        fill="none"
      />
      <path
        d="M20 32 C13.4 32 8 26.6 8 20"
        stroke={colors.accent}
        strokeWidth="3"
        strokeLinecap="round"
        fill="none"
      />
      <path
        d="M8 20 C8 13.4 13.4 8 20 8"
        stroke={colors.secondary}
        strokeWidth="3"
        strokeLinecap="round"
        fill="none"
      />
      
      {/* Arrow heads */}
      <polygon
        points="28,12 32,16 28,20"
        fill={colors.accent}
      />
      <polygon
        points="12,28 8,24 12,20"
        fill={colors.secondary}
      />
      
      {/* Center dot */}
      <circle
        cx="20"
        cy="20"
        r="2"
        fill={colors.text}
      />
    </svg>
  );

  const LogoText = ({ standalone = false }: { standalone?: boolean }) => (
    <div className={`flex items-center ${standalone ? 'justify-center' : ''}`}>
      <span 
        className="font-bold tracking-tight"
        style={{ 
          color: colors.text,
          fontSize: standalone ? '1.5rem' : '1.25rem'
        }}
      >
        re
      </span>
      <span 
        className="font-bold tracking-tight"
        style={{ 
          color: colors.accent,
          fontSize: standalone ? '1.5rem' : '1.25rem'
        }}
      >
        furbs
      </span>
    </div>
  );

  if (variant === 'icon') {
    return (
      <div className={`${sizeClasses[size]} ${className}`}>
        <RefreshIcon />
      </div>
    );
  }

  if (variant === 'text') {
    return (
      <div className={`${className}`}>
        <LogoText standalone />
      </div>
    );
  }

  return (
    <div className={`flex items-center space-x-3 ${className}`}>
      <div className={sizeClasses[size]}>
        <RefreshIcon />
      </div>
      <LogoText />
    </div>
  );
};

export default Logo;
