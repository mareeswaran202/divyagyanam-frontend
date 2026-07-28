export async function GET(request) {
  try {
    const clientId = process.env.PROKERALA_CLIENT_ID;
    const clientSecret = process.env.PROKERALA_CLIENT_SECRET;

    if (!clientId || !clientSecret) {
      return Response.json(
        {
          success: false,
          error: "Prokerala credentials missing",
        },
        { status: 500 }
      );
    }

    // Get date from URL
    const { searchParams } = new URL(request.url);
    const date = searchParams.get("date");

    if (!date) {
      return Response.json(
        {
          success: false,
          error: "Date is required. Example: ?date=2026-07-27",
        },
        { status: 400 }
      );
    }

    // Validate YYYY-MM-DD
    const datePattern = /^\d{4}-\d{2}-\d{2}$/;

    if (!datePattern.test(date)) {
      return Response.json(
        {
          success: false,
          error: "Invalid date format. Use YYYY-MM-DD.",
        },
        { status: 400 }
      );
    }

    // 1. Get Prokerala access token
    const tokenResponse = await fetch(
      "https://api.prokerala.com/token",
      {
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
      }
    );

    const tokenData = await tokenResponse.json();

    if (!tokenResponse.ok) {
      return Response.json(
        {
          success: false,
          step: "token",
          error: tokenData,
        },
        { status: tokenResponse.status }
      );
    }

    // Chennai for testing
    const coordinates = "13.0827,80.2707";

    // Chennai timezone
    const datetime = `${date}T06:00:00+05:30`;

    const params = new URLSearchParams({
      ayanamsa: "1",
      coordinates,
      datetime,
      la: "en",
    });

    // 2. Get Inauspicious Period
    const apiResponse = await fetch(
      `https://api.prokerala.com/v2/astrology/inauspicious-period?${params.toString()}`,
      {
        headers: {
          Authorization: `Bearer ${tokenData.access_token}`,
        },
        cache: "no-store",
      }
    );

    const apiData = await apiResponse.json();

    if (!apiResponse.ok) {
      return Response.json(
        {
          success: false,
          step: "inauspicious-period",
          status: apiResponse.status,
          error: apiData,
        },
        { status: apiResponse.status }
      );
    }

    return Response.json({
      success: true,
      location: "Chennai",
      coordinates,
      date,
      datetime,
      inauspicious: apiData,
    });

  } catch (error) {
    console.error("Prokerala Inauspicious Period Error:", error);

    return Response.json(
      {
        success: false,
        error: error.message,
      },
      { status: 500 }
    );
  }
}