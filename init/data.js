let sampleListings = [
  {
    title: "National Museum",
    description: "The National Museum holds artifacts from prehistoric times to modern art. The museum covers over 5,000 years of Indian culture and history.",
    history: "Established in 1949, the museum was inaugurated on 15 August 1949. It was originally part of the Rashtrapati Bhavan.",
    relatedinfo: "The museum has over 200,000 works of art and regularly hosts special exhibitions.",
    image: "https://images.unsplash.com/photo-1514905552197-0610a4d8fd73?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    location: "Janpath, New Delhi, Delhi 110011, India",
    openingtime: "10:00 AM",
    closingtime: "6:00 PM",
    ticketfees: "20 rs.",
    ratings: "4.5/5"
  },
  {
    title: "Indian Museum",
    description: "The Indian Museum in Kolkata is the largest and oldest museum in India, boasting a rich collection of antiques, armor, fossils, and paintings.",
    history: "Founded in 1814 by the Asiatic Society of Bengal, it is one of the earliest and most comprehensive museums in Asia.",
    relatedinfo: "It has six sections dedicated to Art, Archaeology, Anthropology, Geology, Zoology, and Economic Botany.",
    image: "https://www.bing.com/th/id/OIP.sdt4mo8qrRAl71XLSOv8pwHaE7?w=246&h=180&c=7&r=0&o=5&dpr=1.3&pid=1.7",
    location: "27, Jawaharlal Nehru Road, Park Street area, Kolkata, West Bengal 700016, India",
    openingtime: "10:00 AM",
    closingtime: "5:00 PM",
    ticketfees: "50 rs.",
    ratings: "4.6/5"
  },
  {
    title: "Chhatrapati Shivaji Maharaj Vastu Sangrahalaya",
    description: "This museum in Mumbai is a landmark heritage structure that displays artifacts from ancient Indian history, art, and culture.",
    history: "Established in 1922, it was formerly known as the Prince of Wales Museum of Western India and was renamed in honor of Maratha ruler Shivaji.",
    relatedinfo: "It houses over 50,000 artifacts including sculptures, manuscripts, and decorative arts.",
    image: "https://th.bing.com/th/id/OIP.Cwwi_ZAP-M8nQZn8El5lcgHaE8?w=276&h=184&c=7&r=0&o=5&dpr=1.3&pid=1.7",
    location: "159-161, Mahatma Gandhi Road, Kala Ghoda, Fort, Mumbai, Maharashtra 400032, India",
    openingtime: "10:15 AM",
    closingtime: "6:00 PM",
    ticketfees: "85 rs.",
    ratings: "4.5/5"
  },
  {
    title: "Salar Jung Museum",
    description: "The Salar Jung Museum in Hyderabad is one of the three National Museums of India, featuring an impressive collection of sculptures, paintings, textiles, and more.",
    history: "Inaugurated in 1951, the museum was founded by Nawab Mir Yousuf Ali Khan, Salar Jung III, who devoted his life to collecting these artifacts.",
    relatedinfo: "The museum is known for its collection of over 43,000 art objects and 50,000 books and manuscripts.",
    image: "https://th.bing.com/th?id=OIF.aR1NJON%2bbHRne3VeZ%2b1aaQ&w=192&h=180&c=7&r=0&o=7&dpr=1.3&pid=1.7&rm=3",
    location: "Darulshifa, Hyderabad, Telangana 500002, India",
    openingtime: "10:00 AM",
    closingtime: "5:00 PM",
    ticketfees: "20 rs.",
    ratings: "4.7/5"
  },
  {
    title: "Victoria Memorial",
    description: "The Victoria Memorial in Kolkata is a large marble building dedicated to the memory of Queen Victoria, with galleries showcasing British imperial history in India.",
    history: "Opened to the public in 1921, the building was designed by Sir William Emerson in a style blending British and Mughal elements.",
    relatedinfo: "The museum within the memorial houses 25 galleries, including the Royal Gallery, the National Leaders Gallery, and the Calcutta Gallery.",
    image: "https://th.bing.com/th/id/OIP.Q52QzZphWHXb9NoAAg7VFwHaE8?w=252&h=180&c=7&r=0&o=5&dpr=1.3&pid=1.7",
    location: "1, Queens Way, Kolkata, West Bengal 700071, India",
    openingtime: "10:00 AM",
    closingtime: "5:00 PM",
    ticketfees: "30 rs.",
    ratings: "4.6/5"
  },
  {
    title: "Nehru Museum & Planetarium",
    description: "Located in New Delhi, the Nehru Museum & Planetarium, also known as the Nehru Memorial Museum and Library, is dedicated to India's first Prime Minister, Jawaharlal Nehru.",
    history: "Inaugurated in 1964, the museum was established to honor Nehru's contributions to Indian politics and education.",
    relatedinfo: "The museum features a variety of exhibits related to Nehru's life and India's post-independence history. The planetarium offers educational shows about space and astronomy.",
    image: "https://th.bing.com/th/id/OIP.WZjwYdYyYfAjVxGYfgetdAHaFD?w=239&h=180&c=7&r=0&o=5&dpr=1.3&pid=1.7",
    location: "Teen Murti Bhavan, New Delhi, Delhi 110001, India",
    openingtime: "10:00 AM",
    closingtime: "5:00 PM",
    ticketfees: "30 rs.",
    ratings: "4.4/5"
  },
  {
    title: "Rajasthan State Museum",
    description: "Located in Jaipur, the Rajasthan State Museum features an impressive collection of artifacts showcasing the rich history and culture of Rajasthan.",
    history: "Founded in 1949, the museum is situated in the Albert Hall, a historic building that was established to house the museum's collection.",
    relatedinfo: "The museum’s exhibits include paintings, sculptures, textiles, and artifacts from various periods of Rajasthan's history.",
    image: "https://th.bing.com/th/id/OIP.9o1ptG6kiVfgUEbCv1OgCAHaE8?w=240&h=180&c=7&r=0&o=7&dpr=1.3&pid=1.7&rm=3",
    location: "Albert Hall Museum, Ram Niwas Garden, Jaipur, Rajasthan 302004, India",
    openingtime: "10:00 AM",
    closingtime: "5:00 PM",
    ticketfees: "50 rs.",
    ratings: "4.3/5"
  },
  {
    title: "Delhi Museum",
    description: "The Delhi Museum, also known as the Delhi Archaeological Museum, displays a variety of artifacts from ancient Indian civilizations.",
    history: "Established in 1960, the museum focuses on the history and archaeology of Delhi and the surrounding regions.",
    relatedinfo: "Exhibits include ancient coins, pottery, and sculptures from the Mauryan, Gupta, and Mughal periods.",
    image: "https://th.bing.com/th/id/OIP.CnWk_Tdvl5fYJs5GhyxLKQHaE7?w=270&h=180&c=7&r=0&o=5&dpr=1.3&pid=1.7",
    location: "Central Delhi, Delhi 110001, India",
    openingtime: "10:00 AM",
    closingtime: "5:00 PM",
    ticketfees: "20 rs.",
    ratings: "4.2/5"
  },
  {
    title: "The National Gallery of Modern Art",
    description: "The National Gallery of Modern Art in New Delhi houses an extensive collection of modern and contemporary Indian art.",
    history: "Founded in 1954, the gallery is located in the former residence of the Maharaja of Jaipur.",
    relatedinfo: "The gallery features works by prominent Indian artists from the 19th century to the present day, including paintings, sculptures, and installations.",
    image: "https://th.bing.com/th/id/OIP.goRdFok4b1fBT-euzPDcUQHaEK?w=289&h=184&c=7&r=0&o=5&dpr=1.3&pid=1.7",
    location: "Rajpath, Central Secretariat, New Delhi, Delhi 110001, India",
    openingtime: "10:00 AM",
    closingtime: "5:00 PM",
    ticketfees: "20 rs.",
    ratings: "4.5/5"
  },
  {
    title: "The Asiatic Society",
    description: "The Asiatic Society Museum in Kolkata is renowned for its extensive collection of manuscripts, rare books, and historical artifacts related to Asia.",
    history: "Established in 1784 by Sir William Jones, the museum is one of the oldest institutions dedicated to the study of Asian culture and history.",
    relatedinfo: "The museum's collection includes over 100,000 manuscripts, including several ancient and rare texts.",
    image: "https://th.bing.com/th/id/OIP.FqY7NP6TKLvpq0XtdunCoAHaE7?w=290&h=193&c=7&r=0&o=5&dpr=1.3&pid=1.7",
    location: "1 Park Street, Kolkata, West Bengal 700016, India",
    openingtime: "10:00 AM",
    closingtime: "5:00 PM",
    ticketfees: "Free",
    ratings: "4.4/5"
  },
  {
    title: "Rajasthan State Museum",
    description: "Located in Jaipur, the Rajasthan State Museum features an impressive collection of artifacts showcasing the rich history and culture of Rajasthan.",
    history: "Founded in 1949, the museum is situated in the Albert Hall, a historic building that was established to house the museum's collection.",
    relatedinfo: "The museum’s exhibits include paintings, sculptures, textiles, and artifacts from various periods of Rajasthan's history.",
    image: "https://th.bing.com/th/id/OIP.CYUneaDCPTs9N1AaTyXu4QHaE8?w=248&h=180&c=7&r=0&o=5&dpr=1.3&pid=1.7",
    location: "Albert Hall Museum, Ram Niwas Garden, Jaipur, Rajasthan 302004, India",
    openingtime: "10:00 AM",
    closingtime: "5:00 PM",
    ticketfees: "50 rs.",
    ratings: "4.3/5"
  },
  {
    title: "Delhi Museum",
    description: "The Delhi Museum, also known as the Delhi Archaeological Museum, displays a variety of artifacts from ancient Indian civilizations.",
    history: "Established in 1960, the museum focuses on the history and archaeology of Delhi and the surrounding regions.",
    relatedinfo: "Exhibits include ancient coins, pottery, and sculptures from the Mauryan, Gupta, and Mughal periods.",
    image: "https://th.bing.com/th/id/OIP.hiMEX6HmSU79Y8mnPyw9fAHaFa?w=201&h=180&c=7&r=0&o=5&dpr=1.3&pid=1.7",
    location: "Central Delhi, Delhi 110001, India",
    openingtime: "10:00 AM",
    closingtime: "5:00 PM",
    ticketfees: "20 rs.",
    ratings: "4.2/5"
  },
  {
    title: "The National Gallery of Modern Art",
    description: "The National Gallery of Modern Art in New Delhi houses an extensive collection of modern and contemporary Indian art.",
    history: "Founded in 1954, the gallery is located in the former residence of the Maharaja of Jaipur.",
    relatedinfo: "The gallery features works by prominent Indian artists from the 19th century to the present day, including paintings, sculptures, and installations.",
    image: "https://th.bing.com/th/id/OIP.l_Iye0M95DUKoNhbHPg6tgHaEK?w=283&h=180&c=7&r=0&o=5&dpr=1.3&pid=1.7",
    location: "Rajpath, Central Secretariat, New Delhi, Delhi 110001, India",
    openingtime: "10:00 AM",
    closingtime: "5:00 PM",
    ticketfees: "20 rs.",
    ratings: "4.5/5"
  },
  {
    title: "Nehru Museum & Planetarium",
    description: "Located in New Delhi, the Nehru Museum & Planetarium, also known as the Nehru Memorial Museum and Library, is dedicated to India's first Prime Minister, Jawaharlal Nehru.",
    history: "Inaugurated in 1964, the museum was established to honor Nehru's contributions to Indian politics and education.",
    relatedinfo: "The museum features a variety of exhibits related to Nehru's life and India's post-independence history. The planetarium offers educational shows about space and astronomy.",
    image: "https://th.bing.com/th/id/OIP.aqSTNSPKtLBGdJjem0odxgHaE8?w=273&h=182&c=7&r=0&o=5&dpr=1.3&pid=1.7",
    location: "Teen Murti Bhavan, New Delhi, Delhi 110001, India",
    openingtime: "10:00 AM",
    closingtime: "5:00 PM",
    ticketfees: "30 rs.",
    ratings: "4.4/5"
  },
  {
    title: "The Asiatic Society",
    description: "The Asiatic Society Museum in Kolkata is renowned for its extensive collection of manuscripts, rare books, and historical artifacts related to Asia.",
    history: "Established in 1784 by Sir William Jones, the museum is one of the oldest institutions dedicated to the study of Asian culture and history.",
    relatedinfo: "The museum's collection includes over 100,000 manuscripts, including several ancient and rare texts.",
    image: "https://th.bing.com/th/id/OIP.4Z6-5ok-sMuA1A-Ynrg9OwHaE8?w=263&h=180&c=7&r=0&o=5&dpr=1.3&pid=1.7",
    location: "1 Park Street, Kolkata, West Bengal 700016, India",
    openingtime: "10:00 AM",
    closingtime: "5:00 PM",
    ticketfees: "Free",
    ratings: "4.4/5"
  },
  {
    title: "Rajasthan State Museum",
    description: "Located in Jaipur, the Rajasthan State Museum features an impressive collection of artifacts showcasing the rich history and culture of Rajasthan.",
    history: "Founded in 1949, the museum is situated in the Albert Hall, a historic building that was established to house the museum's collection.",
    relatedinfo: "The museum’s exhibits include paintings, sculptures, textiles, and artifacts from various periods of Rajasthan's history.",
    image: "https://th.bing.com/th/id/OIP.a08divBdYpPzrNS032xT0wAAAA?w=272&h=180&c=7&r=0&o=5&dpr=1.3&pid=1.7",
    location: "Albert Hall Museum, Ram Niwas Garden, Jaipur, Rajasthan 302004, India",
    openingtime: "10:00 AM",
    closingtime: "5:00 PM",
    ticketfees: "50 rs.",
    ratings: "4.3/5"
  },
  {
    title: "Delhi Museum",
    description: "The Delhi Museum, also known as the Delhi Archaeological Museum, displays a variety of artifacts from ancient Indian civilizations.",
    history: "Established in 1960, the museum focuses on the history and archaeology of Delhi and the surrounding regions.",
    relatedinfo: "Exhibits include ancient coins, pottery, and sculptures from the Mauryan, Gupta, and Mughal periods.",
    image: "https://th.bing.com/th/id/OIP.7e--SjkimGdd2OqMD4a_KAHaE7?w=275&h=183&c=7&r=0&o=5&dpr=1.3&pid=1.7",
    location: "Central Delhi, Delhi 110001, India",
    openingtime: "10:00 AM",
    closingtime: "5:00 PM",
    ticketfees: "20 rs.",
    ratings: "4.2/5"
  },
  {
    title: "The National Gallery of Modern Art",
    description: "The National Gallery of Modern Art in New Delhi houses an extensive collection of modern and contemporary Indian art.",
    history: "Founded in 1954, the gallery is located in the former residence of the Maharaja of Jaipur.",
    relatedinfo: "The gallery features works by prominent Indian artists from the 19th century to the present day, including paintings, sculptures, and installations.",
    image: "https://th.bing.com/th/id/OIP.JTcfovSzUG9mdwOuJfS_ngHaE8?w=244&h=180&c=7&r=0&o=5&dpr=1.3&pid=1.7",
    location: "Rajpath, Central Secretariat, New Delhi, Delhi 110001, India",
    openingtime: "10:00 AM",
    closingtime: "5:00 PM",
    ticketfees: "20 rs.",
    ratings: "4.5/5"
  },
  {
    title: "Nehru Museum & Planetarium",
    description: "Located in New Delhi, the Nehru Museum & Planetarium, also known as the Nehru Memorial Museum and Library, is dedicated to India's first Prime Minister, Jawaharlal Nehru.",
    history: "Inaugurated in 1964, the museum was established to honor Nehru's contributions to Indian politics and education.",
    relatedinfo: "The museum features a variety of exhibits related to Nehru's life and India's post-independence history. The planetarium offers educational shows about space and astronomy.",
    image: "https://th.bing.com/th/id/OIP.kCwt1dXAWm2Vblv0PPy1gwHaE7?w=266&h=180&c=7&r=0&o=5&dpr=1.3&pid=1.7",
    location: "Teen Murti Bhavan, New Delhi, Delhi 110001, India",
    openingtime: "10:00 AM",
    closingtime: "5:00 PM",
    ticketfees: "30 rs.",
    ratings: "4.4/5"
  },
  {
    title: "The Asiatic Society",
    description: "The Asiatic Society Museum in Kolkata is renowned for its extensive collection of manuscripts, rare books, and historical artifacts related to Asia.",
    history: "Established in 1784 by Sir William Jones, the museum is one of the oldest institutions dedicated to the study of Asian culture and history.",
    relatedinfo: "The museum's collection includes over 100,000 manuscripts, including several ancient and rare texts.",
    image: "https://th.bing.com/th?id=OIP.zmB1GZNpLzd1pRMyoniH_wHaHR&w=252&h=247&c=8&rs=1&qlt=90&o=6&dpr=1.3&pid=3.1&rm=2",
    location: "1 Park Street, Kolkata, West Bengal 700016, India",
    openingtime: "10:00 AM",
    closingtime: "5:00 PM",
    ticketfees: "Free",
    ratings: "4.4/5"
  },
  {
    title: "Rajasthan State Museum",
    description: "Located in Jaipur, the Rajasthan State Museum features an impressive collection of artifacts showcasing the rich history and culture of Rajasthan.",
    history: "Founded in 1949, the museum is situated in the Albert Hall, a historic building that was established to house the museum's collection.",
    relatedinfo: "The museum’s exhibits include paintings, sculptures, textiles, and artifacts from various periods of Rajasthan's history.",
    image: "https://th.bing.com/th?id=OIP.IiW4tAugqKdV6pH6AfjjhQHaHa&w=250&h=250&c=8&rs=1&qlt=90&o=6&dpr=1.3&pid=3.1&rm=2",
    location: "Albert Hall Museum, Ram Niwas Garden, Jaipur, Rajasthan 302004, India",
    openingtime: "10:00 AM",
    closingtime: "5:00 PM",
    ticketfees: "50 rs.",
    ratings: "4.3/5"
  },
  {
    title: "Delhi Museum",
    description: "The Delhi Museum, also known as the Delhi Archaeological Museum, displays a variety of artifacts from ancient Indian civilizations.",
    history: "Established in 1960, the museum focuses on the history and archaeology of Delhi and the surrounding regions.",
    relatedinfo: "Exhibits include ancient coins, pottery, and sculptures from the Mauryan, Gupta, and Mughal periods.",
    image: "https://th.bing.com/th?id=OIP.MqjujFDWINEUI96y9Io2rQHaE8&w=306&h=204&c=8&rs=1&qlt=90&o=6&dpr=1.3&pid=3.1&rm=2",
    location: "Central Delhi, Delhi 110001, India",
    openingtime: "10:00 AM",
    closingtime: "5:00 PM",
    ticketfees: "20 rs.",
    ratings: "4.2/5"
  },
  {
    title: "The National Gallery of Modern Art",
    description: "The National Gallery of Modern Art in New Delhi houses an extensive collection of modern and contemporary Indian art.",
    history: "Founded in 1954, the gallery is located in the former residence of the Maharaja of Jaipur.",
    relatedinfo: "The gallery features works by prominent Indian artists from the 19th century to the present day, including paintings, sculptures, and installations.",
    image: "https://th.bing.com/th?id=OIP.EyRGRE0XxAb0jfmGItm2UwAAAA&w=280&h=222&c=8&rs=1&qlt=90&o=6&dpr=1.3&pid=3.1&rm=2",
    location: "Rajpath, Central Secretariat, New Delhi, Delhi 110001, India",
    openingtime: "10:00 AM",
    closingtime: "5:00 PM",
    ticketfees: "20 rs.",
    ratings: "4.5/5"
  },
  {
    title: "Nehru Museum & Planetarium",
    description: "Located in New Delhi, the Nehru Museum & Planetarium, also known as the Nehru Memorial Museum and Library, is dedicated to India's first Prime Minister, Jawaharlal Nehru.",
    history: "Inaugurated in 1964, the museum was established to honor Nehru's contributions to Indian politics and education.",
    relatedinfo: "The museum features a variety of exhibits related to Nehru's life and India's post-independence history. The planetarium offers educational shows about space and astronomy.",
    image: "https://th.bing.com/th?id=OIP.H44hqLjLzVh01o9_EpaNdAHaE6&w=306&h=203&c=8&rs=1&qlt=90&o=6&dpr=1.3&pid=3.1&rm=2",
    location: "Teen Murti Bhavan, New Delhi, Delhi 110001, India",
    openingtime: "10:00 AM",
    closingtime: "5:00 PM",
    ticketfees: "30 rs.",
    ratings: "4.4/5"
  }
];


module.exports = { data: sampleListings };