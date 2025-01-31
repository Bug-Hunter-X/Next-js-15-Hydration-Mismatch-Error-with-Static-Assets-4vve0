```javascript
// pages/index.js

export default function Home() {
  return (
    <div>Hello World</div>
  );
}
```
This code will result in a hydration mismatch error in Next.js 15 if you don't configure the correct paths for your static files.