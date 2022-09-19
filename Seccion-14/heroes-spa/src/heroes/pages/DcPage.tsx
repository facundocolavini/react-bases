import { HeroList } from "../components"


type Props = {}
export  const DcPage = (props: Props) => {
  return (
    <>
      <h1>DC Heroes</h1>
      <hr />
      {/* Componmente Heroe List */}
      <HeroList publisher={'DC Comics'}/>
    </>
  )
}