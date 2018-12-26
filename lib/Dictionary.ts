var _ = require("lodash");

interface KeyValue<TKey, TValue> {
  key: TKey;
  value: TValue;
}

export class Dictionary<TKey, TValue> {
  private items: KeyValue<TKey, TValue>[];

  constructor() {
    this.items = [];
  }

  add(key: TKey, value: TValue): number {
    this.items.push({
      key: key,
      value: value
    });
    return this.items.length;
  }

  get(key: TKey): KeyValue<TKey, TValue> {
    return _.find(this.items, { key: key });
  }
}
