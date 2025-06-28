export default function Certificates() {
  const certificates = [
    {
      title: "ITI Full Stack Web Development",
      issuer: "Information Technology Institute (ITI)",
      date: "2025",
      image: "https://tse4.mm.bing.net/th/id/OIP.E9sFlcJrnRVcWS3UMnmWNAHaD3?rs=1&pid=ImgDetMain", // ضع صورة الشهادة في public/images أو استخدم رابط خارجي
      link: "#", // رابط الشهادة أو اتركه فارغ
    },
    {
      title: "Bachelor's Degree in Computer Science",
      issuer: "Your University Name",
      date: "2024",
      image: "https://th.bing.com/th/id/R.872265f9a2b52ecadd8c39a539283819?rik=sgEza%2f2KlzBcLA&pid=ImgRaw&r=0",
      link: "#",
    },
  ];

  return (
    <section id="certificates" className="py-24 px-4 bg-white dark:bg-neutral-900 transition-colors">
      <h2 className="text-3xl font-bold text-center text-gray-800 dark:text-white mb-8">Certificates</h2>
      <div className="max-w-4xl mx-auto grid md:grid-cols-2 gap-8">
        {certificates.map((cert, idx) => (
          <div key={idx} className="bg-gray-50 dark:bg-neutral-800 rounded-2xl shadow p-6 flex flex-col items-center">
            <img
              src={cert.image}
              alt={cert.title}
              className="w-40 h-28 object-cover rounded mb-4 border border-gray-200 dark:border-neutral-700"
            />
            <h3 className="text-xl font-semibold text-gray-900 dark:text-white mb-1">{cert.title}</h3>
            <div className="text-gray-600 dark:text-gray-300 mb-1">{cert.issuer}</div>
            <div className="text-sm text-gray-400 mb-2">{cert.date}</div>
            {cert.link && (
              <a
                href={cert.link}
                target="_blank"
                rel="noopener noreferrer"
                className="text-blue-600 dark:text-blue-400 hover:underline text-sm"
              >
                View Certificate
              </a>
            )}
          </div>
        ))}
      </div>
    </section>
  );
}