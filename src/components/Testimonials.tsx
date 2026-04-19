import { useState, useRef, useEffect } from 'react';
import { motion, useInView, AnimatePresence } from 'framer-motion';
import { Star, ChevronLeft, ChevronRight, Quote, MapPin } from 'lucide-react';

const testimonials = [
  {
    name: 'M.R PATEL',
    location: 'Ahmedabad',
    role: 'Gallbladder Surgery Patient',
    rating: 5,
    text: 'I had an incredibly positive experience at Nirogyam. Thanks to Dr. Amol Mehta\'s accurate diagnosis, it was confirmed my wife had multiple stones in her gallbladder. Incredibly, she was able to walk within just 2 hours of the procedure! Highly recommend this hospital.',
    initials: 'MP',
    color: 'bg-blue-100 text-blue-700',
  },
  {
    name: 'Shaiju Thankachan',
    location: 'Ahmedabad',
    role: 'Patient',
    rating: 5,
    text: 'Best hospital experience in Ahmedabad! Nirogyam stands out for its exceptional medical care and compassionate staff. Under the expert leadership of Dr. Divyang Dalwadi, every patient receives focused treatment. A truly well-managed hospital with a human touch.',
    initials: 'ST',
    color: 'bg-slate-100 text-slate-700',
  },
  {
    name: 'Suresh Prajapati',
    location: 'Ahmedabad',
    role: 'Sinus Surgery Patient',
    rating: 5,
    text: 'I recently underwent pilonidal sinus surgery with Dr. Amol Mehta. The surgery was performed smoothly, and I was discharged within 24 hours. I truly appreciate the professionalism, skill, and compassion shown by the doctor and his team.',
    initials: 'SP',
    color: 'bg-blue-100 text-blue-700',
  },
];


