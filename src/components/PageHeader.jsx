export default function PageHeader({ title, subtitle }) {
  return (
    <div className="bg-gradient-to-r from-blue-700 to-blue-500 text-white py-20 mb-10">
      <div className="max-w-6xl mx-auto px-6">
        <h1 className="text-4xl font-extrabold">{title}</h1>
        <p className="mt-3 text-lg opacity-90">{subtitle}</p>
      </div>
    </div>
  );
}
