const testimonials = [
  {
    quote: "Namaskara AI finally lets me interact with government services without relying on my children to translate. It speaks my language.",
    name: "Dipika Bora",
    role: "Farmer, Jorhat",
    initials: "DB",
    color: 'var(--gold)',
  },
  {
    quote: "As a teacher in rural Barpeta, this tool has transformed how I explain complex science concepts to my Assamese-medium students.",
    name: "Manash Kalita",
    role: "High School Teacher, Barpeta",
    initials: "MK",
    color: 'var(--cyan)',
  },
  {
    quote: "The accuracy on Kamrupi dialect is remarkable. We integrated it into our regional news app and engagement doubled overnight.",
    name: "Priya Dutta",
    role: "CTO, Protidin Digital",
    initials: "PD",
    color: 'var(--red-mid)',
  },
]

export default function Testimonials() {
  return (
    <section className="section" style={{background:'var(--charcoal-mid)'}}>
      <div className="container">
        <div style={{textAlign:'center',marginBottom:64}}>
          <div className="eyebrow" style={{justifyContent:'center'}}>Testimonials</div>
          <h2 className="section-title">
            Voices from<br/><span className="gradient-text">the Valley.</span>
          </h2>
        </div>

        <div style={{
          display:'grid',gridTemplateColumns:'repeat(auto-fit,minmax(300px,1fr))',gap:24,
        }}>
          {testimonials.map((t) => (
            <div key={t.name} style={{
              background:'var(--charcoal-light)',
              border:'1px solid var(--border)',
              borderRadius:2,padding:36,
              display:'flex',flexDirection:'column',gap:28,
            }}>
              {/* Quote mark */}
              <div style={{
                fontSize:48,lineHeight:1,color:t.color,opacity:0.6,
                fontFamily:"'Plus Jakarta Sans',sans-serif",fontWeight:800,
              }}>"</div>

              <p style={{
                fontSize:16,lineHeight:1.75,color:'var(--ivory)',
                fontStyle:'italic',flex:1,
              }}>{t.quote}</p>

              <div style={{display:'flex',alignItems:'center',gap:16,paddingTop:24,borderTop:'1px solid var(--border)'}}>
                <div style={{
                  width:44,height:44,borderRadius:'50%',
                  background:`${t.color}22`,border:`1px solid ${t.color}`,
                  display:'flex',alignItems:'center',justifyContent:'center',
                  fontFamily:"'Plus Jakarta Sans',sans-serif",fontSize:14,fontWeight:700,color:t.color,
                  flexShrink:0,
                }}>{t.initials}</div>
                <div>
                  <div style={{
                    fontFamily:"'Plus Jakarta Sans',sans-serif",
                    fontSize:15,fontWeight:700,marginBottom:2,
                  }}>{t.name}</div>
                  <div style={{fontSize:12,color:'var(--text-muted)'}}>{t.role}</div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
