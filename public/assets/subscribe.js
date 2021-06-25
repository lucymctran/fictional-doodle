const submitBtn = document.querySelector(".submit");
submitBtn.addEventListener("click", (event) => {
  event.preventDefault();
  const firstName = document.getElementById("first-name").value;
  const lastName = document.getElementById("last-name").value;
  const email = document.getElementById("email").value;

  const newSubscriber = {
    subscriberFirstName: firstName,
    subscriberLastName: lastName,
    email: email,
  };

  fetch("/toplist", {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify(newSubscriber),
  })
    .then((response) => response.json())
    .then((data) => {
      console.log(data);
      if (data) {
        document
          .getElementById("success")
          .setAttribute("class", "ui success message");
      } else {
        document
          .getElementById("other")
          .setAttribute("class", "ui warning message");
      }
    })
    .catch((error) => {
      console.log("Error", error);
    });
});
