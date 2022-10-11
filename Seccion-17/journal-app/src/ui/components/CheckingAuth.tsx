import { CircularProgress, Grid } from "@mui/material"

type Props = {}

export const CheckingAuth = (props: Props) => {
    return (
		<Grid
			container
			spacing={0}
			direction="column"
			alignItems="center"
			justifyContent="center"
			sx={{
				minHeight: '100vh',
				backgroundColor: 'primary.main',
				padding: 4,
			}}
		>
			<Grid
				container
				sx={{
					width: { sm: 450 },
                    display: "flex",
                    justifyContent:"center"
				}}
			>
                <CircularProgress color='warning'></CircularProgress>
            </Grid>
        </Grid>
  )
}
