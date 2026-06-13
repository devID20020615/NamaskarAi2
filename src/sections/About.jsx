import { useEffect, useRef } from 'react'
import gsap from 'gsap'
import { ScrollTrigger } from 'gsap/ScrollTrigger'
gsap.registerPlugin(ScrollTrigger)

export default function About() {
  const sectionRef = useRef()
  const leftRef = useRef()
  const rightRef = useRef()

  useEffect(() => {
    gsap.fromTo(leftRef.current,
      { opacity:0, x:-40 },
      { opacity:1, x:0, duration:1, ease:'power3.out',
        scrollTrigger:{ trigger:sectionRef.current, start:'top 75%' } })
    gsap.fromTo(rightRef.current,
      { opacity:0, x:40 },
      { opacity:1, x:0, duration:1, ease:'power3.out', delay:0.2,
        scrollTrigger:{ trigger:sectionRef.current, start:'top 75%' } })
  }, [])

  return (
    <section id="about" ref={sectionRef} className="section"
      style={{background:'linear-gradient(180deg,var(--charcoal) 0%,var(--charcoal-mid) 100%)'}}>
      <div className="container">
        <div style={{display:'grid',gridTemplateColumns:'1fr 1fr',gap:80,alignItems:'center'}}>
          <div ref={leftRef} style={{opacity:0}}>
            <div className="eyebrow">What is Namaskara AI</div>
            <h2 className="section-title">
              Assam's First<br/>
              <span className="gradient-text">Native AI Brain</span>
            </h2>
            <p style={{fontSize:17,lineHeight:1.8,color:'var(--text-muted)',marginBottom:32}}>
              Namaskara AI is built from the ground up to understand Assamese language, context, and culture — not just translated from English. Trained on literature, folktales, administrative language, and everyday conversation from across the Brahmaputra Valley.
            </p>
            <p style={{fontSize:17,lineHeight:1.8,color:'var(--text-muted)',marginBottom:40}}>
              Whether you speak Kamrupi, Goalpariya, or standard Axomiya — we hear you.
            </p>
            <a href="#features" className="btn-primary">Explore Features</a>
          </div>

          <div ref={rightRef} style={{opacity:0}}>
            {/* Visual: Brahmaputra-inspired abstract */}
            <div style={{
              position:'relative',
              background:'var(--charcoal-light)',
              borderRadius:2,
              border:'1px solid var(--border)',
              padding:40,
              overflow:'hidden',
            }}>
              {/* River curve decorative */}
              <svg viewBox="0 0 400 300" style={{width:'100%',opacity:0.8}}>
                {/* Brahmaputra wave */}
                <path d="M0 200 Q100 140 200 160 Q300 180 400 120" fill="none" stroke="var(--cyan)" strokeWidth="1" opacity="0.4"/>
                <path d="M0 210 Q100 150 200 170 Q300 190 400 130" fill="none" stroke="var(--cyan)" strokeWidth="0.5" opacity="0.2"/>

                {/* Data nodes along river */}
                {[[80,145],[200,162],[320,138]].map(([x,y],i) => (
                  <g key={i}>
                    <circle cx={x} cy={y} r="24" fill="none" stroke="var(--gold)" strokeWidth="0.8" opacity="0.5"/>
                    <circle cx={x} cy={y} r="6" fill="var(--gold)" opacity="0.9"/>
                    <circle cx={x} cy={y} r="12" fill="none" stroke="var(--gold)" strokeWidth="0.5" opacity="0.3"
                      style={{animation:`pulse ${1.5+i*0.3}s ease-in-out infinite`}}/>
                  </g>
                ))}

                {/* Labels */}
                {[['Language','NLP'],['Voice','ASR'],['Culture','Context']].map(([a,b],i) => {
                  const xs = [80,200,320], ys=[115,135,110]
                  return (
                    <g key={i}>
                      <text x={xs[i]} y={ys[i]} textAnchor="middle" fill="var(--ivory)" fontSize="10" fontFamily="Inter" opacity="0.8">{a}</text>
                      <text x={xs[i]} y={ys[i]+12} textAnchor="middle" fill="var(--gold)" fontSize="8" fontFamily="Inter" opacity="0.6">{b}</text>
                    </g>
                  )
                })}

                {/* Tea garden texture */}
                {Array.from({length:8},(_, i) => (
                  <rect key={i} x={i*50} y={220} width={40} height={50} rx={2}
                    fill={`rgba(45,90,39,${0.1+i*0.02})`} stroke="none"/>
                ))}
                <text x="200" y="260" textAnchor="middle" fill="var(--green-light)" fontSize="9" fontFamily="Inter" opacity="0.5" letterSpacing="2">BRAHMAPUTRA VALLEY</text>
              </svg>

              {/* Corner ornaments */}
              <div style={{position:'absolute',top:16,right:16,width:40,height:40,
                border:'1px solid var(--border-hover)',borderRadius:2,opacity:0.5}}/>
              <div style={{position:'absolute',bottom:16,left:16,width:40,height:40,
                border:'1px solid var(--border-hover)',borderRadius:2,opacity:0.5}}/>
            </div>
          </div>
        </div>
      </div>
      <style>{`@keyframes pulse{0%,100%{transform:scale(1);opacity:0.3}50%{transform:scale(1.3);opacity:0.6}}`}</style>
    </section>
  )
}
