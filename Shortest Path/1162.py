import sys
from queue import PriorityQueue

input = sys.stdin.readline
n, m, k = map(int, input().split())
graph = [[] for _ in range(n + 1)]

# 그래프 입력 받기
for _ in range(m):
    a, b, time = map(int, input().split())
    graph[a].append((b, time))
    graph[b].append((a, time))

# 거리 배열 초기화 (도시 번호, 포장 횟수)
dist = [[float('inf')] * (k + 1) for _ in range(n + 1)]
dist[1][0] = 0  # 시작점 초기화

# 우선순위 큐 (거리, 현재 도시, 포장 횟수)
que = PriorityQueue()
que.put((0, 1, 0))

while not que.empty():
    d, node, paved = que.get()
    
    # 현재 노드에 도착할 때 포장 횟수가 동일하면서 거리가 더 큰 경우 무시
    if dist[node][paved] < d:
        continue
    
    # 인접 노드 탐색
    for next_node, time in graph[node]:
        # 포장하지 않는 경우
        cost = d + time
        if cost < dist[next_node][paved]:
            dist[next_node][paved] = cost
            que.put((cost, next_node, paved))
        
        # 포장하는 경우 (포장 횟수가 k보다 작은 경우만)
        if paved + 1 <= k and d < dist[next_node][paved + 1]:
            dist[next_node][paved + 1] = d
            que.put((d, next_node, paved + 1))

# N번 도시까지의 최소 시간 구하기
result = min(dist[n])
print(result if result != float('inf') else -1)
