import React from "react"
import Navbar from "./components/Navbar"
import Hero from "./components/Hero"
import Card from "./components/Card"
import Data from "./Data"


export default function App() {

    const cards = data.map(item => {
        return (
            <Card 
                img={item.coverImg}
                rating={item.rating}
                reviewCount={item.reviewCount}
                location={item.location}
                title={item.title}
                price={item.price}
            />
        )
})

    return (
        <div>
            <Navbar />
            <Card
                img="contact.jpg"
                rating="5.0"
                reviewCount={6}
                location="USA"
                title="Life Lessons with Katie Zaferes"
                price={136}
            />
        </div>
    )
}