function makeBuffer(){
    var strBuffer = "";

    return {
        add: function(value){
            strBuffer += value;
        },

        print: function(){
            return strBuffer;
        },

        clear: function(){
            strBuffer = "";
        }
    }
}

var buffer = makeBuffer();

buffer.add( 'JavaScript');
buffer.add( ' Вчити');
buffer.add( ' Потрібно!');

console.log(buffer.print());

buffer.clear();

buffer.add(0);
buffer.add(1);
buffer.add(0);

console.log (buffer.print()); 