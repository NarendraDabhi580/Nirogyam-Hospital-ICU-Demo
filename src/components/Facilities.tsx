import { useRef } from 'react';
import { motion, useInView } from 'framer-motion';
import { Clock, ShieldCheck, Users, Accessibility, Thermometer, Microscope, Wifi, HeartPulse } from 'lucide-react';

const facilities = [
  {
    icon: Clock,
    title: '24/7 Emergency',
    description: 'Round-the-clock emergency services with a dedicated trauma team on standby.',
  },
  {
    icon: ShieldCheck,
    title: 'Isolation ICU',
    description: '8-bed negative-pressure isolation ICU for critical and infectious patients.',
  },
  {
    icon: Users,
    title: 'OPD Services',
    description: 'Structured outpatient consultations across all major departments daily.',
  },
  {
    icon: Accessibility,
    title: 'Wheelchair Accessible',
    description: 'Fully accessible facility with ramps, lifts, and dedicated support staff.',
  },
  {
    icon: Thermometer,
    title: 'Operation Theatre',
    description: 'HEPA-filtered, modular OT suite with advanced laparoscopic equipment.',
  },
  {
    icon: Microscope,
    title: 'In-House Lab',
    description: 'Onsite diagnostics with rapid turnaround for blood, urine, and imaging tests.',
  },
  {
    icon: Wifi,
    title: 'Digital Records',
    description: 'Paperless patient records system for seamless care coordination.',
  },
  {
    icon: HeartPulse,
    title: 'Cardiac Monitoring',
    description: 'Continuous cardiac monitoring across all ICU and general ward beds.',
  },
];

export default function Facilities() {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: '-80px' });

  return (
    <section id="facilities" className="py-24 lg:py-32 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div ref={ref} className="flex flex-col gap-16">
          <div className="text-center flex flex-col gap-3 max-w-2xl mx-auto">
            <motion.span
              initial={{ opacity: 0 }}
              animate={inView ? { opacity: 1 } : {}}
              transition={{ duration: 0.5 }}
              className="text-blue-600 text-sm font-semibold tracking-wider uppercase"
            >
              World-Class Facilities
            </motion.span>
            <motion.h2
              initial={{ opacity: 0, y: 20 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.55, delay: 0.1 }}
              className="text-4xl lg:text-5xl font-bold text-slate-900 tracking-tight leading-tight"
            >
              Infrastructure Built for Better Outcomes
            </motion.h2>
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.55, delay: 0.2 }}
              className="text-slate-500 text-base leading-relaxed"
            >
              Every corner of Nirogyam is designed to support clinical excellence and patient comfort.
            </motion.p>
          </div>

          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-5">
            {facilities.map((f, i) => {
              const Icon = f.icon;
              return (
                <motion.div
                  key={f.title}
                  initial={{ opacity: 0, y: 30 }}
                  animate={inView ? { opacity: 1, y: 0 } : {}}
                  transition={{ delay: i * 0.08, duration: 0.5, ease: 'easeOut' }}
                  className="group flex flex-col gap-4 p-6 rounded-2xl border border-slate-100 hover:border-blue-100 hover:bg-blue-50/30 transition-all duration-300"
                >
                  <div className="w-11 h-11 bg-blue-50 rounded-xl flex items-center justify-center group-hover:bg-blue-100 transition-colors duration-300">
                    <Icon className="w-5 h-5 text-blue-600" />
                  </div>
                  <div className="flex flex-col gap-1.5">
                    <h3 className="text-sm font-bold text-slate-900">{f.title}</h3>
                    <p className="text-sm text-slate-500 leading-relaxed">{f.description}</p>
                  </div>
                </motion.div>
              );
            })}
          </div>

          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={inView ? { opacity: 1, y: 0 } : {}}
            transition={{ delay: 0.5, duration: 0.6 }}
            className="relative rounded-3xl overflow-hidden"
          >
            <img
              src="https://images.pexels.com/photos/1170979/pexels-photo-1170979.jpeg"
              alt="Hospital interior"
              className="w-full h-64 lg:h-96 object-cover"
            />
            <div className="absolute inset-0 bg-gradient-to-r from-blue-900/70 to-slate-900/40 flex items-center">
              <div className="px-10 lg:px-16 flex flex-col gap-4 max-w-xl">
                <h3 className="text-3xl lg:text-4xl font-bold text-white leading-tight">
                  Over 500 Successful Surgeries and Counting
                </h3>
                <p className="text-blue-100 text-sm leading-relaxed">
                  Our team has consistently delivered life-changing results for patients across Gujarat.
                </p>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
