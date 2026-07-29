export type FlowStep = {
  title: string;
  text: string;
};

export const streetshopsFlow: FlowStep[] = [
  { title: "Customer Order", text: "Customer buys from a listed shop on the StreetShops marketplace." },
  { title: "StreetShops", text: "Order is processed and a delivery job is created automatically." },
  { title: "Civitas Rider", text: "The nearest available rider accepts the job and collects the order." },
  { title: "Smart Delivery", text: "GPS-tracked route execution with real-time proof of delivery." },
  { title: "Customer", text: "Fast, affordable local fulfilment completed end to end." },
];
