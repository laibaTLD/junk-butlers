'use client';

import React from 'react';
import { Phone } from 'lucide-react';

interface ContactButtonProps {
  phoneNumber?: string;
  primaryColor?: string;
  secondaryColor?: string;
}

export default function ContactButton({ phoneNumber, primaryColor, secondaryColor }: ContactButtonProps) {

  return (
    <a 
    href={`tel:${phoneNumber}`}
      className="fixed bottom-4 right-4 z-50 px-6 py-3 text-white font-semibold rounded-lg shadow-lg transition-all duration-300 ease-in-out transform hover:scale-105 hover:shadow-xl active:scale-95 flex items-center gap-2"
      style={{
        background: `linear-gradient(135deg, ${primaryColor || '#f97316'}, ${secondaryColor || '#ea580c'})`
      }}
    >
      <Phone className="w-4 h-4" />
      Call Now
    </a>
  );
}
