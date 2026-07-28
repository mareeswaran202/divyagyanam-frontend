export async function GET() {
  try {
    const clientId = process.env.PROKERALA_CLIENT_ID;
    const clientSecret = process.env.PROKERALA_CLIENT_SECRET;

    if (!clientId || !clientSecret) {
      return Response.json(
        { success: false, error: "Prokerala credentials missing" },
        { status: 500 }
      );
    }

    const response = await fetch("https://api.prokerala.com/token", {
      method: "POST",

      headers: {
        "Content-Type": "application/x-www-form-urlencoded",
      },

      body: new URLSearchParams({
        grant_type: "client_credentials",
        client_id: clientId,
        client_secret: clientSecret,
      }),

      cache: "no-store",
    });

    const data = await response.json();

    if (!response.ok) {
      return Response.json(
        {
          success: false,
          status: response.status,
          error: data,
        },
        { status: response.status }
      );
    }

    return Response.json({
      success: true,
      message: "Prokerala authentication successful",
      tokenType: data.token_type,
      expiresIn: data.expires_in,
    });

  } catch (error) {
    console.error("Prokerala authentication error:", error);

    return Response.json(
      {
        success: false,
        error: error.message,
      },
      { status: 500 }
    );
  }
}