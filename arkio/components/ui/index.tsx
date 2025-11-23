import React, { ReactNode } from 'react';
import { motion } from 'framer-motion';

// --- BUTTON ---
interface ButtonProps {
  children: ReactNode;
  variant?: 'primary' | 'secondary' | 'outline';
  className?: string;
  onClick?: () => void;
  fullWidth?: boolean;
}

export const Button: React.FC<ButtonProps> = ({ 
  children, 
  variant = 'primary', 
  className = '', 
  onClick,
  fullWidth = false
}) => {
  const baseStyles = "relative inline-flex items-center justify-center px-8 py-3 font-display font-bold transition-all duration-300 rounded-lg group overflow-hidden focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-arkio-dark";
  
  const variants = {
    primary: "bg-white text-arkio-dark hover:scale-[1.02] active:scale-[0.98]",
    secondary: "bg-gradient-to-r from-arkio-cyan to-arkio-violet text-white shadow-lg shadow-arkio-cyan/20 hover:shadow-arkio-cyan/40 hover:scale-[1.02]",
    outline: "border border-white/20 text-white hover:bg-white/5 backdrop-blur-sm"
  };

  return (
    <button 
      onClick={onClick}
      className={`${baseStyles} ${variants[variant]} ${fullWidth ? 'w-full' : ''} ${className}`}
    >
      {variant === 'primary' && (
        <div className="absolute inset-0 w-full h-full bg-gradient-to-r from-transparent via-white/50 to-transparent -translate-x-full group-hover:animate-[shimmer_1.5s_infinite]"></div>
      )}
      <span className="relative z-10 flex items-center gap-2">{children}</span>
    </button>
  );
};

// --- BADGE ---
interface BadgeProps {
  children: ReactNode;
  variant?: 'cyan' | 'violet' | 'pink' | 'warning';
}

export const Badge: React.FC<BadgeProps> = ({ children, variant = 'cyan' }) => {
  const colors = {
    cyan: "bg-arkio-cyan/10 text-arkio-cyan border-arkio-cyan/20",
    violet: "bg-arkio-violet/10 text-arkio-violet border-arkio-violet/20",
    pink: "bg-arkio-pink/10 text-arkio-pink border-arkio-pink/20",
    warning: "bg-orange-500/10 text-orange-400 border-orange-500/20"
  };

  return (
    <span className={`inline-flex items-center gap-1.5 px-3 py-1 rounded-full text-xs font-semibold tracking-wide border ${colors[variant]}`}>
      {children}
    </span>
  );
};

// --- SECTION TITLE ---
interface SectionHeaderProps {
  title: string;
  subtitle?: string;
  align?: 'left' | 'center';
}

export const SectionHeader: React.FC<SectionHeaderProps> = ({ title, subtitle, align = 'center' }) => {
  return (
    <div className={`mb-16 max-w-3xl ${align === 'center' ? 'mx-auto text-center' : ''}`}>
      <motion.h2 
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        className="text-3xl md:text-5xl font-display font-bold mb-6"
      >
        {title}
      </motion.h2>
      {subtitle && (
        <motion.p 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.1 }}
          className="text-gray-400 text-lg md:text-xl leading-relaxed"
        >
          {subtitle}
        </motion.p>
      )}
    </div>
  );
};

// --- CARD ---
interface CardProps {
  children: ReactNode;
  className?: string;
  hoverEffect?: boolean;
}

export const Card: React.FC<CardProps> = ({ children, className = '', hoverEffect = true }) => {
  return (
    <div className={`glass-card p-6 rounded-2xl transition-all duration-300 ${hoverEffect ? 'hover:-translate-y-1' : ''} ${className}`}>
      {children}
    </div>
  );
};
