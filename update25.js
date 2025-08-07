const fs = require("fs");
const https = require("https");

const url = "https://opensheet.elk.sh/1S5taRbn7fCozVmemopER13V0gc8aSd2FdBM7Jd2485c/year25";

https.get(url, (res) => {
  let data = "";
  res.on("data", chunk => data += chunk);
  res.on("end", () => {
    fs.writeFileSync("year25.json", data);
    console.log("Saved year25.json");
  });
});
