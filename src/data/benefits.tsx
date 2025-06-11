import { FiBarChart2, FiBriefcase, FiDollarSign, FiLock, FiPieChart, FiShield, FiTarget, FiTrendingUp, FiUser } from "react-icons/fi";

import { IBenefit } from "@/types"

export const benefits: IBenefit[] = [
    {
        title: "Smart Budgeting",
        description: "Take the guesswork out of managing your money. Our AI-powered budgeting tool adapts to your lifestyle and helps you stay on track.",
        bullets: [
            {
                title: "Personalized Agenda",
                description: "Automatically sorts your transactions for crystal-clear insights.",
                icon: <FiBarChart2 size={26} />
            },
            {
                title: "Visit & Scan Exhibitor",
                description: "Set and track financial objectives that matter to you.",
                icon: <FiTarget size={26} />
            },
            {
                title: "Quiz & Polls",
                description: "Get ahead of your finances with spending forecasts and alerts.",
                icon: <FiTrendingUp size={26} />
            },
             {
                title: "Event Info",
                description: "Get ahead of your finances with spending forecasts and alerts.",
                icon: <FiTrendingUp size={26} />
            },
             {
                title: "Quick Links",
                description: "Get ahead of your finances with spending forecasts and alerts.",
                icon: <FiTrendingUp size={26} />
            }
        ],
        imageSrc: "/images/mockup-1.webp"
    },
    {
        title: "Seamless Investing",
        description: "Start building wealth today, no financial degree required. Finwise makes investing accessible and straightforward.",
        bullets: [
            {
                title: "Agenda",
                description: "Begin with as little as $1 and watch your money grow.",
                icon: <FiDollarSign size={26} />
            },
            {
                title: "Session Details",
                description: "Choose from investment strategies tailored to your risk tolerance.",
                icon: <FiBriefcase size={26} />
            },
            {
                title: "Speaker",
                description: "Track your investments with easy-to-understand metrics and visuals.",
                icon: <FiPieChart size={26} />
            },
            {
                title: "Speaker Details",
                description: "Track your investments with easy-to-understand metrics and visuals.",
                icon: <FiPieChart size={26} />
            },
            {
                title: "Session Checkin",
                description: "Track your investments with easy-to-understand metrics and visuals.",
                icon: <FiPieChart size={26} />
            }
        ],
        imageSrc: "/images/mockup-2.webp"
    },
    {
        title: "Bank-Grade Security",
        description: "Your financial data deserves the best protection. Rest easy knowing Finwise employs cutting-edge security measures.",
        bullets: [
            {
                title: "Exhibitor",
                description: "Your information is safeguarded with the highest level of encryption.",
                icon: <FiLock size={26} />
            },
            {
                title: "Exhibitor Details",
                description: "Access your account securely with fingerprint or facial recognition.",
                icon: <FiUser size={26} />
            },
            {
                title: "Committee",
                description: "Our system constantly monitors for suspicious activity to keep your money safe.",
                icon: <FiShield size={26} />
            },
            {
                title: "Delegates",
                description: "Access your account securely with fingerprint or facial recognition.",
                icon: <FiUser size={26} />
            },
            {
                title: "Downloads",
                description: "Access your account securely with fingerprint or facial recognition.",
                icon: <FiUser size={26} />
            }
        ],
        imageSrc: "/images/mockup-1.webp"
    },
]