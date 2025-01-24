import React from 'react';

const BlogGrid = ({ posts }) => {
    return (
        <div className="bg-yellow-50 py-10 px-5 md:px-20 lg:px-40">
            <h2 className="text-4xl font-bold text-yellow-800 text-left mb-8 pl-4">Blogs</h2>
            <ul className="grid grid-cols-1 gap-y-10 items-center justify-center p-8">
                {posts.map((post, index) => (
                    <li
                        key={index}
                        className="relative flex flex-col items-center text-center bg-yellow-50 border border-yellow-200 shadow-md rounded-lg p-6 w-full md:w-3/4 lg:w-1/2 mx-auto"
                    >
                        <div className="w-full h-64 overflow-hidden mb-6">
                            <img
                                src={`http://localhost:3000/${post.image}`}
                                alt={post.mainHeading}
                                className="object-cover w-full h-full shadow-md rounded-lg bg-yellow-100"
                            />
                        </div>
                        <div>
                            <h3 className="mb-2 text-yellow-900 font-bold">
                                <span className="block mb-1 text-sm leading-6 text-yellow-700">
                                    {post.mainHeading}
                                </span>
                                {post.subHeading}
                            </h3>
                            <p className="text-yellow-800 text-sm mb-4">{post.description}</p>
                            <a
                                className="inline-flex items-center h-9 rounded-full text-sm font-semibold px-4 bg-yellow-200 text-yellow-900 hover:bg-yellow-300 focus:outline-none focus:ring-2 focus:ring-yellow-500"
                                href={post.link}
                            >
                                Learn more
                                <svg
                                    className="ml-3"
                                    width="3"
                                    height="6"
                                    viewBox="0 0 3 6"
                                    fill="none"
                                    stroke="currentColor"
                                    strokeWidth="2"
                                    strokeLinecap="round"
                                    strokeLinejoin="round"
                                >
                                    <path d="M0 0L3 3L0 6" />
                                </svg>
                            </a>
                        </div>
                    </li>
                ))}
            </ul>
        </div>
    );
};

export default BlogGrid;