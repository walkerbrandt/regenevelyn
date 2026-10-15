import { createElement } from "react";
import type { ScrollScrubScene, ScrollScrubTheme } from "@/components/scroll-scrub/scroll-scrub";
export const scrollScrubTheme: ScrollScrubTheme = { accent:"#244C3C", background:"#F6F7F8", ink:"#18211E", muted:"#66706B" };
export const scrollScrubScenes: ScrollScrubScene[] = [{
 id:"conversion", label:"The conversion", title:"Classic Land Rover.\nNow electric.",
 body:"The shape you love. Electric drive, Apple CarPlay, and everyday usability beneath the familiar bodywork.",
 clip:"/assets/world/scene-01.mp4", poster:"/assets/world/scene-01-poster.png",
 mobileClip:"/assets/world/scene-01-mobile.mp4", mobilePoster:"/assets/world/scene-01-mobile-poster.png",
 scroll:5, linger:0.12, objectPosition:"50% 55%", mobileObjectPosition:"50% 50%",
 actions:createElement("a",{href:"#mechanics",className:"hero-action"},createElement("span",{"aria-hidden":true},"↘"),"Explore conversion")
}];
