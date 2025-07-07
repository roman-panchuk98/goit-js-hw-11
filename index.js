import{a as f,S as p,i as a}from"./assets/vendor-Dy2ZTtfi.js";(function(){const r=document.createElement("link").relList;if(r&&r.supports&&r.supports("modulepreload"))return;for(const e of document.querySelectorAll('link[rel="modulepreload"]'))n(e);new MutationObserver(e=>{for(const t of e)if(t.type==="childList")for(const s of t.addedNodes)s.tagName==="LINK"&&s.rel==="modulepreload"&&n(s)}).observe(document,{childList:!0,subtree:!0});function i(e){const t={};return e.integrity&&(t.integrity=e.integrity),e.referrerPolicy&&(t.referrerPolicy=e.referrerPolicy),e.crossOrigin==="use-credentials"?t.credentials="include":e.crossOrigin==="anonymous"?t.credentials="omit":t.credentials="same-origin",t}function n(e){if(e.ep)return;e.ep=!0;const t=i(e);fetch(e.href,t)}})();function g(o){return f.get("https://pixabay.com/api/",{params:{key:"51210764-f10f5a036eaba1aa23a71bd7f",q:o.trim(),image_type:"photo",orientation:"horizontal",safesearch:!0}}).then(r=>r.data.hits)}const c=document.querySelector(".box-loader"),y=new p(".gallery-item a",{captionsData:"alt",captionDelay:250}),d=document.querySelector(".gallery");function h(o){const r=o.map(({webformatURL:i,largeImageURL:n,tags:e,likes:t,views:s,comments:u,downloads:m})=>`<li class="gallery-item">
	<a class="gallery-link" href="${n}">
		<img 
		  class="gallery-image" 
		  src="${i}" 
		  alt="${e}" 
		/>
	</a>
  
  <ul class="list-description">
  <li class='item-description'><strong>Likes</strong> <p>${t}</p></li>
  <li class='item-description'><strong>Views</strong> <p>${s}</p></li>
  <li class='item-description'><strong>Comments</strong> <p>${u}</p></li>
  <li class='item-description'><strong>Downloads</strong> <p>${m}</p></li>
  </ul>
</li>
`).join("");d.insertAdjacentHTML("beforeend",r),y.refresh()}function L(){d.innerHTML=""}function b(){c.classList.remove("is-hidden")}function $(){c.classList.add("is-hidden")}const l=document.querySelector(".form");l.addEventListener("submit",o=>{o.preventDefault();const r=o.target.elements["search-text"].value.trim();if(r==="")return a.error({title:"Please write word!",position:"topRight"}),l.reset();L(),b(),setTimeout(()=>{g(r).then(i=>{i.length===0&&a.error({title:`Sorry, there are no images matching your search ${r}. Please try again!`,position:"topRight"}),h(i)}).catch(i=>a.error({title:i.message})).finally(()=>{$()})},1e3),l.reset()});
//# sourceMappingURL=index.js.map
