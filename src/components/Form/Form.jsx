import React, { useState } from 'react';
import './Form.css';
import emailjs from 'emailjs-com';

const Form = () => {
  const [nombrecompleto, setNombreCompleto] = useState('');
  const [celular, setCelular] = useState('');
  const [detalles, setDetalles] = useState('');

  const sendEmail = (e) => {
    e.preventDefault();

    if (!nombrecompleto.trim() || !celular.trim() || !detalles.trim()) {
      alert('Por favor, complete todos los campos antes de enviar.');
      return;
    }

    const params = {
      nombrecompleto,
      celular,
      detalles,
    };

    emailjs
      .send('service_5xe9weg', 'template_b1hu4g1', params, 'CjfnckjMLtNkKsn9y') 
      .then(
        (result) => {
          console.log('Email enviado:', result.text);
          alert('¡Pedido registrado con éxito!');
        },
        (error) => {
          console.error('Error al registrar el pedido:', error.text);
          alert('Hubo un error al registrar el pedido. Inténtelo más tarde.');
        }
      );
  };

  return (
    <div className="form-container col-10 justify-content-center">
      <figure className="figure-fotovictoria">
        <img
          className="img-fluid img-fotovictoria"
          src="/imagenes/logo.jpg"
          alt=""
        />
      </figure>
      <h1 className="text-center">BIENVENID@</h1>
      <p className="text-center">
        Para registrar su pedido,{' '}
        <span className="span-datos">complete</span> los siguientes datos
      </p>
      <form onSubmit={sendEmail}>
        <div className="form-group">
          <label htmlFor="input-nombre">Nombre completo</label>
          <input
            type="text"
            className="form-control"
            id="input-nombre"
            placeholder="Ingrese su nombre completo"
            value={nombrecompleto}
            onChange={(e) => setNombreCompleto(e.target.value)}
            required
          />
        </div>
        <div className="form-group">
          <label htmlFor="input-celular">Celular</label>
          <input
            type="tel"
            className="form-control"
            id="input-celular"
            placeholder="Ingrese su número de celular"
            value={celular}
            onChange={(e) => setCelular(e.target.value)}
            required
          />
        </div>
        <div className="form-group">
          <label htmlFor="input-detalles">Detalles del pedido</label>
          <textarea
            className="form-control"
            id="input-detalles"
            placeholder="Detalle su pedido"
            value={detalles}
            onChange={(e) => setDetalles(e.target.value)}
            required
          ></textarea>
        </div>
        <div className="text-center">
          <button type="submit" className="">
            Enviar
          </button>
        </div>
      </form>
    </div>
  );
};

export default Form;
