const topList = () => {
  fetch("/toplist", {
    method: "GET",
    headers: {
      "Content-Type": "application/json",
    },
  })
    .then((response) => response.json())
    .then((topMembers) => {
      const list = document.getElementById("top-subscribers");
      let item = "";
      for (let i = 0; i < topMembers.length; i++) {
        let content = `<div class="item" >
        <img class="ui avatar image" src="./assets/icon.jpeg">
        <div class="content">
          <a class="header">${topMembers[i].subscriberFirstName} ${topMembers[i].subscriberLastName}</a>
        </div></div>`;
        item += content;
      }
      list.innerHTML = item;
    });
};

topList();
