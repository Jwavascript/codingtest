import sys
import copy

n, m = map(int, sys.stdin.readline().split())
labmap = [list(map(int, sys.stdin.readline().strip().split())) for _ in range(n)]


dx = [1, -1, 0, 0]
dy = [0, 0, 1, -1]

def virusdfs(x, y, wallmap):
  for i in range(4):
    nx = x + dx[i]
    ny = y + dy[i]
    if 0 <= nx < n and 0 <= ny < m and wallmap[nx][ny] == 0:
      wallmap[nx][ny] = 2
      virusdfs(nx, ny, wallmap)


def countsofarea(wallmap):
  count = 0
  for i in range(n):
    for j in range(m):
      if wallmap[i][j] == 0:
        count+= 1

  return count

maxarea = 0
def dfs(count):
  global maxarea
  if count == 3:
    wallmap = copy.deepcopy(labmap)
    for i in range(n):
      for j in range(m):
        if wallmap[i][j] == 2:
          virusdfs(i, j, wallmap)
    maxarea = max(maxarea, countsofarea(wallmap))
    return
  for i in range(n):
    for j in range(m):
      if labmap[i][j] == 0:
        labmap[i][j] = 1
        dfs(count+1)
        labmap[i][j] = 0

dfs(0)
print(maxarea)
  