export default function Testimonials() {
  const [active, setActive] = useState(0);
  const [direction, setDirection] = useState(1);
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: '-80px' });

  useEffect(() => {
    const interval = setInterval(() => {
      setDirection(1);
      setActive((prev) => (prev + 1) % testimonials.length);
    }, 5000);
    return () => clearInterval(interval);
  }, []);

  const go = (dir: number) => {
    setDirection(dir);
    setActive((prev) => (prev + dir + testimonials.length) % testimonials.length);
  };

  const t = testimonials[active];

  return (
    <section id="testimonials" className="py-24 lg:py-32 bg-slate-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div ref={ref} className="flex flex-col gap-16">
          <div className="text-center flex flex-col gap-3 max-w-xl mx-auto">
            <motion.span
              initial={{ opacity: 0 }}
              animate={inView ? { opacity: 1 } : {}}
              transition={{ duration: 0.5 }}
              className="text-blue-600 text-sm font-semibold tracking-wider uppercase"
            >
              Patient Stories
            </motion.span>
            <motion.h2
              initial={{ opacity: 0, y: 20 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.55, delay: 0.1 }}
              className="text-4xl lg:text-5xl font-bold text-slate-900 tracking-tight leading-tight"
            >
              Trusted by Thousands of Patients
            </motion.h2>
          </div>

          <div className="grid lg:grid-cols-2 gap-10 items-center">
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              animate={inView ? { opacity: 1, x: 0 } : {}}
              transition={{ duration: 0.6, delay: 0.2 }}
              className="relative"
            >
              <div className="bg-white rounded-3xl p-8 lg:p-10 shadow-sm border border-slate-100 min-h-[280px] flex flex-col justify-between overflow-hidden">
                <Quote className="w-10 h-10 text-blue-100 absolute top-8 right-8" />

                <AnimatePresence mode="wait" custom={direction}>
                  <motion.div
                    key={active}
                    custom={direction}
                    initial={{ opacity: 0, x: direction * 30 }}
                    animate={{ opacity: 1, x: 0 }}
                    exit={{ opacity: 0, x: direction * -30 }}
                    transition={{ duration: 0.35, ease: 'easeOut' }}
                    className="flex flex-col gap-6"
                  >
                    <div className="flex gap-1">
                      {Array.from({ length: t.rating }).map((_, i) => (
                        <Star key={i} className="w-4 h-4 text-amber-400 fill-amber-400" />
                      ))}
                    </div>
                    <p className="text-slate-700 text-base leading-relaxed italic">
                      "{t.text}"
                    </p>
                    <div className="flex items-center gap-3 pt-2 border-t border-slate-100">
                      <div className={`w-10 h-10 rounded-full flex items-center justify-center text-sm font-bold ${t.color}`}>
                        {t.initials}
                      </div>
                      <div>
                        <p className="text-sm font-bold text-slate-900">{t.name}</p>
                        <p className="text-xs text-slate-400">{t.role} · {t.location}</p>
                      </div>
                    </div>
                  </motion.div>
                </AnimatePresence>
              </div>

              <div className="flex items-center gap-4 mt-6">
                <button
                  onClick={() => go(-1)}
                  className="w-10 h-10 bg-white border border-slate-200 rounded-xl flex items-center justify-center text-slate-600 hover:bg-blue-600 hover:text-white hover:border-blue-600 transition-all duration-200"
                >
                  <ChevronLeft className="w-4 h-4" />
                </button>
                <div className="flex gap-2">
                  {testimonials.map((_, i) => (
                    <button
                      key={i}
                      onClick={() => { setDirection(i > active ? 1 : -1); setActive(i); }}
                      className={`h-1.5 rounded-full transition-all duration-300 ${i === active ? 'w-6 bg-blue-600' : 'w-1.5 bg-slate-200'}`}
                    />
                  ))}
                </div>
                <button
                  onClick={() => go(1)}
                  className="w-10 h-10 bg-white border border-slate-200 rounded-xl flex items-center justify-center text-slate-600 hover:bg-blue-600 hover:text-white hover:border-blue-600 transition-all duration-200"
                >
                  <ChevronRight className="w-4 h-4" />
                </button>
              </div>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, x: 30 }}
              animate={inView ? { opacity: 1, x: 0 } : {}}
              transition={{ duration: 0.6, delay: 0.3 }}
              className="flex flex-col gap-5"
            >
              <div className="bg-white rounded-3xl overflow-hidden border border-slate-100 shadow-sm">
                <div className="bg-slate-800 h-56 flex items-center justify-center relative">
                  <div className="absolute inset-0 bg-gradient-to-br from-slate-700 to-slate-900" />
                  <div className="relative flex flex-col items-center gap-3 text-center px-6">
                    <div className="w-12 h-12 bg-blue-600 rounded-2xl flex items-center justify-center">
                      <MapPin className="w-6 h-6 text-white" />
                    </div>
                    <div>
                      <p className="text-white font-bold text-lg">Nirogyam Hospital</p>
                      <p className="text-slate-400 text-sm mt-1 leading-snug px-2">besides, nirgun one, Orchid Exotica, 201-204, underpass, near makarba, Makarba, Ahmedabad, Gujarat 380051</p>
                    </div>
                    <a
                      href="https://maps.google.com/?q=Makarba+Ahmedabad"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="mt-2 bg-blue-600 hover:bg-blue-700 text-white text-xs font-semibold px-5 py-2.5 rounded-xl transition-colors duration-200"
                    >
                      Get Directions
                    </a>
                  </div>
                </div>
                <div className="p-5 grid grid-cols-3 gap-4 text-center">
                  <div>
                    <p className="text-lg font-bold text-slate-900">4.9</p>
                    <p className="text-xs text-slate-400">Google Rating</p>
                  </div>
                  <div className="border-x border-slate-100">
                    <p className="text-lg font-bold text-slate-900">500+</p>
                    <p className="text-xs text-slate-400">Reviews</p>
                  </div>
                  <div>
                    <p className="text-lg font-bold text-slate-900">10yr</p>
                    <p className="text-xs text-slate-400">In Service</p>
                  </div>
                </div>
              </div>

              <div className="grid grid-cols-2 gap-4">
                <div className="bg-blue-600 text-white rounded-2xl p-5">
                  <p className="text-3xl font-bold">98%</p>
                  <p className="text-blue-200 text-sm mt-1">Patient Satisfaction</p>
                </div>
                <div className="bg-white border border-slate-100 rounded-2xl p-5">
                  <p className="text-3xl font-bold text-slate-900">0</p>
                  <p className="text-slate-400 text-sm mt-1">ICU Infection Rate</p>
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </div>
    </section>
  );
}
