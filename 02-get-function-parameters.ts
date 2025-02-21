import { Expect, Equal } from './utils'

const makeQuery = (
  url: string,
  opts?: {
    method?: string
    headers?: { [key: string]: string }
  },
) => {}

type MakeQueryParameters = Parameters<typeof makeQuery>

type tests = [
  Expect<
    Equal<
      MakeQueryParameters,
      [
        url: string,
        opts?: {
          method?: string
          headers?: { [key: string]: string }
        },
      ]
    >
  >,
]
