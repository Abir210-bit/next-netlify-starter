// pages/index.js
import Head from 'next/head';
import Header from '@components/Header';
import Footer from '@components/Footer';

export default function Home() {
  return (
    <div className="container">
      <Head>
        <title>Your CV - Next.js</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main>
        <Header title="Your Name - Curriculum Vitae" />

        <section>
          <h2>Personal Information</h2>
          <p>Name: Your Name</p>
          <p>Email: your.email@example.com</p>
          {/* Add more personal information as needed */}
        </section>

        <section>
          <h2>Education</h2>
          <p>Degree in Computer Science - University Name, Year</p>
          {/* Add more education details as needed */}
        </section>

        <section>
          <h2>Work Experience</h2>
          <p>Software Developer - Company Name, Year</p>
          {/* Add more work experience details as needed */}
        </section>

        <section>
          <h2>Skills</h2>
          <ul>
            <li>JavaScript</li>
            <li>React.js</li>
            {/* Add more skills as needed */}
          </ul>
        </section>

        <section>
          <h2>Languages</h2>
          <p>English - Fluent</p>
          <p>French - Intermediate</p>
          {/* Add more language details as needed */}
        </section>
      </main>

      <Footer />
    </div>
  );
}
