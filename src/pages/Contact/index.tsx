import React, { useState } from "react";

type FormData = {
  name: string;
  phone: string;
  email: string;
  message: string;
};

const Contact: React.FC = () => {
  const [formData, setFormData] = useState<FormData>({
    name: "",
    phone: "",
    email: "",
    message: "",
  });

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    console.log("Form Data Submitted:", formData);
  };


  return (
    <div className="w-full bg-blue-dark flex flex-col items-center">
      <h1 className="text-6xl text-blue-pop mb-3">Fale conosco</h1>
      <form
        onSubmit={handleSubmit}
        className="md:w-1/2 flex flex-row gap-2 p-2"
      >
        <div className="w-full gap-2">
          <div>
            <label
              htmlFor="name"
              className="block text-sm font-medium text-blue-pop"
            >
              Nome
            </label>
            <input
              type="text"
              name="name"
              id="name"
              value={formData.name}
              onChange={handleChange}
              className="mt-1 p-2 block w-full border border-gray-300 rounded-md shadow-sm focus:ring-blue-pop focus:border-blue-pop"
              required
            />
          </div>
          <div>
            <label
              htmlFor="phone"
              className="block text-sm font-medium text-blue-pop"
            >
              Telefone
            </label>
            <input
              type="tel"
              name="phone"
              id="phone"
              value={formData.phone}
              onChange={handleChange}
              className="mt-1 p-2 block w-full border border-gray-300 rounded-md shadow-sm focus:ring-blue-pop focus:border-blue-pop"
            />
          </div>
          <div>
            <label
              htmlFor="email"
              className="block text-sm font-medium text-blue-pop"
            >
              Email
            </label>
            <input
              type="email"
              name="email"
              id="email"
              value={formData.email}
              onChange={handleChange}
              className="mt-1 p-2 block w-full border border-gray-300 rounded-md shadow-sm focus:ring-blue-pop focus:border-blue-pop"
              required
            />
          </div>
        </div>
        <div className="w-full h-full flex flex-col gap-5">
          <div>
            <label
              htmlFor="message"
              className="block text-sm font-medium text-blue-pop"
            >
              Mensagem
            </label>
            <textarea
              name="message"
              id="message"
              value={formData.message}
              onChange={handleChange}
              className="mt-1 p-2 block w-full border border-gray-300 rounded-md shadow-sm focus:ring-blue-pop focus:border-blue-pop"
              rows={4}
              required
            />
          </div>
          <div>
            <button
              type="submit"
              className="w-full bg-blue-pop text-white p-2 rounded-md shadow hover:bg-blue-600 focus:outline-none focus:ring-2 focus:ring-blue-pop"
            >
              Enviar
            </button>
          </div>
        </div>
      </form>
          
    </div>
  );
};

export default Contact;
