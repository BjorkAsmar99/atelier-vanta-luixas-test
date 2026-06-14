import { StrictMode, useState } from 'react';
import { createRoot } from 'react-dom/client';
import './styles.css';

const audience = ['Architectes d\'intérieur', 'Designers', 'Consultants premium', 'Marques exigeantes'];

const problems = [
  {
    label: 'Portfolio silencieux',
    text: 'De belles images, mais aucun fil clair pour comprendre votre valeur.'
  },
  {
    label: 'Message flou',
    text: 'Le visiteur devine votre positionnement au lieu de le ressentir vite.'
  },
  {
    label: 'Esthétique sans parcours',
    text: 'Le site impressionne, puis laisse l\'intention commerciale se perdre.'
  },
  {
    label: 'Formulaire générique',
    text: 'Toutes les demandes entrent pareil, même les projets qui ne conviennent pas.'
  }
];

const steps = [
  ['Diagnostic', 'Lecture de l\'offre, des preuves, du public et des points de friction qui bloquent la demande.'],
  ['Direction', 'Architecture de page, angle éditorial, système visuel et priorités de conversion.'],
  ['Prototype', 'Expérience responsive exploitable pour valider rythme, hiérarchie, interactions et contenus.'],
  ['Production accompagnée', 'Handoff clair pour construire sans diluer la direction ni surcharger le front.']
];

const offers = [
  {
    title: 'Premium Landing',
    for: 'Pour lancer ou repositionner une offre precise.',
    deliverables: 'Direction UX/UI, landing responsive, formulaire qualifiant.',
    duration: '2 à 3 semaines',
    involvement: 'Ateliers courts, décisions rapides.'
  },
  {
    title: 'Signature Website',
    for: 'Pour installer une presence complete et differenciante.',
    deliverables: 'Structure multi-sections, système visuel, pages essentielles.',
    duration: '4 à 6 semaines',
    involvement: 'Collaboration proche sur l\'offre et les preuves.'
  },
  {
    title: 'Conversion Rework',
    for: 'Pour corriger un site élégant qui ne qualifie pas assez.',
    deliverables: 'Audit, nouvelle hiérarchie, parcours, CTA et microcopy.',
    duration: '10 à 15 jours',
    involvement: 'Accès aux données, contenus et retours commerciaux.'
  }
];

const proofs = [
  ['Studio d\'architecture intérieure', 'Transformer un book visuel en parcours de confiance.', 'Moins d\'hésitation avant la prise de contact.'],
  ['Consultant haut de gamme', 'Clarifier expertise, méthode et critères d\'engagement.', 'Des demandes mieux cadrées dès le premier message.'],
  ['Marque artisanale premium', 'Passer d\'une vitrine descriptive à un univers commercial lisible.', 'Un positionnement plus mémorisable sans perdre la sobriété.']
];

const qualification = [
  'Vous avez une ambition claire, pas seulement une envie de refaire le site.',
  'Votre difference merite mieux qu\'un template poli.',
  'Vous pouvez investir dans une présence qui filtre autant qu\'elle séduit.',
  'Vous voulez collaborer sur le fond: offre, preuves, langage, parcours.'
];

function ConsultationForm() {
  const [status, setStatus] = useState('idle');

  function handleSubmit(event) {
    event.preventDefault();
    setStatus('loading');
    window.setTimeout(() => setStatus('success'), 850);
  }

  return (
    <form className="consultation-form" onSubmit={handleSubmit}>
      <div className="field-grid">
        <label>
          Nom
          <input name="name" autoComplete="name" required />
        </label>
        <label>
          Email
          <input name="email" type="email" autoComplete="email" required />
        </label>
      </div>
      <label>
        Type d'activité
        <select name="activity" required defaultValue="">
          <option value="" disabled>Sélectionner</option>
          <option>Architecture intérieure / design</option>
          <option>Conseil premium</option>
          <option>Marque ou studio independant</option>
          <option>Autre activité exigeante</option>
        </select>
      </label>
      <div className="field-grid">
        <label>
          Budget indicatif
          <select name="budget" required defaultValue="">
            <option value="" disabled>Sélectionner</option>
            <option>3k - 6k EUR</option>
            <option>6k - 12k EUR</option>
            <option>12k EUR et plus</option>
          </select>
        </label>
        <label>
          Timing
          <select name="timing" required defaultValue="">
            <option value="" disabled>Sélectionner</option>
            <option>Ce mois-ci</option>
            <option>1 à 3 mois</option>
            <option>Exploration</option>
          </select>
        </label>
      </div>
      <label>
        Site actuel, si disponible
        <input name="website" type="url" placeholder="https://" />
      </label>
      <label>
        Qu'est-ce qui doit changer ?
        <textarea name="change" rows="5" required />
      </label>
      <button className="button primary form-button" type="submit" disabled={status === 'loading'}>
        {status === 'loading' ? 'Envoi en cours...' : status === 'success' ? 'Projet reçu' : 'Présenter votre projet'}
      </button>
      <p className="form-note" aria-live="polite">
        {status === 'success'
          ? 'Merci. Simulation terminée: aucun message externe n\'a été envoyé.'
          : 'Réponse sous 48h ouvrables. Pas d\'appel forcé, sélection mutuelle.'}
      </p>
    </form>
  );
}

