import { FiBarChart2, FiBriefcase, FiDollarSign, FiLock, FiPieChart, FiShield, FiTarget, FiTrendingUp, FiUser } from "react-icons/fi";

import { IBenefit } from "@/types"

export const benefits: IBenefit[] = [
    {
        title: "Everything You Need for a Smarter, Interactive Event Experience",
        description: "From personalized agendas to instant exhibitor scans, stay connected, informed, and engaged—right from your mobile.",
        bullets: [
            {
                title: "Personalized Agenda",
                description: "Smart scheduling that adapts to you in real time.",
                icon: <FiBarChart2 size={26} />
            },
            {
                title: "Visit & Scan Exhibitor",
                description: "Tap into the exhibitor experience—just scan as you go!",
                icon: <FiTarget size={26} />
            },
            {
                title: "Quiz & Polls",
                description: "Tap, vote, and test your knowledge anytime, anywhere.",
                icon: <FiTrendingUp size={26} />
            },
             {
                title: "Event Info",
                description: "Access schedules, venues, and updates anytime on your phone.",
                icon: <FiTrendingUp size={26} />
            },
             {
                title: "Quick Links",
                description: "Find what you need in seconds with quick shortcuts.",
                icon: <FiTrendingUp size={26} />
            }
        ],
        imageSrc: "/images/Mobile_Home.png"
    },
    {
        title: "Your Complete Guide to Sessions and Speakers",
        description: "View agendas, explore speaker profiles, and check into sessions—everything you need for a streamlined event journey",
        bullets: [
            {
                title: "Agenda",
                description: "Stay on track with your daily session lineup.",
                icon: <FiDollarSign size={26} />
            },
            {
                title: "Session Details",
                description: "Get session times, speakers, and descriptions at your fingertips.",
                icon: <FiBriefcase size={26} />
            },
            {
                title: "Speaker",
                description: "Explore speaker details to plan your sessions.",
                icon: <FiPieChart size={26} />
            },
            {
                title: "Speaker Details",
                description: "Explore speaker credentials and their session highlights.",
                icon: <FiPieChart size={26} />
            },
            {
                title: "Session Checkin",
                description: "Facilitate smooth session access through timely check-in.",
                icon: <FiPieChart size={26} />
            }
        ],
        imageSrc: "/images/Mobile_Home.png"
    },
    {
        title: "Explore, Connect, and Engage with the Event Community",
        description: "From exhibitor insights to delegate networking and downloadable resources—everything you need to maximize your event experience.",
        bullets: [
            {
                title: "Exhibitor List",
                description: "Discover all exhibiting organizations and their booth details.",
                icon: <FiLock size={26} />
            },
            {
                title: "Exhibitor Details",
                description: "Review exhibitor highlights to make informed visits.",
                icon: <FiUser size={26} />
            },
            {
                title: "Committee",
                description: "Discover the individuals shaping the vision and direction of the event.",
                icon: <FiShield size={26} />
            },
            {
                title: "Delegates",
                description: "Connect with fellow delegates and expand your professional network.",
                icon: <FiUser size={26} />
            },
            {
                title: "Downloads",
                description: "Stay informed with downloadable resources provided by organizers.",
                icon: <FiUser size={26} />
            }
        ],
        imageSrc: "/images/Mobile_Home.png"
    },
]