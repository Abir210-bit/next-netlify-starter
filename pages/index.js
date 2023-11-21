// pages/index.js
import Head from 'next/head';
import Header from '@components/Header';
import Footer from '@components/Footer';

export default function Home() {
  return  (
    <div>
      <header>
        <h1>Your Name</h1>
        <p>Job Title</p>
      </header>
      
      <section>
        <h2>Contact Information</h2>
        <p>Email: your.email@example.com</p>
        <p>Phone: (123) 456-7890</p>
        <p>LinkedIn: linkedin.com/in/yourprofile</p>
        {/* Add more contact information as needed */}
      </section>

      <section>
        <h2>Summary</h2>
        <p>
          A brief summary of your professional background, skills, and goals.
        </p>
      </section>

      <section>
        <h2>Education</h2>
        <p>
          <strong>University Name</strong> - Degree, Graduation Year
        </p>
        {/* Add more education details as needed */}
      </section>

      <section>
        <h2>Experience</h2>
        <p>
          <strong>Job Title</strong> - Company Name, Duration
        </p>
        <p>
          Description of responsibilities and achievements in this role.
        </p>
        {/* Add more experience details as needed */}
      </section>

      {/* Add more sections for skills, projects, certifications, etc. as needed */}

      <footer>
        <p>References available upon request</p>
      </footer>
    </div>
  );
};
