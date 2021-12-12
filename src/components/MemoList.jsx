import React from 'react';
import { View, Text, StyleSheet } from 'react-native';
import { Feather } from '@expo/vector-icons';

export default function MemoList() {
  return (
    <View>
      {/* リスト内の一個 */}
      <View style={styles.memoListItem}>
        {/* タイトル */}
        <View>
          <Text style={styles.memoListItemTitle}>買い物リスト</Text>
          <Text style={styles.memoListItemDate}>2021年12月5日 18:00</Text>
        </View>
        {/* Xボタン */}
        <View>
          <Feather name="x" size={16} color="#B0B0B0" />
        </View>
      </View>

      {/* リスト内の一個 */}
      <View style={styles.memoListItem}>
        {/* タイトル */}
        <View>
          <Text style={styles.memoListItemTitle}>買い物リスト</Text>
          <Text style={styles.memoListItemDate}>2021年12月5日 18:00</Text>
        </View>
        {/* Xボタン */}
        <View>
          <Feather name="x" size={16} color="#B0B0B0" />
        </View>
      </View>

      {/* リスト内の一個 */}
      <View style={styles.memoListItem}>
        {/* タイトル */}
        <View>
          <Text style={styles.memoListItemTitle}>買い物リスト</Text>
          <Text style={styles.memoListItemDate}>2021年12月5日 18:00</Text>
        </View>
        {/* Xボタン */}
        <View>
          <Feather name="x" size={16} color="#B0B0B0" />
        </View>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  memoListItem: {
    backgroundColor: '#ffffff',
    flexDirection: 'row',
    justifyContent: 'space-between',
    paddingVertical: 16,
    paddingHorizontal: 19,
    alignItems: 'center',
    borderBottomWidth: 1,
    borderColor: 'rgba(0, 0, 0, 0.15)',
  },
  memoListItemTitle: {
    fontSize: 16,
    lineHeight: 32,
  },
  memoListItemDate: {
    fontSize: 12,
    lineHeight: 16,
    color: '#848484',
  },
});
