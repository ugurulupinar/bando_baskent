import React from 'react';
import { type LucideIcon } from 'lucide-react';

interface TeamMemberProps {
  name: string;
  role: string;
  bio: string;
  image: string;
  instrument: string;
  icon: LucideIcon;
}

const TeamMember: React.FC<TeamMemberProps> = ({ name, role, bio, image, instrument, icon: Icon }) => {
  return (
    <div className="bg-white p-6 rounded-xl shadow-sm hover:shadow-md transition-shadow">
      <div className="aspect-square mb-4 rounded-lg overflow-hidden">
        <img
          src={image}
          alt={name}
          className="w-full h-full object-cover"
        />
      </div>
      <div className="flex items-center space-x-2 mb-2">
        <Icon className="h-5 w-5 text-rose-600" />
        <span className="text-gray-600">{instrument}</span>
      </div>
      <h3 className="text-xl font-semibold mb-1">{name}</h3>
      <p className="text-rose-600 mb-3">{role}</p>
      <p className="text-gray-600 text-sm">{bio}</p>
    </div>
  );
};

export default TeamMember;