import React from 'react';
import { ChevronRight, Instagram } from 'lucide-react';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';

export default function PrivacyPolicyPage() {
  const instagramImages = [
    "https://images.unsplash.com/photo-1523050854058-8df90110c9f1?w=400&h=400&fit=crop",
    "https://images.unsplash.com/photo-1524178232363-1fb2b075b655?w=400&h=400&fit=crop",
    "https://images.unsplash.com/photo-1503676260728-1c00da094a0b?w=400&h=400&fit=crop",
    "https://images.unsplash.com/photo-1541339907198-e08756dedf3f?w=400&h=400&fit=crop",
    "https://images.unsplash.com/photo-1519389950473-47ba0277781c?w=400&h=400&fit=crop",
    "https://images.unsplash.com/photo-1498243691581-b145c3f54a5a?w=400&h=400&fit=crop"
  ];

  return (
    <div className="min-h-screen bg-gray-50">
      {/* ============================================ */}
      {/* INSERT NAVBAR COMPONENT HERE */}
      <Navbar />
      {/* ============================================ */}

      {/* Hero Breadcrumb with Background Image */}
      <div 
        className="relative bg-cover bg-center py-24 md:py-32"
        style={{
          backgroundImage: "url('https://images.unsplash.com/photo-1521737711867-e3b97375f902?w=1600&h=400&fit=crop')"
        }}
      >
        <div className="absolute inset-0 bg-gradient-to-r from-purple-900/80 to-blue-900/80"></div>
        <div className="container mx-auto px-4 relative z-10">
          <div className="text-center text-white max-w-3xl mx-auto">
            <h1 className="text-4xl md:text-5xl font-bold mb-4">Privacy Policy</h1>
            <p className="text-lg mb-6">Histudy Course Privacy Policy Here.</p>
            <div className="flex items-center justify-center gap-2 text-sm">
              <a href="/" className="hover:underline">Home</a>
              <ChevronRight className="w-4 h-4" />
              <span className="opacity-90">Purchase Guide</span>
            </div>
          </div>
        </div>
      </div>

      {/* Main Content Area */}
      <div className="py-16 md:py-24 bg-white">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            {/* Featured Image */}
            <div className="mb-12 rounded-lg overflow-hidden shadow-lg">
              <img
                src="https://images.unsplash.com/photo-1450101499163-c8848c66ca85?w=1200&h=600&fit=crop"
                alt="Privacy Policy"
                className="w-full h-auto"
              />
            </div>

            {/* Content */}
            <div className="prose max-w-none">
              <h4 className="text-2xl font-bold text-gray-800 mb-6">Welcome to Imroz Privacy Policy</h4>
              
              <ol className="list-decimal list-inside space-y-4 text-gray-600 mb-8">
                <li>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur (the "Sites").</li>
                <li>Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam rem aperiam, eaque ipsa quae ab illo inventore veritatis et quasi architecto beatae vitae dicta sunt explicabo.</li>
                <li>Nemo enim ipsam voluptatem quia voluptas sit aspernatur aut odit aut fugit, sed quia consequuntur magni dolores eos qui ratione voluptatem sequi nesciunt. Neque porro quisquam est, qui dolorem ipsum quia dolor sit amet, consectetur, adipisci velit, sed quia non numquam eius modi tempora incidunt ut labore et dolore magnam aliquam quaerat voluptatem.</li>
              </ol>

              <h4 className="text-2xl font-bold text-gray-800 mb-6">The type of personal information we collect</h4>
              
              <ol className="list-decimal list-inside space-y-4 text-gray-600 mb-8">
                <li>We collect certain personal information about visitors and users of our Sites. <a href="https://themeforest.net/user/pixcelsthemes" className="text-purple-600 hover:underline">https://themeforest.net/user/pixcelsthemes</a></li>
                <li>Ut enim ad minima veniam, quis nostrum exercitationem ullam corporis suscipit laboriosam, nisi ut aliquid ex ea commodi consequatur? Quis autem vel eum iure reprehenderit qui in ea voluptate velit esse quam nihil molestiae consequatur, vel illum qui dolorem eum fugiat quo voluptas nulla pariatur.</li>
              </ol>

              <h4 className="text-2xl font-bold text-gray-800 mb-6">How we collect personal information</h4>
              
              <ol className="list-decimal list-inside space-y-4 text-gray-600 mb-8">
                <li>I must explain to you how all this mistaken idea of denouncing pleasure and praising pain was born and I will give you a complete account of the system, and expound the actual teachings.</li>
                <li>At vero eos et accusamus et iusto odio dignissimos ducimus qui blanditiis praesentium voluptatum deleniti atque corrupti quos dolores et quas molestias excepturi sint occaecati cupiditate non provident similique sunt in culpa qui officia deserunt mollitia animi, id est laborum et dolorum fuga.</li>
                <li>On the other hand, we denounce with righteous indignation and dislike men who are so beguiled and demoralized by the charms of pleasure of the moment, so blinded by desire, that they cannot foresee the pain and trouble that are bound to ensue; and equal blame belongs to those who fail in their duty through weakness of will, which is the same as saying through shrinking from toil and pain. These cases are perfectly simple and easy to distinguish. In a free hour, when our power of choice is untrammelled and when nothing prevents our being able to do what we like best, every pleasure is to be welcomed and every pain avoided. But in certain circumstances and owing to the claims of duty or the obligations.</li>
              </ol>
            </div>
          </div>
        </div>
      </div>

      {/* Instagram Section */}
      <div className="bg-white py-0">
        <div className="container-fluid mx-auto px-0">
          <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-6 gap-3">
            {instagramImages.map((image, index) => (
              <div key={index} className="relative group overflow-hidden aspect-square">
                <img
                  src={image}
                  alt={`Instagram ${index + 1}`}
                  className="w-full h-full object-cover transition-transform duration-300 group-hover:scale-110"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/70 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-end justify-center pb-4">
                  <div className="text-white text-center">
                    <Instagram className="w-6 h-6 mx-auto mb-1" />
                    <span className="text-sm font-semibold">@Histudy</span>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* ============================================ */}
      {/* INSERT FOOTER COMPONENT HERE */}
      <Footer />
      {/* ============================================ */}
    </div>
  );
}