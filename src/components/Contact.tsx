import { useState, useRef } from 'react';
import { motion, useInView } from 'framer-motion';
import { Send, CheckCircle, User, Phone, Stethoscope, Calendar } from 'lucide-react';

const departments = [
  'General Surgery',
  'Orthopedics',
  'Urology',
  'Dialysis Center',
  'Emergency',
  'OPD Consultation',
];

interface FormData {
  name: string;
  phone: string;
  department: string;
  date: string;
  message: string;
}

interface FormErrors {
  name?: string;
  phone?: string;
  department?: string;
  date?: string;
}

export default function Contact() {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: '-80px' });
  const [submitted, setSubmitted] = useState(false);
  const [loading, setLoading] = useState(false);
  const [form, setForm] = useState<FormData>({
    name: '',
    phone: '',
    department: '',
    date: '',
    message: '',
  });
  const [errors, setErrors] = useState<FormErrors>({});

  const validate = (): boolean => {
    const newErrors: FormErrors = {};
    if (!form.name.trim() || form.name.trim().length < 2) newErrors.name = 'Please enter your full name';
    if (!form.phone.trim() || !/^[6-9]\d{9}$/.test(form.phone.trim())) newErrors.phone = 'Enter a valid 10-digit phone number';
    if (!form.department) newErrors.department = 'Please select a department';
    if (!form.date) newErrors.date = 'Please select a preferred date';
    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!validate()) return;
    setLoading(true);
    await new Promise((r) => setTimeout(r, 1200));
    setLoading(false);
    setSubmitted(true);
  };

  const inputClass = (field: keyof FormErrors) =>
    `w-full bg-slate-50 border ${errors[field] ? 'border-red-300 focus:border-red-400' : 'border-slate-200 focus:border-blue-400'} text-slate-900 text-sm rounded-xl px-4 py-3.5 outline-none transition-all duration-200 placeholder:text-slate-400 focus:bg-white focus:shadow-sm`;

  const today = new Date().toISOString().split('T')[0];

  return (
    <section id="contact" className="py-24 lg:py-32 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div ref={ref} className="grid lg:grid-cols-2 gap-16 items-start">
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            animate={inView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.6 }}
            className="flex flex-col gap-8"
          >
            <div className="flex flex-col gap-3">
              <span className="text-blue-600 text-sm font-semibold tracking-wider uppercase">Book Appointment</span>
              <h2 className="text-4xl lg:text-5xl font-bold text-slate-900 tracking-tight leading-tight">
                Your Health,<br />Our Priority
              </h2>
              <p className="text-slate-500 text-base leading-relaxed max-w-sm">
                Fill in the form and our team will confirm your appointment within 2 hours during working hours.
              </p>
            </div>

            <div className="flex flex-col gap-5">
              {[
                { icon: Phone, label: 'Emergency Hotline', value: '+91 9904628373', sub: 'Available 24/7' },
                { icon: Calendar, label: 'OPD Timings', value: 'Open 24 hours', sub: 'Walk-ins welcome' },
                { icon: Stethoscope, label: 'Location', value: 'besides, nirgun one, Orchid Exotica,', sub: '201-204, underpass, near makarba, Ahmedabad, Gujarat 380051' },
              ].map(({ icon: Icon, label, value, sub }) => (
                <div key={label} className="flex items-center gap-4">
                  <div className="w-11 h-11 bg-blue-50 rounded-xl flex items-center justify-center shrink-0">
                    <Icon className="w-5 h-5 text-blue-600" />
                  </div>
                  <div>
                    <p className="text-xs text-slate-400 font-medium">{label}</p>
                    <p className="text-sm font-bold text-slate-900">{value}</p>
                    <p className="text-xs text-slate-400">{sub}</p>
                  </div>
                </div>
              ))}
            </div>

            <div className="rounded-2xl overflow-hidden border border-slate-100">
              <img
                src="https://images.pexels.com/photos/247786/pexels-photo-247786.jpeg"
                alt="Hospital reception"
                className="w-full h-48 object-cover"
              />
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 30 }}
            animate={inView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.6, delay: 0.1 }}
          >
            {submitted ? (
              <motion.div
                initial={{ opacity: 0, scale: 0.95 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.4 }}
                className="bg-slate-50 rounded-3xl p-10 text-center flex flex-col items-center gap-5 border border-slate-100 min-h-[480px] justify-center"
              >
                <div className="w-16 h-16 bg-green-50 rounded-2xl flex items-center justify-center">
                  <CheckCircle className="w-8 h-8 text-green-600" />
                </div>
                <div className="flex flex-col gap-2">
                  <h3 className="text-xl font-bold text-slate-900">Appointment Requested!</h3>
                  <p className="text-slate-500 text-sm leading-relaxed max-w-xs">
                    Thank you, {form.name.split(' ')[0]}. Our team will call you at <strong>{form.phone}</strong> to confirm your appointment.
                  </p>
                </div>
                <button
                  onClick={() => { setSubmitted(false); setForm({ name: '', phone: '', department: '', date: '', message: '' }); }}
                  className="text-blue-600 text-sm font-semibold hover:underline mt-2"
                >
                  Book Another Appointment
                </button>
              </motion.div>
            ) : (
              <form
                onSubmit={handleSubmit}
                className="bg-slate-50 rounded-3xl p-8 lg:p-10 flex flex-col gap-5 border border-slate-100"
              >
                <div className="grid sm:grid-cols-2 gap-4">
                  <div className="flex flex-col gap-1.5">
                    <label className="text-xs font-semibold text-slate-600 flex items-center gap-1.5">
                      <User className="w-3.5 h-3.5" /> Full Name
                    </label>
                    <input
                      type="text"
                      placeholder="Ramesh Patel"
                      value={form.name}
                      onChange={(e) => setForm({ ...form, name: e.target.value })}
                      className={inputClass('name')}
                    />
                    {errors.name && <p className="text-red-500 text-xs">{errors.name}</p>}
                  </div>
                  <div className="flex flex-col gap-1.5">
                    <label className="text-xs font-semibold text-slate-600 flex items-center gap-1.5">
                      <Phone className="w-3.5 h-3.5" /> Phone Number
                    </label>
                    <input
                      type="tel"
                      placeholder="9904628373"
                      value={form.phone}
                      onChange={(e) => setForm({ ...form, phone: e.target.value })}
                      className={inputClass('phone')}
                    />
                    {errors.phone && <p className="text-red-500 text-xs">{errors.phone}</p>}
                  </div>
                </div>

                <div className="grid sm:grid-cols-2 gap-4">
                  <div className="flex flex-col gap-1.5">
                    <label className="text-xs font-semibold text-slate-600 flex items-center gap-1.5">
                      <Stethoscope className="w-3.5 h-3.5" /> Department
                    </label>
                    <select
                      value={form.department}
                      onChange={(e) => setForm({ ...form, department: e.target.value })}
                      className={`${inputClass('department')} cursor-pointer`}
                    >
                      <option value="">Select department</option>
                      {departments.map((d) => (
                        <option key={d} value={d}>{d}</option>
                      ))}
                    </select>
                    {errors.department && <p className="text-red-500 text-xs">{errors.department}</p>}
                  </div>
                  <div className="flex flex-col gap-1.5">
                    <label className="text-xs font-semibold text-slate-600 flex items-center gap-1.5">
                      <Calendar className="w-3.5 h-3.5" /> Preferred Date
                    </label>
                    <input
                      type="date"
                      min={today}
                      value={form.date}
                      onChange={(e) => setForm({ ...form, date: e.target.value })}
                      className={inputClass('date')}
                    />
                    {errors.date && <p className="text-red-500 text-xs">{errors.date}</p>}
                  </div>
                </div>

                <div className="flex flex-col gap-1.5">
                  <label className="text-xs font-semibold text-slate-600">Additional Notes (optional)</label>
                  <textarea
                    rows={3}
                    placeholder="Briefly describe your symptoms or reason for visit..."
                    value={form.message}
                    onChange={(e) => setForm({ ...form, message: e.target.value })}
                    className="w-full bg-white border border-slate-200 focus:border-blue-400 text-slate-900 text-sm rounded-xl px-4 py-3.5 outline-none transition-all duration-200 placeholder:text-slate-400 resize-none focus:shadow-sm"
                  />
                </div>

                <button
                  type="submit"
                  disabled={loading}
                  className="flex items-center justify-center gap-2 bg-blue-600 hover:bg-blue-700 disabled:bg-blue-400 text-white font-semibold text-sm px-6 py-4 rounded-2xl transition-all duration-200 hover:scale-105 hover:shadow-lg hover:shadow-blue-200 disabled:cursor-not-allowed disabled:scale-100"
                >
                  {loading ? (
                    <>
                      <div className="w-4 h-4 border-2 border-white/30 border-t-white rounded-full animate-spin" />
                      Sending Request...
                    </>
                  ) : (
                    <>
                      <Send className="w-4 h-4" />
                      Book Appointment
                    </>
                  )}
                </button>

                <p className="text-xs text-slate-400 text-center">
                  We respect your privacy. Your details are never shared with third parties.
                </p>
              </form>
            )}
          </motion.div>
        </div>
      </div>
    </section>
  );
}
