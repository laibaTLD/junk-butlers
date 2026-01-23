"use client";

import Map from "@/components/Map";
import {
  useScrollAnimation,
  useStaggeredAnimation,
} from "@/hooks/useScrollAnimation";
import { useState, FormEvent, ChangeEvent } from "react";
import { FiCheckCircle, FiAlertCircle, FiLoader } from "react-icons/fi";

interface FormData {
  firstName: string;
  lastName: string;
  email: string;
  phone: string;
  message: string;
}

interface FormErrors {
  firstName?: string;
  lastName?: string;
  email?: string;
  message?: string;
}

interface FormState {
  isSubmitting: boolean;
  isSuccess: boolean;
  error: string | null;
}

interface Schedule {
  day: string;
  periods?: Array<{
    open: string;
    close?: string;
  }>;
}

interface BusinessHours {
  schedule?: Schedule[];
}

interface BusinessOverviewSectionProps {
  content: Array<{
    heading: string;
    description: string;
    ctaButton: {
      href: string;
      label: string;
    };
  }>;
  contact?: {
    title: string;
    description: string;
    showMap: boolean;
  };
  businessData?: {
    email: string;
    phone: string;
    address: {
      street: string;
      city: string;
      state: string;
      zipCode: string;
    };
    coordinates: {
      latitude: number;
      longitude: number;
    };
    hours?: BusinessHours;
  };
  theme?: {
    primaryColor: string;
    secondaryColor: string;
    accentColor?: string;
  };
}

