// ─────────────────────────────────────────────────────────────
//  TUS RUTINAS (dos días)
//  Edita estas listas a mano. Cada día tiene su propia lista de pasos.
//
//  Un paso puede ser:
//   · Un EJERCICIO:  { name, reps, image }
//       - name  : nombre que verás en pantalla
//       - reps  : texto libre ("3×12", "30 seg"...). Si lo dejas "", solo el nombre.
//       - image : ruta a una imagen dentro de /img (opcional). Si falta, solo nombre.
//   · Un AVISO / cambio de material:  { note: "Monta la barra" }
//       - Pantalla intermedia a pantalla completa; no cuenta como ejercicio.
//
//  Los ejercicios de dos lados van como DOS entradas (derecho / izquierdo).
//  Imágenes recortadas del póster images/ejercicios_mapa.png.
// ─────────────────────────────────────────────────────────────

const ROUTINES = [
  {
    id: "A",
    name: "Lunes · Miércoles · Viernes",
    subtitle: "Hombro · Dorsal · Tríceps",
    items: [
      // ── HOMBRO (mancuernas) ──
      { name: "Hombro · elevaciones verticales sentado (dos brazos)",       reps: "3×12", image: "img/01-hombro-vertical-sentado.png" },
      { name: "Hombro · elevaciones laterales «pájaro» (dos brazos)",        reps: "3×12", image: "img/02-hombro-lateral-pajaro.png" },
      { name: "Hombro · elevaciones frontales (alternando brazos)",          reps: "3×12", image: "img/03-hombro-frontal.png" },

      // ── DORSAL (mancuernas) ──
      { name: "Dorsal · remo con apoyo en banco · brazo derecho",            reps: "3×12", image: "img/05-dorsal-remo-derecho.png" },
      { name: "Dorsal · remo con apoyo en banco · brazo izquierdo",          reps: "3×12", image: "img/06-dorsal-remo-izquierdo.png" },

      // ── TRÍCEPS (mancuernas) ──
      { name: "Tríceps · por encima de la cabeza · brazo izquierdo",         reps: "3×12", image: "img/09-triceps-cabeza-izquierdo.png" },
      { name: "Tríceps · por encima de la cabeza · brazo derecho",           reps: "3×12", image: "img/10-triceps-cabeza-derecho.png" },
      { name: "Tríceps · remo/patada en banco · brazo derecho",              reps: "3×12", image: "img/11-triceps-remo-derecho.png" },
      { name: "Tríceps · remo/patada en banco · brazo izquierdo",            reps: "3×12", image: "img/12-triceps-remo-izquierdo.png" },

      // ── CAMBIO DE MATERIAL ──
      { note: "Monta la barra" },

      // ── HOMBRO (barra) ──
      { name: "Hombro · elevaciones verticales (cabeza al techo)",           reps: "3×12", image: "img/13-barra-hombro-vertical.png" },
      { name: "Hombro · trapecio, de cintura a pecho",                       reps: "3×12", image: "img/14-barra-trapecio.png" },
    ],
  },
  {
    id: "B",
    name: "Martes · Jueves · Fin de semana",
    subtitle: "Pecho · Bíceps",
    items: [
      // ── PECHO (mancuernas) ──
      { name: "Pecho · aperturas «pájaro» tumbado en suelo",                 reps: "3×12", image: "img/07-pecho-aperturas.png" },
      { name: "Pecho · subida vertical tumbado en suelo",                    reps: "3×12", image: "img/08-pecho-subida.png" },

      // ── BÍCEPS (mancuernas) ──
      { name: "Bíceps · elevaciones normales",                               reps: "3×12", image: "img/04-biceps.png" },

      // ── CAMBIO DE MATERIAL ──
      { note: "Monta la barra" },

      // ── BÍCEPS (barra) ──
      { name: "Bíceps · con barra",                                          reps: "3×12", image: "img/15-barra-biceps.png" },
    ],
  },
];
