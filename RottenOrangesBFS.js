
var totalfreshoranges = function(q,grid){
    var total = 0;
    for(var i=0;i<grid.length;i++){
        for(var j =0;j<grid[i].length;j++){
            if (grid[i][j] == 2){
                q.push([i,j]);
            }else if(grid[i][j] == 1){
                total++;
            }
        }
    }
    return total;
}

var orangesRotting = function(grid) {
    var q = []
    var totalfresh = totalfreshoranges(q,grid);
    if(totalfresh==0)return 0;
    var orangesturned = 0;
    var time = 0;

    while(q.length > 0){

        var size  = q.length;
        while(size >0){
        let x = [-1,0,1,0];
        let y = [0,1,0,-1];
        let popedelem = q.shift();
        for(var k =0 ;k <4;k++){
            var dx = popedelem[0]+x[k];
            var dy = popedelem[1]+y[k];
            if(dx >=0 && dy>=0 && dx<grid.length && dy <grid[0].length && grid[dx][dy]==1){
                grid[dx][dy] = 2;
                orangesturned++;
                q.push([dx,dy]);
            }
            if(orangesturned == totalfresh)
                return time+1;
        }
        size--;
    }
        time++;

    }

    return -1;
};

//To Test
// console.log(orangesRotting([[2,1,1],[1,1,0],[0,1,1]]));  output: 4
// console.log(orangesRotting( [[2,1,1],[0,1,1],[1,0,1]])); output: -1
// console.log(orangesRotting([[0,2]]));                    output: 0
