import axios from "axios"

export async function fetchData() {
  const data = await axios.get("https://api.example.com/itemshttps://front-end-task-dot-result-analytics-dot-fpls-dev.uc.r.appspot.com/api/v1/public/task_templates")
  return data
}
