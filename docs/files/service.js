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
  await SendData({path: path}, "http://localhost:5293/FileReader");
  return await GetData("http://localhost:5293/FileReader");
}