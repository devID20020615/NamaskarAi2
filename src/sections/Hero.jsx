import { useEffect, useRef } from 'react'
import { Canvas, useFrame } from '@react-three/fiber'
import { Points, PointMaterial } from '@react-three/drei'
import * as THREE from 'three'
import gsap from 'gsap'

function XoraiOrb() {
  const groupRef = useRef()
  const ring1 = useRef()
  const ring2 = useRef()
  const ring3 = useRef()
  const particles = useRef()

  // Generate sphere particle cloud
  const count = 1800
  const positions = new Float32Array(count * 3)
  for (let i = 0; i < count; i++) {
    const theta = Math.random() * Math.PI * 2
    const phi = Math.acos(2 * Math.random() - 1)
    const r = 1.8 + Math.random() * 0.4
    positions[i*3]   = r * Math.sin(phi) * Math.cos(theta)
    positions[i*3+1] = r * Math.sin(phi) * Math.sin(theta)
    positions[i*3+2] = r * Math.cos(phi)
  }

  useFrame((state) => {
    const t = state.clock.elapsedTime
    if (groupRef.current) groupRef.current.rotation.y = t * 0.08
    if (ring1.current) ring1.current.rotation.z = t * 0.4
    if (ring2.current) ring2.current.rotation.x = t * 0.25
    if (ring3.current) {
      ring3.current.rotation.y = t * 0.3
      ring3.current.rotation.z = t * 0.15
    }
    if (particles.current) {
      particles.current.rotation.y = -t * 0.04
      particles.current.rotation.x = Math.sin(t * 0.1) * 0.1
    }
  })

  return (
    <group ref={groupRef}>
      {/* Core glow sphere */}
      <mesh>
        <sphereGeometry args={[0.45, 32, 32]} />
        <meshStandardMaterial color="#C9962A" emissive="#C9962A" emissiveIntensity={1.2} roughness={0} metalness={0.8}/>
      </mesh>

      {/* Inner halo */}
      <mesh>
        <sphereGeometry args={[0.65, 32, 32]} />
        <meshStandardMaterial color="#E8B84B" emissive="#C9962A" emissiveIntensity={0.3} transparent opacity={0.15} roughness={1}/>
      </mesh>

      {/* Ring 1 — Gamosa-inspired horizontal */}
      <mesh ref={ring1}>
        <torusGeometry args={[1.1, 0.012, 8, 80]} />
        <meshStandardMaterial color="#C9962A" emissive="#C9962A" emissiveIntensity={0.8} metalness={1} roughness={0}/>
      </mesh>

      {/* Ring 2 — tilted 60deg */}
      <mesh ref={ring2} rotation={[Math.PI/3, 0, 0]}>
        <torusGeometry args={[1.3, 0.008, 8, 80]} />
        <meshStandardMaterial color="#8B1A1A" emissive="#A52020" emissiveIntensity={0.6} metalness={1} roughness={0}/>
      </mesh>

      {/* Ring 3 — outer Xorai ring */}
      <mesh ref={ring3} rotation={[0, 0, Math.PI/4]}>
        <torusGeometry args={[1.55, 0.005, 8, 120]} />
        <meshStandardMaterial color="#00D4FF" emissive="#00D4FF" emissiveIntensity={0.4} transparent opacity={0.7}/>
      </mesh>

      {/* Particle cloud */}
      <Points ref={particles} positions={positions} stride={3}>
        <PointMaterial size={0.012} color="#C9962A" transparent opacity={0.6} sizeAttenuation/>
      </Points>
    </group>
  )
}

function Scene() {
  return (
    <>
      <ambientLight intensity={0.3}/>
      <pointLight position={[3, 3, 3]} intensity={2} color="#C9962A"/>
      <pointLight position={[-3,-2, 2]} intensity={1} color="#8B1A1A"/>
      <pointLight position={[0, 0,-3]} intensity={0.8} color="#00D4FF"/>
      <XoraiOrb/>
    </>
  )
}

