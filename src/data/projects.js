/**
 * Project Data
 * Contains all project information
 */

const ProjectData = {
  'duckycart': {
    title: 'Smart Cart Management System',
    category: 'FastAPI, SQLAlchemy ORM, WebSockets',
    description: `
      <p>A comprehensive smart retail solution built with FastAPI that transforms physical shopping carts into connected devices for enhanced in-store experiences.</p>
      <p>Key Features:</p>
      <ul style="list-style-type: disc; margin-left: 1.5em; padding-left: 1em;">
        <li>Integration with physical shopping carts and mobile devices for seamless retail interaction</li>
        <li>Real-time WebSocket communication for instant cart updates (~200ms latency)</li>
        <li>Advanced payment processing allowing checkout directly from the smart cart</li>
        <li>Mobile companion app for scanning products and managing shopping lists</li>
        <li>JWT-based session authentication with QR code for cart-phone pairing</li>
        <li>Asynchronous programming with Python's async/await for responsive user experience</li>
      </ul>
    `,
    imgSrc: '/assets/images/duckycart.png',
    link: 'https://github.com/Smart-Cart-System/backend-fastapi'
  },
  'en2ly': {
    title: 'En2ly',
    category: 'Flutter, Firebase, OpenStreetMap',
    description: `
        <p><strong>A ride-hailing platform with passenger app, enabling real-time ride requests and live trip tracking.</strong></p>
        <br>
        <p><strong>Features:</strong></p>
        <ul style="list-style-type: disc; margin-left: 1.5em; padding-left: 1em;">
          <li>Real-time location tracking and ride matching</li>
          <li>OpenStreetMap integration for navigation</li>
          <li>Reduced API costs by 80%</li>
          <li>User authentication with secure login</li>
          <li>Payment processing for seamless transactions</li>
        </ul>
    `,
    imgSrc: '/assets/images/En2ly.png',
    link: 'https://github.com/Zafaranii/En2ly'
  },
  'en2lydriver': {
    title: 'En2ly Driver',
    category: 'Flutter, Firebase, OpenStreetMap',
    description: `
      <p>The driver-side companion app to En2ly, enabling drivers to accept ride requests and navigate to passengers.</p>
      <p>Features:</p>
      <ul style="list-style-type: disc; margin-left: 1.5em; padding-left: 1em;">
        <li>Driver status management (online/offline/busy)</li>
        <li>Turn-by-turn navigation using OpenStreetMap</li>
        <li>Real-time earnings tracking and trip history</li>
      </ul>
    `,
    imgSrc: '/assets/images/En2lyDriver.png',
    link: 'https://github.com/Zafaranii/En2lyDriver'
  },
  'inventorysystem': {
    title: 'Inventory Management System',
    category: 'Spring Boot, PostgreSQL',
    description: `
      <p><strong>A full-stack inventory management system providing real-time tracking and streamlined processes.</strong></p>
      <br>
      <p><strong>Features:</strong></p>
      <ul style="list-style-type: disc; margin-left: 1.5em; padding-left: 1em;">
        <li>Java Spring Boot backend with RESTful APIs for inventory operations</li>
        <li>PostgreSQL database for efficient data storage and retrieval</li>
        <li>Real-time inventory tracking and notifications</li>
        <li>Implemented OOP principles: encapsulation, inheritance, and composition</li>
        <li>Maven framework for dependency management and build lifecycle</li>
      </ul>
    `,
    imgSrc: '/assets/images/ims.png',
    link: 'https://github.com/Zafaranii/inventory-management'
  },
  'schoolsystem': {
    title: 'School Management System',
    category: 'ASP.NET Core MVC, Entity Framework',
    description: `
      <p><strong>A comprehensive school management system handling administrative workflows for educational institutions.</strong></p>
      <br>
      <p><strong>Features:</strong></p>
      <ul style="list-style-type: disc; margin-left: 1.5em; padding-left: 1em;">
        <li>Built with ASP.NET Core MVC architecture for scalable web applications</li>
        <li>Entity Framework and LINQ for efficient data management</li>
        <li>Responsive frontend using HTML/CSS, JavaScript, and Bootstrap</li>
        <li>Role-based authentication for administrators, teachers, and students</li>
        <li>CRUD operations for courses, enrollments, and user management</li>
      </ul>
    `,
    imgSrc: '/assets/images/swp.png',
    link: 'https://github.com/Zafaranii/school-management'
  },
  'plantwateringsystem': {
    title: 'Automatic Plant Watering System',
    category: 'ESP32, PIC16F877A, IoT',
    description: `
      <p><strong>An IoT-based automatic plant watering system that monitors soil moisture and waters plants as needed.</strong></p>
      <br>
      <p><strong>Features:</strong></p>
      <ul style="list-style-type: disc; margin-left: 1.5em; padding-left: 1em;">
        <li>ESP32 microcontroller for Wi-Fi connectivity</li>
        <li>Soil moisture sensor for real-time monitoring</li>
        <li>Automated watering system with pump control</li>
        <li>Mobile app for monitoring and control</li>
        <li>Data logging and analytics for plant care</li>
      </ul>
    `,
    imgSrc: '/assets/images/plant.jpeg',
    link: 'https://github.com/Zafaranii/Automatic-Plant-Watering-System'
  },
  'ballbeampid': {
    title: 'Ball Beam PID Controller',
    category: 'Arduino Uno, PID Control, Embedded Systems',
    description: `
      <p><strong>An Arduino Uno-based control system for a Ball & Beam setup that demonstrates precision PID control.</strong></p>
      <br>
      <p><strong>Features:</strong></p>
      <ul style="list-style-type: disc; margin-left: 1.5em; padding-left: 1em;">
        <li>PID controller implementation for maintaining ball position</li>
        <li>Utilizes a servo motor for beam movement</li>
        <li>Incorporates an ultrasonic sensor for ball position detection</li>
        <li>Designed on a breadboard setup for easy replication and experimentation</li>
        <li>Real-time position feedback and control loop optimization</li>
      </ul>
    `,
    imgSrc: '/assets/images/ballAndbeam.png',
    link: 'https://github.com/Zafaranii/Ball-Beam-PID-Controller'
  }
};