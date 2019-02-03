#include <iostream>

int addOne(int &integer);

int main() {
    int foo = 10;
    
    addOne(foo);
    
    std::cout << foo;
}

int addOne(int &integer) {
    integer++;
}