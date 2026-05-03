const testimonials = [
  {
    name: 'Esther Hills',
    title: 'Telecom Consultant',
    text: "There is no one active in the telecom business that I trust more than the team at MyVoIP. We have worked multiple projects through the years and the services provided have always been second to none. To say that I highly recommend this company would be an understatement.",
    initials: 'EH',
  },
  {
    name: 'Eddie Johnson',
    title: 'Business Owner',
    text: "I would like to take a minute to thank you for your amazing service. You have been nothing but helpful and the service you provide is second to none.",
    initials: 'EJ',
  },
  {
    name: 'Ryan Doyle',
    title: 'Financial Advisor',
    text: "This is a very crowded space and MyVoIP really stands out from the competition. I've had the opportunity to refer them to many business clients of mine and the feedback I've gotten has always been top notch! It's great to work with a company that knocks it out of the park time after time!",
    initials: 'RD',
  },
  {
    name: 'Lisa Moore',
    title: 'Operations Director',
    text: "Excellent experience using MyVoIP over the last two years! Our transition from an on-prem VoIP system went very smoothly. Support is quick, thorough, and we saved a bunch of money as well. Highly recommended.",
    initials: 'LM',
  },
];

export default function Testimonials() {
  return (
    <section className="py-20 px-4 bg-slate-900/50">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">What Our Clients Say</h2>
          <p className="text-slate-400 text-lg">
            Their reviews show we deliver what we promise — and help businesses grow.
          </p>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {testimonials.map((t) => (
            <div key={t.name} className="bg-slate-800/60 border border-slate-700 rounded-2xl p-7">
              <div className="flex text-yellow-400 mb-4 gap-0.5">
                {[...Array(5)].map((_, i) => (
                  <svg key={i} className="w-5 h-5" fill="currentColor" viewBox="0 0 20 20">
                    <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                  </svg>
                ))}
              </div>
              <p className="text-slate-300 text-sm leading-relaxed mb-5 italic">&ldquo;{t.text}&rdquo;</p>
              <div className="flex items-center gap-3">
                <div className="w-10 h-10 rounded-full bg-blue-600 flex items-center justify-center text-white font-bold text-sm flex-shrink-0">
                  {t.initials}
                </div>
                <div>
                  <p className="text-white font-semibold text-sm">{t.name}</p>
                  <p className="text-slate-500 text-xs">{t.title}</p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
