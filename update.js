const fs = require("fs");
const https = require("https");

const url = "https://opensheet.elk.sh/1S5taRbn7fCozVmemopER13V0gc8aSd2FdBM7Jd2485c/year24";

https.get(url, (res) => {
  let data = "";
  res.on("data", chunk => data += chunk);
  res.on("end", () => {
    fs.writeFileSync("year24.json", data);
    console.log("Saved year24.json");
  });
});
