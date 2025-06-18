// pages/Contato.jsx
import styles from './Contact.module.css';

export default function Contato() {
  return (
    <section id="contato" className={styles.container}>
      <div className={styles.formWrapper}>
        <h2>Entre em contato</h2>
        <p className={styles.subtitle}>
          Me conte sobre seu projeto por aqui através desse formulário ou diretamente pelo WhatsApp
        </p>
        <form
          className={styles.form}
          onSubmit={(e) => {
            e.preventDefault();
            // Aqui vai a lógica de envio (por e-mail ou API futura)
            alert("Mensagem enviada com sucesso!");
          }}
        >
          <div className={styles.grid}>
            <div className={styles.inputGroup}>
              <label htmlFor="nome">Seu nome:</label>
              <input type="text" id="nome" name="nome" required />
            </div>
            <div className={styles.inputGroup}>
              <label htmlFor="email">Email:</label>
              <input type="email" id="email" name="email" required />
            </div>
            <div className={styles.inputGroup}>
              <label htmlFor="telefone">Telefone:</label>
              <input type="text" id="telefone" name="telefone" />
            </div>
            <div className={styles.inputGroup}>
              <label htmlFor="linkedin">LinkedIn:</label>
              <input type="text" id="linkedin" name="linkedin" />
            </div>
          </div>
          <div className={styles.inputGroup}>
            <label htmlFor="mensagem">Sua mensagem:</label>
            <textarea id="mensagem" name="mensagem" rows="5" required />
          </div>
          <button type="submit" className={styles.button}>
            Enviar
          </button>
        </form>
      </div>
    </section>
  );
}
