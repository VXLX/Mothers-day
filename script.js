
const messages = [

`Hello Mumma Bug.

It’s me.

Adaline.`,

`The cutest babie you've ever seen. 

like ever.`,

`I know that might sound a little strange…

because right now I’m still very small.

Too small to write letters.`,

`Too small to explain big feelings.

So I asked someone to help me send you this message.

From the future.`,

`Right now my world is very simple.

Warm cuddles.
Us playing.
You laughing.
Me laughing.
Your voice.
And the way you look at me.`,

`I don’t understand everything yet.

But I understand you.`,

`When I wobble and fall…

you’re the one who catches me.`,

`When I giggle…

you’re usually the reason why.`,

`And when I feel safe and warm…

it’s because you’re there.`,

`One day I’ll grow up.

I’ll learn big words and big ideas.

I’ll run and ask a million questions.`,

`But right now my whole world is small enough

to fit in your arms.

And that’s my favourite place to be.`,

`There will be many days ahead.

First days at school.
Adventures.
Questions.`,

`But before all of that…

there was this time.

When I was tiny.`,

`And you were already my hero.

My Mumma Bug.`,

`Thank you for loving me
from the very beginning.

Love,

Adaline
(also known as Cheeky-bum) ❤️`
]

let index = 0
const messageElement = document.getElementById("message")
const nextBtn = document.getElementById("nextBtn")
const photo = document.getElementById("photo")
const footer = document.getElementById("footer")
const messageBox = document.getElementById("messageBox")

function typeWriter(text, i = 0) {
if(i < text.length){
messageElement.innerHTML += text.charAt(i)
setTimeout(() => typeWriter(text, i + 1), 35)
}
}

function showMessage(){
messageElement.innerHTML = ""
typeWriter(messages[index])
}

nextBtn.addEventListener("click", () => {

messageBox.style.opacity = 0

setTimeout(()=>{

index++

if(index < messages.length){

showMessage()
messageBox.style.opacity = 1

}else{

nextBtn.style.display = "none"
photo.style.opacity = 1
footer.innerText = "Message sent from the future."
triggerSparkles()

}

},700)

})

showMessage()

/* ---------- STAR BACKGROUND ---------- */

const canvas = document.getElementById("stars")
const ctx = canvas.getContext("2d")

canvas.width = window.innerWidth
canvas.height = window.innerHeight

let stars = []

for(let i=0;i<120;i++){
stars.push({
x:Math.random()*canvas.width,
y:Math.random()*canvas.height,
size:Math.random()*2,
speed:Math.random()*0.5+0.2
})
}

let sparkles = []

function animate(){

ctx.clearRect(0,0,canvas.width,canvas.height)

ctx.fillStyle="white"

stars.forEach(star=>{

ctx.beginPath()
ctx.arc(star.x,star.y,star.size,0,Math.PI*2)
ctx.fill()

star.y += star.speed

if(star.y > canvas.height){
star.y = 0
star.x = Math.random()*canvas.width
}

})

sparkles.forEach((s,i)=>{

ctx.beginPath()
ctx.arc(s.x,s.y,s.size,0,Math.PI*2)
ctx.fill()

s.x += s.vx
s.y += s.vy
s.size *= 0.96

if(s.size < 0.3){
sparkles.splice(i,1)
}

})

requestAnimationFrame(animate)

}

animate()

/* ---------- SPARKLE BURST ---------- */

function triggerSparkles(){

for(let i=0;i<80;i++){

sparkles.push({
x:canvas.width/2,
y:canvas.height/2,
size:Math.random()*3+1,
vx:(Math.random()-0.5)*4,
vy:(Math.random()-0.5)*4
})

}

}
