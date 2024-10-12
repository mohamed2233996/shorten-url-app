"use client"
import React, { useState } from 'react';

export default function Home() {
    const [url, setUrl] = useState("");
    const [shortenedUrl, setShortenedUrl] = useState("");

    async function shortURL(e) {
        e.preventDefault();
        const response = await
            fetch(`https://tinyurl.com/api-create.php?url=${encodeURIComponent(url)}`);
        if (response.ok) {
            const data = await response.text();
            setShortenedUrl(data);
        }
        else {
            alert("Error shortening URL");
        }
    }

    return (
        <div>
            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1440 320"><path fill="#7c3aed" fill-opacity="1" d="M0,160L80,149.3C160,139,320,117,480,106.7C640,96,800,96,960,117.3C1120,139,1280,181,1360,202.7L1440,224L1440,0L1360,0C1280,0,1120,0,960,0C800,0,640,0,480,0C320,0,160,0,80,0L0,0Z"></path></svg>
            <div className='container m-auto'>
                <div className='flex flex-col items-center'>
                    <svg className='text-violet-600 mb-4' xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" width="80" height="80" fill="none">
                        <path d="M9.521 14.4356L14.434 9.52258" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" />
                        <path d="M12.569 15.1084C13.3087 16.2488 13.1113 17.4178 12.2568 18.2723L9.26158 21.2675C8.28318 22.2459 6.69687 22.2459 5.71847 21.2675L2.73234 18.2814C1.75393 17.303 1.75393 15.7167 2.73234 14.7383L5.72755 11.743C6.42949 11.0411 7.76361 10.6357 8.91007 11.4659M15.1088 12.5685C16.2492 13.3082 17.4182 13.1109 18.2727 12.2564L21.2679 9.26114C22.2463 8.28273 22.2463 6.69641 21.2679 5.718L18.2818 2.73185C17.3034 1.75344 15.7171 1.75344 14.7387 2.73185L11.7434 5.72709C11.0415 6.42903 10.6362 7.76315 11.4664 8.90962" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round" />
                    </svg>
                    <h2 className=" text-center mb-3 text-violet-600 font-bold text-5xl">Shorten your URLs</h2>
                    <p className=" text-center text-gray-500 text-sm">
                        Generate shorter, more memorable links for your content.
                    </p>
                    <p className="text-center text-gray-500 text-sm">
                        No tracking, privacy, or ads.
                    </p>
                    <form onSubmit={shortURL} className='flex items-center flex-col w-full'>
                        <input
                            className="my-4 w-full p-4 border rounded-md focus:outline-none text-sm"
                            type="text"
                            placeholder="Enter your URL"
                            value={url}
                            onChange={(e) => setUrl(e.target.value)}
                        />
                        <button
                            className='text-lg font-bold transition bg-violet-600 border-violet-600 border text-white py-2 px-6 hover:text-violet-600 hover:bg-transparent rounded-md'
                            type='submit'>Shorten</button>
                    </form>
                </div>
                {shortenedUrl && (
                <div className='flex flex-col items-center gap-4 mt-8'>
                    <p className='text-3xl font-bold'>Shortened URL:</p>
                    <a href={shortenedUrl} target="_blank"
                        rel="noopener noreferrer">
                        {shortenedUrl}
                    </a>
                    {/* copy text */}
                    <button
                    className='text-lg font-bold transition bg-violet-600 border-violet-600 border text-white py-2 px-6 hover:text-violet-600 hover:bg-transparent rounded-md'
                    onClick={() => {
                        navigator.clipboard.writeText(shortenedUrl)
                        alert("URL copied to clipboard");
                        }}>
                        Copy
                    </button>
                </div>
            )}
            </div>
        </div>
    );
}

