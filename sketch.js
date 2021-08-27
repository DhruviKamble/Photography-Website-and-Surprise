//very beginning of the game where you see a camera with a next button - buttons to lead through game
var beginner, beginnerImg;
var nextImg, next1, next2, next3, next4, next5, next6, next7;
var web_button, web_buttonImg;
var game_button, game_buttonImg;

//koko the koala
var koalaImg, koala;

//text of instructions, koko intro, a hint at what will be at the end, and an explanation before the "bad" rounds
var txt_introImg, txt_intro;
var txt_instructionsImg, txt_instructions;
var txt_end_hintImg, txt_end_hint;
var txt_explanation1, txt_explanation2;
var txt_explanation1Img, txt_explanation2Img;
var txt_end1, txt_end2, txt_end3;
var txt_end1Img, txt_end2Img, txt_end3Img;
var txt_surprise, txt_enjoy;
var txt_surpriseImg, txt_enjoyImg;

//gameState where you see a camera with a next button
var gameState = "camera";
// var gameState = "bad_round";

//round 1 pictures
var tree1Img, tree2Img, tree3Img, tree4Img;
var tree1, tree2, tree3, tree4;

//round 2 pictures
var fish1Img, fish2Img, fish3Img, fish4Img;
var fish1, fish2, fish3, fish4;

//round 3 pictures
var orange_flower, pink1_flower, pink2_flower, red_flower, white_flower, yellow_flower;
var orange_flowerImg, pink1_flowerImg, pink2_flowerImg, red_flowerImg, white_flowerImg, yellow_flowerImg;

//round of bad pictures
var flower_bag, pink_sky, pink_trees, purp_flowers, purp_ground, sticker;
var flower_bagImg, pink_skyImg, pink_treesImg, purp_flowersImg, purp_groundImg, stickerImg;

function preload() {
  beginnerImg = loadImage("camera.jpg");
  nextImg = loadImage("roll.jpg");

  web_buttonImg = loadImage("website_button.jpg");
  game_buttonImg = loadImage("game_button.jpg");

  koalaImg = loadImage("koala.png");

  txt_introImg = loadImage("text/intro.png");
  txt_instructionsImg = loadImage("text/how_it_works.png");
  txt_end_hintImg = loadImage("text/end_hint.png");

  tree1Img = loadImage("good/tree1.JPG");
  tree2Img = loadImage("good/tree2.JPG");
  tree3Img = loadImage("good/tree3.JPG");
  tree4Img = loadImage("good/tree4.JPG");

  fish1Img = loadImage("good/fish1.JPG");
  fish2Img = loadImage("good/fish2.JPG");
  fish3Img = loadImage("good/fish3.JPG");
  fish4Img = loadImage("good/fish4.JPG");

  orange_flowerImg = loadImage("good/orange_Flower.JPG");
  pink1_flowerImg = loadImage("good/pink_Flower.JPG");
  pink2_flowerImg = loadImage("good/pink_Flower2.JPG");
  red_flowerImg = loadImage("good/red_Flower.JPG");
  white_flowerImg = loadImage("good/white_Flower.JPG");
  yellow_flowerImg = loadImage("good/yellow_Flower.JPG");

  flower_bagImg = loadImage("bad/flower+bag.JPG");
  pink_skyImg = loadImage("bad/pink+sky.JPG");
  pink_treesImg = loadImage("bad/pink+trees.JPG");
  purp_flowersImg = loadImage("bad/purp_Flowers.JPG");
  purp_groundImg = loadImage("bad/purp+ground.JPG");
  stickerImg = loadImage("bad/sticker.JPG");

  txt_explanation1Img = loadImage("text/explanation1.png");
  txt_explanation2Img = loadImage("text/explanation2.png");

  txt_end1Img = loadImage("text/end1.png");
  txt_end2Img = loadImage("text/end2.png");
  txt_end3Img = loadImage("text/end3.png");

  txt_surpriseImg = loadImage("text/surprise.png");
  txt_enjoyImg = loadImage("text/enjoy.png");
}

