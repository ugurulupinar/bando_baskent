import React from 'react';

const faqs = [
  {
    question: 'Hangi müzik türlerini çalıyorsunuz?',
    answer: 'Pop, rock, jazz, klasik müzik ve Türk müziği dahil olmak üzere geniş bir repertuara sahibiz.'
  },
  {
    question: 'Kaç kişilik bir ekipsiniz?',
    answer: 'Temel kadromuz 5 kişiden oluşmaktadır, ancak isteğe bağlı olarak daha büyük gruplar halinde de çalabiliyoruz.'
  },
  {
    question: 'Düğün öncesi prova yapıyor musunuz?',
    answer: 'Evet, özellikle ilk dans şarkısı için özel prova seansları düzenliyoruz.'
  }
];

const FAQ = () => {
  return (
    <div className="pt-20">
      <div className="container mx-auto px-4 py-12">
        <h1 className="text-4xl font-serif mb-8">Sıkça Sorulan Sorular</h1>
        
        <div className="space-y-6 max-w-3xl">
          {faqs.map((faq, index) => (
            <div key={index} className="bg-white p-6 rounded-lg shadow-sm">
              <h3 className="text-xl font-semibold mb-2">{faq.question}</h3>
              <p className="text-gray-600">{faq.answer}</p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default FAQ;