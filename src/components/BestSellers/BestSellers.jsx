import * as React from "react";
import { StyledGrid } from "./styles";
import { Link } from "react-router-dom";
import { SneakerCard } from "./styles";
import { StyledButton } from "./styles";
import { Title } from "./styles";

export default function BestSeller({ sneakers }) {
  const relatedProducts = [
    {
      name: "Varsity Red Black Gum",
      image: "https://images.stockx.com/images/Nike-SB-Ishod-Wair-Varsity-Red-Black-Gum.jpg?fit=fill&bg=FFFFFF&w=700&h=500&auto=format,compress&trim=color&q=90&dpr=2&updated_at=1641661410",
      id: "da3ea265-4880-4d8c-8f84-0afcc3638c9d",
    },
    { name: "No Stripes", image: "https://images.stockx.com/images/adidas-Forum-84-Low-ADV-No-Stripes.jpg?fit=fill&bg=FFFFFF&w=700&h=500&auto=format,compress&trim=color&q=90&dpr=2&updated_at=1644369569", id: "f3de8922-1ddf-42ef-a745-7fe0c429ca1f" },
    {
      name: "Keith Haring Dancing Figures",
      image: "https://images.stockx.com/images/Reebok-Classic-Leather-Legacy-AZ-Keith-Haring-Dancing-Figures.jpg?fit=fill&bg=FFFFFF&w=700&h=500&auto=format,compress&trim=color&q=90&dpr=2&updated_at=1634128604",
      id: "a6969b25-36c4-464d-be4d-9e76edae37ae",
    },
    {
      name: "Black Clay Grey",
      image: "https://images.stockx.com/images/ASICS-Gel-Kayano-28-Black-Clay-Grey.jpg?fit=fill&bg=FFFFFF&w=700&h=500&auto=format,compress&trim=color&q=90&dpr=2&updated_at=1642100150",
      id: "de50fd10-a70f-4388-b141-6221152be666",
    },
    {
      name: "Kith Salmon Toe",
      image: "https://images.stockx.com/images/ASICS-Gel-Lyte-V-Kith-Salmon-Toe-Product.jpg?fit=fill&bg=FFFFFF&w=700&h=500&auto=format,compress&trim=color&q=90&dpr=2&updated_at=1643116778",
      id: "609bb14e-0185-4adf-9d66-f475b1de9487",
    },
    {
      name: "White Magic Mauve",
      image: "https://images.stockx.com/images/adidas-Stan-Smith-White-Magic-Mauve-W.jpg?fit=fill&bg=FFFFFF&w=700&h=500&auto=format,compress&trim=color&q=90&dpr=2&updated_at=1638818263",
      id: "d8e179a4-f84a-45f5-9315-554e4de314f2",
    },
    {
      name: "Nike Dunk Low",
      image: "https://images.stockx.com/images/Nike-Dunk-Low-Goldenrod-Product.jpg?fit=fill&bg=FFFFFF&w=700&h=500&auto=format,compress&trim=color&q=90&dpr=2&updated_at=1637177820",
      id: "4b510649-48a0-40af-abee-3853251ce9da",
    },
    {
      name: "Bronze 56K",
      image: "https://images.stockx.com/images/Reebok-Classic-Leather-Bronze-56K.jpg?fit=fill&bg=FFFFFF&w=700&h=500&auto=format,compress&trim=color&q=90&dpr=2&updated_at=1624343400",
      id: "d9790ae9-fde0-4d49-8884-7bec5818bf8e",
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
