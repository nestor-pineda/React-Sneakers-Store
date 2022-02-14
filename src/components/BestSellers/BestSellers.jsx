import * as React from "react";
import { StyledGrid } from "./styles";
import { Link } from "react-router-dom";
import { SneakerCard } from "./styles";
import { StyledButton } from "./styles";
import { Title } from "./styles";

export default function BestSeller({ sneakers }) {
  const relatedProducts = [
    { name: "White Black", image: "https://images.stockx.com/images/Nike-Dunk-Low-White-Black-2022-W.jpg?fit=fill&bg=FFFFFF&w=700&h=500&auto=format,compress&trim=color&q=90&dpr=2&updated_at=1643138443", id: "ad3cba1c-fe72-44f1-b8e3-e4d70d3281fd" },
    { name: "Summit White", image: "https://images.stockx.com/images/Nike-Retro-GTS-97-Summit-White.jpg?fit=fill&bg=FFFFFF&w=700&h=500&auto=format,compress&trim=color&q=90&dpr=2&updated_at=1642621202", id: "316eab1e-fe98-466d-bf14-b39b622f927d" },
    {
      name: "Bad Bunny Benito",
      image: "https://images.stockx.com/images/adidas-Forum-Powerphase-Bad-Bunny-Benito.jpg?fit=fill&bg=FFFFFF&w=700&h=500&auto=format,compress&trim=color&q=90&dpr=2&updated_at=1643222537",
      id: "8ab97a62-ba75-4f5b-8978-3d68c777a256",
    },
    {
      name: "Bape White",
      image: "https://images.stockx.com/images/Reebok-Club-C-85-Bape-White-Contrast-Stitch-Product.jpg?fit=fill&bg=FFFFFF&w=700&h=500&auto=format,compress&trim=color&q=90&dpr=2&updated_at=1638552556",
      id: "6df45f6e-cc9f-41c4-9776-557e12e6edf9",
    },
    {
      name: "Kith Salmon Toe",
      image: "https://images.stockx.com/images/ASICS-Gel-Lyte-V-Kith-Salmon-Toe-Product.jpg?fit=fill&bg=FFFFFF&w=700&h=500&auto=format,compress&trim=color&q=90&dpr=2&updated_at=1643116778",
      id: "609bb14e-0185-4adf-9d66-f475b1de9487",
    },
  ];

  return (
    <StyledGrid>
      {relatedProducts.map((item) => (
        <SneakerCard key={item.id} className="box">
          <div
            className="image"
            style={{
              backgroundImage: `url(${item.image})`,
            }}
          ></div>
          <div className="text">
            <Title>
              <span className="filename__base">
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
