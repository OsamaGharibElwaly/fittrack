import React from "react";
import Header from "../../components/Header";
import Footer from "../../components/Footer";


export default function ContactComponent() {
  return (
    <div className="flex flex-col min-h-screen bg-background-light dark:bg-background-dark text-slate-800 dark:text-slate-200">
      {/* Header */}
      <Header />

      {/* Main */}
      <main className="flex-grow container mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="max-w-3xl mx-auto">
          <div className="text-center mb-12">
            <h1 className="text-4xl font-extrabold tracking-tight text-slate-900 dark:text-white sm:text-5xl">
              Contact Us
            </h1>
            <p className="mt-4 text-lg text-slate-600 dark:text-slate-400">
              We're here to help and answer any question you might have.
            </p>
          </div>

          {/* Profile card */}
          <div className="bg-background-light dark:bg-background-dark/50 rounded-xl shadow-lg p-8 mb-12 flex flex-col items-center border border-slate-200/80 dark:border-slate-800/80">
            <div className="relative mb-6">
              <div
                className="w-32 h-32 rounded-full bg-cover bg-center ring-4 ring-primary/20"
                style={{
                  backgroundImage:
                    'url("https://scontent.fcai20-5.fna.fbcdn.net/v/t1.6435-9/132733983_1092448661198910_8764188936974290360_n.jpg?_nc_cat=101&ccb=1-7&_nc_sid=a5f93a&_nc_ohc=15rpF25QQ4oQ7kNvwHRLD_L&_nc_oc=AdkKXNXQR3YmAAbhIynAskcJU2s3nwu52lk8kCJ3KTu1sZFoj_wJ-QTNUCEn4maLZxY&_nc_zt=23&_nc_ht=scontent.fcai20-5.fna&_nc_gid=yrkwXSACkMA-uczt0OYe_g&oh=00_AfZmshn85Xs-eugzmHWAiTTGYFbdLzVM3PA7P2V0-WEmxA&oe=68F37EF3")',
                }}
              />
              <div className="absolute bottom-0 right-0 h-8 w-8 bg-primary rounded-full flex items-center justify-center text-white ring-4 ring-background-light dark:ring-background-dark">
                ✔
              </div>
            </div>
            <div className="text-center">
              <h2 className="text-2xl font-bold text-slate-900 dark:text-white">
                Osama Alwaly
              </h2>
              <p className="text-primary font-medium">FullStack Engineer</p>
            </div>
          </div>

          {/* Contact Info + Social */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-12">
            {/* Contact Info */}
            <div className="bg-background-light dark:bg-background-dark/50 rounded-xl shadow-lg p-6 border border-slate-200/80 dark:border-slate-800/80">
              <h3 className="text-lg font-bold text-slate-900 dark:text-white mb-4">
                Contact Information
              </h3>
              <p className="text-sm">📧 Email: osamagharib04@gmail.com</p>
              <p className="text-sm">📞 Phone: +20 121 091 6041</p>
              <p className="text-sm">
                📍 Address: Port Said , EG
              </p>
            </div>

            {/* Social Media */}
            <div className="bg-background-light dark:bg-background-dark/50 rounded-xl shadow-lg p-6 border border-slate-200/80 dark:border-slate-800/80">
              <h3 className="text-lg font-bold text-slate-900 dark:text-white mb-4">
                Social Media
              </h3>
              <ul className="space-y-2">
                <li>📸 Instagram</li>
                <li>🐦 Twitter</li>
                <li>📘 Facebook</li>
                <li>💼 LinkedIn</li>
              </ul>
            </div>
          </div>
        </div>
      </main>

      {/* Footer */}
      <Footer />
    </div>
  );
}


/* 
    Add like footer icons for social media with your links
*/