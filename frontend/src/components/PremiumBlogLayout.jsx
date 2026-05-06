import React from "react";

export default function PremiumCybersecurityBlog() {
  return (
    <div className="bg-[#faf8f4] text-[#1a1a2e] overflow-hidden">
      {/* GOOGLE FONTS */}
      <style>{`
        @import url('https://fonts.googleapis.com/css2?family=DM+Sans:wght@400;500;700;800&family=Playfair+Display:wght@600;700;800&display=swap');

        .font-serif {
          font-family: 'Playfair Display', serif;
        }

        .font-sans-custom {
          font-family: 'DM Sans', sans-serif;
        }
      `}</style>

      {/* TOP BAR */}
      <header className="bg-[#0b1f3a] border-b border-white/10 sticky top-0 z-50 backdrop-blur-xl">
        <div className="max-w-7xl mx-auto px-6 py-5 flex items-center justify-between">
          <div className="text-white text-xl font-bold tracking-wide">
            VISIONARY<span className="text-[#f4a522]">SECURE</span>
          </div>

          <nav className="hidden md:flex items-center gap-8 text-white/80 text-sm">
            <a href="#" className="hover:text-[#f4a522] transition">
              Threat Intelligence
            </a>
            <a href="#" className="hover:text-[#f4a522] transition">
              AI Security
            </a>
            <a href="#" className="hover:text-[#f4a522] transition">
              Cloud Defense
            </a>
            <a href="#" className="hover:text-[#f4a522] transition">
              Enterprise Risk
            </a>
          </nav>
        </div>
      </header>

      {/* HERO */}
      <section className="relative overflow-hidden bg-gradient-to-br from-[#0b1f3a] via-[#162d50] to-[#0b1f3a] text-white">
        {/* RADIAL OVERLAY */}
        <div className="absolute top-0 left-0 w-[500px] h-[500px] bg-[#1a73e8]/20 blur-[140px] rounded-full" />
        <div className="absolute bottom-0 right-0 w-[400px] h-[400px] bg-[#f4a522]/20 blur-[120px] rounded-full" />

        <div className="relative max-w-6xl mx-auto px-6 py-28 md:py-36">
          {/* BADGE */}
          <div className="inline-flex items-center gap-2 bg-white/10 backdrop-blur-xl border border-white/10 rounded-full px-5 py-2 mb-8">
            <span className="w-2 h-2 bg-[#f4a522] rounded-full"></span>
            <span className="text-sm tracking-wide text-white/90">
              Enterprise Cybersecurity Intelligence
            </span>
          </div>

          {/* TITLE */}
          <h1 className="font-serif text-5xl md:text-7xl leading-tight font-bold max-w-5xl">
            The Future of{" "}
            <span className="text-[#f4a522]">
              AI-Powered Cybersecurity
            </span>{" "}
            for Modern Enterprises
          </h1>

          {/* SUBTITLE */}
          <p className="mt-8 text-lg md:text-xl text-white/75 leading-relaxed max-w-3xl">
            Organizations are entering an era where artificial intelligence
            drives both cyberattacks and cyber defense. This deep dive explores
            how enterprise leaders can secure cloud ecosystems, prevent
            ransomware escalation, and build resilient digital infrastructure.
          </p>

          {/* META */}
          <div className="mt-10 flex flex-wrap gap-6 text-sm text-white/70">
            <span>📅 March 2026</span>
            <span>⏱ 12 min read</span>
            <span>✍ Visionary Dynamics Research Team</span>
          </div>
        </div>
      </section>

      {/* MAIN ARTICLE */}
      <main className="max-w-4xl mx-auto px-6 py-24 font-sans-custom">
        {/* DIVIDER */}
        <div className="w-24 h-1 bg-gradient-to-r from-[#f4a522] to-[#1a73e8] rounded-full mb-14"></div>

        {/* INTRO */}
        <div className="space-y-8 text-lg leading-9 text-[#2b2b42]">
          <p>
            Enterprise cybersecurity is no longer just about firewalls and
            antivirus software. In today’s digital economy, organizations are
            defending against highly automated threats powered by machine
            learning, AI-generated malware, and social engineering at scale.
          </p>

          <p>
            <strong>
              The biggest misconception executives still have
            </strong>{" "}
            is believing cybersecurity is purely an IT responsibility. Modern
            threats impact finance, operations, compliance, customer trust, and
            long-term business continuity.
          </p>
        </div>

        {/* CALLOUT */}
        <div className="mt-14 border border-red-400/30 bg-red-500/10 rounded-3xl p-8 shadow-xl">
          <div className="flex items-start gap-4">
            <div className="text-3xl">⚠️</div>

            <div>
              <h3 className="text-2xl font-bold text-red-600 mb-3">
                Critical Threat Warning
              </h3>

              <p className="text-[#2b2b42] leading-8">
                AI-generated phishing campaigns are now capable of mimicking
                executive communication patterns with alarming precision.
                Organizations relying solely on traditional email filtering are
                increasingly vulnerable.
              </p>
            </div>
          </div>
        </div>

        {/* SECTION */}
        <section className="mt-24">
          <h2 className="font-serif text-4xl md:text-5xl font-bold text-[#0b1f3a] leading-tight">
            Why AI Changes the Cybersecurity Landscape
          </h2>

          <div className="mt-10 space-y-8 text-lg leading-9 text-[#2b2b42]">
            <p>
              Artificial intelligence has accelerated both attack sophistication
              and defense automation. Threat actors now use AI to identify
              system vulnerabilities faster than ever before.
            </p>

            <p>
              Meanwhile, enterprise defenders are leveraging predictive
              analytics, behavioral monitoring, and automated incident response
              to reduce breach response time dramatically.
            </p>
          </div>

          {/* H3 */}
          <div className="mt-16 border-l-4 border-[#f4a522] pl-6">
            <h3 className="font-serif text-3xl font-bold text-[#162d50]">
              The Rise of Autonomous Threat Systems
            </h3>
          </div>

          <p className="mt-8 text-lg leading-9 text-[#2b2b42]">
            Autonomous attack systems can now scan cloud infrastructure,
            identify exposed credentials, and deploy malware without direct
            human involvement. This evolution dramatically reduces the time
            between vulnerability discovery and exploitation.
          </p>
        </section>

        {/* STATS */}
        <section className="mt-28 grid grid-cols-1 md:grid-cols-3 gap-8">
          {[
            {
              number: "93%",
              label: "of enterprises faced phishing attacks in 2025",
            },
            {
              number: "47%",
              label: "increase in AI-assisted ransomware campaigns",
            },
            {
              number: "$4.8M",
              label: "average enterprise breach cost globally",
            },
          ].map((item, index) => (
            <div
              key={index}
              className="rounded-3xl bg-white shadow-2xl border border-black/5 p-10 hover:-translate-y-2 transition duration-500"
            >
              <h3 className="text-5xl font-black text-[#1a73e8]">
                {item.number}
              </h3>

              <p className="mt-4 text-[#4b4b63] leading-8">
                {item.label}
              </p>
            </div>
          ))}
        </section>

        {/* THREAT GRID */}
        <section className="mt-28">
          <h2 className="font-serif text-4xl font-bold text-[#0b1f3a]">
            Emerging Enterprise Threat Categories
          </h2>

          <div className="mt-12 grid md:grid-cols-2 gap-8">
            {[
              {
                title: "AI Phishing",
                desc: "Machine-generated social engineering campaigns targeting executives.",
              },
              {
                title: "Cloud Misconfiguration",
                desc: "Improper IAM policies exposing sensitive infrastructure.",
              },
              {
                title: "Ransomware-as-a-Service",
                desc: "Subscription-based attack ecosystems lowering barriers to entry.",
              },
              {
                title: "Supply Chain Attacks",
                desc: "Compromising trusted third-party vendors to gain internal access.",
              },
            ].map((card, index) => (
              <div
                key={index}
                className="group rounded-3xl bg-gradient-to-br from-white to-[#f6f9ff] border border-black/5 p-8 shadow-xl hover:shadow-2xl hover:-translate-y-2 transition duration-500"
              >
                <h3 className="text-2xl font-bold text-[#162d50] group-hover:text-[#1a73e8] transition">
                  {card.title}
                </h3>

                <p className="mt-4 text-[#4b4b63] leading-8">
                  {card.desc}
                </p>
              </div>
            ))}
          </div>
        </section>

        {/* SVG INFOGRAPHIC */}
        <section className="mt-28 rounded-[32px] overflow-hidden bg-gradient-to-br from-[#0b1f3a] to-[#162d50] p-10 md:p-16 text-white shadow-2xl">
          <h2 className="font-serif text-4xl font-bold mb-10">
            Enterprise Attack Surface Visualization
          </h2>

          <svg
            viewBox="0 0 800 320"
            className="w-full"
            fill="none"
          >
            <rect
              x="60"
              y="100"
              width="160"
              height="90"
              rx="18"
              fill="#1a73e8"
            />

            <rect
              x="320"
              y="50"
              width="160"
              height="90"
              rx="18"
              fill="#f4a522"
            />

            <rect
              x="580"
              y="100"
              width="160"
              height="90"
              rx="18"
              fill="#1fc77a"
            />

            <line
              x1="220"
              y1="145"
              x2="320"
              y2="95"
              stroke="white"
              strokeWidth="4"
            />

            <line
              x1="480"
              y1="95"
              x2="580"
              y2="145"
              stroke="white"
              strokeWidth="4"
            />

            <text
              x="105"
              y="150"
              fill="white"
              fontSize="20"
            >
              Users
            </text>

            <text
              x="360"
              y="100"
              fill="white"
              fontSize="20"
            >
              AI Defense
            </text>

            <text
              x="625"
              y="150"
              fill="white"
              fontSize="20"
            >
              Cloud
            </text>
          </svg>
        </section>

        {/* LIST */}
        <section className="mt-28">
          <h2 className="font-serif text-4xl font-bold text-[#0b1f3a]">
            Core Cybersecurity Priorities
          </h2>

          <ul className="mt-10 space-y-6">
            {[
              "Implement zero-trust network architecture",
              "Enforce multi-factor authentication enterprise-wide",
              "Deploy AI-driven anomaly detection",
              "Continuously monitor cloud environments",
              "Conduct ransomware simulation exercises",
            ].map((item, index) => (
              <li
                key={index}
                className="flex items-start gap-4 text-lg"
              >
                <div className="w-7 h-7 rounded-full bg-[#1a73e8] text-white flex items-center justify-center shrink-0 mt-1">
                  ✓
                </div>

                <span className="leading-8 text-[#2b2b42]">
                  {item}
                </span>
              </li>
            ))}
          </ul>
        </section>

        {/* TIMELINE */}
        <section className="mt-28">
          <h2 className="font-serif text-4xl font-bold text-[#0b1f3a]">
            Building a Resilient Security Strategy
          </h2>

          <div className="mt-12 space-y-8">
            {[
              "Audit all cloud and SaaS infrastructure.",
              "Identify privileged access vulnerabilities.",
              "Deploy automated monitoring systems.",
              "Train teams against AI-powered phishing attacks.",
            ].map((step, index) => (
              <div
                key={index}
                className="flex gap-6 rounded-3xl bg-white p-8 shadow-xl border border-black/5"
              >
                <div className="w-16 h-16 rounded-2xl bg-gradient-to-br from-[#1a73e8] to-[#162d50] text-white flex items-center justify-center text-2xl font-bold shrink-0">
                  {index + 1}
                </div>

                <div>
                  <h3 className="text-2xl font-bold text-[#162d50]">
                    Step {index + 1}
                  </h3>

                  <p className="mt-3 text-[#4b4b63] leading-8">
                    {step}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </section>

        {/* BLOCKQUOTE */}
        <blockquote className="mt-28 border-l-4 border-[#f4a522] pl-8 italic text-3xl font-serif text-[#162d50] leading-relaxed">
          “Cybersecurity is no longer a technical safeguard — it is a
          strategic business survival function.”
        </blockquote>

        {/* SUCCESS CALLOUT */}
        <div className="mt-20 border border-green-400/30 bg-green-500/10 rounded-3xl p-8 shadow-xl">
          <h3 className="text-2xl font-bold text-green-700 mb-4">
            Successful Security Transformation
          </h3>

          <p className="leading-8 text-[#2b2b42]">
            Enterprises implementing AI-assisted monitoring systems reduced
            average breach detection time by over 60%, dramatically improving
            incident response efficiency.
          </p>
        </div>
      </main>

      {/* CTA */}
      <section className="relative overflow-hidden py-28 bg-gradient-to-br from-[#0b1f3a] to-[#162d50] text-white">
        <div className="absolute inset-0">
          <div className="absolute top-0 left-0 w-[400px] h-[400px] bg-[#1a73e8]/20 blur-[120px] rounded-full"></div>

          <div className="absolute bottom-0 right-0 w-[400px] h-[400px] bg-[#f4a522]/20 blur-[120px] rounded-full"></div>
        </div>

        <div className="relative max-w-5xl mx-auto px-6 text-center">
          <h2 className="font-serif text-5xl md:text-6xl font-bold leading-tight">
            Protect Your Enterprise Before the Next Attack
          </h2>

          <p className="mt-8 text-xl text-white/75 leading-9 max-w-3xl mx-auto">
            Our cybersecurity specialists help enterprises secure cloud
            infrastructure, mitigate AI-driven threats, and build resilient
            digital ecosystems.
          </p>

          <div className="mt-12">
            <button className="group px-10 py-5 rounded-2xl bg-gradient-to-r from-[#f4a522] to-[#ffbf47] text-[#0b1f3a] font-bold text-lg shadow-2xl hover:scale-105 transition duration-300">
              Schedule Security Consultation
            </button>
          </div>
        </div>
      </section>

      {/* FOOTER */}
      <footer className="bg-[#081728] text-white/70">
        <div className="max-w-7xl mx-auto px-6 py-14 flex flex-col md:flex-row justify-between gap-10">
          <div>
            <h3 className="text-2xl font-bold text-white">
              Visionary<span className="text-[#f4a522]">Secure</span>
            </h3>

            <p className="mt-4 max-w-md leading-8 text-white/60">
              Premium cybersecurity intelligence and enterprise AI risk
              consulting for modern organizations.
            </p>
          </div>

          <div className="flex flex-wrap gap-10">
            <div>
              <h4 className="font-bold text-white mb-4">
                Solutions
              </h4>

              <ul className="space-y-3">
                <li>Threat Intelligence</li>
                <li>Cloud Security</li>
                <li>AI Risk Assessment</li>
                <li>Compliance</li>
              </ul>
            </div>

            <div>
              <h4 className="font-bold text-white mb-4">
                Company
              </h4>

              <ul className="space-y-3">
                <li>About</li>
                <li>Research</li>
                <li>Contact</li>
                <li>Consulting</li>
              </ul>
            </div>
          </div>
        </div>

        <div className="border-t border-white/10 py-6 text-center text-sm text-white/40">
          © 2026 VisionarySecure. All rights reserved.
        </div>
      </footer>
    </div>
  );
}