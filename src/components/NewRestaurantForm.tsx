import { useState } from 'react'

type NewRestaurantFormProps = {
  onSave: ({ name }: { name: string }) => void
}

export default function NewRestaurantForm({ onSave }: NewRestaurantFormProps) {
  const [name, setName] = useState('')

  return (
    <div>
      <input
        type="text"
        data-testid="newRetaurantName"
        value={name}
        onChange={(e) => setName(e.target.value)}
      />
      <button
        onClick={() => onSave({ name })}
        type="button"
        data-testid="saveNewRestaurantButton"
      >
        Save
      </button>
    </div>
  )
}
