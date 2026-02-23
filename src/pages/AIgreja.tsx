import Layout from "@/components/Layout";
import igrejaBanner from "@/assets/igreja-banner.jpg";
import { PASTORES, NAVY, GOLD, SERIF } from "@/config/igreja";

const CrossDivider = () => (
  <div className="flex items-center justify-center gap-3 my-4">
    <span className="block h-px w-16" style={{ background: `${GOLD}60` }} />
    <svg width="12" height="18" viewBox="0 0 12 18" fill="none">
      <rect x="4.5" y="0" width="3" height="18" fill={GOLD} />
      <rect x="0" y="4" width="12" height="3" fill={GOLD} />
    </svg>
    <span className="block h-px w-16" style={{ background: `${GOLD}60` }} />
  </div>
);

const SecTitle = ({ children }: { children: React.ReactNode }) => (
  <h2 className="text-lg font-bold text-center mb-3" style={{ color: GOLD, fontFamily: SERIF }}>
    {children}
  </h2>
);

const AIgreja = () => (
  <Layout>

    {/* ── FOTO — completa, sem corte, sem efeito ── */}
    <section className="w-full bg-white">
      <img
        src={igrejaBanner}
        alt="Igreja Evangélica Batista no Alto da Mooca"
        style={{ width: "100%", display: "block", height: "auto" }}
      />
    </section>

    {/* ── TEXTOS INSTITUCIONAIS ── */}
    <section className="py-16 px-6 bg-white">
      <div className="max-w-3xl mx-auto">

        <h1 className="text-4xl font-bold text-center mb-1" style={{ color: GOLD, fontFamily: SERIF }}>
          A IEBAM
        </h1>
        <CrossDivider />

        <div className="mt-8 rounded-2xl p-8 md:p-10 shadow-sm space-y-10 text-sm leading-7 text-gray-600"
          style={{ border: `2px solid ${GOLD}` }}>

          <div>
            <SecTitle>Somos uma Igreja</SecTitle>
            <p>
              Igreja é um grupo de pessoas que se unem em torno da pessoa de Jesus Cristo. Isto é, somos uma ASSEMBLEIA de cristãos
              que comungamos a mesma fé dos apóstolos de Jesus. Nós reconhecemos que Jesus Cristo é nosso Senhor e Salvador pessoal.
              Procuramos seguir seus ensinamentos, permanecendo fiéis ao que temos na Bíblia Sagrada. Costumamos chamar uns aos outros
              de irmãos, pois tivemos a experiência do nosso nascimento espiritual, tornando-nos assim filhos de Deus. Nós nos reunimos
              para louvar a Deus, cultivando Seu santo nome e estudando Sua Palavra.
            </p>
          </div>

          <div>
            <SecTitle>Somos uma Igreja Evangélica</SecTitle>
            <p>
              Para nós a Bíblia é a única fundamento da nossa fé. Sabemos que a Bíblia é a revelação de Deus para os homens; podemos assim
              conhecer Deus pelo que Ele mesmo revelou. Seus atos através da Bíblia é o que nos submetermos ao que nela está escrito.
              O evangelho é a boas novas para nossa vida e para cada pessoa que o receber. Assim como os doze apóstolos de Jesus, saímos
              do evangelismo à nossa missão; sabemos que podem transformar a si todos, por isso procuramos divulgar isso ao máximo.
              O Novo Testamento fala das boas novas de Jesus.
            </p>
          </div>

          <div>
            <SecTitle>Somos uma Igreja Evangélica Batista</SecTitle>
            <p>
              Os batistas são conhecidos no mundo todo. São como um ramo das grandes igrejas que é o cristianismo. São bem conhecidos
              no Brasil, são ainda mais nos EUA, na Inglaterra e na Alemanha, como também na Romênia, na Índia e na Rússia. Cremos que
              Jesus Cristo é o único meio de salvação. Só pela Graça somos salvos por meio da fé. Uma de nossas grandes convicções é
              que ninguém nasce cristão, mas que cada um é chamado a se tornar cristão por sua fé pessoal em Jesus. É pelo encontro com
              Jesus Cristo que o homem pode ter um relacionamento direto com Deus. Nós os batistas discipulamos aqueles que professam
              sua fé. Portanto nós batistas não aceitamos mediadores e árbitros. A palavra batistas significa imergir — assim sendo, os que
              professam sua fé são batizados por imersão, seguindo o exemplo de Jesus.
            </p>
          </div>

          <div>
            <SecTitle>Somos defensores da liberdade individual</SecTitle>
            <p>
              Na Igreja Batista não há hierarquia: só Jesus Cristo é o Senhor. Ele é o verdadeiro chefe da Igreja. A mensagem dos batistas é
              uma mensagem de LIBERDADE. A Igreja não pode assumir um poder temporal, pois sua vocação é proclamar o amor, a fé e a
              eterna esperança do retorno de Cristo.
            </p>
          </div>

          <div>
            <SecTitle>Uma Igreja Autônoma Independente</SecTitle>
            <p>
              Nosso desejo como Igreja local é a consecução de objetivos mais amplos que os limites de nosso próprio bairro ou
              comunidade. Portanto, nós unimos, pondo mãos de solidariedade e comunhão com igrejas que têm os mesmos princípios e os
              mesmos objetivos, para atingirmos o homem em sua totalidade — corpo, mente e espírito — e em todo lugar para levar a Palavra.
            </p>
            <p className="mt-3">
              A associação a outras comunidades não pode ser um empecilho no livre exercício de sua autonomia. Cada Igreja batista é livre
              para escolher seus diáconos, eleger seus presbíteros, eleger seus diretores, empregar seu pastor e realizar sua obra, sem
              submissão a nenhuma instituição religiosa, eclesiástica ou governamental. Ser batista é ser livre do domínio dos homens e
              escravo de Cristo. "Pois minha eu, minha Cristo vive sem mim." — Gálatas 3:20
            </p>
          </div>

          <div>
            <SecTitle>Uma Igreja Evangélica Batista no Alto da Mooca</SecTitle>
            <p>
              A Igreja Evangélica Batista no Alto da Mooca foi organizada com 16 membros no dia 02/12/1950, pertencendo hoje
              aproximadamente 400 pessoas entre membros e profissionais. Foi fundada no bairro do Pari em 1950. Depois passou para a
              Rua do Oratório, 2978 e, posteriormente, para o atual endereço: Rua do Oratório, 2930 — Alto da Mooca. A IEBAM é uma
              sociedade sem fins lucrativos, registrada no Cartório de Registro Civil de Pessoas Jurídicas de São Paulo.
              É soberana, autônoma e independente, não estando subordinada a nenhuma outra Igreja ou entidade, reconhecendo
              exclusivamente a autoridade de Jesus Cristo expressas nas Sagradas Escrituras.
            </p>
            <p className="mt-5 text-center text-xs text-gray-400 font-medium tracking-wide">
              Pastor Sidney Machado — Presidente em exercício desde 14/01/2001
            </p>
          </div>

        </div>
      </div>
    </section>

    {/* ── TIMELINE DE PASTORES ── */}
    <section className="py-16 px-6" style={{ background: "#f8f7f4" }}>
      <div className="max-w-3xl mx-auto">

        <h2 className="text-3xl font-bold text-center mb-1" style={{ color: GOLD, fontFamily: SERIF }}>
          Pastores
        </h2>
        <p className="text-center text-gray-400 text-sm mb-10">
          A história da IEBAM contada através dos seus líderes
        </p>

        <div className="relative">
          {/* Linha vertical */}
          <div className="absolute left-[19px] top-0 bottom-0 w-px"
            style={{ background: `${GOLD}35` }} />

          <div className="space-y-3">
            {PASTORES.map((p, i) => {
              const isAtual = !!p.atual;
              return (
                <div key={i} className="relative flex gap-5 items-start">

                  {/* Bolinha na linha */}
                  <div className="relative z-10 shrink-0 mt-3">
                    <div
                      className="w-[22px] h-[22px] rounded-full border-2 flex items-center justify-center"
                      style={{
                        background: isAtual ? GOLD : "white",
                        borderColor: isAtual ? GOLD : `${GOLD}70`,
                      }}
                    >
                      {isAtual && <div className="w-2 h-2 rounded-full bg-white" />}
                    </div>
                  </div>

                  {/* Card */}
                  <div
                    className="flex-1 rounded-xl border p-4 mb-1"
                    style={
                      isAtual
                        ? { background: `${GOLD}0c`, borderColor: `${GOLD}50` }
                        : { background: "white", borderColor: "#f0f0f0" }
                    }
                  >
                    <p className="text-xs text-gray-400 mb-0.5">{p.periodo}</p>
                    <h3
                      className="font-bold text-sm"
                      style={{ color: isAtual ? GOLD : NAVY, fontFamily: SERIF }}
                    >
                      {p.nome}
                    </h3>

                    {p.cargo && (
                      <span
                        className="inline-block mt-1.5 text-xs px-2 py-0.5 rounded-full font-semibold"
                        style={{ background: `${GOLD}22`, color: "#7a5a00" }}
                      >
                        {p.cargo}
                      </span>
                    )}

                    {isAtual && (
                      <div className="mt-3 space-y-1.5 text-xs text-gray-500">
                        {p.telefone && (
                          <p className="flex items-center gap-2">
                            <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={2}
                              className="w-3.5 h-3.5 shrink-0" style={{ color: GOLD }}>
                              <path strokeLinecap="round" strokeLinejoin="round"
                                d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
                            </svg>
                            {p.telefone}
                          </p>
                        )}
                        {p.email && (
                          <p className="flex items-center gap-2">
                            <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={2}
                              className="w-3.5 h-3.5 shrink-0" style={{ color: GOLD }}>
                              <path strokeLinecap="round" strokeLinejoin="round"
                                d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                            </svg>
                            <a href={`mailto:${p.email}`} className="hover:underline" style={{ color: GOLD }}>
                              {p.email}
                            </a>
                          </p>
                        )}
                      </div>
                    )}
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </div>
    </section>

  </Layout>
);

export default AIgreja;