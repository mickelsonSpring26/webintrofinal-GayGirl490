// const baseURL = "http://localhost:5293";
export const baseURL = "https://webintrofinal-gaygirl490.onrender.com";

export async function GetData(url) {
  const response = await fetch(url);
  try {
    const result = await response.json();
    return result;
  } catch {
    console.log("error", response);
    return undefined;
  }
}

const SendData = async (data, url) => {
  await fetch(url, {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify(data),
  });
};

export const GetGSFlags = async (path) => {
  await SendData({path: path}, `${baseURL}/FileReader`);
  return await GetData(`${baseURL}/FileReader`);
}