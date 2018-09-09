import fetch from "isomorphic-fetch"

export default function logError(apiUrl, payload) {
  return fetch(apiUrl + "error", {
    method: "POST",
    body: JSON.stringify(payload),
    headers: {
      "Content-Type": "application/json"
    }
  })
}
