var fs = require("fs");
var path = require("path"),
  filesList = {},
  imgPath = "../../assets/img",
  imgPathName = "ROOT";

function readFileList(dir, dirName, filesList = {}) {
  const files = fs.readdirSync(dir);
  files.forEach(item => {
    const stat = fs.statSync(path.join(dir, item));
    if (stat.isDirectory()) {
      readFileList(`${dir}/${item}`, item, filesList);
    } else {
      if (!filesList[dirName]) {
        filesList[dirName] = [];
      }
      var fullPath = `${dir}/${item}`.replace(
        `${path.resolve(__dirname, imgPath)}/`,
        ""
      );
      filesList[dirName].push(fullPath);
    }
  });
  return filesList;
}

readFileList(path.resolve(__dirname, imgPath), imgPathName, filesList);
let str = `
const imgList=${JSON.stringify(filesList)}
export default imgList
 `;
fs.writeFileSync(path.resolve(__dirname, "../../assets/js/imgList.js"), str);
