#include <iostream>
#include <string>

using namespace std;

//void getPlayerAmount();

int main() {
    
    int size[2];
    
    getPlayerAmount(size);
    
    char board[3][3];
    
    string a[2] = { "First", "Second" };
    
    for (int i = 0; i < (sizeof(a)/sizeof(*a)); i++) {
        
        cout << a[i] << " (" << i << ")" << endl;
        
    }
    
    return 0;
    
}

void getPlayerAmount(int size[2]) {
    
    cout << "Enter the vertical size of the board: ";
    cin >> size[0];
    cout << "Enter the vertical size of the board: ";
    cin >> size[1];
    
}