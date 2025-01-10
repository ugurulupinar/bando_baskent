import React, { useState } from 'react';
import { Mail, Phone, MapPin, MessageCircle, Instagram } from 'lucide-react';
import emailjs from '@emailjs/browser';

const Contact = () => {
  const whatsappLink = `https://wa.me/905418097073?text=${encodeURIComponent('Merhaba, bilgi almak istiyorum.')}`;
  const [formStatus, setFormStatus] = useState<'idle' | 'sending' | 'success' | 'error'>('idle');
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: ''
  });

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setFormStatus('sending');

    try {
      await emailjs.send(
        "service_fpigk9a",
        "template_2zghc2d",
        {
          to_name: "Bando Başkent",
          from_name: formData.name,
          from_email: formData.email,
          message: formData.message,
          reply_to: formData.email
        }
      );

      setFormStatus('success');
      setFormData({ name: '', email: '', message: '' });
    } catch (error) {
      setFormStatus('error');
      console.error('Error sending email:', error);
    }
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData(prev => ({
      ...prev,
      [e.target.id]: e.target.value
    }));
  };

  return (
    <div className="pt-20">
      {/* İletişim Bilgileri Section */}
      <section className="bg-gray-50 py-16">
        <div className="container mx-auto px-4">
          <h1 className="text-4xl font-serif text-center mb-12">İletişim</h1>
          <div className="max-w-4xl mx-auto">
            <h2 className="text-2xl font-serif text-center mb-8">Bize Ulaşın</h2>
            <div className="grid md:grid-cols-4 gap-6">
              <a 
                href="tel:+905418097073" 
                className="flex flex-col items-center p-6 bg-white rounded-xl shadow-sm hover:shadow-md transition-all hover:-translate-y-1 group"
              >
                <div className="w-16 h-16 flex items-center justify-center rounded-full bg-rose-100 group-hover:bg-rose-200 transition-colors mb-4">
                  <Phone className="h-8 w-8 text-rose-600" />
                </div>
                <span className="text-gray-800 font-medium">Telefon</span>
                <span className="text-gray-600">0541 809 7073</span>
              </a>
              
              <a 
                href="mailto:bandobaskent@gmail.com" 
                className="flex flex-col items-center p-6 bg-white rounded-xl shadow-sm hover:shadow-md transition-all hover:-translate-y-1 group"
              >
                <div className="w-16 h-16 flex items-center justify-center rounded-full bg-blue-100 group-hover:bg-blue-200 transition-colors mb-4">
                  <Mail className="h-8 w-8 text-[#EA4335]" />
                </div>
                <span className="text-gray-800 font-medium">E-posta</span>
                <span className="text-gray-600">bandobaskent@gmail.com</span>
              </a>
              
              <a 
                href={whatsappLink} 
                target="_blank" 
                rel="noopener noreferrer" 
                className="flex flex-col items-center p-6 bg-white rounded-xl shadow-sm hover:shadow-md transition-all hover:-translate-y-1 group"
              >
                <div className="w-16 h-16 flex items-center justify-center rounded-full bg-green-100 group-hover:bg-green-200 transition-colors mb-4">
                  <MessageCircle className="h-8 w-8 text-green-600" />
                </div>
                <span className="text-gray-800 font-medium">WhatsApp</span>
                <span className="text-gray-600">Hemen Mesaj Gönder</span>
              </a>

              <a 
                href="https://instagram.com/bandobaskent" 
                target="_blank" 
                rel="noopener noreferrer" 
                className="flex flex-col items-center p-6 bg-white rounded-xl shadow-sm hover:shadow-md transition-all hover:-translate-y-1 group"
              >
                <div className="w-16 h-16 flex items-center justify-center rounded-full bg-purple-100 group-hover:bg-purple-200 transition-colors mb-4">
                  <Instagram className="h-8 w-8 text-[#E4405F]" />
                </div>
                <span className="text-gray-800 font-medium">Instagram</span>
                <span className="text-gray-600">@bandobaskent</span>
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* Harita ve Form Section */}
      <section className="py-16">
        <div className="container mx-auto px-4">
          <div className="grid md:grid-cols-2 gap-8">
            {/* Harita */}
            <div className="h-[400px] rounded-xl overflow-hidden shadow-sm">
              <iframe
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d48988.55487185782!2d32.77977513899536!3d39.97717522135455!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x14d348c1e5a8e9c7%3A0x8f0c0183ad0bde87!2sYenimahalle%2C%20Ankara!5e0!3m2!1str!2str!4v1710271547943!5m2!1str!2str"
                width="100%"
                height="100%"
                style={{ border: 0 }}
                allowFullScreen
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
              />
            </div>

            {/* Form */}
            <form onSubmit={handleSubmit} className="bg-white p-8 rounded-xl shadow-sm space-y-6">
              <h3 className="text-2xl font-serif mb-6">Mesaj Gönder</h3>
              <div>
                <label htmlFor="name" className="block text-sm font-medium text-gray-700 mb-1">
                  Adınız Soyadınız
                </label>
                <input
                  type="text"
                  id="name"
                  value={formData.name}
                  onChange={handleChange}
                  required
                  className="w-full px-4 py-2 rounded-lg border border-gray-300 focus:ring-2 focus:ring-rose-500 focus:border-transparent"
                />
              </div>
              <div>
                <label htmlFor="email" className="block text-sm font-medium text-gray-700 mb-1">
                  E-posta Adresiniz
                </label>
                <input
                  type="email"
                  id="email"
                  value={formData.email}
                  onChange={handleChange}
                  required
                  className="w-full px-4 py-2 rounded-lg border border-gray-300 focus:ring-2 focus:ring-rose-500 focus:border-transparent"
                />
              </div>
              <div>
                <label htmlFor="message" className="block text-sm font-medium text-gray-700 mb-1">
                  Mesajınız
                </label>
                <textarea
                  id="message"
                  rows={4}
                  value={formData.message}
                  onChange={handleChange}
                  required
                  className="w-full px-4 py-2 rounded-lg border border-gray-300 focus:ring-2 focus:ring-rose-500 focus:border-transparent"
                />
              </div>
              <button
                type="submit"
                disabled={formStatus === 'sending'}
                className={`w-full bg-rose-600 text-white px-6 py-3 rounded-lg hover:bg-rose-700 transition-colors ${
                  formStatus === 'sending' ? 'opacity-50 cursor-not-allowed' : ''
                }`}
              >
                {formStatus === 'sending' ? 'Gönderiliyor...' : 'Gönder'}
              </button>

              {formStatus === 'success' && (
                <div className="p-4 bg-green-100 text-green-700 rounded-lg">
                  Mesajınız başarıyla gönderildi. En kısa sürede size dönüş yapacağız.
                </div>
              )}

              {formStatus === 'error' && (
                <div className="p-4 bg-red-100 text-red-700 rounded-lg">
                  Mesajınız gönderilirken bir hata oluştu. Lütfen daha sonra tekrar deneyin.
                </div>
              )}
            </form>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Contact;