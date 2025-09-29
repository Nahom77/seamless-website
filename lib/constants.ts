export interface Blog {
  id: number;
  imageUrl: string;
  alternateText: string;
  title: string;
  description: string;
  date: string;
}

export const blogs: Blog[] = [
  {
    id: 1,
    imageUrl: "/images/panalists.jpg",
    alternateText: "panalists",
    title: "Digital Payment",
    description:
      "Sept 04 marked an important milestone for digital payments in Ethiopia's healthcare sector. For years, achieving a truly paperless system has been a challenge. Cashiers carried the extra load of handling both manual receipts and digital systems, while health facilities struggled with financial reporting and claim audits. During the National Orientation on Digital Government Payments hosted by the Ministry of Finance with the support of the Ministry of Health, the National Bank, and Better Than Cash Alliance, we witnessed a turning point. The newly issued directive requiring digital payments across public institutions is a big step forward. It brings us closer to building a healthcare system that is more accessible, traceable, accountable, and efficient.",
    date: "04, Sept 2025",
  },
  //   {
  //     id: 2,
  //     imageUrl: "/images/panalists.jpg",
  //     alternateText: "panalists",
  //     title: "Digital Payment",
  //     description:
  //       "Sept 04 marked an important milestone for digital payments in Ethiopia's healthcare sector. For years, achieving a truly paperless system has been a challenge. Cashiers carried the extra load of handling both manual receipts and digital systems, while health facilities struggled with financial reporting and claim audits. During the National Orientation on Digital Government Payments hosted by the Ministry of Finance with the support of the Ministry of Health, the National Bank, and Better Than Cash Alliance, we witnessed a turning point. The newly issued directive requiring digital payments across public institutions is a big step forward. It brings us closer to building a healthcare system that is more accessible, traceable, accountable, and efficient.",
  //     date: "04, Sept 2025",
  //   },
];
