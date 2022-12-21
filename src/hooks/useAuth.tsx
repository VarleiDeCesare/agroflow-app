interface Response {
  token: string;
  user: {
    name: string;
    email: string;
  };
}

export function signIn(): Promise<Response> {
  return new Promise((resolve) => {
    resolve({
      token: "token aqui",
      user: {
        name: "Varlei",
        email: "varlei.cesare@corebiz.ag",
      },
    });
  });
}
