import React from 'react';
export function Footer() {
  return <footer className="bg-white py-12 border-t border-gray-100">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 flex flex-col md:flex-row justify-between items-center gap-6">
        <div className="text-center md:text-left">
          <h3 className="text-lg font-bold text-gray-900">Shop360°</h3>
          <p className="text-sm text-gray-500 mt-1">Final Year Project 2024</p>
        </div>

        <div className="text-sm text-gray-400">
          © {new Date().getFullYear()} Shop360°. All rights reserved.
        </div>
      </div>
    </footer>;
}