import { CartWidget } from "../CartWidget/CartWidget"

export const NabVar = () => {
  return (
    <nav className="d-flex justify-content-around p-4">
      <div>
        <button className="btn btn-primary mx-2">Home</button>
        <button className="btn btn-primary mx-2">Productos</button>
        <button className="btn btn-primary mx-2">Contactos</button>
      </div>
      <div>
        <CartWidget />
        <p className="text-end fs-6">3</p>
      </div>

    </nav>
  )
}
