'use client';

export default function BottledPage() {
  return (
    <iframe
      src="/bottled/index.html"
      width="100%"
      height="100vh"
      frameBorder="0"
      title="Bottled App"
      style={{ position: 'fixed', top: 0, left: 0, width: '100vw', height: '100vh', zIndex: 9999, border: 'none' }}
    />
  );
}