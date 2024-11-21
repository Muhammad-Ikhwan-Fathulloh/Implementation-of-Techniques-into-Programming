import numpy as np

# Parameter
alpha = 0.1  # Learning rate
gamma = 0.9  # Discount factor
epsilon = 0.1  # Exploration rate
states = [0, 1, 2, 3]  # Posisi
actions = [0, 1]  # 0: kiri, 1: kanan
rewards = [0, 0, 0, 1]  # Reward untuk setiap posisi
q_table = np.zeros((len(states), len(actions)))

# Episode pelatihan
for episode in range(1000):
    state = 0  # Mulai dari posisi awal
    while state != 3:  # Sampai mencapai tujuan
        if np.random.random() < epsilon:
            action = np.random.choice(actions)  # Eksplorasi
        else:
            action = np.argmax(q_table[state])  # Eksploitasi

        next_state = state + (1 if action == 1 else -1)
        next_state = max(0, min(3, next_state))  # Batas grid

        # Perbarui Q-table
        q_table[state, action] = q_table[state, action] + alpha * (
            rewards[next_state] + gamma * max(q_table[next_state]) - q_table[state, action]
        )
        state = next_state

print("Q-Table:")
print(q_table)