'use client'

import { useState } from 'react'
import {
  Dialog,
  DialogPanel,
  Disclosure,
  DisclosureButton,
  DisclosurePanel,
  Popover,
  PopoverButton,
  PopoverGroup,
  PopoverPanel,
} from '@headlessui/react'
import {
  ArrowPathIcon,
  Bars3Icon,
  ChartPieIcon,
  CursorArrowRaysIcon,
  FingerPrintIcon,
  SquaresPlusIcon,
  XMarkIcon,
} from '@heroicons/react/24/outline'
import { ChevronDownIcon, PhoneIcon, PlayCircleIcon } from '@heroicons/react/20/solid'
import { Link } from 'react-router-dom'

const products = [
  { name: 'Small Scale Business Loans', description: 'Providing loans which designed for your aspirations in starting a business', href: '#', icon: ChartPieIcon },
  { name: 'Money Remittance', description: 'Secure, simple and most exciting way of your transactions to inter and intra regions', href: '#', icon: CursorArrowRaysIcon },
  { name: 'Wealth Management', description: 'We are providing significant services for your betterment of your wealth management by experts', href: '#', icon: FingerPrintIcon },
  { name: 'Micro Finance', description: 'Motivate the entrepreneurs across all small villages and rural areas by providing them a better support', href: '#', icon: SquaresPlusIcon },
]


export default function Navbar() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false)

  return (
    <header className="bg-teal-600 text-white">
      <nav aria-label="Global" className="mx-auto flex max-w-7xl items-center justify-between p-6 lg:px-8">
        <div className="flex lg:flex-1">
          <Link to={'/home'} className="-m-1.5 p-1.5">
            <span className='text-lg font-bold'> Civil Finloan</span>
          </Link>
        </div>
        <div className="flex lg:hidden">
          <button
            type="button"
            onClick={() => setMobileMenuOpen(true)}
            className="-m-2.5 inline-flex items-center justify-center rounded-md p-2.5 text-gray-700"
          >
            <span className="sr-only">Open main menu</span>
            <Bars3Icon aria-hidden="true" className="size-6" />
          </button>
        </div>
        <PopoverGroup className="hidden lg:flex lg:gap-x-12">
          <Popover className="relative">
            <PopoverButton className="flex items-center gap-x-1 text-sm/6 font-semibold text-gray-100">
              Services
              <ChevronDownIcon aria-hidden="true" className="size-5 flex-none text-gray-100" />
            </PopoverButton>

            <PopoverPanel
              transition
              className="absolute top-full bg-teal-50 -left-8 z-10 mt-3 w-screen max-w-md overflow-hidden rounded-3xl shadow-lg ring-1 ring-gray-900/5 transition data-closed:translate-y-1 data-closed:opacity-0 data-enter:duration-200 data-enter:ease-out data-leave:duration-150 data-leave:ease-in"
            >
              <div className="p-4">
                {products.map((item) => (
                  <div
                    key={item.name}
                    className="group relative flex items-center gap-x-6 rounded-lg p-4 text-sm/6 hover:bg-gray-50"
                  >
                    <div className="flex size-11 flex-none items-center justify-center rounded-lg bg-gray-50 group-hover:bg-white">
                      <item.icon aria-hidden="true" className="size-6 text-gray-600 group-hover:text-indigo-600" />
                    </div>
                    <div className="flex-auto">
                      <a href={item.href} className="block font-semibold text-gray-900">
                        {item.name}
                        <span className="absolute inset-0" />
                      </a>
                      <p className="mt-1 text-gray-600">{item.description}</p>
                    </div>
                  </div>
                ))}
              </div>
            </PopoverPanel>
          </Popover>

          <Link to={'/'} className="text-sm/6 font-semibold text-gray-100">
            Login
          </Link>
          <Link to={'/about'} className="text-sm/6 font-semibold text-gray-100">
            About
          </Link>
          <Link to={'/emi'} className="text-sm/6 font-semibold text-gray-100">
            EMI Calculator
          </Link>
          <Link to={'/member'} className="text-sm/6 font-semibold text-gray-100">
            Add as a Member
          </Link>          <Link to={'/profile'} className="text-sm/6 font-semibold text-gray-100">
            Update Profile
          </Link>

        </PopoverGroup>
      </nav>
      <Dialog open={mobileMenuOpen} onClose={setMobileMenuOpen} className="lg:hidden">
        <div className="fixed inset-0 z-10" />
        <DialogPanel className="fixed inset-y-0 right-0 z-10 w-full overflow-y-auto bg-white px-6 py-6 sm:max-w-sm sm:ring-1 sm:ring-gray-900/10">
          <div className="flex items-center justify-between">
            <Link to={'/home'} className="-m-1.5 p-1.5">
              <span className='text-teal-500 font-bold'>Civil Finloan</span>
            </Link>
            <button
              type="button"
              onClick={() => setMobileMenuOpen(false)}
              className="-m-2.5 rounded-md p-2.5 text-gray-700"
            >
              <span className="sr-only">Close menu</span>
              <XMarkIcon aria-hidden="true" className="size-6" />
            </button>
          </div>
          <div className="mt-6 flow-root">
            <div className="-my-6 divide-y divide-gray-500/10">
              <div className="space-y-2 py-6">
                <Disclosure as="div" className="-mx-3">
                  <DisclosureButton className="group flex w-full items-center justify-between rounded-lg py-2 pr-3.5 pl-3 text-base/7 font-semibold text-teal-600 hover:bg-gray-50">
                    Services
                    <ChevronDownIcon aria-hidden="true" className="size-5 flex-none group-data-open:rotate-180" />
                  </DisclosureButton>
                </Disclosure>
                <Link
                  to={'/about'}
                  className="-mx-3 block rounded-lg px-3 py-2 text-base/7 font-semibold text-teal-500 hover:bg-gray-50"
                >
                  About
                </Link>
                <Link
                  to={'/'}
                  className="-mx-3 block rounded-lg px-3 py-2 text-base/7 font-semibold text-teal-500 hover:bg-gray-50"
                >
                  Login
                </Link>
                <Link
                  to={'/member'}
                  className="-mx-3 block rounded-lg px-3 py-2 text-base/7 font-semibold text-teal-500 hover:bg-gray-50"
                >
                  Join as a Member
                </Link>
                <Link
                  to={'/emi'}
                  className="-mx-3 block rounded-lg px-3 py-2 text-base/7 font-semibold text-teal-500 hover:bg-gray-50"
                >
                                    EMI Calculator

                </Link>
                <Link
                  to={'/profile'}
                  className="-mx-3 block rounded-lg px-3 py-2 text-base/7 font-semibold text-teal-500 hover:bg-gray-50"
                >
                  Update Profile
                </Link>

              </div>
            </div>
          </div>
        </DialogPanel>
      </Dialog>
    </header>
  )
}
