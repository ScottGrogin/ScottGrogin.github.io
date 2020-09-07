
let yam

function preload(){
  yam = loadStrings('gram.yaml')
}

function setup() {
  createCanvas(0, 0);
  let textArea = createElement('textarea')
  textArea.value('Title\n------')
  textArea.parent('wrap')
  textArea.style('width','100%')
  textArea.style('height','80vh')
  textArea.style('resize','none')
  let grmr = new RiGrammar(yam.join('\n'))
  let button = createButton('Generate Line')
  button.parent('wrap')
  button.mousePressed(()=>{
    textArea.value(textArea.value()+'\n'+grmr.expand())
  })
}


/*
Cheater Cheater Generative Poem Eater
------

the kiss singe
the chest desire twist a engineer spirit
everyone wept around a marriage register
a height smoke you mine writhe regarding everything



their kisses singe.
desire twists your spirit,
smoke rises, you writhe.
everyone weeps 
around a marriage registrar*/