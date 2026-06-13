export default function CTA() {
  return (
    <section id="cta" className="section"
      style={{background:'var(--charcoal-mid)',position:'relative',overflow:'hidden'}}>

      {/* Decorative Xorai rings background */}
      <div style={{position:'absolute',inset:0,display:'flex',alignItems:'center',justifyContent:'center',pointerEvents:'none'}}>
        {[400,600,800,1000].map((s,i) => (
          <div key={i} style={{
            position:'absolute',
            width:s,height:s,
            border:`1px solid rgba(201,150,42,${0.08-i*0.015})`,
            borderRadius:'50%',
          }}/>
        ))}
      </div>

      <div className="container" style={{position:'relative',zIndex:2,textAlign:'center'}}>
        <div className="eyebrow" style={{justifyContent:'center'}}>Early Access</div>

        <h2 style={{
          fontFamily:"'Plus Jakarta Sans',sans-serif",
          fontSize:'clamp(40px,6vw,72px)',
          fontWeight:800,lineHeight:1.05,letterSpacing:'-0.04em',
          marginBottom:24,
        }}>
          Be part of<br/>
          <span className="gradient-text">Assam's AI revolution.</span>
        </h2>

        <p style={{
          fontSize:18,lineHeight:1.75,color:'var(--text-muted)',
          maxWidth:520,margin:'0 auto 48px',
        }}>
          Join 10,000+ early users across Assam already shaping the future of regional AI. Free forever for individuals.
        </p>

        {/* Email form */}
        <div style={{
          display:'flex',gap:12,maxWidth:480,margin:'0 auto 20px',flexWrap:'wrap',
          justifyContent:'center',
        }}>
          <input
            type="email"
            placeholder="your@email.com"
            style={{
              flex:1,minWidth:240,
              padding:'14px 20px',
              background:'var(--charcoal-light)',
              border:'1px solid var(--border)',
              borderRadius:4,
              color:'var(--ivory)',
              fontFamily:"'Inter',sans-serif",fontSize:15,
              outline:'none',
            }}
            onFocus={e=>e.target.style.borderColor='var(--gold)'}
            onBlur={e=>e.target.style.borderColor='var(--border)'}
          />
          <button className="btn-primary" style={{whiteSpace:'nowrap'}}>
            Request Access →
          </button>
        </div>

        <p style={{fontSize:12,color:'var(--text-muted)',letterSpacing:'0.04em'}}>
          No credit card. No spam. Launches from Guwahati.
        </p>

        {/* Logos / trust signals */}
        <div style={{
          marginTop:72,paddingTop:40,borderTop:'1px solid var(--border)',
          display:'flex',gap:40,justifyContent:'center',flexWrap:'wrap',alignItems:'center',
        }}>
          {['IIT Guwahati Partner','NASSCOM Startup','Startup Assam Network','DPIIT Recognized'].map(l => (
            <span key={l} style={{
              fontSize:12,color:'var(--text-muted)',letterSpacing:'0.06em',
              padding:'8px 16px',border:'1px solid var(--border)',borderRadius:2,
            }}>{l}</span>
          ))}
        </div>
      </div>
    </section>
  )
}
