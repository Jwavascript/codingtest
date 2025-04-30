import sys

input = sys.stdin.read
data = list(map(int, input().split()))

n = data[0]
s = data[1]
arr = data[2:]

start = 0
end = 0
total = 0
min_len = n + 1

while True:
    if total >= s:
        min_len = min(min_len, end - start)
        total -= arr[start]
        start += 1
    elif end == n:
        break
    else:
        total += arr[end]
        end += 1

print(0 if min_len == n + 1 else min_len)