const axios = require("axios");
const cheerio = require("cheerio");
const saveCSVFile = require("./src/saveCSVFile");

async function main() {
  for (let i = 1; i <= 50; i++) {
    let page = `p${i}`;

    let response = await axios({
      method: "get",
      url: `https://www.vivanuncios.com.mx/s-venta-inmuebles/tepic/v1c1097l1534${page}`,
      maxRedirects: 1
    });

    console.log(response.data);
    const $ = cheerio.load(response.data);

    let properties = $(".tile-desc");
    let links = [];

    for (let i = 0; i < properties.length; i++) {
      links[i] = "www.vivanuncios.com.mx";
      links[i] += $(".href-link", properties[i]).attr("href");
    }

    saveCSVFile(links, i);
  }
}

main();
