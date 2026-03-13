import type { Metadata } from 'next';
import Link from 'next/link';

export const metadata: Metadata = {
  title: 'Classes & Services',
  description:
    'Explore our range of yoga classes, sound baths, private sessions, and workshops. Find the perfect practice for your wellness journey.',
};

export default function Classes() {
  const services = [
    {
      title: 'Vinyasa Flow Yoga',
      description:
        'Dynamic, breath-synchronized movement connecting poses in a flowing sequence. Build strength, flexibility, and cardiovascular health while cultivating mindfulness.',
      duration: '60-75 minutes',
      level: 'All Levels',
      price: '$25 per class',
      benefits: [
        'Increases strength and flexibility',
        'Improves cardiovascular health',
        'Enhances mind-body connection',
        'Reduces stress and anxiety',
      ],
    },
    {
      title: 'Kundalini & Kriya Yoga',
      description:
        'Awakening practice combining dynamic movements, breathwork (pranayama), meditation, and mantra. Experience powerful energy shifts and deep transformation.',
      duration: '90 minutes',
      level: 'All Levels',
      price: '$30 per class',
      benefits: [
        'Awakens vital energy',
        'Deepens spiritual awareness',
        'Balances nervous system',
        'Enhances mental clarity',
      ],
    },
    {
      title: 'Sound Bath Healing',
      description:
        'Immersive vibrational healing experience using crystal singing bowls, gongs, chimes, and other acoustic instruments. Deeply restorative and meditative.',
      duration: '60 minutes',
      level: 'All Levels',
      price: '$35 per session',
      benefits: [
        'Profound relaxation',
        'Stress and tension release',
        'Improved sleep quality',
        'Emotional balance',
      ],
    },
    {
      title: 'Restorative Yoga',
      description:
        'Gentle, supported poses held for extended periods to promote deep relaxation and healing. Perfect for recovery, stress relief, and nervous system regulation.',
      duration: '75 minutes',
      level: 'All Levels',
      price: '$25 per class',
      benefits: [
        'Deep physical and mental relaxation',
        'Supports injury recovery',
        'Calms nervous system',
        'Improves flexibility',
      ],
    },
    {
      title: 'Private Sessions',
      description:
        'One-on-one personalized yoga, breathwork, or sound healing tailored to your specific needs, goals, and wellness journey. Includes custom practice design.',
      duration: '60-90 minutes',
      level: 'Customized',
      price: '$100-150 per session',
      benefits: [
        'Fully personalized attention',
        'Address specific goals or challenges',
        'Flexible scheduling',
        'Custom practice sequences',
      ],
    },
    {
      title: 'Workshops & Retreats',
      description:
        'Deep-dive experiences combining multiple modalities. Seasonal workshops on specific themes (chakra healing, breathwork mastery, etc.) and immersive retreat experiences.',
      duration: '3 hours - Multi-day',
      level: 'Varies',
      price: 'Varies by program',
      benefits: [
        'Intensive learning and growth',
        'Community connection',
        'Transformative experiences',
        'Skills to take home',
      ],
    },
  ];

  return (
    <>
      {/* Hero Section */}
      <section className="relative h-[400px] flex items-center justify-center text-white bg-sage">
        <div className="relative z-10 text-center px-4 sm:px-6 lg:px-8">
          <h1 className="text-5xl md:text-6xl font-bold mb-4 animate-fade-in">
            Classes & Services
          </h1>
          <p className="text-xl md:text-2xl animate-fade-in delay-100">
            Find the practice that calls to you
          </p>
        </div>
      </section>

      {/* Services Grid */}
      <section className="py-20 bg-background">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="space-y-12">
            {services.map((service, index) => (
              <div
                key={service.title}
                className={`bg-white rounded-lg shadow-md overflow-hidden animate-fade-in delay-${(index % 3 + 1) * 100}`}
              >
                <div className="grid grid-cols-1 lg:grid-cols-3">
                  {/* Main Info */}
                  <div className="lg:col-span-2 p-8">
                    <h2 className="text-3xl font-bold text-rich-black mb-3">
                      {service.title}
                    </h2>
                    <p className="text-rich-black/80 mb-6 leading-relaxed">
                      {service.description}
                    </p>

                    {/* Benefits */}
                    <div>
                      <h3 className="text-lg font-semibold text-rich-black mb-3">
                        Benefits:
                      </h3>
                      <ul className="grid grid-cols-1 md:grid-cols-2 gap-2">
                        {service.benefits.map((benefit, i) => (
                          <li key={i} className="flex items-start text-rich-black/70">
                            <span className="text-sage mr-2">✓</span>
                            {benefit}
                          </li>
                        ))}
                      </ul>
                    </div>
                  </div>

                  {/* Details & CTA */}
                  <div className="bg-pale-blue p-8 flex flex-col justify-between">
                    <div className="space-y-4 mb-6">
                      <div>
                        <p className="text-sm text-rich-black/70 font-semibold mb-1">
                          Duration
                        </p>
                        <p className="text-rich-black">{service.duration}</p>
                      </div>
                      <div>
                        <p className="text-sm text-rich-black/70 font-semibold mb-1">
                          Level
                        </p>
                        <p className="text-rich-black">{service.level}</p>
                      </div>
                      <div>
                        <p className="text-sm text-rich-black/70 font-semibold mb-1">
                          Investment
                        </p>
                        <p className="text-rich-black font-bold text-lg">
                          {service.price}
                        </p>
                      </div>
                    </div>

                    <Link
                      href="/contact"
                      className="block text-center bg-sage hover:bg-sage-700 text-white font-semibold px-6 py-3 rounded-lg transition-all duration-200 transform hover:scale-105"
                    >
                      Book Now
                    </Link>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Packages Section */}
      <section className="py-20 bg-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-4xl font-bold text-rich-black mb-4">
              Class Packages
            </h2>
            <p className="text-lg text-rich-black/70">
              Save with our multi-class packages
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="bg-pale-blue rounded-lg p-8 text-center border-2 border-silver">
              <h3 className="text-2xl font-bold text-rich-black mb-2">
                5-Class Pass
              </h3>
              <p className="text-4xl font-bold text-sage mb-2">$110</p>
              <p className="text-rich-black/70 mb-4">$22 per class</p>
              <p className="text-sm text-rich-black/60">Valid for 2 months</p>
            </div>

            <div className="bg-sage rounded-lg p-8 text-center border-2 border-sage-700 transform scale-105 shadow-lg text-white">
              <div className="bg-white text-sage text-xs font-bold py-1 px-3 rounded-full inline-block mb-3">
                BEST VALUE
              </div>
              <h3 className="text-2xl font-bold mb-2">
                10-Class Pass
              </h3>
              <p className="text-4xl font-bold mb-2">$200</p>
              <p className="mb-4">$20 per class</p>
              <p className="text-sm">Valid for 3 months</p>
            </div>

            <div className="bg-pale-blue rounded-lg p-8 text-center border-2 border-silver">
              <h3 className="text-2xl font-bold text-rich-black mb-2">
                Monthly Unlimited
              </h3>
              <p className="text-4xl font-bold text-sage mb-2">$150</p>
              <p className="text-rich-black/70 mb-4">Unlimited classes</p>
              <p className="text-sm text-rich-black/60">Auto-renews monthly</p>
            </div>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-16 bg-light-gray">
        <div className="max-w-3xl mx-auto text-center px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl md:text-4xl font-bold text-rich-black mb-6">
            Not Sure Where to Start?
          </h2>
          <p className="text-lg text-rich-black/70 mb-8">
            Try our AI-powered Practice Builder to create a personalized sequence, or reach out for a free consultation.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link
              href="/practice-builder"
              className="bg-sage hover:bg-sage-700 text-white font-semibold px-8 py-3 rounded-lg transition-all duration-200 transform hover:scale-105"
            >
              Build Your Practice
            </Link>
            <Link
              href="/contact"
              className="bg-white hover:bg-pale-blue text-rich-black font-semibold px-8 py-3 rounded-lg transition-all duration-200 border-2 border-silver"
            >
              Contact Us
            </Link>
          </div>
        </div>
      </section>
    </>
  );
}
