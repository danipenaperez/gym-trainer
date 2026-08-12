// ─────────────────────────────────────────────────────────────
//  TU RUTINA
//  Edita esta lista a mano: es tu rutina fija, siempre en este orden.
//
//  Un elemento puede ser:
//   · Un EJERCICIO:  { name, reps, image }
//       - name  : nombre que verás en pantalla
//       - reps  : texto libre ("3×12", "30 seg"...). Si lo dejas "", solo el nombre.
//       - image : ruta a una imagen dentro de /img (opcional). Si falta, solo nombre.
//   · Un AVISO / cambio de material:  { note: "Monta la barra" }
//       - Pantalla intermedia a pantalla completa; no cuenta como ejercicio.
//
//  Los ejercicios de dos lados van como DOS entradas (derecho / izquierdo).
// ─────────────────────────────────────────────────────────────

const ROUTINE = [
  // ── MANCUERNAS ──
  { name: "Hombro · elevaciones verticales sentado (dos brazos)",        reps: "3×12", image: "" },
  { name: "Hombro · elevaciones laterales «pájaro» (dos brazos)",         reps: "3×12", image: "" },
  { name: "Hombro · elevaciones frontales (alternando brazos)",           reps: "3×12", image: "" },

  { name: "Bíceps · elevaciones normales",                                reps: "3×12", image: "" },

  { name: "Dorsal · rodilla en banco, espalda 45° · brazo derecho",       reps: "3×12", image: "" },
  { name: "Dorsal · rodilla en banco, espalda 45° · brazo izquierdo",     reps: "3×12", image: "" },

  { name: "Pecho · tumbado en suelo, aperturas «pájaro»",                 reps: "3×12", image: "" },
  { name: "Pecho · tumbado en suelo, subida vertical",                    reps: "3×12", image: "" },

  { name: "Tríceps · por encima de la cabeza · brazo izquierdo",          reps: "3×12", image: "" },
  { name: "Tríceps · por encima de la cabeza · brazo derecho",            reps: "3×12", image: "" },
  { name: "Tríceps · en banco (tipo remo), estirando · brazo derecho",    reps: "3×12", image: "" },
  { name: "Tríceps · en banco (tipo remo), estirando · brazo izquierdo",  reps: "3×12", image: "" },

  // ── CAMBIO DE MATERIAL ──
  { note: "Monta la barra" },

  // ── BARRA ──
  { name: "Hombro · elevaciones verticales (cabeza al techo)",            reps: "3×12", image: "" },
  { name: "Hombro · trapecio, de cintura a pecho",                        reps: "3×12", image: "" },
  { name: "Bíceps · con barra",                                           reps: "3×12", image: "" },
];
