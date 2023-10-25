import { ItemListContainer } from "./componentes/ItemsListContainer/ItemListContainer"
import { NabVar } from "./componentes/NavBar/NabVar"

export const App = () => {
  return (
    <>
    <NabVar />
    <ItemListContainer message={"Bienvenidos a Zorro Montes Libros"}/>
    </>
  )
}
