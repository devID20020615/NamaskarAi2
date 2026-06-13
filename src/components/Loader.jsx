import { useEffect, useState } from 'react'

export default function Loader({ onDone }) {
  const [pct, setPct] = useState(0)
  const [phase, setPhase] = useState(0)

  const phases = ['Initializing...', 'Loading Assamese AI...', 'Preparing Experience...', 'Welcome']

  useEffect(() => {
    let v = 0
    const iv = setInterval(() => {
      v += Math.random() * 4 + 1
      if (v >= 100) {
        v = 100
        clearInterval(iv)
        setTimeout(() => onDone(), 600)
      }
      setPct(Math.min(Math.floor(v), 100))
      setPhase(Math.floor((v / 100) * (phases.length - 1)))
    }, 40)
    return () => clearInterval(iv)
  }, [])

  return (
    <div style={{
      position:'fixed',inset:0,background:'var(--charcoal)',
      zIndex:100000,display:'flex',flexDirection:'column',
      alignItems:'center',justifyContent:'center',gap:32,
    }}>
      {/* Xorai rings animation */}
      <div style={{position:'relative',width:120,height:120}}>
        {[0,1,2].map(i => (
          <div key={i} style={{
            position:'absolute',inset:0,
            border:`1px solid rgba(201,150,42,${0.3+i*0.2})`,
            borderRadius:'50%',
            animation:`spin ${2+i*0.5}s linear infinite`,
            animationDirection: i%2===0 ? 'normal' : 'reverse',
          }}/>
        ))}
        <div style={{
          position:'absolute',inset:'40%',
          background:'var(--gold)',borderRadius:'50%',
          boxShadow:'0 0 20px var(--gold)',
        }}/>
      </div>

      <div style={{textAlign:'center'}}>
        <div style={{
          fontFamily:"'Plus Jakarta Sans',sans-serif",
          fontSize:13,fontWeight:700,letterSpacing:'0.2em',
          textTransform:'uppercase',color:'var(--gold)',marginBottom:8,
        }}>
          NAMASKARA AI
        </div>
        <div style={{
          fontSize:12,color:'var(--text-muted)',letterSpacing:'0.08em',
          minHeight:18,transition:'opacity 0.3s',
        }}>
          {phases[phase]}
        </div>
      </div>

      {/* Progress bar */}
      <div style={{width:200,height:1,background:'rgba(245,237,214,0.1)',borderRadius:1}}>
        <div style={{
          height:'100%',background:'linear-gradient(90deg,var(--gold),var(--cyan))',
          borderRadius:1,width:`${pct}%`,transition:'width 0.1s',
        }}/>
      </div>

      <div style={{
        fontFamily:"'Plus Jakarta Sans',sans-serif",
        fontSize:11,color:'var(--text-muted)',letterSpacing:'0.05em',
      }}>
        {pct}%
      </div>

      <style>{`@keyframes spin{to{transform:rotate(360deg)}}`}</style>
    </div>
  )
}
