// eslint-disable-next-line no-unused-vars
import React from "react";
import Button from "./components/Elements/button/button";

export default function App() {
  return (
    <div className="text-2xl flex justify-center min-h-screen items-center">
      <div className="w-full max-w-xs">
        <h1 className="text-3xl font-bold text-blue-700">Login Lek</h1>
        <p className="font-small text-slate-500 mb-B">Isi Email mu ben ra lali aku

        </p>
        <form action="">
          <div className="mb-6">
            <label
             htmlFor="Email" className="block text-slate-700 text-sm font-bold mb-2">
              Email
            </label>
            <input 
            type="text" 
            className="text-sm border rounder w-full py-2 px-3 text-slate-700 placeholder: opacity-50"
            placeholder="contohEmailmu@gmail.com"
            
            />
          </div>
          <div className="mb-6">
            <label
             htmlFor="" className="block text-slate-700 text-sm font-bold mb-2">
              
            </label>
            <input 
            type="text" 
            className="text-sm border rounder w-full py-2 px-3 text-slate-700 placeholder: opacity-50"
            placeholder="contohEmailmu@gmail.com"
            
            />
          </div>
        </form>
      </div>
      
    </div>
  );
}