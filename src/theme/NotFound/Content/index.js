import React from 'react';
import clsx from 'clsx';
import Translate from '@docusaurus/Translate';
import Heading from '@theme/Heading';
export default function NotFoundContent({className}) {
  return (
    <main style={{
      width: '100%',
      height: '100vh',
      backgroundSize: 'cover',
      backgroundPosition: 'center',
      backgroundImage: `url('https://images.unsplash.com/photo-1667960525861-e7f8a3b9ebb7?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2867&q=80')`
    }}>
      <div style={{ textAlign: 'center', marginTop: '2rem' }}>
        <h1>404: Page Not Found</h1>
        <p>Sorry, we couldn't find the page you're looking for.</p>
        {/* You can add more custom content or styling here */}
      </div>
    </main>
  );
}
