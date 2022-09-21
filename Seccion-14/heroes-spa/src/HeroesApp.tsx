import { AuthProvider } from "./auth"
import { AppRouter } from "./router/AppRouter"

interface AppHeroes {

}

export const HeroesApp = (props: AppHeroes) => {
  return (
    <AuthProvider>
      <AppRouter />
    </AuthProvider>
  )
}