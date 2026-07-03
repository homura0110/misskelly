import * as fs from 'fs';
import * as path from 'path';

const appPath = path.join(process.cwd(), 'src', 'App.tsx');
const buffer = fs.readFileSync(appPath);

console.log("File size in bytes:", buffer.length);

// Check for null bytes
let nullCount = 0;
for (let i = 0; i < buffer.length; i++) {
  if (buffer[i] === 0) {
    nullCount++;
  }
}
console.log("Null bytes count:", nullCount);

// Check first 20 bytes
const hex = [];
for (let i = 0; i < Math.min(20, buffer.length); i++) {
  hex.push(buffer[i].toString(16).padStart(2, '0'));
}
console.log("First 20 bytes in hex:", hex.join(' '));
