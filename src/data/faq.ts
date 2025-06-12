import { IFAQ } from "@/types";

export const faqs: IFAQ[] = [
    {
        question: 'Will the app send reminders for upcoming sessions?',
        answer: 'Yes, the app will send timely reminders for upcoming sessions to ensure you don’t miss anything important. You’ll receive push notifications or alerts a few minutes before a session starts, and you can also set personal reminders for sessions you’re particularly interested in. These reminders help you stay organized and get the most out of your event experience.',
    },
    {
        question: 'Is session check-in required, and how is it performed?',
        answer: 'Session check-in may be required for attendance tracking or to unlock certain features like feedback submission or certificates. Check-in can usually be done via a QR code scan at the session entrance or by tapping a “Check-in” button within the app once you are near the session venue, using GPS or Bluetooth for verification.',
    },
    {
        question: 'Can I submit feedback on sessions or the event itself?',
        answer: 'Yes, the app provides an easy way to submit feedback on individual sessions and the overall event. After attending a session, a feedback form is typically available within the app. This allows you to rate speakers, content quality, and organization, helping organizers improve future events.'
    },
    {
        question: 'Can I access the app content after the event ends?',
        answer: "Yes, most content remains accessible after the event concludes. This includes session recordings (if provided), presentation slides, notes, and feedback you submitted. However, access duration may depend on the organizer's policy, so it’s best to check within the app or contact support for details.",
    },
    {
        question: 'What if I need help using the app?',
        answer: "If you need help using the app, there’s usually a dedicated support section within it. This may include FAQs, chat support, or a help desk contact number. You can also reach out to the event's technical support team through email or live chat for immediate assistance during the event"
    }
];