export default (function () {
    function checkPoint(arr) {
        // if (path.some(coordinate => arr[0] === coordinate[0] && arr[1] === coordinate[1])) return false;
        return arr[0] >= 0 && arr[0] <= 7 && arr[1] >= 0 && arr[1] <= 7;
    }

    function getPoints(point) {
        let x = point[0];
        let y = point[1];
    
        return [
            [x + 2, y + 1],
            [x + 2, y - 1],
            [x - 2, y + 1],
            [x - 2, y - 1],
            [x + 1, y + 2],
            [x + 1, y - 2],
            [x - 1, y + 2],
            [x - 1, y - 2]
        ]
        .filter((coordinate) => checkPoint(coordinate))
    }

  function findPath(start, end) {
    let queue = [{point: start, path: [start]}]

    while (queue.length !== 0) {
        const currentPoint = queue[0]["point"];
        const currentPath = queue[0]["path"];

        let points = getPoints(currentPoint);
        points = points.map((point) => {
            let newPath = currentPath.slice();
            newPath.push(point);

            const obj = {
                point, 
                path: newPath
            }

            return obj;
        });

        let shortestPath = null;
        points.forEach((obj) => {
            if (JSON.stringify(obj["point"]) == JSON.stringify(end)) {
                shortestPath = obj["path"];
            }
        })
        if (shortestPath) return shortestPath;

        queue.push(...points);
        queue.shift();
    }

    return null;
  }

  return {
    findPath
  }
})()
