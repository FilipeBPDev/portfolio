import { useState } from "react";
import styles from "./Contact.module.css";
import { motion } from "framer-motion";

export default function Contato() {
  const [formData, setFormData] = useState({
    nome: "",
    email: "",
    telefone: "",
    linkedin: "",
    mensagem: "",
    website: "", // campo honeypot invisível
    startTime: Date.now(), // proteção antibot por tempo
  });

  const [isLoading, setIsLoading] = useState(false);
  const [statusMessage, setStatusMessage] = useState("");
  const [statusType, setStatusType] = useState(""); // 'success' ou 'error'

  const handleChange = (e) => {
    setFormData((prev) => ({
      ...prev,
      [e.target.name]: e.target.value,
    }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setIsLoading(true);
    setStatusMessage("");
    setStatusType("");

    try {
      const response = await fetch(
        "http://localhost:8000/email/send-email.php",
        {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify(formData),
        }
      );

      const data = await response.json();

      if (response.ok) {
        setStatusMessage("Mensagem enviada com sucesso!");
        setStatusType("success");
        setFormData({
          nome: "",
          email: "",
          telefone: "",
          linkedin: "",
          mensagem: "",
          website: "",
          startTime: Date.now(),
        });
      } else {
        setStatusMessage(data.error || "Erro ao enviar mensagem.");
        setStatusType("error");
      }
    } catch (err) {
      console.error("Erro ao enviar:", err);
      setStatusMessage("Erro de conexão. Tente novamente.");
      setStatusType("error");
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <section id="contato" className={styles.container}>
      <motion.div
        className={styles.formWrapper}
        initial={{ opacity: 0, y: 80 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.7 }}
        viewport={{ once: true }}
      >
        <h2>Entre em contato</h2>
        <p className={styles.subtitle}>
          Me conte sobre seu projeto por aqui através desse formulário ou
          diretamente pelo WhatsApp
        </p>

        {statusMessage && (
          <div
            className={`${styles.statusMessage} ${
              statusType === "success" ? styles.success : styles.error
            }`}
          >
            {statusMessage}
          </div>
        )}

        <form className={styles.form} onSubmit={handleSubmit}>
          <input
            type="text"
            name="website"
            id="website"
            className={styles.honeypot}
            autoComplete="off"
          />
          <div className={styles.grid}>
            <div className={styles.inputGroup}>
              <label htmlFor="nome">Seu nome:</label>
              <input
                type="text"
                id="nome"
                name="nome"
                value={formData.nome}
                onChange={handleChange}
                required
              />
            </div>
            <div className={styles.inputGroup}>
              <label htmlFor="email">Email:</label>
              <input
                type="email"
                id="email"
                name="email"
                value={formData.email}
                onChange={handleChange}
                required
              />
            </div>
            <div className={styles.inputGroup}>
              <label htmlFor="telefone">Telefone:</label>
              <input
                type="text"
                id="telefone"
                name="telefone"
                value={formData.telefone}
                onChange={handleChange}
              />
            </div>
            <div className={styles.inputGroup}>
              <label htmlFor="linkedin">LinkedIn:</label>
              <input
                type="text"
                id="linkedin"
                name="linkedin"
                value={formData.linkedin}
                onChange={handleChange}
              />
            </div>
          </div>
          <div className={styles.inputGroup}>
            <label htmlFor="mensagem">Sua mensagem:</label>
            <textarea
              id="mensagem"
              name="mensagem"
              rows="5"
              value={formData.mensagem}
              onChange={handleChange}
              required
            />
          </div>

          <button type="submit" className={styles.button} disabled={isLoading}>
            {isLoading ? "Enviando..." : "Enviar"}
          </button>
        </form>
      </motion.div>
    </section>
  );
}
