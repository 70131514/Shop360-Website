import React from 'react';
export function Footer() {
  return <footer className="bg-[#FFFFFF] dark:bg-[#000000] py-12 border-t border-[#E0E0E0] dark:border-[#333333] transition-colors duration-300">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 flex flex-col md:flex-row justify-between items-center gap-6">
        <div className="text-center md:text-left">
          <h3 className="text-lg font-bold text-[#000000] dark:text-[#FFFFFF]">Shop360°</h3>
          <p className="text-sm text-[#666666] dark:text-[#999999] mt-1">Final Year Project 2024</p>
        </div>

        <div className="text-sm text-[#666666] dark:text-[#666666]">
          © {new Date().getFullYear()} Shop360°. All rights reserved.
        </div>
      </div>
    </footer>;
}