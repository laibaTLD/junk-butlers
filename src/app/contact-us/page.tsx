import { Metadata } from 'next';
import BusinessOverviewSection from '@/sections/BusinessOverviewSection';

export const metadata: Metadata = {
  title: 'Contact Us | Junk Butlers',
  description: 'Get in touch with Junk Butlers for all your junk removal needs. We\'re here to help you reclaim your space!',
};

// Mock data - in a real app, this would come from your database or CMS
const mockBusinessData = {
  email: 'info@junkbutlers.com',
  phone: '(555) 123-4567',
  address: {
    street: '123 Junk Free St',
    city: 'Phoenix',
    state: 'AZ',
    zipCode: '85001',
  },
  coordinates: {
    latitude: 33.4484,
    longitude: -112.0740,
  },
  hours: {
    schedule: [
      { day: 'Monday', periods: [{ open: '8:00 AM', close: '5:00 PM' }] },
      { day: 'Tuesday', periods: [{ open: '8:00 AM', close: '5:00 PM' }] },
      { day: 'Wednesday', periods: [{ open: '8:00 AM', close: '5:00 PM' }] },
      { day: 'Thursday', periods: [{ open: '8:00 AM', close: '5:00 PM' }] },
      { day: 'Friday', periods: [{ open: '8:00 AM', close: '5:00 PM' }] },
      { day: 'Saturday', periods: [{ open: '9:00 AM', close: '2:00 PM' }] },
      { day: 'Sunday', periods: [] }, // Closed
    ],
  },
};

const contactContent = {
  title: 'Get in Touch',
  description: 'Have questions or need a quote? Fill out the form and we\'ll get back to you as soon as possible.',
  showMap: true,
};

export default function ContactPage() {
  return (
    <main className="min-h-screen">
      <BusinessOverviewSection
        contact={contactContent}
        businessData={mockBusinessData}
content={[]} // Empty array since we don't need the content section
      />
    </main>
  );
}
