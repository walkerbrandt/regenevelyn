import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { Outlet, createRootRouteWithContext, HeadContent, Scripts } from "@tanstack/react-router";
import { useEffect, type ReactNode } from "react";
import appCss from "../styles.css?url";
import { reportHiggsfieldError } from "../lib/higgsfield-error-reporting";
import meta from "../app-meta.json";
import { scrollScrubTheme } from "../scroll-scrub-scenes";
declare const __HF_DESIGN_INSPECTOR__: boolean;
export const Route=createRootRouteWithContext<{queryClient:QueryClient}>()({
 head:()=>({meta:[{charSet:"utf-8"},{name:"viewport",content:"width=device-width, initial-scale=1"},{title:meta.og_title??"Recharged Classics"},{name:"description",content:meta.og_description??""},{name:"theme-color",content:scrollScrubTheme.background},{property:"og:title",content:meta.og_title??""},{property:"og:description",content:meta.og_description??""},{property:"og:type",content:"website"},{property:"og:image",content:meta.og_image_url??""},{name:"twitter:card",content:"summary_large_image"},{name:"twitter:image",content:meta.og_image_url??""}],links:[{rel:"stylesheet",href:appCss},{rel:"icon",href:"/favicon.ico"},{rel:"apple-touch-icon",href:"/apple-touch-icon.png"},{rel:"manifest",href:"/site.webmanifest"}]}),
 shellComponent:RootShell,component:RootComponent,
 notFoundComponent:()=> <main className="error-page"><h1>That road ends here.</h1><p>This page could not be found.</p><a href="/">Return home</a></main>,
 errorComponent:()=> <main className="error-page"><h1>A brief interruption.</h1><p>Please reload the page to continue.</p><a href="/">Return home</a></main>
});
function RootShell({children}:{children:ReactNode}){return <html lang="en" style={{colorScheme:"light"}}><head><HeadContent/></head><body>{children}<Scripts/></body></html>}
function RootComponent(){const {queryClient}=Route.useRouteContext();useEffect(()=>{if(!__HF_DESIGN_INSPECTOR__)return;void import("../module/design-inspector/runtime").then(({installHiggsfieldDesignInspector})=>installHiggsfieldDesignInspector()).catch(error=>reportHiggsfieldError(error instanceof Error?error:new Error("Inspector failed"),{boundary:"design_inspector_import"}));},[]);return <QueryClientProvider client={queryClient}><Outlet/></QueryClientProvider>}
