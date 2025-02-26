const urlInput = document.getElementById('urlInput');
const shortenBtn = document.getElementById('shortenBtn');
const modalBody = document.getElementById('modalBody');
const copyBtn = document.getElementById('copyBtn');
const resultInput = document.getElementById('shortenedUrl');

shortenBtn.addEventListener('click', async () => {
    const longUrl = urlInput.value.trim();
    if (longUrl === '') {
        alert('Please enter a URL');
        return;
    }

    try {
        const response = await fetch(`https://tinyurl.com/api-create.php?url=${encodeURIComponent(longUrl)}`);
        const shortUrl = await response.text();
        
        resultInput.value = shortUrl;
        
        const modal = new bootstrap.Modal(document.getElementById('shortenModal'));
        modal.show();
    } catch (error) {
        alert('Error shortening URL. Please try again later.');
        console.error(error);
    }
});

copyBtn.addEventListener('click', () => {
    resultInput.select();
    document.execCommand('copy');
    copyBtn.textContent = 'Copied!';
    setTimeout(() => copyBtn.textContent = 'Copy', 2000);
});
