import { Fragment, useState } from "react";
import { useNavigate } from "react-router-dom";
import { Dialog, Disclosure, Popover, Transition } from "@headlessui/react";
import { IoIosArrowDown } from "react-icons/io";
import { IoClose } from "react-icons/io5";
import { FaBarsStaggered, FaIndustry } from "react-icons/fa6";
import { GiElectricalResistance } from "react-icons/gi";
import { FaPhoneAlt, FaHome, FaLocationArrow } from "react-icons/fa";
import { MdOutlineWork } from "react-icons/md";
import logo from "../../assets/logosartori2.png";


const services = [
  {
    name: "Todos os serviços",
    description: "",
    href: "/servicos",
    icon: MdOutlineWork,
  },
  {
    name: "Industrial",
    description:
      "Soluções elétricas industriais, para eficiência operacional e conformidade.",
    href: "/servicos/eletrica-industrial",
    icon: FaIndustry,
  },

  {
    name: "Residêncial",
    description:
      "Serviços elétricos para lares, abrangendo instalações, reparos e automação para ambientes seguros e eficientes.",
    href: "/servicos/eletrica-predial",
    icon: FaHome,
  },
];

const products = [
  {
    name: "Todos os paíneis",
    description:
      "",
    href: "/produtos",
    icon: GiElectricalResistance,
  },
  
];

const callsToAction = [
  { name: "Localização", href: "https://www.google.com.br/maps/place/Sartori+El%C3%A9trica/@-19.9238017,-44.089149,17z/data=!3m1!4b1!4m6!3m5!1s0xa695ca68053d29:0xb9efa65c70d471e9!8m2!3d-19.9238068!4d-44.0865741!16s%2Fg%2F11sfj02jlf?entry=ttu", icon: FaLocationArrow },
  { name: "Fale conosco", href: "https://wa.me/31971222983", icon: FaPhoneAlt },
];

function classNames(...classes: string[]) {
  return classes.filter(Boolean).join(" ");
}

