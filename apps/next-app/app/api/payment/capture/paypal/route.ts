import { createPaymentProvider } from '@libs/payment';
import { db } from '@libs/database';
import { order } from '@libs/database/schema/order';
import { eq } from 'drizzle-orm';

export async function POST(req: Request) {
  try {
    const body = await req.json();
    const orderId = body?.orderId as string;

    if (!orderId) {
      return Response.json({ error: 'Order ID is required' }, { status: 400 });
    }

    const orderRecord = await db.query.order.findFirst({
      where: eq(order.id, orderId)
    });

    if (!orderRecord || !orderRecord.providerOrderId) {
      return Response.json({ error: 'PayPal order not found' }, { status: 400 });
    }

    const paypalProvider = createPaymentProvider('paypal');
    const captureResult = await paypalProvider.captureOrder(orderRecord.providerOrderId);

    if (captureResult.status !== 'COMPLETED') {
      return Response.json({ error: 'PayPal capture not completed' }, { status: 400 });
    }

    return Response.json({ success: true, captureId: captureResult.id });
  } catch (error) {
    console.error('PayPal capture error:', error);
    return Response.json({ error: 'PayPal capture failed' }, { status: 400 });
  }
}
