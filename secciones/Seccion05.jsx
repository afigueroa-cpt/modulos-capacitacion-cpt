export default function Seccion05() {
  return (
    <section className="section" id="fase-3" data-mod="manual">
      <div className="sec-header">
        <span className="sec-tag">Fase 03 · Articulación</span>
        <h3>Relación del MNPT con la sociedad civil y otros organismos</h3>
        <p className="sec-desc">
          El CPT no actúa solo. Coordinar con otros actores del ecosistema de
          monitoreo es parte del mandato preventivo y fortalece la legitimidad
          del Comité.
        </p>
      </div>

      <div className="card">
        <div className="card-title">
          <span className="num">01</span>Coordinación con organismos públicos de monitoreo
        </div>
        <div className="card-body">
          <p>
            Existen otros organismos públicos que realizan funciones de
            observación, fiscalización y prevención en recintos de cuidado o
            custodia. Para cumplir eficazmente su mandato, el CPT debe construir
            un <strong>catastro de actores</strong> identificando al menos:
            mandatos, facultades, jurisdicción, independencia, mecanismos de
            trabajo, eficacia y cobertura efectiva.
          </p>
          <p>
            A la hora de diseñar el Programa de Monitoreo, el CPT deberá
            coordinar sus visitas con las de otros organismos para:
          </p>
          <ul className="bullets">
            <li>Evitar asistir a un mismo lugar en un período corto de tiempo.</li>
            <li>
              Prevenir la <strong>revictimización</strong> por entrevistas
              duplicadas a personas que hayan sufrido torturas o malos tratos.
            </li>
            <li>
              Complementar los objetivos de la prevención coordinando las
              temáticas a abordar.
            </li>
          </ul>
        </div>
      </div>

      <div className="card">
        <div className="card-title">
          <span className="num">02</span>Relación con organizaciones de la sociedad civil (OSC)
        </div>
        <div className="card-body">
          <p>
            Una adecuada comunicación y colaboración con la sociedad civil ha
            sido <strong>crucial en la prevención de la tortura</strong>. Se
            recomienda construir relaciones sostenibles que ayuden a legitimar y
            fortalecer el cumplimiento del mandato, asegurando transparencia e
            inclusividad, sin afectar la imparcialidad, independencia y
            confidencialidad del CPT.
          </p>
          <div className="cite">
            La sociedad civil es el aliado más estratégico para impulsar las
            recomendaciones del MNPT en términos de prevención, sobre todo ante
            la tendencia de muchos gobiernos de impulsar políticas de seguridad
            divorciadas de la prevención.
            <span className="src">
              Experiencias comparadas MNPT Latinoamérica · Manual CPT 2024
            </span>
          </div>
          <p>
            <strong>Primer paso:</strong> conformar un registro del CPT de
            organismos de monitoreo y OSC vinculadas a la materia, evaluando la
            pertinencia de un llamado nacional público a inscribirse.
          </p>
        </div>
      </div>

      <div className="card">
        <div className="card-title">
          <span className="num">03</span>Buenas prácticas de la región
        </div>
        <div className="card-body">
          <p>
            A partir de reuniones con MNPT de Latinoamérica (Uruguay, Perú,
            Honduras), se identificaron las siguientes lecciones:
          </p>

          <details className="detail-toggle" open>
            <summary>Convenios marco y alianzas estratégicas</summary>
            <div className="detail-content">
              <p>
                En <strong>Uruguay</strong> se realizaron convenios con
                universidades para contar con especialistas en arquitectura y
                psiquiatría en algunas visitas, y con UNICEF para el desarrollo
                de instancias conjuntas. En <strong>Perú</strong> se desarrolló
                un convenio con una asociación de DDHH en salud mental para
                visitas conjuntas y difusión de la prevención. En{" "}
                <strong>Honduras</strong> se ofrecen cursos como "Prevención de
                la tortura para agentes penitenciarios" y "Diplomado de gestión
                penitenciaria" con apoyo de la ONU.
              </p>
            </div>
          </details>

          <details className="detail-toggle">
            <summary>Complementariedad ante recursos escasos</summary>
            <div className="detail-content">
              <p>
                En <strong>Uruguay</strong> se conforman grupos de trabajo con
                la sociedad civil para informes temáticos, y existe una Asamblea
                Nacional de DDHH que recoge las preocupaciones de la sociedad
                civil como insumo para la planificación anual. En{" "}
                <strong>Honduras</strong> se lleva una Mesa Penitenciaria de OSC
                que orienta la incidencia operativa en el cumplimiento de
                recomendaciones.
              </p>
              <p>
                No se trata de delegar funciones del mecanismo en la sociedad
                civil, sino de cubrir necesidades específicas del mandato: apoyo
                técnico audiovisual, expertise especializado, difusión.
              </p>
            </div>
          </details>

          <details className="detail-toggle">
            <summary>Independencia y autonomía: punto clave</summary>
            <div className="detail-content">
              <p>
                Todos los MNPT consultados advierten la importancia de{" "}
                <strong>mantener la independencia y autonomía</strong> al
                desarrollar convenios y actividades conjuntas. La sociedad civil
                tiene sus propios objetivos que a veces no coincidirán con los
                del Mecanismo. Debe existir respeto mutuo por el mandato e
                identidad particular de ambas partes.
              </p>
              <p>
                El CPT debe hacer un esfuerzo permanente por mantener la
                imparcialidad y objetividad, especialmente en escenarios
                políticos complejos en que las OSC pueden tener posiciones
                contrapuestas con el gobierno.
              </p>
            </div>
          </details>

          <div className="callout">
            <div className="callout-ico">i</div>
            <div className="callout-body">
              El conocimiento personal previo entre miembros del MNPT y de las
              OSC <strong>facilita el acercamiento y la obtención de respaldo</strong>.
              En los tres países consultados, la relación se estableció desde
              vínculos ya existentes, lo que permitió el respeto al mandato y el
              ánimo de colaboración.
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
