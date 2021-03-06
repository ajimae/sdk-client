import { default as createHttpUserAgent} from '../http-user-agent/create-user-agent'

import {
  Dispatch,
  Middleware,
  MiddlewareRequest,
  MiddlewareResponse,
} from '../types/sdk'

type UserAgentMiddlewareOptions = {
  libraryName?: string
  libraryVersion?: string
  contactUrl?: string
  contactEmail?: string
}

export default function createUserAgentMiddleware(
  options: UserAgentMiddlewareOptions
): Middleware {
  const userAgent = createHttpUserAgent({
    name: 'commercetools-js-sdk',
    ...options,
  })

  return (next: Dispatch): Dispatch => (
    request: MiddlewareRequest,
    response: MiddlewareResponse
  ) => {
    const requestWithUserAgent = {
      ...request,
      headers: {
        ...request.headers,
        'User-Agent': userAgent,
      },
    }
    next(requestWithUserAgent, response)
  }
}