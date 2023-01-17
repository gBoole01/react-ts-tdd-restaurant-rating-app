import { Box, Button, TextField } from '@mui/material'
import { useState } from 'react'

type NewRestaurantFormProps = {
  onSave: ({ name }: { name: string }) => void
}

export default function NewRestaurantForm({ onSave }: NewRestaurantFormProps) {
  const [name, setName] = useState('')

  const inputProps = {
    'data-testid': 'newRetaurantName',
  }

  return (
    <Box
      sx={{
        display: 'flex',
        gap: '.5rem',
        width: '100%',
      }}
    >
      <TextField
        variant="outlined"
        sx={{ width: '70%' }}
        label="Name"
        inputProps={inputProps}
        value={name}
        onChange={(e) => setName(e.target.value)}
      />
      <Button
        variant="contained"
        sx={{ flexGrow: '1' }}
        onClick={() => {
          onSave({ name })
          setName('')
        }}
        type="button"
        data-testid="saveNewRestaurantButton"
      >
        Save
      </Button>
    </Box>
  )
}
