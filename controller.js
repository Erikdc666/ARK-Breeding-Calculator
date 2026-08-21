var breedingController=angular.module('breedingControllers', []).controller('breedingController', ['$scope', '$interval', '$cookies', '$animate', function($scope, $interval, $cookies, $animate) {

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
		RockDrake: ['Nameless Venom'],
		BloodStalker: ['Blood Pack', 'Raw Meat (Carrion)', 'Raw Fish Meat (Carrion)'],
		Archelon: ['Vegetables (Archelon)','Bio Toxin','Berry (Archelon)']
	}

	$scope.foodlist=['Raw Meat', 'Cooked Meat', 'Raw Fish Meat', 'Raw Fish Meat (Carrion)', 'Cooked Fish Meat', 'Mejoberry', 'Berry', 'Vegetables', 'Kibble', 'Rare Flower', 'Chitin', 'Spoiled Meat', 'Wyvern Milk', 'Mutagen', 'Primal Crystal', 'Ambergris', 'Nameless Venom', 'Raw Meat (Carrion)', 'Blood Pack', 'Sulfur','Vegetables (Archelon)','Bio Toxin','Berry (Archelon)'] //Display order

	$scope.foodorder=['Raw Fish Meat', 'Raw Fish Meat (Carrion)', 'Cooked Fish Meat', 'Raw Meat', 'Berry', 'Cooked Meat', 'Mejoberry', 'Vegetables', 'Kibble', 'Rare Flower', 'Chitin', 'Spoiled Meat', 'Wyvern Milk', 'Mutagen', 'Primal Crystal', 'Ambergris', 'Nameless Venom', 'Raw Meat (Carrion)', 'Blood Pack', 'Sulfur','Vegetables (Archelon)','Bio Toxin','Berry (Archelon)'] //In-game order

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
      weight: 350.0
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

		Cosmo: { //
			birthtype: "Incubation",
			type: "Sinomacrops",
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

		Parasaurolophus: { //
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

	$scope.creature=$cookies.getObject('creature');
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
			return raw ? JSON.parse(raw) : undefined;
		} catch (e) {
			return undefined; //Private mode, disabled storage, or corrupt JSON - use defaults
		}
	}

	function writestore(store, key, value) {
		try {
			window[store].setItem(key, JSON.stringify(value));
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

		$scope.addtrough=function() {
			$scope.troughs.push({
				name: 'Trough '+($scope.troughs.length+1),
				creaturelist: [],
				troughstacks: emptystacks()
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
		$scope.creaturelist=$scope.trough.creaturelist;
		$scope.troughstacks=$scope.trough.troughstacks;
	}

	$scope.savetrough=function() {
		//troughupdatefoodtypes replaces the troughstacks object wholesale, so re-point the
		//trough at whatever the scope currently holds.
		if ($scope.trough) {
			$scope.trough.creaturelist=$scope.creaturelist;
			$scope.trough.troughstacks=$scope.troughstacks;
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
		if($scope.settings.stackSize){
			$scope.foods=$scope.Primfoods;
		} else {
			$scope.foods=$scope.Defaultfoods;
		}
		$scope.troughcalc();
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
		$scope.statscalc();
		$scope.troughcalc();
	}

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
		while ($scope.troughsim(creaturelist, stacklist, $scope.troughtypes['Normal'])['time']<creature.desiredbabybuffer*60) {
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
		var newstacklist={};
		for (var i in $scope.foodlist) {
			if (activefoodtypes.has($scope.foodlist[i])) {
				if ($scope.troughstacks[$scope.foodlist[i]]!=undefined) {
					newstacklist[$scope.foodlist[i]]=$scope.troughstacks[$scope.foodlist[i]];
				} else {
					newstacklist[$scope.foodlist[i]]=0;
				}
			}
		}
		$scope.troughstacks=newstacklist;
	}

	$scope.troughcalc=function() {
		$scope.troughdata=$scope.troughsim($scope.creaturelist, $scope.troughstacks, $scope.troughtypes[$scope.settings.troughtype]);
	}

	$scope.troughsim=function(creaturelist, troughstacks, troughmultiplier) {
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
		for (i=0; i<foodorder.length; i++) {
			foodname=foodorder[i];
			if (troughstacks[foodname]===undefined) {
				continue;
			}
			totalstacks['all']+=Math.ceil(troughstacks[foodname]);
			totalstacks[foodname]=Math.ceil(troughstacks[foodname]);
			fullstacks=Math.floor(troughstacks[foodname]);
			partialstack=(troughstacks[foodname]-fullstacks);
			var typefirst=stacks.length;
			for (j=0; j<troughstacks[foodname]; j++) {
				stacks.push({
					"type": foodname, //Name of this food
					"stacksize": $scope.foods[foodname].stack, //Size of this stack
					"stackspoil": $scope.foods[foodname].spoil*troughmultiplier, //Actual spoil timer that decrements for this stack (variable)
					"foodspoil": $scope.foods[foodname].spoil*troughmultiplier, //Spoil time for this food in general (constant)
					"food": $scope.foods[foodname].food, //Food provided
					"waste": $scope.foods[foodname].waste}); //Waste (eg cooked meat wastes 25 because cooking turns 50 food into 25)
			}
			if (stacks.length>0 && partialstack>0) {
				//The partial stack is the last stack of THIS food type, which is the last
				//one pushed - not stacks[j-1], since j counts within the type while stacks
				//accumulates across all of them.
				lastofthistype=stacks.length-1;
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
					period: Math.ceil($scope.foods[foodname].spoil*troughmultiplier),
					next: Math.ceil($scope.foods[foodname].spoil*troughmultiplier)
				});
			}
		};

		//Make creatures for calcualtion
		for (i=0;i<creaturelist.length;i++) {
			for (j=0;j<creaturelist[i].quantity;j++) {
				name=creaturelist[i].name;
				newcreature={};
				newcreature.name=name;
				newcreature.maturation=creaturelist[i].maturation;
				newcreature.maturationtime=1/$scope.creatures[name].agespeed/$scope.creatures[name].agespeedmult/$scope.settings.maturationspeed;
				if ($scope.settings.gen2hatcheffect === true) {
					newcreature.maturationtime=1/$scope.creatures[name].agespeed/$scope.creatures[name].agespeedmult/$scope.settings.maturationspeed/1.5;
				}
				newcreature.maturationtimecomplete=newcreature.maturationtime*newcreature.maturation;
				newcreature.maxfoodrate=$scope.creatures[name].basefoodrate*$scope.creatures[name].babyfoodrate*$scope.creatures[name].extrababyfoodrate*$scope.settings.consumptionspeed;
				newcreature.minfoodrate=$scope.settings.baseminfoodrate*$scope.creatures[name].babyfoodrate*$scope.creatures[name].extrababyfoodrate*$scope.settings.consumptionspeed;
				newcreature.foodratedecay=(newcreature.maxfoodrate-newcreature.minfoodrate)/newcreature.maturationtime;
				newcreature.foodrate=newcreature.maxfoodrate-newcreature.foodratedecay*newcreature.maturation*newcreature.maturationtime;
				newcreature.hunger=-validatenumber(creaturelist[i].currentfood, 0, 10000000); //Its own Food stat is eaten before anything in the trough
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

		while ((totalstacks['all']>0 || reserves>0) && time<60*60*24*3) {
			time++;

			for (i=0;i<troughcreatures.length;i++) {
				var simcreature=troughcreatures[i];
				if (simcreature.foodrate<simcreature.minfoodrate) {
					if (simcreature.hunger<0) {
						simcreature.hunger=0;
						reserves--;
					}
					continue; //Creature is adult
				}

				simcreature.foodrate-=simcreature.foodratedecay;

				if (simcreature.hunger<0) {
					simcreature.hunger+=simcreature.foodrate;
					if (simcreature.hunger>=0) {
						reserves--;
					}
					continue; //Still living off its own Food stat, nothing taken from the trough
				}
				simcreature.hunger+=simcreature.foodrate;

				if (simcreature.hunger<20) {
					continue; //Creature cannot possibly eat below this
				}

				//Lowest-indexed stack this creature can eat from. Stacks are grouped by
				//type in foodorder, so the first edible stack overall is the nearest of
				//the per-type cursors - a few comparisons rather than a scan from 0.
				currentstack=-1;
				for (var k=0;k<simcreature.eats.length;k++) {
					var stacktype=simcreature.eats[k];
					while (stacktype.cursor<=stacktype.last && stacks[stacktype.cursor]['stacksize']<=0) {
						stacktype.cursor++; //Emptied stacks never refill, so this only moves forward
					}
					if (stacktype.cursor<=stacktype.last && (currentstack<0 || stacktype.cursor<currentstack)) {
						currentstack=stacktype.cursor;
					}
				}

				if (currentstack>-1) {
					foodmult=simcreature.foodmultipliers[stacks[currentstack]['type']];
					wastemult=simcreature.wastemultipliers[stacks[currentstack]['type']];
					if (stacks[currentstack]['food']*foodmult<simcreature.hunger) {
						times[$scope.creatures[simcreature.name].type]=time;
						stacks[currentstack]['stacksize']--;
						eatenfood++;
						eatenpoints+=stacks[currentstack]['food']*foodmult;
						wastedpoints+=stacks[currentstack]['waste']*wastemult;
						simcreature.hunger-=stacks[currentstack]['food']*foodmult;
						if (stacks[currentstack]['stacksize']==0) {
							totalstacks['all']--;
							totalstacks[stacks[currentstack]['type']]--;
						}
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

		output={
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

		var now=new Date();
		$scope.savetrough();

		return output;
	}


	//Side-by-side creature panels.
	//
	//Every instance of this controller is already self-contained - its own creature, its own
	//settings, its own calculations - so a column is just another instance of it, and the
	//maths needs no changes at all. ng-repeat puts the panel object on the parent scope, and
	//ng-controller's scope inherits it, which is how an instance tells whether it is a column
	//(and which one) or the shell that owns the list and the trough panels.
	var panelskey='breedingpanels:'+storagescope;

	if ($scope.panel===undefined && $scope.trough===undefined) {
		//The shell instance - the one that is neither a creature column nor a trough column.
		$scope.panels=readstore('localStorage', panelskey);
		if (!angular.isArray($scope.panels) || $scope.panels.length==0) {
			$scope.panels=[{name: undefined}];
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
		//not stored per panel: every instance loads the same settings cookie, so a new column
		//inherits the current rates, and diverges only if you then edit one of them.
		$scope.creature={name: $scope.panel.name, maturationprogress: 0};
	}

	//Read this before switchcreature: it resets maturation to 0, and the recalculation that
	//follows mirrors that 0 straight back into the panel object, erasing what we came to
	//restore.
	var restoredmaturation=($scope.panel && $scope.panel.maturation>0) ? $scope.panel.maturation : 0;
	$scope.switchcreature();
	if (restoredmaturation>0) {
		$scope.creature.maturationprogress=restoredmaturation;
		$scope.selectmaturation();
	}
	$scope.troughupdatefoodtypes();

}]);
