const calculateBtn = document.getElementById("calculate-btn");
const resultDiv = document.getElementById("result");

// Retrieve the names from localStorage if available
const storedName = localStorage.getItem('name');
const storedPartnerName = localStorage.getItem('partnerName');
if (storedName) {
    document.getElementById('name').value = storedName;
}
if (storedPartnerName) {
    document.getElementById('partner-name').value = storedPartnerName;
}

calculateBtn.addEventListener("click", () => {
    const name = document.getElementById("name").value;
    const partnerName = document.getElementById("partner-name").value;

    if (name.length === 0 || partnerName.length === 0) {
        resultDiv.innerHTML = "Please enter both names.";
        return;
    }

    // Store the names in localStorage
    localStorage.setItem('name', name);
    localStorage.setItem('partnerName', partnerName);

    const loveScore = Math.floor(Math.random() * 100) + 1;
    let message;

    if (loveScore > 50) {
        message = `Great love! ❤️ score is ${loveScore}. entha score vachindi anta pelli pakka😊`;
    } else {
        message = `score is ${loveScore}Fake love 😢 dont worry better luck next tym .`;
    }

    resultDiv.innerHTML = `
        <div class="card">
            <h2>${message}</h2>
            <p>${name} ❤️ ${partnerName}</p>
        </div>
    `;
});