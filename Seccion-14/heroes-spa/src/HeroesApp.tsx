import { AppRouter } from "./router/AppRouter"

interface AppHeroes {

}

export const HeroesApp = (props: AppHeroes) => {
  return (
    <>
      <AppRouter />
    </>
  )
}