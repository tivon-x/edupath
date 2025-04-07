export default function FieldError({ errors }: { errors: string[] | undefined }) {
  if (!errors) {
    return null
  }

  return <div className='text-red-500 text-sm font-normal'>{errors[0]}</div>
}
