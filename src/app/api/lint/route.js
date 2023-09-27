import { NextResponse } from "next/server";
import fs from "fs";
import errors from "data.json";

export async function GET(req, res) {
  // res.status(200).json({ text: "Hello" });
  // console.log(errors);
  return NextResponse.json(errors);
}

export async function POST(req) {
  const requestBody = await req.json();

  // Read the data from the file
  // const existingData = fs.existsSync("data.json")
  //   ? JSON.parse(fs.readFileSync("data.json"))
  //   : [];
  // fs.readFile("data.json", function (err, data) {
  //   console.log(data);
  // });
  // // Function to remove data based on some condition
  // const removeData = (dataToRemove) => {
  //   const updatedData = existingData.filter(item => item !== dataToRemove);
  //   return updatedData;
  // };

  // // Data you want to remove (in this example, removing the data with value "John")
  // const dataToRemove = 'John';

  // // Remove the data
  // const updatedData = removeData(dataToRemove);

  fs.writeFileSync("data.json", JSON.stringify(requestBody));

  return NextResponse.json({ message: "hellow post server" });
}
