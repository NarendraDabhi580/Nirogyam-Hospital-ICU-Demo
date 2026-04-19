import { useRef } from "react";
import { motion, useInView } from "framer-motion";
import { Stethoscope, Award, BookOpen } from "lucide-react";

const doctors = [
  {
    name: "Dr. Amol Mehta",
    role: "Chief General Surgeon",
    image:
      "https://images.unsplash.com/photo-1612349317150-e413f6a5b16d?auto=format&fit=crop&w=800&q=80",
    expertise:
      "Specializes in Laparoscopic, Gallbladder, and Pilonidal Sinus Surgeries with over 15 years of exceptional track record.",
    stats: [
      { icon: Award, label: "15+ Years Exp." },
      { icon: Stethoscope, label: "10,000+ Surgeries" },
    ],
  },
  {
    name: "Dr. Divyang Dalwadi",
    role: "Head of Intensive Care",
    image:
      "https://images.unsplash.com/photo-1622253692010-333f2da6031d?auto=format&fit=crop&w=800&q=80",
    expertise:
      "Expert in critical care management, leading our state-of-the-art 8-bed isolation ICU with a patient-first approach.",
    stats: [
      { icon: BookOpen, label: "Critical Care Specialist" },
      { icon: Award, label: "NABH Assessor" },
    ],
  },
];

export default function Doctors() {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: "-80px" });

  return (
    <section
      id="doctors"
      className="py-24 lg:py-32 bg-white relative overflow-hidden"
    >
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute top-0 right-0 w-[500px] h-[500px] bg-blue-50/50 rounded-full blur-3xl translate-x-1/3 -translate-y-1/2" />
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative">
        <div className="flex flex-col gap-16">
          <div className="text-center flex flex-col gap-3 max-w-xl mx-auto">
            <motion.span
              initial={{ opacity: 0 }}
              animate={inView ? { opacity: 1 } : {}}
              transition={{ duration: 0.5 }}
              className="text-blue-600 text-sm font-semibold tracking-wider uppercase"
            >
              Meet Our Experts
            </motion.span>
            <motion.h2
              initial={{ opacity: 0, y: 20 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.55, delay: 0.1 }}
              className="text-4xl lg:text-5xl font-bold text-slate-900 tracking-tight leading-tight"
            >
              World-Class Medical Minds
            </motion.h2>
            <motion.p
              initial={{ opacity: 0 }}
              animate={inView ? { opacity: 1 } : {}}
              transition={{ duration: 0.6, delay: 0.2 }}
              className="text-slate-500 text-base mt-2"
            >
              Our team of highly experienced specialists is dedicated to
              providing compassionate, cutting-edge care for every patient.
            </motion.p>
          </div>

          <div
            ref={ref}
            className="grid md:grid-cols-2 gap-10 max-w-5xl mx-auto w-full"
          >
            {doctors.map((doc, index) => (
              <motion.div
                key={doc.name}
                initial={{ opacity: 0, y: 30 }}
                animate={inView ? { opacity: 1, y: 0 } : {}}
                transition={{ duration: 0.6, delay: 0.2 + index * 0.15 }}
                className="group bg-slate-50 rounded-3xl overflow-hidden border border-slate-100 hover:shadow-2xl hover:shadow-blue-900/5 transition-all duration-300 flex flex-col"
              >
                <div className="h-72 overflow-hidden relative">
                  <img
                    src={doc.image}
                    alt={doc.name}
                    className="w-full h-full object-cover object-top group-hover:scale-105 transition-transform duration-500"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-slate-900/80 via-transparent to-transparent opacity-80" />
                  <div className="absolute bottom-6 left-6 right-6">
                    <h3 className="text-2xl font-bold text-white mb-1">
                      {doc.name}
                    </h3>
                    <p className="text-blue-200 text-sm font-medium">
                      {doc.role}
                    </p>
                  </div>
                </div>
                <div className="p-8 flex flex-col gap-6 flex-grow">
                  <p className="text-slate-600 leading-relaxed text-sm flex-grow">
                    {doc.expertise}
                  </p>
                  <div className="flex flex-col gap-3 pt-6 border-t border-slate-200/60">
                    {doc.stats.map((stat, i) => (
                      <div key={i} className="flex items-center gap-3">
                        <div className="w-8 h-8 rounded-lg bg-white shadow-sm border border-slate-100 flex items-center justify-center shrink-0">
                          <stat.icon className="w-4 h-4 text-blue-600" />
                        </div>
                        <span className="text-sm font-semibold text-slate-700">
                          {stat.label}
                        </span>
                      </div>
                    ))}
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
