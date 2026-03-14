import Link from 'next/link';
import type { Metadata } from 'next';
import ScrollReveal from '../components/ScrollReveal';

export const metadata: Metadata = {
  title: 'Schedule',
  description: 'Weekly class schedule.',
};

const schedule = [
  { day: 'Monday', classes: [{ time: '6:00 AM', name: 'Vinyasa Flow' }, { time: '7:00 PM', name: 'Restorative' }] },
  { day: 'Tuesday', classes: [{ time: '9:00 AM', name: 'Kundalini' }, { time: '5:30 PM', name: 'Vinyasa Flow' }] },
  { day: 'Wednesday', classes: [{ time: '6:00 AM', name: 'Vinyasa Flow' }, { time: '7:30 PM', name: 'Sound Bath' }] },
  { day: 'Thursday', classes: [{ time: '9:00 AM', name: 'Kundalini' }, { time: '5:30 PM', name: 'Vinyasa Flow' }] },
  { day: 'Friday', classes: [{ time: '6:00 AM', name: 'Vinyasa Flow' }, { time: '6:00 PM', name: 'Restorative' }] },
  { day: 'Saturday', classes: [{ time: '9:00 AM', name: 'Kundalini' }, { time: '11:00 AM', name: 'Sound Bath' }] },
  { day: 'Sunday', classes: [{ time: '10:00 AM', name: 'Restorative' }] },
];

export default function Schedule() {
  return (
    <div className="min-h-screen">
      {/* Hero */}
      <section className="pt-40 pb-20 px-6 lg:px-12">
        <div className="max-w-4xl mx-auto">
          <h1 className="font-display display-massive font-light text-[#f4f4f4]/90 animate-fade-in opacity-0">
            Schedule
          </h1>
        </div>
      </section>

      <div className="section-divider" />

      {/* Schedule */}
      <section className="py-20 px-6 lg:px-12">
        <div className="max-w-4xl mx-auto">
          {schedule.map((day) => (
            <ScrollReveal key={day.day}>
              <div className="py-10 border-b border-[#f4f4f4]/[0.04] last:border-b-0 flex flex-col md:flex-row md:items-baseline gap-6">
                <div className="w-48 shrink-0">
                  <span className="font-display text-2xl tracking-editorial text-[#f4f4f4]/25">
                    {day.day}
                  </span>
                </div>
                <div className="flex-1 space-y-4">
                  {day.classes.map((cls) => (
                    <div
                      key={`${day.day}-${cls.time}`}
                      className="flex items-baseline gap-8 group"
                    >
                      <span className="text-sm tracking-[0.3em] text-[#9DBBAE]/40 w-24 shrink-0 font-display">
                        {cls.time}
                      </span>
                      <span className="font-display text-xl text-[#f4f4f4]/50 group-hover:text-[#f4f4f4]/70 transition-colors duration-500">
                        {cls.name}
                      </span>
                    </div>
                  ))}
                </div>
              </div>
            </ScrollReveal>
          ))}
        </div>
      </section>

      <section className="py-24 px-6 lg:px-12 text-center">
        <ScrollReveal>
          <p className="text-[#f4f4f4]/15 text-xs tracking-[0.4em] uppercase mb-12">
            Schedule subject to change
          </p>
          <Link
            href="/contact"
            className="hover-reveal-line border border-[#f4f4f4]/10 hover:border-[#9DBBAE]/40 text-[#f4f4f4]/60 hover:text-[#f4f4f4] text-sm tracking-[0.3em] uppercase px-12 py-5 transition-all duration-700 inline-block"
          >
            Reserve a Spot
          </Link>
        </ScrollReveal>
      </section>
    </div>
  );
}
