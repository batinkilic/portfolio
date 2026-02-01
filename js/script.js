document.addEventListener('DOMContentLoaded', () => {
    // Intersection Observer for scroll animations
    const observerOptions = {
        root: null,
        rootMargin: '0px',
        threshold: 0.1
    };

    const observer = new IntersectionObserver((entries, observer) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.classList.add('visible');
                observer.unobserve(entry.target);
            }
        });
    }, observerOptions);

    const animatedElements = document.querySelectorAll('.fade-in-up');
    animatedElements.forEach(el => observer.observe(el));

    // Smooth scroll for anchor links
    document.querySelectorAll('a[href^="#"]').forEach(anchor => {
        anchor.addEventListener('click', function (e) {
            e.preventDefault();
            const target = document.querySelector(this.getAttribute('href'));
            if (target) {
                target.scrollIntoView({
                    behavior: 'smooth'
                });
            }
        });
    });
});

function downloadPortfolio() {
    const element = document.getElementById('portfolio-pdf-content');
    const content = element.innerHTML;

    // Open a new window to isolate the PDF generation from the main page's CSS/Scroll state
    // This fixes issues with 'file://' protocol and external stylesheets blocking the canvas
    const win = window.open('', '_blank');

    // Write the clean HTML structure with explicit encoding and fonts
    win.document.write(`
        <!DOCTYPE html>
        <html lang="tr">
        <head>
            <meta charset="UTF-8">
            <title>Portföy PDF</title>
            <script src="https://cdnjs.cloudflare.com/ajax/libs/html2pdf.js/0.10.1/html2pdf.bundle.min.js"></script>
            <link href="https://fonts.googleapis.com/css2?family=Roboto:wght@300;400;700&display=swap" rel="stylesheet">
            <style>
                body { 
                    margin: 0; 
                    padding: 0; 
                    background: #fff; 
                    font-family: 'Roboto', sans-serif; /* Better font for Turkish chars */
                    -webkit-font-smoothing: antialiased;
                }
                h1, h2, h3, h4 { margin-top: 0; margin-bottom: 0.5rem; }
                p, li { font-size: 14px; line-height: 1.6; color: #333; }
                h1 { font-size: 24px; text-align: center; border-bottom: 2px solid #000; padding-bottom: 10px; margin-bottom: 20px; text-transform: uppercase; color: #000; }
                h2 { font-size: 18px; text-align: center; margin-bottom: 5px; color: #000; }
                h3 { font-size: 16px; border-bottom: 1px solid #ccc; margin-top: 25px; padding-bottom: 5px; text-transform: uppercase; color: #000; }
                h4 { font-size: 14px; margin-bottom: 5px; color: #000; font-weight: bold; }
                ul { margin-top: 5px; padding-left: 20px; }
            </style>
        </head>
        <body>
            <div id="pdf-content" style="width: 750px; margin: 0 auto; padding: 40px;">
                ${content}
            </div>
            <script>
                window.onload = function() {
                    const element = document.getElementById('pdf-content');
                    const opt = {
                        margin:       10,
                        filename:     'Muslum_Batin_Kilic_Portfolio.pdf',
                        image:        { type: 'jpeg', quality: 0.98 },
                        html2canvas:  { scale: 2 },
                        jsPDF:        { unit: 'mm', format: 'a4', orientation: 'portrait' }
                    };
                    
                    setTimeout(() => {
                        html2pdf().set(opt).from(element).save().then(function() {
                            document.body.innerHTML = '<h2 style="font-family: sans-serif; text-align: center; margin-top: 50px; color: green;">İndirme Tamamlandı!</h2><p style="text-align: center; font-family: sans-serif;">Bu sekmeyi kapatabilirsiniz.</p>';
                        });
                    }, 1000); // 1s wait for fonts
                };
            </script>
        </body>
        </html>
    `);

    win.document.close(); // Ensure the document stream is closed to trigger render
}
