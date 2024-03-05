"use client"
import "./globals.css"
import Menu from "@/Components/MenuBar/Menu";
import Map from "@/Components/Map/Map";


export default function Home() {
  const  apiKey  =  "AIzaSyBBCLEmA9IJW_UiN7w0OpulAwohprYgpco";
  return (
    <main className="main">
      <Menu/>
      <Map apiKey={apiKey}/>
    </main>
  )
}
