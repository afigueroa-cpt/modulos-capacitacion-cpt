// tipos-visita.jsx — Tipos de Visita Preventiva CPT

const { useState } = React;

// ── Data ──────────────────────────────────────────────────────────────────
const GRUPOS = [
  {
    id: 'prog',
    label: 'Programadas',
    sublabel: 'Dentro del Programa Anual de Monitoreo',
    count: '4',
    tint:  '#DDF1E8',
    fg:    '#2E876B',
    s:     '#46B08C',
    items: [
      {
        icon: 'ti-hand-click',
        title: 'De presentación',
        desc:  'Cuando el MNPT se instala o cambia de composición: darse a conocer, explicar facultades, ajustar expectativas y establecer canales.',
      },
      {
        icon: 'ti-zoom-scan',
        title: 'En profundidad',
        desc:  'Analiza todos los aspectos del funcionamiento de un lugar. Requiere equipo multidisciplinar; puede durar varios días o semanas.',
      },
      {
        icon: 'ti-target-arrow',
        title: 'Temática',
        desc:  'Analiza una cuestión específica en varios lugares: aislamiento, contención, primeras horas. Breve, enfocada, equipo especializado.',
      },
      {
        icon: 'ti-clipboard-check',
        title: 'De seguimiento',
        desc:  'Basada en informes y recomendaciones previas. La forma más fiable de comprobar si las recomendaciones del CPT se han aplicado.',
      },
    ],
  },
  {
    id: 'noprog',
    label: 'No programadas',
    sublabel: 'Respuesta a contingencias y denuncias',
    count: '2',
    tint:  '#FBEBE0',
    fg:    '#B5572E',
    s:     '#D2764A',
    items: [
      {
        icon: 'ti-bolt',
        title: 'Ad hoc',
        desc:  'Tras eventos importantes (incendio, huelga) o ante patrones detectados. Sin aviso, con equipo pequeño y efecto disuasivo.',
      },
      {
        icon: 'ti-bell-ringing',
        title: 'Reactiva',
        desc:  'Reacciona a una denuncia específica. Excepcional, para no desviar al CPT de su mandato preventivo.',
      },
    ],
  },
];

// ── Components ────────────────────────────────────────────────────────────
function VisitCard({ item, fg, tint }) {
  return (
    <div style={{
      display: 'flex',
      gap: '14px',
      alignItems: 'flex-start',
      background: '#FFFCF7',
      borderRadius: '14px',
      padding: '14px 16px',
      boxShadow: '0 1px 3px rgba(42,36,29,.07)',
    }}>
      <div style={{
        width: '40px',
        height: '40px',
        minWidth: '40px',
        borderRadius: '11px',
        background: fg,
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
      }}>
        <i className={`ti ${item.icon}`} style={{ fontSize: '20px', color: '#fff' }} />
      </div>
      <div>
        <p style={{
          fontFamily: "'Atkinson Hyperlegible Next', system-ui, sans-serif",
          fontWeight: 700,
          fontSize: '14px',
          color: '#2A241D',
          marginBottom: '4px',
          lineHeight: 1.3,
        }}>{item.title}</p>
        <p style={{
          fontFamily: "'Atkinson Hyperlegible Next', system-ui, sans-serif",
          fontSize: '12.5px',
          color: '#6F6557',
          lineHeight: 1.55,
          margin: 0,
        }}>{item.desc}</p>
      </div>
    </div>
  );
}

function VisitColumn({ grupo }) {
  const { label, sublabel, count, tint, fg, s, items } = grupo;
  return (
    <div style={{
      background: tint,
      borderRadius: '20px',
      padding: '22px 20px 24px',
      flex: 1,
    }}>
      {/* Header */}
      <div style={{
        display: 'flex',
        justifyContent: 'space-between',
        alignItems: 'flex-start',
        marginBottom: '18px',
      }}>
        <div>
          <div style={{ display: 'flex', alignItems: 'center', gap: '8px', marginBottom: '3px' }}>
            <span style={{
              width: '10px', height: '10px', borderRadius: '50%',
              background: fg, display: 'inline-block', flexShrink: 0,
            }} />
            <span style={{
              fontFamily: "'Atkinson Hyperlegible Next', system-ui, sans-serif",
              fontWeight: 800,
              fontSize: '19px',
              color: fg,
              lineHeight: 1.2,
            }}>{label}</span>
          </div>
          <p style={{
            fontFamily: "'Atkinson Hyperlegible Next', system-ui, sans-serif",
            fontSize: '12px',
            color: fg,
            opacity: 0.72,
            margin: 0,
            paddingLeft: '18px',
          }}>{sublabel}</p>
        </div>
        <span style={{
          fontFamily: "'Atkinson Hyperlegible Next', system-ui, sans-serif",
          fontSize: '72px',
          fontWeight: 900,
          color: fg,
          opacity: 0.12,
          lineHeight: 1,
          userSelect: 'none',
          marginTop: '-10px',
        }}>{count}</span>
      </div>

      {/* Cards */}
      <div style={{ display: 'flex', flexDirection: 'column', gap: '10px' }}>
        {items.map((item, i) => (
          <VisitCard key={i} item={item} fg={fg} tint={tint} />
        ))}
      </div>
    </div>
  );
}

function TiposVisita() {
  return (
    <div style={{
      fontFamily: "'Atkinson Hyperlegible Next', system-ui, sans-serif",
      maxWidth: '900px',
      margin: '0 auto',
      padding: '48px 24px',
    }}>
      {/* Section header */}
      <div style={{ marginBottom: '32px' }}>
        <p style={{
          fontFamily: "'Atkinson Hyperlegible Next', system-ui, sans-serif",
          fontSize: '11px',
          fontWeight: 700,
          letterSpacing: '.12em',
          textTransform: 'uppercase',
          color: '#A8841C',
          margin: '0 0 6px',
        }}>Sección IV · Paso 4</p>
        <h2 style={{
          fontFamily: "'Spectral', Georgia, serif",
          fontSize: '38px',
          fontWeight: 700,
          color: '#2A241D',
          lineHeight: 1.1,
          margin: 0,
        }}>Tipos de visita</h2>
      </div>

      {/* Two-column grid */}
      <div style={{
        display: 'grid',
        gridTemplateColumns: '1fr 1fr',
        gap: '20px',
      }}>
        {GRUPOS.map(g => <VisitColumn key={g.id} grupo={g} />)}
      </div>
    </div>
  );
}

ReactDOM.createRoot(document.getElementById('root')).render(<TiposVisita />);
