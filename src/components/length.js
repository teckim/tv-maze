const length = async (showid) => {
  const myapilocation = `https://us-central1-involvement-api.cloudfunctions.net/capstoneApi/apps/yVNBK9TKIWUcSxJaj3sF/comments?item_id=${showid}`;
  const result = await fetch(myapilocation).then((response) => response.json())
    .catch((error) => new Error(error));
  const len = result.length;
  return len;
};
module.exports = length;