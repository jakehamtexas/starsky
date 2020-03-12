const getFromBufferOrDefault = <T extends {}>(buffer: Buffer): T =>
  buffer.length === 0 ? {} : JSON.parse(buffer.toString());

export default getFromBufferOrDefault;
