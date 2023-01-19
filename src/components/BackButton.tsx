import { Button } from '@mui/material'
import { useLocation, useNavigate } from 'react-router-dom'

function BackButton() {
  const navigate = useNavigate()
  const location = useLocation()
  const previousPathname: string = location.state.from.pathname || '/'

  return (
    <Button
      variant="outlined"
      data-testid="backButton"
      onClick={() => navigate(previousPathname)}
    >
      Back
    </Button>
  )
}

export default BackButton
