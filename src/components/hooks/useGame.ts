import { calculateWinner } from '@/helpers/utils'
import { useState } from 'react'
import Square from '../Square'
import Box from '@mui/material/Box'

const useGame = () => {
	const [board, setBoard] = useState<any[]>(Array(9).fill(null))
	const [xIsNext, setXIsNext] = useState<boolean>(true)
	const [winner, setWinner] = useState<any>(null)
	const [startPlayer, setStartPlayer] = useState<any>(null)

	const handleClick = (squarePosition: number): void => {
		const newBoard = board.slice()
		if (winner || newBoard[squarePosition]) {
			return
		}
		newBoard[squarePosition] = xIsNext ? 'X' : 'O'
		setBoard(newBoard)
		setXIsNext(!xIsNext)
		setWinner(calculateWinner(newBoard))
	}

	const handleReset = (): void => {
		setBoard(Array(9).fill(null))
		setXIsNext(startPlayer === 'X')
		setWinner(null)
	}

	const handleSelectPlayer = (): void => {
		setStartPlayer(null)
		handleReset()
	}

	const handleSelectStart = (player: string): void => {
		setStartPlayer(player)
		handleReset()
		setXIsNext(player === 'X')
	}

	const isBoardFull = (): boolean => {
		for (let i = 0; i < board.length; i++) {
			if (board[i] === null) false
		}
		return true
	}

	let status
	if (winner) {
		status = 'prueba'
	} else if (isBoardFull()) {
		status = 'prueba1'
	} else {
		status = 'Next player: ' + (xIsNext ? 'X' : 'O')
	}

	const renderSquare = (squarePosition: number) => squarePosition

	/* (
		<Square
			value={board[squarePosition]}
			onClick={() => handleClick(squarePosition)}
		/>
	) */

	return {
		handleClick,
		handleReset,
		handleSelectPlayer,
		handleSelectStart,
		isBoardFull,
		renderSquare,
		startPlayer,
	}

	/*let status
	if (winner) {
		status = (
			<WinnerShow
				winner={winner}
				handleReset={handleReset}
				handleSelectPlayer={handleSelectPlayer}
			/>
		)
	} else if (isBoardFull()) {
		status = (
			<WinnerShow
				winner="="
				handleReset={handleReset}
				handleSelectPlayer={handleSelectPlayer}
			/>
		)
	} else {
		status = 'Next player: ' + (xIsNext ? 'X' : 'O')
	} */
}

export default useGame
