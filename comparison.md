# Analysis on CSR and SSR

Rendering determines where and how a web app’s content is generated before it appears in the browser. The two main approaches are server-side rendering (SSR) and client-side rendering (CSR). The key difference is whether HTML is created on the server or in the browser using JavaScript.

With CSR, the server sends a basic HTML file and JavaScript, and the browser builds the page dynamically (common in frameworks like React). With SSR, the server generates the complete HTML for each request and sends a fully rendered page to the browser.


## Performance

**Time to First Visible Content:** SSR delivers fully rendered HTML, so content appears immediately. CSR waits for JavaScript to load and execute before displaying anything.

**Perceived Loading Speed:** SSR feels faster since users see content right away. CSR can feel sluggish due to an initial blank or loading screen.

**JavaScript Execution Impact:** SSR uses less client-side JavaScript, reducing CPU load and improving performance on mobile or slower devices. CSR relies heavily on JavaScript, which increases processing time and device strain.


## SEO

**Initial HTML Content:** SSR provides the full page in the initial HTML. CSR delivers a minimal shell, with content generated via JavaScript.

**Search Engine Interpretation:** SSR is straightforward for crawlers, ensuring reliable and fast indexing. CSR requires JavaScript execution, which can delay or limit indexing for some search engines.

**Metadata Visibility:** SSR includes fully accessible meta tags and content from the start. In CSR, metadata may not reflect the rendered content until JavaScript runs, affecting SEO and social previews.


## User Experience

**Blank Screen vs Immediate Content:** SSR displays content instantly, giving users immediate feedback. CSR often shows a blank screen while scripts load, which can feel slow or uncertain.

**JavaScript Dependency:** SSR content remains visible even if JavaScript fails, though interactive features may be limited. CSR relies entirely on JavaScript, so slow or broken scripts can delay or prevent content from appearing.


## Conclusion

Server-side rendering and client-side rendering each have strengths and trade-offs. Choosing between them depends on the goals of the application, the importance of SEO, and the desired user experience but in this case, the differences are minimal due to the project’s simple design and small size.