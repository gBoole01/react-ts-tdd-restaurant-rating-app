import { Box, Container } from '@mui/material'
import RestaurantListPage from './components/RestaurantListPage'

export default function App() {
  return (
    <Container
      sx={{
        bgcolor: 'darkgray',
        height: '100%',
        p: '1rem',
      }}
    >
      <Box
        sx={{
          bgcolor: 'white',
          boxShadow: 1,
          borderRadius: 2,
          p: 2,
          minWidth: 300,
          display: 'flex',
          flexDirection: 'column',
          alignItems: 'flex-start',
          gap: '.75rem',
        }}
      >
        <RestaurantListPage />
      </Box>
    </Container>
  )
}
