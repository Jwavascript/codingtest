import sys
from collections import deque

input = sys.stdin.readline
n = int(input())

townmap = []
townheight = []
totalk = 0
px, py = 0, 0

# 지도 입력
for i in range(n):
    row = list(input().strip())
    townmap.append(row)
    for j in range(n):
        if row[j] == 'P':
            px, py = i, j
        elif row[j] == 'K':
            totalk += 1

# 고도 정보 입력
for _ in range(n):
    row = list(map(int, input().split()))
    townheight.append(row)

# 고도 리스트 생성 및 정렬
heights = sorted(set(sum(townheight, [])))

# bfs 함수 정의
def bfs(min_h, max_h):
    if not (min_h <= townheight[px][py] <= max_h):
        return False

    visited = [[False]*n for _ in range(n)]
    q = deque()
    q.append((px, py))
    visited[px][py] = True
    found = 0

    dx = [1, -1, 0, 0, 1, 1, -1, -1]
    dy = [0, 0, 1, -1, 1, -1, 1, -1]

    while q:
        x, y = q.popleft()
        if townmap[x][y] == 'K':
            found += 1
        for i in range(8):
            nx = x + dx[i]
            ny = y + dy[i]
            if 0 <= nx < n and 0 <= ny < n and not visited[nx][ny]:
                h = townheight[nx][ny]
                if min_h <= h <= max_h:
                    visited[nx][ny] = True
                    q.append((nx, ny))

    return found == totalk

# 투 포인터로 최소 고도차 찾기
min_diff = float('inf')
left = 0
right = 0

while left <= right and right < len(heights):
    min_h = heights[left]
    max_h = heights[right]

    if bfs(min_h, max_h):
        min_diff = min(min_diff, max_h - min_h)
        left += 1  # 더 좁은 범위를 시도
    else:
        right += 1  # 더 넓은 범위를 시도

print(min_diff)
