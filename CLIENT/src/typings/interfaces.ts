export type Room = "red" | "blue"

export interface User {
  username: string
  id: string
  room: Room
}

export interface Message {
  text: string
  id: string
  sender: string
  timestamp: number
}

// Date.now()
