import { useEffect, useRef } from 'react'
import gsap from 'gsap'
import { ScrollTrigger } from 'gsap/ScrollTrigger'
gsap.registerPlugin(ScrollTrigger)

const features = [
  {
    icon: '⬡',
    title: 'Axomiya NLP',
    desc: 'Deep semantic understanding of Assamese grammar, honorifics, and dialectal variation across 12 regional forms.',
    tag: 'Language',
    color: 'var(--gold)',
  },
  {
    icon: '◎',
    title: 'Voice Recognition',
    desc: 'Real-time speech-to-text built for Assamese phonology — including tonal patterns unique to the region.',
    tag: 'Speech',
    color: 'var(--cyan)',
  },
  {
    icon: '◈',
    title: 'Cultural Context Engine',
    desc: 'Understands Bihu references, Assamese proverbs (baakya), and cultural idioms that confuse global AI models.',
    tag: 'Culture',
    color: 'var(--red-mid)',
  },
  {
    icon: '⬡',
    title: 'Document Processing',
    desc: 'Read and summarize government documents, legal notices, and news articles published in Assamese script.',
    tag: 'Productivity',
    color: 'var(--green-light)',
  },
  {
    icon: '◎',
    title: 'AI Translation',
    desc: 'Fluent translation between Assamese, Hindi, English and Bengali — preserving cultural nuance, not just words.',
    tag: 'Translation',
    color: 'var(--gold)',
  },
  {
    icon: '◈',
    title: 'Enterprise API',
    desc: 'Build Assamese AI into your product with our REST API. Documentation in both English and Assamese.',
    tag: 'Developer',
    color: 'var(--cyan)',
  },
]

export default function Features() {
  const sectionRef = useRef()
  const cardsRef = useRef([])

  useEffect(() => {
    cardsRef.current.forEach((card, i) => {
      gsap.fromTo(card,
        { opacity:0, y:50 },
        { opacity:1, y:0, duration:0.7, ease:'power3.out',
          delay: i * 0.1,
          scrollTrigger:{ trigger:sectionRef.current, start:'top 70%' } })
    })
  }, [])

  return (
    <section id="features" ref={sectionRef} className="section" style={{background:'var(--charcoal-mid)'}}>
      <div className="container">
        <div style={{textAlign:'center',marginBottom:72}}>
          <div className="eyebrow" style={{justifyContent:'center'}}>Platform Features</div>
          <h2 className="section-title">Built Different.<br/><span className="gradient-text">By Design.</span></h2>
          <p className="section-subtitle" style={{margin:'0 auto',textAlign:'center'}}>
            Every feature is designed around how Assamese people actually communicate — not retrofitted from a global model.
          </p>
        </div>

        <div style={{
          display:'grid',
          gridTemplateColumns:'repeat(auto-fit,minmax(340px,1fr))',
          gap:1,
          background:'var(--border)',
          border:'1px solid var(--border)',
        }}>
          {features.map((f, i) => (
            <div
              key={f.title}
              ref={el => cardsRef.current[i] = el}
              style={{
                background:'var(--charcoal-mid)',
                padding:40,
                opacity:0,
                transition:'background 0.3s',
                cursor:'none',
              }}
              onMouseEnter={e => e.currentTarget.style.background='var(--charcoal-light)'}
              onMouseLeave={e => e.currentTarget.style.background='var(--charcoal-mid)'}
            >
              {/* Icon */}
              <div style={{
                fontSize:28,color:f.color,marginBottom:20,
                lineHeight:1,display:'block',
              }}>{f.icon}</div>

              {/* Tag */}
              <div style={{
                display:'inline-block',
                fontSize:10,fontWeight:700,letterSpacing:'0.12em',
                textTransform:'uppercase',
                color:f.color,
                border:`1px solid ${f.color}`,
                padding:'3px 10px',borderRadius:2,
                marginBottom:16,opacity:0.8,
              }}>{f.tag}</div>

              <h3 style={{
                fontFamily:"'Plus Jakarta Sans',sans-serif",
                fontSize:22,fontWeight:800,marginBottom:12,letterSpacing:'-0.02em',
              }}>{f.title}</h3>

              <p style={{fontSize:15,lineHeight:1.7,color:'var(--text-muted)'}}>{f.desc}</p>

              {/* Arrow */}
              <div style={{marginTop:24,color:f.color,fontSize:20}}>→</div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
