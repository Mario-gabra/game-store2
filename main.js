function date() {
  let date = document.querySelector(".dateOfTime")
  const today = new Date();
  const month = today.getMonth() + 1; 
  const day = today.getDate();
  const year = today.getFullYear();
  const dateOfTime = `${month}/${day}/${year}`;
  date.innerHTML = dateOfTime;
}
date()