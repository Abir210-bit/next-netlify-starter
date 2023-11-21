// pages/index.js
import Head from 'next/head';
import Header from '@components/Header';
import Footer from '@components/Footer';

export default function Home() {
  return (
    <div className="container">
      <main style={styles.main}>
        <Header title="Marghni Abir - Curriculum Vitae" style={styles.header} />

        <section style={styles.section}>
          <h2 style={styles.header2}>Personal Information</h2>
          <p style={styles.info}>Name: Abir</p>
          <p style={styles.info}>Email: marghniabir5@gmail.com</p>
          <p style={styles.info}>Tel: 20881568</p>
        </section>

        <section style={styles.section}>
          <h2 style={styles.header2}>Education</h2>
          <p style={styles.info}>Degree in Computer Science - University Name, Year</p>
        </section>

        <section style={styles.section}>
          <h2 style={styles.header2}>Work Experience</h2>
          <p style={styles.info}>Software Developer - Next Step, 2021</p>
          <p style={styles.info}>Software Developer - SIRAT, 2020</p>
        </section>

        <section style={styles.section}>
          <h2 style={styles.header2}>Skills</h2>
          <ul style={styles.list}>
            <li style={styles.info}>JavaScript</li>
            <li style={styles.info}>React.js</li>
            <li style={styles.info}>PHP</li>
          </ul>
        </section>

        <section style={styles.section}>
          <h2 style={styles.header2}>Languages</h2>
          <p style={styles.info}>English - Fluent</p>
          <p style={styles.info}>French - Intermediate</p>
        </section>
      </main>

      <Footer />
    </div>
  );
}

// Styles
const mainStyle = {
  padding: '20px',
};

const headerStyle = {
  backgroundColor: '#333',
  color: '#fff',
  padding: '10px',
  textAlign: 'center',
};

const sectionStyle = {
  margin: '20px 0',
  padding: '10px',
  border: '1px solid #ddd',
  borderRadius: '5px',
};

const header2Style = {
  color: '#333',
};

const infoStyle = {
  color: '#555',
};

const listStyle = {
  listStyleType: 'none',
  padding: 0,
  margin: 0,
};
