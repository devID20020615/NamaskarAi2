import { useEffect, useRef } from 'react'
import gsap from 'gsap'
import { ScrollTrigger } from 'gsap/ScrollTrigger'

const cases = [
  {
    sector: 'Government',
    title: 'Digital Assam Services',
    desc: 'Help citizens interact with government portals and documents in their native language — no English required.',
    icon: '🏛',
    accent: 'var(--red-mid)',
  },
  {
    sector: 'Education',
    title: 'Vernacular Learning',
    desc: 'AI tutors that teach science, math and history in Assamese for students in rural districts with limited access to English-medium content.',
    icon: '📚',
    accent: 'var(--gold)',
  },
  {
    sector: 'Healthcare',
    title: 'Medical Communication',
    desc: 'Enable doctors and ASHA workers to communicate AI-assisted diagnoses and health advisories in Assamese to rural patients.',
    icon: '🏥',
    accent: 'var(--cyan)',
  },
  {
    sector: 'Agriculture',
    title: 'Smart Farming',
    desc: 'Provide tea garden workers and paddy farmers with weather forecasts, market prices and crop advice in Assamese via voice.',
    icon: '🌾',
    accent: 'var(--green-light)',
  },
  {
    sector: 'Media',
    title: 'Journalism & Broadcasting',
    desc: 'Auto-transcribe, translate and summarize Assamese news for regional broadcasters and digital newsrooms.',
    icon: '📡',
    accent: 'var(--gold)',
  },
  {
    sector: 'Legal',
    title: 'Legal Aid Access',
    desc: 'Translate and explain complex legal documents, court notices and FIRs into plain Assamese for underrepresented communities.',
    icon: '⚖',
    accent: 'var(--red-mid)',
  },
]

export default function UseCases() {
  const sectionRef = useRef()

  useEffect(() => {
    gsap.fromTo('.usecase-card',
      { opacity:0, y:40 },
      { opacity:1, y:0, duration:0.6, stagger:0.1, ease:'power3.out',
        scrollTrigger:{ trigger:sectionRef.current, start:'top 70%' } })
  }, [])

  return (
    <section id="use-cases" ref={sectionRef} className="section">
      <div className="container">
        <div style={{display:'flex',justifyContent:'space-between',alignItems:'flex-end',marginBottom:64,flexWrap:'wrap',gap:24}}>
          <div>
            <div className="eyebrow">Use Cases</div>
            <h2 className="section-title">
              Every sector.<br/><span className="gradient-text">One language.</span>
            </h2>
          </div>
          <p className="section-subtitle" style={{maxWidth:400}}>
            Namaskara AI is already working across critical sectors in Assam, bridging the digital language gap.
          </p>
        </div>

        <div style={{
          display:'grid',
          gridTemplateColumns:'repeat(auto-fit,minmax(320px,1fr))',
          gap:24,
        }}>
          {cases.map((c,i) => (
            <div
              key={c.title}
              className="usecase-card"
              style={{
                background:'var(--charcoal-light)',
                border:'1px solid var(--border)',
                borderRadius:2,
                padding:32,
                opacity:0,
                transition:'border-color 0.3s,transform 0.2s',
                cursor:'none',
              }}
              onMouseEnter={e => {
                e.currentTarget.style.borderColor = c.accent
                e.currentTarget.style.transform = 'translateY(-4px)'
              }}
              onMouseLeave={e => {
                e.currentTarget.style.borderColor = 'var(--border)'
                e.currentTarget.style.transform = 'none'
              }}
            >
              <div style={{
                display:'flex',justifyContent:'space-between',alignItems:'flex-start',marginBottom:20,
              }}>
                <span style={{fontSize:32}}>{c.icon}</span>
                <span style={{
                  fontSize:10,fontWeight:700,letterSpacing:'0.12em',textTransform:'uppercase',
                  color:c.accent,border:`1px solid ${c.accent}`,padding:'3px 10px',borderRadius:2,opacity:0.8,
                }}>{c.sector}</span>
              </div>
              <h3 style={{
                fontFamily:"'Plus Jakarta Sans',sans-serif",
                fontSize:20,fontWeight:800,marginBottom:12,letterSpacing:'-0.02em',
              }}>{c.title}</h3>
              <p style={{fontSize:14,lineHeight:1.7,color:'var(--text-muted)'}}>{c.desc}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
