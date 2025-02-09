export const apiVersion =
  process.env.NEXT_PUBLIC_SANITY_API_VERSION || '2025-01-07'

export const dataset = assertValue(
  process.env.NEXT_PUBLIC_SANITY_DATASET,
  'Missing environment variable: NEXT_PUBLIC_SANITY_DATASET'
)

export const projectId = assertValue(
  process.env.NEXT_PUBLIC_SANITY_PROJECT_ID,
  'Missing environment variable: NEXT_PUBLIC_SANITY_PROJECT_ID'
)
export const token = assertValue(
  "skKPEYPg9eM6CDq5NzAYcJisLPFIzmr6APYboDBjm7JkHJTXMvk1LRpkzBbBjCtpCZ1LssrdNfqIDMPDq7FpksbIqlkA0SgHg1dtqOYW6lWDcy28suOkmLlulhOW0U5NMWj5GU7ceWETfJEiArFKQS1TxHwnOhgt6RW6rdToMnYs9aaaOf9R",
  'Missing environment variable: SANITY_API_TOKEN'
)

function assertValue<T>(v: T | undefined, errorMessage: string): T {
  if (v === undefined) {
    throw new Error(errorMessage)
  }

  return v
}
