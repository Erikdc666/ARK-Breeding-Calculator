var breedingController=angular.module('breedingControllers', []).controller('breedingController', ['$scope', '$rootScope', '$interval', '$cookies', '$animate', function($scope, $rootScope, $interval, $cookies, $animate) {

	var defaultmult = {
  		get: function(target, name) {
   			return target.hasOwnProperty(name) ? target[name] : 1;
  		}
	};

	$scope.Defaultfoods={

		'Raw Fish Meat': {
			food: 25,
			stack: 40,
			spoil: 20*60,
			weight: 0.1,
			waste: 0
		},
		
		'Raw Fish Meat (Carrion)': {
			food: 7.5,
			stack: 40,
			spoil: 20*60,
			weight: 0.1,
			waste: 0
		},

		'Cooked Fish Meat': {
			food: 12.5,
			stack: 50,
			spoil: 30*60,
			weight: 0.1,
			waste: 0
		},

		'Raw Meat': {
			food: 50,
			stack: 40,
			spoil: 10*60,
			weight: 0.1,
			waste: 0
		},
		
		'Raw Meat (Carrion)': {
			food: 15,
			stack: 40,
			spoil: 10*60,
			weight: 0.1,
			waste: 0
		},

		'Cooked Meat': {
			food: 25,
			stack: 50,
			spoil: 20*60,
			weight: 0.1,
			waste: 25
		},

		'Spoiled Meat': {
			food: 50,
			stack: 100,
			spoil: 60*60,
			weight: 0.1,
			waste: 0
		},

		'Mejoberry': {
			food: 30,
			stack: 100,
			spoil: 10*60,
			weight: 0.1,
			waste: 0
		},

		'Berry': {
			food: 20,
			stack: 100,
			spoil: 10*60,
			weight: 0.1,
			waste: 0
		},

		'Vegetables': {
			food: 40,
			stack: 100,
			spoil: 5*60,
			weight: 0.1,
			waste: 0
		},

		'Rare Flower': {
			food: 60,
			stack: 100,
			spoil: 3*24*60*60,
			weight: 0.15,
			waste: 0
		},

		'Chitin': {
			food: 50,
			stack: 100,
			spoil: 9001*9001,
			weight: 0.01,
			waste: 0
		},

		'Kibble': {
			food: 60,
			stack: 100,
			spoil: 3*24*60*60,
			weight: 0.1,
			waste: 0
		},

		'Wyvern Milk': {
			food: 1200,
			stack: 1,
			spoil: 10*60*3,
			weight: 0.1,
			waste: 0
		},
		
		'Mutagen': {
			food: 1000,
			stack: 1,
			spoil: 10*60*3,
			weight: 0.1,
			waste: 0
		},
		
		'Primal Crystal': {
			food: 350,
			stack: 1,
			spoil: 10800,
			weight: 1,
			waste: 0
		},
				
		'Ambergris': {
			food: 500,
			stack: 1,
			spoil: 10*60*2,
			weight: 5,
			waste: 0
		},
		
		'Nameless Venom': {
			food: 400,
			stack: 1,
			spoil: 10*60*3,
			weight: 0.1,
			waste: 0
		},
		
		'Blood Pack': {
			food: 200,
			stack: 100,
			spoil: 10*60*3,
			weight: 0.05,
			waste: 0
		},

		'Sulfur': {
			food: 50,
			stack: 100,
			spoil: 9001*9001,
			weight: 0.05,
			waste: 0
		},

		'Stone': {
			food: 50,
			stack: 100,
			spoil: 9001*9001,
			weight: 0.5,
			waste: 0
		},

		'Clay': {
			food: 25,
			stack: 100,
			spoil: 9001*9001,
			weight: 0.05,
			waste: 0
		},

		'Bio Toxin': {
			food: 50,
			stack: 100,
			spoil: 45*60,
			weight: 0.1,
			waste: 0
		},

		'Berry (Archelon)': {
			food: 15,
			stack: 100,
			spoil: 10*60,
			weight: 0.1,
			waste: 0
		},

		'Vegetables (Archelon)': {
			food: 60,
			stack: 100,
			spoil: 5*60,
			weight: 0.1,
			waste: 0
		}
	}
	
	$scope.Primfoods={
		//Prim Plus Stacksize is only 20 for fish meat!
		'Raw Fish Meat': {
			food: 25,
			stack: 20,
			spoil: 20*60,
			weight: 0.1,
			waste: 0
		},
		
		'Raw Fish Meat (Carrion)': {
			food: 5,
			stack: 40,
			spoil: 20*60,
			weight: 0.1,
			waste: 0
		},

		'Cooked Fish Meat': {
			food: 12.5,
			stack: 50,
			spoil: 30*60,
			weight: 0.1,
			waste: 0
		},
		
		//Prim Plus Stacksize is only 20 for meat!
		'Raw Meat': {
			food: 50,
			stack: 20,
			spoil: 10*60,
			weight: 0.1,
			waste: 0
		},
		
		'Raw Meat (Carrion)': {
			food: 10,
			stack: 40,
			spoil: 10*60,
			weight: 0.1,
			waste: 0
		},

		'Cooked Meat': {
			food: 25,
			stack: 50,
			spoil: 20*60,
			weight: 0.1,
			waste: 25
		},

		'Spoiled Meat': {
			food: 50,
			stack: 100,
			spoil: 60*60,
			weight: 0.1,
			waste: 0
		},

		'Mejoberry': {
			food: 30,
			stack: 100,
			spoil: 10*60,
			weight: 0.1,
			waste: 0
		},

		'Berry': {
			food: 20,
			stack: 100,
			spoil: 10*60,
			weight: 0.1,
			waste: 0
		},

		'Vegetables': {
			food: 40,
			stack: 100,
			spoil: 5*60,
			weight: 0.1,
			waste: 0
		},

		'Rare Flower': {
			food: 60,
			stack: 100,
			spoil: 3*24*60*60,
			weight: 0.15,
			waste: 0
		},

		'Chitin': {
			food: 50,
			stack: 100,
			spoil: 9001*9001,
			weight: 0.01,
			waste: 0
		},

		'Kibble': {
			food: 60,
			stack: 100,
			spoil: 3*24*60*60,
			weight: 0.1,
			waste: 0
		},
		
		'Wyvern Milk': {
			food: 1200,
			stack: 1,
			spoil: 10*60*3,
			weight: 0.1,
			waste: 0
		},
		
		'Mutagen': {
			food: 1000,
			stack: 1,
			spoil: 10*60*3,
			weight: 0.1,
			waste: 0
		},
		
		'Primal Crystal': {
			food: 350,
			stack: 1,
			spoil: 10800,
			weight: 1,
			waste: 0
		},
				
		'Ambergris': {
			food: 500,
			stack: 1,
			spoil: 10*60*2,
			weight: 5,
			waste: 0
		},
		
		'Nameless Venom': {
			food: 400,
			stack: 1,
			spoil: 10*60*3,
			weight: 0.1,
			waste: 0
		},
		
		'Blood Pack': {
			food: 200,
			stack: 100,
			spoil: 10*60*3,
			weight: 0.05,
			waste: 0
		},

		'Sulfur': {
			food: 50,
			stack: 100,
			spoil: 9001*9001,
			weight: 0.05,
			waste: 0
		},

		'Stone': {
			food: 50,
			stack: 100,
			spoil: 9001*9001,
			weight: 0.5,
			waste: 0
		},

		'Clay': {
			food: 25,
			stack: 100,
			spoil: 9001*9001,
			weight: 0.05,
			waste: 0
		},

		'Bio Toxin': {
			food: 50,
			stack: 100,
			spoil: 45*60,
			weight: 0.1,
			waste: 0
		},

		'Berry (Archelon)': {
			food: 15,
			stack: 100,
			spoil: 10*60,
			weight: 0.1,
			waste: 0
		},

		'Vegetables (Archelon)': {
			food: 60,
			stack: 100,
			spoil: 5*60,
			weight: 0.1,
			waste: 0
		}

	}
	
	$scope.foods=$scope.Defaultfoods;
	
	

	$scope.foodlists={
		Carnivore: ['Raw Meat', 'Cooked Meat', 'Raw Fish Meat', 'Kibble'],
		Herbivore: ['Mejoberry', 'Berry', 'Vegetables', 'Kibble'],
		Omnivore: ['Raw Meat', 'Cooked Meat', 'Raw Fish Meat', 'Mejoberry', 'Berry', 'Kibble'],
		Microraptor: ['Raw Meat', 'Cooked Meat', 'Rare Flower'],
		Archaeopteryx: ['Chitin'],
		Sinomacrops: ['Chitin'],
		Vulture: ['Spoiled Meat'],
		Carrion: ['Spoiled Meat', 'Raw Meat (Carrion)', 'Raw Fish Meat (Carrion)'],
		Piscivore: ['Raw Fish Meat', 'Cooked Fish Meat'],
		Wyvern: ['Wyvern Milk'],
		// Voidwyrm: ['Mutagen'],
		CrystalWyvern: ['Primal Crystal'],
		Magmasaur: ['Ambergris', 'Sulfur'],
		Gargantar: ['Stone', 'Clay', 'Sulfur'], //Rock Elemental diet. Its tamed inventory whitelists all three, so babies auto-eat them
		RockDrake: ['Nameless Venom'],
		BloodStalker: ['Blood Pack', 'Raw Meat (Carrion)', 'Raw Fish Meat (Carrion)'],
		Archelon: ['Vegetables (Archelon)','Bio Toxin','Berry (Archelon)']
	}

	$scope.foodlist=['Raw Meat', 'Cooked Meat', 'Raw Fish Meat', 'Raw Fish Meat (Carrion)', 'Cooked Fish Meat', 'Mejoberry', 'Berry', 'Vegetables', 'Kibble', 'Rare Flower', 'Chitin', 'Spoiled Meat', 'Wyvern Milk', 'Mutagen', 'Primal Crystal', 'Ambergris', 'Nameless Venom', 'Raw Meat (Carrion)', 'Blood Pack', 'Sulfur', 'Stone', 'Clay','Vegetables (Archelon)','Bio Toxin','Berry (Archelon)'] //Display order

	$scope.foodorder=['Raw Fish Meat', 'Raw Fish Meat (Carrion)', 'Cooked Fish Meat', 'Raw Meat', 'Berry', 'Cooked Meat', 'Mejoberry', 'Vegetables', 'Kibble', 'Rare Flower', 'Chitin', 'Spoiled Meat', 'Wyvern Milk', 'Mutagen', 'Primal Crystal', 'Ambergris', 'Nameless Venom', 'Raw Meat (Carrion)', 'Blood Pack', 'Sulfur', 'Clay', 'Stone','Vegetables (Archelon)','Bio Toxin','Berry (Archelon)'] //In-game order

	$scope.troughtypes={
		Normal: 4,
		Tek: 100,
		Clicker: 1
	}

	$scope.foodrate_time_units={
		Minute: 1,
		Hour: 60,
		Day: 60*24
	}

	/*
	* Where to locate stat values:
	*
	* Note: PrimalItemConsumable_Egg_[Creature]_Fertilized can be PrimalItemConsumable_UnderwaterEgg_[Creature] for underwater creatures
	*
	* basefoodrate: DinoCharacterStatusComponent_BP_[Creature]/BaseFoodConsumionRate
	* babyfoodrate: DinoCharacterStatusComponent_BP_[Creature]/BabyDinoConsumingFoodRateMultiplier
	* extrababyfoodrate: DinoCharacterStatusComponent_BP_[Creature]/ExtraBabyDinoConsumingFoodRateMultipler
	* agespeed: [Creature]_Character_BP/BabyAgeSpeed
	* agespeedmult: [Creature]_Character_BP/BabyAgeSpeedMultipler
	* eggspeed: PrimalItemConsumable_Egg_[Creature]_Fertilized/EggLoseDurabilityPerSecond
	* eggspeedmult: PrimalItemConsumable_Egg_[Creature]_Fertilized/ExtraEggLoseDurabilityPerSecondMultiplier
	* or
	* gestationspeed: [Creature]_Character_BP/BabyGestationSpeed
	* gestationspeedmult: [Creature]_Character_BP/ExtraBabyGestationSpeedMultiplier
	* weight: DinoCharacterStatusComponent_BP_[Creature]/MaxStatusValues
	* // = DevKit checked
	*/
	

	$scope.creatures={

		Acrocanthosaurus: { //
			birthtype: "Incubation",
			type: "Carnivore",
			basefoodrate: 0.002314,
			babyfoodrate: 25.5,
			extrababyfoodrate: 20.0,
			agespeed: 0.000003,
			agespeedmult: 1,
			eggspeed: 0.005556,
			eggspeedmult: 1,
			weight: 600,
			food: 3000
		},
		
		Allosaurus: { //
			birthtype: "Incubation",
			type: "Carnivore",
			basefoodrate: 0.002052,
			babyfoodrate: 25.5,
			extrababyfoodrate: 20,
			agespeed: 0.000003,
			agespeedmult: 2.0,
			eggspeed: 0.005556,
			eggspeedmult: 3.0,
			weight: 380.0,
			food: 3000.0
		},

		Amargasaurus: { //
			birthtype: "Incubation",
			type: "Herbivore",
			basefoodrate: 0.00625,
			babyfoodrate: 25.5,
			extrababyfoodrate: 20,
			agespeed: 0.000003,
			agespeedmult: 1.0,
			eggspeed: 0.005556,
			eggspeedmult: 1.0,
			weight: 475.0,
			food: 6300.0
		},

		Andrewsarchus: { //
			birthtype: "Gestation",
			type: "Omnivore",
			basefoodrate: 0.003156,
			babyfoodrate: 25.5,
			extrababyfoodrate: 20.0,
			agespeed: 0.000003,
			agespeedmult: 1.6,
			gestationspeed: 0.000035,
			gestationspeedmult: 1.6,
			weight: 500.0,
			food: 2174.0
		},

		Anglerfish: { //
			birthtype: "Incubation",
			type: "Carnivore",
			basefoodrate: 0.001852,
			babyfoodrate: 25.5,
			extrababyfoodrate: 20.0,
			agespeed: 0.000003,
			agespeedmult: 2.5,
			eggspeed: 0.005556,
			eggspeedmult: 1.0,
			weight: 350,
			food: 1500
		},

		Ankylosaurus: { //
			birthtype: "Incubation",
			type: "Herbivore",
			basefoodrate: 0.003156,
			babyfoodrate: 25.5,
			extrababyfoodrate: 20.0,
			agespeed: 0.000003,
			agespeedmult: 1.9,
			eggspeed: 0.005556,
			eggspeedmult: 1.9,
			weight: 250,
			food: 3000
		},
		
		Araneo: { //
			birthtype: "Incubation",
			type: "Carrion",
			basefoodrate: 0.001736,
			babyfoodrate: 25.5,
			extrababyfoodrate: 20.0,
			agespeed: 0.000003,
			agespeedmult: 3.7,
			eggspeed: 0.005556,
			eggspeedmult: 3.5,
			weight: 150.0,
			food: 1200.0
		},

		Archaeopteryx: { //
			birthtype: "Incubation",
			type: "Archaeopteryx",
			basefoodrate: 0.001302,
			babyfoodrate: 25.5,
			extrababyfoodrate: 20.0,
			agespeed: 0.000003,
			agespeedmult: 6.0,
			eggspeed: 0.005556,
			eggspeedmult: 1.9,
			weight: 30.0,
			food: 900.0
		},

		Archelon: { //
			birthtype: "Incubation",
			type: "Archelon",
			basefoodrate: 0.007716,
			babyfoodrate: 25.5,
			extrababyfoodrate: 20.0,
			agespeed: 0.000003,
			agespeedmult: 0.5,
			eggspeed: 0.005556,
			eggspeedmult: 1.0,
			weight: 1000.0,
			food: 3500.0
		},

		Argentavis: { //
			birthtype: "Incubation",
			type: "Carnivore",
			basefoodrate: 0.001852,
			babyfoodrate: 25.5,
			extrababyfoodrate: 20,
			agespeed: 0.000003,
			agespeedmult: 1.7,
			eggspeed: 0.005556,
			eggspeedmult: 1.7,
			weight: 400.0,
			food: 2000.0
		},
		
		Armadoggo: { //
			birthtype: "Gestation",
			type: "Carnivore",
			basefoodrate: 0.001543,
			babyfoodrate: 25.5,
			extrababyfoodrate: 20.0,
			agespeed: 0.000003,
			agespeedmult: 1.7,
			gestationspeed: 0.000035,
			gestationspeedmult: 1.0,
			weight: 200,
			food: 1200
		},

		Arthropluera: { //
			birthtype: "Incubation",
			type: "Carrion",
			basefoodrate: 0.001543,
			babyfoodrate: 25.5,
			extrababyfoodrate: 20.0,
			agespeed: 0.000003,
			agespeedmult: 1.8,
			eggspeed: 0.005556,
			eggspeedmult: 2.0,
			weight: 100.0,
			food: 1200.0
		},
		
		Astrocetus: { //
			birthtype: "Gestation",
			type: "Carnivore",
			basefoodrate: 0.002314,
			babyfoodrate: 25.5,
			extrababyfoodrate: 20.0,
			agespeed: 0.000003,
			agespeedmult: 1.0,
			gestationspeed: 0.000035,
			gestationspeedmult: 1.0,
			weight: 2000.0,
			food: 6000.0
		},

		Astrodelphis: { // NEW
			birthtype: "Gestation",
			type: "Carnivore",
			basefoodrate: 0.001543,
			babyfoodrate: 25.5,
			extrababyfoodrate: 20.0,
			agespeed: 0.000003,
			agespeedmult: 1.7,
			gestationspeed: 0.000035,
			gestationspeedmult: 1.0,
			weight: 280,
			food: 1600
		},

		Aureliax: { //
			birthtype: "Incubation",
			type: "Carnivore",
			basefoodrate: 0.01,
			babyfoodrate: 25.5,
			extrababyfoodrate: 20,
			agespeed: 0.000003,
			agespeedmult: 1.0,
			eggspeed: 0.005556,
			eggspeedmult: 1.0,
			weight: 1100,
			food: 2000
		},

		Baryonyx: { //
			birthtype: "Incubation",
			type: "Piscivore",
			basefoodrate: 0.001543,
			babyfoodrate: 25.5,
			extrababyfoodrate: 20,
			agespeed: 0.000003,
			agespeedmult: 2.0,
			eggspeed: 0.005556,
			eggspeedmult: 2.5,
			weight: 325.0,
			food: 2250.0
		},

		Basilosaurus: { //
			birthtype: "Gestation",
			type: "Carnivore",
			basefoodrate: 0.002929,
			babyfoodrate: 25.5,
			extrababyfoodrate: 20.0,
			agespeed: 0.000003,
			agespeedmult: 0.8,
			gestationspeed: 0.000035,
			gestationspeedmult: 1.0,
			weight: 700.0,
			food: 8000.0
		},

		Basilisk: { //
			birthtype: "Incubation",
			type: "Carnivore",
			basefoodrate: 0.001543,
			babyfoodrate: 25.5,
			extrababyfoodrate: 20.0,
			agespeed: 0.000003,
			agespeedmult: 0.5,
			eggspeed: 0.005556,
			eggspeedmult: 0.8,
			weight: 800.0,
			food: 2500.0
		},

		Beelzebufo: { //
			birthtype: "Incubation",
			type: "Carnivore",
			basefoodrate: 0.001929,
			babyfoodrate: 25.5,
			extrababyfoodrate: 20.0,
			agespeed: 0.000003,
			agespeedmult: 2.5,
			eggspeed: 0.005556,
			eggspeedmult: 1.0,
			weight: 160.0,
			food: 1500.0
		},
		
		Bison: { //
			birthtype: "Gestation",
			type: "Herbivore",
			basefoodrate: 0.003556,
			babyfoodrate: 25.5,
			extrababyfoodrate: 20.0,
			agespeed: 0.000003,
			agespeedmult: 2.2,
			gestationspeed: 0.000035,
			gestationspeedmult: 2.2,
			weight: 650,
			food: 3250
		},
		
		Bloodstalker: { //
			birthtype: "Incubation",
			type: "BloodStalker",
			basefoodrate: 0.001543,
			babyfoodrate: 25.5,
			extrababyfoodrate: 20.0,
			agespeed: 0.000003,
			agespeedmult: 1.7,
			eggspeed: 0.005556,
			eggspeedmult: 1.7,
			weight: 350.0,
			food: 1200.0
		},

		Brontosaurus: { //
			birthtype: "Incubation",
			type: "Herbivore",
			basefoodrate: 0.007716,
			babyfoodrate: 25.5,
			extrababyfoodrate: 20.0,
			agespeed: 0.000003,
			agespeedmult: 1.0,
			eggspeed: 0.005556,
			eggspeedmult: 1.0,
			weight: 1600.0,
			food: 10000.0
		},

		Bulbdog: { //
			birthtype: "Gestation",
			type: "Omnivore",
			basefoodrate: 0.000868,
			babyfoodrate: 25.5,
			extrababyfoodrate: 20.0,
			agespeed: 0.000003,
			agespeedmult: 1.9,
			gestationspeed: 0.000035,
			gestationspeedmult: 1.9,
			weight: 120,
			food: 450
		},

		Burrowbuck: { //
			birthtype: "Gestation",
			type: "Herbivore",
			basefoodrate: 0.003156,
			babyfoodrate: 25.5,
			extrababyfoodrate: 20.0,
			agespeed: 0.000003,
			agespeedmult: 1.3,
			gestationspeed: 0.000035,
			gestationspeedmult: 1.3,
			weight: 350,
			food: 2000
		},
		
		Carbonemys: { //
			birthtype: "Incubation",
			type: "Herbivore",
			basefoodrate: 0.003156,
			babyfoodrate: 25.5,
			extrababyfoodrate: 20.0,
			agespeed: 0.000003,
			agespeedmult: 4.0,
			eggspeed: 0.005556,
			eggspeedmult: 4.0,
			weight: 270.0,
			food: 3000.0
		},

		Carcharodontosaurus: { //
			birthtype: "Incubation",
			type: "Carnivore",
			basefoodrate: 0.002314,
			babyfoodrate: 35.0,
			extrababyfoodrate: 20.0,
			agespeed: 0.000003,
			agespeedmult: 0.3795,
			eggspeed: 0.005556,
			eggspeedmult: 0.1,
			weight: 650,
			food: 4000
		},

		Carnotaurus: { //
			birthtype: "Incubation",
			type: "Carnivore",
			basefoodrate: 0.001852,
			babyfoodrate: 25.5,
			extrababyfoodrate: 20.0,
			agespeed: 0.000003,
			agespeedmult: 2.0,
			eggspeed: 0.005556,
			eggspeedmult: 3.0,
			weight: 300.0,
			food: 2000.0
		},

		Castoroides: { //
			birthtype: "Gestation",
			type: "Herbivore",
			basefoodrate: 0.002314,
			babyfoodrate: 25.5,
			extrababyfoodrate: 20.0,
			agespeed: 0.000003,
			agespeedmult: 1.5,
			gestationspeed: 0.000035,
			gestationspeedmult: 1.0,
			weight: 300,
			food: 2000
		},

		Ceratosaurus: { //
			birthtype: "Incubation",
			type: "Carnivore",
			basefoodrate: 0.002314,
			babyfoodrate: 25.5,
			extrababyfoodrate: 20.0,
			agespeed: 0.000003,
			agespeedmult: 0.7,
			eggspeed: 0.005556,
			eggspeedmult: 1.0,
			weight: 350.0,
			food: 3000.0
		},

		Cerberax: { //ASA Fantastic Tames (internal name Cerberus). Values from the game files, build 25636863
			birthtype: "Gestation",
			type: "Carnivore",
			basefoodrate: 0.0025,
			babyfoodrate: 25.5,
			extrababyfoodrate: 20.0,
			agespeed: 0.000003,
			agespeedmult: 0.8,
			gestationspeed: 0.000035,
			gestationspeedmult: 0.8,
			weight: 666.0,
			food: 3000.0
		},

		Cat: { //
			birthtype: "Gestation",
			type: "Carnivore",
			basefoodrate: 0.0008,
			babyfoodrate: 25.5,
			extrababyfoodrate: 20.0,
			agespeed: 0.000003,
			agespeedmult: 3,
			gestationspeed: 0.000035,
			gestationspeedmult: 3.0,
			weight: 60,
			food: 450
		},

		Chalicotherium: { //
			birthtype: "Gestation",
			type: "Herbivore",
			basefoodrate: 0.003156,
			babyfoodrate: 25.5,
			extrababyfoodrate: 20.0,
			agespeed: 0.000003,
			agespeedmult: 1.125,
			gestationspeed: 0.000035,
			gestationspeedmult: 1.0,
			weight: 400,
			food: 4000
		},

		Compsognathus: { //
			birthtype: "Incubation",
			type: "Carnivore",
			basefoodrate: 0.000868,
			babyfoodrate: 25.5,
			extrababyfoodrate: 20.0,
			agespeed: 0.000003,
			agespeedmult: 4.4,
			eggspeed: 0.005556,
			eggspeedmult: 6.0,
			weight: 25,
			food: 450
		},

		Cosmo: { //Carnivore, not Sinomacrops: Chitin is Resource-type and Cosmo lacks the TamedDinoForceConsiderFoodTypes whitelist Sino/Archa have, so troughs and nursing never feed it Chitin
			birthtype: "Incubation",
			type: "Carnivore",
			basefoodrate: 0.000868,
			babyfoodrate: 25.5,
			extrababyfoodrate: 20.0,
			agespeed: 0.000003,
			agespeedmult: 1.0,
			eggspeed: 0.005556,
			eggspeedmult: 3.5,
			weight: 70.0,
			food: 450.0
		},

		Cryolophosaurus: { //
			birthtype: "Incubation",
			type: "Carnivore",
			basefoodrate: 0.001543,
			babyfoodrate: 25.5,
			extrababyfoodrate: 20.0,
			agespeed: 0.000003,
			agespeedmult: 0.5,
			eggspeed: 0.005556,
			eggspeedmult: 1,
			weight: 500,
			food: 1200
		},
		
		"Crystal Wyvern": { //Food Check - Primal Crystal 350 Food Value - need more Tests!?
			birthtype: "Incubation",
			type: "CrystalWyvern",
			basefoodrate: 0.000185,
			babyfoodrate: 19.25,
			extrababyfoodrate: 6.0,
			agespeed: 0.000003,
			agespeedmult: 1.0,
			eggspeed: 0.005556,
			eggspeedmult: 1.0,
			weight: 300,
			food: 1500,
		},

		Daeodon: { //
			birthtype: "Gestation",
			type: "Carnivore",
			basefoodrate: 0.01,
			babyfoodrate: 5.0,
			extrababyfoodrate: 8.0,
			agespeed: 0.000003,
			agespeedmult: 1.9,
			gestationspeed: 0.000035,
			gestationspeedmult: 1.0,
			weight: 400.0,
			food: 2500,
			foodmultipliers: {
				"Raw Meat": 0.2
			},
			wastemultipliers: {
				"Cooked Meat": 0
			}
		},
		
		Deinonychus: { //
			birthtype: "Incubation",
			type: "Carnivore",
			basefoodrate: 0.001543,
			babyfoodrate: 25.5,
			extrababyfoodrate: 20,
			agespeed: 0.000003,
			agespeedmult: 2.5,
			eggspeed: 0.005556,
			eggspeedmult: 2.5, //ASA incubation 2h (ASE was 5h)
			weight: 140.0,
			food: 1200.0
		},

		Deinosuchus: { //
			birthtype: "Incubation",
			type: "Carnivore",
			basefoodrate: 0.01,
			babyfoodrate: 25.5,
			extrababyfoodrate: 20,
			agespeed: 0.000003,
			agespeedmult: 1.0,
			eggspeed: 0.005556,
			eggspeedmult: 2.0,
			weight: 600.0,
			food: 3000.0
		},

		Deinotherium: { //
			birthtype: "Gestation",
			type: "Herbivore",
			basefoodrate: 0.002314,
			babyfoodrate: 25.5,
			extrababyfoodrate: 20,
			agespeed: 0.000003,
			agespeedmult: 0.5,
			gestationspeed: 0.000035,
			gestationspeedmult: 1,
			weight: 800.0,
			food: 8000.0
		},

		Desmodus: { //
			birthtype: "Gestation",
			type: "BloodStalker",
			basefoodrate: 0.001543,
			babyfoodrate: 25.5,
			extrababyfoodrate: 20.0,
			agespeed: 0.000003,
			agespeedmult: 1.3,
			gestationspeed: 0.000035,
			gestationspeedmult: 1,
			weight: 350.0,
			food: 1600.0
		},

		Dilophosaurus: { //
			birthtype: "Incubation",
			type: "Carnivore",
			basefoodrate: 0.000868,
			babyfoodrate: 25.5,
			extrababyfoodrate: 20.0,
			agespeed: 0.000003,
			agespeedmult: 4.4,
			eggspeed: 0.005556,
			eggspeedmult: 4.4,
			weight: 45,
			food: 450
		},

		Dimetrodon: { //
			birthtype: "Incubation",
			type: "Carnivore",
			basefoodrate: 0.001736,
			babyfoodrate: 25.5,
			extrababyfoodrate: 20.0,
			agespeed: 0.000003,
			agespeedmult: 2,
			eggspeed: 0.005556,
			eggspeedmult: 2,
			weight: 250,
			food: 1500
		},

		Dimorphodon: { //
			birthtype: "Incubation",
			type: "Carnivore",
			basefoodrate: 0.001302,
			babyfoodrate: 25.5,
			extrababyfoodrate: 20.0,
			agespeed: 0.000003,
			agespeedmult: 3.7,
			eggspeed: 0.005556,
			eggspeedmult: 3.7,
			weight: 50,
			food: 900
		},

		Dinopithecus: { //
			birthtype: "Gestation",
			type: "Carnivore",
			basefoodrate: 0.001543,
			babyfoodrate: 25.5,
			extrababyfoodrate: 20.0,
			agespeed: 0.000003,
			agespeedmult: 1,
			gestationspeed: 0.000035,
			gestationspeedmult: 0.8,
			weight: 350,
			food: 1200
		},
		
		Diplocaulus: { //
			birthtype: "Incubation",
			type: "Carnivore",
			basefoodrate: 0.001543,
			babyfoodrate: 25.5,
			extrababyfoodrate: 20.0,
			agespeed: 0.000003,
			agespeedmult: 2.5,
			eggspeed: 0.005556,
			eggspeedmult: 1.0,
			weight: 150.0,
			food: 1500.0
		},

		Diplodocus: { //
			birthtype: "Incubation",
			type: "Herbivore",
			basefoodrate: 0.007716,
			babyfoodrate: 25.5,
			extrababyfoodrate: 20.0,
			agespeed: 0.000003,
			agespeedmult: 1.0,
			eggspeed: 0.005556,
			eggspeedmult: 1.0,
			weight: 800.0,
			food: 10000.0
		},

		Direbear: { //
			birthtype: "Gestation",
			type: "Omnivore",
			basefoodrate: 0.003156,
			babyfoodrate: 25.5,
			extrababyfoodrate: 20.0,
			agespeed: 0.000003,
			agespeedmult: 2,
			gestationspeed: 0.000035,
			gestationspeedmult: 2,
			weight: 650.0,
			food: 3000.0
		},

		Direwolf: { //
			birthtype: "Gestation",
			type: "Carnivore",
			basefoodrate: 0.001543,
			babyfoodrate: 25.5,
			extrababyfoodrate: 20.0,
			agespeed: 0.000003,
			agespeedmult: 1.9,
			gestationspeed: 0.000035,
			gestationspeedmult: 1.9,
			weight: 170.0,
			food: 1200.0
		},

		Dodo: { //
			birthtype: "Incubation",
			type: "Herbivore",
			basefoodrate: 0.000868,
			babyfoodrate: 25.5,
			extrababyfoodrate: 20.0,
			agespeed: 0.000003,
			agespeedmult: 6.0,
			eggspeed: 0.005556,
			eggspeedmult: 6.0,
			weight: 50.0,
			food: 450.0
		},

		Doedicurus: { //
			birthtype: "Gestation",
			type: "Herbivore",
			basefoodrate: 0.003156,
			babyfoodrate: 25.5,
			extrababyfoodrate: 20.0,
			agespeed: 0.000003,
			agespeedmult: 1.6,
			gestationspeed: 0.000035,
			gestationspeedmult: 1.6,
			weight: 250.0,
			food: 3000.0
		},

		Drakeling: { //
			birthtype: "Incubation",
			type: "Carnivore",
			basefoodrate: 0.001302,
			babyfoodrate: 25.5,
			extrababyfoodrate: 20.0,
			agespeed: 0.000003,
			agespeedmult: 3.7,
			eggspeed: 0.005556,
			eggspeedmult: 4.0,
			weight: 65.0,
			food: 1000,
			foodmultipliers: {
				"Raw Meat": 0.5,
				"Cooked Meat": 2.0
			},
		},

		Dreadmare: { //
			birthtype: "Gestation",
			type: "Carrion",
			basefoodrate: 0.001929,
			babyfoodrate: 25.5,
			extrababyfoodrate: 20.0,
			agespeed: 0.000003,
			agespeedmult: 0.8,
			gestationspeed: 0.000035,
			gestationspeedmult: 1.0,
			weight: 450.0,
			food: 1750.0
		},

		Dreadnoughtus: { //
			birthtype: "Incubation",
			type: "Herbivore",
			basefoodrate: 0.01,
			babyfoodrate: 50.0,
			extrababyfoodrate: 20.0,
			agespeed: 0.000003,
			agespeedmult: 0.5,
			eggspeed: 0.005556,
			eggspeedmult: 1.0,
			weight: 3000.0,
			food: 13500,
			food: 13500.0
		},

		Dunkleosteus: { //
			birthtype: "Gestation",
			type: "Carnivore",
			basefoodrate: 0.001852,
			babyfoodrate: 25.5,
			extrababyfoodrate: 20.0,
			agespeed: 0.000003,
			agespeedmult: 1.125,
			gestationspeed: 0.000035,
			gestationspeedmult: 1.0,
			weight: 910.0,
			food: 2000.0
		},

		ElderClaw: { //
			birthtype: "Gestation",
			type: "Omnivore",
			basefoodrate: 0.003156,
			babyfoodrate: 25.5,
			extrababyfoodrate: 20.0,
			agespeed: 0.000003,
			agespeedmult: 1,
			gestationspeed: 0.000035,
			gestationspeedmult: 1,
			weight: 650,
			food: 2800,
		},
		
		Electrophorus: { //
			birthtype: "Incubation",
			type: "Carnivore",
			basefoodrate: 0.002929,
			babyfoodrate: 25.5,
			extrababyfoodrate: 20.0,
			agespeed: 0.000003,
			agespeedmult: 2.0,
			eggspeed: 0.005556,
			eggspeedmult: 1.0,
			weight: 150.0,
			food: 1500.0
		},

		Equus: { //
			birthtype: "Gestation",
			type: "Herbivore",
			basefoodrate: 0.001929,
			babyfoodrate: 25.5,
			extrababyfoodrate: 20.0,
			agespeed: 0.000003,
			agespeedmult: 2.0,
			gestationspeed: 0.000035,
			gestationspeedmult: 1.0,
			weight: 350.0,
			food: 1500.0
		},

		Fasolasuchus: { //
			birthtype: "Incubation",
			type: "Carnivore",
			basefoodrate: 0.001543,
			babyfoodrate: 25.5,
			extrababyfoodrate: 20.0,
			agespeed: 0.000003,
			agespeedmult: 0.5,
			eggspeed: 0.005556,
			eggspeedmult: 1.0,
			weight: 450.0,
			food: 2750.0
		},

		Featherlight: { //
			birthtype: "Incubation",
			type: "Carnivore",
			basefoodrate: 0.000868,
			babyfoodrate: 25.5,
			extrababyfoodrate: 20.0,
			agespeed: 0.000003,
			agespeedmult: 1.9,
			eggspeed: 0.005556,
			eggspeedmult: 3.0,
			weight: 70.0,
			food: 450.0
		},

		Ferox: { //
			birthtype: "Gestation",
			type: "Carnivore",
			basefoodrate: 0.000868,
			babyfoodrate: 25.5,
			extrababyfoodrate: 20.0,
			agespeed: 0.000003,
			agespeedmult: 1.0,
			gestationspeed: 0.000035,
			gestationspeedmult: 0.8,
			weight: 55.0,
			food: 1200.0
		},

		Fjordhawk: { //
			birthtype: "Incubation",
			type: "Omnivore",
			basefoodrate: 0.001543,
			babyfoodrate: 25.5,
			extrababyfoodrate: 20.0,
			agespeed: 0.000003,
			agespeedmult: 2.0,
			eggspeed: 0.005556,
			eggspeedmult: 3.0,
			weight: 65.0,
			food: 1000.0
		},

 		// Unsure on this, because the gacha eats so many things.  This may be completely wrong.
		Gacha: { //
			birthtype: "Gestation",
			type: "Omnivore",
			basefoodrate: 0.01,
			babyfoodrate: 25.5,
			extrababyfoodrate: 20,
			agespeed: 0.000003,
			agespeedmult: 0.8,
			gestationspeed: 0.000035,
			gestationspeedmult: 1.0,
			weight: 550.0,
			food: 3000.0
		},

		Gallimimus: { //
			birthtype: "Incubation",
			type: "Herbivore",
			basefoodrate: 0.001929,
			babyfoodrate: 25.5,
			extrababyfoodrate: 20.0,
			agespeed: 0.000003,
			agespeedmult: 3.5,
			eggspeed: 0.005556,
			eggspeedmult: 3.5,
			weight: 270,
			food: 1000
		},

		Gargantar: { //ASA Dragontopia (internal name GasBagRhino). Values from the game files, build 25636863. Eats what a Rock Elemental eats; Sulfur and Clay are worth 25 to it, Stone 50
			birthtype: "Incubation",
			type: "Gargantar",
			basefoodrate: 0.000185,
			babyfoodrate: 13.0,
			extrababyfoodrate: 3.0,
			agespeed: 0.000003,
			agespeedmult: 1.0,
			eggspeed: 0.005556,
			eggspeedmult: 1.0,
			weight: 950.0,
			food: 4500.0,
			foodmultipliers: {
				'Sulfur': 0.5
			}
		},

		Gasbag: { //
			birthtype: "Gestation",
			type: "Herbivore",
			basefoodrate: 0.002066,
			babyfoodrate: 25.5,
			extrababyfoodrate: 20,
			agespeed: 0.000003,
			agespeedmult: 2.0,
			gestationspeed: 0.000035,
			gestationspeedmult: 1.0,
			weight: 3000.0,
			food: 3500.0
		},

		Gigadesmodus: { //
			birthtype: "Incubation",
			type: "Carnivore",
			basefoodrate: 0.000185,
			babyfoodrate: 13.0,
			extrababyfoodrate: 3.0,
			agespeed: 0.000003,
			agespeedmult: 0.7,
			eggspeed: 0.005556,
			eggspeedmult: 1,
			weight: 600,
			food: 1500
		},
		
		Giganotosaurus: { //
			birthtype: "Incubation",
			type: "Carnivore",
			basefoodrate: 0.002314,
			babyfoodrate: 45.0,
			extrababyfoodrate: 20.0,
			agespeed: 0.000003,
			agespeedmult: 0.3795,
			eggspeed: 0.005556,
			eggspeedmult: 0.1,
			weight: 700,
			food: 4000
		},

		Gigantopithecus: { //
			birthtype: "Gestation",
			type: "Herbivore",
			basefoodrate: 0.004156,
			babyfoodrate: 25.5,
			extrababyfoodrate: 20.0,
			agespeed: 0.000003,
			agespeedmult: 1.2,
			gestationspeed: 0.000035,
			gestationspeedmult: 1.2,
			weight: 220.0,
			food: 1500.0
		},

		Gigantoraptor: { //
			birthtype: "Incubation",
			type: "Omnivore",
			basefoodrate: 0.002314,
			babyfoodrate: 25.5,
			extrababyfoodrate: 20,
			agespeed: 0.000003,
			agespeedmult: 2.0,
			eggspeed: 0.005556,
			eggspeedmult: 3.0,
			weight: 320,
			food: 3000
		},
		
		Gloon: { //
			birthtype: "Incubation",
			type: "Omnivore",
			basefoodrate: 0.000868,
			babyfoodrate: 25.5,
			extrababyfoodrate: 20.0,
			agespeed: 0.000003,
			agespeedmult: 1.9,
			eggspeed: 0.005556,
			eggspeedmult: 3.5,
			weight: 100,
			food: 600
		},
		
		Glowtail: { //
			birthtype: "Incubation",
			type: "Carnivore",
			basefoodrate: 0.000868,
			babyfoodrate: 25.5,
			extrababyfoodrate: 20.0,
			agespeed: 0.000003,
			agespeedmult: 1.9,
			eggspeed: 0.005556,
			eggspeedmult: 2.0,
			weight: 70.0,
			food: 450.0
		},
		
		Helicoprion: { //
			birthtype: "Incubation",
			type: "Carnivore",
			basefoodrate: 0.001852,
			babyfoodrate: 25.5,
			extrababyfoodrate: 20.0,
			agespeed: 0.000003,
			agespeedmult: 0.9,
			eggspeed: 0.005556,
			eggspeedmult: 1,
			weight: 500,
			food: 2000
		},
		
		Hesperornis: { //
			birthtype: "Incubation",
			type: "Carnivore",
			basefoodrate: 0.001389,
			babyfoodrate: 25.5,
			extrababyfoodrate: 20.0,
			agespeed: 0.000003,
			agespeedmult: 3.3,
			eggspeed: 0.005556,
			eggspeedmult: 3.3,
			weight: 70.0,
			food: 900.0
		},
		
		Hyaenodon: { //
			birthtype: "Gestation",
			type: "Carnivore",
			basefoodrate: 0.001543,
			babyfoodrate: 25.5,
			extrababyfoodrate: 20.0,
			agespeed: 0.000003,
			agespeedmult: 2.0,
			gestationspeed: 0.000035,
			gestationspeedmult: 2.0,
			weight: 170.0,
			food: 1200.0
		},
		
		Ichthyornis: { //
			birthtype: "Incubation",
			type: "Carnivore",
			basefoodrate: 0.001543,
			babyfoodrate: 25.5,
			extrababyfoodrate: 20.0,
			agespeed: 0.000003,
			agespeedmult: 2.5,
			eggspeed: 0.005556,
			eggspeedmult: 3.0,
			weight: 55.0,
			food: 1000.0
		},
		
		Ichthyosaurus: { //
			birthtype: "Gestation",
			type: "Carnivore",
			basefoodrate: 0.001929,
			babyfoodrate: 25.5,
			extrababyfoodrate: 20.0,
			agespeed: 0.000003,
			agespeedmult: 1.6,
			gestationspeed: 0.000035,
			gestationspeedmult: 1.0,
			weight: 250.0,
			food: 1000.0
		},

		Iguanodon: { //
			birthtype: "Incubation",
			type: "Herbivore",
			basefoodrate: 0.001929,
			babyfoodrate: 25.5,
			extrababyfoodrate: 20.0,
			agespeed: 0.000003,
			agespeedmult: 2.0,
			eggspeed: 0.005556,
			eggspeedmult: 3.5,
			weight: 375.0,
			food: 1800.0
		},
		
		Jerboa: { //
			birthtype: "Gestation",
			type: "Herbivore",
			basefoodrate: 0.000868,
			babyfoodrate: 25.5,
			extrababyfoodrate: 20.0,
			agespeed: 0.000003,
			agespeedmult: 4.4,
			gestationspeed: 0.000035,
			gestationspeedmult: 3.0,
			weight: 120.0,
			food: 450.0
		},

		Kairuku: { //
			birthtype: "Incubation",
			type: "Carnivore",
			basefoodrate: 0.001389,
			babyfoodrate: 25.5,
			extrababyfoodrate: 20.0,
			agespeed: 0.000003,
			agespeedmult: 3.3,
			eggspeed: 0.005556,
			eggspeedmult: 3.3,
			weight: 70,
			food: 900
		},
		
		Kaprosuchus: { //
			birthtype: "Incubation",
			type: "Carnivore",
			basefoodrate: 0.001543,
			babyfoodrate: 25.5,
			extrababyfoodrate: 20.0,
			agespeed: 0.000003,
			agespeedmult: 2.5,
			eggspeed: 0.005556,
			eggspeedmult: 2.5,
			weight: 140.0,
			food: 1200.0
		},

		Karkinos: { //
			birthtype: "Gestation",
			type: "Carrion", // Not 'Omnivore' like the dossier says.
			basefoodrate: 0.003156,
			babyfoodrate: 25.5,
			extrababyfoodrate: 20.0,
			agespeed: 0.000003,
			agespeedmult: 0.8,
			gestationspeed: 0.000028,
			gestationspeedmult: 1.0,
			weight: 800.0,
			food: 5000.0
		},

		Kentrosaurus: { //
			birthtype: "Incubation",
			type: "Herbivore",
			basefoodrate: 0.005341,
			babyfoodrate: 25.5,
			extrababyfoodrate: 20.0,
			agespeed: 0.000003,
			agespeedmult: 1.8,
			eggspeed: 0.005556,
			eggspeedmult: 1.8,
			weight: 500.0,
			food: 6000.0
		},
		
		Lumina: { //ASA Dragontopia - cold dragon, warm twin is Umbra
			birthtype: "Incubation",
			type: "Carnivore",
			basefoodrate: 0.000185,
			babyfoodrate: 13.0,
			extrababyfoodrate: 3.0,
			agespeed: 0.000003,
			agespeedmult: 1.0,
			eggspeed: 0.005556,
			eggspeedmult: 1.0,
			weight: 350.0,
			food: 1650.0
		},
		
		Lymantria: { //
			birthtype: "Incubation",
			type: "Herbivore",
			basefoodrate: 0.001852,
			babyfoodrate: 25.5,
			extrababyfoodrate: 20.0,
			agespeed: 0.000003,
			agespeedmult: 3.0,
			eggspeed: 0.005556,
			eggspeedmult: 3.3,
			weight: 175,
			food: 2000
		},
		
		Lystrosaurus: { //
			birthtype: "Incubation",
			type: "Herbivore",
			basefoodrate: 0.000868,
			babyfoodrate: 25.5,
			extrababyfoodrate: 20.0,
			agespeed: 0.000003,
			agespeedmult: 6.0,
			eggspeed: 0.005556,
			eggspeedmult: 6.0,
			weight: 90.0,
			food: 500.0
		},
		
		Maewing: { // Maeguana Uses Maewing values
			birthtype: "Incubation",
			type: "Carnivore",
			basefoodrate: 0.010000,
			babyfoodrate: 25.5,
			extrababyfoodrate: 20.0,
			agespeed: 0.000003,
			agespeedmult: 2.0,
			eggspeed: 0.005556,
			eggspeedmult: 3.5,
			weight: 400.0,
			food: 2000.0
		},

		Malwyn: { //
			birthtype: "Gestation",
			type: "Carnivore",
			basefoodrate: 0.001543,
			babyfoodrate: 25.5,
			extrababyfoodrate: 20.0,
			agespeed: 0.000003,
			agespeedmult: 1.9,
			gestationspeed: 0.000035,
			gestationspeedmult: 1.9,
			weight: 425,
			food: 1200
		},

		Magmasaur: { //Food Check - Ambergris 500 Food Value - need more Tests!?
			birthtype: "Incubation",
			type: "Magmasaur",
			basefoodrate: 0.000385,
			babyfoodrate: 25.5,
			extrababyfoodrate: 20.0,
			agespeed: 0.000003,
			agespeedmult: 0.5,
			eggspeed: 0.005556,
			eggspeedmult: 1.0,
			weight: 550,
			food: 2000
		},

		Mammoth: { //
			birthtype: "Gestation",
			type: "Herbivore",
			basefoodrate: 0.004133,
			babyfoodrate: 25.5,
			extrababyfoodrate: 20.0,
			agespeed: 0.000003,
			agespeedmult: 1.125,
			gestationspeed: 0.000035,
			gestationspeedmult: 1.0,
			weight: 500,
			food: 5000
		},

		Managarmr: { //
			birthtype: "Gestation",
			type: "Carnivore",
			basefoodrate: 0.001852,
			babyfoodrate: 25.5,
			extrababyfoodrate: 20,
			agespeed: 0.000003,
			agespeedmult: 1.0,
			gestationspeed: 0.000035,
			gestationspeedmult: 2.0,
			weight: 300.0,
			food: 2000.0
		},
		
		Manta: { //
			birthtype: "Gestation",
			type: "Carnivore",
			basefoodrate: 0.001929,
			babyfoodrate: 25.5,
			extrababyfoodrate: 20,
			agespeed: 0.000003,
			agespeedmult: 2.5,
			gestationspeed: 0.000035,
			gestationspeedmult: 1.0,
			weight: 200.0,
			food: 1000.0
		},
		
		Mantis: { //
			birthtype: "Incubation",
			type: "Carrion",
			basefoodrate: 0.002314,
			babyfoodrate: 25.5,
			extrababyfoodrate: 20.0,
			agespeed: 0.000003,
			agespeedmult: 1.7,
			eggspeed: 0.005556,
			eggspeedmult: 1.8,
			weight: 220,
			food: 900
		},
		
		Megachelon: { //
			birthtype: "Incubation",
			type: "Omnivore",
			basefoodrate: 0.010000,
			babyfoodrate: 25.5,
			extrababyfoodrate: 20.0,
			agespeed: 0.000003,
			agespeedmult: 1.0,
			eggspeed: 0.005556,
			eggspeedmult: 1.0,
			weight: 2500.0,
			food: 8800.0
		},

		Megalania: { //
			birthtype: "Incubation",
			type: "Carnivore",
			basefoodrate: 0.001736,
			babyfoodrate: 25.5,
			extrababyfoodrate: 20.0,
			agespeed: 0.000003,
			agespeedmult: 2.5,
			eggspeed: 0.005556,
			eggspeedmult: 2.5,
			weight: 400.0,
			food: 1500.0
		},

		Megaloceros: { //
			birthtype: "Gestation",
			type: "Herbivore",
			basefoodrate: 0.001543,
			babyfoodrate: 25.5,
			extrababyfoodrate: 20.0,
			agespeed: 0.000003,
			agespeedmult: 1.3,
			gestationspeed: 0.000035,
			gestationspeedmult: 1.3,
			weight: 220.0,
			food: 1200.0
		},

		Megalodon: { //
			birthtype: "Gestation",
			type: "Carnivore",
			basefoodrate: 0.001852,
			babyfoodrate: 25.5,
			extrababyfoodrate: 20.0,
			agespeed: 0.000003,
			agespeedmult: 1.3,
			gestationspeed: 0.000035,
			gestationspeedmult: 1.3,
			weight: 250.0,
			food: 2000.0
		},

		Megalosaurus: { //
			birthtype: "Incubation",
			type: "Carnivore",
			basefoodrate: 0.001852,
			babyfoodrate: 25.5,
			extrababyfoodrate: 20.0,
			agespeed: 0.000003,
			agespeedmult: 1.0,
			eggspeed: 0.005556,
			eggspeedmult: 3.0,
			weight: 300.0,
			food: 2000.0
		},

		Megaraptor: { //
			birthtype: "Incubation",
			type: "Carnivore",
			basefoodrate: 0.001852,
			babyfoodrate: 25.5,
			extrababyfoodrate: 20.0,
			agespeed: 0.000003,
			agespeedmult: 2,
			eggspeed: 0.005556,
			eggspeedmult: 3,
			weight: 325,
			food: 2250
		},
		
		Megatherium: { //
			birthtype: "Gestation",
			type: "Omnivore",
			basefoodrate: 0.003156,
			babyfoodrate: 25.5,
			extrababyfoodrate: 20.0,
			agespeed: 0.000003,
			agespeedmult: 1.0,
			gestationspeed: 0.000035,
			gestationspeedmult: 1.0,
			weight: 725.0,
			food: 3000.0
		},

		Mesopithecus: { //
			birthtype: "Gestation",
			type: "Herbivore",
			basefoodrate: 0.000868,
			babyfoodrate: 25.5,
			extrababyfoodrate: 20.0,
			agespeed: 0.000003,
			agespeedmult: 3.0,
			gestationspeed: 0.000035,
			gestationspeedmult: 3.0,
			weight: 70.0,
			food: 450.0
		},

		Microraptor: { //
			birthtype: "Incubation",
			type: "Microraptor",
			basefoodrate: 0.000868,
			babyfoodrate: 25.5,
			extrababyfoodrate: 20.0,
			agespeed: 0.000003,
			agespeedmult: 1.7,
			eggspeed: 0.005556,
			eggspeedmult: 3.5,
			weight: 45.0,
			food: 450.0
		},

		Morellatops: { //
			birthtype: "Incubation",
			type: "Herbivore",
			basefoodrate: 0.005341,
			babyfoodrate: 25.5,
			extrababyfoodrate: 20.0,
			agespeed: 0.000003,
			agespeedmult: 3.0,
			eggspeed: 0.005556,
			eggspeedmult: 2.0,
			weight: 440.0,
			food: 6000.0
		},

		Mosasaurus: { //
			birthtype: "Gestation",
			type: "Carnivore",
			basefoodrate: 0.005,
			babyfoodrate: 25.5,
			extrababyfoodrate: 20.0,
			agespeed: 0.000003,
			agespeedmult: 0.5,
			gestationspeed: 0.000035,
			gestationspeedmult: 1.0,
			weight: 1300.0,
			food: 8000.0
		},

		Moschops: { //
			birthtype: "Incubation",
			type: "Omnivore",
			basefoodrate: 0.001736,
			babyfoodrate: 25.5,
			extrababyfoodrate: 20.0,
			agespeed: 0.000003,
			agespeedmult: 1.9,
			eggspeed: 0.005556,
			eggspeedmult: 1.9,
			weight: 200.0,
			food: 300.0
		},
		
		Onyc: { //
			birthtype: "Gestation",
			type: "Carnivore",
			basefoodrate: 0.002893,
			babyfoodrate: 25.5,
			extrababyfoodrate: 20.0,
			agespeed: 0.000003,
			agespeedmult: 3.3,
			gestationspeed: 0.000035,
			gestationspeedmult: 2.0,
			weight: 50.0,
			food: 1500.0
		},

		Ossidon: { //
			birthtype: "Gestation",
			type: "Carnivore",
			basefoodrate: 0.002314,
			babyfoodrate: 25.5,
			extrababyfoodrate: 20.0,
			agespeed: 0.000003,
			agespeedmult: 1.0,
			gestationspeed: 0.000035,
			gestationspeedmult: 1.0,
			weight: 500,
			food: 3000
		},

		Otter: { //
			birthtype: "Gestation",
			type: "Piscivore",
			basefoodrate: 0.002314,
			babyfoodrate: 25.5,
			extrababyfoodrate: 20.0,
			agespeed: 0.000003,
			agespeedmult: 4.4,
			gestationspeed: 0.000035,
			gestationspeedmult: 1.0,
			weight: 30.0,
			food: 400.0
		},

		Oviraptor: { //
			birthtype: "Incubation",
			type: "Carnivore",
			basefoodrate: 0.001302,
			babyfoodrate: 25.5,
			extrababyfoodrate: 20.0,
			agespeed: 0.000003,
			agespeedmult: 4.4,
			eggspeed: 0.005556,
			eggspeedmult: 4.4,
			weight: 100.0,
			food: 900.0
		},

		Ovis: { //
			birthtype: "Gestation",
			type: "Herbivore",
			basefoodrate: 0.003156,
			babyfoodrate: 25.5,
			extrababyfoodrate: 20.0,
			agespeed: 0.000003,
			agespeedmult: 1.9,
			gestationspeed: 0.000035,
			gestationspeedmult: 1.9,
			weight: 90,
			food: 1200
		},

		Pachycephalosaurus: { //
			birthtype: "Incubation",
			type: "Herbivore",
			basefoodrate: 0.001543,
			babyfoodrate: 25.5,
			extrababyfoodrate: 20.0,
			agespeed: 0.000003,
			agespeedmult: 3.5,
			eggspeed: 0.005556,
			eggspeedmult: 3.5,
			weight: 150.0,
			food: 1200.0
		},

		Pachyrhinosaurus: { //
			birthtype: "Incubation",
			type: "Herbivore",
			basefoodrate: 0.003156,
			babyfoodrate: 25.5,
			extrababyfoodrate: 20.0,
			agespeed: 0.000003,
			agespeedmult: 2.0,
			eggspeed: 0.005556,
			eggspeedmult: 2.0,
			weight: 365.0,
			food: 3000.0
		},

		Palaeoctopus: { //
			birthtype: "Incubation",
			type: "Carnivore",
			basefoodrate: 0.003156,
			babyfoodrate: 25.5,
			extrababyfoodrate: 20.0,
			agespeed: 0.000003,
			agespeedmult: 2.5,
			eggspeed: 0.005556,
			eggspeedmult: 1,
			weight: 1000,
			food: 2500
		},
		
		Paraceratherium: { //
			birthtype: "Gestation",
			type: "Herbivore",
			basefoodrate: 0.0035,
			babyfoodrate: 25.5,
			extrababyfoodrate: 20.0,
			agespeed: 0.000003,
			agespeedmult: 1.0,
			gestationspeed: 0.000035,
			gestationspeedmult: 1.0,
			weight: 850.0,
			food: 6500.0
		},

		Parasaur: { //
			birthtype: "Incubation",
			type: "Herbivore",
			basefoodrate: 0.001929,
			babyfoodrate: 25.5,
			extrababyfoodrate: 20.0,
			agespeed: 0.000003,
			agespeedmult: 3.5,
			eggspeed: 0.005556,
			eggspeedmult: 3.5,
			weight: 480.0,
			food: 1500.0
		},

		Parrot: { //
			birthtype: "Incubation",
			type: "Omnivore",
			basefoodrate: 0.001302,
			babyfoodrate: 25.5,
			extrababyfoodrate: 20.0,
			agespeed: 0.000003,
			agespeedmult: 3.7,
			eggspeed: 0.005556,
			eggspeedmult: 1.7,
			weight: 65,
			food: 1000
		},
		
		Pegomastax: { //
			birthtype: "Incubation",
			type: "Herbivore",
			basefoodrate: 0.000868,
			babyfoodrate: 25.5,
			extrababyfoodrate: 20.0,
			agespeed: 0.000003,
			agespeedmult: 3.0,
			eggspeed: 0.005556,
			eggspeedmult: 4.4,
			weight: 55.0,
			food: 450.0
		},

		Pelagornis: { //
			birthtype: "Incubation",
			type: "Piscivore",
			basefoodrate: 0.001543,
			babyfoodrate: 25.5,
			extrababyfoodrate: 20,
			agespeed: 0.000003,
			agespeedmult: 2.5,
			eggspeed: 0.005556,
			eggspeedmult: 3.0,
			weight: 150,
			food: 1200
		},

		Phiomia: { //
			birthtype: "Gestation",
			type: "Herbivore",
			basefoodrate: 0.003156,
			babyfoodrate: 25.5,
			extrababyfoodrate: 20.0,
			agespeed: 0.000003,
			agespeedmult: 1.9,
			gestationspeed: 0.000035,
			gestationspeedmult: 0.8,
			weight: 200.0,
			food: 3000.0
		},

		Plesiosaurus: { //
			birthtype: "Gestation",
			type: "Carnivore",
			basefoodrate: 0.003858,
			babyfoodrate: 25.5,
			extrababyfoodrate: 20.0,
			agespeed: 0.000003,
			agespeedmult: 0.8,
			gestationspeed: 0.000035,
			gestationspeedmult: 1.0,
			weight: 800.0,
			food: 5000.0
		},

		Procoptodon: { //
			birthtype: "Gestation",
			type: "Herbivore",
			basefoodrate: 0.001929,
			babyfoodrate: 25.5,
			extrababyfoodrate: 20.0,
			agespeed: 0.000003,
			agespeedmult: 2.0,
			gestationspeed: 0.000035,
			gestationspeedmult: 2.0,
			weight: 550.0,
			food: 1500.0
		},

		Pteranodon: { //
			birthtype: "Incubation",
			type: "Carnivore",
			basefoodrate: 0.001543,
			babyfoodrate: 25.5,
			extrababyfoodrate: 20,
			agespeed: 0.000003,
			agespeedmult: 2.5,
			eggspeed: 0.005556,
			eggspeedmult: 3.0,
			weight: 120.0,
			food: 1200.0
		},
		
		Pulmonoscorpius: { //
			birthtype: "Incubation",
			type: "Carrion",
			basefoodrate: 0.001929,
			babyfoodrate: 25.5,
			extrababyfoodrate: 20.0,
			agespeed: 0.000003,
			agespeedmult: 2.5,
			eggspeed: 0.005556,
			eggspeedmult: 2.5,
			weight: 200.0,
			food: 1500.0
		},

		Purlovia: { //
			birthtype: "Gestation",
			type: "Carnivore",
			basefoodrate: 0.001543,
			babyfoodrate: 25.5,
			extrababyfoodrate: 20.0,
			agespeed: 0.000003,
			agespeedmult: 1.9,
			gestationspeed: 0.000035,
			gestationspeedmult: 1.9,
			weight: 400.0,
			food: 4000.0
		},

		Pyromane: { // NEW
			birthtype: "Gestation",
			type: "Carnivore",
			basefoodrate: 0.001157,
			babyfoodrate: 25.5,
			extrababyfoodrate: 20.0,
			agespeed: 0.000003,
			agespeedmult: 1.9,
			gestationspeed: 0.000061,
			gestationspeedmult: 1.9,
			weight: 300.0,
			food: 1000,
			foodmultipliers: {
				"Raw Meat": 0.5,
				"Cooked Meat": 2.0
			}
		},

		Quetzalcoatlus: { //
			birthtype: "Incubation",
			type: "Carnivore",
			basefoodrate: 0.0035,
			babyfoodrate: 25.5,
			extrababyfoodrate: 20.0,
			agespeed: 0.000003,
			agespeedmult: 0.7,
			eggspeed: 0.005556,
			eggspeedmult: 0.3,
			weight: 800,
			food: 1200
		},

		Raptor: { //
			birthtype: "Incubation",
			type: "Carnivore",
			basefoodrate: 0.001543,
			babyfoodrate: 25.5,
			extrababyfoodrate: 20.0,
			agespeed: 0.000003,
			agespeedmult: 2.5,
			eggspeed: 0.005556,
			eggspeedmult: 2.5,
			weight: 140.0,
			food: 1200.0
		},

		Ravager: { //
			birthtype: "Gestation",
			type: "Carnivore",
			basefoodrate: 0.001543,
			babyfoodrate: 25.5,
			extrababyfoodrate: 20.0,
			agespeed: 0.000003,
			agespeedmult: 1.9,
			gestationspeed: 0.000035,
			gestationspeedmult: 1.9,
			weight: 500.0,
			food: 1200.0
		},

		Reaper: { //
			birthtype: "Gestation",
			type: "Carnivore",
			basefoodrate: 0.002314,
			babyfoodrate: 25.5,
			extrababyfoodrate: 20.0,
			agespeed: 0.000003,
			agespeedmult: 1.2,
			// gestationspeed: 0.000035,
			gestationspeed: 0.000028935,
			gestationspeedmult: 0.8,
			weight: 415.0,
			food: 3000.0
		},
		
		Rex: { //
			birthtype: "Incubation",
			type: "Carnivore",
			basefoodrate: 0.002314,
			babyfoodrate: 25.5,
			extrababyfoodrate: 20,
			agespeed: 0.000003,
			agespeedmult: 1.0,
			eggspeed: 0.005556,
			eggspeedmult: 1.0,
			weight: 500,
			food: 3000
		},
		
		"Rock Drake": { //Food Check - Nameless Venom 400 Food Value - need more Tests!?
			birthtype: "Incubation",
			type: "RockDrake",
			basefoodrate: 0.000185,
			babyfoodrate: 25.5,
			extrababyfoodrate: 20.0,
			agespeed: 0.000003,
			agespeedmult: 1.0,
			eggspeed: 0.005556,
			eggspeedmult: 0.8,
			weight: 400.0,
			food: 2000.0
		},

		"Roll Rat": { //
			birthtype: "Gestation",
			type: "Herbivore",
			basefoodrate: 0.003156,
			babyfoodrate: 25.5,
			extrababyfoodrate: 20.0,
			agespeed: 0.000003,
			agespeedmult: 1.6,
			gestationspeed: 0.000035,
			gestationspeedmult: 1.6,
			weight: 400.0,
			food: 3000.0
		},

		Sabertooth: { //
			birthtype: "Gestation",
			type: "Carnivore",
			basefoodrate: 0.001543,
			babyfoodrate: 25.5,
			extrababyfoodrate: 20.0,
			agespeed: 0.000003,
			agespeedmult: 1.9,
			gestationspeed: 0.000035,
			gestationspeedmult: 1.9,
			weight: 200.0,
			food: 1200.0
		},

		Sarcosuchus: { //
			birthtype: "Incubation",
			type: "Carnivore",
			basefoodrate: 0.001578,
			babyfoodrate: 25.5,
			extrababyfoodrate: 20.0,
			agespeed: 0.000003,
			agespeedmult: 2.0,
			eggspeed: 0.005556,
			eggspeedmult: 2.0,
			weight: 300.0,
			food: 1500.0
		},

		Shadowmane: { // NEW
			birthtype: "Gestation",
			type: "Carnivore",
			basefoodrate: 0.001157,
			babyfoodrate: 25.5,
			extrababyfoodrate: 20.0,
			agespeed: 0.000003,
			agespeedmult: 1.9,
			gestationspeed: 0.000061,
			gestationspeedmult: 1.9,
			weight: 425.0,
			food: 1500.0
		},

		Shastasaurus: { //
			birthtype: "Gestation",
			type: "Carnivore",
			basefoodrate: 0.005,
			babyfoodrate: 25.5,
			extrababyfoodrate: 20.0,
			agespeed: 0.000003,
			agespeedmult: 0.5,
			gestationspeed: 0.000035,
			gestationspeedmult: 1.0,
			weight: 3000.0,
			food: 8000.0
		},	

		Shinehorn: { //
			birthtype: "Gestation",
			type: "Herbivore",
			basefoodrate: 0.000868,
			babyfoodrate: 25.5,
			extrababyfoodrate: 20.0,
			agespeed: 0.000003,
			agespeedmult: 1.9,
			gestationspeed: 0.000035,
			gestationspeedmult: 1.9,
			weight: 100.0,
			food: 450.0
		},

		Sinomacrops: { //
			birthtype: "Incubation",
			type: "Sinomacrops",
			basefoodrate: 0.001302,
			babyfoodrate: 25.5,
			extrababyfoodrate: 20.0,
			agespeed: 0.000003,
			agespeedmult: 2.5,
			eggspeed: 0.005556,
			eggspeedmult: 1.9,
			weight: 80.0,
			food: 900.0
		},

		"Snow Owl": { //
			birthtype: "Incubation",
			type: "Carnivore",
			basefoodrate: 0.01,
			babyfoodrate: 4.72,
			extrababyfoodrate: 20,
			agespeed: 0.000003,
			agespeedmult: 1.7,
			eggspeed: 0.005556,
			eggspeedmult: 1.7,
			weight: 375.0,
			food: 2000.0
		},

		Solwyn: { //
			birthtype: "Gestation",
			type: "Carnivore",
			basefoodrate: 0.001543,
			babyfoodrate: 25.5,
			extrababyfoodrate: 20.0,
			agespeed: 0.000003,
			agespeedmult: 1.9,
			gestationspeed: 0.000035,
			gestationspeedmult: 1.9,
			weight: 375,
			food: 1200
		},

		Spinosaurus: { //
			birthtype: "Incubation",
			type: "Carnivore",
			basefoodrate: 0.002066,
			babyfoodrate: 25.5,
			extrababyfoodrate: 20.0,
			agespeed: 0.000003,
			agespeedmult: 1.3,
			eggspeed: 0.005556,
			eggspeedmult: 1.3,
			weight: 350.0,
			food: 2600.0
		},

		Stegosaurus: { //
			birthtype: "Incubation",
			type: "Herbivore",
			basefoodrate: 0.005341,
			babyfoodrate: 25.5,
			extrababyfoodrate: 20.0,
			agespeed: 0.000003,
			agespeedmult: 1.8,
			eggspeed: 0.005556,
			eggspeedmult: 1.8,
			weight: 500.0,
			food: 6000.0
		},

		Tapejara: { //
			birthtype: "Incubation",
			type: "Carnivore",
			basefoodrate: 0.001543,
			babyfoodrate: 25.5,
			extrababyfoodrate: 20.0,
			agespeed: 0.000003,
			agespeedmult: 1.7,
			eggspeed: 0.005556,
			eggspeedmult: 3.0,
			weight: 280.0,
			food: 1600.0
		},

		"Terror Bird": { //
			birthtype: "Incubation",
			type: "Carnivore",
			basefoodrate: 0.001578,
			babyfoodrate: 25.5,
			extrababyfoodrate: 20.0,
			agespeed: 0.000003,
			agespeedmult: 2.0,
			eggspeed: 0.005556,
			eggspeedmult: 2.5,
			weight: 120.0,
			food: 1500.0
		},

		Therizinosaurus: { //
			birthtype: "Incubation",
			type: "Herbivore",
			basefoodrate: 0.002314,
			babyfoodrate: 25.5,
			extrababyfoodrate: 20.0,
			agespeed: 0.000003,
			agespeedmult: 0.8,
			eggspeed: 0.005556,
			eggspeedmult: 3.0,
			weight: 365.0,
			food: 3000.0
		},

		"Thorny Dragon": { //
			birthtype: "Incubation",
			type: "Carnivore",
			basefoodrate: 0.001543,
			babyfoodrate: 25.5,
			extrababyfoodrate: 20,
			agespeed: 0.000003,
			agespeedmult: 1.9,
			eggspeed: 0.005556,
			eggspeedmult: 2.0,
			weight: 300.0,
			food: 1200.0
		},

		Thylacoleo: { //
			birthtype: "Gestation",
			type: "Carnivore",
			basefoodrate: 0.001543,
			babyfoodrate: 25.5,
			extrababyfoodrate: 20.0,
			agespeed: 0.000003,
			agespeedmult: 1.9,
			gestationspeed: 0.000035,
			gestationspeedmult: 1.9,
			weight: 400.0,
			food: 1500,
		},

		Tidepup: { //Axolotl_Small
			birthtype: "Incubation",
			type: "Carnivore",
			basefoodrate: 0.0015,
			babyfoodrate: 25.5,
			extrababyfoodrate: 20.0,
			agespeed: 0.000003,
			agespeedmult: 2.5,
			eggspeed: 0.005556,
			eggspeedmult: 1,
			weight: 150,
			food: 3250
		},
		
		Triceratops: { //
			birthtype: "Incubation",
			type: "Herbivore",
			basefoodrate: 0.003156,
			babyfoodrate: 25.5,
			extrababyfoodrate: 20.0,
			agespeed: 0.000003,
			agespeedmult: 2.0,
			eggspeed: 0.005556,
			eggspeedmult: 2.0,
			weight: 365.0,
			food: 3000.0
		},

		Troodon: { //
			birthtype: "Incubation",
			type: "Carnivore",
			basefoodrate: 0.001543,
			babyfoodrate: 20.0,
			extrababyfoodrate: 20.0,
			agespeed: 0.000003,
			agespeedmult: 4.4,
			eggspeed: 0.005556,
			eggspeedmult: 4.4,
			weight: 140.0,
			food: 200.0
		},
		
		Tropeognathus: { //
			birthtype: "Incubation",
			type: "Carnivore",
			basefoodrate: 0.001543,
			babyfoodrate: 25.5,
			extrababyfoodrate: 20.0,
			agespeed: 0.000003,
			agespeedmult: 1.7,
			eggspeed: 0.005556,
			eggspeedmult: 3.0,
			weight: 340.0,
			food: 1600.0
		},

		Tusoteuthis: { //
			birthtype: "Incubation",
			type: "Carnivore",
			basefoodrate: 0.005,
			babyfoodrate: 25.5,
			extrababyfoodrate: 20.0,
			agespeed: 0.000003,
			agespeedmult: 0.5,
			eggspeed: 0.005556,
			eggspeedmult: 1.0,
			weight: 800.0,
			food: 3200.0
		},

		Umbra: { //ASA Dragontopia - warm dragon, cold twin is Lumina
			birthtype: "Incubation",
			type: "Carnivore",
			basefoodrate: 0.000185,
			babyfoodrate: 13.0,
			extrababyfoodrate: 3.0,
			agespeed: 0.000003,
			agespeedmult: 1.0,
			eggspeed: 0.005556,
			eggspeedmult: 1.0,
			weight: 350.0,
			food: 1650.0
		},
		
		Velonasaur: { //
			birthtype: "Incubation",
			type: "Carnivore",
			basefoodrate: 0.001543,
			babyfoodrate: 25.5,
			extrababyfoodrate: 20,
			agespeed: 0.000003,
			agespeedmult: 2.0,
			eggspeed: 0.005556,
			eggspeedmult: 4.4,
			weight: 325.0,
			food: 2250.0
		},

		Veilwyn: { //
			birthtype: "Gestation",
			type: "Carnivore",
			basefoodrate: 0.001543,
			babyfoodrate: 25.5,
			extrababyfoodrate: 20.0,
			agespeed: 0.000003,
			agespeedmult: 2.0,
			gestationspeed: 0.000035,
			gestationspeedmult: 1.0,
			weight: 200,
			food: 1200
		},

		Vulture: { //
			birthtype: "Incubation",
			type: "Vulture",
			basefoodrate: 0.001302,
			babyfoodrate: 25.5,
			extrababyfoodrate: 20.0,
			agespeed: 0.000003,
			agespeedmult: 3.7,
			eggspeed: 0.005556,
			eggspeedmult: 3.7,
			weight: 50,
			food: 900
		},
		
		Voidwyrm: { //NEW Food Check - Mutagen 1000 Food Value - need more Tests!?
			birthtype: "Incubation",
			type: "Carnivore",
			basefoodrate: 0.000185,
			babyfoodrate: 13.0,
			extrababyfoodrate: 3.0,
			agespeed: 0.000003,
			agespeedmult: 1.0,
			eggspeed: 0.005556,
			eggspeedmult: 1.0,
			weight: 400.0,
			food: 1800.0
		},

		"Woolly Rhino": { //
			birthtype: "Gestation",
			type: "Herbivore",
			basefoodrate: 0.003156,
			babyfoodrate: 25.5,
			extrababyfoodrate: 20.0,
			agespeed: 0.000003,
			agespeedmult: 2.0,
			gestationspeed: 0.000035,
			gestationspeedmult: 2.0,
			weight: 750.0,
			food: 3000.0
		},
		
		Wyvern: { //Food Check - Wyvern Milk 1200 Food Value - need more Tests!?
			birthtype: "Incubation",
			type: "Wyvern",
			basefoodrate: 0.000185,
			babyfoodrate: 22.5,
			extrababyfoodrate: 20.0,
			agespeed: 0.000003,
			agespeedmult: 1.0,
			eggspeed: 0.005556,
			eggspeedmult: 1.0,
			weight: 400.0,
			food: 1800.0
		},

		Xiphactinus: { //
			birthtype: "Incubation",
			type: "Carnivore",
			basefoodrate: 0.001578,
			babyfoodrate: 25.5,
			extrababyfoodrate: 20.0,
			agespeed: 0.000003,
			agespeedmult: 1.0,
			eggspeed: 0.005556,
			eggspeedmult: 1.0,
			weight: 300.0,
			food: 2000.0
		},

		"Yi Ling": { //
			birthtype: "Incubation",
			type: "Omnivore",
			basefoodrate: 0.001543,
			babyfoodrate: 25.5,
			extrababyfoodrate: 20.0,
			agespeed: 0.000003,
			agespeedmult: 2.0,
			eggspeed: 0.005556,
			eggspeedmult: 5.0,
			weight: 140.0,
			food: 1200.0
		},

		Yutyrannus: { //
			birthtype: "Incubation",
			type: "Carnivore",
			basefoodrate: 0.002314,
			babyfoodrate: 25.5,
			extrababyfoodrate: 20.0,
			agespeed: 0.000003,
			agespeedmult: 0.5,
			eggspeed: 0.005556,
			eggspeedmult: 1.0,
			weight: 500.0,
			food: 3000.0
		}

	}

	$scope.iterations=0;

	for (creature in $scope.creatures) {
		$scope.creatures[creature]['foodmultipliers']=new Proxy($scope.creatures[creature]['foodmultipliers']===undefined ? {} : $scope.creatures[creature]['foodmultipliers'], defaultmult);
		$scope.creatures[creature]['wastemultipliers']=new Proxy($scope.creatures[creature]['wastemultipliers']===undefined ? {} : $scope.creatures[creature]['wastemultipliers'], defaultmult);
	}

	$scope.clearcookies=false; //Some of these data structures don't really allow version numbering

	$scope.settings_version = "171114";

	//Rates are server settings, not per-column ones - one page means one set of them, which
	//is why they are saved to a single cookie. So every instance of this controller has to
	//hold the *same* settings object, not its own copy built from that cookie: with a copy
	//each, editing the Mature Multiplier in a creature column left every trough column (and
	//every other creature column) still computing off the rates as they were at page load.
	$scope.settings=$rootScope.breedingsettings;
	if ($scope.settings==undefined) {
		//First instance on the page: load the cookie, or start from the defaults.
		$scope.settings=$cookies.getObject('settings');
		if ($scope.settings==undefined || $scope.settings.version!=$scope.settings_version) {
			$scope.settings={
				version: $scope.settings_version,
				consumptionspeed: 1,
				maturationspeed: 1,
				hatchspeed: 1,
				baseminfoodrate: 0.000155,
				lossfactor: 0,
				troughtype: "Normal",
				foodrate_time_units: "Minute",
				gen2hatcheffect: false,
				gen2growtheffect: false
			}
			$scope.clearcookies=true;
			var now=new Date();
			$cookies.putObject('settings', $scope.settings, {expires: new Date(now.getFullYear(), now.getMonth()+6, now.getDate()), path: '/breeding'});
		}
		$rootScope.breedingsettings=$scope.settings;
	}

	if($scope.settings.stackSize){
		$scope.foods=$scope.Primfoods;
	}

	$scope.displayconfig=$cookies.getObject('displayconfig');
	if ($scope.displayconfig==undefined || $scope.displayconfig.version!="160227") {
		$scope.displayconfig={
			version: "160227",
			showoldselects: 0,
			showanimations: 1
		}
	}
	$animate.enabled($scope.displayconfig.showanimations);

	$scope.tablevisibility=$cookies.getObject('tablevisibility');
	if ($scope.tablevisibility==undefined) {
		$scope.tablevisibility={
			"Creature": true,
			"Maturation": true,
			"Baby": true,
			"Food": true,
			"Trough": true,
			"TroughCreatures": true
		}
	}

	//Old name: new name. Lets a creature or trough list saved before a rename still load
	var renamedcreatures={
		Parasaurolophus: "Parasaur"
	};

	$scope.creature=$cookies.getObject('creature');
	if ($scope.creature!=undefined && renamedcreatures.hasOwnProperty($scope.creature.name)) {
		$scope.creature.name=renamedcreatures[$scope.creature.name];
	}
	if ($scope.creature==undefined || !($scope.creature.name in $scope.creatures)) {
		$scope.creature={
			name: "Argentavis",
			maturationprogress: 0
		};
	}

	$scope.creaturelist=$cookies.getObject("creaturelist");
	if ($scope.creaturelist==undefined || $scope.clearcookies==true) {
		$scope.creaturelist=[];
	}
	for (i=0;i<$scope.creaturelist.length;i++) {
		if (renamedcreatures.hasOwnProperty($scope.creaturelist[i].name)) {
			$scope.creaturelist[i].name=renamedcreatures[$scope.creaturelist[i].name];
		}
	}

	$scope.troughstacks=$cookies.getObject("troughstacks");
	if ($scope.troughstacks==undefined || $scope.clearcookies==true) {
		foodlist=$scope.foodlist;
		$scope.troughstacks={};
		for (i=0;i<foodlist.length;i++) {
			$scope.troughstacks[foodlist[i]]=0;
		}
	}

	$scope.troughdata=$cookies.getObject("troughdata");
	if ($scope.troughdata==undefined || $scope.clearcookies==true) {
		$scope.troughdata={
			time: 0,
			totalfood: 0,
			totalpoints: 0,
			eatenfood: 0,
			eatenpoints: 0,
			spoiledfood: 0,
			spoiledpoints: 0,
			wastedpoints: 0
		}
	}

	//Troughs. Each is a named creaturelist + troughstacks pair, laid out as its own column
	//exactly like the creature panels above - so a main base and a water outpost can be open
	//side by side and computing at once, instead of one at a time behind a tab.
	//
	//Same structure as the creature columns: every instance of this controller is
	//self-contained, so a column is another instance of it, ng-repeat puts the trough object
	//on the parent scope, and an instance reads that to tell whether it is a column or the
	//shell that owns the list.
	//
	//Storage is split the same way. Troughs go in localStorage, not cookies: one setup with
	//40 creature rows already encodes to about 4KB, the whole per-cookie budget. Keys are
	//namespaced by the first path segment, because localStorage is per origin rather than
	//per path, unlike the cookies above.
	var storagescope=(window.location.pathname.split('/')[1] || 'breeding');
	var troughskey='troughs:'+storagescope;

	function readstore(store, key) {
		try {
			var raw=window[store].getItem(key);
			//Drop Angular's ng-repeat tracking keys from anything stored before they were
			//kept out (see writestore): a stored key can equal one handed out afresh in
			//this session, and ng-repeat then refuses to draw the whole list.
			return raw ? JSON.parse(raw, function(name, value) {
				return name=='$$hashKey' ? undefined : value;
			}) : undefined;
		} catch (e) {
			return undefined; //Private mode, disabled storage, or corrupt JSON - use defaults
		}
	}

	function writestore(store, key, value) {
		try {
			//toJson rather than JSON.stringify: it leaves out the $$hashKey that ng-repeat
			//puts on every row, which must not outlive the session it was handed out in.
			window[store].setItem(key, angular.toJson(value));
		} catch (e) {
			//Storage unavailable or full; the page still works, it just will not remember
		}
	}

	//Predicates for the two ng-repeats each row runs: the expanded columns go in the
	//scrolling strip, the collapsed ones in the tray beside it. Pure functions, so defining
	//them on every instance rather than only the shell costs nothing.
	$scope.collapsedonly=function(item) {
		return !!item.collapsed;
	}

	$scope.expandedonly=function(item) {
		return !item.collapsed;
	}

	function emptystacks() {
		var stacks={};
		for (i=0; i<$scope.foodlist.length; i++) {
			stacks[$scope.foodlist[i]]=0;
		}
		return stacks;
	}

	if ($scope.trough===undefined && $scope.panel===undefined) {
		//The shell instance owns the list. Creature columns inherit it through the scope
		//chain, which is how Add All Tracked reaches the tracked creatures from inside a
		//trough column.
		$scope.troughs=readstore('localStorage', troughskey);
		if (!angular.isArray($scope.troughs) || $scope.troughs.length==0) {
			//Carry over what the older single-trough and tabbed versions stored, rather than
			//dropping a setup on upgrade.
			var older=readstore('localStorage', 'troughtabs:'+storagescope)
				|| readstore('localStorage', 'troughprofiles:'+storagescope);
			$scope.troughs=(angular.isArray(older) && older.length) ? older : [{
				name: 'Trough 1',
				creaturelist: $scope.creaturelist,
				troughstacks: $scope.troughstacks
			}];
		}

		for (i=0;i<$scope.troughs.length;i++) {
			var storedrows=$scope.troughs[i].creaturelist || [];
			for (var r=0;r<storedrows.length;r++) {
				if (renamedcreatures.hasOwnProperty(storedrows[r].name)) {
					storedrows[r].name=renamedcreatures[storedrows[r].name];
				}
			}
		}

		$scope.addtrough=function() {
			$scope.troughs.push({
				name: 'Trough '+($scope.troughs.length+1),
				creaturelist: [],
				troughstacks: emptystacks(),
				maeguana: {points: 0, stacks: emptystacks()}
			});
		}

		$scope.renametrough=function(trough) {
			var name=window.prompt('Rename this trough:', trough.name);
			if (name) {
				trough.name=name;
			}
		}

		$scope.removetrough=function(trough) {
			if ($scope.troughs.length<2) {
				return; //Always keep one, so there is somewhere to put creatures
			}
			if (!window.confirm('Close the trough "'+trough.name+'"?')) {
				return;
			}
			$scope.troughs.splice($scope.troughs.indexOf(trough), 1);
		}

		//Columns mutate their own trough object in place, so one deep watch persists the
		//lot - contents, names, order and collapsed state - with no cross-instance calls.
		$scope.$watch('troughs', function() {
			writestore('localStorage', troughskey, $scope.troughs);
		}, true);
	} else if ($scope.trough) {
		//A trough column: work directly on the shared object, so edits are what gets saved.
		if (!angular.isArray($scope.trough.creaturelist)) {
			$scope.trough.creaturelist=[];
		}
		if (!$scope.trough.troughstacks) {
			$scope.trough.troughstacks=emptystacks();
		}
		if (!$scope.trough.maeguana) {
			$scope.trough.maeguana={points: 0, stacks: emptystacks()};
		}
		$scope.creaturelist=$scope.trough.creaturelist;
		$scope.troughstacks=$scope.trough.troughstacks;
		$scope.maeguana=$scope.trough.maeguana;
	}
	if (!$scope.maeguana) {
		$scope.maeguana={points: 0, stacks: emptystacks()};
	}

	//The Maeguana section folds away under its title, for anyone who has none. Kept on the
	//maeguana object so it is saved with its trough. Never chosen yet: closed, unless it
	//already holds something. Folding only hides the rows - its food still counts.
	$scope.maeguanaholdsfood=function() {
		for (var food in $scope.maeguana.stacks) {
			if ($scope.maeguana.stacks[food]>0) {
				return true;
			}
		}
		return false;
	}
	if ($scope.maeguana.collapsed===undefined) {
		$scope.maeguana.collapsed=!($scope.maeguana.points>0 || $scope.maeguanaholdsfood());
	}
	$scope.togglemaeguana=function() {
		$scope.maeguana.collapsed=!$scope.maeguana.collapsed;
	}

	$scope.savetrough=function() {
		//troughupdatefoodtypes replaces the troughstacks object wholesale, so re-point the
		//trough at whatever the scope currently holds.
		if ($scope.trough) {
			$scope.trough.creaturelist=$scope.creaturelist;
			$scope.trough.troughstacks=$scope.troughstacks;
			$scope.trough.maeguana=$scope.maeguana;
		}
	}

	//A baby is not born empty - its food capacity starts at a fraction of the adult stat and
	//grows linearly to it, so it has a reserve to live on before you can reach it.
	//
	//Measured in-game on a Rex (adult Food 3000) via SetBabyAge, reading max Food:
	//    0%  303.6    25%  978.6    50%  1653.6    99%  2976.6
	//which is exactly linear - 2700 food per unit of maturation at every step - with an
	//intercept of a tenth of the adult stat. (The readings sit a constant 3.6 above
	//3000*(0.1+0.9m); a constant offset rather than a proportional one, and 3003.6 is not a
	//value a Rex food stat can take, since it moves in steps of 10% of base. 0.12%, ignored.)
	var babyfoodfloor=0.1;

	function babyfoodcapacity(adultfood, maturation) {
		return adultfood*(babyfoodfloor+(1-babyfoodfloor)*maturation);
	}

	function validatenumber(number, min, max) {
		if (isNaN(number)) {
			return min;
		}
		return Math.min(max, Math.max(min, number));
	}

	$scope.showhidetable=function(table) {
		$scope.tablevisibility[table]=!$scope.tablevisibility[table];
		var now=new Date();
		$cookies.putObject('tablevisibility', $scope.tablevisibility, {expires: new Date(now.getFullYear(), now.getMonth()+6, now.getDate()), path: '/breeding'});
	}

	$scope.showhideanimations=function() {
		$animate.enabled($scope.displayconfig.showanimations);
		if ($scope.displayconfig.showanimations==0) {
			alert("Refresh the page");
		}
		$scope.changedisplayconfig();
	}

	$scope.changedisplayconfig=function() {
		var now=new Date();
		$cookies.putObject('displayconfig', $scope.displayconfig, {expires: new Date(now.getFullYear(), now.getMonth()+6, now.getDate()), path: '/breeding'});
	}

	$scope.searchcreature=function() {
		//alert("searchdino");
		var creature=$scope.creature;
		var creatures=$scope.creatures;

		if (creature.searchname in creatures) {
			creature.name=creature.searchname;
			$scope.switchcreature();
		}
	}
	
	$scope.changeStackSize=function() {
		//Stack sizes are a server setting like the multipliers, so they save and propagate
		//the same way - every column switches together, and the choice survives a refresh.
		$scope.selectsettings();
	}

	$scope.selectsettings=function() {
		settings=$scope.settings;
		if (isNaN(settings.consumptionspeed) || settings.consumptionspeed<=0) {
			return;
		}
		if (isNaN(settings.maturationspeed) || settings.maturationspeed<=0) {
			return;
		}
		if (isNaN(settings.hatchspeed) || settings.hatchspeed<=0) {
			return;
		}
		if (settings.gen2hatcheffect==undefined) {
			settings.gen2hatcheffect = false
		}
		if (settings.gen2growtheffect==undefined) {
			settings.gen2growtheffect = false
		}
		var now=new Date();
		$cookies.putObject('settings', settings, {expires: new Date(now.getFullYear(), now.getMonth()+6, now.getDate()), path: '/breeding'});
		$rootScope.$broadcast('settingschanged');
	}

	//The settings object is shared, but the numbers derived from it are not: each instance
	//holds its own creature or its own trough. So a change is saved once and announced once,
	//and every instance recalculates whatever it is showing - including the one that made
	//the change, which is a child of $rootScope like all the others.
	$scope.$on('settingschanged', function() {
		$scope.foods=$scope.settings.stackSize ? $scope.Primfoods : $scope.Defaultfoods;
		if ($scope.trough) {
			$scope.troughcalc();
		} else if ($scope.panel) {
			//statscalc and everything under it work on the shared creature/creaturedata
			//variables rather than taking arguments, so point those at this column's
			//creature first - every other entry point does the same, and without it this
			//would recompute whichever column was last touched.
			creature=$scope.creature;
			creaturedata=$scope.creatures[creature.name];
			$scope.statscalc();
		}
		//The shell instance renders neither panel, so it has nothing to recalculate.
	});

	/*$scope.selectcreature=function() {
		creature=$scope.creature;
		creaturedata=$scope.creatures[creature.name];
		creature.searchname=creature.name; //Ensure the searchname is kept up to date
		creature.maturationtime=1/creaturedata.agespeed/creaturedata.agespeedmult/$scope.settings.maturationspeed;
		creature.babytime=creature.maturationtime/10;
		if (creaturedata.birthtype=="Incubation") {
			creature.birthtime=100/creaturedata.eggspeed/creaturedata.eggspeedmult/$scope.settings.hatchspeed;
			creature.birthlabel="Incubation";
		}
		if (creaturedata.birthtype=="Gestation") {
			creature.birthtime=1/creaturedata.gestationspeed/creaturedata.gestationspeedmult/$scope.settings.hatchspeed;
			creature.birthlabel="Gestation";
		}
		creature.finalweight=creaturedata.weight;
		creature.currentweight=0;
		creature.finalfood=creaturedata.food;
		creature.currentfood=0;
		creature.maxfoodrate=creaturedata.basefoodrate*creaturedata.babyfoodrate*creaturedata.extrababyfoodrate*$scope.settings.consumptionspeed;
		creature.minfoodrate=$scope.settings.baseminfoodrate*creaturedata.babyfoodrate*creaturedata.extrababyfoodrate*$scope.settings.consumptionspeed;
		creature.foodratedecay=(creature.maxfoodrate-creature.minfoodrate)/creature.maturationtime;
		creature.desiredbabybuffer=1;
		//On the creature rather than the scope: the panels are pulled in with ng-include,
		//which makes a child scope, and a dotless ng-model there writes to the child and
		//shadows the controller's copy - so the dropdown moved but nothing recalculated.
		//A dotted path resolves to the same creature object from either scope.
		$scope.creature.foodunit=$scope.foodlists[creaturedata.type][0];
		$scope.selectweight();
		$scope.totalfoodcalc();
		$scope.babybuffercalc();
	}*/

	$scope.switchcreature=function() {
		creature=$scope.creature;
		if ($scope.panel) {
			$scope.panel.name=creature.name; //Shell persists the layout off this
		}
		creaturedata=$scope.creatures[creature.name];
		creature.searchname=creature.name; //Ensure the searchname is kept up to date
		creature.finalweight=creaturedata.weight;
		creature.currentweight=0;
		creature.finalfood=creaturedata.food;
		creature.currentfood=0;
		creature.desiredbabybuffer=30;
		creature.maturationprogress=0;
		//On the creature rather than the scope: the panels are pulled in with ng-include,
		//which makes a child scope, and a dotless ng-model there writes to the child and
		//shadows the controller's copy - so the dropdown moved but nothing recalculated.
		//A dotted path resolves to the same creature object from either scope.
		$scope.creature.foodunit=$scope.foodlists[creaturedata.type][0];

		if ($scope.panel) {
			//Picking a different creature resets these to that species' defaults, so the
			//stored overrides have to go with them - otherwise a refresh would restore the
			//previous creature's weight onto the new one.
			$scope.panel.finalweight=creature.finalweight;
			$scope.panel.finalfood=creature.finalfood;
		}

		$scope.statscalc();
	}

	$scope.statscalc=function() {
		creature.maturationtime=1/creaturedata.agespeed/creaturedata.agespeedmult/$scope.settings.maturationspeed;
		if ($scope.settings.gen2growtheffect === true) {
			creature.maturationtime=1/creaturedata.agespeed/creaturedata.agespeedmult/$scope.settings.maturationspeed/2;
		}
		creature.babytime=creature.maturationtime/10;

		if (creaturedata.birthtype=="Incubation") {
			creature.birthtime=100/creaturedata.eggspeed/creaturedata.eggspeedmult/$scope.settings.hatchspeed;
			if ($scope.settings.gen2hatcheffect === true) {
				creature.birthtime=100/creaturedata.eggspeed/creaturedata.eggspeedmult/$scope.settings.hatchspeed/1.5;
			}
			creature.birthlabel="Incubation";
		}

		if (creaturedata.birthtype=="Gestation") {
			creature.birthtime=1/creaturedata.gestationspeed/creaturedata.gestationspeedmult/$scope.settings.hatchspeed;
			if ($scope.settings.gen2hatcheffect === true) {
				creature.birthtime=1/creaturedata.gestationspeed/creaturedata.gestationspeedmult/$scope.settings.hatchspeed/1.5;
			}
			creature.birthlabel="Gestation";
		}

		creature.maxfoodrate=creaturedata.basefoodrate*creaturedata.babyfoodrate*creaturedata.extrababyfoodrate*$scope.settings.consumptionspeed;
		creature.minfoodrate=$scope.settings.baseminfoodrate*creaturedata.babyfoodrate*creaturedata.extrababyfoodrate*$scope.settings.consumptionspeed;
		creature.foodratedecay=(creature.maxfoodrate-creature.minfoodrate)/creature.maturationtime;
		creature.foodratedecay=(creature.maxfoodrate-creature.minfoodrate)/creature.maturationtime;

		$scope.totalfoodcalc();
		$scope.selectweight();
	}

	$scope.selectweight=function() {
		//creature=$scope.creature;
		//creaturedata=$scope.creatures[creature.name];
		//creature.maturationprogress=creature.currentweight/creature.finalweight;

		creature.finalweight=validatenumber(creature.finalweight, 1, 10000);
		creature.finalfood=validatenumber(creature.finalfood, 0, 10000000);

		if ($scope.panel) {
			//These are per-creature overrides - a bred Rex is not the base 500/3000 - so
			//they belong in the panel object with the name and maturation, or a refresh
			//throws away whatever was typed and silently reverts to the species defaults.
			$scope.panel.finalweight=creature.finalweight;
			$scope.panel.finalfood=creature.finalfood;
		}

		$scope.finalbuffercalc();
		$scope.selectmaturation();
		$scope.desiredbuffercalc();
	}

	$scope.selectmaturation=function() {
		creature=$scope.creature;
		creaturedata=$scope.creatures[creature.name];

		if (isNaN(creature.maturationprogress)) {
			creature.maturationprogress=0;
		}
		creature.maturationprogress=validatenumber(creature.maturationprogress, 0, 1);

		if ($scope.panel) {
			//Mirror into the shared panel object: the shell reads it for Add All, and its
			//deep watch persists it so a reload restores where each column had got to.
			$scope.panel.maturation=creature.maturationprogress;
		}

		creature.currentweight=creature.finalweight*creature.maturationprogress;
		creature.currentfood=babyfoodcapacity(creature.finalfood, creature.maturationprogress);

		$scope.maturationcalc();
	}

	$scope.maturationcalc=function() {
		creature.maturationtimecomplete=creature.maturationtime*creature.maturationprogress;
		creature.maturationtimeremaining=creature.maturationtime-creature.maturationtimecomplete;
		creature.babytimeremaining=Math.max(0, creature.babytime-(creature.maturationtime*creature.maturationprogress));

		$scope.totalfoodcalc();
		$scope.foodreservecalc();
		$scope.babybuffercalc();
	}

	$scope.totalfoodcalc=function() {
		creature=$scope.creature;
		creaturedata=$scope.creatures[creature.name];
		creature.totalfood=$scope.getfoodforperiod(0, creature.maturationtime, $scope.creature);
		creature.babyfood=$scope.getfoodforperiod(0, creature.babytime, $scope.creature);
		creature.tojuvfood=$scope.getfoodforperiod(creature.maturationtimecomplete, creature.babytime, $scope.creature);
		creature.toadultfood=$scope.getfoodforperiod(creature.maturationtimecomplete, creature.maturationtime, $scope.creature);
		creature.totalfooditems=creature.totalfood/($scope.foods[$scope.creature.foodunit].food*creaturedata.foodmultipliers[$scope.creature.foodunit]);
		creature.babyfooditems=creature.babyfood/($scope.foods[$scope.creature.foodunit].food*creaturedata.foodmultipliers[$scope.creature.foodunit]);
		creature.tojuvfooditems=creature.tojuvfood/($scope.foods[$scope.creature.foodunit].food*creaturedata.foodmultipliers[$scope.creature.foodunit]);
		creature.toadultfooditems=creature.toadultfood/($scope.foods[$scope.creature.foodunit].food*creaturedata.foodmultipliers[$scope.creature.foodunit]);

		// add food consumption rate per minute / hour / day
		foodrate_time_multiplier = $scope.foodrate_time_units[$scope.settings.foodrate_time_units];
		creature.nextminfood = Math.ceil( $scope.getfoodforperiod(creature.maturationtimecomplete, creature.maturationtimecomplete+60, $scope.creature) * foodrate_time_multiplier * 100 ) / 100;

		// add food needed for 1 minute / hour / day
		creature.nextfoodpertimeunit = Math.ceil( ( creature.nextminfood / ($scope.foods[$scope.creature.foodunit].food*creaturedata.foodmultipliers[$scope.creature.foodunit]) ) * 100 ) / 100;

		creature.foodforday={};
		creature.fooditemsforday={};
		day=1;
		food=$scope.getfoodforperiod((day-1)*24*60*60, day*24*60*60, $scope.creature);
		while (food>0 && day<20) {
			creature.foodforday[day]=food+food*$scope.settings.lossfactor/100;
			creature.fooditemsforday[day]=(food+food*($scope.settings.lossfactor/100))/($scope.foods[$scope.creature.foodunit].food*creaturedata.foodmultipliers[$scope.creature.foodunit]);
			day++;
			food=$scope.getfoodforperiod((day-1)*24*60*60, day*24*60*60, $scope.creature);
		}

		//$scope.babybuffercalc();
	}

	$scope.foodreservecalc=function() {
		creature=$scope.creature;
		creaturedata=$scope.creatures[creature.name];
		creature.currentfood=babyfoodcapacity(creature.finalfood, creature.maturationprogress);

		//How long the creature's own Food stat keeps it alive with nothing else to eat.
		//Drain is linear in elapsed time (rate = maxfoodrate - decay*t), so the food burnt
		//over the next T seconds is T*rate - 0.5*decay*T^2 - the same integral
		//getfoodforperiod uses. Solving that for T given the reserve is a quadratic.
		rate=creature.maxfoodrate-creature.foodratedecay*creature.maturationtimecomplete;
		decay=creature.foodratedecay;
		reserve=creature.currentfood;

		if (reserve<=0 || rate<=0) {
			creature.foodreservetime=0;
		} else if (decay<=0) {
			creature.foodreservetime=reserve/rate;
		} else {
			discriminant=rate*rate-2*decay*reserve;
			if (discriminant<0) {
				//Reserve outlasts the whole decaying phase - it never empties while a baby
				creature.foodreservetime=creature.maturationtimeremaining;
			} else {
				creature.foodreservetime=Math.min((rate-Math.sqrt(discriminant))/decay, creature.maturationtimeremaining);
			}
		}

		//Food still needed from outside the creature to reach each milestone
		creature.tojuvfoodnet=Math.max(0, creature.tojuvfood-reserve);
		creature.toadultfoodnet=Math.max(0, creature.toadultfood-reserve);
		creature.tojuvfooditemsnet=creature.tojuvfoodnet/($scope.foods[$scope.creature.foodunit].food*creaturedata.foodmultipliers[$scope.creature.foodunit]);
		creature.toadultfooditemsnet=creature.toadultfoodnet/($scope.foods[$scope.creature.foodunit].food*creaturedata.foodmultipliers[$scope.creature.foodunit]);
	}

	$scope.babybuffercalc=function() {
		creature=$scope.creature;
		creaturedata=$scope.creatures[creature.name];
		var foodname=$scope.creature.foodunit;
		food=$scope.foods[foodname];
		foodmult=creaturedata.foodmultipliers[foodname];

		creature.desiredbabybuffer=validatenumber(creature.desiredbabybuffer, 0, 10000000);

		//creature.currentbabybuffer=creature.currentweight/food.weight*food.food*foodmult/(creature.maxfoodrate-creature.foodratedecay*creature.maturationtimecomplete);
		//creature.maxbabybuffer=creature.finalweight/10/food.weight*food.food*foodmult/(creature.maxfoodrate-creature.foodratedecay*creature.babytime);
		//creature.timeuntildesiredbabybuffer=Math.max(0,(creature.desiredbabybuffer*60*creature.babytime*food.weight*creature.maxfoodrate)/(creature.desiredbabybuffer*60*creature.babytime*food.weight*creature.foodratedecay+creature.finalweight/10*food.food*foodmult)-creature.maturationtimecomplete);

		//Trough calc creature setup
		creaturelist=[{
			'name': creature.name,
			'maturation': creature.maturationprogress,
			'quantity': 1,
			'currentfood': creature.currentfood
		}];

		//Trough calc food setup
		stacklist={};
		for (i=0; i<$scope.foodorder.length; i++) {
			stacklist[$scope.foodorder[i]]=0;
		}

		//Current buffer calc
		$scope.iterations=0;
		stacklist[foodname]=creature.currentweight/food.weight/food.stack;
		creature.foodtofill=creature.currentweight/food.weight;
		data=$scope.troughsim(creaturelist, stacklist, $scope.troughtypes['Normal']);
		creature.currentbabybuffer=data['time'];
		//alert("Current buffer "+$scope.iterations);

		//Final Buffer Calc
		creature.lasthandfeed=Math.max(0, creature.maturationtime*(creature.lasthandfeedmaturation-creature.maturationprogress));

		//Desired Buffer Calc
		creature.timeuntildesiredbabybuffer=Math.max(0, creature.maturationtime*(creature.timeuntildesiredbabybuffermaturation-creature.maturationprogress));
		//alert("Desired buffer "+$scope.iterations);

		//Food to finish calc
		$scope.iterations=0;
		var estimate=((creature.maxfoodrate-creature.foodratedecay*creature.maturationprogress*creature.maturationtime)-(creature.maxfoodrate-creature.foodratedecay*0.1*creature.maturationtime))*(creature.maturationtime*(0.1-creature.maturationprogress))/2;
		estimate+=(creature.maxfoodrate-creature.foodratedecay*0.1*creature.maturationtime)*creature.maturationtime*(0.1-creature.maturationprogress);
		estimate=estimate/food.food;
		/* stacklist[foodname]=estimate/food.stack; */ //hang and crash
		creaturelist[0]['maturation']=creature.maturationprogress;
		creaturelist[0]['currentfood']=babyfoodcapacity(creature.finalfood, creature.maturationprogress);
		creature.foodtofinishbaby="N/A";
		var troughdata=$scope.troughsim(creaturelist, stacklist, $scope.troughtypes['Normal']);
		while(creature.maturationprogress>creature.lasthandfeedmaturation && troughdata['time']<creature.maturationtime*(0.1-creature.maturationprogress)) {
			estimate=estimate*Math.max(1.01, (creature.maturationtime*(0.1-creature.maturationprogress))/(troughdata['time']));
			stacklist[foodname]=estimate/food.stack;
			troughdata=$scope.troughsim(creaturelist, stacklist, $scope.troughtypes['Normal']);
		}
		if (creature.maturationprogress>creature.lasthandfeedmaturation && creature.maturationprogress<0.1) {
			creature.foodtofinishbaby=Math.ceil(estimate);
		}
		//alert("Food to finish "+$scope.iterations);

		var now=new Date();
		$cookies.putObject('creature', $scope.creature, {expires: new Date(now.getFullYear(), now.getMonth()+6, now.getDate()), path: '/breeding'});
	}

	$scope.finalbuffercalc=function() {
		//Trough calc creature setup
		creaturelist=[{
			'name': creature.name,
			'maturation': creature.maturationprogress,
			'quantity': 1,
			'currentfood': creature.currentfood
		}];

		//Trough calc food setup
		stacklist={};
		for (i=0; i<$scope.foodorder.length; i++) {
			stacklist[$scope.foodorder[i]]=0;
		}

		creature=$scope.creature;
		creaturedata=$scope.creatures[creature.name];
		var foodname=$scope.creature.foodunit;
		food=$scope.foods[foodname];
		foodmult=creaturedata.foodmultipliers[foodname];

		//Final Buffer Calc
		$scope.iterations=0;
		var estimate=(food.weight*creature.maxfoodrate*creature.maturationtime)/(10*creature.finalweight*food.food*foodmult+10*food.weight*creature.maxfoodrate*creature.maturationtime);
		stacklist[foodname]=0;
		//creature.maxbabybuffer=creature.maturationtime*0.1-creature.maturationtime*estimate;
		while ($scope.troughsim(creaturelist, stacklist, $scope.troughtypes['Normal'])['time']<creature.maturationtime*(0.1-estimate)) {
			estimate+=0.01;
			stacklist[foodname]=creature.finalweight*estimate/food.weight/food.stack;
			creaturelist[0]['maturation']=estimate;
			creaturelist[0]['currentfood']=babyfoodcapacity(creature.finalfood, estimate);
		}
		while (estimate>0 && $scope.troughsim(creaturelist, stacklist, $scope.troughtypes['Normal'])['time']>creature.maturationtime*(0.1-estimate)) {
			estimate-=0.001;
			stacklist[foodname]=creature.finalweight*estimate/food.weight/food.stack;
			creaturelist[0]['maturation']=estimate;
			creaturelist[0]['currentfood']=babyfoodcapacity(creature.finalfood, estimate);
		}
		estimate+=0.001;
		stacklist[foodname]=creature.finalweight*estimate/food.weight/food.stack;
		creaturelist[0]['maturation']=estimate;
		creaturelist[0]['currentfood']=babyfoodcapacity(creature.finalfood, estimate);
		creature.maxbabybuffer=$scope.troughsim(creaturelist, stacklist, $scope.troughtypes['Normal'])['time'];
		creature.lasthandfeed=Math.max(0, creature.maturationtime*(estimate-creature.maturationprogress));
		creature.lasthandfeedmaturation=estimate;
		//alert("Last Hand Feed "+$scope.iterations);
	}

	$scope.desiredbuffercalc=function() {
		//Trough calc creature setup
		creaturelist=[{
			'name': creature.name,
			'maturation': creature.maturationprogress,
			'quantity': 1,
			'currentfood': creature.currentfood
		}];

		//Trough calc food setup
		stacklist={};
		for (i=0; i<$scope.foodorder.length; i++) {
			stacklist[$scope.foodorder[i]]=0;
		}

		creature=$scope.creature;
		creaturedata=$scope.creatures[creature.name];
		var foodname=$scope.creature.foodunit;
		food=$scope.foods[foodname];
		foodmult=creaturedata.foodmultipliers[foodname];

		creature.desiredbabybuffer=validatenumber(creature.desiredbabybuffer, 0, 600); //Needs better estimation to deal with longer times
		//Desired Buffer Calc
		$scope.iterations=0;
		var estimate=(food.weight*creature.maxfoodrate*creature.desiredbabybuffer*60)/(creature.finalweight*food.food*foodmult+food.weight*creature.foodratedecay*creature.maturationtime*creature.desiredbabybuffer*60)
		stacklist[foodname]=0;
		creature.desiredbabybuffernever=false;
		while ($scope.troughsim(creaturelist, stacklist, $scope.troughtypes['Normal'])['time']<creature.desiredbabybuffer*60) {
			if (estimate>1 && stacklist[foodname]>=1) {
				//Past 100% the creature no longer eats, so the food lasts until it has all spoiled, and a full stack is already in:
				//more of it will not last any longer. The buffer cannot be reached, and this search would never end
				creature.desiredbabybuffernever=true;
				creature.timeuntildesiredbabybuffer=0;
				creature.timeuntildesiredbabybuffermaturation=1;
				return;
			}
			estimate+=0.01;
			stacklist[foodname]=creature.finalweight*estimate/food.weight/food.stack;
			creaturelist[0]['maturation']=estimate;
			creaturelist[0]['currentfood']=babyfoodcapacity(creature.finalfood, estimate);
		}
		while (estimate>0 && $scope.troughsim(creaturelist, stacklist, $scope.troughtypes['Normal'])['time']>creature.desiredbabybuffer*60) {
			estimate-=0.001;
			stacklist[foodname]=creature.finalweight*estimate/food.weight/food.stack;
			creaturelist[0]['maturation']=estimate;
			creaturelist[0]['currentfood']=babyfoodcapacity(creature.finalfood, estimate);
		}
		estimate+=0.001;
		stacklist[foodname]=creature.finalweight*estimate/food.weight/food.stack;
		creaturelist[0]['maturation']=estimate;
		creaturelist[0]['currentfood']=babyfoodcapacity(creature.finalfood, estimate);
		creature.timeuntildesiredbabybuffer=Math.max(0, creature.maturationtime*(estimate-creature.maturationprogress));
		creature.timeuntildesiredbabybuffermaturation=estimate;
		//alert("Desired buffer "+$scope.iterations);
	}

	$scope.getfoodforperiod=function(start, end, creature) {
		creaturedata=$scope.creatures[creature.name];
		end=Math.min(creature.maturationtime, end);
		end=Math.max(start, end);
		startfoodrate=creature.maxfoodrate-creature.foodratedecay*start;
		endfoodrate=creature.maxfoodrate-creature.foodratedecay*end;
		totaltime=end-start;
		return 0.5*totaltime*(startfoodrate-endfoodrate)+endfoodrate*totaltime;
	}

	$scope.troughaddcreature=function() {
		//The trough panels belong to the shell, which has no visible creature of its own once
		//the creature panels became columns - so seed from the leftmost column instead of the
		//shell's own invisible selection. Maturation is left at 0 and edited in the row; the
		//shell only tracks each column's creature, not its live maturation.
		var seed=($scope.panels && $scope.panels.length && $scope.panels[0].name) ? $scope.panels[0] : null;
		$scope.creaturelist.push({
			name: seed ? seed.name : $scope.creature.name,
			maturation: seed ? (seed.maturation || 0) : $scope.creature.maturationprogress,
			quantity: 1
		});
		$scope.troughupdatefoodtypes();
		$scope.troughcalc();
	}

	$scope.addallcreatures=function() {
		//One row per tracked column, at the maturation that column is showing. Adds rather
		//than replaces, so clicking twice gives you two of each - remove rows to taste.
		if (!$scope.panels) {
			return;
		}
		for (i=0; i<$scope.panels.length; i++) {
			if (!$scope.panels[i].name || !($scope.panels[i].name in $scope.creatures)) {
				continue;
			}
			$scope.creaturelist.push({
				name: $scope.panels[i].name,
				maturation: $scope.panels[i].maturation || 0,
				quantity: 1
			});
		}
		$scope.troughupdatefoodtypes();
		$scope.troughcalc();
	}

	$scope.troughremovecreature=function(index) {
		$scope.creaturelist.splice(index, 1);
		$scope.troughupdatefoodtypes();
		$scope.troughcalc();
	}

	$scope.troughupdatefoodtypes=function() {
		var activefoodtypes=new Set([]);
		for (var i=0;i<$scope.creaturelist.length;i++) {
			var creaturefoodlist=$scope.foodlists[$scope.creatures[$scope.creaturelist[i].name].type];
			for (var j in creaturefoodlist) {
				activefoodtypes.add(creaturefoodlist[j]);
			}
		}
		function keepactive(stacklist) {
			var newstacklist={};
			for (var i in $scope.foodlist) {
				if (activefoodtypes.has($scope.foodlist[i])) {
					if (stacklist && stacklist[$scope.foodlist[i]]!=undefined) {
						newstacklist[$scope.foodlist[i]]=stacklist[$scope.foodlist[i]];
					} else {
						newstacklist[$scope.foodlist[i]]=0;
					}
				}
			}
			return newstacklist;
		}
		$scope.troughstacks=keepactive($scope.troughstacks);
		$scope.maeguana.stacks=keepactive($scope.maeguana.stacks);
	}

	$scope.troughcalc=function() {
		$scope.troughdata=$scope.troughsim($scope.creaturelist, $scope.troughstacks, $scope.troughtypes[$scope.settings.troughtype], $scope.maeguana);
		$scope.requirementscalc();
	}

	//"Time went by": optional, and only on the button. Every field stays a plain manual
	//field; this just fills them in. Give one row's maturation as it reads now and the time
	//that passed follows from how far it grew. Every other row grew for the same time, and
	//the sim run over that time says what was eaten and what spoiled, so the food fields
	//become what should be left. An estimate: it assumes the babies started full, nobody
	//hand-fed or topped up in between, and it squashes what is left of each food back into
	//full stacks plus one partial with fresh spoil timers.
	$scope.elapsed={row: 0, maturation: null, done: null, error: '', undo: null};

	$scope.elapsedlabel=function(row) {
		return row.name+(row.quantity>1 ? ' x'+row.quantity : '')+' ('+(Math.round(row.maturation*1000)/10)+'%)';
	}

	$scope.timewentby=function() {
		var ref=$scope.creaturelist[$scope.elapsed.row];
		var to=$scope.elapsed.maturation;
		$scope.elapsed.error='';
		if (!ref) {
			$scope.elapsed.error='Pick a creature row first';
			return;
		}
		if (!(to>ref.maturation) || to>1) {
			$scope.elapsed.error='Fill in what it reads now: more than '+(Math.round(ref.maturation*1000)/10)+'%, at most 100%';
			return;
		}
		var seconds=Math.round((to-ref.maturation)*maturationtime(ref.name));
		var result=$scope.troughsim($scope.creaturelist, $scope.troughstacks, $scope.troughtypes[$scope.settings.troughtype], $scope.maeguana, {duration: seconds});
		$scope.elapsed.undo={
			creaturelist: angular.copy($scope.creaturelist),
			troughstacks: angular.copy($scope.troughstacks),
			maeguanastacks: angular.copy($scope.maeguana.stacks)
		};
		for (var i=0;i<$scope.creaturelist.length;i++) {
			var row=$scope.creaturelist[i];
			row.maturation=row===ref ? to : Math.min(1, Math.round((row.maturation+seconds/maturationtime(row.name))*10000)/10000);
		}
		for (var food in $scope.troughstacks) {
			$scope.troughstacks[food]=result.remaining.trough[food] || 0;
		}
		for (var food in $scope.maeguana.stacks) {
			$scope.maeguana.stacks[food]=result.remaining.maeguana[food] || 0;
		}
		$scope.elapsed.done={seconds: seconds, eaten: result.eatenfood, spoiled: result.spoiledfood, starving: result.starving};
		$scope.elapsed.maturation=null;
		$scope.troughcalc();
	}

	$scope.timewentbyundo=function() {
		var undo=$scope.elapsed.undo;
		if (!undo) {
			return;
		}
		$scope.creaturelist=undo.creaturelist;
		$scope.troughstacks=undo.troughstacks;
		$scope.maeguana.stacks=undo.maeguanastacks;
		$scope.elapsed.undo=null;
		$scope.elapsed.done=null;
		$scope.troughcalc();
	}

	//"Requires N stacks" next to every food field: with every other field as it is, the
	//fewest stacks of this food in this container for which no baby starves before adult.
	//Found by search over full sims, so it runs in the background one field per step and a
	//newer edit abandons an older run.
	$scope.requirements={trough: {}, maeguana: {}};
	var requirementsrun=0;

	$scope.requirementtext=function(source, food) {
		var r=$scope.requirements[source][food];
		if (!r) return '';
		if (r.pending) return '(...)';
		if (r.never) return '(spoils too fast)'; //Even 20000 stacks run out: every stack spoils away before they grow up
		//Zero would do. If it is being eaten anyway (lowest food value first) it is simply
		//"enough"; "not needed" is kept for food nobody touches.
		if (r.need==0) return r.used ? '(enough)' : '(not needed)';
		if (r.current>=r.need) return '(enough, needs '+r.need+')';
		return '(needs '+r.need+', +'+Math.ceil(r.need-r.current)+')';
	}

	//One sentence for the state the note is in, rather than one text explaining them all.
	$scope.requirementtip=function(source, food) {
		var r=$scope.requirements[source][food];
		if (!r) return '';
		if (r.pending) return 'Calculating.';
		if (r.never) return 'Spoils before the babies grow up, however much you add. Add another food or use a slower-spoiling trough.';
		if (r.need==0) return r.used ? 'The other foods already cover it, but this one gets eaten too.' : 'None of this gets eaten: it spoils first or another food lasts the whole way.';
		if (r.current>=r.need) return r.need+' stacks here is enough for every baby to reach adult.';
		return r.need+' stacks here and no baby starves before adult. '+Math.ceil(r.need-r.current)+' more to go.';
	}
	$scope.requirementcolor=function(source, food) {
		var r=$scope.requirements[source][food];
		if (!r || r.pending) return '';
		if (r.need==0) return r.used ? '#b9f6ca' : '';
		if (r.never || r.current<r.need) return '#ff8a80';
		return '#b9f6ca';
	}

	$scope.requirementscalc=function() {
		var run=++requirementsrun;
		var fields=[];
		var sources={trough: $scope.troughstacks, maeguana: $scope.maeguana.stacks};
		$scope.requirements={trough: {}, maeguana: {}};
		if (!$scope.creaturelist.length) {
			return;
		}
		for (var source in sources) {
			for (var food in sources[source]) {
				fields.push({source: source, food: food});
				$scope.requirements[source][food]={pending: true};
			}
		}
		var creaturelist=angular.copy($scope.creaturelist);
		var troughstacks=angular.copy($scope.troughstacks);
		var maeguana=angular.copy($scope.maeguana);
		var troughmultiplier=$scope.troughtypes[$scope.settings.troughtype];

		//Food that is there but never eaten as things stand - it spoils first, or something
		//eaten before it lasts the whole way. It is "not needed", and it is left out while
		//solving the other fields: otherwise the food that IS being eaten would read as
		//needing 0, covered by a food that is never reached.
		var used=($scope.troughdata && $scope.troughdata.used) || {trough: {}, maeguana: {}};
		var nostarving=$scope.troughdata && $scope.troughdata.starving.length==0;
		function unused(source, food) {
			return sources[source][food]>0 && !(used[source][food]>0);
		}
		var basetrough=angular.copy(troughstacks), basemaeguana=angular.copy(maeguana);
		for (var source in sources) {
			for (var food in sources[source]) {
				if (unused(source, food)) {
					(source=='trough' ? basetrough : basemaeguana.stacks)[food]=0;
				}
			}
		}

		function survives(source, food, amount) {
			var tr=angular.copy(basetrough), mg=angular.copy(basemaeguana);
			(source=='trough' ? tr : mg.stacks)[food]=amount;
			//Only the babies this field can feed: ones that eat this food, and for a trough
			//field only from 10% on - under that they cannot reach it, which is the Maeguana's
			//job (and shows in the starvation lines).
			return $scope.troughsim(creaturelist, tr, troughmultiplier, mg, {survival: true, counts: function(c, maturation) {
				return c.foods.indexOf(food)>-1 && (source=='maeguana' || maturation>=0.1);
			}}).starving.length==0;
		}

		//A food solved earlier for the same babies gives a starting guess for the next one:
		//the same amount of food points. Only a guess - spoil timers, stack sizes and the
		//snap-back waste on big items all differ per food, so it is checked, not trusted.
		var guesses={};
		function eaterkey(food) {
			var key=[];
			for (var i=0;i<creaturelist.length;i++) {
				if ($scope.foodlists[$scope.creatures[creaturelist[i].name].type].indexOf(food)>-1) key.push(i);
			}
			return key.join(',');
		}

		function solve(field) {
			var current=(field.source=='trough' ? troughstacks : maeguana.stacks)[field.food] || 0;
			if (nostarving && unused(field.source, field.food)) {
				return {need: 0, current: current, used: false};
			}
			var stackpoints=$scope.foods[field.food].stack*$scope.foods[field.food].food;
			var guesskey=field.source+'|'+eaterkey(field.food);
			var lo, hi;
			if (survives(field.source, field.food, current)) {
				if (current<=0) {
					return {need: 0, current: current};
				}
				lo=-1; hi=Math.ceil(current); //Enough already: how low could it go?
			} else {
				//One sim with a huge amount first: if even that cannot save them, this food
				//here is not the fix, and there is no point searching up to it.
				if (!(guesses[guesskey]>0) && !survives(field.source, field.food, 20000)) {
					return {never: true, current: current};
				}
				lo=Math.floor(current);
				var guess=guesses[guesskey] ? Math.ceil(guesses[guesskey]/stackpoints) : 0;
				if (guess>lo) {
					if (survives(field.source, field.food, guess)) {
						hi=guess;
						var below=Math.floor(guess*0.8);
						if (below>lo) {
							if (survives(field.source, field.food, below)) hi=below; else lo=below;
						}
					} else {
						lo=guess;
						hi=Math.ceil(guess*1.25);
					}
				} else {
					hi=Math.max(1, Math.ceil(current)*2);
				}
				while (!survives(field.source, field.food, hi)) {
					lo=hi;
					hi*=2;
					if (hi>20000) {
						return {never: true, current: current}; //Spoils too fast: no amount of this food here lasts
					}
				}
			}
			//Stop within 2%, on the high side: a few spare stacks rather than one short.
			while (hi-lo>Math.max(1, Math.floor(hi*0.02))) {
				var mid=Math.floor((lo+hi)/2);
				if (mid>=0 && survives(field.source, field.food, mid)) {
					hi=mid;
				} else {
					lo=mid;
				}
			}
			if (hi>0) {
				guesses[guesskey]=hi*stackpoints;
			}
			return {need: hi, current: current};
		}

		var index=0;
		function step() {
			if (run!=requirementsrun || index>=fields.length) {
				return;
			}
			var field=fields[index++];
			var result=solve(field);
			if (run!=requirementsrun) {
				return;
			}
			if (result.used===undefined) {
				result.used=used[field.source][field.food]>0;
			}
			$scope.requirements[field.source][field.food]=result;
			$interval(step, 0, 1); //Next field on a fresh tick, so the page stays responsive
		}
		$interval(step, 0, 1);
	}

	//A nursing Maeguana (or Maewing) next to the trough. Babies eat from its inventory like
	//from a trough, but every item is worth 1.01^(Food points) as much: wild + tamed +
	//mutation levels in its Food stat. Decoded from ArkAscendedServer.exe, 2026-09-30:
	//  - the boost is applied when the item is eaten, only while the eater is still a baby
	//    (that includes juvenile and adolescent - anything under 100%), and only with Nursing on
	//  - under 10% a baby ignores troughs entirely; the Maeguana is all it can reach
	//  - an auto-eating baby takes the item with the LOWEST food value / priority, boost
	//    included (raw meat has priority 3, everything else here 1). So for the same food the
	//    trough is eaten first; the Maeguana only wins when its boosted item is still smaller
	//  - it eats once it is missing at least one whole item, so bigger items just mean
	//    bigger, rarer bites - the food value it gets is the boosted one. If one item is
	//    worth more than the baby's whole cap, it eats under half full and the excess is
	//    lost when the baby-age update clamps food back to the cap (every 4-64 s)
	//The Maeguana's own eating from its inventory is not modelled (an adult on 0.01/s, well
	//under one raw meat an hour).
	var foodpriority={'Raw Meat': 3, 'Raw Fish Meat': 3};

	//Food in a tamed dino's inventory lasts 4x as long as in a survivor's - the same as a
	//normal trough. From the game files: DinoTamedInventoryComponent_BP_Base carries
	//ItemSpoilingTimeMultipliers = PrimalItemConsumableEatable x4, and neither the Maewing's
	//inventory component nor the Maeguana overrides it.
	var dinospoilmult=4;

	//Seconds from birth to adult at the current rates.
	function maturationtime(name) {
		var seconds=1/$scope.creatures[name].agespeed/$scope.creatures[name].agespeedmult/$scope.settings.maturationspeed;
		if ($scope.settings.gen2hatcheffect === true) {
			seconds/=1.5;
		}
		return seconds;
	}

	$scope.maeguanamultiplier=function(maeguana) {
		if (!maeguana || !(maeguana.points>0)) {
			return 1;
		}
		return Math.pow(1.01, maeguana.points);
	}

	//opts.survival: only answer "does anyone starve" - stop at the first starvation.
	//opts.counts(creature, maturation): whether a starvation there counts. One that does not
	//is treated as fed from elsewhere - it stays alive at empty and keeps eating later.
	//opts.duration: run for exactly this many seconds, whatever happens to the food, and
	//report what is left (output.remaining) - for "time went by". Nobody starves in this
	//mode; output.starving lists who ran out of food and when.
	$scope.troughsim=function(creaturelist, troughstacks, troughmultiplier, maeguana, opts) {
		opts=opts || {};
		//All locals. They used to be implicit globals, which made the per-second loop below
		//several times slower (and let it clobber callers' loop counters).
		var i, j, time, foodorder, troughcreatures, stacks, totalstacks, times, foodname, fullstacks,
			partialstack, lastofthistype, name, newcreature, reserves, spoiledpoints, spoiledfood,
			eatenpoints, eatenfood, wastedpoints, hunger, currentstack, currentmult, foodmult,
			wastemult, output;
		$scope.iterations++;
		foodorder=$scope.foodorder;
		troughcreatures=[];

		if (creaturelist.length==0) {
			return;
		}

		//Make stacks for calculation
		stacks=[]; //Actual stacks
		totalstacks={}; //Total stacks of each type
		totalstacks['all']=0; //Number of stacks total, all types
		times={};
		//Per food type: where its stacks live in the array, which of them is the first
		//non-empty one, and when it next spoils. Stacks are pushed in foodorder, so each
		//type owns one contiguous run - that is what lets the loops below skip whole
		//regions instead of walking every stack on every tick.
		var stacktypes=[];
		//Trough stacks first, then the Maeguana's, so for the same food the trough's run has
		//the lower index. A Maeguana counts as soon as it holds food, even at 0 Food points
		//(x1): the 10% rule and its own spoil rate still apply.
		var nursemult=$scope.maeguanamultiplier(maeguana);
		var hasmaeguana=false;
		if (maeguana && maeguana.stacks) {
			for (var food in maeguana.stacks) {
				if (maeguana.stacks[food]>0) hasmaeguana=true;
			}
		}
		addstacks(troughstacks, troughmultiplier, false, 1);
		if (hasmaeguana) {
			addstacks(maeguana.stacks, dinospoilmult, true, nursemult);
		}
		function addstacks(stackmap, spoilmult, nursing, mult) {
		for (var i=0; i<foodorder.length; i++) {
			var foodname=foodorder[i];
			if (!(stackmap[foodname]>0)) {
				continue;
			}
			totalstacks['all']+=Math.ceil(stackmap[foodname]);
			totalstacks[foodname]=(totalstacks[foodname] || 0)+Math.ceil(stackmap[foodname]);
			var fullstacks=Math.floor(stackmap[foodname]);
			var partialstack=(stackmap[foodname]-fullstacks);
			var typefirst=stacks.length;
			for (var j=0; j<stackmap[foodname]; j++) {
				stacks.push({
					"type": foodname, //Name of this food
					"stacksize": $scope.foods[foodname].stack, //Size of this stack
					"stackspoil": $scope.foods[foodname].spoil*spoilmult, //Actual spoil timer that decrements for this stack (variable)
					"foodspoil": $scope.foods[foodname].spoil*spoilmult, //Spoil time for this food in general (constant)
					"food": $scope.foods[foodname].food, //Food provided
					"waste": $scope.foods[foodname].waste}); //Waste (eg cooked meat wastes 25 because cooking turns 50 food into 25)
			}
			if (stacks.length>0 && partialstack>0) {
				//The partial stack is the last stack of THIS food type, which is the last
				//one pushed - not stacks[j-1], since j counts within the type while stacks
				//accumulates across all of them.
				var lastofthistype=stacks.length-1;
				stacks[lastofthistype]['stacksize']=Math.floor(stacks[lastofthistype]['stacksize']*partialstack);
				if (stacks[lastofthistype]['stacksize']==0) {
					totalstacks[foodname]--;
					totalstacks['all']--;
				}
			}
			if (stacks.length>typefirst) {
				//Every stack of a type starts with the same spoil timer at t=0 and ticks
				//down in lockstep, so the whole run spoils on the same ticks: at multiples
				//of the spoil time. Schedule those instead of decrementing 1000 counters.
				stacktypes.push({
					name: foodname,
					first: typefirst,
					last: stacks.length-1,
					cursor: typefirst, //First stack of this type that still has food in it
					nursing: nursing, //In the Maeguana rather than the trough
					mult: mult, //What the nursing boost multiplies each item by
					period: Math.ceil($scope.foods[foodname].spoil*spoilmult),
					next: Math.ceil($scope.foods[foodname].spoil*spoilmult)
				});
			}
		}
		}

		//Make creatures for calcualtion. Identical babies (one row's quantity) are one entry
		//with a count: they stay in lockstep, so simulating them once and eating count items
		//at a time is exact - and far cheaper. If the food runs out partway through a meal
		//the group splits into a fed part and an unfed part (see the eating code).
		for (i=0;i<creaturelist.length;i++) {
			if (creaturelist[i].quantity>0) {
				name=creaturelist[i].name;
				newcreature={};
				newcreature.count=Math.floor(creaturelist[i].quantity);
				newcreature.name=name;
				newcreature.maturation=creaturelist[i].maturation;
				newcreature.maturationtime=maturationtime(name);
				newcreature.maturationtimecomplete=newcreature.maturationtime*newcreature.maturation;
				newcreature.maxfoodrate=$scope.creatures[name].basefoodrate*$scope.creatures[name].babyfoodrate*$scope.creatures[name].extrababyfoodrate*$scope.settings.consumptionspeed;
				newcreature.minfoodrate=$scope.settings.baseminfoodrate*$scope.creatures[name].babyfoodrate*$scope.creatures[name].extrababyfoodrate*$scope.settings.consumptionspeed;
				newcreature.foodratedecay=(newcreature.maxfoodrate-newcreature.minfoodrate)/newcreature.maturationtime;
				newcreature.foodrate=newcreature.maxfoodrate-newcreature.foodratedecay*newcreature.maturation*newcreature.maturationtime;
				newcreature.hunger=-validatenumber(creaturelist[i].currentfood, 0, 10000000); //Its own Food stat is eaten before anything in the trough
				newcreature.adultfood=$scope.creatures[name].food;
				newcreature.row=i; //Which creature row it came from, for the starvation report
				newcreature.starvedat=-1;
				newcreature.dryat=-1;
				//Food cap and the 10% trough threshold as straight lines in sim time, so the
				//per-second loop does a multiply-add instead of calling out.
				newcreature.capbase=babyfoodcapacity(newcreature.adultfood, newcreature.maturation);
				newcreature.capslope=newcreature.adultfood*(1-babyfoodfloor)/newcreature.maturationtime;
				newcreature.troughfrom=(0.1-newcreature.maturation)*newcreature.maturationtime;
				newcreature.snapwait=0;
				newcreature.foods=$scope.foodlists[$scope.creatures[name].type];
				newcreature.foodmultipliers=$scope.creatures[name].foodmultipliers;
				newcreature.wastemultipliers=$scope.creatures[name].wastemultipliers;
				//Which of the stack runs this creature can actually eat from, resolved once
				//here instead of an indexOf against its food list per stack per tick.
				newcreature.eats=[];
				for (var k=0; k<stacktypes.length; k++) {
					if (newcreature.foods.indexOf(stacktypes[k].name)>-1) {
						newcreature.eats.push(stacktypes[k]);
					}
				}
				troughcreatures.push(newcreature);
				times[$scope.creatures[name].type]=0;
			}
		}

		reserves=0; //Creatures still living off their own Food stat
		for (i=0;i<troughcreatures.length;i++) {
			if (troughcreatures[i].hunger<0) {
				reserves++;
			}
		}

		spoiledpoints=0;
		spoiledfood=0;
		eatenpoints=0;
		eatenfood=0;
		wastedpoints=0;
		hunger=0;

		//Trough sim
		time=0;
		//Earliest tick on which any food type spoils. Until then the spoil pass has
		//nothing to do and is skipped entirely.
		var nextspoil=Infinity;
		for (i=0;i<stacktypes.length;i++) {
			if (stacktypes[i].next<nextspoil) nextspoil=stacktypes[i].next;
		}

		//The panel follows every baby to adult (up to 30 days); the buffer estimates keep the
		//original 3-day horizon.
		var horizon=maeguana===undefined ? 60*60*24*3 : 60*60*24*30;
		var anystarved=false;
		//Babies still alive and not yet adult. The panel stops when none are left - food left
		//spoiling after that is not a loss anyone pays. The buffer estimates measure how long the
		//food lasts, so they keep running until it is gone.
		var growing=1;
		while (opts.duration ? time<opts.duration : ((totalstacks['all']>0 || reserves>0) && time<horizon && !(opts.survival && anystarved) && (growing>0 || maeguana===undefined))) {
			time++;
			growing=0;

			for (i=0;i<troughcreatures.length;i++) {
				var simcreature=troughcreatures[i];
				//A group that just split off an unfed part: that part already did this tick's
				//bookkeeping as part of the group and only still has to try to eat.
				var resuming=simcreature.resume;
				simcreature.resume=false;
				if (!resuming) {
				if (simcreature.foodrate<simcreature.minfoodrate) {
					if (simcreature.hunger<0) {
						simcreature.hunger=0;
						reserves--;
					}
					continue; //Creature is adult
				}
				if (simcreature.starvedat<0) {
					growing++; //Counts whether it is on its reserve, eating or waiting out a snap-back
				}

				simcreature.foodrate-=simcreature.foodratedecay;

				if (simcreature.hunger<0) {
					simcreature.hunger+=simcreature.foodrate;
					if (simcreature.hunger>=0) {
						reserves--;
					}
					continue; //Still living off its own Food stat, nothing taken from the trough
				}
				if (simcreature.starvedat>=0) {
					continue; //Starved, eats nothing more
				}
				if (simcreature.snapwait>0) {
					simcreature.snapwait--;
					continue; //Overfilled past its cap, living off that until the snap-back
				}
				simcreature.hunger+=simcreature.foodrate;
				}

				//Hunger is how far below full it is; checked after this tick's meal (below).
				var cap=Math.min(simcreature.adultfood, simcreature.capbase+simcreature.capslope*time);

				if (simcreature.hunger<20 && simcreature.hunger<cap) {
					continue; //Creature cannot possibly eat below this
				}

				//Lowest-indexed stack this creature can eat from, per source. Stacks are
				//grouped by type in foodorder, so the first edible stack is the nearest of the
				//per-type cursors - a few comparisons rather than a scan from 0. Under 10%
				//maturation a baby cannot use a trough at all, only the Maeguana. Applied only
				//from the trough panel, which always passes its Maeguana: the buffer estimates call
				//this without one and keep the calculator's convention that under-10%
				//babies are hand-fed, and the buffer estimates rely on that.
				var troughok=maeguana===undefined || time>=simcreature.troughfrom;
				var troughstack=-1, nursestack=-1, nursetype=null;
				for (var k=0;k<simcreature.eats.length;k++) {
					var stacktype=simcreature.eats[k];
					if (!stacktype.nursing && !troughok) {
						continue;
					}
					while (stacktype.cursor<=stacktype.last && stacks[stacktype.cursor]['stacksize']<=0) {
						stacktype.cursor++; //Emptied stacks never refill, so this only moves forward
					}
					if (stacktype.cursor>stacktype.last) {
						continue;
					}
					if (stacktype.nursing) {
						if (nursestack<0 || stacktype.cursor<nursestack) {
							nursestack=stacktype.cursor;
							nursetype=stacktype;
						}
					} else if (troughstack<0 || stacktype.cursor<troughstack) {
						troughstack=stacktype.cursor;
					}
				}

				//Trough against Maeguana: the game takes the lower food value / priority, with
				//the nursing boost counted, and the trough on a tie.
				currentstack=troughstack;
				currentmult=1;
				if (nursestack>-1) {
					var nursescore=stacks[nursestack]['food']*simcreature.foodmultipliers[stacks[nursestack]['type']]*nursetype.mult/(foodpriority[stacks[nursestack]['type']] || 1);
					var troughscore=troughstack<0 ? Infinity : stacks[troughstack]['food']*simcreature.foodmultipliers[stacks[troughstack]['type']]/(foodpriority[stacks[troughstack]['type']] || 1);
					if (nursescore<troughscore) {
						currentstack=nursestack;
						currentmult=nursetype.mult;
					}
				}

				if (currentstack>-1) {
					foodmult=simcreature.foodmultipliers[stacks[currentstack]['type']]*currentmult;
					wastemult=simcreature.wastemultipliers[stacks[currentstack]['type']];
					//One item worth more than the baby can hold at all (a small baby on a boosted
					//Maeguana item): the game eats it once the baby is under half full. The food
					//is only clamped to the ADULT max on eating, then cut back to the baby's cap
					//by the next baby-age update (every 4-64 s) - that snap-back is lost food.
					var gain=stacks[currentstack]['food']*foodmult;
					var overflow=0;
					var fits=gain<=simcreature.hunger;
					if (!fits) {
						if (gain>cap && simcreature.hunger>0.5*cap) {
							fits=true;
							overflow=gain-simcreature.hunger;
						}
					}
					if (fits) {
						//One item per member, all from this food and source, moving on to the
						//next stack of it as each one empties.
						var runtype=null;
						for (var k=0;k<simcreature.eats.length;k++) {
							if (currentstack>=simcreature.eats[k].first && currentstack<=simcreature.eats[k].last) runtype=simcreature.eats[k];
						}
						var taken=0, waste=stacks[currentstack]['waste'];
						while (taken<simcreature.count && runtype.cursor<=runtype.last) {
							var st=stacks[runtype.cursor];
							var bite=Math.min(st['stacksize'], simcreature.count-taken);
							st['stacksize']-=bite;
							taken+=bite;
							if (st['stacksize']<=0) {
								totalstacks['all']--;
								totalstacks[st['type']]--;
								runtype.cursor++;
							}
						}
						if (taken<simcreature.count) {
							//Not enough of this food left for the whole group: the rest split off
							//unfed, and try again this same tick (another food may still be there).
							var unfed=Object.assign({}, simcreature);
							unfed.count=simcreature.count-taken;
							unfed.resume=true;
							simcreature.count=taken;
							troughcreatures.splice(i+1, 0, unfed);
						}
						times[$scope.creatures[simcreature.name].type]=time;
						runtype.eaten=(runtype.eaten || 0)+taken;
						eatenfood+=taken;
						//The part above the baby's cap is not counted as loss: it was eaten, and
						//Loss is about spoilage (and cooking), as in the original calculator.
						eatenpoints+=gain*taken;
						wastedpoints+=waste*wastemult*taken;
						simcreature.hunger-=gain-overflow;
						if (overflow>0) {
							//Until the baby-age update cuts it back (4 s + 0-60 s random) it sits
							//above its cap and is not hungry. Count only the 4 s minimum: the roll
							//can come up short every time, so plan for the worst case.
							simcreature.snapwait=4;
						}
					}
				}
				//Still empty after trying to eat: its Food is at 0. Nobody is assumed to hand-feed.
				if (simcreature.hunger>=cap) {
					if (opts.duration) {
						//Time that already went by: the baby is known to be alive, so it got by
						//some other way. Note when it first ran dry and let it keep eating.
						simcreature.hunger=cap;
						if (simcreature.dryat<0) simcreature.dryat=time;
					} else if (opts.counts && !opts.counts(simcreature, simcreature.maturation+time/simcreature.maturationtime)) {
						simcreature.hunger=cap;
					} else {
						simcreature.starvedat=time;
						anystarved=true;
					}
				}
			}

			//Spoil timers / spoiling. Only runs on ticks where something is actually due,
			//and then only walks the run of stacks belonging to that food type.
			if (time>=nextspoil) {
				nextspoil=Infinity;
				for (var k=0;k<stacktypes.length;k++) {
					var stacktype=stacktypes[k];
					if (stacktype.next<=time) {
						for (i=stacktype.cursor;i<=stacktype.last;i++) {
							if (stacks[i]['stacksize']>0) { //Spoil timer passed, spoil a food
								stacks[i]['stacksize']--;
								spoiledfood++;
								spoiledpoints+=stacks[i]['food'];
								wastedpoints+=stacks[i]['waste'];
								if (stacks[i]['stacksize']==0) {
									totalstacks['all']--;
									totalstacks[stacktype.name]--;
								}
							}
						}
						stacktype.next+=stacktype.period;
					}
					if (stacktype.next<nextspoil) nextspoil=stacktype.next;
				}
			}

		}

		//Who starves, per creature row. Babies still alive when the food runs out would starve
		//afterwards too: step them on (a minute at a time is plenty) until they either grow up
		//or hit empty, so the report covers them as well.
		var starving=[];
		for (i=0;i<troughcreatures.length;i++) {
			var c=troughcreatures[i];
			if (opts.duration) {
				c.starvedat=c.dryat; //Reported as "ran out of food", not as dead
			} else if (c.starvedat<0) {
				var t=time, hunger=Math.max(0, c.hunger), rate=c.foodrate;
				while (rate>=c.minfoodrate && t<60*60*24*30) {
					hunger+=rate*60;
					rate-=c.foodratedecay*60;
					t+=60;
					var capnow=babyfoodcapacity(c.adultfood, Math.min(1, c.maturation+t/c.maturationtime));
					if (hunger>=capnow) {
						if (opts.counts && !opts.counts(c, c.maturation+t/c.maturationtime)) {
							hunger=capnow;
							continue;
						}
						c.starvedat=t;
						break;
					}
				}
			}
			if (c.starvedat<0) {
				continue;
			}
			var row=null;
			for (var k=0;k<starving.length;k++) {
				if (starving[k].row==c.row) row=starving[k];
			}
			if (row) {
				row.count+=c.count;
				row.time=Math.min(row.time, c.starvedat);
			} else {
				starving.push({row: c.row, name: c.name, count: c.count, time: c.starvedat,
					maturation: Math.min(1, c.maturation+c.starvedat/c.maturationtime)});
			}
		}
		starving.sort(function(a, b) { return a.time-b.time; });

		//What is left in each container, in stacks (a fraction for the part-eaten ones).
		var remaining={trough: {}, maeguana: {}};
		var usedfood={trough: {}, maeguana: {}}; //Items eaten, per container and food
		for (i=0;i<stacktypes.length;i++) {
			var items=0;
			for (j=stacktypes[i].first;j<=stacktypes[i].last;j++) {
				items+=Math.max(0, stacks[j]['stacksize']);
			}
			usedfood[stacktypes[i].nursing ? 'maeguana' : 'trough'][stacktypes[i].name]=stacktypes[i].eaten || 0;
			remaining[stacktypes[i].nursing ? 'maeguana' : 'trough'][stacktypes[i].name]=Math.round(items/$scope.foods[stacktypes[i].name].stack*1000)/1000;
		}

		output={
			starving: starving,
			remaining: remaining,
			used: usedfood,
			time: time,
			times: times,
			totalfood: eatenfood+spoiledfood,
			totalpoints: eatenpoints+spoiledpoints+wastedpoints,
			eatenfood: eatenfood,
			eatenpoints: eatenpoints,
			spoiledfood: spoiledfood,
			spoiledpoints: spoiledpoints,
			wastedpoints: wastedpoints
		}

		if (!opts.survival) {
			$scope.savetrough();
		}

		return output;
	}


	//Side-by-side creature panels.
	//
	//Every instance of this controller is already self-contained - its own creature, its own
	//calculations - so a column is just another instance of it, and the maths needs no
	//changes at all. The rates are the one thing they share, since those describe the server
	//rather than the creature. ng-repeat puts the panel object on the parent scope, and
	//ng-controller's scope inherits it, which is how an instance tells whether it is a column
	//(and which one) or the shell that owns the list and the trough panels.
	var panelskey='breedingpanels:'+storagescope;

	if ($scope.panel===undefined && $scope.trough===undefined) {
		//The shell instance - the one that is neither a creature column nor a trough column.
		$scope.panels=readstore('localStorage', panelskey);
		if (!angular.isArray($scope.panels) || $scope.panels.length==0) {
			$scope.panels=[{name: undefined}];
		}
		for (i=0;i<$scope.panels.length;i++) {
			if (renamedcreatures.hasOwnProperty($scope.panels[i].name)) {
				$scope.panels[i].name=renamedcreatures[$scope.panels[i].name];
			}
		}

		$scope.addpanel=function() {
			//A new column starts as a copy of the rightmost one, so the creature and the
			//rates you are looking at carry over. They are independent from that point on -
			//change one and the others stay put.
			var seed=$scope.panels[$scope.panels.length-1];
			$scope.panels.push({name: seed ? seed.name : undefined});
		}

		$scope.removepanel=function(panel) {
			if ($scope.panels.length<2) {
				return; //Keep at least one column
			}
			$scope.panels.splice($scope.panels.indexOf(panel), 1);
		}

		//Columns write their creature name back into their panel object, so a plain deep
		//watch here is enough to persist the whole layout without any cross-instance calls.
		$scope.$watch('panels', function() {
			writestore('localStorage', panelskey, $scope.panels);
		}, true);
	} else if ($scope.panel && $scope.panel.name!==undefined && $scope.panel.name in $scope.creatures) {
		//A column that already knows which creature it was showing. Settings are deliberately
		//not stored per panel: every instance shares the one settings object, so a new column
		//opens on the current rates and follows them from then on.
		$scope.creature={name: $scope.panel.name, maturationprogress: 0};
	}

	//Read these before switchcreature: it resets maturation and both stats to the species
	//defaults, and the recalculation that follows mirrors those defaults straight back into
	//the panel object, erasing what we came to restore.
	var restoredmaturation=($scope.panel && $scope.panel.maturation>0) ? $scope.panel.maturation : 0;
	var restoredweight=($scope.panel && $scope.panel.finalweight>0) ? $scope.panel.finalweight : 0;
	var restoredfood=($scope.panel && $scope.panel.finalfood>0) ? $scope.panel.finalfood : 0;
	$scope.switchcreature();
	if (restoredweight>0) {
		$scope.creature.finalweight=restoredweight;
	}
	if (restoredfood>0) {
		$scope.creature.finalfood=restoredfood;
	}
	if (restoredmaturation>0) {
		$scope.creature.maturationprogress=restoredmaturation;
	}
	if (restoredweight>0 || restoredfood>0 || restoredmaturation>0) {
		$scope.selectweight(); //Recalculates everything off the restored values
	}
	$scope.troughupdatefoodtypes();
	if ($scope.trough) {
		$scope.troughcalc(); //Show results straight away, not only after the first edit
	}

}]);
