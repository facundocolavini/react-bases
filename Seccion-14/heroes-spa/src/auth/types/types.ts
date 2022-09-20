// Centralizo el nombre de mis acciones en un mismo archivo 
enum ActionKind {
    Login = 'LOGIN',
    LogOut = 'LOGOUT',
  }

//Posibles tipos 

export type Actions = {
    login: ActionKind.Login,
    logout: ActionKind.LogOut
}