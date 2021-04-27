import React from 'react'

// Import Material UI libraries
import {Card, CardActionArea, CardContent, CardMedia, Typography, Box, Grid} from '@material-ui/core'

// Import others
import useStyle from './style'

const tileData = [
    {
        "imgUrl": "https://guesseu.scene7.com/is/image/GuessEU/M63H24W7JF0-L302-ALTGHOST?wid=1500&fmt=jpeg&qlt=80&op_sharpen=0&op_usm=1.0,1.0,5,0&iccEmbed=0",
        "name": "CHECK PRINT SHIRT",
        "price": 110
    },
    {
        "imgUrl": "https://guesseu.scene7.com/is/image/GuessEU/FLGLO4FAL12-BEIBR?wid=700&amp;fmt=jpeg&amp;qlt=80&amp;op_sharpen=0&amp;op_usm=1.0,1.0,5,0&amp;iccEmbed=0",
        "name": "GLORIA HIGH LOGO SNEAKER",
        "price": 91
    },
    {
        "imgUrl": "https://guesseu.scene7.com/is/image/GuessEU/HWVG6216060-TAN?wid=700&amp;fmt=jpeg&amp;qlt=80&amp;op_sharpen=0&amp;op_usm=1.0,1.0,5,0&amp;iccEmbed=0",
        "name": "CATE RIGID BAG",
        "price": 94.5
    },
    {
        "imgUrl": "http://guesseu.scene7.com/is/image/GuessEU/WC0001FMSWC-G5?wid=520&fmt=jpeg&qlt=80&op_sharpen=0&op_usm=1.0,1.0,5,0&iccEmbed=0",
        "name": "GUESS CONNECT WATCH",
        "price": 438.9
    },
    {
        "imgUrl": "https://guesseu.scene7.com/is/image/GuessEU/AW6308VIS03-SAP?wid=700&amp;fmt=jpeg&amp;qlt=80&amp;op_sharpen=0&amp;op_usm=1.0,1.0,5,0&amp;iccEmbed=0",
        "name": "'70s RETRO GLAM KEFIAH",
        "price": 20
    }
]

const BestSeller = () => {
    const classes = useStyle()
    return (
        // <div>
        //     <Typography variant="h3" className={classes.catTypo}>
        //         Category
        //     </Typography>
        // </div>

        <div>
            <Box className={classes.catRoot}>
                <br /><br />
                <Typography variant="h3" className={classes.catTypo}>
                    Best Seller
                </Typography>

                <Grid
                    container
                    spacing={2}
                >
                    <Grid item xs={12}>
                        <Grid container justify="flex-start" spacing={2}>
                            {tileData.map((item, id) => (
                                <Grid item xs={6} sm={4} md={4} lg={2} key={item.id}>
                                    <Card className={classes.bestCard}>
                                        <CardActionArea href="#" >
                                            <CardMedia
                                                component="img"
                                                alt="Contemplative Reptile"
                                                height="auto"
                                                image={item.imgUrl}
                                                title="Contemplative Reptile"
                                            />
                                            <CardContent>
                                                <Typography gutterBottom variant="subtitle2" component="h2" className={classes.typoName}>
                                                    <b>{item.name}</b>
                                                </Typography>
                                                <Typography variant="body2" color="textSecondary" component="p">
                                                    ${item.price}
                                                </Typography>
                                            </CardContent>
                                        </CardActionArea>
                                        
                                    </Card>
                                </Grid>
                            ))}
                           {/* <Grid item xs={6} sm={4} md={4} lg={2} >
                            <Card className={classes.catCard}>
                                <CardActionArea>
                                    <CardMedia
                                        component="img"
                                        alt="Contemplative Reptile"
                                        height="120"
                                        image="https://via.placeholder.com/600/56a8c2"
                                        title="Contemplative Reptile"
                                    />
                                    <CardContent>
                                        <Typography gutterBottom variant="subtitle2" component="h2">
                                            <b>Catergory 1</b>
                                        </Typography>
                                        <Typography variant="body2" color="textSecondary" component="p">
                                            + 203 Items
                                        </Typography>
                                    </CardContent>
                                </CardActionArea>

                                <CardActions>
                                    <Button size="small" color="primary">
                                        List Items
                                    </Button>
                                </CardActions>
                            </Card>
                           </Grid> */}

                        </Grid>
                    </Grid>
                    
                </Grid>
            </Box>
        </div>
    )
}

export default BestSeller
