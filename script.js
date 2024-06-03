const { jsPDF } = window.jspdf;

function generatePDF() {
    const siteName = document.getElementById('siteName').value;
    const siteURL = document.getElementById('siteURL').value;
    const performance = document.getElementById('performance').value;
    const accessibility = document.getElementById('accessibility').value;
    const seo = document.getElementById('seo').value;
    const comments = document.getElementById('comments').value;

    const doc = new jsPDF();

    doc.text(20, 20, `Website Audit Report`);
    doc.text(20, 30, `Website Name: ${siteName}`);
    doc.text(20, 40, `Website URL: ${siteURL}`);
    doc.text(20, 50, `Performance Rating: ${performance}`);
    doc.text(20, 60, `Accessibility Rating: ${accessibility}`);
    doc.text(20, 70, `SEO Rating: ${seo}`);
    doc.text(20, 80, `Additional Comments:`);
    doc.text(20, 90, comments);

    doc.save('audit-report.pdf');
}
