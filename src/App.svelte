<script>
export let username;

let user = null;

const getGithubUser = async () => {
  const response = await fetch(`https://api.github.com/users/${username}`);
  const data = await response.json();
  user = data;
};

getGithubUser();
</script>
<section>
  {#if user != null}
  <figure class="md:flex bg-slate-100 rounded-xl p-8 md:p-0 dark:bg-slate-800">
    <img class="w-24 h-24 md:w-48 md:h-auto md:rounded-none rounded-full mx-auto" src={user.avatar_url} alt={user.name}>
    <div class="pt-6 md:p-8 text-center md:text-left space-y-4">
      <blockquote>
        <p class="text-lg font-medium">
          {user.bio}
        </p>
      </blockquote>
      <!-- svelte-ignore a11y-structure -->
      <figcaption class="font-medium">
        <div class="text-sky-500 dark:text-sky-400">
          <div class="flex items-center space-x-2">
            <a href="{user.html_url}" target="_blank" rel="noopener noreferrer">
              {user.name}
            </a>
          </div>
        </div>
        <div class="text-slate-700 dark:text-slate-500">
          {user.location}
        </div>
      </figcaption>
    </div>
  </figure>
  {:else}
  <h1>User not found</h1>
  {/if}
</section>
<style global>
  @tailwind base;
  @tailwind components;
  @tailwind utilities;
</style>