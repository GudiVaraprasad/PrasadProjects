export interface Project {
  id: number;
  title: string;
  description: string;
  tags: string[];
  url: string;
  image: string;
}

export const projects: Project[] = [
  {
    id: 1,
    title: "Hotel Room Locking System",
    description: "A secure hotel room locking system using affine cipher encryption to generate unique passwords for guests, ensuring access control through key swiping and password authentication.",
    tags: ["Archived"],
    url: "https://github.com/GudiVaraprasad/Hotel-Room-Locking-System",
    image: "https://camo.githubusercontent.com/4ffa447eac44517cd000460887c8ecc3d16ce452854facc4bb510012e821576f/68747470733a2f2f64726976652e676f6f676c652e636f6d2f75633f6578706f72743d766965772669643d31735975724c45693476577935587a625f5f78794842736b74324a367465584654"
  },
  {
    id: 2,
    title: "Bluetooth Control Car",
    description: "A Bluetooth-controlled robotic car project using an Android app for wireless communication to control movement, leveraging an Arduino microcontroller, motor drivers, and Bluetooth module for low-cost, user-friendly automation.",
    tags: ["Archived"],
    url: "https://github.com/GudiVaraprasad/Bluetooth-Control-Car",
    image: "https://media2.dev.to/dynamic/image/width=1000,height=420,fit=cover,gravity=auto,format=auto/https%3A%2F%2Fdev-to-uploads.s3.amazonaws.com%2Fi%2F8e1cwse19j4y2lhinea8.png"
  },
  {
    id: 3,
    title: "Truth Table Constructor",
    description: "A Java-based desktop application with a GUI that generates truth tables for propositional logic formulas, allowing dynamic user interaction for analyzing boolean expressions with applications in education, machine learning, and gaming.",
    tags: ["Archived"],
    url: "https://github.com/GudiVaraprasad/TruthTableConstructor",
    image: "https://camo.githubusercontent.com/59c853c189010f11942b37aba0e12e6123d2cf1782c9aac2ff37882d92c1248b/68747470733a2f2f6c68332e676f6f676c6575736572636f6e74656e742e636f6d2f336d45364375644f625650732d5a68443457475071447a4c5652766e4c36456d43454a55753731316676513d773339382d683335322d6e6f"
  },
  {
    id: 4,
    title: "ToDo Application JDBC",
    description: "A JavaFX-based desktop application that provides a graphical user interface for users to manage and prioritize their tasks, featuring MySQL DB connectivity to maintain a persistent task list.",
    tags: ["Java", "Archived"],
    url: "https://www.youtube.com/watch?v=0ZspDM2Dcfc",
    image: "https://github.com/GudiVaraprasad/ToDo-Application-JDBC/raw/main/Results/banner.png"
  },
  {
    id: 5,
    title: "Operating Systems Algorithms",
    description: "Implemented fundamentals of OS - concurrency and control of asynchronous processes, deadlocks, memory management, processor and disk scheduling, parallel processing, and file system organization.",
    tags: ["Archived"],
    url: "https://github.com/GudiVaraprasad/Operating-Systems",
    image: "https://static-assets.codecademy.com/assets/course-landing-page/meta/1x1/fundamentals-of-operating-systems.jpg"
  },
  {
    id: 6,
    title: "IPL Matches Data Visualization",
    description: "This project performs data analysis and visualization on Indian Premier League (IPL) matches from 2008 to 2020 using Python libraries such as pandas, matplotlib, and seaborn",
    tags: ["Analytics", "Archived"],
    url: "https://gudivaraprasad.github.io/DataScience.py/Data_Analysis/IPL_Data_Visualization/",
    image: "https://cdn.thenewstack.io/media/2023/01/285d68dd-charts-1024x581.jpg"
  },
  {
    id: 7,
    title: "Secure Coding",
    description: "This repository focuses on understanding secure programming fundamentals, identifying and analyzing software security issues, and protecting against threats and vulnerabilities",
    tags: ["C++", "Archived"],
    url: "https://github.com/GudiVaraprasad/Security-Practices",
    image: "https://www.incredibuild.com/wp-content/uploads/2022/03/Top_10_Secure_C_Coding_Practices_800x533.jpg"
  },
  {
    id: 8,
    title: "Multiple Client Chatting Application using UDP",
    description: "A Java-based UDP chat application enabling real-time messaging between clients over a network.",
    tags: ["Java"],
    url: "https://youtu.be/feXKcuDqfiE?si=m3L7Y2phT58ocf1K",
    image: "https://github.com/GudiVaraprasad/Networking/raw/main/Programming%20Network%20Applications%20in%20Java%20-%20Practice/PROJECT%20-%20Chatting_App_UDP/image.png"
  },
  {
    id: 9,
    title: "Birthday Wishing Bot",
    description: "A PHP-based personal birthday reminder bot that uses SMTP to send email wishes, with features to add, view, and manage birthdays in a database.",
    tags: ["PHP"],
    url: "https://github.com/GudiVaraprasad/BIRTHDAY-BOOMERANG",
    image: "https://birthdayalarm.com/static/img/facebook_icon.png"
  },
  {
    id: 10,
    title: "Computer Graphics",
    description: "A repository containing JavaScript-based computer graphics algorithms and p5.js implementations.",
    tags: ["Javascript"],
    url: "https://github.com/GudiVaraprasad/ComputerGraphics",
    image: "https://i.ytimg.com/vi/7U0wQlDod60/maxresdefault.jpg"
  },
  {
    id: 11,
    title: "Hospital Management System",
    description: "Implemented fundamentals of OS - concurrency and control of asynchronous processes, deadlocks, memory management, processor and disk scheduling, parallel processing, and file system organization.",
    tags: ["PHP"],
    url: "https://github.com/GudiVaraprasad/Databases/tree/main/Hospital%20Management%20System",
    image: "https://github.com/GudiVaraprasad/Databases/raw/main/Hospital%20Management%20System/RequiredFiles/bg.png"
  },
  {
    id: 12,
    title: "Writing Board App",
    description: "A simple writing board implemented in p5.js, utilizing keyframes and mouse events for drawing functionality.",
    tags: ["Javascript"],
    url: "https://dev.to/varaprasad_gudi/create-your-own-virtual-board-p5-js-2a4o",
    image: "https://media2.dev.to/dynamic/image/width=1000,height=420,fit=cover,gravity=auto,format=auto/https%3A%2F%2Fdev-to-uploads.s3.amazonaws.com%2Fi%2Fpin2tu2i7i8c9jsj7pa3.png"
  },
  {
    id: 13,
    title: "Pendulum Lab Simulation",
    description: "A p5.js-based physics simulation visualizing pendulum motion alongside its direction field, illustrating the relationship between angular displacement and velocity.",
    tags: ["Javascript"],
    url: "https://gudivaraprasad.github.io/ComputerGraphics/p5js/My_Pendulum_Lab/index.html",
    image: "https://github.com/GudiVaraprasad/ComputerGraphics/raw/master/p5js/My_Pendulum_Lab/images/banner.jpg"
  },
  {
    id: 14,
    title: "Hack Against Hunger App",
    description: "A web application developed to combat hunger by facilitating food and monetary donations, reducing waste, and promoting food security using technologies like HTML, CSS, JavaScript, PHP, and MySQL.",
    tags: ["PHP"],
    url: "https://github.com/GudiVaraprasad/Technological-Business-Hackathon-2020",
    image: "https://github.com/GudiVaraprasad/Technological-Business-Hackathon-2020/raw/main/logo.jpg"
  },
  {
    id: 15,
    title: "Android Weather App",
    description: "An Android app that utilizes a Weather API to provide real-time weather details for the user's current location via GPS and allows searching for weather conditions in other cities.",
    tags: ["Java"],
    url: "https://gudivaraprasad.github.io/Android-Weather-App/APK/",
    image: "https://github.com/GudiVaraprasad/Android-Weather-App/raw/main/APK/img/background.jpg"
  },
  {
    id: 16,
    title: "Wine Quality Prediction",
    description: "An ML model for wine quality prediction using a dataset of 1600 records with 12 attributes, analyzed with several algorithms and decision making.",
    tags: ["Data Science"],
    url: "https://github.com/GudiVaraprasad/Machine-Learning/blob/main/ML_Algo/MiniProject/Machine_Learning_Project.ipynb",
    image: "https://github.com/GudiVaraprasad/Machine-Learning/raw/main/ML_Algo/MiniProject/cover.jpeg"
  },
  {
    id: 17,
    title: "Machine Learning Algorithms",
    description: "A repository containing various machine learning algorithms and mini-projects implemented to understand and master different ML concepts.",
    tags: ["Data Science"],
    url: "https://github.com/GudiVaraprasad/Machine-Learning/tree/main/ML_Algo",
    image: "https://github.com/GudiVaraprasad/Machine-Learning/raw/main/ML_Algo/bg.jpg"
  },
  {
    id: 18,
    title: "reCALL - A Secured Self Manager",
    description: "An AWS cloud-based app for note-taking and password management, enabling Create, Read, Update, and Delete operations for free-form information.",
    tags: ["PHP"],
    url: "https://youtu.be/c3IahwMJ53s?si=TuK2YNyJc-Wc_tws",
    image: "https://miro.medium.com/v2/resize:fit:1400/1*VRp9TYSbKCCag94Vv8vuxg.png"
  },
  {
    id: 19,
    title: "Online Billing Software",
    description: "A PHP-based web billing software designed to streamline invoice generation and management for enterprises, reducing paperwork and manual effort while offering secure user authentication, product management, and summary reports.",
    tags: ["PHP"],
    url: "http://bill-book.epizy.com/login.php",
    image: "https://media2.dev.to/dynamic/image/width=1000,height=420,fit=cover,gravity=auto,format=auto/https%3A%2F%2Fdev-to-uploads.s3.amazonaws.com%2Fuploads%2Farticles%2Fmqeftruwccnbrppgqv5s.png"
  },
  {
    id: 20,
    title: "Information Theory Algorithms",
    description: "Implemented various information theory algorithms",
    tags: ["Archived"],
    url: "https://github.com/GudiVaraprasad/Information-Theory",
    image: "https://github.com/GudiVaraprasad/Information-Theory/raw/main/bg.jpg"
  },
  {
    id: 21,
    title: "GiftStore - an eCommerce app",
    description: "A PHP-based e-commerce platform designed for gift stores, featuring product management, shopping cart functionality, and secure user authentication.",
    tags: ["PHP"],
    url: "https://github.com/GudiVaraprasad/GiftStore-eCommerce",
    image: "https://theonetechnologies.com/images/portfolio/ecommerce-web-app-for-customized-gifts.webp"
  },
  {
    id: 22,
    title: "Fuzzy Traffic Control System",
    description: "An intelligent traffic signal control system utilizing fuzzy logic to optimize traffic flow at intersections, reducing congestion and improving overall traffic management efficiency.",
    tags: ["Python"],
    url: "https://github.com/GudiVaraprasad/traffic-control-fuzzy",
    image: "https://github.com/GudiVaraprasad/traffic-control-fuzzy/raw/main/Files/bg.png"
  },
  {
    id: 23,
    title: "Dining Commons Staff Management System",
    description: "A PHP-based software solution aimed at automating and optimizing the task assignment process for dining commons staff in a highly efficient manner.",
    tags: ["PHP"],
    url: "https://github.com/GudiVaraprasad/Project-DCSMS",
    image: "https://www.chanty.com/blog/wp-content/uploads/2020/10/Task-manager-apps-scaled.jpg"
  },
  {
    id: 24,
    title: "Autonomous Driving Safety Predictor",
    description: "A robust ML model using XGBoost and time-series forecasting to predict safety-critical scenarios in autonomous driving",
    tags: ["Data Science"],
    url: "https://github.com/GudiVaraprasad/Autonomous-Driving-Safety-Predictor",
    image: "https://www.labellerr.com/blog/content/images/2024/01/Collision-Avoidance-System.webp"
  },
  {
    id: 25,
    title: "Personalized News Categorization",
    description: "A personalized news categorization system leveraging RAG and LLMs to classify articles into 15 categories based on user profiles for improved relevance and accuracy.",
    tags: ["AI/ML"],
    url: "https://github.com/GudiVaraprasad/Personalized-News-Categorization",
    image: "https://pbs.twimg.com/media/FukvFqPXwAcRDva.png"
  },
  {
    id: 26,
    title: "Text to 3DScene",
    description: "An innovative framework designed to generate compositional 3D scenes from textual descriptions and GPT-4.",
    tags: ["AI/ML"],
    url: "https://github.com/GudiVaraprasad/Text-to-3DScene",
    image: "https://github.com/GudiVaraprasad/Text-to-3DScene/raw/main/Results/model_pipeline.jpg"
  },
  {
    id: 27,
    title: "Robust LLMs for OOD",
    description: "This study investigates multiple strategies with fine-tuned and pre-trained language models to evaluate and improve their robustness to out-of-distribution (OOD) data.",
    tags: ["AI/ML"],
    url: "https://github.com/GudiVaraprasad/Robust-LLMs-for-OOD",
    image: "https://arxiv.org/html/2409.01980v1/x1.png"
  },
  {
    id: 28,
    title: "Peer to Peer Marketplace",
    description: "This project simulates a decentralized peer-to-peer (P2P) marketplace where buyers and sellers trade goods directly through distributed nodes.",
    tags: ["Python"],
    url: "https://github.com/GudiVaraprasad/P2P-BuySell",
    image: "https://github.com/GudiVaraprasad/P2P-BuySell/raw/main/image.png"
  },
  {
    id: 29,
    title: "ResuMailer",
    description: "A Streamlit app that generates personalized cold emails by analyzing resumes and job descriptions, making job applications smarter and more efficient.",
    tags: ["AI/ML"],
    url: "https://github.com/GudiVaraprasad/ResuMailer",
    image: "https://www.abstraktmg.com/wp-content/uploads/2024/05/image-1-1.png"
  },
  {
    id: 30,
    title: "Fix Tracker",
    description: "A full-stack, production-grade issue tracker built with Next.js, Tailwind, Radix UI, Prisma, and MySQL",
    tags: ["Javascript"],
    url: "https://github.com/GudiVaraprasad/fix-tracker",
    image: "https://www.projectcubicle.com/wp-content/uploads/2023/08/bug-tracking-1.png"
  }
];
