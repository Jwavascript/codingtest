import sys
import heapq
input = sys.stdin.readline
V,E = map(int, input().split())
K = int(input())
graph = [[] for _ in range(V+1)]
INF = float('inf')
distance = [INF] * (V+1)

for _ in range(E):
  u, v, w = map(int, input().split())
  graph[u].append((v, w))

heap = []
distance[K] = 0
heapq.heappush(heap, (0, K))

while heap:
  dist, now = heapq.heappop(heap)
  if distance[now] < dist:
    continue
  for next_node, weight in graph[now]:
    cost = dist + weight
    if cost < distance[next_node]:
      distance[next_node] = cost
      heapq.heappush(heap, (cost, next_node))

for i in range(1, V+1):
  print(distance[i] if distance[i] != INF else 'INF')