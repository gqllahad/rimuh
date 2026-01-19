[1mdiff --git a/rimuh.css b/rimuh.css[m
[1mindex c9d817a..02f8b78 100644[m
[1m--- a/rimuh.css[m
[1m+++ b/rimuh.css[m
[36m@@ -261,6 +261,30 @@[m [mfont-style: italic;[m
   pointer-events: auto;[m
 }[m
 [m
[32m+[m[32m.download-btn {[m
[32m+[m[32m    text-align: center;[m
[32m+[m[32m  padding: 12px 24px;[m
[32m+[m[32m  background: crimson;[m
[32m+[m[32m  color: white;[m
[32m+[m[32m  align-items: center;[m
[32m+[m[32m  text-decoration: none;[m
[32m+[m[32m  border-radius: 999px;[m
[32m+[m[32m  font-weight: bold;[m
[32m+[m[32m    position: relative;[m
[32m+[m[32m  transition: transform 0.3s ease-in, background 0.3s ease, opacity 2s ease-in;[m
[32m+[m[32m}[m
[32m+[m
[32m+[m[32m.download-btn:hover {[m
[32m+[m[32m  transform: scale(1.1);[m
[32m+[m[32m  background: darkred;[m
[32m+[m[32m}[m
[32m+[m
[32m+[m[32m.download-container {[m
[32m+[m[32m  display: flex;[m
[32m+[m[32m  justify-content: center;[m[41m  [m
[32m+[m[32m  align-items: center;[m[41m  [m
[32m+[m[32m}[m
[32m+[m
 /* [m
 .album {[m
     display: grid;[m
[1mdiff --git a/rimuh.html b/rimuh.html[m
[1mindex e413875..75bddb6 100644[m
[1m--- a/rimuh.html[m
[1m+++ b/rimuh.html[m
[36m@@ -22,7 +22,7 @@[m
         <div class="petal"></div>[m
         <div class="petal"></div>[m
       </div>[m
[31m-      <div class="cover-title" id="albumTitle">Album</div>[m
[32m+[m[32m      <div class="cover-title" id="albumTitle">My Baby ❤</div>[m
       <div class="albumItems" id="albumItems">[m
         <video[m
           src="83049bd4-66d9-4a4e-ab75-941447963954.mp4"[m
[36m@@ -37,11 +37,21 @@[m
       </div>[m
 [m
       <div class="messageRimuh" id="rimuh">[m
[31m-        Lorem ipsum dolor sit amet consectetur, adipisicing elit. Esse earum[m
[31m-        odit cumque necessitatibus non architecto. Provident, optio. Facere[m
[31m-        distinctio labore ex facilis perspiciatis vitae maiores asperiores?[m
[31m-        Dolore molestias eveniet sed.[m
[32m+[m[32m        Hi bonjing, I want to say thankyou for the things you did for me. I[m
[32m+[m[32m        appreciate it a lot, your existence reminds me of people I enjoy being[m
[32m+[m[32m        accompanied to and people I loved having around. I don't have a lot to[m
[32m+[m[32m        say for now baby ehe I know this isn't much and.. I hope you have a[m
[32m+[m[32m        great semester and goodluck my ISKOLAR NG BAYAN! HAHAHAHAH[m
       </div>[m
[32m+[m
[32m+[m[32m      <a[m
[32m+[m[32m        href="134a0bfb-4b78-4f85-b55d-ae539f1f7699.jpg"[m
[32m+[m[32m        download[m
[32m+[m[32m        class="download-btn"[m
[32m+[m[32m        id="download-btn"[m
[32m+[m[32m      >[m
[32m+[m[32m        DOWNLOAD[m
[32m+[m[32m      </a>[m
     </div>[m
 [m
     <div id="flower-blooms"></div>[m
[1mdiff --git a/rimuh.js b/rimuh.js[m
[1mindex 339bf72..8b4e877 100644[m
[1m--- a/rimuh.js[m
[1m+++ b/rimuh.js[m
[36m@@ -51,6 +51,7 @@[m [mconst flowerBlooms = document.getElementById("flower-blooms");[m
 const title = document.getElementById("albumTitle");[m
 const items = document.getElementById("albumItems");[m
 const rimuh = document.getElementById("rimuh");[m
[32m+[m[32mconst dwn = document.getElementById("download-btn");[m
 [m
 const heart = document.getElementById("viewAll");[m
 let scale = 1;             [m
[36m@@ -137,6 +138,8 @@[m [mheart.addEventListener("click", () => {[m
         setTimeout(() => {[m
             heart.style.transform = `rotate(-45deg) scale(${scale})`;[m
             rimuh.classList.add("show");[m
[32m+[m[32m             dwn.style.display = "block";[m
[32m+[m[32m            dwn.classList.add("show");[m
     [m
     }, 500);[m
         [m
[36m@@ -145,6 +148,14 @@[m [mheart.addEventListener("click", () => {[m
   }[m
 });[m
 [m
[32m+[m[32mdocument.getElementById("downloadVideo").addEventListener("click", () => {[m
[32m+[m[32m  const link = document.createElement("a");[m
[32m+[m[32m  link.href = "134a0bfb-4b78-4f85-b55d-ae539f1f7699.jpg";[m[41m [m
[32m+[m[32m  link.download = "134a0bfb-4b78-4f85-b55d-ae539f1f7699.jpg";[m
[32m+[m[32m  document.body.appendChild(link);[m
[32m+[m[32m  link.click();[m
[32m+[m[32m  document.body.removeChild(link);[m
[32m+[m[32m});[m
 [m
 new QRCode(document.getElementById("qrcode"), {[m
     text: "https://gqllahad.github.io/rimuh/rimuh.html",[m
