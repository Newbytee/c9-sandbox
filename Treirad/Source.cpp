#include <iostream>

using namespace std;

void printBoard();

char board[3][3];
static int boardSize = (sizeof(board)/sizeof(*board));

int main() {
    
    for (int x = 0; x < boardSize; x++) {
        
        for (int y = 0; y < boardSize; y++) {
            
            board[x][y] = '+';
            
        }
        
    }
    
    printBoard();
    
    cout << "hi";
    
}

void printBoard() {
    
    for (int x = 0; x < boardSize; x++) {
        
        for (int y = 0; y < boardSize; y++) {
            
            cout << board[x][y] << ' ';
            
        }
        
        cout << endl;
        
    }
    
}