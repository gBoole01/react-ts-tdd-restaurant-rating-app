import { Box, Container } from '@mui/material'
import { ReactNode } from 'react'

type Props = {
  children: ReactNode
}

export default function Layout({ children }: Props) {
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
          gap: '1rem',
        }}
      >
        {children}
      </Box>
    </Container>
  )
}
