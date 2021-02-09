(function() {
  const search = document.getElementById("search");
  const profile = document.getElementById("profile");
  const url = "https://api.github.com/users";
  const client_id = "04094899cdb896ab9d4d";
  const client_secrets = "18f561afd5ecd04884510fa154eb56ae335782c9";

  async function getUser(user) {
    const profileResponse = await fetch(`${url}/${user}?client_id=${client_id}&client_secrets${client_secrets}`);

    const profile = profileResponse.json();

    return profile;
  }

  search.addEventListener("keyup", (e) => {
    const user = e.target.value;

    if(user.profile > 0) {
      getUser(user).then(res => console.log(res));
    }
  });
})();