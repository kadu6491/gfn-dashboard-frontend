import React from 'react'

// Import Material UI libraries
import {Card, CardActionArea, CardContent, CardMedia, Typography, Box, Grid} from '@material-ui/core'

// Import others
import useStyle from './style'

const tileData = [
    {
        "albumId": 11,
        "id": 1,
        "title": "Catergory 1",
        "url": "https://via.placeholder.com/600/92c952",
        "thumbnailUrl": "https://via.placeholder.com/150/92c952"
      },
      {
        "albumId": 15,
        "id": 2,
        "title": "Catergory 2",
        "url": "https://via.placeholder.com/600/771796",
        "thumbnailUrl": "https://via.placeholder.com/150/771796"
      },
      {
        "albumId": 4,
        "id": 3,
        "title": "Catergory 3",
        "url": "https://via.placeholder.com/600/24f355",
        "thumbnailUrl": "https://via.placeholder.com/150/24f355"
      },
      {
        "albumId": 76,
        "id": 4,
        "title": "Catergory 4",
        "url": "https://via.placeholder.com/600/d32776",
        "thumbnailUrl": "https://via.placeholder.com/150/d32776"
      },
      {
        "albumId": 123,
        "id": 5,
        "title": "Catergory 5",
        "url": "https://via.placeholder.com/600/f66b97",
        "thumbnailUrl": "https://via.placeholder.com/150/f66b97"
      },
      {
        "albumId": 141,
        "id": 6,
        "title": "Catergory 6",
        "url": "https://via.placeholder.com/600/56a8c2",
        "thumbnailUrl": "https://via.placeholder.com/150/56a8c2"
      },
]

const Category = () => {
    const classes = useStyle()
    return (
        // <div>
        //     <Typography variant="h3" className={classes.catTypo}>
        //         Category
        //     </Typography>
        // </div>

        <div>
            <Box className={classes.catRoot}>
                <Typography variant="h3" className={classes.catTypo}>
                    Category
                </Typography>

                <Grid
                    container
                    spacing={2}
                >
                    <Grid item xs={12}>
                        <Grid container justify="flex-start" spacing={2}>
                            {tileData.map((item, id) => (
                                <Grid item xs={6} sm={4} md={4} lg={2} key={item.id}>
                                    <Card className={classes.catCard}>
                                        <CardActionArea href="#" >
                                            <CardMedia
                                                component="img"
                                                alt="Contemplative Reptile"
                                                height="120"
                                                image={item.thumbnailUrl}
                                                title="Contemplative Reptile"
                                            />
                                            <CardContent>
                                                <Typography gutterBottom variant="subtitle2" component="h2">
                                                    <b>{item.title}</b>
                                                </Typography>
                                                <Typography variant="body2" color="textSecondary" component="p">
                                                    + {item.albumId} Items
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

export default Category