function setup() {
  createCanvas(windowWidth, windowHeight);

  beginner = createSprite(windowWidth/2, windowHeight/2);
  beginner.addImage("camera image", beginnerImg);
  beginner.scale = 4;
  beginner.visible = false;

  next1 = createSprite(windowWidth/1.1, windowHeight/6);
  next1.addImage("roll that says next", nextImg);
  next1.scale = 0.4;
  next1.visible = false;

  next2 = createSprite(windowWidth/4, windowHeight/2);
  next2.addImage("roll that says next", nextImg);
  next2.scale = 0.4;
  next2.visible = false;

  next3 = createSprite(windowWidth/4, windowHeight/1.2);
  next3.addImage("roll that says next", nextImg);
  next3.scale = 0.4;
  next3.visible = false;

  next4 = createSprite(windowWidth/4, windowHeight/1.6);
  next4.addImage("roll that says next", nextImg);
  next4.scale = 0.4;
  next4.visible = false;

  next5 = createSprite(windowWidth/1.1, windowHeight/1.2);
  next5.addImage("roll that says next", nextImg);
  next5.scale = 0.4;
  next5.visible = false;

  next6 = createSprite(windowWidth/1.1, windowHeight/1.6);
  next6.addImage("roll that says next", nextImg);
  next6.scale = 0.4;
  next6.visible = false;

  next7 = createSprite(windowWidth/1.1, windowHeight/2.4);
  next7.addImage("roll that says next", nextImg);
  next7.scale = 0.4;
  next7.visible = false;

  web_button = createSprite(windowWidth/1.6, windowHeight/2.7);
  web_button.addImage("leveled button to lead to website", web_buttonImg);
  web_button.scale = 0.5;
  web_button.visible = false;

  game_button = createSprite(windowWidth/1.7, windowHeight/1.5);
  game_button.addImage("leveled button to lead to website", game_buttonImg);
  game_button.scale = 0.5;
  game_button.visible = false;

  koala = createSprite(windowWidth/7, windowHeight/2);
  koala.addImage("koala on bamboo", koalaImg);
  koala.scale = 0.19;
  koala.visible = false;

  txt_intro = createSprite(windowWidth/2.5, windowHeight/5);
  txt_intro.addImage("koko's intro", txt_introImg);
  txt_intro.scale = 0.4;
  txt_intro.visible = false;

  txt_instructions = createSprite(windowWidth/1.3, windowHeight/2);
  txt_instructions.addImage("game instructions", txt_instructionsImg);
  txt_instructions.scale = 0.4;
  txt_instructions.visible = false;

  txt_end_hint = createSprite(windowWidth/2, windowHeight/1.3);
  txt_end_hint.addImage("hint about surprise", txt_end_hintImg);
  txt_end_hint.scale = 0.4;
  txt_end_hint.visible = false;

  txt_explanation1 = createSprite(windowWidth/2.3, windowHeight/4);
  txt_explanation1.addImage("1st part about the bad round", txt_explanation1Img);
  txt_explanation1.scale = 0.4;
  txt_explanation1.visible = false;

  txt_explanation2 = createSprite(windowWidth/1.3, windowHeight/2.5);
  txt_explanation2.addImage("2nd part about the bad round", txt_explanation2Img);
  txt_explanation2.scale = 0.4;
  txt_explanation2.visible = false;

  txt_end1 = createSprite(windowWidth/2.5, windowHeight/5);
  txt_end1.addImage("1st part of end message", txt_end1Img);
  txt_end1.scale = 0.35;
  txt_end1.visible = false;

  txt_end2 = createSprite(windowWidth/1.2, windowHeight/2.5);
  txt_end2.addImage("2nd part of end message", txt_end2Img);
  txt_end2.scale = 0.4;
  txt_end2.visible = false;

  txt_end3 = createSprite(windowWidth/1.7, windowHeight/1.4);
  txt_end3.addImage("3rd part of end message", txt_end3Img);
  txt_end3.scale = 0.4;
  txt_end3.visible = false;

  txt_surprise = createSprite(windowWidth/1.7, windowHeight/4);
  txt_surprise.addImage("koala talking about surprise", txt_surpriseImg);
  txt_surprise.scale = 0.4;
  txt_surprise.visible = false;
  
  txt_enjoy = createSprite(windowWidth/1.7, windowHeight/2);
  txt_enjoy.addImage("koala saying enjoy", txt_enjoyImg);
  txt_enjoy.scale = 0.8;
  txt_enjoy.visible = false;

  tree1 = createSprite(windowWidth/1.85, windowHeight/3);
  tree1.addImage("2 trees", tree1Img);
  tree1.scale = 0.12;
  tree1.visible = false;
  
  tree2 = createSprite(windowWidth/1.3, windowHeight/3);
  tree2.addImage("tree with clouds", tree2Img);
  tree2.scale = 0.12;
  tree2.visible = false;

  tree3 = createSprite(windowWidth/1.85, windowHeight/1.5);
  tree3.addImage("sunset with tree", tree3Img);
  tree3.scale = 0.12;
  tree3.visible = false;

  tree4 = createSprite(windowWidth/1.3, windowHeight/1.5);
  tree4.addImage("tree and sunset downward", tree4Img);
  tree4.scale = 0.12;
  tree4.visible = false;

  fish1 = createSprite(windowWidth/1.85, windowHeight/3);
  fish1.addImage("fish in marbles between plants", fish1Img);
  fish1.scale = 0.12;
  fish1.visible = false;

  fish2 = createSprite(windowWidth/1.3, windowHeight/3);
  fish2.addImage("fish behind green plant + reflection of plants", fish2Img);
  fish2.scale = 0.12;
  fish2.visible = false;

  fish3 = createSprite(windowWidth/1.85, windowHeight/1.5);
  fish3.addImage("fish in marbles between plants", fish3Img);
  fish3.scale = 0.12;
  fish3.visible = false;
  
  fish4 = createSprite(windowWidth/1.3, windowHeight/1.5);
  fish4.addImage("fish infront of green plant", fish4Img);
  fish4.scale = 0.12;
  fish4.visible = false;

  orange_flower = createSprite(windowWidth/1.85, windowHeight/4.7);
  orange_flower.addImage("orange flowers", orange_flowerImg);
  orange_flower.scale = 0.1;
  orange_flower.visible = false;

  pink1_flower = createSprite(windowWidth/1.4, windowHeight/4.7);
  pink1_flower.addImage("1st pink flower image", pink1_flowerImg);
  pink1_flower.scale = 0.1;
  pink1_flower.visible = false;

  pink2_flower = createSprite(windowWidth/1.85, windowHeight/2.15);
  pink2_flower.addImage("2nd pink flower image", pink2_flowerImg);
  pink2_flower.scale = 0.1;
  pink2_flower.visible = false;

  red_flower = createSprite(windowWidth/1.4, windowHeight/2.15);
  red_flower.addImage("red flowers", red_flowerImg);
  red_flower.scale = 0.1;
  red_flower.visible = false;

  white_flower = createSprite(windowWidth/1.85, windowHeight/1.4);
  white_flower.addImage("white flowers", white_flowerImg);
  white_flower.scale = 0.1;
  white_flower.visible = false;

  yellow_flower = createSprite(windowWidth/1.4, windowHeight/1.4);
  yellow_flower.addImage("yellow flowers", yellow_flowerImg);
  yellow_flower.scale = 0.1;
  yellow_flower.visible = false;

  flower_bag = createSprite(windowWidth/1.85, windowHeight/4.7);
  flower_bag.addImage("flowers next to bag", flower_bagImg);
  flower_bag.scale = 0.1;
  flower_bag.visible = false;

  pink_sky = createSprite(windowWidth/1.4, windowHeight/4.7);
  pink_sky.addImage("pink flowers + sky", pink_skyImg);
  pink_sky.scale = 0.1;
  pink_sky.visible = false;
  
  pink_trees = createSprite(windowWidth/1.85, windowHeight/2.15);
  pink_trees.addImage("pink flowers + trees", pink_treesImg);
  pink_trees.scale = 0.1;
  pink_trees.visible = false;
  
  purp_flowers = createSprite(windowWidth/1.4, windowHeight/2.15);
  purp_flowers.addImage("purple flowers at night", purp_flowersImg);
  purp_flowers.scale = 0.1;
  purp_flowers.visible = false;
  
  purp_ground = createSprite(windowWidth/1.85, windowHeight/1.4);
  purp_ground.addImage("purple flowers + ground", purp_groundImg);
  purp_ground.scale = 0.1;
  purp_ground.visible = false;
  
  sticker = createSprite(windowWidth/1.4, windowHeight/1.4);
  sticker.addImage("peacock sticker on ground", stickerImg);
  sticker.scale = 0.1;
  sticker.visible = false;
}

