import React from 'react';
import TeamMember from '../components/TeamMember';
import MissionVision from '../components/MissionVision';
import { teamMembers } from '../data/team';

const About = () => {
  return (
    <div className="pt-20">
      <div className="container mx-auto px-4 py-12">
        <h1 className="text-4xl font-serif mb-8">Hakkımızda</h1>
        
        <div className="mb-16">
          <p className="text-lg text-gray-600 max-w-3xl">
            2010 yılından beri profesyonel müzik hizmetleri sunan ekibimiz,
            yüzlerce çiftin en özel gününde unutulmaz melodiler yaratmıştır.
            Konservatuar mezunu müzisyenlerimiz ve geniş repertuarımızla
            her tarzda müziği en kaliteli şekilde icra ediyoruz.
          </p>
        </div>

        <div className="mb-16">
          <h2 className="text-3xl font-serif mb-8">Ekibimiz</h2>
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {teamMembers.map((member) => (
              <TeamMember key={member.name} {...member} />
            ))}
          </div>
        </div>

        <div className="mb-16">
          <h2 className="text-3xl font-serif mb-8">Misyon & Vizyon</h2>
          <MissionVision />
        </div>
      </div>
    </div>
  );
};

export default About;