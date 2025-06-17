import { Grid, Box } from '@mui/material';
import './SecondSection.css'

const SecondSection = () => {
    const cardsCol = [
        {
            title: 'EDGE COMPUTING',
            image: '/Alta tecnología en el desierto.png', // Add correct paths
            description:
                'Our micro-edge units bring compute power closer to the source – reducing latency, increasing data sovereignty, and enabling real-time AI applications in smart cities, defense zones, and remote regions.',
        },
        {
            title: 'AI-NATIVE',
            image: '/Solar-Powered Data Center at Dusk.png',
            description:
                'From GPU-dense configurations to LLM orchestration and multi-modal inference, our infrastructure is optimized to meet the explosive demands of AI training and deployment – today and tomorrow.',
        }]
    const cardsRaw = [{
        title: 'RAPID DEVELOPMENT',
        image: '/nvidia-dgx-gh200-og-1200x630.jpg',
        description:
            'Our prefabricated AlphaEdge data centers can be operational in under 90 days – accelerating digital transformation for governments, enterprises, and AI innovators at unmatched speed.',
    },
    {
        title: 'SUSTAINABLE',
        image: '/Modern Harmony in Abu Dhabi.png',
        description:
            'We integrate solar, battery, and grid-independent systems into every deployment, ensuring carbon-neutral performance and aligning with global ESG standards and net-zero goals.',
    },
    ];

    return (
        <div className="second-section">
            <div className='second-section-content'>
                <h1 className='heading-primary'>THE WORLD'S FIRST AI NATIVE  MICRO EDGE DATA CENTER NETWORK</h1>
                <p className='sub-text-primary'>Alpha Data X is pioneering a decentralized, sustainable micro-edge AI infrastructure — the first of its kind. Our modular AI containers are deployable in a matter of weeks, not years, enabling rapid global rollout in response to skyrocketing demand for compute</p>
                <Box>
                    <Grid container flexGrow={1} spacing={3}>
                        {cardsCol.map((cards, index) => (
                            <Grid key={index} size={{ xs: 12, md:12,lg:6}} className="card-grid">
                                <Grid container>
                                    <Grid className="img-grid" size={{ xs: 12, md: 6, lg: 12 }}>

                                        <img className='card-img' src={cards.image} alt="" />
                                    </Grid>
                                    <Grid className="desc-grid" size={{ xs: 12, md: 6, lg: 12 }}>
                                        <h2 className='card-title'>{cards.title}</h2>
                                        <p>{cards.description}</p>
                                    </Grid>
                                </Grid>
                            </Grid>
                        ))}
                        {cardsRaw.map((cards, index) => (
                            <Grid key={index} size={{ xs: 12, lg: 12 }} className="card-grid2">
                                {index % 2 == 0 ?
                                    <Grid container>
                                        <Grid className="img-grid" size={{ xs: 12, md: 6, lg: 6 }}>

                                            <img className='card-img' src={cards.image} alt="" />
                                        </Grid>
                                        <Grid className="desc-grid" size={{ xs: 12, md: 6, lg: 6 }}>
                                            <h2 className='card-title'>{cards.title}</h2>
                                            <p>{cards.description}</p>
                                        </Grid>
                                    </Grid> :
                                    <Grid container>
                                        <Grid className="desc-grid" size={{ xs: 12, md: 6, lg: 6 }}>
                                            <h2 className='card-title'>{cards.title}</h2>
                                            <p>{cards.description}</p>
                                        </Grid>
                                        <Grid className="img-grid" size={{ xs: 12, md: 6, lg: 6 }}>

                                            <img className='card-img' src={cards.image} alt="" />
                                        </Grid>
                                    </Grid>
                                }
                            </Grid>
                        ))}
                    </Grid>
                </Box>
            </div>
        </div>
    )
}

export default SecondSection;