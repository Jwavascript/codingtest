import sys
input = sys.stdin.readline

n, m = map(int, input().split())
arr = [list(map(int, input().split())) for _ in range(n)]


pf = [[0] * (m + 1) for _ in range(n)]
for i in range(n):
    for j in range(m):
        pf[i][j + 1] = pf[i][j] + arr[i][j]


k = int(input())
for _ in range(k):
    i, j, x, y = map(int, input().split())
    total = 0
    for row in range(i - 1, x):
        total += pf[row][y] - pf[row][j - 1]
    print(total)