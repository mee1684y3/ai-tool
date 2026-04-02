const inputText = document.getElementById("inputText");
const summarizeBtn = document.getElementById("summarizeBtn");
const output = document.getElementById("output");

summarizeBtn.addEventListener("click", () => {
    const text = inputText.value.trim();
    if (text === "") {
        output.innerText = "Geen tekst gevonden.";
        return;
    }

    const summary = summarize(text);
    output.innerText = summary;
});

// Simpele AI-achtige samenvatting
function summarize(text) {
    const sentences = text.split(".");
    const firstSentence = sentences[0];
    const lastSentence = sentences[sentences.length - 2];

    return `Belangrijkste punten: ${firstSentence.trim()}. ... ${lastSentence.trim()}.`;
}
