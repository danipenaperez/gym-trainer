# Gym Trainer

Guía de entrenamiento en casa, paso a paso. Le das a **Empezar** y te va mostrando un
ejercicio a la vez (nombre + repeticiones + imagen opcional) hasta terminar la rutina.
Sin cuentas, sin backend, sin conexión necesaria. Web estática pensada para **GitHub Pages**
y para **añadirla a la pantalla de inicio** del móvil como una app.

## Editar tu rutina

Toda tu rutina está en [`routine.js`](routine.js). Edita la lista `ROUTINE` a mano:

```js
const ROUTINE = [
  { name: "Bíceps sentado · brazo derecho", reps: "3×12", image: "img/biceps.jpg" },
  // ...
];
```

- `name`: lo que verás en pantalla.
- `reps`: texto libre (`"3×12"`, `"30 seg"`, `"2 min"`...).
- `image`: ruta a una imagen en [`img/`](img/) (opcional; si falta, se muestra solo el nombre).
- Los ejercicios de dos lados van como **dos entradas** (derecho / izquierdo).

## Probar en local

Como usa un service worker y `fetch`, ábrela con un servidor, no con `file://`:

```bash
python3 -m http.server 8000
# luego abre http://localhost:8000
```

## Desplegar en GitHub Pages

Hay un workflow ([`.github/workflows/deploy.yml`](.github/workflows/deploy.yml)) que publica
el sitio en cada push a `main`. Solo tienes que activarlo una vez:

1. Sube el repo a GitHub (`git push`).
2. En GitHub: **Settings → Pages → Build and deployment → Source: GitHub Actions**.
3. A partir de ahí, cada `git push` a `main` despliega solo.
4. La URL será `https://<tu-usuario>.github.io/gym-trainer/`.

En el móvil, abre esa URL y usa **"Añadir a la pantalla de inicio"** para instalarla.

## Cómo funciona

- `index.html` — las tres pantallas (inicio / ejercicio / hecho).
- `styles.css` — estilos, mobile-first y en oscuro.
- `app.js` — navegación (siguiente/atrás, progreso, degradado de imágenes).
- `routine.js` — **tu rutina** (lo único que editas normalmente).
- `manifest.webmanifest` + `sw.js` + `icons/` — instalable y uso sin conexión.
