// THe following function is shared with getStaticProps and API routes from a 'util/' directory
export async function loadProjects() {
  const rest = await fetch("https://.../projects/");
  const data = await rest.json();
  return data;
}
