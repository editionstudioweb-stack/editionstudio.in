const fs = require('fs');
const filePath = 'C:\\Users\\hp\\.gemini\\antigravity-ide\\brain\\c56cd400-6bef-48c2-a83c-8b629275981c\\.system_generated\\steps\\253\\content.md';
const content = fs.readFileSync(filePath, 'utf8');

// Find JSON start
const jsonStart = content.indexOf('{');
const jsonStr = content.slice(jsonStart);
const data = JSON.parse(jsonStr);

console.log('Keys in data:', Object.keys(data));
if (data['/our-work']) {
  console.log('/our-work details:', JSON.stringify(data['/our-work'], null, 2));
} else {
  console.log('/our-work key not found in data.');
}
