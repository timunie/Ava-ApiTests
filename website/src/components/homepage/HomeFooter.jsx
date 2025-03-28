import React, { useEffect, useState } from 'react';

const Footer = () => {

  const [backgroundColor, setBackgroundColor] = useState('rgb(241, 244, 248)');

    const styles = {
        logoBrand: {
          color: 'var(--ifm-footer-brand-color)'
        },
        footer: {
            paddingTop: '3rem',
            paddingBottom: '.75rem',
            backgroundColor: 'var(--ifm-footer-background-color)',
            fontfamily: 'Outfit'
        }
    };

    return (
        <footer className="styles.footer">
            <div className="max-w-screen-xl px-4 py-16 mx-auto sm:px-6 lg:px-8">
			</div>
        </footer>
);
}

export default Footer;