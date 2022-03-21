const request = require("request-promise");
const cherio = require("cheerio");

const scrapdata = async () => {
  const result = await request.get(
    "https://www.codingwithstefan.com/table-example/"
  );
  const $ = cherio.load(result);

  //$('body > table > tbody > tr').each((a,b)=>{console.log( $(b).find("td")[0])})
  //body > table > tbody > tr > td
  const scrapRrows = [];
  const datas = $("body > table > tbody > tr").each((index, element) => {
    const tds = $(element).find("td");
    const company = $(tds[0]).text();
    const contact = $(tds[1]).text();
    const country = $(tds[2]).text();
    const scraprows = { company, contact, country };
    scrapRrows.push(scraprows);
  });
  console.log(scrapRrows);
};

scrapdata();
