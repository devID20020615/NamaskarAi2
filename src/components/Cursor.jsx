import { useEffect, useRef } from 'react'

export default function Cursor() {
  const dotRef = useRef(null)
  const ringRef = useRef(null)

  useEffect(() => {
    const dot = dotRef.current
    const ring = ringRef.current
    let mx = 0, my = 0, rx = 0, ry = 0

    const move = (e) => {
      mx = e.clientX
      my = e.clientY
      dot.style.transform = `translate(${mx}px,${my}px)`
    }

    const lerp = () => {
      rx += (mx - rx) * 0.12
      ry += (my - ry) * 0.12
      ring.style.transform = `translate(${rx}px,${ry}px)`
      requestAnimationFrame(lerp)
    }

    const onEnter = () => ring.classList.add('hover')
    const onLeave = () => ring.classList.remove('hover')

    window.addEventListener('mousemove', move)
    document.querySelectorAll('a,button,[data-cursor]').forEach(el => {
      el.addEventListener('mouseenter', onEnter)
      el.addEventListener('mouseleave', onLeave)
    })
    lerp()

    return () => window.removeEventListener('mousemove', move)
  }, [])

  return (
    <>
      <div ref={dotRef} style={{
        position:'fixed',left:0,top:0,width:6,height:6,
        background:'var(--gold)',borderRadius:'50%',
        pointerEvents:'none',zIndex:99999,
        transform:'translate(-50%,-50%)',
        marginLeft:'-3px',marginTop:'-3px',
        transition:'opacity 0.2s'
      }}/>
      <div ref={ringRef} style={{
        position:'fixed',left:0,top:0,width:32,height:32,
        border:'1px solid rgba(201,150,42,0.5)',borderRadius:'50%',
        pointerEvents:'none',zIndex:99998,
        transform:'translate(-50%,-50%)',
        marginLeft:'-16px',marginTop:'-16px',
        transition:'width 0.3s,height 0.3s,border-color 0.3s'
      }} className="cursor-ring"/>
      <style>{`.cursor-ring.hover{width:48px!important;height:48px!important;margin-left:-24px!important;margin-top:-24px!important;border-color:var(--gold)!important;}`}</style>
    </>
  )
}
