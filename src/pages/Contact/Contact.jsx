
import { useState } from 'react';
import styles from './Contact.module.css';

export default function Contato() {
  const [formData, setFormData] = useState({
    nome: '',
    email: '',
    telefone: '',
    linkedin: '',
    mensagem: ''
  });

  const handleChange = (e) => {
    setFormData((prev) => ({
      ...prev,
      [e.target.name]: e.target.value
    }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      const response = await fetch('http://localhost:8000/email/send-email.php', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json'
        },
        body: JSON.stringify(formData)
      });

      const data = await response.json();
      console.log('Servidor respondeu:', data);
      alert('Mensagem enviada com sucesso!');
      setFormData({
        nome: '',
        email: '',
        telefone: '',
        linkedin: '',
        mensagem: ''
    });
    } catch (err) {
      console.error('Erro ao enviar:', err);
      alert('Ocorreu um erro ao enviar sua mensagem.');
    }
  };

  return (
    <section id="contato" className={styles.container}>
      <div className={styles.formWrapper}>
        <h2>Entre em contato</h2>
        <p className={styles.subtitle}>
          Me conte sobre seu projeto por aqui através desse formulário ou diretamente pelo WhatsApp
        </p>
        <form className={styles.form} onSubmit={handleSubmit}>
          <div className={styles.grid}>
            <div className={styles.inputGroup}>
              <label htmlFor="nome">Seu nome:</label>
              <input type="text" id="nome" name="nome" value={formData.nome} onChange={handleChange} required />
            </div>
            <div className={styles.inputGroup}>
              <label htmlFor="email">Email:</label>
              <input type="email" id="email" name="email" value={formData.email} onChange={handleChange} required />
            </div>
            <div className={styles.inputGroup}>
              <label htmlFor="telefone">Telefone:</label>
              <input type="text" id="telefone" name="telefone" value={formData.telefone} onChange={handleChange} />
            </div>
            <div className={styles.inputGroup}>
              <label htmlFor="linkedin">LinkedIn:</label>
              <input type="text" id="linkedin" name="linkedin" value={formData.linkedin} onChange={handleChange} />
            </div>
          </div>
          <div className={styles.inputGroup}>
            <label htmlFor="mensagem">Sua mensagem:</label>
            <textarea id="mensagem" name="mensagem" rows="5" value={formData.mensagem} onChange={handleChange} required />
          </div>
          <button type="submit" className={styles.button}>Enviar</button>
        </form>
      </div>
    </section>
  );
}
