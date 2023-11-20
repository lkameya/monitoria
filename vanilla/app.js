function addRepo(name, url) {
    const list = document.getElementById('repo-list');
    const item = document.createElement('li');
    const link = document.createElement('a');
  
    link.textContent = name;
    link.setAttribute('href', url);
    item.appendChild(link)
    list.appendChild(item);
  }
  
  async function getRepos() {
    const response = await fetch("https://api.github.com/users/juliakuroishi/repos");
    const repos = await response.json();
  
    for(var i = 0; i < repos.length; i++) {
      addRepo(repos[i].name, repos[i].html_url);
    }
  }
  
  getRepos();
  
  