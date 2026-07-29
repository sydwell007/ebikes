export type Faq = {
  question: string;
  answer: string;
};

export const faqs: Faq[] = [
  {
    question: "What is Civitas Cargo?",
    answer:
      "Civitas Cargo is Civitas Holdings' smart electric cargo mobility platform - a purpose-built delivery e-bike, fleet management software, and (through Civitas Energy) battery-swap and charging infrastructure for African last-mile logistics.",
  },
  {
    question: "How does the pilot program work?",
    answer:
      "We partner with fleet operators, StreetShops merchants, municipalities and campuses to run a bounded pilot: a small number of vehicles, live fleet monitoring, and a defined review period before scaling up.",
  },
  {
    question: "What is the cargo capacity and range?",
    answer:
      "The current design targets a 120 kg cargo payload and a 100-160 km range per charge, using a dual removable battery system suited to daily delivery-route usage.",
  },
  {
    question: "How does Civitas Cargo connect to StreetShops?",
    answer:
      "Civitas Cargo can act as the delivery layer for the StreetShops marketplace: an order placed with a local shop is routed to the nearest available rider and tracked end-to-end.",
  },
  {
    question: "Do you offer fleet leasing instead of outright purchase?",
    answer:
      "Yes. Fleet leasing is one of our primary partnership tracks - it bundles the vehicle, fleet software, and maintenance support into a single recurring arrangement.",
  },
  {
    question: "How can I get the investor pack?",
    answer:
      "Use the investor pack request on the Investors page. We'll follow up with the rollout plan, unit economics, and revenue model.",
  },
  {
    question: "Is Civitas Cargo already deployed?",
    answer:
      "Civitas Cargo is currently in pilot and partnership formation. Vehicle imagery on this site is illustrative pending final production renders; fleet dashboard figures shown on the platform pages are illustrative until live fleet telemetry goes public.",
  },
  {
    question: "Where can I read about Civitas Energy's wider charging network?",
    answer:
      "Civitas Energy operates a separate EV charging, storage and smart power business across public charging hubs, petrol-station integration and fleet depots. This site's Charging & Energy page covers e-bike battery infrastructure specifically.",
  },
];
