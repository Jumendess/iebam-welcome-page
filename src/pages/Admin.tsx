import { useState } from "react";
import { Link } from "react-router-dom";
import {
  CULTOS, CULTOS_SEMANAIS, VERSICULOS, AGENDA_ANUAL, PASTORES,
  TEXTOS_IGREJA, NAVY, GOLD, SERIF,
  IGREJA_NOME_COMPLETO, IGREJA_SLOGAN, SITE_OFICIAL,
  ENDERECO_RUA, ENDERECO_BAIRRO, ENDERECO_CIDADE,
} from "@/config/igreja";

const ADMIN_PASSWORD = import.meta.env.VITE_ADMIN_PASSWORD || "admin123";

// ── Tipos ─────────────────────────────────────────────────────────
type Culto      = { titulo: string; horario: string; icon: string };
type CultoSem   = { titulo: string; descricao: string; dia: string; horario: string; icon: string };
type Versiculo  = { text: string; ref: string };
type Evento     = { mes: number; dia: string; titulo: string; descricao: string; tipo: string; youtube?: string };
type Pastor     = { nome: string; periodo: string; cargo?: string; atual?: boolean; telefone?: string; email?: string };
type TextoIgreja = { titulo: string; texto: string };

type AdminData = {
  // Identidade
  slogan: string; siteOficial: string;
  enderecoRua: string; enderecoBairro: string; enderecoCidade: string;
  // Home
  cultos: Culto[]; versiculos: Versiculo[];
  // Eventos
  cultosSem: CultoSem[]; agenda: Evento[];
  // A Igreja
  textosIgreja: TextoIgreja[];
  // Pastores
  pastores: Pastor[];
};

const MESES = ["Janeiro","Fevereiro","Março","Abril","Maio","Junho","Julho","Agosto","Setembro","Outubro","Novembro","Dezembro"];
const TIPOS = ["culto","conferencia","retiro","social","especial","aniversario"];

const defaultData: AdminData = {
  slogan: IGREJA_SLOGAN, siteOficial: SITE_OFICIAL,
  enderecoRua: ENDERECO_RUA, enderecoBairro: ENDERECO_BAIRRO, enderecoCidade: ENDERECO_CIDADE,
  cultos: CULTOS.map(c=>({titulo:c.titulo,horario:c.horario,icon:c.icon})),
  versiculos: VERSICULOS.map(v=>({...v})),
  cultosSem: CULTOS_SEMANAIS.map(c=>({...c})),
  agenda: AGENDA_ANUAL.map(e=>({...e})),
  textosIgreja: TEXTOS_IGREJA.map(t=>({...t})),
  pastores: PASTORES.map(p=>({...p})),
};

