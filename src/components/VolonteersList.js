import { useSelector } from 'react-redux';
import { volonteersSelectors } from '../redux/volonteers/volonteersSelectors';
import Card from '@mui/material/Card';
import Grid from '@mui/material/Grid2';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Typography from '@mui/material/Typography';
import CardActionArea from '@mui/material/CardActionArea';

const VolonteerList = () => {
  const itemData = useSelector(volonteersSelectors.selectVolonteers);
  const isError = useSelector(volonteersSelectors.selectVolonteersError);
  return (
    <>
      {isError ? (
        <Typography gutterBottom variant="h5">
          Request error
        </Typography>
      ) : (
        <Grid container spacing={4} justifyContent="center">
          {itemData.map(item => (
            <Grid xs={12} sm={6} md={4} key={item._id}>
              <Card sx={{ maxWidth: 345 }}>
                <CardActionArea>
                  <CardMedia
                    component="img"
                    height="250px"
                    image={item.img}
                    alt="green iguana"
                    loading="lazy"
                  />
                  <CardContent>
                    <Typography gutterBottom variant="h5" component="div">
                      {item.name}
                    </Typography>
                    <Typography
                      variant="body2"
                      sx={{ color: 'text.secondary' }}
                    >
                      {item.text}
                    </Typography>
                  </CardContent>
                </CardActionArea>
              </Card>
            </Grid>
          ))}
        </Grid>
      )}
    </>
  );
};

export default VolonteerList;
