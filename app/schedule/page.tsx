import type { Metadata } from 'next';
import Link from 'next/link';

export const metadata: Metadata = {
  title: 'Schedule',
  description:
    'View our weekly class schedule and book your spot. Classes available throughout the week for all levels.',
};

export default function Schedule() {
  const schedule = [
    {
      day: 'Monday',
      classes: [
        {
          time: '6:00 AM',
          name: 'Morning Vinyasa Flow',
          duration: '60 min',
          level: 'All Levels',
        },
        {
          time: '6:00 PM',
          name: 'Kundalini Yoga',
          duration: '90 min',
          level: 'All Levels',
        },
      ],
    },
    {
      day: 'Tuesday',
      classes: [
        {
          time: '9:00 AM',
          name: 'Gentle Flow',
          duration: '60 min',
          level: 'Beginner',
        },
        {
          time: '7:00 PM',
          name: 'Sound Bath',
          duration: '60 min',
          level: 'All Levels',
        },
      ],
    },
    {
      day: 'Wednesday',
      classes: [
        {
          time: '6:00 AM',
          name: 'Power Yoga',
          duration: '75 min',
          level: 'Intermediate/Advanced',
        },
        {
          time: '5:30 PM',
          name: 'Restorative Yoga',
          duration: '75 min',
          level: 'All Levels',
        },
      ],
    },
    {
      day: 'Thursday',
      classes: [
        {
          time: '9:00 AM',
          name: 'Vinyasa Flow',
          duration: '60 min',
          level: 'All Levels',
        },
        {
          time: '6:00 PM',
          name: 'Kriya Yoga',
          duration: '90 min',
          level: 'All Levels',
        },
      ],
    },
    {
      day: 'Friday',
      classes: [
        {
          time: '6:00 AM',
          name: 'Morning Flow',
          duration: '60 min',
          level: 'All Levels',
        },
        {
          time: '6:00 PM',
          name: 'Yin Yoga',
          duration: '75 min',
          level: 'All Levels',
        },
      ],
    },
    {
      day: 'Saturday',
      classes: [
        {
          time: '8:00 AM',
          name: 'Vinyasa Flow',
          duration: '75 min',
          level: 'All Levels',
        },
        {
          time: '10:00 AM',
          name: 'Sound Bath Healing',
          duration: '60 min',
          level: 'All Levels',
        },
      ],
    },
    {
      day: 'Sunday',
      classes: [
        {
          time: '9:00 AM',
          name: 'Gentle Sunday Flow',
          duration: '60 min',
          level: 'All Levels',
        },
        {
          time: '4:00 PM',
          name: 'Restorative & Meditation',
          duration: '75 min',
          level: 'All Levels',
        },
      ],
    },
  ];

  return (
    <>
      {/* Hero Section */}
      <section className="relative h-[300px] flex items-center justify-center text-white">
        <div className="absolute inset-0 hero-gradient" />
        <div className="relative z-10 text-center px-4 sm:px-6 lg:px-8">
          <h1 className="text-5xl md:text-6xl font-serif font-bold mb-4">
            Class Schedule
          </h1>
          <p className="text-xl md:text-2xl text-cream-100">
            Find your perfect time to practice
          </p>
        </div>
      </section>

      {/* Schedule Grid */}
      <section className="py-20 bg-cream-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="mb-12 text-center">
            <p className="text-lg text-sage-600">
              All classes are held at our studio in Minneapolis-St. Paul.
              <br />
              Drop-ins welcome • Class passes available
            </p>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
            {schedule.map((day, index) => (
              <div
                key={day.day}
                className={`bg-white rounded-lg shadow-md overflow-hidden animate-fade-in delay-${(index % 4 + 1) * 100}`}
              >
                <div className="bg-sage-600 text-white px-6 py-4">
                  <h2 className="text-2xl font-serif font-bold">{day.day}</h2>
                </div>
                <div className="p-6 space-y-4">
                  {day.classes.map((classItem, i) => (
                    <div
                      key={i}
                      className="border-l-4 border-gold-400 pl-4 py-2"
                    >
                      <div className="flex items-start justify-between mb-2">
                        <div>
                          <h3 className="text-lg font-semibold text-sage-800">
                            {classItem.name}
                          </h3>
                          <p className="text-sage-600 text-sm">
                            {classItem.level}
                          </p>
                        </div>
                        <div className="text-right">
                          <p className="font-bold text-sage-800">
                            {classItem.time}
                          </p>
                          <p className="text-sm text-sage-600">
                            {classItem.duration}
                          </p>
                        </div>
                      </div>
                      <Link
                        href="/contact"
                        className="inline-block text-sm bg-sage-100 hover:bg-sage-200 text-sage-700 font-medium px-4 py-1 rounded transition-colors duration-200"
                      >
                        Book This Class
                      </Link>
                    </div>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Private Sessions */}
      <section className="py-16 bg-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="bg-sage-50 rounded-lg p-8 md:p-12 text-center">
            <h2 className="text-3xl font-serif font-bold text-sage-800 mb-4">
              Need a Different Time?
            </h2>
            <p className="text-lg text-sage-700 mb-6">
              Private sessions available by appointment. Flexible scheduling to
              fit your life.
            </p>
            <Link
              href="/contact"
              className="inline-block bg-sage-600 hover:bg-sage-700 text-white font-semibold px-8 py-3 rounded-lg transition-all duration-200 transform hover:scale-105"
            >
              Schedule Private Session
            </Link>
          </div>
        </div>
      </section>

      {/* Policies */}
      <section className="py-16 bg-cream-50">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl font-serif font-bold text-sage-800 mb-8 text-center">
            Studio Policies
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div className="bg-white rounded-lg p-6">
              <h3 className="text-xl font-semibold text-sage-800 mb-3">
                Arrival
              </h3>
              <p className="text-sage-700">
                Please arrive 10-15 minutes early to get settled and sign in.
                Late arrivals may not be admitted to maintain a peaceful
                environment.
              </p>
            </div>
            <div className="bg-white rounded-lg p-6">
              <h3 className="text-xl font-semibold text-sage-800 mb-3">
                Cancellation
              </h3>
              <p className="text-sage-700">
                Cancel at least 2 hours before class time for a full credit.
                Late cancellations will be charged.
              </p>
            </div>
            <div className="bg-white rounded-lg p-6">
              <h3 className="text-xl font-semibold text-sage-800 mb-3">
                What to Bring
              </h3>
              <p className="text-sage-700">
                Mats and props provided, but you're welcome to bring your own.
                Water bottle recommended.
              </p>
            </div>
            <div className="bg-white rounded-lg p-6">
              <h3 className="text-xl font-semibold text-sage-800 mb-3">
                First Time?
              </h3>
              <p className="text-sage-700">
                New students receive 20% off their first class. Just mention
                it's your first visit when booking!
              </p>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
