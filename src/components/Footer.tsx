import { Phone, Mail, MapPin, Facebook, Instagram, Twitter } from 'lucide-react';

const links = {
  Services: ['General Surgery', 'Orthopedics', 'Urology', 'Dialysis', 'Emergency'],
  Hospital: ['About Us', 'Our Doctors', 'Facilities', 'Careers', 'Contact'],
  Legal: ['Privacy Policy', 'Terms of Use', 'Patient Rights', 'Insurance'],
};

export default function Footer() {
  return (
    <footer className="bg-slate-900 text-white pt-16 pb-8">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-5 gap-10 pb-12 border-b border-slate-800">
          <div className="col-span-2 lg:col-span-2 flex flex-col gap-5">
            <div className="flex items-center">
              <div className="bg-white px-3 py-2 rounded-xl inline-block shadow-sm">
                <img src="/logo.png" alt="Nirogyam Logo" className="h-10 md:h-12 w-auto" />
              </div>
            </div>
            <p className="text-slate-400 text-sm leading-relaxed max-w-xs">
              Delivering precision surgical care and compassionate healing to patients across Gujarat since 2014.
            </p>
            <div className="flex flex-col gap-3 text-sm text-slate-400">
              <a href="tel:+919904628373" className="flex items-center gap-2.5 hover:text-white transition-colors">
                <Phone className="w-4 h-4 text-blue-500" /> +91 9904628373
              </a>
              <a href="mailto:info@nirogyam.in" className="flex items-center gap-2.5 hover:text-white transition-colors">
                <Mail className="w-4 h-4 text-blue-500" /> info@nirogyam.in
              </a>
              <div className="flex items-start gap-2.5">
                <MapPin className="w-4 h-4 text-blue-500 mt-0.5 shrink-0" />
                <span className="leading-tight">besides, nirgun one, Orchid Exotica, 201-204, underpass, near makarba, Makarba, Ahmedabad, Gujarat 380051</span>
              </div>
            </div>
            <div className="flex items-center gap-3 pt-1">
              {[Facebook, Instagram, Twitter].map((Icon, i) => (
                <a
                  key={i}
                  href="#"
                  className="w-8 h-8 bg-slate-800 hover:bg-blue-600 rounded-lg flex items-center justify-center transition-colors duration-200"
                >
                  <Icon className="w-3.5 h-3.5" />
                </a>
              ))}
            </div>
          </div>

          {Object.entries(links).map(([category, items]) => (
            <div key={category} className="flex flex-col gap-4">
              <p className="text-xs font-bold text-slate-300 uppercase tracking-wider">{category}</p>
              <ul className="flex flex-col gap-2.5">
                {items.map((item) => (
                  <li key={item}>
                    <a href="#" className="text-slate-400 hover:text-white text-sm transition-colors duration-200">
                      {item}
                    </a>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        <div className="pt-8 flex flex-col sm:flex-row items-center justify-between gap-4 text-slate-500 text-xs">
          <p>© 2025 Nirogyam ICU and Multispeciality Hospital. All rights reserved.</p>
          <p>Made with care in Ahmedabad, Gujarat</p>
        </div>
      </div>
    </footer>
  );
}
