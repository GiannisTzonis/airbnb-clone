import React from "react"
<<<<<<< HEAD
import Navbar from "./components/Navbar"
import Hero from "./components/Hero"
import Card from "./components/Card"


export default function App() {
    return (
        <hi>Hi</hi>
=======
import Joke from "./Joke"

export default function App() {
    return (
        <div>
            <Joke
                setup="How many programmers does it take to change a light bulb?"
                punchline="None – It’s a hardware problem" />
            <Joke
                setup="How did the programmer die in the shower?"
                punchline="He read the shampoo bottle instructions: Lather. Rinse. Repeat." />
            <Joke
                setup="“Knock, knock.”
“Who’s there?”
very long pause…"
                punchline="“Java.”" />
            <Joke
                setup="Programming is like sex:" punchline="One mistake and you have to support it for the rest of your life." />
            <Joke
                setup="Debugging:"
                punchline="Removing the needles from the haystack." />
        </div>
>>>>>>> faac45261ed362318336ec24cad4a773f211eb82
    )
}