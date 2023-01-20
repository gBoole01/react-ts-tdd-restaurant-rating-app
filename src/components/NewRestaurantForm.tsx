import {
  Box,
  Button,
  FormControl,
  FormHelperText,
  InputLabel,
  OutlinedInput,
} from '@mui/material'
import { useFormik } from 'formik'
import { useAppDispatch as useDispatch } from '../store/hooks'
import { addRestaurant } from '../store/restaurantsSlice'

type NewRestaurantFormProps = {
  closeModal: () => void
}

type CloseModalButtonProps = {
  onCancel: () => void
}

function CloseModalButton({ onCancel }: CloseModalButtonProps) {
  return (
    <Button
      variant="outlined"
      sx={{ width: '50%' }}
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
  'data-testid': 'newRestaurantName',
}

export default function NewRestaurantForm({
  closeModal,
}: NewRestaurantFormProps) {
  const dispatch = useDispatch()

  const validate = (values: { name: string }) => {
    const errors = {}
    if (!values.name || values.name === '') {
      return { ...errors, name: 'Cannot be blank' }
    }
    return errors
  }

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
    validate,
    onSubmit: (data, { resetForm }) => {
      dispatch(addRestaurant({ name: data.name }))
      resetForm()
      closeModal()
    },
  })

  return (
    <form onSubmit={handleSubmit}>
      <Box display="flex" flexDirection="column" alignItems="stretch">
        <Box>
          <FormControl fullWidth error={touched.name && Boolean(errors.name)}>
            <InputLabel htmlFor="name">Name</InputLabel>
            <OutlinedInput
              id="name"
              label="Name"
              aria-describedby="name-error-text"
              inputProps={inputProps}
              value={values.name}
              onChange={handleChange}
              onBlur={handleBlur}
            />
            {errors.name && touched.name && (
              <FormHelperText
                error
                id="name-error-text"
                data-testid="newRestaurantNameError"
              >
                {errors.name}
              </FormHelperText>
            )}
          </FormControl>
        </Box>
        <Box display="flex" pt={1} gap={2}>
          <CloseModalButton onCancel={closeModal} />
          <Button
            sx={{ width: '50%' }}
            variant="contained"
            type="submit"
            disabled={isSubmitting}
            data-testid="saveNewRestaurantButton"
          >
            Save
          </Button>
        </Box>
      </Box>
    </form>
  )
}
