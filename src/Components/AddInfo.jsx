
import { Box } from "@mui/material";
import { Container } from "@mui/material";
import Tabinfo from "./Tabinfo";
import Grid from "@mui/material/Grid2";

export default function AddInfo() {
  return (

    <Box component="section" sx={{ my: 5 }} >
      <Container sx={{
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        borderBottom: 1,
        borderColor: 'divider'
      }}>
        <Grid container>
          <Grid size={{ lg:12 }} >
            <Tabinfo textOne="Yellow CatEye Rimmed Eyeglasses from Titan Eye+. These are compatible with Blue filter, Single vision & Progressive Lenses." 
            textTwo="CatEye Rimmed Eyeglasses from Titan Eye+. These are compatible with Blue filter, Single vision & Progressive Lenses."
              textThree="Rimmed Eyeglasses from Titan Eye+. These are compatible with Blue filter, Single vision & Progressive Lenses."
            />
          </Grid>
        </Grid>

      </Container>
    </Box>

  )
}
