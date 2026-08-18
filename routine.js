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
    subtitle: "Pecho · Hombro · Tríceps",
    items: [
      // ── PECHO (mancuernas · 7 kg) ──
      { note: "Pecho (opcional): en silla inclinada (pecho superior) o tumbado en el suelo" },
      { name: "Pecho · aperturas «pájaro»",                                  reps: "4×15 · 7 kg", image: "img/07-pecho-aperturas.png" },
      { name: "Pecho · subida vertical",                                     reps: "4×15 · 7 kg", image: "img/08-pecho-subida.png" },

      // ── HOMBRO vertical (mancuernas · 7 kg) ──
      { name: "Hombro · elevaciones verticales sentado (dos brazos)",       reps: "4×15 · 7 kg", image: "img/01-hombro-vertical-sentado.png" },

      // ── CAMBIO DE PESO ──
      { note: "Baja el peso a 4 kg" },

      // ── HOMBRO lateral (mancuernas · 4 kg) ──
      { name: "Hombro · elevaciones laterales «pájaro» (dos brazos)",        reps: "4×12 · 4 kg", image: "img/02-hombro-lateral-pajaro.png" },
      { name: "Hombro · elevaciones frontales (alternando brazos)",          reps: "3×12", image: "img/03-hombro-frontal.png" },

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
    subtitle: "Dorsal · Bíceps",
    items: [
      // ── DORSAL (mancuernas · 7 kg) ──
      { name: "Dorsal · remo con apoyo en banco · brazo izquierdo",          reps: "4×20 · 7 kg", image: "img/06-dorsal-remo-izquierdo.png" },
      { name: "Dorsal · remo con apoyo en banco · brazo derecho",            reps: "4×20 · 7 kg", image: "img/05-dorsal-remo-derecho.png" },

      // ── BÍCEPS (mancuernas · 7 kg) ──
      { name: "Bíceps · elevaciones normales",                               reps: "4×20 · 7 kg", image: "img/04-biceps.png" },

      // ── CAMBIO DE PESO ──
      { note: "Baja el peso a 4 kg" },

      // ── DORSAL (mancuernas · 4 kg) ──
      { name: "Dorsal · elevaciones laterales «pájaro» sentado (cabeza entre las rodillas, brazos arriba)", reps: "4×15 · 4 kg", image: "images/dorsales_elevaciones.jpeg" },

      // ── TRÍCEPS (mancuernas · 4 kg) ──
      { name: "Tríceps",                                                     reps: "4×20 · 4 kg", image: "img/09-triceps-cabeza-izquierdo.png" },
    ],
  },
];
