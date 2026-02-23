import { useState } from "react";
import Layout from "@/components/Layout";
import churchContato from "@/assets/church-contato.jpg";
import { MapPin, Phone, Clock, Instagram, Youtube, Facebook, Send } from "lucide-react";
import {
  WHATSAPP_NUMERO, WHATSAPP_URL, INSTAGRAM_HANDLE, INSTAGRAM_URL,
  FACEBOOK_HANDLE, FACEBOOK_URL, YOUTUBE_HANDLE, YOUTUBE_URL,
  ENDERECO_RUA, ENDERECO_BAIRRO, ENDERECO_CIDADE,
  CULTOS, MAPS_EMBED, NAVY, GOLD, SERIF,
} from "@/config/igreja";

const Contato = () => {
  const [form, setForm] = useState({ nome: "", email: "", whatsapp: "", mensagem: "" });
  const [enviado, setEnviado] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // ✏️ Aqui você pode integrar com EmailJS, Formspree, etc.
    setEnviado(true);
    setTimeout(() => setEnviado(false), 4000);
    setForm({ nome: "", email: "", whatsapp: "", mensagem: "" });
  };

  return (
    <Layout>

      {/* ── BANNER FOTO ── */}
      <section className="relative h-80 md:h-[480px] overflow-hidden">
        <img
          src={churchContato}
          alt="Igreja Evangélica Batista no Alto da Mooca"
          className="w-full h-full object-cover object-[center_30%]"
        />

      </section>

      {/* ── MAPA ── */}
      <section className="w-full h-64 md:h-80">
        <iframe
          title="Localização IEBAM"
          src={MAPS_EMBED}
          width="100%"
          height="100%"
          style={{ border: 0, display: "block" }}
          allowFullScreen
          loading="lazy"
          referrerPolicy="no-referrer-when-downgrade"
        />
      </section>

      {/* ── FORMULÁRIO + INFORMAÇÕES ── */}
      <section className="py-16 px-6 bg-gray-50">
        <div className="max-w-5xl mx-auto grid md:grid-cols-2 gap-12 items-start">

          {/* Formulário */}
          <div className="bg-white rounded-2xl shadow-md p-8 border border-gray-100">
            <h2 className="text-2xl font-bold mb-1" style={{ color: GOLD, fontFamily: SERIF }}>
              Fale Conosco
            </h2>
            <p className="text-gray-400 text-sm mb-6">
              Nos adoraríamos te ouvir. Use o formulário abaixo para falar conosco!
            </p>

            {enviado && (
              <div className="mb-5 px-4 py-3 rounded-lg text-sm font-medium text-white"
                style={{ background: "#25d366" }}>
                ✓ Mensagem enviada com sucesso!
              </div>
            )}

            <form onSubmit={handleSubmit} className="space-y-4">
              <div>
                <label className="block text-xs font-semibold mb-1 uppercase tracking-wider"
                  style={{ color: NAVY }}>
                  Nome *
                </label>
                <input
                  type="text"
                  required
                  value={form.nome}
                  onChange={e => setForm({ ...form, nome: e.target.value })}
                  className="w-full border border-gray-200 rounded-lg px-4 py-2.5 text-sm outline-none focus:border-yellow-400 transition-colors"
                  placeholder="Seu nome completo"
                />
              </div>
              <div>
                <label className="block text-xs font-semibold mb-1 uppercase tracking-wider"
                  style={{ color: NAVY }}>
                  E-mail *
                </label>
                <input
                  type="email"
                  required
                  value={form.email}
                  onChange={e => setForm({ ...form, email: e.target.value })}
                  className="w-full border border-gray-200 rounded-lg px-4 py-2.5 text-sm outline-none focus:border-yellow-400 transition-colors"
                  placeholder="seu@email.com"
                />
              </div>
              <div>
                <label className="block text-xs font-semibold mb-1 uppercase tracking-wider"
                  style={{ color: NAVY }}>
                  WhatsApp{" "}
                  <span className="text-gray-400 normal-case font-normal tracking-normal">(opcional)</span>
                </label>
                <input
                  type="tel"
                  value={form.whatsapp}
                  onChange={e => setForm({ ...form, whatsapp: e.target.value })}
                  className="w-full border border-gray-200 rounded-lg px-4 py-2.5 text-sm outline-none focus:border-yellow-400 transition-colors"
                  placeholder="(11) 99999-9999"
                />
              </div>
              <div>
                <label className="block text-xs font-semibold mb-1 uppercase tracking-wider"
                  style={{ color: NAVY }}>
                  Comentário ou Mensagem *
                </label>
                <textarea
                  required
                  rows={5}
                  value={form.mensagem}
                  onChange={e => setForm({ ...form, mensagem: e.target.value })}
                  className="w-full border border-gray-200 rounded-lg px-4 py-2.5 text-sm outline-none focus:border-yellow-400 transition-colors resize-none"
                  placeholder="Escreva sua mensagem..."
                />
              </div>
              <button
                type="submit"
                className="inline-flex items-center gap-2 px-6 py-3 rounded-lg font-semibold text-sm text-white transition-all hover:brightness-110 shadow-md"
                style={{ background: GOLD }}
              >
                <Send className="w-4 h-4" />
                Enviar
              </button>
            </form>
          </div>

          {/* Informações */}
          <div className="space-y-8">
            <div>
              <h2 className="text-2xl font-bold mb-6" style={{ color: NAVY, fontFamily: SERIF }}>
                Siga-nos
              </h2>
              <div className="space-y-4">
                <a href={WHATSAPP_URL} target="_blank" rel="noopener noreferrer"
                  className="flex items-center gap-3 group">
                  <div className="w-9 h-9 rounded-full flex items-center justify-center shrink-0"
                    style={{ background: `${NAVY}12` }}>
                    <Phone className="w-4 h-4" style={{ color: NAVY }} />
                  </div>
                  <span className="text-sm text-gray-600 group-hover:text-yellow-600 transition-colors">
                    {WHATSAPP_NUMERO}
                  </span>
                </a>
                <a href={INSTAGRAM_URL} target="_blank" rel="noopener noreferrer"
                  className="flex items-center gap-3 group">
                  <div className="w-9 h-9 rounded-full flex items-center justify-center shrink-0"
                    style={{ background: `${NAVY}12` }}>
                    <Instagram className="w-4 h-4" style={{ color: NAVY }} />
                  </div>
                  <span className="text-sm text-gray-600 group-hover:text-yellow-600 transition-colors">
                    {INSTAGRAM_HANDLE}
                  </span>
                </a>
                <a href={FACEBOOK_URL} target="_blank" rel="noopener noreferrer"
                  className="flex items-center gap-3 group">
                  <div className="w-9 h-9 rounded-full flex items-center justify-center shrink-0"
                    style={{ background: `${NAVY}12` }}>
                    <Facebook className="w-4 h-4" style={{ color: NAVY }} />
                  </div>
                  <span className="text-sm text-gray-600 group-hover:text-yellow-600 transition-colors">
                    {FACEBOOK_HANDLE}
                  </span>
                </a>
                <a href={YOUTUBE_URL} target="_blank" rel="noopener noreferrer"
                  className="flex items-center gap-3 group">
                  <div className="w-9 h-9 rounded-full flex items-center justify-center shrink-0"
                    style={{ background: `${NAVY}12` }}>
                    <Youtube className="w-4 h-4" style={{ color: NAVY }} />
                  </div>
                  <span className="text-sm text-gray-600 group-hover:text-yellow-600 transition-colors">
                    {YOUTUBE_HANDLE}
                  </span>
                </a>
              </div>
            </div>

            {/* Endereço e horários */}
            <div className="bg-white rounded-2xl border border-gray-100 shadow-sm p-6 space-y-4">
              <div className="flex items-start gap-3">
                <div className="w-9 h-9 rounded-full flex items-center justify-center shrink-0 mt-0.5"
                  style={{ background: `${GOLD}20` }}>
                  <MapPin className="w-4 h-4" style={{ color: GOLD }} />
                </div>
                <div>
                  <p className="text-xs font-bold uppercase tracking-wider mb-1" style={{ color: NAVY }}>
                    Endereço
                  </p>
                  {/* ✏️ EDITE: endereço */}
                  <p className="text-sm text-gray-500 leading-relaxed">
                    {ENDERECO_RUA}<br />
                    {ENDERECO_BAIRRO}<br />
                    {ENDERECO_CIDADE}
                  </p>
                </div>
              </div>

              <div className="h-px bg-gray-100" />

              <div className="flex items-start gap-3">
                <div className="w-9 h-9 rounded-full flex items-center justify-center shrink-0 mt-0.5"
                  style={{ background: `${GOLD}20` }}>
                  <Clock className="w-4 h-4" style={{ color: GOLD }} />
                </div>
                <div>
                  <p className="text-xs font-bold uppercase tracking-wider mb-1" style={{ color: NAVY }}>
                    Horários de Culto
                  </p>
                  {/* ✏️ EDITE: horários */}
                  <div className="text-sm text-gray-500 space-y-1">
                    <p><span className="font-medium text-gray-700">Domingo</span> — 8h30 · 10h30 · 18h</p>
                    <p><span className="font-medium text-gray-700">Quarta</span> — 19h30</p>
                  </div>
                </div>
              </div>
            </div>
          </div>

        </div>
      </section>

    </Layout>
  );
};

export default Contato;