export default function Hero() {
  const titleRef = useRef()
  const subtitleRef = useRef()
  const ctaRef = useRef()
  const tagRef = useRef()

  useEffect(() => {
    const tl = gsap.timeline({ defaults: { ease: 'power3.out' } })
    tl.fromTo(tagRef.current,    { opacity:0, y:20 }, { opacity:1, y:0, duration:0.8 }, 0.5)
      .fromTo(titleRef.current,  { opacity:0, y:40 }, { opacity:1, y:0, duration:1   }, 0.7)
      .fromTo(subtitleRef.current,{ opacity:0, y:30 }, { opacity:1, y:0, duration:0.8 }, 1.0)
      .fromTo(ctaRef.current,    { opacity:0, y:20 }, { opacity:1, y:0, duration:0.7 }, 1.2)
  }, [])

  return (
    <section style={{
      position:'relative',height:'100vh',minHeight:700,
      display:'flex',alignItems:'center',overflow:'hidden',
    }}>
      {/* 3D Canvas */}
      <div style={{
        position:'absolute',inset:0,
        background:'radial-gradient(ellipse 80% 80% at 65% 50%, rgba(139,26,26,0.12) 0%, transparent 70%)',
      }}>
        <Canvas camera={{ position:[0,0,4.5], fov:45 }} dpr={[1,2]}>
          <Scene/>
        </Canvas>
      </div>

      {/* Assamese motif grid overlay */}
      <div style={{
        position:'absolute',inset:0,
        backgroundImage:`
          repeating-linear-gradient(0deg, transparent, transparent 60px, rgba(201,150,42,0.025) 60px, rgba(201,150,42,0.025) 61px),
          repeating-linear-gradient(90deg, transparent, transparent 60px, rgba(201,150,42,0.025) 60px, rgba(201,150,42,0.025) 61px)
        `,
        pointerEvents:'none',
      }}/>

      {/* Content */}
      <div className="container" style={{position:'relative',zIndex:2,paddingTop:64}}>
        <div style={{maxWidth:680}}>
          <div ref={tagRef} className="eyebrow" style={{opacity:0}}>
            The AI Platform of Assam
          </div>

          <h1 ref={titleRef} style={{
            fontSize:'clamp(48px,7vw,88px)',
            fontWeight:800,lineHeight:1.0,
            letterSpacing:'-0.04em',marginBottom:24,
            opacity:0,
          }}>
            Speak Assamese.<br/>
            <span className="gradient-text">Think Globally.</span>
          </h1>

          <p ref={subtitleRef} style={{
            fontSize:'clamp(16px,2vw,20px)',
            lineHeight:1.7,color:'var(--text-muted)',
            marginBottom:40,maxWidth:520,opacity:0,
          }}>
            Namaskara AI brings the power of artificial intelligence to Assamese language and culture — built for the people of the Brahmaputra Valley.
          </p>

          <div ref={ctaRef} style={{display:'flex',gap:16,flexWrap:'wrap',opacity:0}}>
            <a href="#cta" className="btn-primary">
              Start for Free
              <svg width="16" height="16" viewBox="0 0 16 16" fill="none">
                <path d="M3 8h10M9 4l4 4-4 4" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
              </svg>
            </a>
            <a href="#about" className="btn-outline">
              See How It Works
            </a>
          </div>

          {/* Social proof */}
          <div style={{
            marginTop:56,paddingTop:40,
            borderTop:'1px solid var(--border)',
            display:'flex',gap:40,flexWrap:'wrap',
          }}>
            {[['10K+','Early users'],['12','Assamese dialects'],['99.2%','Accuracy rate']].map(([n,l]) => (
              <div key={l}>
                <div style={{
                  fontFamily:"'Plus Jakarta Sans',sans-serif",
                  fontSize:'clamp(22px,3vw,32px)',fontWeight:800,
                  background:'linear-gradient(135deg,var(--gold-light),var(--gold))',
                  WebkitBackgroundClip:'text',WebkitTextFillColor:'transparent',
                }}>{n}</div>
                <div style={{fontSize:12,color:'var(--text-muted)',letterSpacing:'0.04em',marginTop:4}}>{l}</div>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Bottom fade */}
      <div style={{
        position:'absolute',bottom:0,left:0,right:0,height:180,
        background:'linear-gradient(transparent,var(--charcoal))',
        pointerEvents:'none',
      }}/>

      {/* Scroll hint */}
      <div style={{
        position:'absolute',bottom:32,left:'50%',transform:'translateX(-50%)',
        display:'flex',flexDirection:'column',alignItems:'center',gap:8,
        color:'var(--text-muted)',fontSize:11,letterSpacing:'0.1em',
        animation:'bounce 2s ease-in-out infinite',
      }}>
        <span>SCROLL</span>
        <svg width="16" height="16" viewBox="0 0 16 16" fill="none">
          <path d="M8 3v10M4 9l4 4 4-4" stroke="var(--gold)" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
        </svg>
      </div>
      <style>{`@keyframes bounce{0%,100%{transform:translateX(-50%) translateY(0)}50%{transform:translateX(-50%) translateY(6px)}}`}</style>
    </section>
  )
}
