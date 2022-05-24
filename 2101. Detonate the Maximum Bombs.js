/**
 * @param {number[][]} bombs
 * @return {number}
 */


 var maximumDetonation = function(bombs) {
    let graph = {};

    for(let i=0;i<bombs.length;i++){
        let x = bombs[i][0];
        let y = bombs[i][1];
        let r = bombs[i][2];
        
        for(let j=0;j<bombs.length;j++){
        
        if(i!==j){
            let x2 = bombs[j][0];
            let y2 = bombs[j][1];
            let r2 = bombs[j][2];
            
            let distance = Math.sqrt(Math.pow(x2-x,2) + Math.pow(y2-y,2));
            if(graph[i]===undefined)
                graph[i] = new Set();
            if(distance <= r){
                graph[i].add(j);
            }
        } 
        }
    }    
    let depth = 0;
    for(let i=0;i<bombs.length;i++){
        let visited = new Set();
        depth = Math.max(depth,max(i,visited,graph));
    }
    return depth;
};

    //try to see the max distance we can reach with exploding each bomb
    
    let max = function(bomb,visited,graph){
        if(visited.has(bomb))return 0;
        visited.add(bomb);
        if(bomb === undefined)
            return 0;
        if(graph[bomb]===undefined || graph[bomb].size===0)
            return 1;

        let out = 1;
        for(const i of graph[bomb]){
            out = out+max(i,visited,graph);
        }
        return out;
    }
// to test
//    console.log(maximumDetonation( [[1,2,3],[2,3,1],[3,4,2],[4,5,3],[5,6,4]]));
