import sys
input = sys.stdin.readline
n, m = map(int, input().split())
arr = list(map(int, input().split()))
pfsum = [0] * (n+1)
mod_count = [0] * m

answer = 0
mod_count[0] += 1
for i in range(1, n+1):
    pfsum[i] = (pfsum[i-1] + arr[i-1]) %m
    mod_count[pfsum[i]] +=1


for i in mod_count:
    if(i > 0):
        answer += i * (i-1) /2

print(int(answer))