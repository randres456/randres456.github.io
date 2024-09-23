document.addEventListener("DOMContentLoaded", function () {
    const linkedInInfoDiv = document.getElementById("linkedin-info");

    const linkedInProfile = `
        <p><strong>LinkedIn Summary:</strong></p>
        <p>I’m a finance major at American University, currently working on projects related to investment banking, financial analysis, and more. I’ve interned with leading financial firms and have hands-on experience with market analysis.</p>
        <p><strong>Experience:</strong></p>
        <ul>
            <li>Summer Intern at XYZ Investment Bank</li>
            <li>Financial Analyst at ABC Consulting</li>
        </ul>
    `;
    linkedInInfoDiv.innerHTML = linkedInProfile;
});
