import sys

n = int(sys.stdin.readline())
normalmap = [list(sys.stdin.readline().strip()) for _ in range(n)]
dysmap = []
for row in normalmap:
  dysmap.append(['R' if c == 'G' else c for c in row])

visited = [[False] * n for _ in range(n)]
dysvisited = [[False] * n for _ in range(n)]

dx = [1, -1, 0, 0]
dy = [0, 0, 1, -1]

normalsection = 0
dyssection = 0

def normaldfs(x, y):
  visited[x][y] = True
  for i in range(4):
    nx = x + dx[i]
    ny = y + dy[i]
    if 0 <= nx < n and 0 <= ny < n and not visited[nx][ny] and normalmap[nx][ny] == normalmap[x][y]:
      normaldfs(nx, ny)

def dysdfs(x, y):
  dysvisited[x][y] = True
  for i in range(4):
    nx = x + dx[i]
    ny = y + dy[i]
    if 0 <= nx < n and 0 <= ny < n and not dysvisited[nx][ny] and dysmap[nx][ny] == dysmap[x][y]:
      dysdfs(nx, ny)

for i in range(n):
  for j in range(n):
    if not visited[i][j]:
      normaldfs(i, j)
      normalsection += 1
    if not dysvisited[i][j]:
      dysdfs(i, j)
      dyssection += 1




print(normalsection, dyssection)

