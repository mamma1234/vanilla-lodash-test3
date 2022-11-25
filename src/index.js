import "./styles.css";

document.getElementById("app").innerHTML = `
<h1>Hello Vanilla!</h1>
<div>
  We use the same configuration as Parcel to bundle this sandbox, you can find more
  info about Parcel 
  <a href="https://parceljs.org" target="_blank" rel="noopener noreferrer">here</a>.
</div>
`;

let orderPlaceFiles = [
  {
    id: 1,
    file_type: "sign",
    file: { key: 1, id: 1, name: "name", created_at: Date() }
  },
  {
    id: 2,
    file_type: "sign1",
    file: { key: 1, id: 1, name: "name", created_at: Date() }
  }
];

let label = "1";
// timer 시작
console.time(label);

let files = [];
for (let i = 0; i < orderPlaceFiles.length; i++) {
  let fileInfo = {
    id: orderPlaceFiles[i].id,
    file_key: orderPlaceFiles[i].file.key,
    file_id: orderPlaceFiles[i].file.id,
    file_name: orderPlaceFiles[i].file.name,
    file_created_at: orderPlaceFiles[i].file.created_at
  };
  if (orderPlaceFiles[i].file_type === "sign") {
    fileInfo["file_name"] = "고객사인";
  }
  files.push(fileInfo);
}

console.log(files);
console.timeEnd(label);

/*
label = "2";
// timer 시작
console.time(label);

const editSchoolName = (schools) => {
  return schools.map((item) => {
    var temp = Object.assign({}, item);
    if (temp.file_type === "sign") {
      temp.file_name = "고객사인";
    }
    return temp;
  });
};

let files2 = editSchoolName(orderPlaceFiles);
console.log(files2);

console.timeEnd(label);
*/
/*
label = "3";
// timer 시작
console.time(label);

let files3 = orderPlaceFiles =>  {
    return orderPlaceFiles.map((item) => {
      var temp = Object.assign({}, item);
      if (temp.file_type === "sign") {
        temp.file_name = "고객사인";
      }
      return temp;
    });
}


console.log(files3);

console.timeEnd(label);
*/

label = "4";
// timer 시작
console.time(label);

let files4 = orderPlaceFiles.map((item) => {
  return {
    id: item.id,
    file_key: item.file.key,
    file_id: item.file.id,
    file_name: item.file_type === "sign" ? "고객사인" : item.file.name,
    file_created_at: item.file.created_at
  };
});
console.log(files4);

console.timeEnd(label);
