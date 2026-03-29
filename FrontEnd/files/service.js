export async function GetData() {
  const response = await fetch("http://localhost:5293");
  try {
    const result = await response.json();
    return result;
  } catch {
    console.log("error", response);
    return undefined;
  }
}

export const SendData = async (data) => {
  await fetch("http://localhost:5293", {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify(data),
  });
};
