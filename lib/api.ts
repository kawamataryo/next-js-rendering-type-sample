export const fetchCurrentTime = async () => {
  const res = await fetch('https://gleaming-hickory-iguanacolossus.glitch.me/now')
  const resJson = await res.json()
  return resJson.time
}