export default function BusinessOverviewSection({
  content,
  contact,
  businessData,
  theme,
}: BusinessOverviewSectionProps) {
  const { ref: contentRef, visibleItems: contentVisible } =
    useStaggeredAnimation(content.length, 200);
  const { ref: mapRef, isVisible: mapVisible } =
    useScrollAnimation<HTMLDivElement>({ threshold: 0.2 });
  const { ref: formRef, isVisible: formVisible } =
    useScrollAnimation<HTMLDivElement>({ threshold: 0.2 });
  const { ref: contactRef, isVisible: contactVisible } =
    useScrollAnimation<HTMLDivElement>({ threshold: 0.2 });

  // Theme colors with fallbacks
  const primaryColor = theme?.primaryColor || 'var(--color-primary)';
  const secondaryColor = theme?.secondaryColor || 'var(--color-secondary)';
  const accentColor = theme?.accentColor || primaryColor;

  // Form state
  const [formData, setFormData] = useState<FormData>({
    firstName: '',
    lastName: '',
    email: '',
    phone: '',
    message: ''
  });
  
  const [formErrors, setFormErrors] = useState<FormErrors>({});
  const [formState, setFormState] = useState<FormState>({
    isSubmitting: false,
    isSuccess: false,
    error: null
  });
  
  // Interactive state
  const [activeContentIndex, setActiveContentIndex] = useState(0);
  
  // Handle form input changes
  const handleInputChange = (e: ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
    
    // Clear error for the field being edited
    if (formErrors[name as keyof FormErrors]) {
      setFormErrors(prev => ({
        ...prev,
        [name]: undefined
      }));
    }
  };
  
  // Validate form
  const validateForm = (): boolean => {
    const errors: FormErrors = {};
    
    if (!formData.firstName.trim()) {
      errors.firstName = 'First name is required';
    }
    
    if (!formData.lastName.trim()) {
      errors.lastName = 'Last name is required';
    }
    
    if (!formData.email.trim()) {
      errors.email = 'Email is required';
    } else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(formData.email)) {
      errors.email = 'Please enter a valid email address';
    }
    
    if (!formData.message.trim()) {
      errors.message = 'Message is required';
    }
    
    setFormErrors(errors);
    return Object.keys(errors).length === 0;
  };
  
  // Handle form submission
  const handleSubmit = async (e: FormEvent) => {
    e.preventDefault();
    
    if (!validateForm()) {
      return;
    }
    
    setFormState({
      isSubmitting: true,
      isSuccess: false,
      error: null
    });
    
    try {
      const response = await fetch('/api/contact', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(formData),
      });
      
      const data = await response.json();
      
      if (!response.ok) {
        throw new Error(data.error || 'Something went wrong');
      }
      
      // Reset form on success
      setFormData({
        firstName: '',
        lastName: '',
        email: '',
        phone: '',
        message: ''
      });
      
      setFormState({
        isSubmitting: false,
        isSuccess: true,
        error: null
      });
      
      // Reset success message after 5 seconds
      setTimeout(() => {
        setFormState(prev => ({
          ...prev,
          isSuccess: false
        }));
      }, 5000);
      
    } catch (error) {
      console.error('Error submitting form:', error);
      setFormState({
        isSubmitting: false,
        isSuccess: false,
        error: error instanceof Error ? error.message : 'Failed to send message. Please try again.'
      });
    }
  };

  return (
    <section
      id="business-overview"
      className="relative min-h-screen overflow-hidden bg-white"
    >

      <div className="relative z-10 min-h-screen">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 py-20">
         

          <div className="grid grid-cols-1 lg:grid-cols-3 gap-12 lg:gap-16">
            {/* Left side - Content Display + Contact Form */}
            <div ref={contentRef} className="lg:col-span-2 space-y-8">
              

              {/* Contact Form - Moved to Left Side */}
              <div
                ref={formRef}
                className={`relative bg-white/15 backdrop-blur-xl rounded-3xl p-8 border border-white/20 transition-all duration-1000 hover:bg-white/20 hover:shadow-2xl ${
                  formVisible
                    ? "opacity-100 translate-y-0"
                    : "opacity-0 translate-y-8"
                }`}
                style={{
                  boxShadow: `0 20px 40px ${primaryColor}15`
                }}
              >
                <div className="mb-8">
                  <h3
                    className="text-heading-lg font-bold mb-2"
                    style={{ color: primaryColor }}
                  >
                    Get In Touch
                  </h3>
                  <p
                    className="text-body-sm"
                    style={{ color: secondaryColor }}
                  >
                    Send us a message and we&apos;ll get back to you
                  </p>
                </div>

                <form onSubmit={handleSubmit} className="space-y-6">
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    <div>
                      <label
                        htmlFor="firstName"
                        className="block text-label-sm font-semibold mb-2"
                        style={{ color: primaryColor }}
                      >
                        First Name {formErrors.firstName && <span className="text-red-500">*</span>}
                      </label>
                      <input
                        type="text"
                        id="firstName"
                        name="firstName"
                        value={formData.firstName}
                        onChange={handleInputChange}
                        className={`w-full px-4 py-3 bg-white border ${
                          formErrors.firstName ? 'border-red-500' : 'border-neutral-300'
                        } rounded-xl text-neutral-900 placeholder:text-neutral-500 focus:bg-white focus:outline-none focus:ring-2 transition-colors ${
                          formErrors.firstName ? 'focus:ring-red-200' : 'focus:ring-neutral-200 focus:border-neutral-400'
                        }`}
                        placeholder="John"
                        disabled={formState.isSubmitting}
                      />
                      {formErrors.firstName && (
                        <p className="mt-1 text-sm text-red-500">{formErrors.firstName}</p>
                      )}
                    </div>
                    <div>
                      <label
                        htmlFor="lastName"
                        className="block text-label-sm font-semibold mb-2"
                        style={{ color: primaryColor }}
                      >
                        Last Name {formErrors.lastName && <span className="text-red-500">*</span>}
                      </label>
                      <input
                        type="text"
                        id="lastName"
                        name="lastName"
                        value={formData.lastName}
                        onChange={handleInputChange}
                        className={`w-full px-4 py-3 bg-white border ${
                          formErrors.lastName ? 'border-red-500' : 'border-neutral-300'
                        } rounded-xl text-neutral-900 placeholder:text-neutral-500 focus:bg-white focus:outline-none focus:ring-2 transition-colors ${
                          formErrors.lastName ? 'focus:ring-red-200' : 'focus:ring-neutral-200 focus:border-neutral-400'
                        }`}
                        placeholder="Doe"
                        disabled={formState.isSubmitting}
                      />
                      {formErrors.lastName && (
                        <p className="mt-1 text-sm text-red-500">{formErrors.lastName}</p>
                      )}
                    </div>
                  </div>

                  <div>
                    <label
                      htmlFor="email"
                      className="block text-label-sm font-semibold mb-2"
                      style={{ color: primaryColor }}
                    >
                      Email {formErrors.email && <span className="text-red-500">*</span>}
                    </label>
                    <input
                      type="email"
                      id="email"
                      name="email"
                      value={formData.email}
                      onChange={handleInputChange}
                      className={`w-full px-4 py-3 bg-white border ${
                        formErrors.email ? 'border-red-500' : 'border-neutral-300'
                      } rounded-xl text-neutral-900 placeholder:text-neutral-500 focus:bg-white focus:outline-none focus:ring-2 transition-colors ${
                        formErrors.email ? 'focus:ring-red-200' : 'focus:ring-neutral-200 focus:border-neutral-400'
                      }`}
                      placeholder="john@example.com"
                      disabled={formState.isSubmitting}
                    />
                    {formErrors.email && (
                      <p className="mt-1 text-sm text-red-500">{formErrors.email}</p>
                    )}
                  </div>

                  <div>
                    <label
                      htmlFor="phone"
                      className="block text-label-sm font-semibold mb-2"
                      style={{ color: primaryColor }}
                    >
                      Phone
                    </label>
                    <input
                      type="tel"
                      id="phone"
                      name="phone"
                      value={formData.phone}
                      onChange={handleInputChange}
                      className="w-full px-4 py-3 bg-white border border-neutral-300 rounded-xl text-neutral-900 placeholder:text-neutral-500 focus:bg-white focus:border-neutral-400 focus:outline-none focus:ring-2 focus:ring-neutral-200 transition-colors"
                      placeholder="(555) 123-4567"
                      disabled={formState.isSubmitting}
                    />
                  </div>

                  <div>
                    <label
                      htmlFor="message"
                      className="block text-label-sm font-semibold mb-2"
                      style={{ color: primaryColor }}
                    >
                      Message {formErrors.message && <span className="text-red-500">*</span>}
                    </label>
                    <textarea
                      id="message"
                      name="message"
                      rows={4}
                      value={formData.message}
                      onChange={handleInputChange}
                      className={`w-full px-4 py-3 bg-white border ${
                        formErrors.message ? 'border-red-500' : 'border-neutral-300'
                      } rounded-xl text-neutral-900 placeholder:text-neutral-500 focus:bg-white focus:outline-none focus:ring-2 resize-none transition-colors ${
                        formErrors.message ? 'focus:ring-red-200' : 'focus:ring-neutral-200 focus:border-neutral-400'
                      }`}
                      placeholder="Tell us about your project..."
                      disabled={formState.isSubmitting}
                    ></textarea>
                    {formErrors.message && (
                      <p className="mt-1 text-sm text-red-500">{formErrors.message}</p>
                    )}
                  </div>

                  {/* Form status messages */}
                  {formState.error && (
                    <div className="p-4 rounded-xl bg-red-50 border border-red-200 text-red-700 flex items-start space-x-2">
                      <FiAlertCircle className="w-5 h-5 mt-0.5 flex-shrink-0" />
                      <p>{formState.error}</p>
                    </div>
                  )}
                  
                  {formState.isSuccess && (
                    <div className="p-4 rounded-xl bg-green-50 border border-green-200 text-green-700 flex items-start space-x-2">
                      <FiCheckCircle className="w-5 h-5 mt-0.5 flex-shrink-0" />
                      <p>Your message has been sent successfully! We'll get back to you soon.</p>
                    </div>
                  )}

                  <button
                    type="submit"
                    className="w-full px-8 py-4 rounded-xl font-bold text-white transition-all duration-300 hover:scale-105 hover:-translate-y-1 group relative overflow-hidden disabled:opacity-70 disabled:cursor-not-allowed disabled:transform-none"
                    style={{
                      background: formState.isSubmitting 
                        ? `linear-gradient(135deg, ${primaryColor} 0%, ${accentColor} 100%)`
                        : `linear-gradient(135deg, ${primaryColor} 0%, ${accentColor} 100%)`,
                      boxShadow: `0 10px 25px ${primaryColor}30`
                    }}
                    disabled={formState.isSubmitting}
                  >
                    {formState.isSubmitting ? (
                      <span className="flex items-center justify-center">
                        <FiLoader className="animate-spin w-5 h-5 mr-2" />
                        Sending...
                      </span>
                    ) : (
                      <span className="relative z-10 flex items-center justify-center">
                        Send Message
                        <svg
                          className="ml-2 w-5 h-5 group-hover:translate-x-1 transition-transform duration-300"
                          fill="none"
                          stroke="currentColor"
                          viewBox="0 0 24 24"
                        >
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 19l9 2-9-18-9 18 9-2zm0 0v-8" />
                        </svg>
                      </span>
                    )}
                    <div
                      className={`absolute inset-0 opacity-0 ${
                        !formState.isSubmitting && 'group-hover:opacity-20'
                      } transition-opacity duration-300`}
                      style={{ background: 'rgba(255, 255, 255, 0.2)' }}
                    ></div>
                  </button>
                </form>
              </div>
            </div>

            {/* Right side - Enhanced Sticky Sidebar */}
            <div className="lg:col-span-1">
              <div className="sticky top-4 lg:top-8 space-y-8">
                {/* Interactive Map */}
            {contact?.showMap && businessData?.coordinates && (
              <div
                ref={mapRef}
                    className={`relative bg-white/10 backdrop-blur-xl rounded-3xl overflow-hidden border border-white/20 transition-all duration-1000 hover:bg-white/15 hover:shadow-2xl ${
                  mapVisible
                    ? "opacity-100 translate-y-0"
                    : "opacity-0 translate-y-8"
                }`}
                    style={{
                      boxShadow: `0 15px 35px ${primaryColor}15`
                    }}
              >
                    <div className="h-80">
                <Map
                  latitude={businessData.coordinates.latitude}
                  longitude={businessData.coordinates.longitude}
                  businessName="Business Location"
                  address={`${businessData.address.street}, ${businessData.address.city}, ${businessData.address.state}`}
                  className="h-full"
                />
                    </div>
                    
                    {/* Map Overlay */}
                    <div className="absolute top-4 left-4 px-3 py-1 bg-white/90 backdrop-blur-sm rounded-full text-xs font-semibold"
                         style={{ color: primaryColor }}>
                      Our Location
                    </div>
              </div>
            )}


                {/* Enhanced Business Contact Info */}
            {businessData && (
              <div
                ref={contactRef}
                    className={`relative rounded-3xl p-8 transition-all duration-1000 hover:shadow-2xl ${
                  contactVisible
                    ? "opacity-100 translate-y-0"
                    : "opacity-0 translate-y-8"
                }`}
                style={{
                      background: `linear-gradient(135deg, ${primaryColor} 0%, ${accentColor} 100%)`,
                      boxShadow: `0 20px 40px ${primaryColor}20`
                }}
              >
                    <div className="mb-8">
                      <h3 
                        className="text-heading-lg font-bold mb-2 text-white"
                      >
                  Contact Information
                </h3>
                      <p 
                        className="text-body-sm text-white/80"
                      >
                        Get in touch with us today
                      </p>
                    </div>

                    <div className="space-y-6">
                      <div className="flex items-center space-x-4">
                        <div 
                          className="w-12 h-12 rounded-xl flex items-center justify-center shadow-lg"
                          style={{
                            background: 'rgba(255, 255, 255, 0.2)',
                            backdropFilter: 'blur(10px)'
                          }}
                        >
                          <svg
                            className="w-6 h-6 text-white"
                        fill="currentColor"
                        viewBox="0 0 20 20"
                      >
                        <path d="M2.003 5.884L10 9.882l7.997-3.998A2 2 0 0016 4H4a2 2 0 00-1.997 1.884z" />
                        <path d="M18 8.118l-8 4-8-4V14a2 2 0 002 2h12a2 2 0 002-2V8.118z" />
                      </svg>
                    </div>
                        <div>
                          <p className="text-label-sm font-semibold text-white/90">Email</p>
                          <p className="text-body-sm text-white">{businessData.email}</p>
                        </div>
                  </div>

                      <div className="flex items-center space-x-4">
                        <div 
                          className="w-12 h-12 rounded-xl flex items-center justify-center shadow-lg"
                          style={{
                            background: 'rgba(255, 255, 255, 0.2)',
                            backdropFilter: 'blur(10px)'
                          }}
                        >
                          <svg
                            className="w-6 h-6 text-white"
                        fill="currentColor"
                        viewBox="0 0 20 20"
                      >
                        <path d="M2 3a1 1 0 011-1h2.153a1 1 0 01.986.836l.74 4.435a1 1 0 01-.54 1.06l-1.548.773a11.037 11.037 0 006.105 6.105l.774-1.548a1 1 0 011.059-.54l4.435.74a1 1 0 01.836.986V17a1 1 0 01-1 1h-2C7.82 18 2 12.18 2 5V3z" />
                      </svg>
                    </div>
                        <div>
                          <p className="text-label-sm font-semibold text-white/90">Phone</p>
                          <p className="text-body-sm text-white">{businessData.phone}</p>
                        </div>
                  </div>

                      <div className="flex items-start space-x-4">
                        <div 
                          className="w-12 h-12 rounded-xl flex items-center justify-center shadow-lg mt-1"
                          style={{
                            background: 'rgba(255, 255, 255, 0.2)',
                            backdropFilter: 'blur(10px)'
                          }}
                        >
                          <svg
                            className="w-6 h-6 text-white"
                        fill="currentColor"
                        viewBox="0 0 20 20"
                      >
                        <path
                          fillRule="evenodd"
                          d="M5.05 4.05a7 7 0 119.9 9.9L10 18.9l-4.95-4.95a7 7 0 010-9.9zM10 11a2 2 0 100-4 2 2 0 000 4z"
                          clipRule="evenodd"
                        />
                      </svg>
                    </div>
                        <div>
                          <p className="text-label-sm font-semibold text-white/90">Address</p>
                          <div className="text-body-sm text-white">
                      <div>
                              {businessData.address.city}, {businessData.address.state}
                            </div>
                      </div>
                    </div>
                  </div>

                      {/* Enhanced Business Hours */}
                  {businessData.hours?.schedule && (
                        <div className="flex items-start space-x-4">
                          <div 
                            className="w-12 h-12 rounded-xl flex items-center justify-center shadow-lg mt-1"
                            style={{
                              background: 'rgba(255, 255, 255, 0.2)',
                              backdropFilter: 'blur(10px)'
                            }}
                          >
                            <svg
                              className="w-6 h-6 text-white"
                          fill="currentColor"
                          viewBox="0 0 20 20"
                        >
                          <path
                            fillRule="evenodd"
                            d="M10 18a8 8 0 100-16 8 8 0 000 16zm1-12a1 1 0 10-2 0v4a1 1 0 00.293.707l2.828 2.829a1 1 0 101.415-1.415L11 9.586V6z"
                            clipRule="evenodd"
                          />
                        </svg>
                      </div>
                          <div>
                            <p className="text-label-sm font-semibold text-white/90 mb-3">Business Hours</p>
                            <div className="space-y-2 text-sm">
                          {businessData.hours.schedule.map((schedule: Schedule, index: number) => (
                                <div key={index} className="flex justify-between items-center">
                                  <span className="font-medium text-white/90">{schedule.day}:</span>
                                  <span className="text-white ml-4">
                                {schedule.periods && schedule.periods.length > 0 ? (
                                  schedule.periods.map((period: { open: string; close?: string }, i: number) => (
                                    <span key={i}>
                                      {period.open} - {period.close || 'Late'}
                                      {i < (schedule.periods?.length || 0) - 1 && ', '}
                                    </span>
                                  ))
                                ) : 'Closed'}
                              </span>
                            </div>
                          ))}
                        </div>
                      </div>
                    </div>
                  )}
                </div>
              </div>
            )}
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
