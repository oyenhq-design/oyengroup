export const metadata = {
  title: 'About Us - Oyengroup',
  description: 'Learn more about Oyengroup and our mission.',
};

export default function About() {
  return (
    <main>
      <section className="bg-black text-white py-20 md:py-24 lg:py-32">
        <div className="max-w-7xl mx-auto px-6">
          <h1 className="text-4xl md:text-5xl font-bold mb-6 leading-tight">About Oyengroup</h1>
          <p className="text-base md:text-lg text-[#9ca3af] leading-relaxed max-w-2xl">
            Discover our story, values, and commitment to excellence.
          </p>
        </div>
      </section>

      <section className="py-20 md:py-24 lg:py-32 bg-black">
        <div className="max-w-7xl mx-auto px-6">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center mb-16">
            <div>
              <h2 className="text-3xl font-bold text-white mb-6">Our Story</h2>
              <p className="text-lg text-[#9ca3af] mb-4">
                Oyengroup was founded with a simple mission: to deliver exceptional value to our
                clients through innovation, expertise, and dedication.
              </p>
              <p className="text-lg text-[#9ca3af]">
                Over the years, we've grown to become a trusted partner for businesses of all
                sizes, helping them navigate challenges and seize opportunities.
              </p>
            </div>
            <div className="bg-[#111827] h-64 rounded-lg flex items-center justify-center border border-[#1f2937]">
              <span className="text-[#9ca3af]">Your company image here</span>
            </div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-16">
            <div className="text-center">
              <h3 className="text-4xl font-bold text-[#d4af37] mb-2">500+</h3>
              <p className="text-white">Happy Clients</p>
            </div>
            <div className="text-center">
              <h3 className="text-4xl font-bold text-[#d4af37] mb-2">15+</h3>
              <p className="text-white">Years Experience</p>
            </div>
            <div className="text-center">
              <h3 className="text-4xl font-bold text-[#d4af37] mb-2">50+</h3>
              <p className="text-white">Team Members</p>
            </div>
          </div>

          <div className="bg-[#111827] p-12 rounded-lg border border-[#1f2937]">
            <h2 className="text-3xl font-bold text-white mb-8">Our Values</h2>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              <div>
                <h3 className="text-xl font-bold text-[#d4af37] mb-3">Innovation</h3>
                <p className="text-[#9ca3af]">
                  We constantly push boundaries and embrace new technologies to deliver
                  cutting-edge solutions.
                </p>
              </div>
              <div>
                <h3 className="text-xl font-bold text-[#d4af37] mb-3">Integrity</h3>
                <p className="text-[#9ca3af]">
                  Trust and honesty form the foundation of all our business relationships and
                  operations.
                </p>
              </div>
              <div>
                <h3 className="text-xl font-bold text-[#d4af37] mb-3">Excellence</h3>
                <p className="text-[#9ca3af]">
                  We are committed to delivering the highest quality in everything we do, every
                  single day.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
}
