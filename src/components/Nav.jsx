import { useEffect, useRef, useState } from 'react'

const links = ['About','Features','Capabilities','Language','Use Cases','FAQ']

export default function Nav() {
  const [scrolled, setScrolled] = useState(false)
  const [progress, setProgress] = useState(0)
  const [open, setOpen] = useState(false)
  const barRef = useRef(null)

  useEffect(() => {
    const onScroll = () => {
      const h = document.documentElement.scrollHeight - window.innerHeight
      const p = h > 0 ? (window.scrollY / h) * 100 : 0
      setProgress(p)
      setScrolled(window.scrollY > 60)
    }
    window.addEventListener('scroll', onScroll, { passive: true })
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  return (
    <>
      {/* Scroll progress */}
      <div style={{
        position:'fixed',top:0,left:0,height:'2px',
        width:`${progress}%`,background:'linear-gradient(90deg,var(--gold),var(--cyan))',
        zIndex:10001,transition:'width 0.1s',
      }}/>

      <nav style={{
        position:'fixed',top:'2px',left:0,right:0,zIndex:10000,
        padding:'0 40px',height:'64px',
        display:'flex',alignItems:'center',justifyContent:'space-between',
        background: scrolled ? 'rgba(13,13,13,0.85)' : 'transparent',
        backdropFilter: scrolled ? 'blur(20px)' : 'none',
        borderBottom: scrolled ? '1px solid var(--border)' : 'none',
        transition:'background 0.4s,backdrop-filter 0.4s,border-bottom 0.4s',
      }}>
        {/* Logo */}
        <a href="#" style={{
          fontFamily:"'Plus Jakarta Sans',sans-serif",
          fontWeight:800,fontSize:20,letterSpacing:'-0.03em',
          textDecoration:'none',color:'var(--ivory)',
          display:'flex',alignItems:'center',gap:10,
        }}>
          <XoraiIcon size={28}/>
          Namaskara AI
        </a>

        {/* Desktop links */}
        <div style={{display:'flex',gap:32,alignItems:'center'}} className="nav-desktop">
          {links.map(l => (
            <a key={l} href={`#${l.toLowerCase().replace(' ','-')}`} style={{
              fontFamily:"'Inter',sans-serif",fontSize:13,fontWeight:500,
              color:'var(--text-muted)',textDecoration:'none',letterSpacing:'0.01em',
              transition:'color 0.2s',
            }}
            onMouseEnter={e=>e.target.style.color='var(--ivory)'}
            onMouseLeave={e=>e.target.style.color='var(--text-muted)'}
            >{l}</a>
          ))}
          <a href="#cta" className="btn-primary" style={{padding:'8px 20px',fontSize:13}}>
            Get Early Access
          </a>
        </div>

        {/* Mobile menu btn */}
        <button onClick={()=>setOpen(!open)} style={{
          display:'none',background:'none',border:'1px solid var(--border)',
          color:'var(--ivory)',padding:'8px 12px',borderRadius:4,
          fontFamily:"'Inter',sans-serif",fontSize:12,cursor:'none',
        }} className="nav-mobile-btn">
          {open ? '✕' : '☰'}
        </button>
      </nav>

      {/* Mobile menu */}
      {open && (
        <div style={{
          position:'fixed',top:66,left:0,right:0,
          background:'rgba(13,13,13,0.97)',backdropFilter:'blur(20px)',
          zIndex:9999,padding:'20px 40px 40px',
          borderBottom:'1px solid var(--border)',
        }}>
          {links.map(l => (
            <a key={l} href={`#${l.toLowerCase().replace(' ','-')}`}
              onClick={()=>setOpen(false)}
              style={{
                display:'block',padding:'14px 0',
                fontFamily:"'Plus Jakarta Sans',sans-serif",fontSize:18,fontWeight:600,
                color:'var(--ivory)',textDecoration:'none',
                borderBottom:'1px solid var(--border)',
              }}>
              {l}
            </a>
          ))}
          <a href="#cta" className="btn-primary" style={{marginTop:24,display:'inline-flex'}}>
            Get Early Access
          </a>
        </div>
      )}

      <style>{`
        @media(max-width:768px){
          .nav-desktop{display:none!important;}
          .nav-mobile-btn{display:block!important;}
        }
      `}</style>
    </>
  )
}

function XoraiIcon({size=28}) {
  return (
    <svg width={size} height={size} viewBox="0 0 28 28" fill="none">
      <circle cx="14" cy="14" r="12" stroke="var(--gold)" strokeWidth="1"/>
      <circle cx="14" cy="14" r="8" stroke="var(--gold)" strokeWidth="0.5" opacity="0.6"/>
      <circle cx="14" cy="14" r="4" fill="var(--gold)" opacity="0.9"/>
      <line x1="14" y1="2" x2="14" y2="6" stroke="var(--gold)" strokeWidth="1.5"/>
      <line x1="14" y1="22" x2="14" y2="26" stroke="var(--gold)" strokeWidth="1.5"/>
      <line x1="2" y1="14" x2="6" y2="14" stroke="var(--gold)" strokeWidth="1.5"/>
      <line x1="22" y1="14" x2="26" y2="14" stroke="var(--gold)" strokeWidth="1.5"/>
    </svg>
  )
}
