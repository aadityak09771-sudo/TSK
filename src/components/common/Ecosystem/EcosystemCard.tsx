import React from 'react';

export interface EcosystemCardProps {
  title: string;
  description: string;
  icon: React.ReactNode;
  colorTheme: 'purple' | 'green' | 'orange' | 'blue';
}

const themeMap = {
  purple: { bg: '#f5f0ff', main: '#7c3aed' },
  green: { bg: '#eefdf5', main: '#22c55e' },
  orange: { bg: '#fff4eb', main: '#ff6b1a' },
  blue: { bg: '#eef4ff', main: '#2563eb' }
};

export const EcosystemCard: React.FC<EcosystemCardProps> = ({ title, description, icon, colorTheme }) => {
  const colors = themeMap[colorTheme];

  return (
    <div className="ecosystem-card">
      <div className="card-bg-circle" style={{ backgroundColor: colors.main }}></div>
      <div className="card-icon-container" style={{ backgroundColor: colors.bg, color: colors.main }}>
        {icon}
      </div>
      <h3 className="card-title">{title}</h3>
      <div className="card-title-line" style={{ backgroundColor: colors.main }}></div>
      <p className="card-description">{description}</p>
      <div className="card-bottom-border" style={{ backgroundColor: colors.main }}></div>
    </div>
  );
};