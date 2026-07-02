'use client';

import Link from 'next/link';
import { useEffect, useRef, useState } from 'react';

export default function Ecosystem() {
  const containerRef = useRef<HTMLDivElement>(null);
  const [steps, setSteps] = useState({
    logo: false,
    line1: false,
    gridNode: false,
    line2: false,
    tags: false,
    dashboard: false,
    button: false,
  });

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            // Sequential animation trigger
            setSteps(prev => ({ ...prev, logo: true }));
            setTimeout(() => setSteps(prev => ({ ...prev, line1: true })), 300);
            setTimeout(() => setSteps(prev => ({ ...prev, gridNode: true })), 800);
            setTimeout(() => setSteps(prev => ({ ...prev, line2: true })), 1300);
            setTimeout(() => setSteps(prev => ({ ...prev, tags: true })), 1700);
            setTimeout(() => setSteps(prev => ({ ...prev, dashboard: true })), 2100);
            setTimeout(() => setSteps(prev => ({ ...prev, button: true })), 2500);
            observer.unobserve(entry.target);
          }
        });
      },
      { threshold: 0.15 }
    );

    if (containerRef.current) {
      observer.observe(containerRef.current);
    }

    return () => observer.disconnect();
  }, []);

  return (
    <section
      ref={containerRef}
      className="relative py-24 md:py-28 lg:py-32 bg-[#050505] text-white overflow-hidden border-t border-white/5"
    >
      {/* Soft background ambient glows */}
      <div className="absolute top-1/4 left-1/2 -translate-x-1/2 w-[500px] h-[500px] bg-[#d4af37]/5 rounded-full blur-[120px] pointer-events-none" />

      <div className="max-w-6xl mx-auto px-6 relative z-10">
        
        {/* Upper Title Block */}
        <div className="text-center mb-16 max-w-2xl mx-auto">
          <p className="text-xs tracking-widest text-[#d4af37] uppercase font-semibold mb-4">
            Where It All Begins
          </p>
          <h2 className="text-3xl md:text-4xl font-semibold leading-tight text-white mb-6">
            Every Great Ecosystem Starts With One Strong Foundation.
          </h2>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-center">
          
          {/* Left Column: Storytelling content & Roadmap */}
          <div className="lg:col-span-5 space-y-8">
            
            <div className="space-y-5">
              <p className="text-sm text-gray-400 leading-relaxed">
                OYEN GROUP's journey begins with <strong>OYEN GRID</strong>—our flagship platform designed to modernize how organizations deliver programmes, coordinate participants, and manage learning experiences.
              </p>
              <p className="text-sm text-gray-400 leading-relaxed">
                As our ecosystem grows, OYEN GRID will connect with future technologies that expand communication, intelligence, knowledge management, and industrial innovation.
              </p>
            </div>

            {/* CTA Button */}
            <div className={`transition-all duration-700 transform ${
              steps.button ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-4 pointer-events-none'
            }`}>
              <Link
                href="/services"
                className="inline-flex items-center gap-2 px-6 py-3 text-xs font-semibold tracking-wider text-black bg-[#d4af37] hover:bg-[#e5c158] rounded-xl transition duration-300 group shadow-lg shadow-[#d4af37]/10"
              >
                <span>Explore OYEN GRID</span>
                <svg className="w-3.5 h-3.5 transition-transform duration-300 group-hover:translate-x-1" fill="none" stroke="currentColor" strokeWidth="2.5" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" d="M13.5 4.5 21 12m0 0-7.5 7.5M21 12H3" />
                </svg>
              </Link>
            </div>

            {/* Roadmap Widget */}
            <div className="pt-6 border-t border-white/10 space-y-4">
              <h4 className="text-[10px] font-bold text-[#d4af37] uppercase tracking-widest">
                Ecosystem Roadmap
              </h4>
              
              <div className="grid grid-cols-3 gap-4 text-xs font-medium">
                {/* Today */}
                <div className="space-y-1">
                  <div className="text-[9px] text-gray-500 uppercase tracking-wider">Today</div>
                  <div className="flex items-center gap-1.5 text-white">
                    <span className="w-1.5 h-1.5 rounded-full bg-[#d4af37]"></span>
                    <span>OYEN GRID</span>
                  </div>
                </div>

                {/* Next */}
                <div className="space-y-1">
                  <div className="text-[9px] text-gray-500 uppercase tracking-wider">Next</div>
                  <div className="space-y-1 text-gray-400">
                    <div className="flex items-center gap-1.5">
                      <span className="w-1.5 h-1.5 rounded-full border border-gray-600"></span>
                      <span>AI Engine</span>
                    </div>
                    <div className="flex items-center gap-1.5">
                      <span className="w-1.5 h-1.5 rounded-full border border-gray-600"></span>
                      <span>Knowledge Hub</span>
                    </div>
                  </div>
                </div>

                {/* Future */}
                <div className="space-y-1">
                  <div className="text-[9px] text-gray-500 uppercase tracking-wider">Future</div>
                  <div className="space-y-1 text-gray-500">
                    <div className="flex items-center gap-1.5">
                      <span className="w-1.5 h-1.5 rounded-full border border-gray-800"></span>
                      <span className="text-[10px] leading-tight">Energy Tech</span>
                    </div>
                    <div className="flex items-center gap-1.5">
                      <span className="w-1.5 h-1.5 rounded-full border border-gray-800"></span>
                      <span className="text-[10px] leading-tight">Industrial Systems</span>
                    </div>
                  </div>
                </div>
              </div>
            </div>

          </div>

          {/* Right Column: Visual Storytelling (Diagram + Dashboard) */}
          <div className="lg:col-span-7 grid grid-cols-1 md:grid-cols-12 gap-8 items-center bg-[#0d0d0d] border border-white/5 rounded-3xl p-8 relative overflow-hidden">
            
            {/* Soft Ambient Light inside visual box */}
            <div className="absolute top-1/2 left-1/3 -translate-x-1/2 -translate-y-1/2 w-48 h-48 bg-[#d4af37]/5 rounded-full blur-[60px] pointer-events-none" />

            {/* Left Part: Apple-style Diagram */}
            <div className="md:col-span-5 flex flex-col items-center relative py-4">
              
              {/* OYEN GROUP Top Node */}
              <div className={`flex flex-col items-center transition-all duration-700 ${
                steps.logo ? 'opacity-100 scale-100' : 'opacity-0 scale-95'
              }`}>
                <div className="w-9 h-9 rounded-full bg-gradient-to-br from-[#1c1c1c] to-black border border-white/20 flex items-center justify-center shadow-lg">
                  <span className="text-xs font-bold text-white tracking-tighter">O</span>
                </div>
                <span className="text-[9px] font-bold tracking-widest uppercase mt-1.5 text-gray-400">Oyen Group</span>
              </div>

              {/* Vertical Line 1 (from Top Node to Oyen Grid) */}
              <div className="w-[1px] relative h-10 overflow-hidden my-1">
                <div className={`absolute inset-0 bg-gradient-to-b from-[#d4af37] to-transparent transition-all duration-[600ms] ease-out origin-top transform ${
                  steps.line1 ? 'scale-y-100' : 'scale-y-0'
                }`} />
              </div>

              {/* OYEN GRID Center Node */}
              <div className={`relative px-4 py-2.5 rounded-xl bg-black border transition-all duration-700 z-10 ${
                steps.gridNode 
                  ? 'border-[#d4af37] shadow-[0_0_35px_rgba(212,175,55,0.2)] scale-100' 
                  : 'border-white/10 opacity-30 scale-95'
              }`}>
                <div className="text-[10px] font-semibold tracking-wider text-[#d4af37] uppercase text-center">Oyen Grid</div>
                <div className="text-[8px] text-gray-500 uppercase tracking-widest text-center mt-0.5">Flagship OS</div>
              </div>

              {/* Vertical Line 2 (Branching out downwards) */}
              <div className="w-[1px] relative h-8 overflow-hidden my-1">
                <div className={`absolute inset-0 bg-gradient-to-b from-[#d4af37] to-white/10 transition-all duration-[600ms] ease-out origin-top transform ${
                  steps.line2 ? 'scale-y-100' : 'scale-y-0'
                }`} />
              </div>

              {/* Branched Audience tags */}
              <div className={`w-full flex flex-col items-center gap-1.5 transition-all duration-700 ${
                steps.tags ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-2'
              }`}>
                <div className="flex gap-1">
                  <span className="text-[9px] font-medium px-2 py-0.5 rounded-md bg-white/5 border border-white/10 text-gray-300">Bootcamps</span>
                  <span className="text-[9px] font-medium px-2 py-0.5 rounded-md bg-white/5 border border-white/10 text-gray-300">Webinars</span>
                </div>
                <div className="flex gap-1">
                  <span className="text-[9px] font-medium px-2 py-0.5 rounded-md bg-white/5 border border-white/10 text-gray-300">Education</span>
                  <span className="text-[9px] font-medium px-2 py-0.5 rounded-md bg-white/5 border border-white/10 text-gray-300">Corporate</span>
                </div>
                <span className="text-[9px] font-medium px-2.5 py-0.5 rounded-md bg-[#d4af37]/5 border border-[#d4af37]/15 text-[#d4af37]">Organizations</span>
              </div>

            </div>

            {/* Right Part: Premium Dashboard Preview */}
            <div className="md:col-span-7">
              <div className={`bg-[#050505]/90 border border-white/10 rounded-2xl p-4.5 shadow-2xl transition-all duration-1000 transform ${
                steps.dashboard ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
              }`}>
                {/* Header bar */}
                <div className="flex items-center justify-between pb-3 border-b border-white/10 mb-3.5">
                  <div className="flex items-center gap-2">
                    <span className="w-2 h-2 rounded-full bg-[#d4af37]"></span>
                    <span className="text-[10px] font-bold tracking-wider text-white uppercase">Oyen Grid OS</span>
                  </div>
                  <span className="text-[8px] font-bold text-gray-500 bg-white/5 border border-white/10 px-1.5 py-0.5 rounded-md uppercase">V1.0 Active</span>
                </div>

                {/* Dashboard Metrics grid */}
                <div className="grid grid-cols-2 gap-3.5 mb-3.5">
                  <div className="bg-white/3 border border-white/5 rounded-xl p-2.5">
                    <div className="text-[8px] text-gray-500 uppercase tracking-wider">Active Cohorts</div>
                    <div className="text-base font-bold text-[#d4af37] mt-0.5">14</div>
                    <div className="w-full bg-white/5 h-[3px] rounded-full mt-2 overflow-hidden">
                      <div className="bg-[#d4af37] h-full w-[70%]" />
                    </div>
                  </div>

                  <div className="bg-white/3 border border-white/5 rounded-xl p-2.5">
                    <div className="text-[8px] text-gray-500 uppercase tracking-wider">Participants</div>
                    <div className="text-base font-bold text-white mt-0.5">1,280</div>
                    <div className="w-full bg-white/5 h-[3px] rounded-full mt-2 overflow-hidden">
                      <div className="bg-[#d4af37] h-full w-[85%]" />
                    </div>
                  </div>
                </div>

                {/* mini charts / lists */}
                <div className="space-y-2">
                  <div className="flex items-center justify-between text-[8px] text-gray-400 bg-white/3 border border-white/5 rounded-lg p-2">
                    <span>Attendance Rate</span>
                    <span className="font-semibold text-white">96.4%</span>
                  </div>
                  <div className="flex items-center justify-between text-[8px] text-gray-400 bg-white/3 border border-white/5 rounded-lg p-2">
                    <span>Certificates Issued</span>
                    <span className="font-semibold text-white">342</span>
                  </div>
                  <div className="flex items-center justify-between text-[8px] text-gray-400 bg-white/3 border border-white/5 rounded-lg p-2">
                    <span>Integrations Status</span>
                    <span className="font-semibold text-[#d4af37]">Ready</span>
                  </div>
                </div>

              </div>
            </div>

          </div>

        </div>

      </div>
    </section>
  );
}