export default function Example() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const navigate = useNavigate();

  return (
    <header className="bg-transparent shadow-sm relative">
      <nav
        className="mx-auto flex max-w-7xl items-center justify-between p-6 lg:px-8"
        aria-label="Global"
      >
        <div className="flex lg:flex-1">
          <a href="/" className="-m-1.5 p-1.5">
            <img className="h-12 w-auto" src={logo} alt="Logo Sartori" />
          </a>
        </div>
        <div className="flex lg:hidden">
          <button
            type="button"
            className="-m-2.5 inline-flex items-center justify-center rounded-md p-2.5 text-gray-700"
            onClick={() => setMobileMenuOpen(true)}
          >
            <span className="sr-only">Open main menu</span>
            <FaBarsStaggered className="h-6 w-6" aria-hidden="true" />
          </button>
        </div>
        <Popover.Group className="hidden lg:flex lg:gap-x-12">
          <a
            onClick={() => navigate("/")}
            className="cursor-pointer text-sm font-sans font-bold leading-6 text-gray-900"
          >
            HOME
          </a>

          <a
            onClick={() => navigate("/sobre")}
            className="cursor-pointer text-sm font-sans font-bold leading-6 text-gray-900"
          >
            SARTORI
          </a>
          <Popover className="relative">
            <Popover.Button className="flex items-center gap-x-1 text-sm font-san font-bold leading-6 text-gray-700">
              SERVIÇOS
              <IoIosArrowDown
                className="h-5 w-5 flex-none text-gray-400"
                aria-hidden="true"
              />
            </Popover.Button>

            <Transition
              as={Fragment}
              enter="transition ease-out duration-200"
              enterFrom="opacity-0 translate-y-1"
              enterTo="opacity-100 translate-y-0"
              leave="transition ease-in duration-150"
              leaveFrom="opacity-100 translate-y-0"
              leaveTo="opacity-0 translate-y-1"
            >
              <Popover.Panel className="absolute -left-8 top-full z-10 mt-3 w-screen max-w-md overflow-hidden rounded-lg bg-white shadow-lg ring-1 ring-gray-900/5">
                <div className="p-4">
                  {services.map((item) => (
                    <div
                      key={item.name}
                      className="group relative flex items-center gap-x-6 rounded-lg p-4 text-sm leading-6 hover:bg-gray-50"
                    >
                      <div className="flex h-11 w-11 flex-none items-center justify-center rounded-lg bg-gray-50 group-hover:bg-white">
                        <item.icon
                          className="h-6 w-6 text-gray-600 group-hover:text-indigo-600"
                          aria-hidden="true"
                        />
                      </div>
                      <div className="flex-auto">
                        <a
                          onClick={() => navigate(item.href)}
                          className="block font-semibold text-gray-900"
                        >
                          {item.name}
                          <span className="absolute inset-0" />
                        </a>
                        <p className="mt-1 text-gray-600">{item.description}</p>
                      </div>
                    </div>
                  ))}
                </div>
                <div className="grid grid-cols-2 divide-x divide-gray-900/5 bg-gray-50">
                  {callsToAction.map((item) => (
                    <a
                      key={item.name}
                      href={item.href}
                      target="_blank"
                      className="flex items-center justify-center gap-x-2.5 p-3 text-sm font-semibold leading-6 text-gray-900 hover:bg-gray-100"
                    >
                      <item.icon
                        className="h-5 w-5 flex-none text-gray-400"
                        aria-hidden="true"
                      />
                      {item.name}
                    </a>
                  ))}
                </div>
              </Popover.Panel>
            </Transition>
          </Popover>

          <Popover className="relative">
            <Popover.Button className="flex items-center gap-x-1 text-sm font-sans font-bold leading-6 text-gray-900">
              PAINÉIS ELÉTRICOS
              <IoIosArrowDown
                className="h-5 w-5 flex-none text-gray-400"
                aria-hidden="true"
              />
            </Popover.Button>

            <Transition
              as={Fragment}
              enter="transition ease-out duration-200"
              enterFrom="opacity-0 translate-y-1"
              enterTo="opacity-100 translate-y-0"
              leave="transition ease-in duration-150"
              leaveFrom="opacity-100 translate-y-0"
              leaveTo="opacity-0 translate-y-1"
            >
              <Popover.Panel className="absolute -left-8 top-full z-10 mt-3 w-screen max-w-md overflow-hidden rounded-lg bg-white shadow-lg ring-1 ring-gray-900/5">
                <div className="p-4">
                  {products.map((item) => (
                    <div
                      key={item.name}
                      className="group relative flex items-center gap-x-6 rounded-lg p-4 text-sm leading-6 hover:bg-gray-50"
                    >
                      <div className="flex h-11 w-11 flex-none items-center justify-center rounded-lg bg-gray-50 group-hover:bg-white">
                        <item.icon
                          className="h-6 w-6 text-gray-600 group-hover:text-indigo-600"
                          aria-hidden="true"
                        />
                      </div>
                      <div className="flex-auto">
                        <a
                          href={item.href}
                          className="block font-semibold text-gray-900"
                        >
                          {item.name}
                          <span className="absolute inset-0" />
                        </a>
                        <p className="mt-1 text-gray-600">{item.description}</p>
                      </div>
                    </div>
                  ))}
                </div>            
              </Popover.Panel>
            </Transition>
          </Popover>

          <a
             onClick={() => navigate("/contato")}
             className="cursor-pointer text-sm font-sans font-bold leading-6 text-gray-900"
          >
            ORÇAMENTO
          </a>
        </Popover.Group>
      </nav>
      <Dialog
        as="div"
        className="lg:hidden"
        open={mobileMenuOpen}
        onClose={setMobileMenuOpen}
      >
        <div className="fixed inset-0 z-10" />
        <Dialog.Panel className="fixed inset-y-0 right-0 z-10 w-full overflow-y-auto bg-white px-6 py-7 sm:max-w-sm sm:ring-1 sm:ring-gray-900/10">
          <div className="flex items-center justify-between">
            <a href="#" className="-m-1.5 p-1.5">
              <img className="h-8 w-auto" src={logo} alt="logo" />
            </a>
            <button
              type="button"
              className="-m-2.5 rounded-md p-2.5 text-gray-700"
              onClick={() => setMobileMenuOpen(false)}
            >
              <IoClose fontSize={25} />
            </button>
          </div>
          <div className="mt-6 flow-root">
            <div className="-my-6 divide-y divide-gray-500/10">
              <div className="space-y-2 py-7">
                <Disclosure as="div" className="-mx-3">
                  {({ open }) => (
                    <>
                      <Disclosure.Button className="flex w-full items-center justify-between rounded-lg py-2 pl-3 pr-3.5 text-base font-sans font-bold leading-7 text-gray-900 hover:bg-gray-50">
                        Serviços
                        <IoIosArrowDown
                          className={classNames(
                            open ? "rotate-180" : "",
                            "h-5 w-5 flex-none"
                          )}
                          aria-hidden="true"
                        />
                      </Disclosure.Button>

                      <ul>
                        {
                          open && (
                              services.map(s => {
                                return (
                                  <li  onClick={() => navigate(s.href)} className="py-4 px-3 hover:bg-gray-100 rounded-lg cursor-pointer">
                                    <a key={s.name}>{s.name}</a>
                                  </li>
                                )
                              })                            
                            )
                          }
                        </ul>
                    </>
                  )}
                </Disclosure>
                <a
                  onClick={() => navigate("/sobre")}
                  className="-mx-3 block rounded-lg px-3 py-2 text-base font-sans font-bold leading-7 text-gray-900 hover:bg-gray-100 cursor-pointer"
                  >
                  Sartori
                </a>
                <a
                  onClick={() => navigate("/contato")}
                  className="-mx-3 block rounded-lg px-3 py-2 text-base font-sans font-bold leading-7 text-gray-900 hover:bg-gray-100  cursor-pointer"
                >
                  Orçamento
                </a>             
              </div>
            </div>
          </div>
        </Dialog.Panel>
      </Dialog>
    </header>
  );
}
