// main.js (v12+)
const fs = require('fs');
const zlib = require('zlib');

function decodeAndGunzip(base64Str) {
  try {
    const buf = Buffer.from(base64Str, 'base64');        // Base64 -> Buffer
    const out = zlib.gunzipSync(buf);                    // gunzip sync (or use gunzip for async)
    return out.toString('utf8');                         // result as UTF-8 string
  } catch (err) {
    throw new Error('Failed to decode/gunzip: ' + err.message);
  }
}

// Example usage:
const input = 'H4sIAAAAAAAA/+xW32/bNhB+919x8IamfaDysO1FQIEojpJ4M+zUctBlRSHQ1ElmI5Mqfzh1u/...'; // your full string
try {
  const result = decodeAndGunzip(input);
  console.log('Decoded text:\n', result);
  // Optionally save to file
  fs.writeFileSync('decoded_output.txt', result, 'utf8');
  console.log('Saved to decoded_output.txt');
} catch (e) {
  console.error(e.message);
}
