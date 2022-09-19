import { HeroList } from "../components"

type Props = {}
export const MarvelPage = (props: Props) => {
  return (
    <>
      <h1>Marvel Heroes</h1>
      <hr />
      {/* Componmente Heroe List */}
      <HeroList publisher={'Marvel Comics'}/>
    </>
  )
}