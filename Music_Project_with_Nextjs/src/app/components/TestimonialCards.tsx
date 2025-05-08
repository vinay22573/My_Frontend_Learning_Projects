'use client'

import { InfiniteMovingCards } from "./ui/infinite-moving-cards";

const musicSchoolTestimonials = [
    {
        quote: "Attending this music school has been a life-changing experience! The instructors are incredibly supportive, and I’ve seen tremendous improvement in my skills.",
        name: "Emma Johnson",
        title: "Piano Student"
    },
    {
        quote: "The flexible learning options and amazing facilities make this school perfect for musicians of any level. I was able to work around my schedule and grow at my own pace.",
        name: "Liam Martinez",
        title: "Guitar Student"
    },
    {
        quote: "I highly recommend this school for anyone looking to dive into music. Performing in student showcases has boosted my confidence, and I've learned so much!",
        name: "Sophia Lee",
        title: "Vocal Student"
    }
];


function MusicSchoolTestimonials() {
  return (
    <div className="h-[40rem] w-full dark:bg-black dark:bg-grid-white/[0.2]">
        <h2 className="text-center text-3xl mb-8 font-bold z-10">Hear our Harmony: Voices of Success</h2>
        <div className="flex justify-center w-full overlfow-hidden px-4 sm:px-6 lg:px-8">
        <div className="w-full max-w-6xl"><InfiniteMovingCards items={musicSchoolTestimonials} direction="right" speed="slow" />
        </div>
        </div>

    </div>
  )
}

export default MusicSchoolTestimonials