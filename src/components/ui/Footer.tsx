import Link from 'next/link';
import Image from 'next/image';
import { services, industries } from '@/lib/data';

export default function Footer() {
  const year = new Date().getFullYear();

  return (
    <footer className="mt-20 border-t bg-[var(--footer-bg)] border-[color:var(--border)]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-10">
          {/* Brand */}
          <div className="lg:col-span-1">
          <Link href="/" className="inline-block mb-4">
            <Image
              src="/logo.png"
              alt="MyVoIP"
              width={140}
              height={52}
              className="h-12 w-auto object-contain bg-white rounded-lg px-2 py-1"
            />
          </Link>
            <p className="text-slate-400 text-sm leading-relaxed mb-4">
              The premier provider of cloud communications solutions. Feature-rich, reliable, and affordable VoIP starting at $9.99/month.
            </p>
            <div className="text-sm text-slate-400 space-y-1">
              <p>281 US-46 West</p>
              <p>Elmwood Park, NJ 07407</p>
              <a href="tel:+18336986471" className="text-blue-400 hover:text-blue-300 block">(833) 698-6471</a>
            </div>
            <div className="mt-4 flex flex-wrap gap-1 text-xs text-slate-500">
              <span>Atlanta, GA</span><span>·</span>
              <span>Houston, TX</span><span>·</span>
              <span>West Palm Beach, FL</span><span>·</span>
              <span>Chicago, IL</span><span>·</span>
              <span>San Francisco, CA</span>
            </div>
          </div>

          {/* Services */}
          <div>
            <h3 className="text-white font-semibold text-sm uppercase tracking-wider mb-4">Services</h3>
            <ul className="space-y-2">
              {services.map((s) => (
                <li key={s.slug}>
                  <Link href={`/services/${s.slug}`} className="text-slate-400 hover:text-white text-sm transition-colors">
                    {s.shortName}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Industries */}
          <div>
            <h3 className="text-white font-semibold text-sm uppercase tracking-wider mb-4">Industries</h3>
            <ul className="space-y-2">
              {industries.map((i) => (
                <li key={i.slug}>
                  <Link href={`/industries/${i.slug}`} className="text-slate-400 hover:text-white text-sm transition-colors">
                    {i.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="text-white font-semibold text-sm uppercase tracking-wider mb-4">Quick Links</h3>
            <ul className="space-y-2">
              <li><Link href="/contact" className="text-slate-400 hover:text-white text-sm transition-colors">Contact Us</Link></li>
              <li><a href="https://support.my-voip.com/support/sp-home" className="text-slate-400 hover:text-white text-sm transition-colors">Support Portal</a></li>
              <li><a href="https://login.myvoip.co/portal/" className="text-slate-400 hover:text-white text-sm transition-colors">Customer Portal</a></li>
              <li><a href="https://faxing.myvoip.co/signin" className="text-slate-400 hover:text-white text-sm transition-colors">Fax Portal</a></li>
              <li><Link href="/contact" className="text-slate-400 hover:text-white text-sm transition-colors">Referral Program</Link></li>
              <li><Link href="/privacy-policy" className="text-slate-400 hover:text-white text-sm transition-colors">Privacy Policy</Link></li>
              <li><Link href="/terms-of-services" className="text-slate-400 hover:text-white text-sm transition-colors">Terms of Service</Link></li>
            </ul>
            <div className="mt-8">
              <Link href="/quote" className="inline-block bg-blue-600 hover:bg-blue-500 text-white text-sm font-semibold px-5 py-2.5 rounded-lg transition-colors">
                Get a Free Quote
              </Link>
            </div>
          </div>
        </div>

        {/* A2P 10DLC SMS disclosure */}
        <div className="mt-10 pt-8 border-t border-slate-800 text-slate-600 text-xs leading-relaxed">
          <p>
            By providing your phone number and opting in, you consent to receive SMS messages from MyVoIP. Message frequency varies.
            Msg &amp; data rates may apply. Reply <strong className="text-slate-500">STOP</strong> to opt out &nbsp;·&nbsp;
            Reply <strong className="text-slate-500">HELP</strong> for help. We do not sell or share SMS opt-in data with third parties.
          </p>
        </div>

        <div className="mt-4 flex flex-col sm:flex-row justify-between items-center gap-4">
          <p className="text-slate-500 text-sm">© {year} MyVoIP (MYVOIP LLC). All Rights Reserved.</p>
          <div className="flex flex-wrap gap-5 text-sm text-slate-500">
            <Link href="/privacy-policy" className="hover:text-slate-300 transition-colors">Privacy Policy</Link>
            <Link href="/terms-of-services" className="hover:text-slate-300 transition-colors">Terms of Service</Link>
            <Link href="/terms-of-services#sms-policy" className="hover:text-slate-300 transition-colors">SMS Policy</Link>
            <Link href="/contact" className="hover:text-slate-300 transition-colors">Contact Us</Link>
          </div>
        </div>
      </div>
    </footer>
  );
}
