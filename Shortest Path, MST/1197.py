import sys
sys.setrecursionlimit(100000)
input = sys.stdin.readline

v, e = map(int, input().split())
edges = []


graph = [[] for _ in range(v+1)]

for _ in range(e):
    a, b, c = map(int, input().split())
    edges.append((c, a, b))

edges.sort()

# Union- Find 자료구조
parent = [i for i in range(v+1)]

def find(x):
    if parent[x] != x:
        parent[x] = find(parent[x])
    return parent[x]

def union(a, b):
    a = find(a)
    b = find(b)
    if a != b:
        parent[b] = a
        return True
    return False    


total_weight = 0
for c, a, b in edges:
    if union(a, b):         # 사이클이 아니면
        total_weight += c


print(total_weight)

