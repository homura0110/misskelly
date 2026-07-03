import * as fs from 'fs';
import * as path from 'path';

const appPath = path.join(process.cwd(), 'src', 'App.tsx');
let content = fs.readFileSync(appPath, 'utf8');

const targetPattern = /story:\s*"這款萬用凝膠防護更升級！[\s\S]*?id:\s*"MK-S10"/;

const replacement = `story: "這款萬用凝膠防護更升級！除了濟州島冷壓的 96% 純天然蘆薈葉汁之外，更新款配方特別添加了綠茶與積雪草（CICA）精華，能提供無與倫比的鎮定與修護能量。輕盈系列比舊款更加清涼降溫，臨床測試一抹即降低 5 度，無香料、無酒精，清爽不黏膩，是全家人必備的曬後修護與日常保濕萬用凝膠。",
    specs: "規格：300ml / 罐 / 主成分：96% 蘆薈葉汁、綠茶萃取、積雪草萃取 / 產地：韓國",
    stars: 4.9,
    reviewsCount: 120
  },
  {
    id: "MK-S10"`;

if (targetPattern.test(content)) {
  content = content.replace(targetPattern, replacement);
  fs.writeFileSync(appPath, content, 'utf8');
  console.log("Successfully fixed the unterminated string literal in App.tsx!");
} else {
  console.log("Could not find the target pattern in App.tsx.");
}
