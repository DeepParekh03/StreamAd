"use client"
import { Dialog, DialogPanel } from '@headlessui/react'
import { Bars3Icon, XMarkIcon } from '@heroicons/react/24/outline'
import { WalletSelector } from "@aptos-labs/wallet-adapter-ant-design";
import { useState } from 'react';

export default function Home() { 
  return (
    <div className="overflow-hidden">
      <div className="bg-white h-screen">
    
        <div className="relative isolate flex flex-col items-center justify-center h-full">
          <div
            aria-hidden="true"
            className="absolute inset-x-0 -z-10 transform-gpu overflow-hidden blur-3xl"
          >
            <div
              style={{
                clipPath:
                  'polygon(74.1% 44.1%, 100% 61.6%, 97.5% 26.9%, 85.5% 0.1%, 80.7% 2%, 72.5% 32.5%, 60.2% 62.4%, 52.4% 68.1%, 47.5% 58.3%, 45.2% 34.5%, 27.5% 76.7%, 0.1% 64.9%, 17.9% 100%, 27.6% 76.8%, 76.1% 97.7%, 74.1% 44.1%)',
              }}
              className="relative left-[calc(50%-5rem)] aspect-[1155/678] w-[20rem] -translate-x-1/2 rotate-[30deg] bg-gradient-to-tr from-[#000000] to-[#000000] opacity-30 sm:left-[calc(50%-15rem)] sm:w-[40rem]"
            />
          </div>
          <div className="mx-auto max-w-2xl sm:py-48 lg:py-56 text-center">
            <h1 className="text-balance text-4xl font-bold tracking-tight text-gray-900 sm:text-6xl">
              " StreamADS "
            </h1>
            <p className="mt-6 text-2xl font-bold leading-8 text-gray-600">
              Promote, Engage, Get Rewarded
            </p>
            <p className="mt-6 text-xl leading-8 text-gray-600">
              Promote tweets with StreamADS. Analytics and Rewards all under one roof
            </p>
            <div className="mt-10 flex items-center justify-center gap-x-6">
              <a
                href="#"
                className="rounded-md bg-indigo-600 px-3.5 py-2.5 text-sm font-semibold text-white shadow-sm hover:bg-indigo-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600"
              >
                Create your own campaign
              </a>
              <a href="#" className="text-sm font-semibold leading-6 text-gray-900">
                Participate in ongoing campaigns <span aria-hidden="true">→</span>
              </a>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
