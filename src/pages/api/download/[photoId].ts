import api from '@/lib/api'
import { NextApiRequest, NextApiResponse } from 'next'
import { Readable } from 'stream'

async function handler(req: NextApiRequest, res: NextApiResponse) {
  const photoId = req.query.photoId

  const { data } = await api.get<Readable>(`/photos/${photoId}/download`, {
    responseType: 'stream',
  })

  res.setHeader('content-disposition', `attachment; filename="${photoId}"`)

  data.pipe(res)
}

export default handler
