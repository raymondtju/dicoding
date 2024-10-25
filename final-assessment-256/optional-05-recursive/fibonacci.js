function fibonacci(n) {
  const fibSequence = [0, 1];
  for (let i = 2; i <= n; i++) {
    fibSequence.push(fibSequence[i - 1] + fibSequence[i - 2]);
  }
  return fibSequence.slice(0, n + 1);
}

// Jangan hapus kode di bawah ini!
export default fibonacci;
