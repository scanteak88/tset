/**
 * @param {number[][]} grid
 * @return {number}
 */

// 給定一個填充有非負數的 m x n 網格，找到一條從左上角到右下角的路徑，該路徑最小化沿其路徑的所有數字的總和。
var minPathSum = function(grid) {
    let row = grid.length,
        col = grid[0].length

    // 計算邊界
    for (let i = 1; i < row; i++)
    // 計算第一列
        grid[i][0] += grid[i - 1][0]

    for (let j = 1; j < col; j++)
    // 計算第一行
        grid[0][j] += grid[0][j - 1]

    for (let i = 1; i < row; i++)
        for (let j = 1; j < col; j++)
            grid[i][j] += Math.min(grid[i - 1][j], grid[i][j - 1])

    // 回傳回去
    return grid[row - 1][col - 1]
};