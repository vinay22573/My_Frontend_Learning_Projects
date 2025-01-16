'use client';
import Link from "next/link";
import { HoverEffect } from "./ui/card-hover-effect";
const featuredWebinars = [
  {
      "title": "Wireless Bluetooth Headphones",
      "description": "Experience high-quality sound with these wireless Bluetooth headphones, featuring noise cancellation and a long battery life.",
      "slug": "wireless-bluetooth-headphones",
      "isFeatured": true
  },
  {
      "title": "Smart Fitness Tracker",
      "description": "Stay on top of your fitness goals with this smart fitness tracker that monitors your heart rate, steps, and sleep patterns.",
      "slug": "smart-fitness-tracker",
      "isFeatured": false
  },
  {
      "title": "4K Ultra HD Smart TV",
      "description": "Enjoy a cinematic experience at home with this 4K Ultra HD Smart TV that provides stunning visuals and smart features.",
      "slug": "4k-ultra-hd-smart-tv",
      "isFeatured": true
  },
  {
      "title": "Portable Power Bank",
      "description": "Never run out of battery on the go with this portable power bank, designed to charge multiple devices simultaneously.",
      "slug": "portable-power-bank",
      "isFeatured": false
  },
  {
      "title": "Ergonomic Office Chair",
      "description": "Enhance your workspace with this ergonomic office chair, designed for comfort and support during long hours of work.",
      "slug": "ergonomic-office-chair",
      "isFeatured": true
  }
]

function UpcomingWebinars() {
  return (
    <div className="p-12 bg-gray-900 ">
      <div className="max-w-7xl max-auto px-4 sm:px-6">
        <div className="text-center">
          <h2 className="text-base text-teal-600 font-semibold tracking-wide uppercase">Featured Webinars</h2>
          <p className="mt-2 text-3xl leading-8 font-extrabold tracking-tight text-white sm:text-4xl">Enhance Your Musical Journey</p>
        </div>
        <div className="mt-10">
        <HoverEffect items={featuredWebinars.map(webinar=>(
          {
            title:webinar.title,
            description:webinar.description,
            link: webinar.slug
          }
        ))}/>
          </div>
        <div className="mt-10 text-center">
          <Link href={"/"} className="px-4 py-2 rounded border border-neutral-600 text-neutral-700 bg-white hover:bg-gray-100 transition duration-200">
            View All Webinars
          </Link>
        </div>
      </div>
    </div>
  )
}

export default UpcomingWebinars