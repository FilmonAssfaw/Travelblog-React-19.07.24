const supabaseUrl = "https://hzfatbwbzoqrhgycmwdz.supabase.co/rest/v1";
const supabaseApiKey =
  "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6Imh6ZmF0Yndiem9xcmhneWNtd2R6Iiwicm9sZSI6ImFub24iLCJpYXQiOjE3MjAxODIyNDgsImV4cCI6MjAzNTc1ODI0OH0._J_xQp9mKZxHTlM1xGKnq1W_BeiV9-_8CRFqIsSndBo";

export function fetchAllPosts() {
  return fetch(`${supabaseUrl}/posts?select=*&order=created_at`, {
    headers: {
      apikey: supabaseApiKey,
    },
  });
}

export function fetchPostById(id) {
  return fetch(`${supabaseUrl}/posts?id=eq.${id}`, {
    headers: {
      apikey: supabaseApiKey,
    },
  });
}

export function sendAddPost(post) {
  return fetch(`${supabaseUrl}/posts`, {
    method: "POST",
    headers: {
      apikey: supabaseApiKey,
      "Content-Type": "application/json",
    },
    body: JSON.stringify([post]),
  });
}

export function sendPostUpdate(id, post) {
  return fetch(`${supabaseUrl}/posts?id=eq.${id}`, {
    method: "PUT",
    headers: {
      apikey: supabaseApiKey,
      "Content-Type": "application/json",
    },
    body: JSON.stringify({ id: id, ...post }),
  });
}
