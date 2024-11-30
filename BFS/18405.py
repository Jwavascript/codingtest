from collections import deque
import sys
input = sys.stdin.readline

n, k = map(int, input().split())
board = [list(map(int, input().split())) for _ in range(n)]
s, target_x, target_y = map(int, input().split())

# 초기 바이러스 정보를 수집합니다.
virus_info = []
for i in range(n):
    for j in range(n):
        if board[i][j] != 0:
            virus_info.append((board[i][j], 0, i, j))  # (바이러스 번호, 시간, x좌표, y좌표)

# 번호가 낮은 순서대로 정렬하고 큐에 넣습니다.
virus_info.sort()
queue = deque(virus_info)

# 이동 방향 (상, 하, 좌, 우)
dx = [-1, 1, 0, 0]
dy = [0, 0, -1, 1]

# BFS 수행
while queue:
    virus, second, x, y = queue.popleft()

    # S초가 지나면 중지
    if second == s:
        break

    # 현재 노드에서 상하좌우로 전파
    for i in range(4):
        nx, ny = x + dx[i], y + dy[i]
        # 시험관 범위 안에 있고, 아직 방문하지 않은 위치라면
        if 0 <= nx < n and 0 <= ny < n and board[nx][ny] == 0:
            board[nx][ny] = virus
            queue.append((virus, second + 1, nx, ny))

# S초 후에 (X, Y)에 존재하는 바이러스의 종류 출력
print(board[target_x - 1][target_y - 1])
