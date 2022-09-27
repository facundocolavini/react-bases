import Grid from "@mui/material/Grid"

type Props = {}

export const LoginPage = (props: Props) => {
  return (
    <Grid 
      container
      spacing={ 0 }
      direction="column"
      alignItems="center"
      justifyContent="center"
      sx={{ 
        minHeight: '100vh',
        backGroundColor: 'primary.main',
        padding:4
        
      }}
    >
      <Grid
        item
        className='box-shadow'
        xs={ 3 }
        sx= {{ backGroundColor: 'white', padding:3, borderRadius: 2 }}
      >
        
      </Grid>
    
    </Grid>
  )
}