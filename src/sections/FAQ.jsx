import { useState } from 'react'

const faqs = [
  { q: 'What dialects of Assamese does Namaskara AI support?',
    a: 'We support 12 major dialects including Standard Axomiya, Kamrupi, Goalpariya, Bodo-influenced Assamese, Mishing-influenced, and several others. Dialect coverage is expanding continuously.' },
  { q: 'How is this different from Google Translate\'s Assamese mode?',
    a: 'Google Translate performs word-level translation trained on limited Assamese data. Namaskara AI is trained specifically on Assamese corpora including literature, administrative text, oral transcriptions, and cultural content — giving it genuine semantic understanding, not just word substitution.' },
  { q: 'Can I use it offline or in low-bandwidth areas?',
    a: 'A lightweight on-device model for basic text is coming in Q2. Our API is optimized for low-bandwidth connections and works on 2G networks for text-based tasks.' },
  { q: 'Is the API free for developers?',
    a: 'Yes — the first 10,000 API calls per month are free for registered developers. We have special grants for NGOs, government bodies, and academic institutions in Assam.' },
  { q: 'How do you protect the privacy of Assamese language data?',
    a: 'All data processed through Namaskara AI is stored on servers within India. We follow DPDP Act 2023 compliance. Voice data is not stored beyond the session unless you explicitly opt in for model improvement.' },
  { q: 'Will you support Bodo, Mishing, and other Northeast languages?',
    a: 'Bodo is in active development and expected in Q3. Mishing, Karbi, and Dimasa are on our 2025 roadmap. We\'re actively partnering with linguistic institutions from each community.' },
]

export default function FAQ() {
  const [open, setOpen] = useState(null)

  return (
    <section id="faq" className="section">
      <div className="container">
        <div style={{display:'grid',gridTemplateColumns:'1fr 1.6fr',gap:80,alignItems:'start'}}>
          <div style={{position:'sticky',top:100}}>
            <div className="eyebrow">FAQ</div>
            <h2 className="section-title">
              Questions<br/><span className="gradient-text">answered.</span>
            </h2>
            <p className="section-subtitle" style={{marginTop:20}}>
              Everything you need to know about Namaskara AI.
            </p>
            <a href="mailto:hello@namaskarai.in" className="btn-outline" style={{marginTop:32,display:'inline-flex'}}>
              Ask us directly →
            </a>
          </div>

          <div style={{display:'flex',flexDirection:'column',gap:2}}>
            {faqs.map((f,i) => (
              <div key={i} style={{
                border:'1px solid var(--border)',
                borderRadius:2,overflow:'hidden',
                background: open===i ? 'var(--charcoal-light)' : 'var(--charcoal-mid)',
                transition:'background 0.2s',
              }}>
                <button
                  onClick={()=>setOpen(open===i ? null : i)}
                  style={{
                    width:'100%',display:'flex',justifyContent:'space-between',alignItems:'center',
                    padding:'22px 24px',background:'none',border:'none',
                    color:'var(--ivory)',cursor:'none',textAlign:'left',gap:16,
                  }}
                >
                  <span style={{
                    fontFamily:"'Plus Jakarta Sans',sans-serif",
                    fontSize:16,fontWeight:600,lineHeight:1.4,
                  }}>{f.q}</span>
                  <span style={{
                    fontSize:20,color:'var(--gold)',flexShrink:0,
                    transform: open===i ? 'rotate(45deg)' : 'none',
                    transition:'transform 0.3s',display:'block',
                  }}>+</span>
                </button>
                {open===i && (
                  <div style={{
                    padding:'0 24px 22px',
                    fontSize:15,lineHeight:1.75,color:'var(--text-muted)',
                  }}>
                    {f.a}
                  </div>
                )}
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}
