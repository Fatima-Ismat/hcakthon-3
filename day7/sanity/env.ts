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
  "sk8FzvAJ0ouLCR2cPYobOlyho6aFFLAWJmr1nIZpb1vbqCWaY2yDhV4wLgCGkvIDyFu0vL1BEkAOnaHYQ0lpAbPIbgrRwLAz2KEzrfb2ajJKSK8Y3fEa158dDRE0qM5hGAGEz19PGr8ZGVCBGijhyoqPODcBYF8cmmdzFpGR7aKeCobqzYUw",
  'Missing environment variable: SANITY_API_TOKEN'
)

function assertValue<T>(v: T | undefined, errorMessage: string): T {
  if (v === undefined) {
    throw new Error(errorMessage)
  }

  return v
}
