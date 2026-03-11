import React, { useState, useEffect } from 'react';
import { Instagram, ExternalLink } from 'lucide-react';
import './InstagramFeed.css';

const INSTAGRAM_USERNAME = 'ommurugaenterprises';
const RSS_BRIDGE_URL = `https://rss-bridge.org/bridge01/?action=display&bridge=Instagram&context=Username&u=${INSTAGRAM_USERNAME}&format=Json`;

const InstagramFeed = () => {
    const [posts, setPosts] = useState([]);
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        const fetchInstagramFeed = async () => {
            try {
                // Fetch directly from RSS-Bridge
                const response = await fetch(RSS_BRIDGE_URL);
                const data = await response.json();

                if (data && data.items && data.items.length > 0) {
                    const fetchedPosts = data.items.slice(0, 6).map((item, index) => ({
                        id: item.id || index.toString(),
                        link: item.id, // the post URL
                        image: item.url || item._rssbridge?.thumbnail || '',
                    }));
                    setPosts(fetchedPosts);
                }
            } catch (error) {
                console.error("Error fetching Instagram feed:", error);
            } finally {
                setLoading(false);
            }
        };

        fetchInstagramFeed();
    }, []);

    return (
        <section className="instagram-section">
            <div className="container">

                <div className="instagram-header animate-slide-up">
                    <div className="ig-profile">
                        <div className="ig-avatar">
                            <Instagram size={36} color="#fff" />
                        </div>
                        <div className="ig-details">
                            <h2 className="ig-title">Om Muruga Enterprises</h2>
                            <span className="ig-handle">@ommurugaenterprises</span>
                        </div>
                    </div>
                    <div className="ig-actions">
                        <a href={`https://www.instagram.com/${INSTAGRAM_USERNAME}/?hl=en`} target="_blank" rel="noopener noreferrer" className="btn btn-primary ig-follow-btn">
                            <Instagram size={18} /> Follow Us
                        </a>
                    </div>
                </div>

                <div className="ig-grid">
                    {loading ? (
                        <div className="ig-loading" style={{ gridColumn: '1 / -1', textAlign: 'center', padding: '2rem' }}>
                            Loading latest posts...
                        </div>
                    ) : posts.length > 0 ? (
                        posts.map((post, index) => (
                            <a
                                key={post.id}
                                href={post.link}
                                target="_blank"
                                rel="noopener noreferrer"
                                className={`ig-post-card animate-slide-up delay-${(index % 6 + 1) * 50}`}
                            >
                                <img src={post.image} alt={`Instagram post`} className="ig-post-img" loading="lazy" />
                                <div className="ig-post-overlay">
                                    <ExternalLink size={24} color="#fff" />
                                </div>
                            </a>
                        ))
                    ) : (
                        <div className="ig-empty" style={{ gridColumn: '1 / -1', textAlign: 'center', padding: '2rem' }}>
                            Visit our Instagram to see the latest posts.
                        </div>
                    )}
                </div>
            </div>
        </section>
    );
};

export default InstagramFeed;
