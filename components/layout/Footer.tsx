import React from "react";

const Footer: React.FC = () => {
  return (
    <footer className="bg-gray-50 border-t mt-12">
      <div className="max-w-7xl mx-auto px-4 py-8 sm:px-6 lg:px-8">
        <div className="flex flex-col md:flex-row justify-between items-start md:items-center gap-4">
          <div>
            <div className="font-semibold">Vilis Listings</div>
            <div className="text-sm text-gray-600">
              Find your favorite place here.
            </div>
          </div>
          <div className="text-sm text-gray-600">
            © {new Date().getFullYear()} Vilis. All rights reserved.
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
