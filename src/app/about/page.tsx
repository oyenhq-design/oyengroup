export const metadata = {
  title: 'About Us - Oyengroup',
  description: 'Learn more about Oyengroup and our mission.',
};

export default function About() {
  return (
    <main>
      <section className="bg-linear-to-r from-blue-600 to-blue-800 text-white py-16 md:py-24">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <h1 className="text-4xl md:text-5xl font-bold mb-6">About Oyengroup</h1>
          <p className="text-xl text-blue-100 max-w-2xl">
            Discover our story, values, and commitment to excellence.
          </p>
        </div>
      </section>

      <section className="py-16 md:py-24">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center mb-16">
            <div>
              <h2 className="text-3xl font-bold text-gray-900 mb-6">Our Story</h2>
              <p className="text-lg text-gray-700 mb-4">
                Oyengroup was founded with a simple mission: to deliver exceptional value to our
                clients through innovation, expertise, and dedication.
              </p>
              <p className="text-lg text-gray-700">
                Over the years, we've grown to become a trusted partner for businesses of all
                sizes, helping them navigate challenges and seize opportunities.
              </p>
            </div>
            <div className="bg-blue-100 h-64 rounded-lg flex items-center justify-center">
              <span className="text-gray-400">Your company image here</span>
            </div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-16">
            <div className="text-center">
              <h3 className="text-4xl font-bold text-blue-600 mb-2">500+</h3>
              <p className="text-gray-700">Happy Clients</p>
            </div>
            <div className="text-center">
              <h3 className="text-4xl font-bold text-blue-600 mb-2">15+</h3>
              <p className="text-gray-700">Years Experience</p>
            </div>
            <div className="text-center">
              <h3 className="text-4xl font-bold text-blue-600 mb-2">50+</h3>
              <p className="text-gray-700">Team Members</p>
            </div>
          </div>

          <div className="bg-gray-50 p-12 rounded-lg">
            <h2 className="text-3xl font-bold text-gray-900 mb-8">Our Values</h2>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              <div>
                <h3 className="text-xl font-bold text-blue-600 mb-3">Innovation</h3>
                <p className="text-gray-700">
                  We constantly push boundaries and embrace new technologies to deliver
                  cutting-edge solutions.
                </p>
              </div>
              <div>
                <h3 className="text-xl font-bold text-blue-600 mb-3">Integrity</h3>
                <p className="text-gray-700">
                  Trust and honesty form the foundation of all our business relationships and
                  operations.
                </p>
              </div>
              <div>
                <h3 className="text-xl font-bold text-blue-600 mb-3">Excellence</h3>
                <p className="text-gray-700">
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
