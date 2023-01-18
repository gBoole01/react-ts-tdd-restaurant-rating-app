import { isRouteErrorResponse, useRouteError } from 'react-router-dom'

export default function ErrorPage() {
  const error = useRouteError()

  return (
    <div>
      <h1>Oops!</h1>
      <p>Sorry, an unexpected error has occurred.</p>
      {isRouteErrorResponse(error) && (
        <p>
          <span>{error.statusText}</span>
          {error.data.message && <span>{error.data.message}</span>}
        </p>
      )}
    </div>
  )
}
