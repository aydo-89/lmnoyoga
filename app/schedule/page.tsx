import Link from 'next/link';
import type { Metadata } from 'next';

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
    <div className="page-content pt-32 pb-24 px-6 lg:px-12 min-h-screen">
      <div className="max-w-4xl mx-auto">
        <h1 className="font-display text-5xl md:text-7xl font-light tracking-editorial mb-4">
          Schedule
        </h1>
        <div className="w-12 h-px bg-[#9DBBAE] mb-16" />

        <div className="space-y-0">
          {schedule.map((day) => (
            <div
              key={day.day}
              className="py-8 border-b border-[#f4f4f4]/5 last:border-b-0 flex flex-col md:flex-row md:items-baseline gap-4"
            >
              <div className="w-40 shrink-0">
                <span className="font-display text-xl tracking-editorial text-[#f4f4f4]/40">
                  {day.day}
                </span>
              </div>
              <div className="flex-1 space-y-3">
                {day.classes.map((cls) => (
                  <div
                    key={`${day.day}-${cls.time}`}
                    className="flex items-baseline gap-6"
                  >
                    <span className="text-sm tracking-wide text-[#9DBBAE] w-20 shrink-0">
                      {cls.time}
                    </span>
                    <span className="font-display text-xl text-[#f4f4f4]/70">
                      {cls.name}
                    </span>
                  </div>
                ))}
              </div>
            </div>
          ))}
        </div>

        <div className="mt-20 text-center">
          <p className="text-[#f4f4f4]/30 text-sm tracking-wide-editorial uppercase mb-8">
            Schedule subject to change
          </p>
          <Link
            href="/contact"
            className="border border-[#f4f4f4]/20 hover:border-[#9DBBAE] text-[#f4f4f4]/80 hover:text-[#f4f4f4] text-sm tracking-wide-editorial uppercase px-10 py-4 transition-all duration-500 inline-block"
          >
            Reserve a Spot
          </Link>
        </div>
      </div>
    </div>
  );
}
