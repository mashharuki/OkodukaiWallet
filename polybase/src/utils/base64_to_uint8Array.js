
/**
 * base64からuint8Attary型に変換するためのメソッド
 * @param {*} data 変換させたいデータ 
 * @returns uint8Arrary型の変数
 */
export function base64_to_uint8Array (data) {
  const binaryString = atob(data);
  const length = binaryString.length;
  const uint8Array = new Uint8Array(length);

  for (let i = 0; i < length; i++) {
    uint8Array[i] = binaryString.charCodeAt(i);
  }

  return uint8Array;
}