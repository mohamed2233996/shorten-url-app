import React from 'react';

const Header = () => {
    return (
        <header className='bg-violet-600 text-white py-4'>
            <div className="container m-auto flex items-center justify-between">
                <a href="#">
                    <h1 className="text-2xl font-bold">Shorten URL</h1>
                </a>
                <div className="flex items-center gap-4">
                    <a href="#">About</a>
                    <a href="#">Help</a>
                </div>
            </div>
        </header>
    );
}

export default Header;
