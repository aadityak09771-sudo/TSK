import React from 'react';
import { STUDENT_PROFILE } from '../config/studentProfile';
import { User, GraduationCap, MapPin, Mail, Phone, Calendar } from 'lucide-react';

export const MyProfile: React.FC = () => {
  const { personalDetails, academicDetails } = STUDENT_PROFILE;

  const getInitials = (name: string) => {
    return name
      .split(' ')
      .map((n) => n[0])
      .join('')
      .toUpperCase();
  };

  return (
    <div className="max-w-4xl mx-auto py-12 px-4 sm:px-6 lg:px-8">
      <div className="bg-white rounded-[2.5rem] shadow-xl overflow-hidden border border-gray-100">
        {/* Header/Cover Area */}
        <div className="h-48 bg-gradient-to-r from-[var(--color-primary)] to-blue-400 relative">
          <div className="absolute -bottom-16 left-8 sm:left-12">
            <div className="w-32 h-32 rounded-3xl bg-white p-2 shadow-2xl">
              <div className="w-full h-full rounded-2xl bg-blue-50 flex items-center justify-center text-[var(--color-primary)] text-4xl font-black border-4 border-blue-100">
                {getInitials(personalDetails.name)}
              </div>
            </div>
          </div>
        </div>

        <div className="pt-20 pb-12 px-8 sm:px-12">
          <div className="mb-12">
            <h1 className="text-4xl font-black text-gray-900 mb-2">{personalDetails.name}</h1>
            <p className="text-gray-500 font-bold flex items-center gap-2">
              <GraduationCap size={18} className="text-[var(--color-primary)]" />
              {academicDetails.class} • {academicDetails.board} Board
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
            {/* Personal Details */}
            <section>
              <div className="flex items-center gap-3 mb-8">
                <div className="w-10 h-10 rounded-xl bg-blue-50 flex items-center justify-center text-[var(--color-primary)]">
                  <User size={20} />
                </div>
                <h2 className="text-xl font-black text-gray-900">Personal Details</h2>
              </div>

              <div className="space-y-6">
                <DetailItem icon={<User size={18} />} label="Full Name" value={personalDetails.name} />
                <DetailItem icon={<Phone size={18} />} label="Mobile Number" value={personalDetails.mobileNo} />
                <DetailItem icon={<Calendar size={18} />} label="Gender" value={personalDetails.gender} />
                <DetailItem icon={<Mail size={18} />} label="Email Address" value={personalDetails.email} />
                <DetailItem icon={<MapPin size={18} />} label="City / Village" value={personalDetails.city} />
                <DetailItem icon={<MapPin size={18} />} label="State" value={personalDetails.state} />
              </div>
            </section>

            {/* Academic Details */}
            <section>
              <div className="flex items-center gap-3 mb-8">
                <div className="w-10 h-10 rounded-xl bg-green-50 flex items-center justify-center text-green-600">
                  <GraduationCap size={20} />
                </div>
                <h2 className="text-xl font-black text-gray-900">Academic Details</h2>
              </div>

              <div className="space-y-6">
                <DetailItem icon={<GraduationCap size={18} />} label="Current Class" value={academicDetails.class} />
                <DetailItem icon={<GraduationCap size={18} />} label="Education Board" value={academicDetails.board} />
                <div className="flex flex-col gap-2">
                  <span className="text-xs font-black text-gray-400 uppercase tracking-widest">Target Exams</span>
                  <div className="flex flex-wrap gap-2">
                    {academicDetails.exams.map((exam) => (
                      <span key={exam} className="px-4 py-2 bg-gray-50 text-gray-700 rounded-xl text-sm font-bold border border-gray-100">
                        {exam}
                      </span>
                    ))}
                  </div>
                </div>
              </div>
            </section>
          </div>
        </div>
      </div>
    </div>
  );
};

interface DetailItemProps {
  icon: React.ReactNode;
  label: string;
  value: string;
}

const DetailItem: React.FC<DetailItemProps> = ({ icon, label, value }) => (
  <div className="flex items-start gap-4 p-4 rounded-2xl border border-gray-50 hover:bg-gray-50 transition-colors">
    <div className="text-gray-400 mt-1">{icon}</div>
    <div className="flex flex-col">
      <span className="text-xs font-black text-gray-400 uppercase tracking-widest">{label}</span>
      <span className="text-gray-900 font-bold">{value}</span>
    </div>
  </div>
);
