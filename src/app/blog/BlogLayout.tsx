'use client'
import React from 'react';
import { Search, Calendar, User, ChevronLeft, ChevronRight } from 'lucide-react';
import { FaPlay } from "react-icons/fa";
import { blogPosts, categories, popularTags } from '@/lib/constants';

const BlogLayout = () => {
    const latestPosts = blogPosts.slice(0, 4);

    return (
        <section className=" w-[90%] mx-auto">
        <div className="min-h-screen mt-[68px]">
            <div className="mx-auto px-4 sm:px-6 lg:px-8 py-8">
                <div className="flex flex-col lg:flex-row gap-16">
                    <main className="flex-1">
                        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-8 ">
                            {blogPosts.map((post) => (
                                <article key={post.id} className="bg-white rounded-lg shadow-md overflow-hidden hover:shadow-lg transition-shadow duration-300">
                                    <div className="relative">
                                        <img
                                            src={post.image}
                                            alt={post.title}
                                            className="w-full h-48 object-cover"
                                        />
                                        <div className="absolute -bottom-4 left-4 bg-[#EDF5F4] rounded-full">
                                            <span className={`${post.categoryColor} font-semibold text-[#006D5B] px-3 py-1 rounded-full text-sm `}>
                                                {post.category}
                                            </span>
                                        </div>
                                        {post.hasVideo && (
                                            <div className="absolute inset-0 flex items-center justify-center">
                                                <button className="bg-white bg-opacity-90 hover:bg-opacity-100 rounded-full p-3 transition-all duration-200">
                                                    <FaPlay className="h-6 w-6 text-teal-600 ml-1" />
                                                </button>
                                            </div>
                                        )}
                                    </div>
                                    <div className="p-6">
                                        <h2 className="text-xl font-semibold text-gray-900 mb-3 hover:text-blue-600 transition-colors duration-200">
                                            {post.title}
                                        </h2>
                                        <div className="flex items-center text-sm text-gray-500 space-x-4">
                                            <div className="flex items-center text-[#006D5B] font-semibold">
                                                <User className="h-4 w-4 mr-1" />
                                                <span >by {post.author}</span>
                                            </div>
                                            <div className="flex items-center text-[#006D5B] font-semibold">
                                                <Calendar className="h-4 w-4 mr-1" />
                                                <span>{post.date}</span>
                                            </div>
                                        </div>
                                    </div>
                                </article>
                            ))}
                        </div>

                        {/* Pagination */}
                        <div className="flex items-center justify-center space-x-2">
                            <button className="p-2 rounded-lg border border-gray-300 hover:bg-gray-50 transition-colors duration-200">
                                <ChevronLeft className="h-5 w-5 text-gray-600" />
                            </button>
                            <button className="px-4 py-2 bg-blue-600 text-white rounded-lg font-medium">
                                1
                            </button>
                            <button className="px-4 py-2 border border-gray-300 rounded-lg hover:bg-gray-50 transition-colors duration-200">
                                2
                            </button>
                            <button className="p-2 rounded-lg border border-gray-300 hover:bg-gray-50 transition-colors duration-200">
                                <ChevronRight className="h-5 w-5 text-gray-600" />
                            </button>
                        </div>
                    </main>

                    {/* Sidebar */}
                    <aside className="w-full lg:w-80 space-y-8">
                        <div className="flex-1 max-w-lg mx-8">
                            <div className="relative">
                                <input
                                    type="text"
                                    placeholder="Search here..."
                                    className="w-full pl-4 pr-10 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                                />
                                <Search className="absolute right-3 top-2.5 h-5 w-5 text-gray-400" />
                            </div>
                        </div>
                        <div className="bg-white rounded-lg shadow-md p-6">
                            <h3 className="text-xl font-semibold text-gray-900 mb-4">Categories</h3>
                            <ul className="space-y-3">
                                {categories.map((category) => (
                                    <li key={category.name} className="flex items-center justify-between">
                                        <div className="flex items-center">
                                            <div className="w-2 h-2 bg-current rounded-full mr-3" />
                                            <span className={` hover:underline cursor-pointer`}>
                                                {category.name}
                                            </span>
                                        </div>
                                        <span className="text-gray-500 text-sm">({category.count})</span>
                                    </li>
                                ))}
                            </ul>
                        </div>

                        {/* Latest Posts */}
                        <div className="bg-white rounded-lg shadow-md p-6">
                            <h3 className="text-xl font-semibold text-gray-900 mb-4">Latest Posts</h3>
                            <div className="space-y-4">
                                {latestPosts.map((post) => (
                                    <div key={post.id} className="flex space-x-3">
                                        <img
                                            src={post.image}
                                            alt={post.title}
                                            className="w-16 h-16 object-cover rounded-lg flex-shrink-0"
                                        />
                                        <div className="flex-1 min-w-0">
                                            <div className="flex items-center text-xs text-gray-500 mb-1">
                                                <Calendar className="h-3 w-3 mr-1" />
                                                <span>{post.date}</span>
                                            </div>
                                            <h4 className="text-sm font-medium text-gray-900 line-clamp-2 hover:text-blue-600 cursor-pointer">
                                                {post.title}
                                            </h4>
                                        </div>
                                    </div>
                                ))}
                            </div>
                        </div>

                        {/* Popular Tags */}
                        <div className="bg-white rounded-lg shadow-md p-6">
                            <h3 className="text-xl font-semibold text-gray-900 mb-4">Popular Tags</h3>
                            <div className="flex flex-wrap gap-2">
                                {popularTags.map((tag) => (
                                    <span
                                        key={tag}
                                        className="px-3 py-1 bg-gray-100 text-gray-700 rounded-full text-sm hover:bg-blue-50 hover:text-blue-600 cursor-pointer transition-colors duration-200"
                                    >
                                        {tag}
                                    </span>
                                ))}
                            </div>
                        </div>
                    </aside>
                </div>
            </div>
        </div>
        </section>
    );
};

export default BlogLayout;