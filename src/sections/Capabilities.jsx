import { useEffect, useRef, useState } from 'react'
import gsap from 'gsap'
import { ScrollTrigger } from 'gsap/ScrollTrigger'
gsap.registerPlugin(ScrollTrigger)

function Counter({ target, suffix = '' }) {
  const [val, setVal] = useState(0)
  const ref = useRef()
  const triggered = useRef(false)

  useEffect(() => {
    ScrollTrigger.create({
      trigger: ref.current,
      start: 'top 80%',
      onEnter: () => {
        if (triggered.current) return
        triggered.current = true
        let start = 0
        const step = () => {
          start += Math.ceil(target / 60)
          if (start >= target) { setVal(target); return }
          setVal(start)
          requestAnimationFrame(step)
        }
        step()
      }
    })
  }, [])

  return <span ref={ref}>{val.toLocaleString()}{suffix}</span>
}

const stats = [
  { n: 99, suffix: '.2%', label: 'Accuracy on Assamese NLP benchmarks' },
  { n: 12, suffix: '', label: 'Assamese dialects recognized' },
  { n: 50, suffix: 'ms', label: 'Average response latency' },
  { n: 10000, suffix: '+', label: 'Early access users across Assam' },
]

const capabilities = [
  { title: 'Text Generation', desc: 'Write formal letters, social media posts, and stories in fluent Assamese.', pct: 94 },
  { title: 'Speech Transcription', desc: 'Convert spoken Assamese to accurate, punctuated text in real-time.', pct: 97 },
  { title: 'Sentiment Analysis', desc: 'Detect tone and emotion in Assamese text for social listening.', pct: 91 },
  { title: 'Named Entity Recognition', desc: 'Identify places, people, and organizations specific to Northeast India.', pct: 88 },
]

export default function Capabilities() {
  const sectionRef = useRef()
  const barsRef = useRef([])

  useEffect(() => {
    barsRef.current.forEach((bar, i) => {
      if (!bar) return
      ScrollTrigger.create({
        trigger: sectionRef.current,
        start: 'top 70%',
        onEnter: () => {
          gsap.fromTo(bar,
            { width: '0%' },
            { width: bar.dataset.pct + '%', duration: 1.2, ease: 'power2.out', delay: i * 0.15 })
        }
      })
    })
  }, [])

  return (
    <section id="capabilities" ref={sectionRef} className="section">
      <div className="container">
        <div className="eyebrow">AI Capabilities</div>
        <h2 className="section-title" style={{marginBottom:64}}>
          Numbers that<br/><span className="gradient-text">tell the story.</span>
        </h2>

        {/* Stats grid */}
        <div style={{
          display:'grid',gridTemplateColumns:'repeat(auto-fit,minmax(200px,1fr))',
          gap:2,marginBottom:80,background:'var(--border)',border:'1px solid var(--border)',
        }}>
          {stats.map((s,i) => (
            <div key={i} style={{
              background:'var(--charcoal-mid)',padding:'40px 32px',
              borderRight: i<stats.length-1 ? '1px solid var(--border)' : 'none',
            }}>
              <div style={{
                fontFamily:"'Plus Jakarta Sans',sans-serif",
                fontSize:'clamp(36px,4vw,52px)',fontWeight:800,
                background:'linear-gradient(135deg,var(--gold-light),var(--gold))',
                WebkitBackgroundClip:'text',WebkitTextFillColor:'transparent',
                marginBottom:8,lineHeight:1,
              }}>
                <Counter target={s.n} suffix={s.suffix}/>
              </div>
              <div style={{fontSize:13,color:'var(--text-muted)',lineHeight:1.5}}>{s.label}</div>
            </div>
          ))}
        </div>

        {/* Capability bars */}
        <div style={{
          display:'grid',gridTemplateColumns:'1fr 1fr',gap:48,
        }}>
          {capabilities.map((c,i) => (
            <div key={c.title}>
              <div style={{display:'flex',justifyContent:'space-between',marginBottom:10}}>
                <span style={{
                  fontFamily:"'Plus Jakarta Sans',sans-serif",
                  fontSize:16,fontWeight:700,
                }}>{c.title}</span>
                <span style={{fontFamily:"'Plus Jakarta Sans',sans-serif",fontSize:16,fontWeight:700,color:'var(--gold)'}}>{c.pct}%</span>
              </div>
              <p style={{fontSize:13,color:'var(--text-muted)',marginBottom:14,lineHeight:1.6}}>{c.desc}</p>
              <div style={{height:2,background:'var(--border)',borderRadius:1}}>
                <div
                  ref={el => barsRef.current[i] = el}
                  data-pct={c.pct}
                  style={{
                    height:'100%',
                    background:'linear-gradient(90deg,var(--gold),var(--gold-light))',
                    borderRadius:1,width:'0%',
                  }}
                />
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
