import connectDB from "@/config/database";
import Property from "@/models/Property";

export const GET = async (request, {params}) => {
  try {
    await connectDB();
      const SingleProperties = await Property.findById(params.id );
      if (!SingleProperties) {
          return new Response('no property found', {status: 404})
      }
    return new Response(SingleProperties, { status: 200 });
  } catch (error) {
    return new Response(JSON.stringify({ error: error.message }), {
      status: 500,
    });
  }
};
