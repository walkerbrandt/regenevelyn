import { createFileRoute } from "@tanstack/react-router";
import { useState } from "react";
import { ScrollScrub } from "@/components/scroll-scrub/scroll-scrub";
import { scrollScrubScenes, scrollScrubTheme } from "@/scroll-scrub-scenes";
export const Route = createFileRoute("/")({component:Index});
const steps = [
 ["Preserve the original","We begin with the vehicle's condition, character, and the way you want to use it. The familiar silhouette stays central to the project."],
 ["Rebuild beneath the body","The combustion engine and fuel system make way for an electric motor, batteries, charging hardware, and supporting control systems."],
 ["Bring the cabin forward","Apple CarPlay and considered modern features sit alongside the classic dashboard, materials, and tactile controls."],
 ["Integrate and validate","The complete vehicle needs inspection, calibration, and road testing. Final equipment and specifications depend on the donor and agreed build."]
];
function Planner(){
 const [model,setModel]=useState("Defender 90");
 const [use,setUse]=useState("Everyday driving");
 const [carplay,setCarplay]=useState(true);
 const [notes,setNotes]=useState("");
 const [saved,setSaved]=useState(false);
 function download(){
  const text=["RECHARGED CLASSICS | CONVERSION BRIEF","Vehicle: "+model,"Intended use: "+use,"Apple CarPlay: "+(carplay?"Requested":"To discuss"),"Project notes: "+(notes||"To discuss"),"Next: donor assessment, proposed specification, charging requirements, cost and timing.","This is a planning brief, not a quote or confirmed specification."].join("\n\n");
  const url=URL.createObjectURL(new Blob([text],{type:"text/plain;charset=utf-8"}));
  const a=document.createElement("a");a.href=url;a.download="recharged-classics-conversion-brief.txt";a.click();setTimeout(()=>URL.revokeObjectURL(url),1000);setSaved(true);
 }
 return <section id="plan" className="planner section-wrap">
  <p className="eyebrow">Your next chapter</p><h2>A classic worth keeping.</h2>
  <p className="section-intro">Outline the vehicle and the way you want to drive it. Save a brief to start planning your conversion.</p>
  <details className="planner-panel"><summary>Plan your conversion <span aria-hidden="true">+</span></summary>
   <div className="planner-fields">
    <div><label htmlFor="model">Your vehicle</label><select id="model" value={model} onChange={e=>{setModel(e.target.value);setSaved(false)}}><option>Defender 90</option><option>Defender 110</option><option>Series Land Rover</option><option>Range Rover Classic</option><option>Other classic vehicle</option></select></div>
    <div><label htmlFor="use">How you will use it</label><select id="use" value={use} onChange={e=>{setUse(e.target.value);setSaved(false)}}><option>Everyday driving</option><option>Weekend exploring</option><option>City and country</option><option>Still deciding</option></select></div>
    <label className="checkline"><input type="checkbox" checked={carplay} onChange={e=>{setCarplay(e.target.checked);setSaved(false)}}/>Include Apple CarPlay in my brief</label>
    <div className="notes-field"><label htmlFor="notes">What matters to you?</label><textarea id="notes" maxLength={2000} rows={3} value={notes} onChange={e=>{setNotes(e.target.value);setSaved(false)}} placeholder="Your vehicle's condition, typical journeys, or features you want."/></div>
    <div className="planner-end"><button type="button" className="download-action" onClick={download}>Save your brief <span aria-hidden="true">↓</span></button><p aria-live="polite">{saved?"Your brief is ready to download.":"Saved to your device. No details are submitted."}</p></div>
   </div>
  </details>
 </section>
}
function Index(){return <>
 <a className="skip-link" href="#mechanics">Skip animation</a>
 <header className="site-header"><a className="brand" href="/" aria-label="Recharged Classics home"><img src="/assets/logo.webp" alt="" role="presentation"/><span>RECHARGED<br/>CLASSICS</span></a><nav aria-label="Main navigation"><a href="#mechanics">The conversion</a><a href="#cabin">The cabin</a><a className="nav-plan" href="#plan">Plan your conversion <span aria-hidden="true">↗</span></a></nav></header>
 <main>
 <div className="journey">
  <ScrollScrub scenes={scrollScrubScenes} theme={scrollScrubTheme}/>
  <div className="journey-notes">
   <article className="journey-note"><h2>Character, preserved.</h2><p>The original silhouette is the starting point.</p></article>
   <article className="journey-note"><h2>Everything underneath, reconsidered.</h2><p>Body, chassis, powertrain. A closer look at what changes.</p></article>
   <article className="journey-note"><h2>A new electric heart.</h2><p>Battery, motor, and control systems replace combustion.</p></article>
   <article className="journey-note"><h2>Ready for its next chapter.</h2><p>Classic proportions. A different way to drive.</p></article>
  </div>
 </div>
 <section id="mechanics" className="mechanics section-wrap">
  <p className="eyebrow">Keep what matters</p><h2>Old soul. New systems.</h2>
  <p className="section-intro">We convert classic Land Rovers into electric vehicles, replacing aging combustion systems while respecting the design that made them worth keeping.</p>
  <div className="mechanics-grid"><div className="preserve"><h3>What stays</h3><p className="big-statement">The lines.<br/>The presence.<br/>The character.</p><p>The body and cabin retain their classic identity. Restoration needs are assessed for each donor vehicle.</p></div>
  <div className="replace"><h3>What changes</h3>
   <div><span>Combustion engine</span><strong>Electric drive</strong><p>A compact motor and its controls become the heart of the vehicle.</p></div>
   <div><span>Fuel storage</span><strong>Battery system</strong><p>Battery packaging, protection, and charging are designed around the conversion.</p></div>
   <div><span>Period electronics</span><strong>Connected cabin</strong><p>Apple CarPlay and modern conveniences complement the original interior.</p></div>
  </div></div>
 </section>
 <section id="cabin" className="cabin section-wrap">
  <figure><img src="/assets/cabin.webp" alt="Concept interior of a classic Land Rover with green metal dashboard and integrated modern navigation screen" loading="lazy"/><figcaption>Cabin concept. Final equipment is tailored to the build.</figcaption></figure>
  <div className="cabin-copy"><h2>Familiar feel.<br/>Modern connection.</h2><p>Your maps, music, and calls through Apple CarPlay, brought into an interior that still feels unmistakably classic.</p>
  <dl><div><dt>Apple CarPlay</dt><dd>A familiar interface for the road ahead.</dd></div><div><dt>Considered integration</dt><dd>A display that belongs in the dashboard.</dd></div><div><dt>Your priorities</dt><dd>Discuss cameras, audio, charging, and comfort features as part of the specification.</dd></div></dl></div>
 </section>
 <section className="process section-wrap"><h2>From original to electric.</h2><div className="process-list">{steps.map(([title,body],i)=><details key={title} open={i===0}><summary><span className="process-number">{String(i+1).padStart(2,"0")}</span><h3>{title}</h3><span className="expand" aria-hidden="true">+</span></summary><p>{body}</p></details>)}</div>
 <p className="concept-note">Conversion imagery illustrates the concept. Component placement, range, performance, charging, cost, and timing are defined for each individual build.</p></section>
 <Planner/>
 </main>
 <footer className="site-footer"><a className="footer-brand" href="/">Recharged Classics</a><p>Classic character. Electric drive.</p><small>Independent conversion concept. Not affiliated with Land Rover or Apple.</small><a href="#conversion">Back to top ↑</a></footer>
 </>}
