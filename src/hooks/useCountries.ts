import { useQuery } from '@tanstack/react-query'

type QueryData = {
  name: { common: string }
}[]

const useCountries = () => {
  const { data } = useQuery<QueryData>({
    queryKey: ['countries'],
    queryFn: () =>
      fetch('https://restcountries.com/v3.1/all?fields=name').then((res) =>
        res.json()
      ),
  })

  return data?.map((item) => item.name.common)
}

export default useCountries
