import React, { useState, useEffect } from 'react';
import local from './assets/local.png';
import seach from './assets/seach.png';
import people from './assets/people.png';
import Heart from './assets/Heart.png';
import hand from './assets/hand.png';
import galory from './assets/img-galory.png';

const Hamidulloh = () => {
    const [blogs, setBlogs] = useState([]);
    const [searchTerm, setSearchTerm] = useState("");
    const [isModalOpen, setIsModalOpen] = useState(false);
    const [loading, setLoading] = useState(false);
    const [selectedFile, setSelectedFile] = useState(null);
    const [imagePreview, setImagePreview] = useState("");

    const [formData, setFormData] = useState({
        title: "",
        description: "",
        category: ""
    });

    const API_URL = "https://691c471f3aaeed735c90351a.mockapi.io/api/users";
    const IMGBB_API_KEY = "7b0d81180cbb404030c98c06e8fbc0d7";

    // GET
    const fetchBlogs = async () => {
        try {
            const res = await fetch(API_URL);
            const data = await res.json();
            setBlogs(data);
        } catch (err) {
            console.error(err);
        }
    };

    useEffect(() => {
        fetchBlogs();
    }, []);

    // 
    const handleInputChange = (e) => {
        setFormData({ ...formData, [e.target.name]: e.target.value });
    };


    const filteredBlogs = blogs.filter(blog =>
        blog.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
        blog.category?.toLowerCase().includes(searchTerm.toLowerCase())
    );

    return (
        <div className='bg-black pb-10 text-white'>

            <nav className='flex justify-around items-center py-5'>
                <img src={local} alt="logo" />

                <ul className='flex gap-10'>
                    <li>Home</li>
                    <li>Shop</li>
                    <li>About us</li>
                    <li>Services</li>
                    <li>Blog</li>
                </ul>

                <div className='flex gap-3'>
                    <img src={seach} alt="" />
                    <img src={people} alt="" />
                    <img src={Heart} alt="" />
                    <img src={hand} alt="" />
                </div>
            </nav>

            <div className='px-20 mt-10'>
                <h1 className='text-4xl font-bold text-center mb-10'>Our Blog Collection</h1>

                <div className='flex gap-10 bg-[#111] p-10 rounded-3xl'>
                    <div className='w-1/2'>
                        <h2 className='text-3xl font-bold mb-5'>
                            Discover the Art of Perfumery
                        </h2>
                        <p>Welcome to Local Face's Perfumery Blog Collection! Here, we invite you to immerse yourself in the captivating world of fragrances, where each blog post is a sensory journey that unveils the magic and allure of perfumes. Our team of fragrance enthusiasts, industry experts, and perfumers have curated an array of captivating articles to enrich your understanding and appreciation for these olfactory delights.</p>
                        <p className='mt-10'>At Local Face, we believe that perfumery is an extraordinary fusion of art, science, and emotion. Our passion for exquisite fragrances has inspired us to curate a treasure trove of blog posts, each designed to ignite your senses and deepen your appreciation for these olfactory wonders.</p>
                    </div>

                    <div className='w-1/2'>
                        <img src={galory} className="rounded-2xl" />
                    </div>
                </div>
                <div className='flex justify-between items-center mt-20'>
                    <input
                        type="text"
                        value={searchTerm}
                        onChange={(e) => setSearchTerm(e.target.value)}
                        placeholder="Qidirish..."
                        className='w-[300px] h-[50px] rounded-2xl pl-5  text-black bg-white'
                    />
                    <select className='w-[170px] h-[50px] bg-white text-black pl-5 rounded-2xl'>
                        <option value="All">All</option>
                        <option value="fashion">Fashion</option>
                        <option value="sports">Sports</option>
                    </select>
                </div>

            </div>

            <main className="mt-20 px-20">
                <div className="grid grid-cols-3 gap-8">
                    {filteredBlogs.map(blog => (
                        <div key={blog.id} className="bg-[#111] p-5 rounded-2xl">

                            <img
                                src={blog.image}
                                className="w-full h-60 object-cover rounded-xl"
                            />

                            {/* CATEGORY faqat 1 marta */}
                            <span className="text-xs text-gray-400">
                                {blog.category}
                            </span>

                            <h3 className="text-xl font-bold mt-2">
                                {blog.title}
                            </h3>

                            <p className="text-gray-400 text-sm">
                                {blog.description}
                            </p>

                            <button>
                                Read More
                            </button>
                        </div>
                    ))}
                </div>
            </main>

            {isModalOpen && (
                <div className="fixed inset-0 bg-black/80 flex justify-center items-center">

                    <form onSubmit={addNewBlog} className="bg-white p-6 rounded-xl text-black w-[400px] flex flex-col gap-3">

                        <input name="title" placeholder="Title" onChange={handleInputChange} required />
                        <input name="category" placeholder="Category" onChange={handleInputChange} />
                        <textarea name="description" placeholder="Description" onChange={handleInputChange} required />

                        <input type="file" onChange={handleImageChange} />ssw

                        <button disabled={loading} className="bg-black text-white py-2">
                            {loading ? "Loading..." : "Save"}
                        </button>

                        <button type="button" onClick={closeModal}>
                            Cancel
                        </button>

                    </form>
                </div>
            )}
            <div className='mt-20 mb-20'>
                <div className="bg-[#0f0f0f] text-gray-400 py-16 px-8 md:px-20 font-sans">
                    <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-12 gap-10">

                        <div className="md:col-span-5 space-y-6">
                            <img src={local} alt="" />

                            <div className="space-y-4">

                                <div className="flex w-full max-w-md">
                                    <input
                                        type="email"
                                        placeholder="Your email here"
                                        className="bg-[#1a1a1a] border-none text-white px-4 py-3 rounded-l-md w-full focus:ring-0 outline-none"
                                    />

                                    <button className="bg-[#b35d33] text-white px-6 py-3 rounded-r-md hover:bg-[#a04e29] transition">
                                        Submit
                                    </button>
                                </div>
                            </div>


                        </div>

                        <div className="md:col-span-7 grid grid-cols-2 sm:grid-cols-4 gap-8">

                            <div className="space-y-4">
                                <h4 className="text-white font-semibold">Categories</h4>
                                <ul className="space-y-2 text-sm">
                                    <li className="hover:text-white cursor-pointer">Fashion</li>
                                    <li className="hover:text-white cursor-pointer">Jewelry</li>
                                    <li className="hover:text-white cursor-pointer">Sports</li>
                                    <li className="hover:text-white cursor-pointer">Electronics</li>
                                    <li className="hover:text-white cursor-pointer">Indoor</li>
                                </ul>
                            </div>

                            <div className="space-y-4">
                                <h4 className="text-white font-semibold">Shopping</h4>
                                <ul className="space-y-2 text-sm">
                                    <li className="hover:text-white cursor-pointer">Payments</li>
                                    <li className="hover:text-white cursor-pointer">Delivery options</li>
                                    <li className="hover:text-white cursor-pointer">Buyer protection</li>
                                </ul>
                            </div>

                            <div className="space-y-4">
                                <h4 className="text-white font-semibold">Customer care</h4>
                                <ul className="space-y-2 text-sm">
                                    <li className="hover:text-white cursor-pointer">Help center</li>
                                    <li className="hover:text-white cursor-pointer">Terms & Conditions</li>
                                    <li className="hover:text-white cursor-pointer">Privacy policy</li>
                                    <li className="hover:text-white cursor-pointer">Returns & refund</li>
                                    <li className="hover:text-white cursor-pointer">Survey & feedback</li>
                                </ul>
                            </div>

                            <div className="space-y-4">
                                <h4 className="text-white font-semibold">Pages</h4>
                                <ul className="space-y-2 text-sm">
                                    <li className="hover:text-white cursor-pointer">About Us</li>
                                    <li className="hover:text-white cursor-pointer">Shop</li>
                                    <li className="hover:text-white cursor-pointer">Contact Us</li>
                                    <li className="hover:text-white cursor-pointer">Services</li>
                                    <li className="hover:text-white cursor-pointer">Blog</li>
                                </ul>
                            </div>

                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Hamidulloh;