/* TEXT DATA*/

const data = {
    title: "Server Side rendering vs Client Side rendering",
    subtitle: "Rendering describes where and how a web application's content is generated before it is displayed in the browser. The two main approaches are server-side rendering (SSR) and client-side rendering (CSR). The key difference lies in whether the HTML is generated on the server before being sent to the browser, or built in the browser using JavaScript.",
    cards: [
        {
            icon: "M120-160v-148h720v148H120Zm60-38h72v-72h-72v72Zm-60-454v-148h720v148H120Zm60-38h72v-72h-72v72Zm-60 284v-148h720v148H120Zm60-38h72v-72h-72v72Z",
            title: "Server Side Rendering",
            description: "In server-side rendering, the server generates the full HTML for a page in response to each request. When a user visits a website, the browser sends a request to the server, which processes the data, builds the HTML, and sends a fully rendered page back to the client.",
            advantages: [
                "Faster initial page load (especially for slower devices)",
                "Better SEO, since search engines receive complete HTML",
                "Content is visible even before JavaScript fully loads"
            ],
            disadvantages: [
                "Higher server load",
                "Potentially slower navigation between pages",
                "Requires a new server request for most interactions"
            ]
        },
        {
            icon: "M0-160v-80h160v-40q-33 0-56.5-23.5T80-360v-400q0-33 23.5-56.5T160-840h640q33 0 56.5 23.5T880-760v400q0 33-23.5 56.5T800-280v40h160v80H0Zm160-200h640v-400H160v400Zm0 0v-400 400Z",
            title: "Client Side Rendering",
            description: "In client-side rendering, the server sends a minimal HTML file along with JavaScript. The browser then runs the JavaScript to generate and update the page content dynamically. Frameworks like React commonly use this approach.",
            advantages: [
                "Smooth and fast interactions after the initial load",
                "Reduced server workload",
                "Ideal for highly interactive applications"
            ],
            disadvantages: [
                "Slower initial load time",
                "SEO can be more challenging (though modern solutions mitigate this)",
                "Requires JavaScript to function properly"
            ]
        }
     ],
    footer: "There you go! Now you know the difference between CS and SS Rendering!"
    
};



function renderApp() {
    const app = document.getElementById('app');
    
    app.innerHTML = `
        <header>
            <h1>${data.title}</h1>
            <h2>${data.subtitle}</h2>
        </header>
        
        <section class="container">
            ${data.cards.map(card => `
                <section class="card">
                    <svg xmlns="http://www.w3.org/2000/svg" height="48px" viewBox="http://www.w3.org/2000/svg" width="48px" fill="#FFFFFF">
                        <path d="${card.icon}"/>
                    </svg>
                    <h3>${card.title}</h3>
                    <p>${card.description}</p>
                    
                    <h4>Advantages:</h4>
                    <ul>
                        ${card.advantages.map(adv => `<li>${adv}</li>`).join('')}
                    </ul>
                    
                    <h4>Disadvantages:</h4>
                    <ul>
                        ${card.disadvantages.map(dis => `<li>${dis}</li>`).join('')}
                    </ul>
                </section>
            `).join('')}
        </section>
        
        <footer>
        <h5>${data.footer}</h5>
        </footer>
    `;
}

renderApp();