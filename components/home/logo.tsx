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
  variant = 'text',
  color = 'brand'
}) => {
  const sizeClasses = {
    sm: 'h-3',
    md: 'h-4',
    lg: 'h-5',
    xl: 'h-6'
  };

  const colorSchemes = {
    brand: {
      text: '#1e293b',
      accent: '#7dc7ee',
      dot: '#1e964c'
    },
    white: {
      text: '#ffffff',
      accent: '#ffffff',
      dot: '#ffffff'
    },
    dark: {
      text: '#1e293b',
      accent: '#334155',
      dot: '#475569'
    }
  };

  const colors = colorSchemes[color];

  const RefreshIcon = () => (
    <div className="relative group">
      <svg viewBox="0 0 12 12" className="w-full h-full transform transition-transform duration-300 group-hover:rotate-180">
        {/* Simple curved refresh arrow */}
        <path
          d="M2 6 A4 4 0 0 1 10 6"
          stroke={colors.accent}
          strokeWidth="1.5"
          strokeLinecap="round"
          fill="none"
          className="drop-shadow-sm"
          style={{
            filter: 'drop-shadow(0 1px 2px rgba(125, 199, 238, 0.3))'
          }}
        />
        
        {/* Arrow head */}
        <path
          d="M8.5 4.5 L10 6 L8.5 7.5"
          stroke={colors.accent}
          strokeWidth="1.5"
          strokeLinecap="round"
          strokeLinejoin="round"
          fill="none"
          className="drop-shadow-sm"
          style={{
            filter: 'drop-shadow(0 1px 2px rgba(125, 199, 238, 0.3))'
          }}
        />
        
        {/* Small accent dot */}
        <circle
          cx="2"
          cy="6"
          r="0.8"
          fill={colors.dot}
          className="group-hover:scale-125 transition-transform duration-300"
          style={{
            filter: `drop-shadow(0 1px 2px ${colors.dot}60)`
          }}
        />
      </svg>
    </div>
  );

  const LogoText = ({ standalone = false }: { standalone?: boolean }) => (
    <div className={`flex items-center ${standalone ? 'justify-center' : ''} group`}>
      <span 
        className="font-bold tracking-wide transition-all duration-300 group-hover:tracking-wider"
        style={{ 
          color: colors.text,
          fontSize: standalone ? '1.75rem' : '1.5rem',
          fontWeight: '700',
          textShadow: '0 1px 2px rgba(0,0,0,0.1)',
          fontFamily: '-apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, sans-serif'
        }}
      >
        REFURBS
      </span>
      <span 
        className="ml-1 transition-all duration-300 group-hover:scale-125 group-hover:rotate-12"
        style={{ 
          color: colors.dot,
          fontSize: standalone ? '1.75rem' : '1.5rem',
          fontWeight: '700',
          textShadow: `0 1px 3px ${colors.dot}40`,
          transformOrigin: 'center'
        }}
      >
        •
      </span>
      <span 
        className="ml-1 font-bold tracking-wide transition-all duration-300 group-hover:tracking-wider"
        style={{ 
          color: colors.text,
          fontSize: standalone ? '1.75rem' : '1.5rem',
          fontWeight: '700',
          textShadow: '0 1px 2px rgba(0,0,0,0.1)',
          fontFamily: '-apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, sans-serif'
        }}
      >
        COM
      </span>
    </div>
  );

  if (variant === 'icon') {
    return (
      <div className={`${sizeClasses[size]} ${className} cursor-pointer`}>
        <RefreshIcon />
      </div>
    );
  }

  if (variant === 'text') {
    return (
      <div className={`${className} cursor-pointer`}>
        <LogoText standalone />
      </div>
    );
  }

  return (
    <div className={`flex items-center space-x-2 ${className} cursor-pointer transition-all duration-300 hover:scale-105`}>
      <div className={sizeClasses[size]}>
        <RefreshIcon />
      </div>
      <LogoText />
    </div>
  );
};

export default Logo;
