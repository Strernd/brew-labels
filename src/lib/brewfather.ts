const userId = process.env.BREWFATHER_USER_ID;
const apiKey = process.env.BREWFATHER_API_KEY;
const baseAuth = btoa(`${userId}:${apiKey}`);

const authHeader = {
  Authorization: `Basic ${baseAuth}`,
};

export async function getBatches() {
  const res = await fetch(
    "https://api.brewfather.app/v2/batches?limit=20&order_by=brewDate&order_by_direction=desc",
    { headers: authHeader }
  );
  const data = res.json();
  return data;
}

export async function getBatch(id: string) {
  const res = await fetch(`https://api.brewfather.app/v2/batches/${id}`, {
    headers: authHeader,
  });
  const data = await res.json();
  return {
    name: data.recipe.name,
    style: data.recipe.style.type,
    origialGravity: plato(data.measuredOg),
    finalGravity: plato(data.measuredFg),
    abv: data.measuredAbv,
    ibu: data.estimatedIbu,
  };
}

const plato = (sg: number) => Math.round((260.4 - 260.4 / sg) * 10) / 10;
