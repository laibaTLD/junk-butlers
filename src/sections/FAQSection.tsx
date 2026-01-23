"use client";

import { useState } from "react";
import { useScrollAnimation, useStaggeredAnimation } from "@/hooks/useScrollAnimation";

interface FAQSectionProps {
  title: string;
  description: string;
  questions: Array<{
    question: string;
    answer: string;
  }>;
  theme?: {
    primaryColor: string;
    secondaryColor: string;
    accentColor?: string;
  };
}

export default function FAQSection({
  title,
  description,
  questions,
  theme,
}: FAQSectionProps) {
  const [openIndex, setOpenIndex] = useState<number | null>(null);
  const [searchTerm, setSearchTerm] = useState("");

  const { ref: titleRef, isVisible: titleVisible } = useScrollAnimation<HTMLHeadingElement>({ threshold: 0.2 });
  const { ref: descRef, isVisible: descVisible } = useScrollAnimation<HTMLParagraphElement>({ threshold: 0.2 });
  const { ref: faqRef, visibleItems: faqVisible } = useStaggeredAnimation(questions.length, 100);

  // Theme colors with fallbacks
  const primaryColor = theme?.primaryColor || 'var(--color-primary)';
  const secondaryColor = theme?.secondaryColor || 'var(--color-secondary)';
  const accentColor = theme?.accentColor || primaryColor;

  const toggleQuestion = (index: number) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  // Filter questions based on search term
  const filteredQuestions = questions.filter(
    (faq) =>
      faq.question.toLowerCase().includes(searchTerm.toLowerCase()) ||
      faq.answer.toLowerCase().includes(searchTerm.toLowerCase())
  );

  return (
    <section
      id="faq"
      className="relative min-h-screen overflow-hidden bg-white"
    >

      <div className="relative z-10 min-h-screen">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 py-20">
          {/* Section Header */}
          <div className="text-center mb-16 lg:mb-20">
            <h2
              ref={titleRef}
              className={`text-display-lg sm:text-display-xl md:text-display-xl lg:text-display-xl mb-6 transition-all duration-1000 ${
                titleVisible
                  ? "opacity-100 translate-y-0"
                  : "opacity-0 translate-y-8"
              }`}
              style={{
                color: primaryColor,
                textShadow: '0 2px 10px rgba(0, 0, 0, 0.1)'
              }}
            >
            {title}
          </h2>
            <p
              ref={descRef}
              className={`text-description-lg sm:text-description-xl md:text-description-xl max-w-4xl mx-auto leading-relaxed transition-all duration-1000 delay-200 ${
                descVisible
                  ? "opacity-100 translate-y-0"
                  : "opacity-0 translate-y-8"
              }`}
              style={{
                color: secondaryColor,
                textShadow: '0 1px 5px rgba(0, 0, 0, 0.1)'
              }}
            >
            {description}
          </p>
        </div>

          {/* Search Bar */}
          <div className="max-w-2xl mx-auto mb-12">
            <div className="relative">
              <div className="absolute inset-y-0 left-0 pl-4 flex items-center pointer-events-none">
                <svg
                  className="w-5 h-5"
                  style={{ color: secondaryColor }}
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"
                  />
                </svg>
              </div>
              <input
                type="text"
                placeholder="Search frequently asked questions..."
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}
                className="w-full pl-12 pr-4 py-4 bg-white/10 backdrop-blur-xl border border-white/20 rounded-2xl text-white placeholder:text-white/60 focus:bg-white/15 focus:border-white/30 transition-all duration-300"
                style={{
                  boxShadow: `0 10px 30px ${primaryColor}10`
                }}
              />
            </div>
          </div>

          {/* FAQ Grid */}
          <div ref={faqRef} className="max-w-4xl mx-auto">
            <div className="space-y-6">
              {filteredQuestions.map((faq, index) => (
            <div
              key={index}
                  className={`group relative transition-all duration-1000 ${
                    faqVisible.includes(index)
                      ? "opacity-100 translate-y-0"
                      : "opacity-0 translate-y-8"
                  }`}
                  style={{ animationDelay: `${index * 0.1}s` }}
                >
                  {/* FAQ Card */}
                  <div
                    className={`relative bg-white/10 backdrop-blur-xl rounded-3xl border border-white/20 transition-all duration-500 overflow-hidden ${
                      openIndex === index
                        ? "bg-white/15 shadow-2xl scale-[1.02]"
                        : "hover:bg-white/15 hover:shadow-xl hover:scale-[1.01]"
                    }`}
                    style={{
                      boxShadow: openIndex === index
                        ? `0 25px 50px ${primaryColor}20, 0 0 0 1px ${primaryColor}30`
                        : `0 10px 30px ${primaryColor}10`
                    }}
                  >
                    {/* Question Button */}
              <button
                      className="w-full px-8 py-6 text-left transition-all duration-300 group"
                onClick={() => toggleQuestion(index)}
              >
                      <div className="flex items-center justify-between">
                        <div className="flex items-center space-x-4 flex-1">
                          {/* Question Number */}
                          <div
                            className="w-10 h-10 rounded-xl flex items-center justify-center shadow-lg flex-shrink-0"
                            style={{
                              background: `linear-gradient(135deg, ${primaryColor} 0%, ${accentColor} 100%)`,
                              boxShadow: `0 8px 25px ${primaryColor}30`
                            }}
                          >
                            <span className="text-white font-bold text-sm">{index + 1}</span>
                          </div>

                          {/* Question Text */}
                          <h3
                            className="text-heading-sm lg:text-heading-md font-bold transition-colors duration-300 flex-1"
                            style={{
                              color: primaryColor,
                              textShadow: '0 1px 3px rgba(0, 0, 0, 0.1)'
                            }}
                          >
                  {faq.question}
                          </h3>
                        </div>

                        {/* Expand/Collapse Icon */}
                        <div
                          className={`w-12 h-12 rounded-xl flex items-center justify-center transition-all duration-300 ${
                    openIndex === index ? 'rotate-180' : ''
                  }`}
                          style={{
                            background: openIndex === index
                              ? `linear-gradient(135deg, ${primaryColor} 0%, ${accentColor} 100%)`
                              : 'rgba(255, 255, 255, 0.1)',
                            boxShadow: openIndex === index
                              ? `0 8px 25px ${primaryColor}30`
                              : '0 4px 15px rgba(255, 255, 255, 0.1)'
                          }}
                        >
                          <svg
                            className="w-6 h-6 transition-colors duration-300"
                            style={{
                              color: openIndex === index ? '#ffffff' : primaryColor
                            }}
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M19 9l-7 7-7-7"
                  />
                </svg>
                        </div>
                      </div>
              </button>
              
                    {/* Answer Content */}
                    <div
                      className={`overflow-hidden transition-all duration-500 ${
                        openIndex === index ? 'max-h-96 opacity-100' : 'max-h-0 opacity-0'
                      }`}
                    >
                      <div className="px-8 pb-6">
                        <div className="pl-14">
                          <div
                            className="w-1 h-8 rounded-full mb-4"
                            style={{
                              background: `linear-gradient(to bottom, ${primaryColor}, ${secondaryColor})`
                            }}
                          ></div>
                          <p
                            className="text-body-md leading-relaxed transition-colors duration-300"
                            style={{
                              color: secondaryColor,
                              textShadow: '0 1px 2px rgba(0, 0, 0, 0.1)'
                            }}
                          >
                    {faq.answer}
                  </p>
                </div>
                      </div>
                    </div>

                    {/* Decorative Elements */}
                    <div className="absolute -top-2 -right-2 w-4 h-4 rounded-full animate-pulse"
                         style={{ background: primaryColor, animationDelay: `${index * 0.5}s` }}></div>
                    <div className="absolute -bottom-2 -left-2 w-3 h-3 rounded-full animate-pulse"
                         style={{ background: secondaryColor, animationDelay: `${index * 0.7}s` }}></div>
                  </div>
            </div>
          ))}
        </div>

            {/* No Results Message */}
            {filteredQuestions.length === 0 && searchTerm && (
              <div className="text-center py-12">
                <div
                  className="w-20 h-20 rounded-full flex items-center justify-center mx-auto mb-6"
                  style={{
                    background: `linear-gradient(135deg, ${primaryColor} 0%, ${accentColor} 100%)`,
                    boxShadow: `0 15px 35px ${primaryColor}30`
                  }}
                >
                  <svg
                    className="w-10 h-10 text-white"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M9.172 16.172a4 4 0 015.656 0M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z"
                    />
                  </svg>
                </div>
                <h3
                  className="text-heading-md font-bold mb-2"
                  style={{ color: primaryColor }}
                >
                  No questions found
                </h3>
                <p
                  className="text-body-md"
                  style={{ color: secondaryColor }}
                >
                  Try searching with different keywords or browse all questions
                </p>
              </div>
            )}
          </div>

          {/* Contact CTA */}
          <div className="text-center mt-16 lg:mt-20">
            <div
              className="relative bg-white/10 backdrop-blur-xl rounded-3xl p-8 lg:p-12 border border-white/20 mx-auto max-w-2xl"
              style={{
                boxShadow: `0 20px 40px ${primaryColor}15`
              }}
            >
              <div
                className="w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-6"
                style={{
                  background: `linear-gradient(135deg, ${primaryColor} 0%, ${accentColor} 100%)`,
                  boxShadow: `0 15px 35px ${primaryColor}30`
                }}
              >
                <svg
                  className="w-8 h-8 text-white"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M8 12h.01M12 12h.01M16 12h.01M21 12c0 4.418-4.03 8-9 8a9.863 9.863 0 01-4.255-.949L3 20l1.395-3.72C3.512 15.042 3 13.574 3 12c0-4.418 4.03-8 9-8s9 3.582 9 8z"
                  />
                </svg>
              </div>
              
              <h3
                className="text-heading-lg font-bold mb-4"
                style={{ color: primaryColor }}
              >
                Still have questions?
              </h3>
              <p
                className="text-body-md mb-8"
                style={{ color: secondaryColor }}
              >
                We&apos;re here to help! Get in touch with our team for personalized assistance.
              </p>
              
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <a
                  href="tel:6232562272"
                  className="group relative inline-flex items-center px-8 py-4 text-label-lg font-bold text-white rounded-2xl shadow-2xl transform transition-all duration-500 hover:scale-105 hover:-translate-y-1 overflow-hidden"
                  style={{
                    background: `linear-gradient(135deg, ${primaryColor} 0%, ${accentColor} 100%)`,
                    boxShadow: `0 15px 35px ${primaryColor}30`
                  }}
                >
                  <span className="relative z-10 flex items-center">
                    <svg className="mr-3 w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
                    </svg>
            Call Our Team
                  </span>
                  <div
                    className="absolute inset-0 opacity-0 group-hover:opacity-20 transition-opacity duration-300"
                    style={{ background: 'rgba(255, 255, 255, 0.2)' }}
                  ></div>
                </a>
                
                <a
                  href="/contact-us"
                  className="group relative inline-flex items-center px-8 py-4 text-label-lg font-bold rounded-2xl border-2 transition-all duration-500 hover:scale-105 hover:-translate-y-1"
                  style={{
                    color: primaryColor,
                    borderColor: primaryColor,
                    background: 'rgba(255, 255, 255, 0.1)',
                    backdropFilter: 'blur(10px)'
                  }}
                >
                  <span className="relative z-10 flex items-center">
                    <svg className="mr-3 w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 4.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                    </svg>
                    Send Message
                  </span>
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