// ── Gerador do igreja.ts ──────────────────────────────────────────
function generateTs(d: AdminData): string {
  return `// ═══════════════════════════════════════════════════════════════
// CONFIGURAÇÕES DA IEBAM — gerado pelo painel admin
// ═══════════════════════════════════════════════════════════════

export const IGREJA_NOME          = "IEBAM";
export const IGREJA_NOME_COMPLETO = "${IGREJA_NOME_COMPLETO}";
export const IGREJA_SLOGAN        = "${d.slogan.replace(/"/g,'\\"')}";
export const SITE_OFICIAL         = "${d.siteOficial}";

export const ENDERECO_RUA    = "${d.enderecoRua}";
export const ENDERECO_BAIRRO = "${d.enderecoBairro}";
export const ENDERECO_CIDADE = "${d.enderecoCidade}";

export const WHATSAPP_NUMERO     = import.meta.env.VITE_WHATSAPP_NUMERO || "+55 11 99854-1972";
export const WHATSAPP_URL        = \`https://wa.me/\${import.meta.env.VITE_WHATSAPP_NUMERO || "5511998541972"}?text=Oi!%20Vim%20pelo%20site%20e%20queria%20mais%20informa%C3%A7%C3%B5es.\`;
export const WHATSAPP_URL_VISITA = \`https://wa.me/\${import.meta.env.VITE_WHATSAPP_NUMERO || "5511998541972"}?text=Oi!%20Sou%20novo(a)%20e%20queria%20visitar%20domingo.%20Como%20funciona%3F\`;
export const EMAIL               = import.meta.env.VITE_EMAIL || "contato@iebam.org.br";

export const INSTAGRAM_HANDLE = "@igrejabatistaaltodamooca";
export const INSTAGRAM_URL    = import.meta.env.VITE_INSTAGRAM_URL || "https://instagram.com/igrejabatistaaltodamooca";
export const FACEBOOK_HANDLE  = "/iebam1950";
export const FACEBOOK_URL     = import.meta.env.VITE_FACEBOOK_URL  || "https://web.facebook.com/iebam1950/";
export const YOUTUBE_HANDLE   = "IEBAM Vídeo";
export const YOUTUBE_URL      = import.meta.env.VITE_YOUTUBE_URL   || "https://www.youtube.com/@iebam";

export const YOUTUBE_CHANNEL_ID = import.meta.env.VITE_YOUTUBE_CHANNEL_ID || "UCxxxxxxxxxxxxxxxxxxxxxxx";
export const YOUTUBE_API_KEY    = import.meta.env.VITE_YOUTUBE_API_KEY    || "";

export const CULTOS = ${JSON.stringify(d.cultos, null, 2)};

export const CULTOS_SEMANAIS = ${JSON.stringify(d.cultosSem, null, 2)};

export type Evento = {
  mes: number; dia: string; titulo: string; descricao: string;
  tipo: "culto"|"conferencia"|"retiro"|"social"|"especial"|"aniversario";
  youtube?: string;
};
export const AGENDA_ANUAL: Evento[] = ${JSON.stringify(d.agenda, null, 2)};

export const VERSICULOS = ${JSON.stringify(d.versiculos, null, 2)};

export const MAPS_EMBED = import.meta.env.VITE_MAPS_EMBED || "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3657.2!2d-46.5756!3d-23.5489!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x94ce5b6a0b0b0b0b%3A0x0!2sRua%20do%20Orat%C3%B3rio%2C%202930%20-%20Mooca%2C%20S%C3%A3o%20Paulo!5e0!3m2!1spt-BR!2sbr!4v1234567890";

export type Pastor = { nome: string; periodo: string; cargo?: string; atual?: boolean; foto?: string; telefone?: string; email?: string };
export const PASTORES: Pastor[] = ${JSON.stringify(d.pastores, null, 2)};

export type FotoGaleria = { src: string; titulo: string; categoria: "culto"|"eventos"|"jovens"|"missoes"|"edificio" };
export const GALERIA: FotoGaleria[] = [];

export const NAVY  = "#1a2e5a";
export const GOLD  = "#a97d50";
export const SERIF = "Georgia, 'Times New Roman', serif";

export const TEXTOS_IGREJA = ${JSON.stringify(d.textosIgreja, null, 2)};
`;
}

// ── UI Base ───────────────────────────────────────────────────────
const Input = (p: React.InputHTMLAttributes<HTMLInputElement>) => (
  <input {...p} className={`w-full border border-gray-200 rounded-lg px-3 py-2 text-sm outline-none focus:border-[#a97d50] bg-white transition-colors ${p.className??""}`}/>
);
const Textarea = (p: React.TextareaHTMLAttributes<HTMLTextAreaElement>) => (
  <textarea {...p} className={`w-full border border-gray-200 rounded-lg px-3 py-2 text-sm outline-none focus:border-[#a97d50] bg-white resize-none transition-colors ${p.className??""}`}/>
);
const Label = ({children}:{children:React.ReactNode}) => (
  <label className="text-xs font-semibold text-gray-400 uppercase tracking-wide mb-1 block">{children}</label>
);
const Card = ({title,icon,badge,children}:{title:string;icon:string;badge?:string;children:React.ReactNode}) => (
  <div className="bg-white rounded-2xl border border-gray-100 shadow-sm overflow-hidden mb-5">
    <div className="flex items-center justify-between px-6 py-4 border-b border-gray-50" style={{background:`${NAVY}08`}}>
      <div className="flex items-center gap-2">
        <span>{icon}</span>
        <h2 className="font-bold text-sm" style={{color:NAVY,fontFamily:SERIF}}>{title}</h2>
      </div>
      {badge&&<span className="text-xs px-2 py-0.5 rounded-full font-bold" style={{background:`${GOLD}20`,color:"#7a5a00"}}>{badge}</span>}
    </div>
    <div className="p-6">{children}</div>
  </div>
);
const ItemBox = ({children, onDelete}:{children:React.ReactNode;onDelete?:()=>void}) => (
  <div className="p-4 rounded-xl bg-gray-50 border border-gray-100 space-y-3 relative">
    {onDelete&&<button onClick={onDelete} className="absolute top-3 right-3 text-xs text-red-400 hover:text-red-600">✕</button>}
    {children}
  </div>
);
const AddBtn = ({onClick,label}:{onClick:()=>void;label:string}) => (
  <button onClick={onClick} className="w-full py-3 rounded-xl border-2 border-dashed border-gray-200 text-gray-400 text-sm hover:border-[#a97d50] hover:text-[#a97d50] transition-colors mt-2">
    + {label}
  </button>
);

