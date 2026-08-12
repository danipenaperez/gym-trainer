# PRD — Gym Trainer (entrenamiento guiado en casa)

- **Dominio previsto**: GitHub Pages (sitio estático, sin dominio propio ni Route53)
- **Fecha**: 2026-08-12
- **Estado**: borrador

## 1. Problema y dominio de negocio

Me compré unas pesas y quiero entrenar en casa, pero **me da pereza la parte de pensar
qué ejercicio toca**. Quiero abrir una app en el móvil, darle a *start*, y que ella me
guíe ejercicio por ejercicio hasta el último, para **no dejarme ninguno sin hacer**.

No es una app de planificación ni de estadísticas: es una **guía paso a paso** de una rutina
fija que hago siempre igual.

**Dominio**: entrenamiento en casa, guiado. Vocabulario propio:
- **Ejercicio**: un paso de la rutina (p. ej. "Bíceps sentado, brazo derecho").
- **Rutina**: la lista ordenada y fija de ejercicios.
- **Sesión**: un entrenamiento de principio a fin (del primer ejercicio al último).
- **Paso actual**: el ejercicio que la app te muestra ahora mismo.

## 2. Actores y tipos de usuario

- **Yo (usuario único)**: abro la app, empiezo la sesión, voy avanzando ejercicio por
  ejercicio marcando "siguiente" a mi ritmo, y termino. Puedo volver al ejercicio anterior
  si me equivoco. No puedo (ni quiero) editar la rutina desde la app; la lista está fija en
  el código.

### Quién no es usuario
- No es para clientes de un entrenador ni para otras personas con sus propias rutinas.
- No hay administrador, ni backoffice, ni sistemas externos.

## 3. Grandes bloques funcionales

Una sola superficie: la **app de entrenamiento guiado** (web que se abre en el móvil y se
puede añadir a la pantalla de inicio). No hay landing de captación, ni panel de gestión,
ni API. Todo es una única pantalla-flujo.

## 4. Funcionalidades

### MVP (v1)
- Pantalla de **inicio** con un botón **Start** que arranca la sesión.
- Vista de **un ejercicio a la vez**, mostrando:
  - Nombre del ejercicio ("Bíceps sentado, brazo derecho").
  - Repeticiones (p. ej. "3×12").
  - Imagen del ejercicio, si está disponible (si no carga, se muestra solo el nombre sin
    romperse).
- Botones **Siguiente** y **Atrás** para navegar entre ejercicios.
- **Indicador de progreso** ("7 / 15" o barra) para ver cuánto queda.
- Al pasar del **último** ejercicio: pantalla **"¡Hecho!"** de sesión completada, y fin.
- **Rutina fija** definida en el código (yo la escribo por orden; siempre la misma).
- Cada vez que se abre, la sesión **empieza desde el ejercicio 1**.
- Se puede **añadir a la pantalla de inicio** del móvil y abrir a pantalla completa,
  como una app.

### Más adelante (fuera del MVP)
- **Progresión automática de repeticiones**: cada 2 sesiones completadas, +1 repetición
  (12 → 13 → …). Requiere **guardar en el propio dispositivo** (localStorage) el contador de
  sesiones completadas. Es lo único que se recordaría entre días.
- Imágenes para todos los ejercicios (si en el MVP no están todas).

## 5. Historias de usuario y casos de uso

- Como **usuario** quiero **darle a Start y que me muestre el primer ejercicio** para
  empezar a entrenar sin pensar qué toca.
- Como **usuario** quiero **darle a Siguiente al terminar cada ejercicio** para avanzar por
  la rutina hasta el final sin saltarme ninguno.
- Como **usuario** quiero **volver Atrás si me equivoco de paso** para corregir sin frustración.
- Como **usuario** quiero **ver cuántos ejercicios me quedan** para saber cuánto falta.
- Como **usuario** quiero **una pantalla de "Hecho" al terminar** para saber que he completado
  la sesión.

## 6. Casos límite y qué hacer con ellos

- **Imagen no disponible o no carga** → mostrar solo el nombre y las repeticiones, sin romper
  el diseño.
- **"Siguiente" o marcado por error** → el botón **Atrás** permite volver al ejercicio anterior.
- **Primer ejercicio** → el botón Atrás no hace nada (o no se muestra) en el paso 1.
- **Último ejercicio** → "Siguiente" lleva a la pantalla de "¡Hecho!".
- **Cerrar/bloquear el móvil o recargar a mitad de sesión** → al reabrir se **empieza de cero**
  desde el ejercicio 1 (decisión aceptada; ese día se dio por dejado).
- **Ejercicios de dos lados** (brazo derecho / izquierdo) → se modelan como **dos entradas
  separadas** en la lista, no necesita lógica especial.

## 7. No-objetivos

- **Sin cuentas ni login** de ningún tipo.
- **No es para otras personas** (usuario único, una sola rutina).
- **Sin historial ni estadísticas** de progreso.
- **Sin temporizador/cronómetro**: se avanza manualmente, a mi ritmo.
- **No se edita la rutina desde la app**: se cambia en el código.
- **Sin backend propio**: es un sitio estático (GitHub Pages); no hay servidor donde guardar
  datos.
- **Monolingüe (castellano)**: no hay multi-idioma, ni de UI ni de contenido.
- **Sin SEO**: es una herramienta personal privada, no un producto público que haya que
  posicionar en buscadores.
- **Sin dominio propio ni Route53**: se sirve en la URL de GitHub Pages.

## 8. Métricas de éxito

- **Objetivo de uso**: entrenar con la app **al menos 3 veces por semana**.
- **Señal real (cualitativa)**: "verme más musculoso" con el tiempo. Es una app personal;
  el número anterior es la referencia, esta es la señal honesta de que ha servido.

## 9. Necesidades técnicas

- **Cuentas de usuario**: no.
- **Pagos**: no.
- **Persistencia de datos**: ninguna en el MVP. En la fase "más adelante", solo un contador
  de sesiones **en el propio dispositivo** (localStorage) para la progresión de repeticiones.
- **Integraciones**: ninguna.
- **Experiencia instalable (app-like)**: **sí**. El producto se vive como una **app que se
  añade a la pantalla de inicio** del móvil y se abre a pantalla completa, no como una web
  que se visita ocasionalmente. Superficie instalable: la única que hay, la app de
  entrenamiento.
- **Hosting**: sitio **estático en GitHub Pages** (sin AWS, sin dominio, sin Route53).

## 10. Riesgos y supuestos

- **Supuesto**: la rutina cabida en el código y editada a mano es suficiente; no echaré de
  menos editarla desde la app en el corto plazo. *(confirmar con el uso)*
- **Supuesto**: empezar siempre desde el ejercicio 1 (sin "retomar a mitad") no molesta en
  la práctica. *(confirmar con el uso)*
- **Riesgo**: conseguir/crear imágenes para todos los ejercicios puede ser el trabajo más
  pesado; por eso las imágenes son opcionales y degradables en el MVP.

## 11. Notas

- **Decisión aplazada — progresión de repeticiones**: la regla "+1 rep cada 2 sesiones" está
  esbozada pero no cerrada. Pendiente para cuando se aborde: ¿la progresión es **global**
  (todos los ejercicios suben a la vez) o **por ejercicio**? ¿Hay **tope** de repeticiones?
  ¿Se puede **resetear**? Esto se retoma al construir la funcionalidad "más adelante"; es lo
  que obliga a guardar en localStorage.
- El usuario resume el producto como: "no es nada complejo, es solo para no dejarme ningún
  ejercicio sin hacer".