function App() {
  return (
    <>
      <header className="site-header">
        <a className="brand" href="#top" aria-label="Atelier Vanta accueil">
          <span>Atelier</span><strong>Vanta</strong>
        </a>
        <nav aria-label="Navigation principale">
          <a href="#approche">Approche</a>
          <a href="#offres">Offres</a>
          <a href="#consultation">Consultation</a>
        </nav>
        <a className="button ghost header-cta" href="#consultation">Demander une consultation</a>
      </header>

      <main id="top">
        <section className="hero section">
          <div className="hero-copy">
            <p className="eyebrow">Studio web premium pour independants exigeants</p>
            <h1>Sites distinctifs pour marques premium qui refusent le générique.</h1>
            <p className="hero-text">
              Atelier Vanta transforme une expertise exigeante en site mémorable, crédible et capable de générer des demandes qualifiées.
            </p>
            <div className="hero-actions">
              <a className="button primary" href="#consultation">Demander une consultation</a>
              <a className="text-link" href="#approche">Voir l'approche</a>
            </div>
          </div>
          <div className="hero-art" aria-hidden="true">
            <div className="frame frame-main">
              <span className="rule rule-top"></span>
              <span className="rule rule-left"></span>
              <div className="mock-header"></div>
              <div className="mock-title"></div>
              <div className="mock-lines"></div>
              <div className="mock-cta"></div>
            </div>
            <div className="frame frame-note">
              <span>message</span>
              <strong>preuve</strong>
              <em>cta</em>
            </div>
            <div className="material-swatch"></div>
          </div>
        </section>

        <section className="positioning band">
          <p>{audience.join(' / ')}</p>
          <div className="signal-row" aria-label="Promesses principales">
            <span>Memorable</span>
            <span>Credible</span>
            <span>Oriente conversion</span>
          </div>
        </section>

        <section className="section split" id="probleme">
          <div>
            <p className="eyebrow">Le probleme</p>
            <h2>Votre site peut etre elegant et pourtant ne pas vendre.</h2>
          </div>
          <div className="problem-list">
            {problems.map((item) => (
              <article className="lined-item" key={item.label}>
                <h3>{item.label}</h3>
                <p>{item.text}</p>
              </article>
            ))}
          </div>
        </section>

        <section className="section method" id="approche">
          <div className="section-heading">
            <p className="eyebrow">Approche</p>
            <h2>Un atelier de direction, pas une fabrique de pages.</h2>
          </div>
          <div className="step-plan">
            {steps.map(([title, text], index) => (
              <article className="step" key={title}>
                <span>{String(index + 1).padStart(2, '0')}</span>
                <h3>{title}</h3>
                <p>{text}</p>
              </article>
            ))}
          </div>
        </section>

        <section className="signature band">
          <div className="signature-grid">
            <div>
              <p className="eyebrow">Signature UX/UI</p>
              <h2>Du goût à la conversion.</h2>
              <p>
                Nous gardons la tension esthétique qui donne envie, puis nous la transformons en système lisible: message, preuves, décision, qualification.
              </p>
            </div>
            <div className="journey" aria-label="Transformation du parcours">
              <span>Activite</span>
              <span>Hierarchie</span>
              <span>Preuves</span>
              <span>CTA</span>
              <span>Sélection</span>
            </div>
          </div>
        </section>

        <section className="section offers" id="offres">
          <div className="section-heading">
            <p className="eyebrow">Formats</p>
            <h2>Des formats cadres, sans packaging agressif.</h2>
          </div>
          <div className="offer-table">
            {offers.map((offer) => (
              <article className="offer-row" key={offer.title}>
                <h3>{offer.title}</h3>
                <p>{offer.for}</p>
                <dl>
                  <div><dt>Livrables</dt><dd>{offer.deliverables}</dd></div>
                  <div><dt>Durée</dt><dd>{offer.duration}</dd></div>
                  <div><dt>Implication</dt><dd>{offer.involvement}</dd></div>
                </dl>
              </article>
            ))}
          </div>
        </section>

        <section className="section proof">
          <div className="section-heading">
            <p className="eyebrow">Preuves</p>
            <h2>Cas sobres, décisions nettes.</h2>
          </div>
          <div className="proof-list">
            {proofs.map(([context, decision, impact]) => (
              <article className="proof-item" key={context}>
                <h3>{context}</h3>
                <p><strong>Décision UX:</strong> {decision}</p>
                <p><strong>Impact attendu:</strong> {impact}</p>
              </article>
            ))}
          </div>
        </section>

        <section className="section qualification">
          <div>
            <p className="eyebrow">Qualification</p>
            <h2>Nous travaillons mieux avec...</h2>
          </div>
          <ul>
            {qualification.map((item) => <li key={item}>{item}</li>)}
          </ul>
        </section>

        <section className="section consultation" id="consultation">
          <div className="consultation-copy">
            <p className="eyebrow">Consultation</p>
            <h2>Présentez le projet que votre site doit enfin soutenir.</h2>
            <p>
              Le formulaire volontairement court garde assez de friction pour qualifier le besoin sans transformer la prise de contact en appel d'offres.
            </p>
          </div>
          <ConsultationForm />
        </section>

        <a className="mobile-consultation-cta" href="#consultation">
          Demander une consultation
        </a>
      </main>

      <footer className="site-footer">
        <span>Atelier Vanta</span>
        <a href="#top">Retour en haut</a>
      </footer>
    </>
  );
}

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <App />
  </StrictMode>
);
