export const getFile = (req, res) => {
  const file = req.files;
  console.log(file, ":File");
  console.log(`${file[0].destination}: destination`);
  console.log(`${file[0].filename}: filename`);

  console.log(`${file[0].destination}/${file[0].filename}`);
  const dbFilePath = `${file[0].destination}/${file[0].filename}`;
  

  res.send(file);
};