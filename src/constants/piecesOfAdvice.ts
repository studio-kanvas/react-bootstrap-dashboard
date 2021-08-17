export interface Advice {
  id?: number;
  title: string;
  description: string;
  date: number;
  imgUrl: string;
}

export const piecesOfAdviceData: Array<Advice> = [
  {
    id: 1,
    title: 'Curbing COVID-19 through border controls and restricted entry',
    description:
      'Case finding via measures such as border controls, restricted entry, and inbound traveler quarantine, combined with testing high-risk populations and contacts of diagnosed COVID-19 patients. Timely and repeated testing may be necessary to minimize false-negative results. Trace digital tools can aid in outbreak investigation, contact tracing, and monitoring compliance with self-isolation.',
    date: 1628370000000,
    imgUrl: 'https://res.cloudinary.com/lapkinthegod/image/upload/v1628445403/Rectangle_440_1_ayb6yf.jpg',
  },
  {
    id: 2,
    title: 'Curbing COVID-19 through border controls and restricted entry',
    description:
      'Case finding via measures such as border controls, restricted entry, and inbound traveler quarantine, combined with testing high-risk populations and contacts of diagnosed COVID-19 patients. Timely and repeated testing may be necessary to minimize false-negative results. Trace digital tools can aid in outbreak investigation, contact tracing, and monitoring compliance with self-isolation.',
    date: 1628370000000,
    imgUrl: 'https://res.cloudinary.com/lapkinthegod/image/upload/v1628445409/Rectangle_441_1_iq4y2p.jpg',
  },
];
