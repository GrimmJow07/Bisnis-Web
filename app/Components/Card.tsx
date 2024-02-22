import React from "react";
import Link from "next/link";

// Properti yang dimiliki oleh komponen Card
interface CardProps {
  id: number; // ID kartu
  title: string; // Judul kartu
  description: string; // Deskripsi kartu
  imageUrl: string; // URL gambar kartu
  buttonText: string; // Teks pada tombol kartu
  href?: string; // Tautan (opsional)
}

// Data kartu
const cardData: CardProps[] = [
  {
    id: 1,
    title: "Card Title",
    description: "Lorem ipsum dolor sit amet",
    imageUrl: "/tenda-2.png",
    buttonText: "Home",
    href: "/Components/homes",
  },
  {
    id: 2,
    title: "Card Title",
    description: "Lorem ipsum dolor sit amet",
    imageUrl: "/tenda.png",
    buttonText: "Feature",
    href: "/Components/feature",
  },
  {
    id: 3,
    title: "Card Title",
    description: "Lorem ipsum dolor sit amet",
    imageUrl: "tenda-2.png",
    buttonText: "Pricing",
    href: "/Components/pricing",
  },
  {
    id: 4,
    title: "Card Title",
    description: "Lorem ipsum dolor sit amet",
    imageUrl: "/tenda.png",
    buttonText: "Tentang",
    href: "/Components/about",
  },
];

// Komponen Kartu
const Card: React.FC<CardProps> = ({
  id,
  title,
  description,
  imageUrl,
  buttonText,
  href,
}) => {
  return (
    <div className="card w-96 bg-white shadow-xl h-50 mt-10 relative">
      <figure>
        <img src={imageUrl} alt={title} />
      </figure>
      <div className="card-body p-4">
        <h2 className="card-title text-black">{title}</h2>
        <p className="mt-2 text-black">{description}</p>
        {/* Mengecek apakah ada tautan */}
        {href ? (
          <Link href={href}>
            {/* Tombol dengan tautan */}
            <div
              className="btn btn-primary mt-2 text-white"
              style={{ width: 80, cursor: "pointer" }}
            >
              {buttonText}
            </div>
          </Link>
        ) : (
          // Tombol tanpa tautan
          <div
            className="btn btn-primary mt-2 text-white"
            style={{ width: 80, cursor: "pointer" }}
          >
            {buttonText}
          </div>
        )}
      </div>
    </div>
  );
};

// Kontainer Kartu
const CardsContainer: React.FC = () => {
  return (
    <div className="flex mx-12 space-x-4">
      {/* Membuat kartu untuk setiap data kartu */}
      {cardData.map((card) => (
        <Card
          key={card.id}
          id={card.id}
          title={card.title}
          description={card.description}
          imageUrl={card.imageUrl}
          buttonText={card.buttonText}
          href={card.href}
        />
      ))}
    </div>
  );
};

export default CardsContainer;
