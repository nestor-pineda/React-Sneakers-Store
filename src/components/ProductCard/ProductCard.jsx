import * as React from "react";
import { StyledGrid } from "./styles";
import { Link } from "react-router-dom";
import { SneakerCard } from "./styles";
import { StyledButton } from "./styles";
import { Title } from "./styles";

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
            <Title>
              <span class="filename__base">
                <h3 className="title">{item.name}</h3>
              </span>
            </Title>

            <StyledButton>
              <Link to={`/product/${item.id}`}>Read more</Link>
            </StyledButton>
          </div>
        </SneakerCard>
      ))}
    </StyledGrid>
  );
}

// sneakers.results
