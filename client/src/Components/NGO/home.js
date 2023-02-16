// import React from "react";


// import CardActionArea from "@mui/material/CardActionArea";
// import CardActions from "@mui/material/CardActions";

// import Button from "@mui/material/Button";

// import { makeStyles } from '@mui/styles';
// import Card from '@mui/material/Card';
// import CardContent from '@mui/material/CardContent';
// import Typography from '@mui/material/Typography';
// import CardMedia from '@mui/material/CardMedia';



// const useStyles = makeStyles({
//   root: {
//     width: 800,
//     margin: "20px 10px"
//   },
//   media: {
//     height: 140
//   },
//   cardContainer: {
//     display: "flex",
//     overflowX: "auto"
//   }
// });

// const cardData = [
//   {
//     id: 1,
//     title: "Card 1",
//     image: "image_url_1",
//     content: "Content of card 1"
//   },
//   {
//     id: 2,
//     title: "Card 2",
//     image: "image_url_2",
//     content: "Content of card 2"
//   },
//   {
//     id: 3,
//     title: "Card 3",
//     image: "image_url_3",
//     content: "Content of card 3"
//   },
//   {
//     id: 4,
//     title: "Card 4",
//     image: "image_url_4",
//     content: "Content of card 4"
//   },
//   {
//     id: 5,
//     title: "Card 5",
//     image: "image_url_5",
//     content: "Content of card 5"
//   }
// ];

// const NgoHome = () => {
//   const classes = useStyles();

//   return (
//     <div className={classes.cardContainer}>
//       {cardData.map(card => (
//         <Card className={classes.root} key={card.id}>
//           <CardActionArea>
//             <CardMedia
//               className={classes.media}
//               image={card.image}
//               title={card.title}
//             />
//             <CardContent>
//               <Typography gutterBottom variant="h5" component="h2">
//                 {card.title}
//               </Typography>
//               <Typography variant="body2" color="textSecondary" component="p">
//                 {card.content}
//               </Typography>
//             </CardContent>
//           </CardActionArea>
//           <CardActions>
//             <Button size="small" color="primary">
//               Share
//             </Button>
//             <Button size="small" color="primary">
//               Learn More
//             </Button>
//           </CardActions>
//         </Card>
//       ))}
//     </div>
//   );
// }


// const useStyles = makeStyles({
//   root: {
//     maxWidth: 345,
//     width:"20%",
//     margin: "5%"
//   },
//   media: {
//     height: 140
//   },
//   cardcontainer : {
//     display:"flex",
    
//     flexDirection: 'row',
//     overflow:'auto',
//     flexWrap: 'wrap' ,
//   }
// });

// const cardData = [
//   {
//     id: 1,
//     title: "Card 1",
//     image: "image_url_1",
//     content: "Content of card 1"
//   },
//   {
//     id: 2,
//     title: "Card 2",
//     image: "image_url_2",
//     content: "Content of card 2"
//   },
//   {
//     id: 3,
//     title: "Card 3",
//     image: "image_url_3",
//     content: "Content of card 3"
//   },
//   {
//     id: 4,
//     title: "Card 1",
//     image: "image_url_1",
//     content: "Content of card 1"
//   },
//   {
//     id: 5,
//     title: "Card 2",
//     image: "image_url_2",
//     content: "Content of card 2"
//   },
//   {
//     id: 6,
//     title: "Card 3",
//     image: "image_url_3",
//     content: "Content of card 3"
//   },
//   {
//     id: 7,
//     title: "Card 1",
//     image: "image_url_1",
//     content: "Content of card 1"
//   },
//   {
//     id: 8,
//     title: "Card 2",
//     image: "image_url_2",
//     content: "Content of card 2"
//   },
//   {
//     id: 9,
//     title: "Card 3",
//     image: "image_url_3",
//     content: "Content of card 3"
//   }
// ];

// const NgoHome = () => {
//   const classes = useStyles();

//   return (
//     <div className={classes.cardcontainer}>
//       {cardData.map(card => (
//         <Card className={classes.root} key={card.id}>
//           <CardActionArea>
//             <CardMedia
//               className={classes.media}
//               image={card.image}
//               title={card.title}
//             />
//             <CardContent>
//               <Typography gutterBottom variant="h5" component="h2">
//                 {card.title}
//               </Typography>
//               <Typography variant="body2" color="textSecondary" component="p">
//                 {card.content}
//               </Typography>
//             </CardContent>
//           </CardActionArea>
//           <CardActions>
//             <Button size="small" color="primary">
//               Share
//             </Button>
//             <Button size="small" color="primary">
//               Learn More
//             </Button>
//           </CardActions>
//         </Card>
//       ))}
//     </div>
//   );
// }

import React from 'react';
import Activities from './Activity';
import NavBar from '../Navbar';
import { Button } from '@mui/material';
import Carousel from './carousel';



let cards = [
  {
    id: 1,
    title: 'Card 1',
    description: 'This is card 1',
    image: 'https://via.placeholder.com/345x140'
  },
  {
    id: 2,
    title: 'Card 2',
    description: 'This is card 2',
    image: 'https://via.placeholder.com/345x140'
  },
  {
    id: 3,
    title: 'Card 3',
    description: 'This is card 3',
    image: 'https://via.placeholder.com/345x140'
  },
  {
    id: 4,
    title: 'Card 1',
    description: 'This is card 1',
    image: 'https://via.placeholder.com/345x140'
  },
  {
    id: 5,
    title: 'Card 2',
    description: 'This is card 2',
    image: 'https://via.placeholder.com/345x140'
  },
  {
    id: 6,
    title: 'Card 3',
    description: 'This is card 3',
    image: 'https://via.placeholder.com/345x140'
  },
  {
    id: 7,
    title: 'Card 1',
    description: 'This is card 1',
    image: 'https://via.placeholder.com/345x140'
  },
  {
    id: 8,
    title: 'Card 2',
    description: 'This is card 2',
    image: 'https://via.placeholder.com/345x140'
  },
  {
    id: 9,
    title: 'Card 3',
    description: 'This is card 3',
    image: 'https://via.placeholder.com/345x140'
  },
]
const NgoHome = () => {
  
  let images = [
    
      'https://via.placeholder.com/355x140'
    ,
    
      'https://via.placeholder.com/345x140'
    
  ]
  let captions = [
    
   "img1"
  ,
  "img2"
]
  
  return (
    <>
    <NavBar />
    <div>
      <Button />
    </div>
    <div>
      <Carousel images={images} captions={captions}/>
    </div>
    <div>
      <Activities cards={cards} />
    </div>
    </>
   
  );
};

export default NgoHome;
