import { Sector } from '../Sector/index'
import { TipoDeEmpresa } from '../TipoDeEmpresa/index'
import { Espacio } from '../Espacio'
import { Personas } from '../Personas'
import { Productos } from '../Productos'
import { Resultados } from '../Resultados'

import data from '../../data.json'
import './index.css'

// eslint-disable-next-line react/prop-types
export function GeneralTabs({ activeTab, handleTabClick }) {
  const sectorData = data.tabs[0].tab1.content[0]
  const tipoEmpresaData = data.tabs[0].tab2.content[0]
  const espacioData = data.tabs[0].tab3.content[0]
  const personasData = data.tabs[0].tab4.content[0]
  const productosData = data.tabs[0].tab5.content[0]

  const tabs = [
    {
      label: 'Sector',
      component: (
        <Sector
          activeTab={activeTab}
          question={sectorData.question}
          answer={sectorData.answer}
        />
      ),
    },
    {
      label: 'Tipo de empresa',
      component: (
        <TipoDeEmpresa
          activeTab={activeTab}
          question={tipoEmpresaData.question}
          answer={tipoEmpresaData.answer}
        />
      ),
    },
    {
      label: 'Espacio',
      component: (
        <Espacio
          activeTab={activeTab}
          question={espacioData.question}
          answer={espacioData.answer}
        />
      ),
    },
    {
      label: 'Personas',
      component: (
        <Personas
          activeTab={activeTab}
          question={personasData.question}
          answer={personasData.answer}
        />
      ),
    },
    {
      label: 'Productos',
      component: (
        <Productos
          activeTab={activeTab}
          question={productosData.question}
          answer={productosData.answer}
        />
      ),
    },
    {
      label: 'Resultados',
      component: <Resultados activeTab={activeTab} />,
    },
  ]
  return (
    <>
      <div className="container mt-5">
        <ul className="nav nav-pills d-flex mb-3" id="pills-tab" role="tablist">
          <li className="nav-item d-flex" role="presentation">
            {tabs.map(({ label }) => (
              <button
                key={label}
                className={`nav-link active ${
                  activeTab === label ? 'active' : ''
                } ${activeTab === label ? 'custom-active' : ''}`}
                id={`pills-${label.toLowerCase().replace(' ', '-')}-tab`}
                data-bs-toggle="pill"
                data-bs-target={`#pills-${label.toLowerCase().replace(
                  ' ',

                  '-',
                )}`}
                type="button"
                role="tab"
                aria-controls={`pills-${label.toLowerCase().replace(' ', '-')}`}
                aria-selected={activeTab === label}
                onClick={() => handleTabClick(label)}
              >
                {label}
              </button>
            ))}
          </li>
        </ul>
        <div className="tab-content d-flex col-sm-10" id="pills-tabContent">
          {tabs.map(({ label, component }) => (
            <div
              key={label}
              className={`tab-pane fade show ${
                activeTab === label ? 'active' : ''
              }`}
              id={`pills-${label.toLowerCase().replace(' ', '-')}`}
              role="tabpanel"
              aria-labelledby={`pills-${label.toLowerCase().replace(
                ' ',

                '-',
              )}-tab`}
            >
              {component}
            </div>
          ))}
        </div>
      </div>
    </>
  )
}
