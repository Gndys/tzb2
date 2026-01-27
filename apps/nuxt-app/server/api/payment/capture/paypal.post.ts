import { createPaymentProvider } from '@libs/payment'
import { db } from '@libs/database'
import { order } from '@libs/database/schema'
import { eq } from 'drizzle-orm'

export default defineEventHandler(async (event) => {
  try {
    const body = await readBody(event)
    const orderId = body?.orderId as string

    if (!orderId) {
      throw createError({
        statusCode: 400,
        statusMessage: 'Order ID is required'
      })
    }

    const orderRecord = await db.query.order.findFirst({
      where: eq(order.id, orderId)
    })

    if (!orderRecord || !orderRecord.providerOrderId) {
      throw createError({
        statusCode: 400,
        statusMessage: 'PayPal order not found'
      })
    }

    const paypalProvider = createPaymentProvider('paypal')
    const captureResult = await paypalProvider.captureOrder(orderRecord.providerOrderId)

    if (captureResult.status !== 'COMPLETED') {
      throw createError({
        statusCode: 400,
        statusMessage: 'PayPal capture not completed'
      })
    }

    return { success: true, captureId: captureResult.id }
  } catch (error: any) {
    console.error('PayPal capture error:', error)

    if (error.statusCode) {
      throw error
    }

    throw createError({
      statusCode: 400,
      statusMessage: 'PayPal capture failed'
    })
  }
})
