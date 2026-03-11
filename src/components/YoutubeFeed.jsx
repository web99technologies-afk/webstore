import React, { useState, useEffect } from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation, Pagination } from 'swiper/modules';
import { Play, Youtube, X } from 'lucide-react';
import ReactPlayer from 'react-player';
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import './YoutubeFeed.css';

const YOUTUBE_CHANNEL_ID = 'UCvtsA48mBWHe9yGwJKS2fKA';
const RSS_URL = `https://www.youtube.com/feeds/videos.xml?channel_id=${YOUTUBE_CHANNEL_ID}`;
const ALL_ORIGINS_URL = `https://api.allorigins.win/get?url=${encodeURIComponent(RSS_URL)}`;

const fallbackVideos = [
    {
        id: 'Z4tGfuqNKac',
        title: 'hulk batman',
        thumbnail: 'https://i.ytimg.com/vi/Z4tGfuqNKac/hqdefault.jpg'
    },
    {
        id: 'Mkep3gkWWsQ',
        title: 'jeep ai video',
        thumbnail: 'https://i.ytimg.com/vi/Mkep3gkWWsQ/hqdefault.jpg'
    },
    {
        id: '2VGyghz4Cdc',
        title: 'AI VINAVAGER',
        thumbnail: 'https://i.ytimg.com/vi/2VGyghz4Cdc/hqdefault.jpg'
    },
    {
        id: 'yedo3dFvOKY',
        title: 'OM MURUGA ENTERPRISES SUMMER COOL OFFERS💥💥',
        thumbnail: 'https://i.ytimg.com/vi/yedo3dFvOKY/hqdefault.jpg'
    }
];

const YoutubeFeed = () => {
    const [videos, setVideos] = useState([]);
    const [activeVideo, setActiveVideo] = useState(null);
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        const fetchYoutubeVideos = async () => {
            try {
                const response = await fetch(ALL_ORIGINS_URL);
                if (!response.ok) throw new Error("Proxy error");
                
                const data = await response.json();
                
                // If it returned an HTML page blockage
                if (data.contents && data.contents.includes('<html')) {
                    throw new Error("YouTube blocked proxy");
                }

                // Parse XML
                const parser = new DOMParser();
                const xmlDoc = parser.parseFromString(data.contents, "text/xml");
                const entries = Array.from(xmlDoc.querySelectorAll("entry"));
                
                if (entries.length === 0) throw new Error("No entries found");

                const fetchedVideos = entries.slice(0, 6).map(entry => {
                    const id = entry.querySelector("videoId")?.textContent || '';
                    const title = entry.querySelector("title")?.textContent || '';
                    
                    let thumbnail = '';
                    const mediaGroup = entry.querySelector("group");
                    if (mediaGroup) {
                         const mediaThumbnail = mediaGroup.querySelector("thumbnail");
                         if (mediaThumbnail) {
                             thumbnail = mediaThumbnail.getAttribute("url");
                         }
                    }
                    if (!thumbnail) {
                        thumbnail = `https://i.ytimg.com/vi/${id}/hqdefault.jpg`;
                    }
                    
                    return { id, title, thumbnail };
                });
                
                setVideos(fetchedVideos);
            } catch (error) {
                console.error("Falling back to valid cached videos:", error);
                setVideos(fallbackVideos);
            } finally {
                setLoading(false);
            }
        };

        fetchYoutubeVideos();
    }, []);

    const openModal = (videoUrl) => {
        setActiveVideo(videoUrl);
        document.body.style.overflow = 'hidden';
    };

    const closeModal = () => {
        setActiveVideo(null);
        document.body.style.overflow = 'auto';
    };

    return (
        <section className="youtube-section">
            <div className="container">
                <div className="youtube-header animate-slide-up">
                    <div className="yt-title-group">
                        <Youtube size={40} color="#FF0000" />
                        <h2 className="section-title">Latest Videos from Our <span>YouTube Channel</span></h2>
                    </div>
                    <a href="https://www.youtube.com/@ommurugaenterprises4150/videos" target="_blank" rel="noopener noreferrer" className="btn btn-primary yt-sub-btn">
                        <Youtube size={18} /> Subscribe on YouTube
                    </a>
                </div>

                <div className="yt-slider-wrap animate-slide-up delay-100">
                    {loading ? (
                        <div className="yt-loading">Loading videos...</div>
                    ) : videos.length > 0 ? (
                        <Swiper
                            modules={[Navigation, Pagination]}
                            spaceBetween={24}
                            slidesPerView={1}
                            navigation
                            pagination={{ clickable: true }}
                            breakpoints={{
                                640: { slidesPerView: 2 },
                                1024: { slidesPerView: 3 },
                            }}
                            className="yt-swiper"
                        >
                            {videos.map(video => (
                                <SwiperSlide key={video.id}>
                                    <div className="yt-video-card" onClick={() => openModal(`https://www.youtube.com/watch?v=${video.id}`)}>
                                        <div className="yt-thumbnail-wrap">
                                            <img src={video.thumbnail} alt={video.title} className="yt-thumbnail" loading="lazy" />
                                            <div className="yt-backdrop"></div>
                                            <div className="yt-play-btn"><Play size={24} fill="currentColor" /></div>
                                        </div>
                                        <div className="yt-info">
                                            <h3 className="yt-video-title" title={video.title}>{video.title}</h3>
                                            <p className="yt-channel-name">Om Muruga Enterprises</p>
                                        </div>
                                    </div>
                                </SwiperSlide>
                            ))}
                        </Swiper>
                    ) : (
                        <div className="yt-error">Could not load videos. Please visit our channel directly.</div>
                    )}
                </div>
            </div>

            {activeVideo && (
                <div className="yt-modal-overlay" onClick={closeModal}>
                    <div className="yt-modal-content" onClick={e => e.stopPropagation()}>
                        <button className="yt-close-btn" onClick={closeModal}><X size={24} /></button>
                        <div className="player-wrapper">
                            <ReactPlayer
                                url={activeVideo}
                                className="react-player"
                                width="100%"
                                height="100%"
                                controls={true}
                                playing={true}
                            />
                        </div>
                    </div>
                </div>
            )}
        </section>
    );
};

export default YoutubeFeed;
