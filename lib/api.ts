export const fetchCurrentTime = async () => {
  const res = await fetch('https://asia-northeast1-trigger-email-sample.cloudfunctions.net/now')
  const resJson = await res.json()
  return resJson.time
}
