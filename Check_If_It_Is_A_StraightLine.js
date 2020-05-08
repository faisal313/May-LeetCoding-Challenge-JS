/*You are given an array coordinates, coordinates[i] = [x, y], where [x, y] represents the coordinate of a point. 
Check if these points make a straight line in the XY plane.
Example 1:

Input: coordinates = [[1,2],[2,3],[3,4],[4,5],[5,6],[6,7]]
Output: true

Example 2:

Input: coordinates = [[1,1],[2,2],[3,4],[4,5],[5,6],[7,7]]
Output: false
 
Constraints:
2 <= coordinates.length <= 1000
coordinates[i].length == 2
-10^4 <= coordinates[i][0], coordinates[i][1] <= 10^4
coordinates contains no duplicate point.*/


var checkStraightLine = function(coordinates) {
        count = true
        if(coordinates.length === 2){
            count = true
        }
        else{
        const [x1,y1] = coordinates[0]
        const [x2,y2] = coordinates[1]
        slope = (y2-y1)/(x2-x1)

        for(var i = 1 ; i<coordinates.length - 1;i+=1){
           const [x1,y1] = coordinates[i]
           const [x2,y2] = coordinates[i+1]
        s = (y2-y1)/(x2-x1)
            if(slope === s){
                count = true
            }
            else{
                count = false
                break
            }
        }
        }
        return count
};