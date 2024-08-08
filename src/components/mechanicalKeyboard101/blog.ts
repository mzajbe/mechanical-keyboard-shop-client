
export interface Blog {
    id: number;
    title: string;
    image: string;
    content: string[];
  }
  
  export const blogs: Blog[] = [
    {
      id: 1,
      title: 'The Evolution of Mechanical Keyboards',
      image: 'https://via.placeholder.com/150',
      content: [
        'Mechanical keyboards have come a long way since their inception. The tactile feedback and durability they offer have made them a favorite among typists and gamers alike.',
        'In the early days, mechanical keyboards were considered a luxury item. However, as technology has advanced, they have become more accessible and affordable. Today, there are countless options available, catering to different preferences and budgets.',
        'One of the key benefits of mechanical keyboards is their customizable nature. From key switches to keycaps, users can personalize their keyboards to suit their individual needs and style.',
      ],
    },
    {
      id: 2,
      title: 'Top 5 Mechanical Keyboards in 2024',
      image: 'https://via.placeholder.com/150',
      content: [
        'As we enter 2024, the market for mechanical keyboards continues to grow. Here are the top 5 mechanical keyboards that have captured the attention of enthusiasts this year.',
        '1. Keyboard A: Known for its exceptional build quality and responsive switches, Keyboard A is a top choice for both gamers and typists.',
        '2. Keyboard B: With its customizable RGB lighting and ergonomic design, Keyboard B offers a perfect blend of style and comfort.',
        '3. Keyboard C: Featuring hot-swappable switches and a compact layout, Keyboard C is ideal for users who like to experiment with different key switches.',
        '4. Keyboard D: This keyboard stands out for its premium materials and programmable macro keys, making it a favorite among professionals.',
        '5. Keyboard E: Budget-friendly yet feature-packed, Keyboard E offers great value for money without compromising on performance.',
      ],
    },
    // Add more blogs as needed
  ];
  