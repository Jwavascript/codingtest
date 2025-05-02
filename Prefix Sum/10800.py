import sys
input = sys.stdin.readline
n = int(input())
balls = []

for i in range(n):
    color, size = map(int, input().split())
    balls.append((size, color, i))


balls.sort()

result = [0] * n
color_sum = [0] * 200001
total= 0
j = 0

for i in range(n):
    size, color, idx = balls[i]

    while(j<n and balls[j][0] < size):
        s, c, _ = balls[j]
        total += s
        color_sum[c] += s
        j+=1

    result[idx] = total-color_sum[color]

for res in result:
    print(res)