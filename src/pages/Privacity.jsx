import React from "react";

const Privacidad = () => (
  <div className="max-w-2xl mx-auto p-6 space-y-4">
    <h1 className="text-2xl font-bold">Política de Privacidad</h1>
    <p>
      Este sitio web no almacena información personal ni utiliza cookies para
      rastrear tu actividad.
    </p>
    <p>
      Los anuncios mostrados provienen de Google AdSense y pueden usar cookies
      según sus políticas.
    </p>
    <p>
      Podés leer más sobre la{" "}
      <a
        href="https://policies.google.com/privacy"
        className="text-blue-600 underline"
        target="_blank"
        rel="noopener noreferrer"
      >
        política de privacidad de Google
      </a>
      .
    </p>
  </div>
);

export default Privacidad;
