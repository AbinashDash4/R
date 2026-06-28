import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { X, Calendar, Clock, CheckCircle, MessageSquare } from 'lucide-react';

const LeadWidgets = () => {
  const [isCalendlyOpen, setIsCalendlyOpen] = useState(false);
  const [selectedDate, setSelectedDate] = useState('');
  const [selectedTime, setSelectedTime] = useState('');
  const [bookingSuccess, setBookingSuccess] = useState(false);
  const [emailInput, setEmailInput] = useState('');

  useEffect(() => {
    const handleOpenCalendly = () => {
      setIsCalendlyOpen(true);
    };
    window.addEventListener('open-calendly', handleOpenCalendly);
    return () => {
      window.removeEventListener('open-calendly', handleOpenCalendly);
    };
  }, []);

  const handleBook = (e) => {
    e.preventDefault();
    if (selectedDate && selectedTime && emailInput) {
      setBookingSuccess(true);
      setTimeout(() => {
        setBookingSuccess(false);
        setIsCalendlyOpen(false);
        setSelectedDate('');
        setSelectedTime('');
        setEmailInput('');
      }, 3000);
    }
  };

  const dates = [
    { day: 'Mon', num: '29', label: 'June 29, 2026' },
    { day: 'Tue', num: '30', label: 'June 30, 2026' },
    { day: 'Wed', num: '01', label: 'July 01, 2026' }
  ];

  const times = ['10:30 AM', '11:45 AM', '02:00 PM', '04:15 PM'];

  return (
    <>
      {/* 1. Floating WhatsApp Widget (Bottom Left) */}
      <div className="fixed bottom-6 left-6 z-[99] pointer-events-auto">
        <a
          href="https://wa.me/919876543210?text=Hi%20Ripple%20Creative,%20I'd%20like%20to%20discuss%20a%20campaign!"
          target="_blank"
          rel="noopener noreferrer"
          className="group relative flex items-center justify-center w-14 h-14 bg-[#25D366] text-white rounded-full shadow-lg shadow-green-500/20 hover:scale-105 transition-transform"
          aria-label="Chat on WhatsApp"
        >
          {/* Pulsing Outer Rings */}
          <span className="absolute inset-0 rounded-full bg-[#25D366]/40 animate-ping pointer-events-none" />
          
          {/* Custom WhatsApp Icon path */}
          <svg className="w-7 h-7 fill-current" viewBox="0 0 24 24">
            <path d="M12.012 2c-5.506 0-9.989 4.478-9.99 9.984a9.96 9.96 0 0 0 1.333 4.993L2 22l5.197-1.355a9.97 9.97 0 0 0 4.815 1.23h.005c5.507 0 9.99-4.478 9.99-9.985C22.007 6.478 17.52 2 12.012 2zm0 18.29h-.003a8.25 8.25 0 0 1-4.214-1.153l-.302-.18-3.13.817.833-3.047-.198-.314a8.27 8.27 0 0 1-1.267-4.423c.002-4.557 3.713-8.263 8.276-8.263 2.208 0 4.283.86 5.842 2.417a8.22 8.22 0 0 1 2.413 5.852c-.004 4.558-3.714 8.264-8.275 8.264z" />
          </svg>

          {/* Tooltip */}
          <div className="absolute left-full ml-3 bg-heading text-secondary font-body text-[10px] py-1.5 px-3 rounded-lg shadow-xl opacity-0 translate-x-2 group-hover:opacity-100 group-hover:translate-x-0 pointer-events-none transition-all duration-300 whitespace-nowrap">
            Chat with Partnerships Team
          </div>
        </a>
      </div>

      {/* 2. Interactive Calendly Scheduler Modal */}
      <AnimatePresence>
        {isCalendlyOpen && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 z-[99999] bg-black/60 backdrop-blur-md flex items-center justify-center p-4"
          >
            <motion.div
              initial={{ scale: 0.95, y: 15 }}
              animate={{ scale: 1, y: 0 }}
              exit={{ scale: 0.95, y: 15 }}
              className="bg-cardBg glass border border-borderCol rounded-3xl w-full max-w-lg p-6 md:p-8 shadow-2xl relative"
            >
              {/* Close Button */}
              <button
                onClick={() => setIsCalendlyOpen(false)}
                className="absolute top-6 right-6 p-2 rounded-full hover:bg-borderCol transition-colors"
                aria-label="Close scheduler"
              >
                <X size={20} />
              </button>

              <div className="flex items-center space-x-3 mb-6">
                <div className="p-3 bg-secondary text-primary rounded-2xl">
                  <Calendar size={22} />
                </div>
                <div>
                  <h3 className="font-heading text-xl font-bold text-heading">Book Strategy Session</h3>
                  <p className="font-body text-xs text-text/60">Select alignment slot with Ripple Partnership Director</p>
                </div>
              </div>

              {!bookingSuccess ? (
                <form onSubmit={handleBook} className="space-y-6">
                  {/* Select Date */}
                  <div className="space-y-3">
                    <label className="font-btn text-xs font-bold text-heading tracking-wider uppercase">1. Select Date</label>
                    <div className="grid grid-cols-3 gap-3">
                      {dates.map((d) => (
                        <button
                          key={d.num}
                          type="button"
                          onClick={() => setSelectedDate(d.label)}
                          className={`py-3 rounded-xl border font-body text-center transition-all ${
                            selectedDate === d.label
                              ? 'border-primary bg-primary/10 text-primary font-bold shadow-sm'
                              : 'border-borderCol bg-bg/40 hover:border-primary/50'
                          }`}
                        >
                          <p className="text-[10px] text-text/50 uppercase leading-none mb-1">{d.day}</p>
                          <p className="text-lg font-heading leading-none text-heading">{d.num}</p>
                        </button>
                      ))}
                    </div>
                  </div>

                  {/* Select Time */}
                  <div className="space-y-3">
                    <label className="font-btn text-xs font-bold text-heading tracking-wider uppercase">2. Select Time (IST)</label>
                    <div className="grid grid-cols-2 gap-3">
                      {times.map((t) => (
                        <button
                          key={t}
                          type="button"
                          disabled={!selectedDate}
                          onClick={() => setSelectedTime(t)}
                          className={`py-3 rounded-xl border font-body text-xs text-center transition-all ${
                            selectedTime === t
                              ? 'border-primary bg-primary/10 text-primary font-bold shadow-sm'
                              : 'border-borderCol bg-bg/40 hover:border-primary/50 disabled:opacity-40 disabled:pointer-events-none'
                          }`}
                        >
                          <span className="flex items-center justify-center space-x-1.5">
                            <Clock size={12} className="opacity-60" />
                            <span>{t}</span>
                          </span>
                        </button>
                      ))}
                    </div>
                  </div>

                  {/* Email details */}
                  <div className="space-y-2">
                    <label className="font-btn text-xs font-bold text-heading tracking-wider uppercase" htmlFor="confirm-email">
                      3. Confirm Email
                    </label>
                    <input
                      type="email"
                      id="confirm-email"
                      required
                      placeholder="Enter your email to receive invite"
                      value={emailInput}
                      onChange={(e) => setEmailInput(e.target.value)}
                      className="w-full px-4 py-3 rounded-xl border border-borderCol bg-bg/40 focus:outline-none focus:border-primary font-body text-xs transition-all"
                    />
                  </div>

                  {/* Book Trigger */}
                  <button
                    type="submit"
                    disabled={!selectedDate || !selectedTime || !emailInput}
                    className="w-full py-4 bg-primary text-secondary rounded-xl font-btn text-xs font-bold tracking-widest transition-all disabled:opacity-50 disabled:pointer-events-none"
                  >
                    CONFIRM BOOKING
                  </button>
                </form>
              ) : (
                <div className="flex flex-col items-center justify-center py-10 text-center space-y-4">
                  <div className="p-4 bg-primary/20 text-primary rounded-full">
                    <CheckCircle size={40} className="stroke-[2.5]" />
                  </div>
                  <h4 className="font-heading text-2xl font-bold text-heading">Alignment Call Scheduled!</h4>
                  <p className="font-body text-xs text-text/70 max-w-xs leading-relaxed">
                    A confirmation invite has been dispatched to <strong className="text-heading">{emailInput}</strong> for <strong>{selectedDate}</strong> at <strong>{selectedTime}</strong>.
                  </p>
                </div>
              )}
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
};

export default LeadWidgets;
