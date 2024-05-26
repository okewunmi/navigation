"use client";
import "./globals.css";
import Menu from "@/Components/MenuBar/Menu";
import Map from "@/Components/Map/Map";

export default function Home() {
  return (
    <main className="main">
      <Menu />
      <Map />
    </main>
  );
}
