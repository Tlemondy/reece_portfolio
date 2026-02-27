'use client';

export default function TestPage() {
  return (
    <iframe
      src="/focus_one/index.html"
      width="100%"
      height="100vh"
      frameBorder="0"
      title="Flutter Web App"
      style={{ position: 'fixed', top: 0, left: 0, width: '100vw', height: '100vh', zIndex: 9999, border: 'none' }}
    />
  );
}