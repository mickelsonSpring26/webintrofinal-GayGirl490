// const baseURL = "http://localhost:5293";
const baseURL = "https://webintrofinal-gaygirl490.onrender.com";

async function GetData(url) {
  const response = await fetch(url);
  try {
    const result = await response.json();
    return result;
  } catch {
    console.log("error", response);
    return undefined;
  }
}

const SendJSONData = async (data, url) => {
  await fetch(url, {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify(data),
  });
};

const SendFile = async (data, url) => {
  const formData = new FormData();
  formData.append("saveFile", data);

  const response = await fetch(url, {
    method: "POST",
    body: formData,
  });
  // console.log(response);
};

export const GetStringGSFlags = async (file) => {
  await SendFile(file, `${baseURL}/FileStringsReader`);
  return await GetData(`${baseURL}/FileStrings`);
};

export const GetSplitBinaryGSFlags = async (intFlags) => {
  await SendJSONData(intFlags, `${baseURL}/FileBinarySplitter`);
  const flagsData = await GetData(`${baseURL}/SplitBinaryStrings`);
  // console.log(flagsData); 
  return flagsData;
};

export const GetGSCount = async () => {
  return await GetData(`${baseURL}/FileGSCount`);
};
