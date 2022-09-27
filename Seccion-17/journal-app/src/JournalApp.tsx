import { AppRouter } from "./router/AppRouter"
import { AppTheme } from "./theme"

type Props = {}

export const JournalApp = (props: Props) => {
  return (
    <AppTheme>
      <AppRouter/>
    </AppTheme>

  )
}