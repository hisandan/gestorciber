import { ChatSection } from '@llamaindex/chat-ui'
import { useChat } from 'ai/react'

export default function MyChat() {
  const handler = useChat({
    api: '/api/chat',
  })

  return <ChatSection handler={handler} />
}