const analyzeSentence = () => {
    const sentence = document.getElementById("sentenceInput").value;
    let charCount = 0;
    let wordCount = 0;
    let vowelCount = 0;

    for (let i = 0; i < sentence.length; i++) {
        const char = sentence[i].toLowerCase();
        charCount++;
        if (char === ' ') {
            wordCount++;
        }
        if ('aeiou'.includes(char)) {
            vowelCount++;
        }
    }

    // Add 1 to word count to account for the last word
    wordCount++;

    const resultDiv = document.getElementById("result");
    resultDiv.innerHTML = `
        <p>Character count: ${charCount}</p>
        <p>Word count: ${wordCount}</p>
        <p>Vowel count: ${vowelCount}</p>
    `;
}