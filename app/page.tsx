import Link from 'next/link';
import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Home',
  description:
    'Transform your practice with expert-led yoga classes, sound bath healing, and personalized wellness sessions in the Twin Cities.',
};

export default function Home() {
  const offerings = [
    {
      title: 'Yoga Classes',
      description:
        'Dynamic Vinyasa flows and restorative practices designed to build strength, flexibility, and inner peace.',
      icon: '🧘‍♀️',
    },
    {
      title: 'Sound Baths',
      description:
        'Immersive sound healing experiences using crystal bowls, gongs, and chimes to restore balance and harmony.',
      icon: '🎶',
    },
    {
      title: 'Kundalini & Kriya',
      description:
        'Traditional practices combining breath work, meditation, and movement to awaken your vital energy.',
      icon: '✨',
    },
    {
      title: 'Private Sessions',
      description:
        'Personalized one-on-one guidance tailored to your unique needs, goals, and wellness journey.',
      icon: '🌟',
    },
  ];

  const testimonials = [
    {
      text: "Liane's classes have transformed my practice. Her deep knowledge and warm presence create a truly healing space.",
      author: 'Sarah M.',
    },
    {
      text: "The sound baths are unlike anything I've experienced. I leave feeling completely renewed and centered.",
      author: 'Michael T.',
    },
    {
      text: "Her Kundalini sessions helped me break through barriers I didn't even know I had. Life-changing work.",
      author: 'Jessica L.',
    },
  ];

  return (
    <>
      {/* Hero Section */}
      <section className="relative h-[600px] flex items-center justify-center text-white">
        {/* Placeholder gradient background */}
        <div className="absolute inset-0 hero-gradient" />

        <div className="relative z-10 text-center px-4 sm:px-6 lg:px-8 max-w-4xl mx-auto">
          <h1 className="text-5xl md:text-6xl font-serif font-bold mb-6 animate-fade-in">
            Find Your Balance
          </h1>
          <p className="text-xl md:text-2xl mb-8 text-cream-100 animate-fade-in delay-100">
            Yoga, Sound Healing & Mindful Movement for Body and Soul
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center animate-fade-in delay-200">
            <Link
              href="/classes"
              className="bg-gold-500 hover:bg-gold-600 text-sage-900 font-semibold px-8 py-3 rounded-lg transition-all duration-200 transform hover:scale-105"
            >
              Explore Classes
            </Link>
            <Link
              href="/practice-builder"
              className="bg-white/20 hover:bg-white/30 backdrop-blur-sm text-white font-semibold px-8 py-3 rounded-lg transition-all duration-200 border-2 border-white/50"
            >
              Build Your Practice
            </Link>
          </div>
        </div>
      </section>

      {/* What We Offer */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-serif font-bold text-sage-800 mb-4">
              What We Offer
            </h2>
            <p className="text-lg text-sage-600 max-w-2xl mx-auto">
              Discover a range of practices designed to nourish your body, calm your mind, and awaken your spirit.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {offerings.map((offering, index) => (
              <div
                key={offering.title}
                className={`bg-cream-50 rounded-lg p-8 shadow-sm hover:shadow-md transition-shadow duration-200 animate-fade-in delay-${(index + 1) * 100}`}
              >
                <div className="text-5xl mb-4">{offering.icon}</div>
                <h3 className="text-2xl font-serif font-semibold text-sage-800 mb-3">
                  {offering.title}
                </h3>
                <p className="text-sage-600">{offering.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Testimonials */}
      <section className="py-20 bg-sage-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-serif font-bold text-sage-800 mb-4">
              What People Say
            </h2>
            <p className="text-lg text-sage-600">Voices from our community</p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {testimonials.map((testimonial, index) => (
              <div
                key={index}
                className={`bg-white rounded-lg p-8 shadow-sm animate-fade-in delay-${(index + 1) * 100}`}
              >
                <p className="text-sage-700 mb-4 italic">"{testimonial.text}"</p>
                <p className="text-sage-600 font-semibold">— {testimonial.author}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Banner */}
      <section className="py-20 bg-gradient-to-r from-sage-600 to-sage-700 text-white">
        <div className="max-w-4xl mx-auto text-center px-4 sm:px-6 lg:px-8">
          <h2 className="text-4xl md:text-5xl font-serif font-bold mb-6">
            Ready to Begin Your Practice?
          </h2>
          <p className="text-xl mb-8 text-cream-100">
            Join us for a class, experience a sound bath, or create your personalized practice.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link
              href="/schedule"
              className="bg-gold-500 hover:bg-gold-600 text-sage-900 font-semibold px-8 py-3 rounded-lg transition-all duration-200 transform hover:scale-105"
            >
              View Schedule
            </Link>
            <Link
              href="/contact"
              className="bg-white/20 hover:bg-white/30 backdrop-blur-sm text-white font-semibold px-8 py-3 rounded-lg transition-all duration-200 border-2 border-white/50"
            >
              Get In Touch
            </Link>
          </div>
        </div>
      </section>
    </>
  );
}
