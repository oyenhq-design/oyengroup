'use client';

import { useState } from 'react';

export default function StayConnected() {
  const [email, setEmail] = useState('');
  const [isSubmitted, setIsSubmitted] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (email.trim()) {
      setIsSubmitted(true);
      setEmail('');
      setTimeout(() => setIsSubmitted(false), 3000);
    }
  };

  return (
    <section className="bg-black py-16 md:py-20 lg:py-24 border-t border-[#1f2937]">
      <div className="max-w-2xl mx-auto px-6">
        <div className="text-center">
          {/* Title */}
          <h2 className="text-3xl md:text-4xl font-semibold text-white mb-4">
            Stay Connected
          </h2>

          {/* Description */}
          <p className="text-[#9ca3af] text-base md:text-lg mb-8 leading-relaxed">
            Get updates on our energy solutions, insights, and developments.
          </p>

          {/* Email Subscription Form */}
          <form onSubmit={handleSubmit} className="flex flex-col sm:flex-row gap-3 items-center justify-center">
            {/* Email Input */}
            <input
              type="email"
              placeholder="Enter your email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              required
              className="flex-1 min-w-0 sm:flex-initial sm:w-80 px-4 py-3 bg-[#111] border border-[#1f2937] rounded-lg text-white placeholder-[#9ca3af] focus:outline-none focus:border-[#d4af37] transition-colors duration-300"
            />

            {/* Subscribe Button */}
            <button
              type="submit"
              className="w-full sm:w-auto px-8 py-3 bg-[#d4af37] text-black font-semibold rounded-lg hover:bg-[#e5c158] transition-colors duration-300"
            >
              {isSubmitted ? 'Subscribed!' : 'Subscribe'}
            </button>
          </form>

          {/* Success Message */}
          {isSubmitted && (
            <p className="text-[#d4af37] text-sm mt-3 animate-pulse">
              Thank you for subscribing
            </p>
          )}

          {/* Privacy Notice */}
          <p className="text-[#6b7280] text-xs mt-6">
            We respect your privacy. Unsubscribe at any time.
          </p>
        </div>
      </div>
    </section>
  );
}
