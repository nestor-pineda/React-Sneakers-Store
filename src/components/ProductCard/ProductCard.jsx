import * as React from "react";
import { StyledGrid } from "./styles";
import { Link } from "react-router-dom";
import { SneakerCard } from "./styles";
import { StyledButton } from "./styles";

export default function ProductCard({ sneakers }) {
  return (
    <StyledGrid>
      {sneakers.results.map((item) => (
        <SneakerCard key={item.id} className="box">
          <div
            className="image"
            style={{
              backgroundImage: `url(${
                item.media.imageUrl != null
                  ? item.media.imageUrl
                  : "https://images.stockx.com/images/Converse-Chuck-Taylor-All-Star-Pokemon-Poke-Ball.jpg?fit=fill&bg=FFFFFF&w=700&h=500&auto=format,compress&trim=color&q=90&dpr=2&updated_at=1641606351"
              })`,
            }}
          ></div>
          <div className="text">
            <h3 className="title">{item.name}</h3>

            <StyledButton>
              <Link to={`/product/${item.id}`}>Read more</Link>
            </StyledButton>

            {/* <p class="price">{item.retailPrice}</p> */}
          </div>
        </SneakerCard>
      ))}
    </StyledGrid>
  );
}

// sneakers.results
