// pages/index.js
import Head from 'next/head';
import Header from '@components/Header';
import Footer from '@components/Footer';

export default function Home() {
  return (
    <div className="container">
      <Head>
        <title>MY CV </title>
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main style={mainStyle}>
        <Header title="Marghni Abir - Curriculum Vitae" style={headerStyle} />

        <section style={sectionStyle}>
          <h2 style={header2Style}>Personal Information</h2>
          <p style={infoStyle}>Name: Abir</p>
          <p style={infoStyle}>Email: marghniabir5@gmail.com</p>
          <p style={infoStyle}>Tel: 20881568</p>
          {/* Add more personal information as needed */}
        </section>

        <section style={sectionStyle}>
          <h2 style={header2Style}>Education</h2>
          <p style={infoStyle}>Degree in Computer Science - University Name, Year</p>
          {/* Add more education details as needed */}
        </section>

        <section style={sectionStyle}>
          <h2 style={header2Style}>Work Experience</h2>
          <p style={infoStyle}>Software Developer - Next Step, 2021</p>
          <p style={infoStyle}>Software Developer - SIRAT, 2020</p>
          {/* Add more work experience details as needed */}
        </section>

        <section style={sectionStyle}>
          <h2 style={header2Style}>Skills</h2>
          <ul style={listStyle}>
            <li style={infoStyle}>JavaScript</li>
            <li style={infoStyle}>React.js</li>
            <li style={infoStyle}>PHP</li>
            {/* Add more skills as needed */}
          </ul>
        </section>

        <section style={sectionStyle}>
          <h2 style={header2Style}>Languages</h2>
          <p style={infoStyle}>English - Fluent</p>
          <p style={infoStyle}>French - Intermediate</p>
          {/* Add more language details as needed */}
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
