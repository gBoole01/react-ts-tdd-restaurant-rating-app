import { Box, Button, TextField } from '@mui/material'
import { useFormik } from 'formik'

type NewRestaurantFormProps = {
  onSave: ({ name }: { name: string }) => void
  onCancel: () => void
}

type CloseModalButtonProps = {
  onCancel: () => void
}

function CloseModalButton({ onCancel }: CloseModalButtonProps) {
  return (
    <Button
      variant="outlined"
      sx={{ width: '20%' }}
      onClick={() => {
        onCancel()
      }}
      type="button"
      data-testid="closeNewRestaurantModalButton"
    >
      Cancel
    </Button>
  )
}

const inputProps = {
  'data-testid': 'newRetaurantName',
}

export default function NewRestaurantForm({
  onSave,
  onCancel,
}: NewRestaurantFormProps) {
  const {
    values,
    touched,
    errors,
    handleChange,
    handleBlur,
    handleSubmit,
    isSubmitting,
  } = useFormik({
    initialValues: {
      name: '',
    },
    onSubmit: (data, { resetForm }) => {
      onSave({ name: data.name })
      resetForm({ values: { name: '' } })
    },
  })

  return (
    <form onSubmit={handleSubmit}>
      <Box
        sx={{
          display: 'flex',
          gap: '.5rem',
          width: '100%',
        }}
      >
        <TextField
          variant="outlined"
          sx={{ width: '60%' }}
          label="Name"
          name="name"
          id="name"
          inputProps={inputProps}
          value={values.name}
          onChange={handleChange}
          onBlur={handleBlur}
          error={touched.name && Boolean(errors.name)}
          helperText={touched.name && errors.name}
        />
        <CloseModalButton onCancel={onCancel} />
        <Button
          variant="contained"
          sx={{ width: '20%' }}
          type="submit"
          disabled={isSubmitting}
          data-testid="saveNewRestaurantButton"
        >
          Save
        </Button>
      </Box>
    </form>
  )
}
