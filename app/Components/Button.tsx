// Button.tsx
import Image from "next/image";
import React from "react";

type ButtonProps = {
  type?: "button" | "submit"; // Jenis tombol (opsional)
  title: string; // Teks yang ditampilkan pada tombol
  variant: string; // Gaya tombol
  icon?: string; // Gambar ikon (opsional)
  full?: boolean; // Tombol penuh lebar atau tidak (opsional)
  onClick?: () => void; // Fungsi yang dipanggil saat tombol diklik (opsional)
};

const Button: React.FC<ButtonProps> = ({
  type,
  title,
  icon,
  variant,
  full,
  onClick,
}) => {
  // Komponen tombol
  return (
    <button
      className={`flexCenter gap-3 rounded-full border ${variant} ${
        full && "w-full"
      }`}
      type={type}
      onClick={onClick} // Menjalankan fungsi saat tombol diklik
      style={{
        backgroundColor: "white",
        color: "orange",
        borderRadius: "10px",
        height: "15px",
        marginLeft: "100px",
      }}
    >
      {/* Menampilkan ikon jika ada */}
      {icon && <Image src={icon} alt={title} width={24} height={24} />}
      {/* Menampilkan teks tombol */}
      <label className="bold-16 whitespace-nowrap cursor-pointer">
        {title}
      </label>
    </button>
  );
};

export default Button;
