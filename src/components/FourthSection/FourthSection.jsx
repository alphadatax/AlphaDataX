import { Grid, Box } from '@mui/material';
import './FourthSection.css'

const FourthSection = () => {

    const cards = [
        {
            title: "CENTRALIZED AND LATENCY-PRONE",
            description: "Current infrastructure cannot meet edge computing demands."
        },
        {
            title: "ENERGY-INEFFICIENT",
            description: "Traditional data centers waste significant power on cooling."
        },
        {
            title: "TOO SLOW TO DEPLOY",
            description: "CExisting solutions take years rather than months to implement."
        },
        {
            title: "LACK OF SOVEREIGNTY",
            description: "Enterprises and governments need sovereign, localized, high-performance compute."
        }
    ]
    return (
        <div>
            <div className='fourth-section-content'>
                <h1 className='ts-heading-primary'>WHAT WE SOLVE</h1>
                <p className='ts-sub-text-primary'>Today’s AI demands are exponential. Most infrastructure isn’t. We solve the global gap between compute, sustainability, and sovereignty.</p>
                <Box>
                    <Grid container spacing={5}>
                        <Grid className='fs-grid-1' size={{ xs: 12, md: 12, lg: 6 }}>
                            {cards.map((card, index) => (
                                <div className='fs-grid-1-sub' key={index}>
                                    <Grid container>
                                        <Grid size={{ xs: 3 }}>
                                            <img className='fs-grid-1-logo' src="./Image.png" alt="" />
                                        </Grid>
                                        <Grid className='fs-grid-1-desc' size={{ xs: 9 }}>
                                            <h2 className='fs-card-title'>{card.title}</h2>
                                            <p className="fs-card-desc">{card.description}</p>
                                        </Grid>
                                    </Grid>
                                </div>
                            ))}
                        </Grid>
                        <Grid className='fs-grid-2' size={{ xs: 12, md: 12, lg: 6 }}>
                            <img className='fs-grid-img' src="Modern Harmony in Abu Dhabi.png" alt="" />
                            <p>Most legacy data centers are centralized and physically distant from where data is generated. This introduces high latency and bandwidth bottlenecks, making them unsuitable for real-time AI processing, autonomous systems, and mission-critical applications. As industries move toward decentralized, low-latency AI, traditional infrastructure simply can't keep up — both in terms of speed and responsiveness at the edge.</p>
                        </Grid>
                    </Grid>
                </Box>
            </div>
        </div>
    )
}

export default FourthSection;