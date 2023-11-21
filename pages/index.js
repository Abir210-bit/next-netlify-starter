// pages/index.js
import Head from 'next/head';
import Header from '@components/Header';
import Footer from '@components/Footer';

export default function Home() {
  return (
    <div className="container">
      <Head>
        <title>Marghni Abir - Curriculum Vitae 2</title>
      </Head>

      <Header title="Marghni Abir - Curriculum Vitae" />

      <main style={{ display: 'flex', flexDirection: 'column', alignItems: 'center' }}>
        <article style={{ textAlign: 'left', maxWidth: '600px', margin: '20px 0' }}>
          <h2>Personal Information</h2>
          <p>Name: Abir</p>
          <p>Email: marghniabir5@gmail.com</p>
          <p>Tel: 20881568</p>
        </article>

        <article style={{ textAlign: 'left', maxWidth: '600px', margin: '20px 0' }}>
          <h2>Education</h2>
          <p>Degree in Computer Science - University Name, Year</p>
        </article>

        <article style={{ textAlign: 'left', maxWidth: '600px', margin: '20px 0' }}>
          <h2>Work Experience</h2>
          <p>Software Developer - Next Step, 2021</p>
          <p>Software Developer - SIRAT, 2020</p>
        </article>

        <article style={{ textAlign: 'left', maxWidth: '600px', margin: '20px 0' }}>
          <h2>Skills</h2>
          <ul>
            <li>JavaScript</li>
            <li>React.js</li>
            <li>PHP</li>
          </ul>
        </article>

        <article style={{ textAlign: 'left', maxWidth: '600px', margin: '20px 0' }}>
          <h2>Languages</h2>
          <p>English - Fluent</p>
          <p>French - Intermediate</p>
        </article>
      </main>

      <Footer />
    </div>
  );
}
