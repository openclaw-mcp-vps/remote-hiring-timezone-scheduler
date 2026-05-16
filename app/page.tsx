export default function Home() {
  return (
    <main className="max-w-3xl mx-auto px-6 py-16 flex flex-col gap-20">

      {/* Hero */}
      <section className="flex flex-col gap-6 text-center">
        <div className="inline-block mx-auto bg-[#161b22] border border-[#30363d] text-[#58a6ff] text-xs font-semibold px-3 py-1 rounded-full uppercase tracking-widest">
          Remote Hiring Tool
        </div>
        <h1 className="text-4xl sm:text-5xl font-bold text-white leading-tight">
          Schedule interviews across{' '}
          <span className="text-[#58a6ff]">global timezones</span>
        </h1>
        <p className="text-[#8b949e] text-lg max-w-xl mx-auto">
          Stop the timezone math. Automatically find optimal interview slots for your remote candidates — no spreadsheets, no back-and-forth emails.
        </p>
        <div className="flex flex-col sm:flex-row gap-3 justify-center mt-2">
          <a
            href={process.env.NEXT_PUBLIC_LS_CHECKOUT_URL || "#"}
            className="bg-[#58a6ff] hover:bg-[#79b8ff] text-[#0d1117] font-bold px-8 py-3 rounded-lg transition-colors text-base"
          >
            Start Scheduling — $6/mo
          </a>
          <a
            href="#faq"
            className="border border-[#30363d] hover:border-[#58a6ff] text-[#c9d1d9] px-8 py-3 rounded-lg transition-colors text-base"
          >
            Learn more
          </a>
        </div>
        <div className="flex flex-wrap justify-center gap-6 text-sm text-[#8b949e] mt-2">
          <span>🌍 50+ timezones supported</span>
          <span>📅 Calendar integrations</span>
          <span>⚡ Instant slot detection</span>
        </div>
      </section>

      {/* Pricing */}
      <section className="flex flex-col gap-6 items-center">
        <h2 className="text-2xl font-bold text-white">Simple, flat pricing</h2>
        <div className="w-full max-w-sm bg-[#161b22] border border-[#58a6ff] rounded-2xl p-8 flex flex-col gap-5">
          <div className="flex items-end gap-2">
            <span className="text-5xl font-extrabold text-white">$6</span>
            <span className="text-[#8b949e] mb-2">/month</span>
          </div>
          <p className="text-[#8b949e] text-sm">Everything you need to hire globally without timezone headaches.</p>
          <ul className="flex flex-col gap-3 text-sm">
            {[
              'Unlimited interview scheduling',
              'Candidate availability tracking',
              'Google & Outlook calendar sync',
              'Automatic timezone conversion',
              'Email reminders & confirmations',
              'Priority support',
            ].map((f) => (
              <li key={f} className="flex items-center gap-2">
                <span className="text-[#58a6ff] font-bold">✓</span>
                <span className="text-[#c9d1d9]">{f}</span>
              </li>
            ))}
          </ul>
          <a
            href={process.env.NEXT_PUBLIC_LS_CHECKOUT_URL || "#"}
            className="mt-2 bg-[#58a6ff] hover:bg-[#79b8ff] text-[#0d1117] font-bold px-6 py-3 rounded-lg text-center transition-colors"
          >
            Get started for $6/mo
          </a>
          <p className="text-center text-xs text-[#8b949e]">Cancel anytime. No hidden fees.</p>
        </div>
      </section>

      {/* FAQ */}
      <section id="faq" className="flex flex-col gap-6">
        <h2 className="text-2xl font-bold text-white text-center">Frequently asked questions</h2>
        <div className="flex flex-col gap-4">
          {[
            {
              q: 'How does timezone detection work?',
              a: 'We automatically detect each candidate\'s local timezone from their browser or profile, then cross-reference it with your team\'s availability to surface slots that work for everyone — no manual conversion needed.',
            },
            {
              q: 'Which calendar providers are supported?',
              a: 'We integrate with Google Calendar and Microsoft Outlook out of the box. Connect your calendar in one click and your busy times are automatically blocked from candidate-facing booking pages.',
            },
            {
              q: 'Can I cancel my subscription anytime?',
              a: 'Yes. Cancel from your account dashboard at any time. You keep access until the end of your billing period with no questions asked.',
            },
          ].map(({ q, a }) => (
            <div key={q} className="bg-[#161b22] border border-[#30363d] rounded-xl p-6 flex flex-col gap-2">
              <h3 className="font-semibold text-white">{q}</h3>
              <p className="text-[#8b949e] text-sm leading-relaxed">{a}</p>
            </div>
          ))}
        </div>
      </section>

      <footer className="text-center text-xs text-[#8b949e] border-t border-[#21262d] pt-8">
        &copy; {new Date().getFullYear()} TimeZone Scheduler. All rights reserved.
      </footer>
    </main>
  )
}
