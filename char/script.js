"use strict";

let v = false;
let board = [ 'X', ' ', 'X', 'X', 'X', 'X', 'X', ' ', 'X' ];

if ((board[0] == board[1]) && (board[1] == board[2]) && (board[0] == ('X' || 'O'))) {
    v = true;
} else if ((board[3] == board[4]) && (board[4] == board[5]) && (board[3] == ('X' || 'O'))) {
    v = true;
} else if ((board[6] == board[7]) && (board[7] == board[8]) && (board[6] == ('X' || 'O'))) {
    v = true;
} else {
    v = false;
}