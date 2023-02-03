
export async function fetch_get(url) {
    try {
      const response = await fetch(url, {
        method: 'GET'
      });
      const responseJson = await response.json();
      return responseJson;

    } catch (error) {
      console.error(error);
      throw error;
    }
  }

export async function fetch_post(url, body) {
    try {
      const response = await fetch(url, {
        method: 'POST',
        headers: {
          "Content-Type": "application/json",
        },
        body: body,
      });
      const data = await response.json();
      return data;
    } catch (error) {
      console.error(error);
      return error;
    }
  }

export function fetch_put(url,body) {
    // your function code here
}

export async function fetch_delete(url) {
  await fetch(url, {
    method: 'DELETE',
    headers: {
    'Content-Type': 'application/json',
    },})
}

