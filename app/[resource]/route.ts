import { companyInterior } from "../company-interior-data";
import { finalImages1 } from "../final-images-1";
import { finalImages2 } from "../final-images-2";
import { finalImages3 } from "../final-images-3";
import { finalImages4 } from "../final-images-4";
const imageAssets: Record<string,string> = {...companyInterior,...finalImages1,...finalImages2,...finalImages3,...finalImages4};
import { videoBase64 } from "../video-data";
import { profilePart1 } from "../final-profile-1";
import { profilePart2 } from "../final-profile-2";
import { profilePart3 } from "../final-profile-3";
import { profilePart4 } from "../final-profile-4";
import { profilePart5 } from "../final-profile-5";
const pdfBase64 = profilePart1 + profilePart2 + profilePart3 + profilePart4 + profilePart5;
export async function GET(_request: Request, context: { params: Promise<{ resource: string }> }) {
 const { resource } = await context.params;
 if (imageAssets[resource]) return new Response(Buffer.from(imageAssets[resource], "base64"), {headers:{"Content-Type":"image/jpeg", "Cache-Control":"public, max-age=86400"}});
 if (resource === 'company-film.mp4') {
   const bytes = Buffer.from(videoBase64, 'base64');
   const range = _request.headers.get('range');
   const headers: Record<string,string> = {'Content-Type':'video/mp4','Accept-Ranges':'bytes','Cache-Control':'public, max-age=3600'};
   if (range) {
     const match = /^bytes=(\d*)-(\d*)$/.exec(range);
     if (!match) return new Response(null,{status:416,headers:{'Content-Range':`bytes */${bytes.length}`}});
     let start = match[1] ? Number(match[1]) : 0;
     let end = match[2] ? Number(match[2]) : bytes.length - 1;
     if (!match[1] && match[2]) { start = Math.max(0, bytes.length - Number(match[2])); end = bytes.length - 1; }
     if (start > end || start >= bytes.length) return new Response(null,{status:416,headers:{'Content-Range':`bytes */${bytes.length}`}});
     end = Math.min(end,bytes.length-1);
     return new Response(bytes.subarray(start,end+1),{status:206,headers:{...headers,'Content-Range':`bytes ${start}-${end}/${bytes.length}`,'Content-Length':String(end-start+1)}});
   }
   return new Response(bytes,{headers:{...headers,'Content-Length':String(bytes.length)}});
 }
 if (resource === 'robots.txt') return new Response('User-agent: *\nAllow: /\nSitemap: https://jmtec-homepage.vercel.app/sitemap.xml\n', {headers:{'Content-Type':'text/plain; charset=utf-8','Cache-Control':'public, max-age=3600'}});
 if (resource === 'sitemap.xml') return new Response('<?xml version="1.0" encoding="UTF-8"?><urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9"><url><loc>https://jmtec-homepage.vercel.app/</loc></url></urlset>', {headers:{'Content-Type':'application/xml; charset=utf-8','Cache-Control':'public, max-age=3600'}});
 if (resource === 'company-profile.pdf') return new Response(Buffer.from(pdfBase64, 'base64'), {headers:{'Content-Type':'application/pdf','Content-Disposition':'attachment; filename="JMTEC_Final_Company_Profile.pdf"','Cache-Control':'public, max-age=3600'}});
 return new Response('Not found',{status:404});
}
