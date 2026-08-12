// Gym Trainer — guía paso a paso.
// Las rutinas viven en routine.js (const ROUTINES). Aquí solo va la navegación.

(function () {
  "use strict";

  var index = 0;   // paso actual (0-based) dentro de la rutina elegida
  var items = [];   // pasos de la rutina elegida (routine.items)

  // Elementos
  var screens = {
    start: document.getElementById("screen-start"),
    exercise: document.getElementById("screen-exercise"),
    done: document.getElementById("screen-done"),
  };
  var els = {
    progressText: document.getElementById("progress-text"),
    progressFill: document.getElementById("progress-fill"),
    figure: document.getElementById("ex-figure"),
    image: document.getElementById("ex-image"),
    name: document.getElementById("ex-name"),
    reps: document.getElementById("ex-reps"),
    prev: document.getElementById("btn-prev"),
    next: document.getElementById("btn-next"),
    timerVal: document.getElementById("ex-timer-val"),
  };

  // ── Cronómetro por ejercicio (cuenta hacia arriba desde 0) ──
  var timerId = null;
  var timerStart = 0;

  function paintTimer() {
    var s = Math.floor((Date.now() - timerStart) / 1000);
    var m = Math.floor(s / 60);
    var ss = s % 60;
    els.timerVal.textContent =
      String(m).padStart(2, "0") + ":" + String(ss).padStart(2, "0");
  }
  function startTimer() {
    timerStart = Date.now();
    paintTimer();
    if (timerId) clearInterval(timerId);
    timerId = setInterval(paintTimer, 250);
  }
  function stopTimer() {
    if (timerId) { clearInterval(timerId); timerId = null; }
  }

  function show(name) {
    Object.keys(screens).forEach(function (k) {
      screens[k].classList.toggle("is-active", k === name);
    });
    // El cronómetro solo corre en la pantalla de ejercicio.
    if (name !== "exercise") stopTimer();
  }

  // Nº total de ejercicios reales (los avisos no cuentan).
  function exerciseTotal() {
    return items.filter(function (i) { return !i.note; }).length;
  }
  // Cuántos ejercicios reales hay hasta `i` (excluido).
  function exercisesBefore(i) {
    return items.slice(0, i).filter(function (x) { return !x.note; }).length;
  }
  // ¿Queda algún ejercicio real después de `i`?
  function hasExerciseAfter(i) {
    return items.slice(i + 1).some(function (x) { return !x.note; });
  }

  function render() {
    var item = items[index];
    var isNote = !!item.note;

    screens.exercise.classList.toggle("is-note", isNote);

    if (isNote) {
      // Pantalla de aviso / cambio de material (no cuenta como ejercicio).
      stopTimer();
      els.name.textContent = item.note;
      els.reps.style.display = "none";
      els.figure.classList.add("is-empty");
      els.image.removeAttribute("src");
    } else {
      // Cada ejercicio arranca su cronómetro desde 0.
      startTimer();
      els.name.textContent = item.name;
      els.reps.textContent = item.reps || "";
      els.reps.style.display = item.reps ? "" : "none";

      // Imagen: si no hay o no carga, se oculta la figura y se muestra solo el nombre.
      if (item.image) {
        els.figure.classList.remove("is-empty");
        els.image.alt = item.name;
        els.image.src = item.image;
      } else {
        els.figure.classList.add("is-empty");
        els.image.removeAttribute("src");
      }

      // Progreso (solo ejercicios reales)
      var total = exerciseTotal();
      var n = exercisesBefore(index) + 1;
      els.progressText.textContent = n + " / " + total;
      els.progressFill.style.width = (n / total) * 100 + "%";
    }

    // Botón atrás deshabilitado en el primer paso
    els.prev.disabled = index === 0;
    els.next.textContent = hasExerciseAfter(index) ? "Siguiente →" : "Terminar ✓";
  }

  // Si una imagen no carga, degradamos a solo-nombre.
  els.image.addEventListener("error", function () {
    els.figure.classList.add("is-empty");
  });

  function startSession(routine) {
    items = routine.items;
    index = 0; // siempre empieza desde el primero
    render();
    show("exercise");
  }

  function next() {
    if (index < items.length - 1) {
      index++;
      render();
    } else {
      show("done");
    }
  }

  function prev() {
    if (index > 0) {
      index--;
      render();
    }
  }

  // Botones de día en la pantalla de inicio (uno por rutina de routine.js).
  var dayButtons = document.getElementById("day-buttons");
  ROUTINES.forEach(function (routine) {
    var btn = document.createElement("button");
    btn.className = "btn btn-primary day-btn";
    btn.innerHTML =
      '<span class="day-name">' + routine.name + "</span>" +
      '<span class="day-sub">' + routine.subtitle + "</span>";
    btn.addEventListener("click", function () { startSession(routine); });
    dayButtons.appendChild(btn);
  });

  // Eventos
  document.getElementById("btn-restart").addEventListener("click", function () {
    show("start");
  });
  els.next.addEventListener("click", next);
  els.prev.addEventListener("click", prev);

  // Atajos de teclado (útil probando en escritorio)
  document.addEventListener("keydown", function (e) {
    if (!screens.exercise.classList.contains("is-active")) return;
    if (e.key === "ArrowRight" || e.key === " ") { e.preventDefault(); next(); }
    if (e.key === "ArrowLeft") { e.preventDefault(); prev(); }
  });

  // Registrar service worker (para poder instalarla y usarla sin conexión).
  if ("serviceWorker" in navigator) {
    window.addEventListener("load", function () {
      navigator.serviceWorker.register("sw.js").catch(function () { /* sin conexión: da igual */ });
    });
  }
})();
