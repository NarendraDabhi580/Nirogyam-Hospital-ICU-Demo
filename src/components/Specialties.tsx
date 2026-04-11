import { useRef } from 'react';
import { motion, useInView } from 'framer-motion';
import { Stethoscope, Bone, Droplets, Activity, ArrowRight } from 'lucide-react';

const specialties = [
  {
    icon: Stethoscope,
    title: 'General Surgery',
    description: 'Advanced laparoscopic and open surgeries performed by experienced surgeons with precision and care.',
    tag: 'Minimally Invasive',
    color: 'blue',
  },
  {
    icon: Bone,
    title: 'Orthopedics',
    description: 'Total knee and hip replacement procedures using state-of-the-art implants for lasting mobility.',
    tag: 'Knee Replacement',
    color: 'slate',
  },
  {
    icon: Droplets,
    title: 'Urology',
    description: 'Comprehensive urological care including kidney stone treatment, prostate care, and endoscopic procedures.',
    tag: 'Endoscopic',
    color: 'blue',
  },
  {
    icon: Activity,
    title: 'Dialysis Center',
    description: 'Fully equipped dialysis unit offering hemodialysis sessions in a clean, comfortable environment.',
    tag: 'Hemodialysis',
    color: 'slate',
  },
];

const cardVariants = {
  hidden: { opacity: 0, y: 40 },
  visible: (i: number) => ({
    opacity: 1,
    y: 0,
    transition: { delay: i * 0.1, duration: 0.55, ease: 'easeOut' },
  }),
};

export default function Specialties() {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: '-80px' });

  return (
    <section id="specialties" className="py-24 lg:py-32 bg-slate-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div ref={ref} className="flex flex-col gap-16">
          <div className="flex flex-col lg:flex-row lg:items-end lg:justify-between gap-6">
            <div className="flex flex-col gap-3">
              <motion.span
                initial={{ opacity: 0 }}
                animate={inView ? { opacity: 1 } : {}}
                transition={{ duration: 0.5 }}
                className="text-blue-600 text-sm font-semibold tracking-wider uppercase"
              >
                Our Specialties
              </motion.span>
              <motion.h2
                initial={{ opacity: 0, y: 20 }}
                animate={inView ? { opacity: 1, y: 0 } : {}}
                transition={{ duration: 0.55, delay: 0.1 }}
                className="text-4xl lg:text-5xl font-bold text-slate-900 tracking-tight leading-tight"
              >
                Expert Care Across<br />Every Discipline
              </motion.h2>
            </div>
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.55, delay: 0.2 }}
              className="text-slate-500 text-base leading-relaxed max-w-sm"
            >
              Our team of specialist doctors brings decades of combined experience to each and every patient.
            </motion.p>
          </div>

          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-5">
            {specialties.map((s, i) => {
              const Icon = s.icon;
              const isBlue = s.color === 'blue';
              return (
                <motion.div
                  key={s.title}
                  custom={i}
                  variants={cardVariants}
                  initial="hidden"
                  animate={inView ? 'visible' : 'hidden'}
                  whileHover={{ y: -6, transition: { duration: 0.2 } }}
                  className="group bg-white rounded-3xl p-7 flex flex-col gap-5 border border-slate-100 hover:border-blue-100 hover:shadow-xl hover:shadow-slate-100 transition-all duration-300 cursor-pointer"
                >
                  <div className="flex items-start justify-between">
                    <div className={`w-12 h-12 rounded-2xl flex items-center justify-center ${isBlue ? 'bg-blue-50' : 'bg-slate-100'} group-hover:scale-110 transition-transform duration-300`}>
                      <Icon className={`w-5 h-5 ${isBlue ? 'text-blue-600' : 'text-slate-600'}`} />
                    </div>
                    <span className={`text-xs font-semibold px-3 py-1 rounded-full ${isBlue ? 'bg-blue-50 text-blue-600' : 'bg-slate-100 text-slate-500'}`}>
                      {s.tag}
                    </span>
                  </div>

                  <div className="flex flex-col gap-2">
                    <h3 className="text-base font-bold text-slate-900">{s.title}</h3>
                    <p className="text-sm text-slate-500 leading-relaxed">{s.description}</p>
                  </div>

                  <div className="flex items-center gap-1.5 text-blue-600 text-sm font-semibold mt-auto opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                    Learn More <ArrowRight className="w-3.5 h-3.5" />
                  </div>
                </motion.div>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
}
