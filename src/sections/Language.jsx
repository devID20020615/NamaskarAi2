import { useState } from 'react'

const demos = [
  {
    label: 'Text Generation',
    prompt: 'আমাক অসমৰ চাহ বাগিচাৰ বিষয়ে লিখক।',
    promptEn: 'Write about tea gardens of Assam.',
    output: 'অসমৰ চাহ বাগিচা বিশ্বৰ সৰ্ববৃহৎ চাহ উৎপাদনকাৰী অঞ্চলসমূহৰ ভিতৰত অন্যতম। ব্ৰহ্মপুত্ৰ উপত্যকাৰ সেউজীয়া পাহাৰৰ বুকুত বিস্তৃত এই বাগিচাসমূহে প্ৰতি বছৰে লক্ষ লক্ষ কিলোগ্ৰাম চাহ উৎপাদন কৰে।',
    outputEn: 'Assam\'s tea gardens are among the world\'s largest tea-producing regions. Spread across the green hills of the Brahmaputra valley, these gardens produce millions of kilograms of tea each year.',
  },
  {
    label: 'Translation',
    prompt: 'Translate: "The Brahmaputra is the soul of Assam"',
    promptEn: '',
    output: 'ব্ৰহ্মপুত্ৰ হৈছে অসমৰ আত্মা।',
    outputEn: 'Brahmaputra hoise Axomor atma.',
  },
  {
    label: 'Voice to Text',
    prompt: '🎤 [Speaking in Kamrupi dialect...]',
    promptEn: '',
    output: 'আমি কামৰূপত থাকো। আমাৰ গাঁৱত বিহু উৎসৱ হয়।',
    outputEn: 'I live in Kamrup. Bihu festival happens in our village.',
  },
  {
    label: 'Summarize',
    prompt: 'Summarize this Assamese news article in 2 sentences...',
    promptEn: '',
    output: 'গুৱাহাটীত আজি এক গুৰুত্বপূৰ্ণ প্ৰযুক্তি সন্মিলন অনুষ্ঠিত হ\'ল। অসমৰ কৃত্ৰিম বুদ্ধিমত্তা স্তাৰ্টআপসমূহে নিজৰ উদ্ভাৱনী সমাধান উপস্থাপন কৰিলে।',
    outputEn: 'An important tech summit was held in Guwahati today. Assam\'s AI startups presented their innovative solutions.',
  },
]

export default function Language() {
  const [active, setActive] = useState(0)
  const [typing, setTyping] = useState(false)
  const [displayed, setDisplayed] = useState(demos[0].output)

  const select = (i) => {
    if (i === active) return
    setActive(i)
    setTyping(true)
    const text = demos[i].output
    let j = 0
    setDisplayed('')
    const iv = setInterval(() => {
      j++
      setDisplayed(text.slice(0, j))
      if (j >= text.length) { clearInterval(iv); setTyping(false) }
    }, 18)
  }

  return (
    <section id="language" className="section"
      style={{background:'var(--charcoal-mid)'}}>
      <div className="container">
        <div style={{textAlign:'center',marginBottom:64}}>
          <div className="eyebrow" style={{justifyContent:'center'}}>Language AI Showcase</div>
          <h2 className="section-title">
            See It In<br/><span className="gradient-text">Assamese.</span>
          </h2>
        </div>

        <div style={{
          background:'var(--charcoal-light)',
          border:'1px solid var(--border)',
          borderRadius:2,overflow:'hidden',
          maxWidth:800,margin:'0 auto',
        }}>
          {/* Tab bar */}
          <div style={{
            display:'flex',borderBottom:'1px solid var(--border)',
            overflowX:'auto',
          }}>
            {demos.map((d,i) => (
              <button key={d.label} onClick={()=>select(i)} style={{
                flex:'0 0 auto',
                padding:'14px 24px',
                background: active===i ? 'var(--charcoal-mid)' : 'transparent',
                border:'none',borderBottom: active===i ? '2px solid var(--gold)' : '2px solid transparent',
                color: active===i ? 'var(--ivory)' : 'var(--text-muted)',
                fontFamily:"'Inter',sans-serif",fontSize:13,fontWeight:500,
                cursor:'none',transition:'all 0.2s',whiteSpace:'nowrap',
              }}>{d.label}</button>
            ))}
          </div>

          <div style={{padding:40}}>
            {/* Prompt */}
            <div style={{
              background:'rgba(201,150,42,0.06)',
              border:'1px solid rgba(201,150,42,0.15)',
              borderRadius:4,padding:20,marginBottom:24,
            }}>
              <div style={{fontSize:11,color:'var(--gold)',letterSpacing:'0.08em',marginBottom:10,fontWeight:600}}>USER PROMPT</div>
              <div style={{fontSize:15,color:'var(--ivory)',lineHeight:1.6}}>{demos[active].prompt}</div>
              {demos[active].promptEn && (
                <div style={{fontSize:12,color:'var(--text-muted)',marginTop:6,fontStyle:'italic'}}>{demos[active].promptEn}</div>
              )}
            </div>

            {/* Output */}
            <div style={{
              background:'rgba(0,212,255,0.04)',
              border:'1px solid rgba(0,212,255,0.12)',
              borderRadius:4,padding:20,
            }}>
              <div style={{display:'flex',alignItems:'center',gap:8,marginBottom:14}}>
                <div style={{
                  width:8,height:8,borderRadius:'50%',
                  background: typing ? 'var(--cyan)' : 'var(--green-light)',
                  boxShadow: typing ? '0 0 8px var(--cyan)' : 'none',
                  transition:'all 0.3s',
                }}/>
                <span style={{fontSize:11,color:'var(--cyan)',letterSpacing:'0.08em',fontWeight:600}}>
                  {typing ? 'GENERATING...' : 'NAMASKARA AI'}
                </span>
              </div>
              <div style={{
                fontSize:17,lineHeight:1.8,color:'var(--ivory)',
                fontFamily:"'Plus Jakarta Sans',sans-serif",
                letterSpacing:'0.01em',minHeight:60,
              }}>
                {displayed}
                {typing && <span style={{animation:'blink 0.7s infinite',color:'var(--gold)'}}>|</span>}
              </div>
              {!typing && demos[active].outputEn && (
                <div style={{
                  marginTop:16,paddingTop:16,
                  borderTop:'1px solid var(--border)',
                  fontSize:13,color:'var(--text-muted)',fontStyle:'italic',
                }}>
                  {demos[active].outputEn}
                </div>
              )}
            </div>
          </div>
        </div>
      </div>
      <style>{`@keyframes blink{0%,100%{opacity:1}50%{opacity:0}}`}</style>
    </section>
  )
}
