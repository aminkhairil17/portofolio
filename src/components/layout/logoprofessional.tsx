// components/layout/LogoProfessional.tsx
import Logo from "../../assets/logo.svg";
import React from "react";

const LogoProfessional: React.FC = () => {
  return (
    <div className="flex items-center space-x-3">
      {/* Logo from assets */}
      <img
        src={Logo}
        alt="Amin Logo"
        className="w-9 h-9 rounded-lg shadow-md object-contain"
        loading="lazy"
      />
    </div>
  );
};
export default LogoProfessional;