// ── LOGIN ─────────────────────────────────────────────────────────
const Login = ({onLogin}:{onLogin:()=>void}) => {
  const [pw,setPw]=useState(""); const [err,setErr]=useState(false); const [show,setShow]=useState(false);
  const go=()=>{if(pw===ADMIN_PASSWORD){sessionStorage.setItem("iebam_admin_auth","1");onLogin();}else{setErr(true);setPw("");}};
  return (
    <div className="min-h-screen flex items-center justify-center px-4" style={{background:"#f8f7f4"}}>
      <div className="w-full max-w-sm">
        <div className="text-center mb-8">
          <div className="w-16 h-16 rounded-2xl flex items-center justify-center mx-auto mb-4 shadow-lg" style={{background:NAVY}}>
            <svg viewBox="0 0 24 24" fill="none" stroke="white" strokeWidth={2} className="w-8 h-8"><rect x="3" y="11" width="18" height="11" rx="2"/><path strokeLinecap="round" d="M7 11V7a5 5 0 0110 0v4"/></svg>
          </div>
          <h1 className="text-2xl font-bold" style={{color:NAVY,fontFamily:SERIF}}>Painel Admin</h1>
          <p className="text-gray-400 text-sm mt-1">{IGREJA_NOME_COMPLETO}</p>
        </div>
        <div className="bg-white rounded-2xl shadow-sm border border-gray-100 p-6 space-y-4">
          <div>
            <Label>Senha</Label>
            <div className="relative">
              <Input type={show?"text":"password"} placeholder="Digite a senha" value={pw}
                onChange={e=>{setPw(e.target.value);setErr(false);}} onKeyDown={e=>e.key==="Enter"&&go()}/>
              <button className="absolute right-3 top-1/2 -translate-y-1/2 text-gray-300 hover:text-gray-500" onClick={()=>setShow(!show)}>
                <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={2} className="w-4 h-4">
                  {show?<path strokeLinecap="round" d="M17.94 17.94A10.07 10.07 0 0112 20c-7 0-11-8-11-8a18.45 18.45 0 015.06-5.94M9.9 4.24A9.12 9.12 0 0112 4c7 0 11 8 11 8a18.5 18.5 0 01-2.16 3.19m-6.72-1.07a3 3 0 11-4.24-4.24M1 1l22 22"/>:<><path strokeLinecap="round" d="M1 12s4-8 11-8 11 8 11 8-4 8-11 8-11-8-11-8z"/><circle cx="12" cy="12" r="3"/></>}
                </svg>
              </button>
            </div>
            {err&&<p className="text-red-500 text-xs mt-1">Senha incorreta.</p>}
          </div>
          <button onClick={go} className="w-full py-2.5 rounded-lg font-bold text-sm text-white hover:brightness-110 transition-all" style={{background:NAVY}}>Entrar</button>
        </div>
      </div>
    </div>
  );
};

// ── TABS ──────────────────────────────────────────────────────────
type Tab = "home"|"igreja"|"eventos"|"contato"|"pastores";

