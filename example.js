let count = 0;
addEventListener("fetch", (event) => {
  console.log(`Received request #${++count} to ${event.request.url}`);
  event.respondWith(
    new Response("Hello world", {
      status: 200,
      headers: {
        server: "denosr",
        "content-type": "text/plain",
      },
    }),
  );
});
