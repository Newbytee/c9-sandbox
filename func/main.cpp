#include <iostream>

int foo(int n1, int n2);

int main() {
    
    std::cout << foo(3, 4);
    
}

int foo(int n1, int n2) {
    
    int total;
    
    total = n1 + n2;
    
    return total;
    
}