// ── PAINEL ────────────────────────────────────────────────────────
const Panel = ({onLogout}:{onLogout:()=>void}) => {
  const [data,setData]=useState<AdminData>({...defaultData});
  const [tab,setTab]=useState<Tab>("home");
  const [status,setStatus]=useState<"idle"|"loading"|"ok"|"error">("idle");
  const [msg,setMsg]=useState("");

  const tabs:[Tab,string,string][]=[
    ["home",    "🏠","Home"],
    ["igreja",  "🏛","A Igreja"],
    ["eventos", "📅","Eventos"],
    ["contato", "📞","Contato"],
    ["pastores","👤","Pastores"],
  ];

  const upd=<K extends keyof AdminData>(k:K,v:AdminData[K])=>setData(d=>({...d,[k]:v}));
  const updArr=<T,>(key:keyof AdminData,i:number,k:keyof T,v:unknown)=>{
    const arr=[...(data[key] as T[])];
    arr[i]={...arr[i],[k]:v};
    upd(key as any,arr as any);
  };

  const deploy=async()=>{
    setStatus("loading");setMsg("");
    try{
      const res=await fetch("/api/deploy",{
        method:"POST",headers:{"Content-Type":"application/json"},
        body:JSON.stringify({password:ADMIN_PASSWORD,content:generateTs(data)}),
      });
      const json=await res.json();
      if(!res.ok)throw new Error(json.error||"Erro");
      setStatus("ok");setMsg("✅ Deploy enviado! Aguarde ~1 minuto.");
    }catch(e:any){setStatus("error");setMsg("❌ "+e.message);}
  };

  return (
    <div className="min-h-screen pb-28" style={{background:"#f8f7f4"}}>
      {/* HEADER */}
      <header className="bg-white border-b border-gray-100 sticky top-0 z-30">
        <div className="max-w-5xl mx-auto px-6 py-3 flex items-center justify-between">
          <div className="flex items-center gap-3">
            <div className="w-8 h-8 rounded-lg flex items-center justify-center" style={{background:NAVY}}>
              <svg viewBox="0 0 24 24" fill="none" stroke="white" strokeWidth={2} className="w-4 h-4"><path strokeLinecap="round" d="M12 20h9M16.5 3.5a2.121 2.121 0 013 3L7 19l-4 1 1-4L16.5 3.5z"/></svg>
            </div>
            <div>
              <p className="font-bold text-sm" style={{color:NAVY}}>Painel Admin — IEBAM</p>
              <p className="text-xs text-gray-400">Edite qualquer página e publique</p>
            </div>
          </div>
          <div className="flex gap-2">
            <Link to="/home" className="text-xs px-3 py-1.5 rounded-lg border border-gray-200 text-gray-500 hover:bg-gray-50">← Ver site</Link>
            <button onClick={onLogout} className="text-xs px-3 py-1.5 rounded-lg text-gray-500 hover:bg-gray-50">Sair</button>
          </div>
        </div>
      </header>

      <div className="max-w-5xl mx-auto px-6 py-8">
        {/* TABS */}
        <div className="flex gap-1 mb-6 bg-white rounded-2xl p-1.5 border border-gray-100 shadow-sm overflow-x-auto">
          {tabs.map(([key,icon,label])=>(
            <button key={key} onClick={()=>setTab(key)}
              className="flex-1 min-w-fit px-4 py-2.5 rounded-xl text-xs font-semibold transition-all whitespace-nowrap flex items-center justify-center gap-1.5"
              style={{background:tab===key?NAVY:"transparent",color:tab===key?"white":"#6b7280"}}>
              <span>{icon}</span>{label}
            </button>
          ))}
        </div>

        {/* ══ HOME ══ */}
        {tab==="home"&&<>
          <Card title="Identidade e Slogan" icon="✏️" badge="Hero da Home">
            <div className="space-y-4">
              <div><Label>Slogan principal</Label><Textarea rows={2} value={data.slogan} onChange={e=>upd("slogan",e.target.value)}/></div>
              <div><Label>Site Oficial</Label><Input value={data.siteOficial} onChange={e=>upd("siteOficial",e.target.value)}/></div>
            </div>
          </Card>

          <Card title="Cards de Horários" icon="🕐" badge="Seção Cultos">
            <div className="space-y-4">
              {data.cultos.map((c,i)=>(
                <ItemBox key={i}>
                  <div className="flex gap-2">
                    <div className="w-16"><Label>Ícone</Label><Input value={c.icon} onChange={e=>updArr<Culto>("cultos",i,"icon",e.target.value)}/></div>
                    <div className="flex-1"><Label>Título</Label><Input value={c.titulo} onChange={e=>updArr<Culto>("cultos",i,"titulo",e.target.value)}/></div>
                  </div>
                  <div><Label>Horário</Label><Input value={c.horario} onChange={e=>updArr<Culto>("cultos",i,"horario",e.target.value)}/></div>
                </ItemBox>
              ))}
            </div>
          </Card>

          <Card title="Versículos do Carrossel" icon="📖" badge="Seção Versículos">
            <div className="space-y-4">
              {data.versiculos.map((v,i)=>(
                <ItemBox key={i} onDelete={()=>upd("versiculos",data.versiculos.filter((_,idx)=>idx!==i))}>
                  <span className="text-xs font-bold text-gray-400">Versículo {i+1}</span>
                  <div><Label>Texto</Label><Textarea rows={2} value={v.text} onChange={e=>updArr<Versiculo>("versiculos",i,"text",e.target.value)}/></div>
                  <div><Label>Referência</Label><Input value={v.ref} onChange={e=>updArr<Versiculo>("versiculos",i,"ref",e.target.value)}/></div>
                </ItemBox>
              ))}
              <AddBtn label="Adicionar versículo" onClick={()=>upd("versiculos",[...data.versiculos,{text:"",ref:""}])}/>
            </div>
          </Card>
        </>}

        {/* ══ A IGREJA ══ */}
        {tab==="igreja"&&<>
          <Card title="Textos Institucionais" icon="📜" badge="Página A Igreja">
            <div className="space-y-4">
              {data.textosIgreja.map((t,i)=>(
                <ItemBox key={i}>
                  <div><Label>Título da seção</Label><Input value={t.titulo} onChange={e=>updArr<TextoIgreja>("textosIgreja",i,"titulo",e.target.value)}/></div>
                  <div><Label>Texto</Label><Textarea rows={5} value={t.texto} onChange={e=>updArr<TextoIgreja>("textosIgreja",i,"texto",e.target.value)}/></div>
                </ItemBox>
              ))}
            </div>
          </Card>
        </>}

        {/* ══ EVENTOS ══ */}
        {tab==="eventos"&&<>
          <Card title="Cultos Semanais" icon="🙏" badge="Página Eventos">
            <div className="space-y-4">
              {data.cultosSem.map((c,i)=>(
                <ItemBox key={i}>
                  <div className="flex gap-2">
                    <div className="w-16"><Label>Ícone</Label><Input value={c.icon} onChange={e=>updArr<CultoSem>("cultosSem",i,"icon",e.target.value)}/></div>
                    <div className="flex-1"><Label>Título</Label><Input value={c.titulo} onChange={e=>updArr<CultoSem>("cultosSem",i,"titulo",e.target.value)}/></div>
                  </div>
                  <div className="grid grid-cols-2 gap-3">
                    <div><Label>Dia</Label><Input value={c.dia} onChange={e=>updArr<CultoSem>("cultosSem",i,"dia",e.target.value)}/></div>
                    <div><Label>Horário</Label><Input value={c.horario} onChange={e=>updArr<CultoSem>("cultosSem",i,"horario",e.target.value)}/></div>
                  </div>
                  <div><Label>Descrição</Label><Textarea rows={2} value={c.descricao} onChange={e=>updArr<CultoSem>("cultosSem",i,"descricao",e.target.value)}/></div>
                </ItemBox>
              ))}
            </div>
          </Card>

          <Card title="Agenda Anual" icon="📅" badge="Página Eventos">
            <div className="space-y-3">
              {data.agenda.map((e,i)=>(
                <ItemBox key={i} onDelete={()=>upd("agenda",data.agenda.filter((_,idx)=>idx!==i))}>
                  <div className="grid grid-cols-2 gap-3">
                    <div>
                      <Label>Mês</Label>
                      <select value={e.mes} onChange={ev=>updArr<Evento>("agenda",i,"mes",Number(ev.target.value))}
                        className="w-full border border-gray-200 rounded-lg px-3 py-2 text-sm bg-white outline-none focus:border-[#a97d50]">
                        {MESES.map((m,idx)=><option key={idx+1} value={idx+1}>{m}</option>)}
                      </select>
                    </div>
                    <div><Label>Dia</Label><Input value={e.dia} onChange={ev=>updArr<Evento>("agenda",i,"dia",ev.target.value)} placeholder="ex: 15, TBD"/></div>
                  </div>
                  <div><Label>Título</Label><Input value={e.titulo} onChange={ev=>updArr<Evento>("agenda",i,"titulo",ev.target.value)}/></div>
                  <div><Label>Descrição</Label><Textarea rows={2} value={e.descricao} onChange={ev=>updArr<Evento>("agenda",i,"descricao",ev.target.value)}/></div>
                  <div className="grid grid-cols-2 gap-3">
                    <div>
                      <Label>Tipo</Label>
                      <select value={e.tipo} onChange={ev=>updArr<Evento>("agenda",i,"tipo",ev.target.value)}
                        className="w-full border border-gray-200 rounded-lg px-3 py-2 text-sm bg-white outline-none focus:border-[#a97d50]">
                        {TIPOS.map(t=><option key={t} value={t}>{t}</option>)}
                      </select>
                    </div>
                    <div><Label>YouTube (opcional)</Label><Input value={e.youtube||""} onChange={ev=>updArr<Evento>("agenda",i,"youtube",ev.target.value)} placeholder="https://..."/></div>
                  </div>
                </ItemBox>
              ))}
              <AddBtn label="Adicionar evento" onClick={()=>upd("agenda",[...data.agenda,{mes:1,dia:"TBD",titulo:"Novo evento",descricao:"",tipo:"especial"}])}/>
            </div>
          </Card>
        </>}

        {/* ══ CONTATO ══ */}
        {tab==="contato"&&<>
          <Card title="Endereço" icon="📍" badge="Página Contato">
            <div className="space-y-4">
              <div><Label>Rua e número</Label><Input value={data.enderecoRua} onChange={e=>upd("enderecoRua",e.target.value)}/></div>
              <div><Label>Bairro</Label><Input value={data.enderecoBairro} onChange={e=>upd("enderecoBairro",e.target.value)}/></div>
              <div><Label>Cidade e CEP</Label><Input value={data.enderecoCidade} onChange={e=>upd("enderecoCidade",e.target.value)}/></div>
            </div>
          </Card>
          <div className="bg-yellow-50 border border-yellow-200 rounded-2xl p-5 text-sm text-yellow-800">
            <strong>💡 Dica:</strong> WhatsApp, e-mail e redes sociais são configurados pelas variáveis de ambiente no Vercel (Settings → Environment Variables). Não aparecem aqui para não expor dados sensíveis.
          </div>
        </>}

        {/* ══ PASTORES ══ */}
        {tab==="pastores"&&
          <Card title="Pastores" icon="👤" badge="Página A Igreja">
            <div className="space-y-4">
              {data.pastores.map((p,i)=>(
                <ItemBox key={i}>
                  <div className="flex items-center gap-2 mb-1">
                    <span className="text-xs font-bold text-gray-400">Pastor {i+1}</span>
                    {p.atual&&<span className="text-xs px-2 py-0.5 rounded-full font-bold" style={{background:`${GOLD}25`,color:"#7a5a00"}}>Pastor Atual</span>}
                  </div>
                  <div><Label>Nome</Label><Input value={p.nome} onChange={e=>updArr<Pastor>("pastores",i,"nome",e.target.value)}/></div>
                  <div><Label>Período</Label><Input value={p.periodo} onChange={e=>updArr<Pastor>("pastores",i,"periodo",e.target.value)}/></div>
                  {p.atual&&<>
                    <div><Label>Cargo</Label><Input value={p.cargo||""} onChange={e=>updArr<Pastor>("pastores",i,"cargo",e.target.value)}/></div>
                    <div className="grid grid-cols-2 gap-3">
                      <div><Label>Telefone</Label><Input value={p.telefone||""} onChange={e=>updArr<Pastor>("pastores",i,"telefone",e.target.value)}/></div>
                      <div><Label>E-mail</Label><Input value={p.email||""} onChange={e=>updArr<Pastor>("pastores",i,"email",e.target.value)}/></div>
                    </div>
                  </>}
                </ItemBox>
              ))}
            </div>
          </Card>
        }
      </div>

      {/* RODAPÉ FIXO */}
      <div className="fixed bottom-0 left-0 right-0 bg-white border-t border-gray-100 px-6 py-4 flex items-center justify-between shadow-xl z-40">
        <div>
          {status==="loading"&&<p className="text-sm text-gray-400 flex items-center gap-2">
            <svg className="animate-spin w-4 h-4" style={{color:GOLD}} fill="none" viewBox="0 0 24 24">
              <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4"/>
              <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4z"/>
            </svg>
            Enviando para o GitHub...
          </p>}
          {msg&&<p className="text-sm font-medium" style={{color:status==="ok"?"#2e6b3e":"#dc2626"}}>{msg}</p>}
        </div>
        <button onClick={deploy} disabled={status==="loading"}
          className="px-6 py-3 rounded-xl font-bold text-sm text-white hover:brightness-110 disabled:opacity-50 flex items-center gap-2 shadow-md"
          style={{background:NAVY}}>
          🚀 Salvar e fazer Deploy
        </button>
      </div>
    </div>
  );
};

const Admin=()=>{
  const [authed,setAuthed]=useState(()=>sessionStorage.getItem("iebam_admin_auth")==="1");
  return authed
    ?<Panel onLogout={()=>{sessionStorage.removeItem("iebam_admin_auth");setAuthed(false);}}/>
    :<Login onLogin={()=>setAuthed(true)}/>;
};

export default Admin;