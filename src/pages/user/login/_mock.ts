// eslint-disable-next-line import/no-extraneous-dependencies
import { Request, Response } from 'express'

function getFakeCaptcha(req: Request, res: Response) {
  return res.json('captcha-xxx')
}

export default {
  'POST  /api/login/accounts': (req: Request, res: Response) => {
    const { password, userName, type } = req.body
    if (password === 'admin' && userName === 'admin') {
      res.send({
        status: 'ok',
        type,
        currentAuthority: 'admin',
      })
      return
    }
    if (password === 'admin' && userName === 'user') {
      res.send({
        status: 'ok',
        type,
        currentAuthority: 'user',
      })
      return
    }
    if (type === 'mobile') {
      res.send({
        status: 'ok',
        type,
        currentAuthority: 'admin',
      })
      return
    }
    res.send({
      status: 'error',
      type,
      currentAuthority: 'guest',
    })
  },
  'GET  /api/login/captcha': getFakeCaptcha,
}
