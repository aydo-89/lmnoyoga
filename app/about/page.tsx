import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'About',
  description:
    "Meet Liane, your guide on the journey to wellness. Learn about her background, philosophy, and approach to yoga and sound healing.",
};

export default function About() {
  const credentials = [
    {
      title: '500-Hour Yoga Teacher Training',
      org: 'Yoga Alliance Certified',
    },
    {
      title: 'Kundalini & Kriya Yoga Specialist',
      org: 'Advanced Training',
    },
    {
      title: 'Sound Healing Certification',
      org: 'Vibrational Sound Association',
    },
    {
      title: 'Trauma-Informed Yoga',
      org: 'Integrative Trauma Studies',
    },
  ];

  return (
    <>
      {/* Hero Section */}
      <section className="relative h-[400px] flex items-center justify-center text-white bg-sage">
        <div className="relative z-10 text-center px-4 sm:px-6 lg:px-8">
          <h1 className="text-5xl md:text-6xl font-bold mb-4 animate-fade-in">
            About Liane
          </h1>
          <p className="text-xl md:text-2xl animate-fade-in delay-100">
            Guiding you home to yourself
          </p>
        </div>
      </section>

      {/* Story Section */}
      <section className="py-20 bg-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center mb-16">
            {/* Photo Placeholder */}
            <div className="aspect-square bg-pale-blue rounded-lg flex items-center justify-center">
              <span className="text-6xl">🧘‍♀️</span>
            </div>

            {/* Story */}
            <div className="space-y-6">
              <h2 className="text-3xl md:text-4xl font-bold text-rich-black">
                My Journey
              </h2>
              <p className="text-rich-black/80 leading-relaxed">
                My path to yoga began over a decade ago, not in a studio, but in a moment of deep personal transformation. What started as a search for physical wellness quickly became a profound journey of self-discovery and healing.
              </p>
              <p className="text-rich-black/80 leading-relaxed">
                Through the practices of Kundalini and Kriya yoga, I discovered the power of breath, movement, and intentional awareness. Sound healing found me later, opening new dimensions of healing that words alone cannot express.
              </p>
              <p className="text-rich-black/80 leading-relaxed">
                Today, I'm honored to share these transformative practices with others. Whether you're stepping onto the mat for the first time or deepening an established practice, I'm here to support your journey with compassion, expertise, and authentic presence.
              </p>
            </div>
          </div>

          {/* Philosophy */}
          <div className="bg-light-gray rounded-lg p-8 md:p-12">
            <h2 className="text-3xl md:text-4xl font-bold text-rich-black mb-6">
              My Philosophy
            </h2>
            <div className="space-y-4 text-rich-black/80 leading-relaxed">
              <p>
                I believe that yoga is not about perfecting poses—it's about coming home to yourself. It's about creating space to breathe, to feel, to release what no longer serves you, and to remember who you truly are beneath the layers of stress and expectation.
              </p>
              <p>
                Every body is different, every journey is unique. My role is not to teach you to be like anyone else, but to guide you in discovering your own inner wisdom and strength.
              </p>
              <p className="italic text-rich-black border-l-4 border-sage pl-6 py-2">
                "The practice is not about touching your toes. It's about what you learn on the way down."
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Credentials */}
      <section className="py-20 bg-pale-blue">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-rich-black mb-4">
              Training & Certifications
            </h2>
            <p className="text-lg text-rich-black/70">
              Committed to ongoing learning and excellence in teaching
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {credentials.map((cred, index) => (
              <div
                key={index}
                className={`bg-white rounded-lg p-6 shadow-sm border-l-4 border-sage animate-fade-in delay-${(index + 1) * 100}`}
              >
                <h3 className="text-xl font-bold text-rich-black mb-2">
                  {cred.title}
                </h3>
                <p className="text-rich-black/70">{cred.org}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-16 bg-white">
        <div className="max-w-3xl mx-auto text-center px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl md:text-4xl font-bold text-rich-black mb-6">
            Let's Practice Together
          </h2>
          <p className="text-lg text-rich-black/70 mb-8">
            Whether you're curious about trying yoga for the first time or looking to deepen your existing practice, I'd love to connect with you.
          </p>
          <a
            href="/contact"
            className="inline-block bg-sage hover:bg-sage-700 text-white font-semibold px-8 py-3 rounded-lg transition-all duration-200 transform hover:scale-105"
          >
            Get In Touch
          </a>
        </div>
      </section>
    </>
  );
}
