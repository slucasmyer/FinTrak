function tableCreate() {
  var body = document.body;
  var tbl = document.createElement('table');
  tbl.style.width = '100%';
  tbl.setAttribute('border', '5');
  var tbdy = document.createElement('tbody');
  var thd = document.createElement('thead').insertRow();
  for (var i = 0; i < 3; i++) {
    var tr = document.createElement('tr');
    for (var j = 0; j < 4; j++) {
      if (i == 0) {
        var headi = document.createTextNode('header '+(j+1));
        thd.insertCell().appendChild(headi);
      }
      var td = document.createElement('td');
      td.appendChild(document.createTextNode((i+1)+', '+(j+1)));
      tr.appendChild(td);
    }
    tbdy.appendChild(tr);
  }
  tbl.appendChild(thd);
  tbl.appendChild(tbdy);
  body.appendChild(tbl);
}

function buttonCreate () {
  var body = document.body;
  
  body.appendChild(document.createElement('br'));
  
  var up = document.createElement('button');
  up.id = 'up'
  up.innerText = 'Up';
  body.appendChild(up);
  
  var down = document.createElement('button');
  down.id = 'down'
  down.innerText = 'Down';
  body.appendChild(down);
  
  body.appendChild(document.createElement('br'));
  
  var left = document.createElement('button');
  left.id = 'left'
  left.innerText = 'Left';
  body.appendChild(left);
  
  var right = document.createElement('button');
  right.id = 'right'
  right.innerText = 'Right';
  body.appendChild(right);
  
  body.appendChild(document.createElement('br'));
  
  var mark = document.createElement('button');
  mark.id = 'mark'
  mark.innerText = 'Mark';
  body.appendChild(mark);
  
}

function upClick (event, curCell) {
	if (curCell[0] > 0) {
  	curCell[0] = curCell[0] - 1;
    console.log(curCell);
    event.stopPropagation();
    boldCell(curCell);
  }
}

function downClick (event, current) {
  
}

function leftClick (event, current) {
  
}

function rightClick (event, current) {
  
}

function markClick (event, current) {
  
}

function boldCell(current) {
  mybody = document.getElementsByTagName('body')[0];
  mytable = mybody.getElementsByTagName('table')[0];
  mytablebody = mytable.getElementsByTagName('tbody')[0];
  myrow = mytablebody.getElementsByTagName('tr')[current[0]];
  mycel = myrow.getElementsByTagName('td')[current[1]];
  mycel.setAttribute('border', '25');
  console.log(mycel.childNodes[0].data);
}


tableCreate();
buttonCreate();
var curCell = [2, 0];
document.addEventListener('DOMContentLoaded', boldCell(curCell));
document.getElementById('up').addEventListener('click', upClick);
document.getElementById('down').addEventListener('click', downClick);
document.getElementById('left').addEventListener('click', leftClick);
document.getElementById('right').addEventListener('click', rightClick);
document.getElementById('mark').addEventListener('click', markClick(curCell));

