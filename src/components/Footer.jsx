export default function Footer() {
  return (
    <footer style={{
      background:'var(--charcoal)',
      borderTop:'1px solid var(--border)',
      padding:'64px 0 40px',
    }}>
      <div className="container">
        <div style={{display:'grid',gridTemplateColumns:'2fr 1fr 1fr 1fr',gap:48,marginBottom:64}}>
          {/* Brand */}
          <div>
            <div style={{
              fontFamily:"'Plus Jakarta Sans',sans-serif",
              fontSize:20,fontWeight:800,letterSpacing:'-0.03em',
              marginBottom:16,
            }}>
              Namaskara AI
            </div>
            <p style={{fontSize:14,lineHeight:1.8,color:'var(--text-muted)',maxWidth:280,marginBottom:24}}>
              The AI platform built for the Assamese people. Language, culture, and intelligence — together.
            </p>
            {/* Gamosa stripe decoration */}
            <div style={{display:'flex',gap:3}}>
              {['var(--red-deep)','var(--ivory)','var(--red-deep)','var(--ivory)','var(--red-deep)'].map((c,i) => (
                <div key={i} style={{width:24,height:3,background:c,borderRadius:1,opacity:i%2===0?1:0.4}}/>
              ))}
            </div>
          </div>

          {/* Links */}
          {[
            { title:'Product', links:['Features','Language AI','API','Pricing','Changelog'] },
            { title:'Company', links:['About','Blog','Careers','Press','Contact'] },
            { title:'Community', links:['Discord','GitHub','Developer Docs','Newsletter','Events in Assam'] },
          ].map(col => (
            <div key={col.title}>
              <div style={{
                fontSize:11,fontWeight:700,letterSpacing:'0.12em',textTransform:'uppercase',
                color:'var(--gold)',marginBottom:20,
              }}>{col.title}</div>
              {col.links.map(l => (
                <div key={l} style={{marginBottom:12}}>
                  <a href="#" style={{
                    fontSize:14,color:'var(--text-muted)',textDecoration:'none',
                    transition:'color 0.2s',
                  }}
                  onMouseEnter={e=>e.target.style.color='var(--ivory)'}
                  onMouseLeave={e=>e.target.style.color='var(--text-muted)'}
                  >{l}</a>
                </div>
              ))}
            </div>
          ))}
        </div>

        {/* Bottom bar */}
        <div style={{
          paddingTop:32,borderTop:'1px solid var(--border)',
          display:'flex',justifyContent:'space-between',alignItems:'center',flexWrap:'wrap',gap:16,
        }}>
          <p style={{fontSize:12,color:'var(--text-muted)'}}>
            © 2025 Namaskara AI Technologies Pvt. Ltd. · Guwahati, Assam, India
          </p>
          <p style={{
            fontSize:12,color:'var(--text-muted)',
            fontFamily:"'Plus Jakarta Sans',sans-serif",letterSpacing:'0.05em',
          }}>
            নমস্কাৰ · Nomoskar · नमस्कार
          </p>
        </div>
      </div>
    </footer>
  )
}
