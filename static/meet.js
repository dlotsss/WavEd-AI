var x = document.getElementById("possible_days").value;

x = x.replace("T", " ");

document.getElementById("possible_days").innerHTML = x;


function toggle(el, meetId) {
  el.style.display = (el.style.display == 'none') ? '' : 'none';
  window.btn_id = meetId;
}

function clickedBtn(id) {
  window.btn_id = id;
}

function submitLink() {
  const linkInput = document.getElementById("form-link");
  const link = linkInput.value;

  if (!window.btn_id) {
    console.error("Meet ID is missing.");
    return;
  }


  fetch('/submit_link', {
    method: 'POST',
    headers: {
      'Content-Type': 'application/x-www-form-urlencoded',
    },
    body: `form-link=${encodeURIComponent(link)}&meet_id=${encodeURIComponent(window.btn_id)}`,
  })
  .then(response => response.json())
  .then(data => {
    if (data.success) {

      console.log("Link submitted successfully");

      toggle(document.getElementById("hidden_content"), window.btn_id);
    } else {

      console.error("Error submitting link:", data.error);
    }
  })
  .catch(error => {
    console.error("Error:", error);
  });
}

