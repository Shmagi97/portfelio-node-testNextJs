"use client";

import Submit from "./submit";
import styles from "./page.module.css";

function Home() {
  return (
    <main className={styles.main}>
      <Submit />
    </main>
  );
}

export default Home;

// import styles from "./page.module.css";

// import fs from "fs";

// // pages/my-page.js

// export async function getServerSideProps() {
//   const htmlString = fs.readFileSync("output.html", "utf8");

//   return {
//     props: {
//       htmlContent: htmlString,
//     },
//   };
// }

// export default function MyPage({ htmlContent }) {
//   return <div dangerouslySetInnerHTML={{ __html: htmlContent }} />;
// }

// function Home() {
// const res = fetch("http://localhost:3001/api/content");
// const expressContent = res.text();
// console.log("Express Content:", expressContent);

//   const expressContent = "<p>Static HTML Content</p>";
//   const markup = { __html: expressContent };
//   console.log(markup);
//   return (
//     <main className={styles.main}>
//       <h1>hello next.js</h1>
//       <div dangerouslySetInnerHTML={markup} />
//     </main>
//   );
// }

// Home.getInitialProps = async () => {
//   const expressContent = "<p>Static HTML Content</p>";
//   console.log(expressContent);
//   return { expressContent };
// };

// Home.getInitialProps = async () => {
//   try {
//     const res = await fetch("http://localhost:3001/api/content");
//     const expressContent = await res.text();
//     // console.log("Express Content:", expressContent);
//     return { expressContent };
//   } catch (error) {
//     // console.error("Error fetching data:", error);
//     return { expressContent: "" }; // Provide a default value or handle the error as needed
//   }
// };

// export default Home;

// import React from "react";

// import styles from "./page.module.css";

// // Function to fetch HTML content from the Express API
// const fetchHTMLContent = async () => {
//   try {
//     const res = await fetch("http://localhost:3001/api/content");
//     console.log(res);
//     const expressContent = await res.text();
//     return { __html: expressContent };
//   } catch (error) {
//     console.error("Error fetching data:", error);
//     return { __html: "" }; // Provide a default value or handle the error as needed
//   }
// };

// // React component
// const Home = ({ expressContent }) => {
//   const markup = { __html: expressContent };
//   return (
//     <main className={styles.main}>
//       <h1>hello next.js</h1>
//       <div dangerouslySetInnerHTML={markup} />
//     </main>
//   );
// };

// // Fetch HTML content during server-side rendering
// Home.getInitialProps = async () => {
//   const expressContent = await fetchHTMLContent();
//   return { expressContent: expressContent.__html };
// };

// export default Home;
