import { Grid, Box } from "@mui/material";
import "./ThirdSection.css"
import { useState } from "react";

const ThirdSection = () => {
    const [isPlaying, setIsPlaying] = useState(false);

    const handlePlay = () => {
        setIsPlaying(true);
    };
    const cards = [
        {
            title: '500+ ALPHA EDGE CONTAINERS',
            description:
                'Deployed globally in less than 6 months.',
        },
        {
            title: 'HIGH PERFORMANCE COMPUTING',
            description:
                'Each unit houses 8+ NVIDIA H200s or DGX-200s with 6kW power draw.',
        },
        {
            title: 'PATENT-PENDING IMMERSION COOLING',
            description:
                'Cuts energy use by 40%.',
        },
        {
            title: 'E100% RENEWABLE ENERGY',
            description:
                'Powered by grid, solar, hydrogen, and battery sources.',
        },
        {
            title: 'ALPHA EDGE Operating System',
            description:
                'Fully remote controlled management system.',
        },]


    return (
        <div className="third-section">
            <div className="third-section-content">
                <h1 className='ts-heading-primary'>OUR TECHNOLOGY</h1>
                <p className='ts-sub-text-primary'>Watch Modular Intelligence in Motion</p>
                <Box>
                    <Grid container>
                        <Grid className="vid-grid">
                            {!isPlaying && (
                                <div className="video-thumbnail">
                                    <img
                                        src="/thumbnail.png" // <-- replace with your video thumbnail
                                        alt="Video Thumbnail"
                                        className="thumbnail-image"
                                    />
                                    <button className="play-button" onClick={handlePlay}>
                                        ▶
                                    </button>
                                </div>
                            )}
                            {isPlaying && (
                                <iframe
                                    className="video-iframe"
                                    src={'./our-technology.mp4'}
                                    title="Video"
                                    frameBorder="0"
                                    allow="autoplay; encrypted-media"
                                    allowFullScreen
                                    style={{height:'100%'}}
                                ></iframe>
                            )}
                        </Grid>
                        <Grid className="desc-grid">
                            <Grid container columns={10}>
                                {cards.map((cards, index) => (
                                    <Grid key={index} className="desc-sub-grid" size={{ lg: 2 }}>
                                        {index % 2 == 0 ? <>
                                        <Grid container>
                                            <Grid size={{xs:3,md:2, lg:12}}>
                                            <img className='ts-card-img' src="./Icon.png" alt="" />
                                            </Grid>
                                            <Grid size={{xs:9,md:10, lg:12}}>
                                            <div className="ts-card-div">
                                                <h2 className='ts-card-title'>{cards.title}</h2>
                                                <p className="ts-card-desc">{cards.description}</p>
                                            </div>
                                            </Grid>
                                            </Grid>
                                            </>
                                            : <>
                                            <Grid container>
                                            <Grid size={{xs:9,md:10, lg:12}}>
                                                <div className="ts-card-div">
                                                    <h2 className='ts-card-title'>{cards.title}</h2>
                                                    <p className="ts-card-desc">{cards.description}</p>
                                                </div>
                                                </Grid>
                                                <Grid size={{xs:3,md:2, lg:12}}>
                                                <img className='ts-card-img' src="./Icon.png" alt="" />
                                                </Grid>
                                                </Grid>
                                            </>}

                                    </Grid>))}
                            </Grid>
                        </Grid>
                    </Grid>
                </Box>
            </div>
        </div>
    )
}

export default ThirdSection;