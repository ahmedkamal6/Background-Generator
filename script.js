let res = document.getElementById('result');
let add = document.getElementById('add');
let continer = document.querySelector('.container');
let ground = document.getElementById('background');
let copy = document.getElementById('copy');
let direction = document.getElementById('direction');
let degree = document.getElementById('degree');
let linear = document.getElementById('linear');
let radial = document.getElementById('radial');
let linearTools = document.getElementById('linear-tools');
let count = 0;
let num = 0;
let p ="x";
let colors = [];
colors[0] = '#000000';
colors[1] = '#000000';
changeBackground();

add.onclick = () => {
    if(num == 18)
        return;
    num++;
    let div = document.createElement('div');
    let newColor = document.createElement('input');
    let btnRem = document.createElement('button');
    div.id = count;
    div.classList.add('faded-out');
    div.style.transition = "opacity 1000ms";
    div.style.willChange = "opacity"
    btnRem.textContent = 'x';
    btnRem.onclick = function removeColor() {
        if (num < 3)
            return;
        num--;
        document.getElementById(div.id).remove();
        colors[div.id] = '1';
        changeBackground();
    }
    newColor.type = 'color';
    newColor.draggable="true";
    newColor.title = count;
    newColor.style.backgroundColor = '#000000';
    colors[newColor.title] = '#000000';
    changeBackground(); 
    newColor.style.backgroundColor = newColor.value;
    newColor.oninput = function changeColor() {
        newColor.style.backgroundColor = newColor.value;
        colors[newColor.title] = newColor.value;
        changeBackground();
    }
    div.appendChild(newColor);
    div.appendChild(btnRem);
    continer.appendChild(div);
    requestAnimationFrame(() => {
        div.classList.remove("faded-out")
      })
    count++;
    
}
add.click(); add.click(); add.click();

function changeBackground() {
    
    console.log(colors);
    let s = "";
    colors.forEach((item, index) => {
        if (item == '1')
            s += ''
        else {
            s += item;
        }
    })
    let s2 = '';
    for(let i = 0 ;i < s.length; i++){
        if(i % 7 == 0 && i != 0)
            s2 += ',';
        s2 += s[i]; 
    }
    s = s2;
    console.log(s);
    if(linear.checked){
        ground.style.background = "linear-gradient(to "+direction.value+"," + s + ")";
        res.value = "linear-gradient(to "+direction.value+"," + s + ")";
    }
    if(radial.checked){
        ground.style.background = "radial-gradient(" + s + ")";
        res.value = "radial-gradient("+ s + ")";
    }
    p = s;
}

copy.onclick = ()=>{
    res.select();
    res.setSelectionRange(0, 99999); // For mobile devices

  // Copy the text inside the text field
    navigator.clipboard.writeText(res.value);
}

direction.oninput = function(){
    ground.style.background = "linear-gradient(to "+direction.value+"," + p + ")";
    res.value = "linear-gradient(to "+direction.value+"," + p + ")";
    degree.value = '20';
}
degree.oninput = function(){
    ground.style.background = "linear-gradient("+degree.value+"deg ," + p + ")";
    res.value = "linear-gradient("+degree.value+"deg ," + p + ")";
    console.log(res.value)
}
linear.onclick = ()=>{
    ground.style.background = "linear-gradient(to "+direction.value+"," + p + ")";
    res.value = "linear-gradient(to "+direction.value+"," + p + ")";
    console.log('linear')
        linearTools.style.display = 'block';
}
radial.onclick = ()=>{
    ground.style.background = "radial-gradient(" + p + ")";
    res.value = "radial-gradient("+ p + ")";
    console.log('radial')
        linearTools.style.display = 'none';
}
