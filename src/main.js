const input = document.getElementById('input');
const button = document.getElementById('check');
const result = document.getElementById('result');

function normalizeText(text) {
  return text
    .toLowerCase()
    .replace(/[^a-z0-9]+/g, '');
}

function isPalindrome(text) {
  const normalized = normalizeText(text);
  if (normalized === '') {
    return false;
  }

  let reversed = '';
  for (let i = 0; i < normalized.length; i++) {
    reversed = normalized[i] + reversed;
  }

  return reversed === normalized;
}

function showResult(message, status) {
  const colorClass =
    status === 'valid'
      ? 'text-emerald-700'
      : status === 'invalid'
      ? 'text-red-600'
      : 'text-amber-800';

  result.textContent = message;
  result.className = `mt-4 min-h-[1.5rem] text-base font-semibold ${colorClass}`;
}

function handleCheck() {
  const value = input.value.trim();
  if (!value) {
    showResult('Please enter a word or phrase.', 'error');
    return;
  }

  const palindrome = isPalindrome(value);
  const message = palindrome
    ? `"${value}" is a palindrome.`
    : `"${value}" is not a palindrome.`;

  showResult(message, palindrome ? 'valid' : 'invalid');
}

button.addEventListener('click', handleCheck);
input.addEventListener('keydown', (event) => {
  if (event.key === 'Enter') {
    handleCheck();
  }
});
