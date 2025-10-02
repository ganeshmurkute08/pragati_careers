import React from 'react';
import { FaFacebook, FaInstagram, FaLinkedin, FaYoutube } from 'react-icons/fa';

interface RoundWithIconProps {
  type: 'facebook' | 'instagram' | 'linkedin' | 'youtube';
  size?: number;
}

const iconMap = {
  facebook: FaFacebook,
  instagram: FaInstagram,
  linkedin: FaLinkedin,
  youtube: FaYoutube,
};

export const RoundWithIcon: React.FC<RoundWithIconProps> = ({ type, size = 32 }) => {
  const IconComponent = iconMap[type];
  return (
    <span
      style={{
        display: 'inline-flex',
        alignItems: 'center',
        justifyContent: 'center',
        background: '#646363ff',
        borderRadius: '50%',
        width: size,
        height: size,
      }}
    >
      <IconComponent color="#111" size={size * 0.6} />
    </span>
  );
};

export default RoundWithIcon;
