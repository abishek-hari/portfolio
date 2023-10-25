import classImg from "./assets/class.jpg";
import PhoneImg from "./assets/phone.jpg";
import roadImg from "./assets/road.jpg";

export const links = [
  { id: 1, href: "#skills", text: "skills" },
  { id: 2, href: "#work", text: "work" },
  { id: 3, href: "#collab", text: "collab" },
];

export const projects = [
  {
    id: 1,
    img: PhoneImg,
    title: "Zeden",
    desc: "Zeden is an ecommerce website I developed, focusing on the furniture market and  designed it to be super user-friendly with a clean and easy-to-navigate layout",
  },
  {
    id: 2,
    img: classImg,
    title: "Fitzen",
    desc: "Fitzen is a website dedicated to exercise and fitness. It's a place to learn about various exercises and workouts. The unique feature of Fitzen is that it provides step-by-step procedures for each exercise, making it easy for users.",
  },
  {
    id: 3,
    img: roadImg,
    title: "Tasktrack",
    desc: "TaskTrack is a task management website where Users can create, organize, and track their tasks in a visually intuitive way.And users can easily drag and drop them to show their progress or mark them as completed.",
  },
];

export const singleProject = [
  {
    id: 1,
    img: PhoneImg,
    title: "Zeden",
    description:
      "Zeden is an ecommerce website I developed, focusing on the furniture market.It's like an online furniture store where you can shop for sofas, beds, and other home furnishings.I designed it to be super user-friendly with a clean and easy-to-navigate layout",
    project__goal_title: "Project Purpose And Goal",
    project__goal_desc:
      "The primary goal of Zeden was to design and build a responsive e-commerce website that provides a seamless shopping experience.I aimed to create an intuitive platform where users could explore a wide variety of furniture options. The project's purpose was to develop a real-world application that applies front-end technologies to solve user-centric challenges.",
    project__webstack__title: "Web Stack and Explanation",
    project__webstack__desc:
      "For the tech side of things, I used some modern tools to make Zeden work smoothly: React: React was the core library for creating dynamic and interactive user interfaces. It allowed for component-based development, ensuring a modular and maintainable codebase.Redux Toolkit: Redux Toolkit was used for state management, enabling the application to maintain consistent data and user interactions.It provided a clear structure for handling application data and user interactions.Tailwind CSS: Tailwind CSS was chosen for styling to ensure a responsive, visually appealing design.It allowed for efficient customization of the user interface and responsiveness on various screen sizes.",
    project__lesson_title: "Lessons Learned:",
    project__lesson_desc:
      "While working on Zeden, I learned a lot about  development and design. It improved my skills in building user-friendly websites. I became proficient in React and Redux Toolkit, which are important for creating interactive web applications. And by using Tailwind CSS, I got better at making websites look visually appealing and consistent.",
  },
  {
    id: 2,
    img: classImg,
    title: "Fitzen",
    description:
      "Fitzen is a website dedicated to exercise and fitness. It's a place to learn about various exercises and workouts. The unique feature of Fitzen is that it provides step-by-step procedures for each exercise, making it easy for users to follow along and get the most out of their workouts.",
    project__goal_title: "Project Purpose And Goal",
    project__goal_desc:
      "The primary aim of Fitzen is to make fitness accessible to everyone. I wanted to create a platform where people, regardless of their fitness level, could find detailed instructions for exercises, making it simple to get started or advance in their fitness journey. The goal is to empower users with the knowledge they need to maintain a healthy lifestyle.",
    project__webstack__title: "Web Stack and Explanation",
    project__webstack__desc:
      "For the tech side of things, I employed the following technologies to ensure a user-friendly and informative experience: React: React was the core library for creating dynamic and interactive user interfaces. It allowed for component-based development, ensuring a modular and maintainable codebase.Redux Toolkit: Redux Toolkit was used for state management, enabling the application to maintain consistent data and user interactions.It provided a clear structure for handling application data and user interactions.Tailwind CSS: Tailwind CSS was chosen for styling to ensure a responsive, visually appealing design.It allowed for efficient customization of the user interface and responsiveness on various screen sizes.",
    project__lesson_title: "Lessons Learned:",
    project__lesson_desc:
      "During the development of Fitzen, I gained valuable insights into user experience and the importance of providing clear and concise information.I also learned to work with React effectively, improving my skills in creating informative and interactive web applications, which will be valuable for future projects.",
  },
  {
    id: 3,
    img: roadImg,
    title: "Tasktrack",
    description:
      "TaskTrack is a task management website that's inspired by popular tools like Trello and Jira. Users can create, organize, and track their tasks in a visually intuitive way. The main feature of TaskTrack is its task boards, where tasks are categorized into columns, and users can easily drag and drop them to show their progress or mark them as completed.",
    project__goal_title: "Project Purpose And Goal",
    project__goal_desc:
      "The main goal of TaskTrack was to provide a flexible and user-friendly task management solution. It is a platform where users could effortlessly organize their tasks, set priorities, and track progress, all in one place. TaskTrack is designed to enhance productivity and collaboration by offering a clear and structured way to manage tasks.",
    project__webstack__title: "Web Stack and Explanation",
    project__webstack__desc:
      "For TaskTrack, I used the following technologies to create a smooth and visually appealing experience: React: React was the core library for creating dynamic and interactive user interfaces. It allowed for component-based development, ensuring a modular and maintainable codebase.Redux Toolkit: Redux Toolkit was used for state management, enabling the application to maintain consistent data and user interactions.It provided a clear structure for handling application data and user interactions.Tailwind CSS: Tailwind CSS was chosen for styling to ensure a responsive, visually appealing design.It allowed for efficient customization of the user interface and responsiveness on various screen sizes.",
    project__lesson_title: "Lessons Learned:",
    project__lesson_desc:
      "During the development of FitGuide, I gained valuable insights into user experience.I gained insights into how to design an intuitive and efficient platform for users to manage their tasks effectively.I also learned to work with React effectively, improving my skills in creating informative and interactive web applications",
  },
];
