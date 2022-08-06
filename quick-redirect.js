addEventListener("fetch", event => {
  event.respondWith(handleRequest(event.request));
})

async function handleRequest(request) {
  // Get date timestamp and verify not more than 24 hours old
  const dest_set_timestamp = await database.get("timestamp");
  const now = Date.now()
  if (now - dest_set_timestamp > 86400000 ) {
    return new Response("Error: either the page you are looking for has 
not been setup or has expired.", {status: 404})
  }
  const dest_url = await database.get("dest");
  return Response.redirect(dest_url, 302);
}
