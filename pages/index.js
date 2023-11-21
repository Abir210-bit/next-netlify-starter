// pages/index.js
import Head from 'next/head';
import Header from '@components/Header';
import Footer from '@components/Footer';

export default function Home() {
  return (
    <div style={{ maxWidth: '600px', margin: '0 auto', padding: '20px' }}>
      <header>
        <h1>Marghni Abir</h1>
        <p>Développeur Web</p>
      </header>

      <section>
        <h2>Informations</h2>
        <p>Email: marghniabir5@gmail.com</p>
        <p>Phone: 20881568</p>
        <p>LinkedIn: linkedin.com/in/abirmarghni</p>
      </section>

      <section>
        <h2>Etudes</h2>
        <p>
          <strong>Université Virtuelle de Tunis (UVT)</strong> 13 Rue Ibn Nadim, Montplaisir, Tunis Cité Monplaisir, 1073
        </p>
        <p>Ingenierie de logiciel open source</p>
        {/* Add more education details as needed */}
      </section>

      <section>
        <h2>Experience</h2>
        <p>
          <strong>Developpeur PHP</strong> - NEXT STEP IT, Tunis
        </p>
        <p>
          - Identifier, comprendre et analyser les besoins spécifiques d’un client potentiel <br />
          - Concevoir et la programmation d’un site internet, d’un module ou d’un développement spécifique <br />
          - La capacité à élaborer plusieurs tests de vérification <br />
          - Corriger des bugs.
        </p>
        {/* Add more experience details as needed */}
      </section>

      <section>
        <h2>Compétences</h2>
        <p> <strong>PHP</strong> </p>
        <p> <strong>Odoo</strong> </p>
        {/* Add more skills details as needed */}
      </section>

      <footer>
        <p>References available upon request</p>
      </footer>
    </div>
  );
};
