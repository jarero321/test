import { Button } from '@/components';
import LogoDyP from '@/resources/img/logo/Logo_dyp_v2.png';
import React, { useState } from 'react';
import { Link } from 'react-router-dom';

const SideBar = () => {
  const [collapseShow, setCollapseShow] = useState<string>('hidden');
  return (
    <>
      <nav
        className="
            md:left-0
            md:block
            md:fixed
            md:top-0
            md:bottom-0
            md:overflow-y-auto
            md:flex-row
            md:flex-nowrap
            md:overflow-hidden
            shadow-xl
            bg-[#38144f]
            flex
            flex-wrap
            items-center
            justify-between
            relative
            md:w-64
            z-10
            py-4
            px-6"
      >
        <div className="md:flex-col md:items-stretch md:min-h-full md:flex-nowrap px-0 flex flex-wrap items-center justify-between w-full mx-auto">
          <button
            className="cursor-pointer text-black opacity-50 md:hidden px-3 py-1 text-xl leading-none bg-transparent rounded border border-solid border-transparent"
            onClick={() => setCollapseShow('bg-white px-6 py-3 m-2')}
            type="button"
          >
            <i className="fas fa-bars"></i>
          </button>
          {/* Brand */}
          <Link
            className="md:block text-left md:pb-2 text-blueGray-600 mr-0 inline-block whitespace-nowrap text-sm uppercase font-bold p-4 px-0"
            to="#"
          >
            <img alt="" src={LogoDyP} />
          </Link>
          {/* User */}
          <ul className="md:hidden items-center flex flex-wrap list-none">
            <li className="inline-block relative">|||||</li>
            <li className="inline-block relative">-----</li>
          </ul>
          {/* Collapse */}
          <div
            className={
              'md:flex md:flex-col md:items-stretch md:opacity-100 md:relative md:mt-4 md:shadow-none shadow absolute top-0 left-0 right-0 z-40 overflow-y-auto overflow-x-hidden h-auto items-center flex-1 rounded ' +
              collapseShow
            }
          >
            {/* Collapse header */}
            <div className="md:min-w-full md:hidden block pb-4 mb-4 border-b border-solid border-blueGray-200">
              <div className="flex flex-wrap">
                <div className="w-6/12">
                  <Link
                    className="md:block text-left md:pb-2 mr-0 inline-block whitespace-nowrap text-sm uppercase font-bold p-4 px-0"
                    to="#"
                  >
                    PyD
                  </Link>
                </div>
                <div className="w-6/12 flex justify-end">
                  <button
                    className="cursor-pointer text-black opacity-50 md:hidden px-3 py-1 text-xl leading-none bg-transparent rounded border border-solid border-transparent"
                    onClick={() => setCollapseShow('hidden')}
                    type="button"
                  >
                    <i className="fas fa-times"></i>
                  </button>
                </div>
              </div>
            </div>
            {/* Navigation */}
            <ul className="md:flex-col md:min-w-full flex flex-col list-none">
              <li className="items-center">
                <a
                  className="text-white hover:text-link-hover text-xs uppercase py-3 font-bold block"
                  href="/dashboard"
                >
                  <i className="fa-solid fa-chart-line opacity-75 mr-2 text-sm"></i>{' '}
                  Reportes
                </a>
              </li>

              <li className="items-center">
                <a
                  className="text-white hover:text-link-hover text-xs uppercase py-3 font-bold block"
                  href="/"
                >
                  <i className="fa-solid fa-money-bill-transfer text-blueGray-400 mr-2 text-sm"></i>{' '}
                  Transacciones
                </a>
              </li>

              <li className="items-center">
                <a
                  className="text-white hover:text-link-hover text-xs uppercase py-3 font-bold block"
                  href="/"
                >
                  <i className="fa-solid fa-building-columns text-blueGray-400 mr-2 text-sm"></i>{' '}
                  Sucursales
                </a>
              </li>

              <li className="items-center">
                <a
                  className="text-white hover:text-link-hover text-xs uppercase py-3 font-bold block"
                  href="/"
                >
                  <i className="fa-solid fa-ticket text-blueGray-400 mr-2 text-sm"></i>{' '}
                  Productos
                </a>
              </li>

              <li className="items-center">
                <a
                  className="text-white hover:text-link-hover text-xs uppercase py-3 font-bold block"
                  href="/"
                >
                  <i className="fa-regular fa-calendar text-blueGray-400 mr-2 text-sm"></i>{' '}
                  Periodos de pago
                </a>
              </li>

              <li className="items-center">
                <a
                  className="text-white hover:text-link-hover text-xs uppercase py-3 font-bold block"
                  href="/"
                >
                  <i className="fa-solid fa-link text-blueGray-400 mr-2 text-sm"></i>{' '}
                  Links de pago
                </a>
              </li>

              <li className="items-center">
                <a
                  className="text-white hover:text-link-hover text-xs uppercase py-3 font-bold block"
                  href="/"
                >
                  <i className="fa-solid fa-users text-blueGray-400 mr-2 text-sm"></i>{' '}
                  Clientes
                </a>
              </li>

              <li className="items-center">
                <a
                  className="text-white hover:text-link-hover text-xs uppercase py-3 font-bold block"
                  href="/"
                >
                  <i className="fa-regular fa-bell text-blueGray-400 mr-2 text-sm"></i>{' '}
                  Recordatorios
                </a>
              </li>

              <li className="items-center">
                <a
                  className="text-white hover:text-link-hover text-xs uppercase py-3 font-bold block"
                  href="/"
                >
                  <i className="fa-solid fa-laptop-code text-blueGray-400 mr-2 text-sm"></i>{' '}
                  Integraciones
                </a>
              </li>

              <li className="items-center">
                <a
                  className="text-white hover:text-link-hover text-xs uppercase py-3 font-bold block"
                  href="/"
                >
                  <i className="fa-solid fa-cloud-arrow-up text-blueGray-400 mr-2 text-sm"></i>{' '}
                  Cargas masivas
                </a>
              </li>

              <li className="items-center">
                <a
                  className="text-white hover:text-link-hover text-xs uppercase py-3 font-bold block"
                  href="/"
                >
                  <i className="fa-solid fa-file-invoice text-blueGray-400 mr-2 text-sm"></i>{' '}
                  Facturación
                </a>
              </li>
            </ul>
          </div>
        </div>
        <Button
          height="h-[50px]"
          text="Cerrar sesión"
          type="submit"
          variant="secondary"
        />
      </nav>
    </>
  );
};

export default SideBar;
