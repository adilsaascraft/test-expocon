import { IFAQ } from "@/types";
import { siteDetails } from "./siteDetails";

export const faqs: IFAQ[] = [
    {
        question: 'Will the app send reminders for upcoming sessions?',
        answer: 'Absolutely. We use bank-level encryption to protect your data and never store your login information. Plus, our biometric authentication adds an extra layer of security.',
    },
    {
        question: 'Is session check-in required, and how is it performed?',
        answer: 'Absolutely! Your Finwise account syncs seamlessly across all your devices - smartphone, tablet, and computer.',
    },
    {
        question: 'Can I submit feedback on sessions or the event itself?',
        answer: `Yes! ${siteDetails.siteName} supports connections with over 10,000 financial institutions worldwide. Simply log in through our secure portal to link your accounts.`
    },
    {
        question: 'Can I access the app content after the event ends?',
        answer: 'Not at all! Our expert-curated portfolios and educational resources make investing accessible to everyone, regardless of experience level.',
    },
    {
        question: 'What if I need help using the app?',
        answer: 'Our dedicated support team is available 24/7 via chat or email. Plus, we offer extensive in-app tutorials and a comprehensive knowledge base to help you make the most of ExpoCon App.'
    }
];