function draw() {
  background(0);
  drawSprites();

  if(gameState === "camera") {
    beginner.visible = true;
    next1.visible = true;

    if(mousePressedOver(next1)) {
      beginner.destroy();
      next1.destroy();
      
      gameState = "koala";
    }
  } else if(gameState === "koala") {
    koala.visible = true;
    txt_intro.visible = true;
    txt_instructions.visible = true;
    txt_end_hint.visible = true;
    next2.visible = true;

    if(mousePressedOver(next2)) {
      txt_intro.destroy();
      txt_instructions.destroy();
      txt_end_hint.destroy();
      next2.destroy();
      
      gameState = "round1";
    }
  } else if(gameState === "round1") {
    //in the last part, be sure to switch out all of the texts, for these 𝕥𝕖𝕩𝕥𝕤

    tree1.visible = true;
    tree2.visible = true;
    tree3.visible = true;
    tree4.visible = true;

    next3.visible = true;

    if(mouseIsOver(tree1)) {
      textSize(25);
      fill(rgb(127, 127, 127));
      text("See how this picture displays", windowWidth/5, windowHeight/6);
      text("2 different trees,", windowWidth/5, windowHeight/5);
      text("with the beautiful sky above.", windowWidth/5, windowHeight/4.3);
      text("This was taken", windowWidth/5, windowHeight/3.7);
      text("as a background picture,", windowWidth/5, windowHeight/3.3);
      text("there is no clear subject.", windowWidth/5, windowHeight/2.95);
    }

    if(mouseIsOver(tree2)) {
      textSize(25);
      fill(rgb(127, 127, 127));
      text("See how this picture displays", windowWidth/5, windowHeight/6);
      text("another tree.", windowWidth/5, windowHeight/5);
      text("This was taken", windowWidth/5, windowHeight/4.3);
      text("in a way that,", windowWidth/5, windowHeight/3.7);
      text("the tree looks like a darker shade", windowWidth/5, windowHeight/3.3);
      text("therefore, highlighting the sky", windowWidth/5, windowHeight/2.95);
    }

    if(mouseIsOver(tree3)) {
      textSize(25);
      fill(rgb(127, 127, 127));
      text("See how this picture displays", windowWidth/5, windowHeight/6);
      text("one more tree", windowWidth/5, windowHeight/5);
      text("with the a beautiful sunset.", windowWidth/5, windowHeight/4.3);
      text("This was taken", windowWidth/5, windowHeight/3.7);
      text("to highlight the sunset", windowWidth/5, windowHeight/3.3);
      text("the tree is there as a filler.", windowWidth/5, windowHeight/2.95);
      text("I call it a filler because,", windowWidth/5, windowHeight/2.68);
      text("just the sunset would look empty,", windowWidth/5, windowHeight/2.45);
      text("which is why you add another", windowWidth/5, windowHeight/2.25);
      text("object (like a tree)", windowWidth/5, windowHeight/2.09);
    }

    if(mouseIsOver(tree4)) {
      textSize(25);
      fill(rgb(127, 127, 127));
      text("See how this picture displays", windowWidth/5, windowHeight/6);
      text("another tree,", windowWidth/5, windowHeight/5);
      text("with the a colorful sunset.", windowWidth/5, windowHeight/4.3);
      text("This was taken", windowWidth/5, windowHeight/3.7);
      text("to highlight the sunset", windowWidth/5, windowHeight/3.3);
      text("the tree is there as another filler.", windowWidth/5, windowHeight/2.95);
      text("A note about fillers,", windowWidth/5, windowHeight/2.68);
      text("they shouldn't steal the show,", windowWidth/5, windowHeight/2.45);
      text("it should be clear what your", windowWidth/5, windowHeight/2.25);
      text("main focus is.", windowWidth/5, windowHeight/2.09);
    }

    if(mousePressedOver(next3)) {
      tree1.destroy();
      tree2.destroy();
      tree3.destroy();
      tree4.destroy();
      next3.destroy();
      gameState = "round2";
    }
  } else if(gameState === "round2") {

    fish1.visible = true;
    fish2.visible = true;
    fish3.visible = true;
    fish4.visible = true;

    next4.visible = true;

    if(mouseIsOver(fish1)) {
      textSize(25);
      fill(rgb(127, 127, 127));
      text("See how this picture displays", windowWidth/5, windowHeight/6);
      text("a fish in its fish tank.", windowWidth/5, windowHeight/5);
      text("The fins are fanned out,", windowWidth/5, windowHeight/4.3);
      text("with marbles & plants", windowWidth/5, windowHeight/3.7);
      text("as decorations", windowWidth/5, windowHeight/3.3);
    }

    if(mouseIsOver(fish2)) {
      textSize(25);
      fill(rgb(127, 127, 127));
      text("See how this picture displays", windowWidth/5, windowHeight/6);
      text("the same fish, but, instead,", windowWidth/5, windowHeight/5);
      text("it is sitting on a plant.", windowWidth/5, windowHeight/4.3);
      text("There is a reflection of the plants", windowWidth/5, windowHeight/3.7);
      text("in the background, to add", windowWidth/5, windowHeight/3.3);
      text("some more to the overall image.", windowWidth/5, windowHeight/2.95);
      text("Again, with the fins fanned out.", windowWidth/5, windowHeight/2.68);
    }

    if(mouseIsOver(fish3)) {
      textSize(25);
      fill(rgb(127, 127, 127));
      text("See how this picture displays", windowWidth/5, windowHeight/6);
      text("the same fish.", windowWidth/5, windowHeight/5);
      text("The colorful shades", windowWidth/5, windowHeight/4.3);
      text("on the fanned fins.", windowWidth/5, windowHeight/3.7);
      text("While the fish is resting", windowWidth/5, windowHeight/3.3);
      text("on the marbles.", windowWidth/5, windowHeight/2.95);
      text("with the plants", windowWidth/5, windowHeight/2.68);
      text("as fillers", windowWidth/5, windowHeight/2.46);
    }

    if(mouseIsOver(fish4)) {
      textSize(25);
      fill(rgb(127, 127, 127));
      text("See how this picture displays", windowWidth/5, windowHeight/6);
      text("the same Betta fish.", windowWidth/5, windowHeight/5);
      text("The fins are fanned.", windowWidth/5, windowHeight/4.3);
      text("In this photo, you can see all", windowWidth/5, windowHeight/3.7);
      text("the different shade of the fins.", windowWidth/5, windowHeight/3.3);
      text("Another thing to notice,", windowWidth/5, windowHeight/2.95);
      text("the background is blurred", windowWidth/5, windowHeight/2.68);
      text("to focus on the fish", windowWidth/5, windowHeight/2.46);
    }

    if(mousePressedOver(next4)) {
      fish1.destroy();
      fish2.destroy();
      fish3.destroy();
      fish4.destroy();
      next4.destroy();
      gameState = "round3";
    }
  } else if(gameState === "round3") {
    
    orange_flower.visible = true;
    pink1_flower.visible = true;
    pink2_flower.visible = true;
    red_flower.visible = true;
    white_flower.visible = true;
    yellow_flower.visible = true;

    next5.visible = true;

    if(mouseIsOver(orange_flower)) {
      textSize(25);
      fill(rgb(127, 127, 127));
      text("See how this picture displays", windowWidth/5, windowHeight/6);
      text("some orange flowers,", windowWidth/5, windowHeight/5);
      text("Looking up towards the sun.", windowWidth/5, windowHeight/4.3);
      text("With a focus on the flowers, while", windowWidth/5, windowHeight/3.7);
      text("giving a blurred look on the flowers", windowWidth/5, windowHeight/3.3);
    }

    if(mouseIsOver(pink1_flower)) {
      textSize(25);
      fill(rgb(127, 127, 127));
      text("See how this picture displays", windowWidth/5, windowHeight/6);
      text("a bush with pink flowers.", windowWidth/5, windowHeight/5);
      text("The 3-4 flowers are in focus,", windowWidth/5, windowHeight/4.3);
      text("while the leaves and the other", windowWidth/5, windowHeight/3.7);
      text("flowers are a beautiful background.", windowWidth/5, windowHeight/3.3);
    }

    if(mouseIsOver(pink2_flower)) {
      textSize(25);
      fill(rgb(127, 127, 127));
      text("See how this picture displays", windowWidth/5, windowHeight/6);
      text("a bush with similar pink flowers.", windowWidth/5, windowHeight/5);
      text("Now the overall bush is in focus,", windowWidth/5, windowHeight/4.3);
      text("with walls, and a wooden gate", windowWidth/5, windowHeight/3.7);
      text("as fillers to give an", windowWidth/5, windowHeight/3.3);
      text("interesting background.", windowWidth/5, windowHeight/2.95);
    }

    if(mouseIsOver(red_flower)) {
      textSize(25);
      fill(rgb(127, 127, 127));
      text("See how this picture displays", windowWidth/5, windowHeight/6);
      text("a bush different shaped leaves,", windowWidth/5, windowHeight/5);
      text("and spiny leaves, you wouldn't", windowWidth/5, windowHeight/4.3);
      text("normally see, every place you go.", windowWidth/5, windowHeight/3.7);
      text("Note:", windowWidth/5, windowHeight/3.3);
      text("You can find beauty, even in the", windowWidth/5, windowHeight/2.95);
      text("oddest and different things.", windowWidth/5, windowHeight/2.68);
    }

    if(mouseIsOver(white_flower)) {
      textSize(25);
      fill(rgb(127, 127, 127));
      text("See how this picture displays", windowWidth/5, windowHeight/6);
      text("white flowers with unique-shaped", windowWidth/5, windowHeight/5);
      text("petals, with green leaves", windowWidth/5, windowHeight/4.3);
      text("The gravel gives more of a", windowWidth/5, windowHeight/3.7);
      text("natural look, since its in", windowWidth/5, windowHeight/3.3);
      text("a natural-looking habitat.", windowWidth/5, windowHeight/2.95);
    }

    if(mouseIsOver(yellow_flower)) {
      textSize(25);
      fill(rgb(127, 127, 127));
      text("See how this picture displays", windowWidth/5, windowHeight/6);
      text("yellow flowers  with green leaves.", windowWidth/5, windowHeight/5);
      text("Something that is different than", windowWidth/5, windowHeight/4.3);
      text("most pictures, is that a couple", windowWidth/5, windowHeight/3.7);
      text("flowers have a look burnt-look.", windowWidth/5, windowHeight/3.3);
      text("This gives a unique twist.", windowWidth/5, windowHeight/2.95);
    }

    if(mousePressedOver(next5)) {
      orange_flower.destroy();
      pink1_flower.destroy();
      pink2_flower.destroy();
      red_flower.destroy();
      white_flower.destroy();
      yellow_flower.destroy();
      next5.destroy();
      gameState = "bad_round_explanation";
    }
  } else if(gameState === "bad_round_explanation") {
    
    next6.visible = true;
    txt_explanation1.visible = true;
    txt_explanation2.visible = true;

    if(mousePressedOver(next6)) {
      txt_explanation1.destroy();
      txt_explanation2.destroy();
      next6.destroy();
      gameState = "bad_round";
    }

  } else if(gameState === "bad_round") {
    
    flower_bag.visible = true;
    pink_sky.visible = true;
    pink_trees.visible = true;
    purp_flowers.visible = true;
    purp_ground.visible = true;
    sticker.visible = true;

    next7.visible = true;

    if(mouseIsOver(flower_bag)) {
      textSize(25);
      fill(rgb(127, 127, 127));
      text("What's wrong in this photo...", windowWidth/5, windowHeight/6);
      text("- there is a glare on the counter", windowWidth/5, windowHeight/5);
      text("- the Tulips are not in focus", windowWidth/5, windowHeight/4.3);
      text("- the bag is there for", windowWidth/5, windowHeight/3.7);
      text("basically no reason", windowWidth/5, windowHeight/3.3);
      text("- the brown cabinets behind the", windowWidth/5, windowHeight/2.95);
      text("counter are blurred", windowWidth/5, windowHeight/2.68);
      text("These are all things", windowWidth/5, windowHeight/2.46);
      text("you should avoid!", windowWidth/5, windowHeight/2.27);
    }

    if(mouseIsOver(pink_sky)) {
      textSize(25);
      fill(rgb(127, 127, 127));
      text("What's wrong in this photo...", windowWidth/5, windowHeight/6);
      text("- the flowers are not in focus", windowWidth/5, windowHeight/5);
      text("- the background is plain", windowWidth/5, windowHeight/4.3);
      text("- there is no clear focus", windowWidth/5, windowHeight/3.7);
      text("These are all things", windowWidth/5, windowHeight/3.3);
      text("you should avoid!", windowWidth/5, windowHeight/2.95);
    }

    if(mouseIsOver(pink_trees)) {
      textSize(25);
      fill(rgb(127, 127, 127));
      text("What's wrong in this photo...", windowWidth/5, windowHeight/6);
      text("- the pink flowers are", windowWidth/5, windowHeight/5);
      text("trying to be focused", windowWidth/5, windowHeight/4.3);
      text("- its hard to see the flowers", windowWidth/5, windowHeight/3.7);
      text("over the wall and trees", windowWidth/5, windowHeight/3.3);
      text("- the background goes too far back", windowWidth/5, windowHeight/2.95);
      text("- no clear focus/background", windowWidth/5, windowHeight/2.68);
      text("These are all things", windowWidth/5, windowHeight/2.46);
      text("you should avoid!", windowWidth/5, windowHeight/2.26);
    }

    if(mouseIsOver(purp_flowers)) {
      textSize(25);
      fill(rgb(127, 127, 127));
      text("What's wrong in this photo...", windowWidth/5, windowHeight/6);
      text("- its taken at night", windowWidth/5, windowHeight/5);
      text("- the leaves are blurred", windowWidth/5, windowHeight/4.3);
      text("- there's complete dark", windowWidth/5, windowHeight/3.7);
      text("around the flowers", windowWidth/5, windowHeight/3.3);
      text("- flash is turned-on in an attempt", windowWidth/5, windowHeight/2.95);
      text("to make the photo clearer", windowWidth/5, windowHeight/2.68);
      text("(it didn't not work out)", windowWidth/5, windowHeight/2.46);
      text("These are all things", windowWidth/5, windowHeight/2.26);
      text("you should avoid!", windowWidth/5, windowHeight/2.1);
    }

    if(mouseIsOver(purp_ground)) {
      textSize(25);
      fill(rgb(127, 127, 127));
      text("What's wrong in this photo...", windowWidth/5, windowHeight/6);
      text("- the purple flowers, green", windowWidth/5, windowHeight/5);
      text("plant body, yellow petals on the", windowWidth/5, windowHeight/4.3);
      text("ground, and the gravel... all", windowWidth/5, windowHeight/3.7);
      text("mix together, and it is not clear", windowWidth/5, windowHeight/3.3);
      text("what is in focus, and what is", windowWidth/5, windowHeight/2.95);
      text("- Whatever the focus should", windowWidth/5, windowHeight/2.68);
      text("be, it is blurred", windowWidth/5, windowHeight/2.46);
      text("These are all things", windowWidth/5, windowHeight/2.26);
      text("you should avoid!", windowWidth/5, windowHeight/2.1);
    }

    if(mouseIsOver(sticker)) {
      textSize(25);
      fill(rgb(127, 127, 127));
      text("What's wrong in this photo...", windowWidth/5, windowHeight/6);
      text("- the picture is sideways", windowWidth/5, windowHeight/5);
      text("- the background is just there,", windowWidth/5, windowHeight/4.3);
      text("its not doing anything, its not", windowWidth/5, windowHeight/3.7);
      text("adding to the photo", windowWidth/5, windowHeight/3.3);
      text("- there is no purpose to this photo", windowWidth/5, windowHeight/2.95);
      text("- the object itself is beautiful, if the", windowWidth/5, windowHeight/2.68);
      text("photo was taken in a better way", windowWidth/5, windowHeight/2.46);
      text("it would have worked out", windowWidth/5, windowHeight/2.26);
      text("These are all things", windowWidth/5, windowHeight/2.1);
      text("you should avoid!", windowWidth/5, windowHeight/1.96);
    }

    if(mousePressedOver(next7)) {
      flower_bag.destroy();
      pink_sky.destroy();
      pink_trees.destroy();
      purp_flowers.destroy();
      purp_ground.destroy();
      sticker.destroy();
      next7.destroy();
      gameState = "end";
    }
  } else if(gameState === "end") {
    txt_end1.visible = true;
    txt_end2.visible = true;
    txt_end3.visible = true;

    web_button.visible = true;

    if(mousePressedOver(web_button)) {
      open("https://dhruvikamble.github.io/Photograph-web-for-game/");

      txt_end1.destroy();
      txt_end2.destroy();
      txt_end3.destroy();
      web_button.destroy();

      gameState = "class_game";
    }
  } else if(gameState = "class_game") {
    game_button.visible = true;
    txt_surprise.visible = true;

    if(mousePressedOver(game_button)) {
      game_button.destroy();
      txt_surprise.destroy();
  
      txt_enjoy.visible = true;

      open("https://dhruvikamble.github.io/Quest-of-the-Champions/");
    }
  }
}