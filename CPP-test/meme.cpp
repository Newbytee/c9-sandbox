#include <iostream>
#include <string>
#include <ctime>
#include <random>

using namespace std;

int getEnemyQ();
int getDonkeyQ();
void printResults(int donkeyQ, int enemyQ, int deadDonkeys, int deadEnemies);
void simulateBattle(int &donkeyQ, int &enemyQ, int &deadDonkeys, int &deadEnemies, int donkeyHp, int enemyHp, int donkeyDmg, int enemyDmg, float atkChance);

int main() {
	/*
	1D Combat Sim
	Q = Quantity
	Hp = Health Points
	Atk = Attack (Accuracy)
	Dmg = Max Damage
	*/

	//setting up the RNG
	mt19937 rndGen(time(NULL));
	uniform_real_distribution<float> atk(0.0f, 1.0f);

	//defining/initiating variables
	int donkeyQ;
	int enemyQ;
	int donkeyHp;
	int enemyHp;
	int donkeyDmg;
	int enemyDmg;
	int donkeyTmpHp = 0;
	int enemyTmpHp = 0;
	int deadDonkeys = 0;
	int deadEnemies = 0;
	float atkChance = atk(rndGen);


	//getting required user input
	cout << "*** 1D COMBAT SIMULATOR ***\n*** BY NEWBYTE ***\n\n\n";
	donkeyQ = getDonkeyQ();
	enemyQ = getEnemyQ();
	cout << endl << "Set Donkey health points: ";
	cin >> donkeyHp;
	cout << endl << "Set enemy health points: ";
	cin >> enemyHp;
	cout << endl << "Set Donkey damage: ";
	cin >> donkeyDmg;
	cout << endl << "Set enemy damage: ";
	cin >> enemyDmg;

	simulateBattle(donkeyQ, enemyQ, deadDonkeys, deadEnemies, donkeyHp, enemyHp, donkeyDmg, enemyDmg, atkChance);

	cout << "Battle has ended!\n\n";

	printResults(donkeyQ, enemyQ, deadDonkeys, deadEnemies);

	system("PAUSE");
	return 0;
}

int getEnemyQ() {

	int enemyQ;

	cout << endl << "Enter the amount of enemies: ";
	cin >> enemyQ;

	return enemyQ;
}

int getDonkeyQ() {

	int donkeyQ;

	cout << endl << "Enter the amount of Donkeys: ";
	cin >> donkeyQ;

	return donkeyQ;
}

void printResults(int donkeyQ, int enemyQ, int deadDonkeys, int deadEnemies) {

	if (donkeyQ > 0) {
		cout << "Donkeys Win!\n";
		cout << "There are " << donkeyQ << " Donkeys left.\n";
	}

	else {
		cout << "Enemies Win!\n";
		cout << "There are " << enemyQ << " enemies left.\n";
	}

	cout << deadDonkeys << " Donkeys and " << deadEnemies << " enemies lost their lives\n";
}

void simulateBattle(int &donkeyQ, int &enemyQ, int &deadDonkeys, int &deadEnemies, int donkeyHp, int enemyHp, int donkeyDmg, int enemyDmg, float atkChance) {

	//setting up the RNG
	static mt19937 rndGen(time(NULL));
	uniform_real_distribution<float> atk(0.0f, 1.0f);

	int donkeyTmpHp = 0;
	int enemyTmpHp = 0;

	//main loop
	while ((donkeyQ > 0) && (enemyQ > 0)) {

		//check if the fighting Donkey is "dead" and needs replacing, I.E., filling its tmpHp again
		if ((donkeyTmpHp <= 0) && (donkeyQ > 0)) {
			donkeyQ = donkeyQ - 1;
			deadDonkeys++;
			donkeyTmpHp = donkeyHp;
		}

		//check if the fighting enemy is "dead" and needs replacing, I.E., filling its tmpHp again
		if ((enemyTmpHp <= 0) && (enemyQ > 0)) {
			enemyQ = enemyQ - 1;
			deadEnemies++;
			enemyTmpHp = enemyHp;
		}

		//deal damage
		if ((donkeyTmpHp > 0) && (enemyTmpHp > 0)) {
			atkChance = atk(rndGen);
			if (atkChance <= 0.3f) {
				enemyTmpHp = enemyTmpHp - donkeyDmg;
			}

			atkChance = atk(rndGen);
			if (atkChance <= 0.4f) {
				donkeyTmpHp = donkeyTmpHp - enemyDmg;
			}
		}
	}
}