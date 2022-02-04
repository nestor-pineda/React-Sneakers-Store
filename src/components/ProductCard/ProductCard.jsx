import * as React from "react";
import CardActions from "@mui/material/CardActions";
import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";
import Button from "@mui/material/Button";
import Typography from "@mui/material/Typography";
import { Link } from "react-router-dom";
import { SneakerCard } from "./styles";
import Grid from "@mui/material/Grid";

export default function ProductCard({ sneakers }) {
  return (
    <>
      <Grid container direction="row" justifyContent="space-between" alignItems="flex-start" spacing={2}>
        {sneakers.results.map((item) => (
          <Grid item xs={12} sm={2} md={3} key={item.id}>
            <SneakerCard>
              {/* <CardMedia component="img" height="140" image={item.media.imageUrl} alt="green iguana" /> */}
              <CardMedia
                component="img"
                height="140"
                image={
                  item.media.imageUrl != null
                    ? item.media.imageUrl
                    : "https://images.stockx.com/images/Converse-Chuck-Taylor-All-Star-Pokemon-Poke-Ball.jpg?fit=fill&bg=FFFFFF&w=700&h=500&auto=format,compress&trim=color&q=90&dpr=2&updated_at=1641606351"
                }
                alt="green iguana"
              />
              <CardContent>
                <Typography gutterBottom variant="h5" component="div">
                  {item.name}
                </Typography>
                <Typography variant="body2" color="text.secondary">
                  Price: {item.retailPrice}
                </Typography>
              </CardContent>
              <CardActions>
                <Button size="small">
                  <Link to={`/product/${item.id}`}>Read more</Link>
                </Button>
              </CardActions>
            </SneakerCard>
          </Grid>
        ))}
      </Grid>
    </>
  );
}

// sneakers.results
