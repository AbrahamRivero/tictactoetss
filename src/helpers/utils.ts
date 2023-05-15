import { LINES } from '@/constants/general'

export const calculateWinner = (board: Array<any>) => {
	for (let i = 0; i < LINES.length; i++) {
		const [a, b, c] = LINES[i]
		if (board[a] && board[a] === board[b] && board[a] === board[c]) {
			return board[a]
		}
	}
	return null
}
