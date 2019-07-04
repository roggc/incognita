export default
query=>variables=>cb=>
fetch
(
  __api__,
  {
    method:'post',
    body:JSON.stringify
    (
      {
        query,
        variables
      }
    ),
    credentials: 'include',
    headers:
    {
      'Content-Type': 'application/json',
      'Accept': 'application/json',
    }
  }
)
.then(r => r.json())
.then(d => cb(d.data))
