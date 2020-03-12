class TokenRA {
  public async GetToken(): Promise<string> {
    return '';
  }
  public async HasUnexpiredToken(): Promise<boolean> {
    return true;
  }
}

export default new TokenRA();
